# Softcredible — VPS Server Setup & Configuration Guide

Complete from-scratch guide for preparing the VPS, installing Docker, and
deploying Softcredible (and future projects) on a single Ubuntu server.

**Reference server (deployed):** `root@217.216.110.233` — Ubuntu 24.04.4 LTS, 6 CPU / 11 GiB RAM / 193 GB disk.

---

## 1. Server requirements

- Ubuntu 22.04 or 24.04 LTS (this guide uses 24.04)
- Root or sudo access via SSH
- Ports open: **22** (SSH), **80** (HTTP), **443** (HTTPS)

---

## 2. Install Docker from scratch

```bash
# Update base system
apt update && apt upgrade -y

# Add Docker's official repo
apt install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
systemctl enable --now docker

# Verify
docker --version          # Docker 29.x
docker compose version    # Compose v5.x
```

> **Note:** on Ubuntu 24.04 the repo codename is `noble`. On 22.04 use `jammy`.

### Firewall (optional, if `ufw` is enabled)
```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```
> If `ufw` is inactive (default on many VPS images), nothing blocks 80/443.

---

## 3. Deploy layout (multi-project)

One shared Caddy reverse proxy routes every project by host. Each project is
isolated in its own directory + Docker network.

```
/opt/deploy/softcredible/     ← project 1 (compose, Dockerfiles, .env)
/opt/deploy/<other-project>/  ← future projects (same pattern)
/opt/caddy/                   ← shared Caddy (once per VPS)
```

```bash
mkdir -p /opt/deploy/softcredible /opt/caddy
```

---

## 4. Deploy the project (first time)

```bash
cd /opt/deploy
git clone https://github.com/shereali/softcredible.git softcredible
cd softcredible

# Secrets (gitignored) — generate strong values
cp .env.example .env
chmod 600 .env
# Fill: DB_PASSWORD, DB_ROOT_PASSWORD, APP_KEY, ADMIN_PASSWORD

# Generate APP_KEY
openssl rand -base64 32   # prefix result with "base64:"
```

### Start the stack
```bash
docker compose up -d --build
docker compose ps
```

Expected containers:
| Container | Role | Port |
|---|---|---|
| `softcredible-frontend-1` | Nuxt Node server | 127.0.0.1:3000 |
| `softcredible-backend-1` | Laravel (nginx + php-fpm) | 127.0.0.1:8000 |
| `softcredible-db-1` | MySQL 8 | internal |
| `caddy-caddy-1` | shared reverse proxy | 80/443 |

The backend entrypoint (re)runs `migrate --force` + `db:seed --force` on every
start, so the schema and admin user are always current.

---

## 5. Shared Caddy reverse proxy

```bash
cp /opt/deploy/softcredible/deploy/caddy/docker-compose.caddy.yml /opt/caddy/
cp /opt/deploy/softcredible/deploy/caddy/Caddyfile /opt/caddy/
cd /opt/caddy
docker compose -f docker-compose.caddy.yml up -d
```

Routing (Caddyfile): `/api/*` → `softcredible-backend-1:8000`, everything else
→ `softcredible-frontend-1:3000`.

### Container-name resolution (important)
Caddy reaches the project's containers **by name over Docker DNS**. This only
works if the project's compose joins Caddy's network (`caddy_net`). The project
`docker-compose.yml` declares it as an external network and attaches the
frontend/backend services to it. If Caddy ever returns **502**, the containers
are not on the same network — check with:
```bash
docker network inspect caddy_net
```

---

## 6. Deploy a new release

```bash
cd /opt/deploy/softcredible
git pull
docker compose up -d --build
```

---

## 7. Adding a domain (TLS)

While no domain is set, the site serves on the server IP over HTTP via Caddy's
`:80` block. To use a domain:

1. Point DNS A records at the server IP.
2. Edit `/opt/caddy/Caddyfile`, replace the `:80` block with:
   ```
   softcredible.com, www.softcredible.com {
       handle /api/* { reverse_proxy softcredible-backend-1:8000 }
       handle        { reverse_proxy softcredible-frontend-1:3000 }
   }
   ```
3. Reload Caddy: `docker compose -f /opt/caddy/docker-compose.caddy.yml restart`
4. Caddy provisions Let's Encrypt TLS automatically.

---

## 8. Troubleshooting

```bash
docker compose ps                        # container status (db should be healthy)
docker compose logs backend              # migration/seed/app errors
docker compose logs frontend             # Nuxt server logs
docker compose exec backend php artisan migrate --force
docker compose exec db mysql -u root -p  # inspect DB
```

### Known issues & fixes (learned during first deploy)

These were all real failures during the initial deploy. Each is already fixed
in the repo — this list explains what happened and why:

1. **Composer autoloader missing** — `--no-autoloader` skipped `autoload.php`
   generation. Fixed by removing the flag in the vendor stage.
2. **PHP version mismatch** — `composer.lock` pins symfony 8.x requiring
   PHP ≥ 8.4.1. Runtime uses `php:8.4-fpm-alpine` to match.
3. **Missing `authors` table** — `blog_posts.author_id` FK referenced a table
   that never had a migration. Added `2026_08_12_000003_0_create_authors_table.php`.
4. **Migration ordering** — `categories`/`tags` were created *after* `blog_posts`
   referenced them. Split into an early migration (`000003_1`), keeping the
   `blog_post_tag` pivot after `blog_posts`.
5. **`seeders/` vs `Seeders/` casing** — PSR-4 is case-sensitive on Linux;
   `Database\Seeders\` maps to `database/Seeders/`. Renamed the directory.
6. **nginx conf.d vs http.d** — Alpine nginx includes server blocks from
   `http.d/*.conf` inside `http {}`; `conf.d/` is top-level. Moved the site
   config to `/etc/nginx/http.d/default.conf`.
7. **Storage volume owned by root** — the named volume mounted as root, so
   `www-data` couldn't write `laravel.log` → every request 500'd. The entrypoint
   now chowns `storage` + `bootstrap/cache` on each start.
8. **Caddy 502** — project containers weren't on `caddy_net`. Compose now
   declares `caddy_net` as external and attaches frontend/backend.
9. **Partial failed migrations** — MySQL `CREATE TABLE` isn't transactional; a
   failed FK left orphan tables. Reset the DB (drop/recreate) and re-ran.

### Current known issue
- `GET /up` (Laravel health route) returns 500. Cosmetic — the app and API
  work normally. Fixable separately.

---

## 9. Credentials & secrets (NOT in git)

Everything sensitive lives on the server only:
- `/opt/deploy/softcredible/.env` (chmod 600):
  `DB_PASSWORD`, `DB_ROOT_PASSWORD`, `APP_KEY`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`
- Admin login: `ADMIN_EMAIL` / `ADMIN_PASSWORD` from that file
- Never commit `.env` — both `.gitignore` files already exclude it
