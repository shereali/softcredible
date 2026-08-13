# Softcredible — Docker & VPS Deployment

## Stack
- **frontend** — Nuxt 4 Node server (Nitro) on `:3000`, built by `Dockerfile.frontend`
- **backend** — Laravel 11 (nginx `:8000` → php-fpm), built by `backend/Dockerfile`
- **db** — MySQL 8 with named volume `db-data`
- **caddy** — shared reverse proxy (one per VPS, routes all projects by host)

## Local build & run
```bash
cp .env.example .env   # fill in DB_PASSWORD, DB_ROOT_PASSWORD, APP_KEY, ADMIN_PASSWORD
docker compose up -d --build
docker compose ps
```
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000/api`
- Admin: `http://localhost:3000/admin/login` (user seeded from `ADMIN_EMAIL`/`ADMIN_PASSWORD`)

Generate `APP_KEY`:
```bash
php -r "echo 'base64:'.base64_encode(random_bytes(32)), PHP_EOL;"
```

## First-time VPS setup (Ubuntu 22.04/24.04)
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker $USER   # re-login after
docker --version && docker compose version
```

## Deploy layout (multi-project)
```
/opt/deploy/softcredible/     ← this project (compose + Dockerfiles + .env)
/opt/caddy/                   ← shared Caddy (once per VPS)
```

### Deploy this project
```bash
sudo mkdir -p /opt/deploy/softcredible /opt/caddy
sudo chown -R $USER:$USER /opt/deploy /opt/caddy

cd /opt/deploy/softcredible
# copy repo files + .env with real secrets
docker compose up -d --build
docker compose ps
```

### Shared Caddy
```bash
cp deploy/caddy/docker-compose.caddy.yml deploy/caddy/Caddyfile /opt/caddy/
cd /opt/caddy
docker compose up -d
```
Caddyfile routes: `/api/*` → backend, everything else → frontend. Add domains per project as you add them.

## Deploy a new release
```bash
cd /opt/deploy/softcredible
git pull
docker compose up -d --build
```

## Troubleshooting
- `docker compose logs backend` — migration/seed errors, app logs
- `docker compose exec backend php artisan migrate --force` — manual migrate
- `docker compose exec db mysql -u root -p` — inspect DB
- Health: `docker compose ps` shows `healthy` for db
