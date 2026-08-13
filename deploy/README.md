# Softcredible — Docker & Deployment

Deployment infrastructure for the Softcredible site.

## Files
- `Dockerfile.frontend` — Nuxt 4 Node server (Nitro) on `:3000`
- `backend/Dockerfile` — Laravel 11 (nginx `:8000` → php-fpm)
- `docker-compose.yml` — frontend + backend + MySQL 8 (volumes `db-data`, `backend-storage`)
- `.env.example` — template for secrets (copy to `.env`, never commit)
- `deploy/caddy/` — shared Caddy reverse proxy config (one per VPS)
- **`deploy/SERVER-SETUP.md` — the complete from-scratch server setup guide** (Docker install, deploy layout, first deploy, Caddy, releases, troubleshooting, known issues)

## Quick reference

### Local build & run
```bash
cp .env.example .env   # fill in DB_PASSWORD, DB_ROOT_PASSWORD, APP_KEY, ADMIN_PASSWORD
docker compose up -d --build
```
- Frontend: `http://localhost:3000` · Backend API: `http://localhost:8000/api` · Admin: `/admin/login`

### Release deploy (server)
```bash
cd /opt/deploy/softcredible
git pull
docker compose up -d --build
```

### Shared Caddy (server)
```bash
cp deploy/caddy/docker-compose.caddy.yml deploy/caddy/Caddyfile /opt/caddy/
cd /opt/caddy && docker compose up -d
```

> For everything else — Docker install, multi-project layout, Caddy container-name
> resolution, credentials location, and the known issues from the first deploy —
> see **`deploy/SERVER-SETUP.md`**.
