# Softcredible — GitHub Actions Auto-Deploy Guide

Push to `main` → GitHub Actions SSHes into the VPS → pulls the code → rebuilds
the Docker stack. This documents the full process, the credentials you must
set up, and every command involved.

---

## How it works

```
git push origin main
      │
      ▼
GitHub Actions (workflow: .github/workflows/deploy.yml)
      │  (uses repo secrets: VPS_HOST, VPS_USER, VPS_SSH_KEY)
      ▼
SSH to VPS → run /opt/deploy/softcredible/deploy/deploy.sh
      │  (git fetch + reset --hard origin/main, docker compose up -d --build)
      ▼
Smoke check: curl the homepage on the server IP
```

---

## Files involved

| File | Purpose |
|---|---|
| `.github/workflows/deploy.yml` | The workflow (trigger: push to `main`, manual dispatch) |
| `deploy/deploy.sh` | Server-side deploy script (git pull + compose rebuild, logs to `/var/log/softcredible/deploy.log`) |

---

## Credentials you must set up (GitHub repo secrets)

Go to **GitHub repo → Settings → Secrets and variables → Actions → New repository secret** and add these three:

### 1. `VPS_HOST`
The server IP or hostname.
```
217.216.110.233
```

### 2. `VPS_USER`
The SSH user (root on this server).
```
root
```

### 3. `VPS_SSH_KEY`
The **private key** that GitHub Actions uses to log in. A dedicated deploy key
was generated on the server at `/root/.ssh/github_actions` (its public half is
already in `/root/.ssh/authorized_keys`).

**Retrieve the private key** (run on your machine, or any machine with SSH
access to the server):

```bash
# Local (Linux/macOS):
scp root@217.216.110.233:/root/.ssh/github_actions ~/github_actions

# Or on Windows PowerShell:
scp root@217.216.110.233:/root/.ssh/github_actions .
```

Then paste the **entire file contents** (starting with `-----BEGIN OPENSSH PRIVATE KEY-----`) into the `VPS_SSH_KEY` secret value.

> **Security notes**
> - This key can log in as root — keep it secret, never commit it, and add it
>   only as a GitHub Actions secret (never a plaintext file in the repo).
> - To rotate/revoke it later: remove the matching line from
>   `/root/.ssh/authorized_keys` on the server and delete the secret.
> - The server also allows password auth; consider disabling it now that a
>   key-based pipeline exists (see hardening below).

---

## Triggering a deploy

**Automatic:** push to `main`.
```bash
git push origin main
```

**Manual:** GitHub repo → **Actions** → **Deploy to VPS** → **Run workflow**.

---

## What the workflow runs (for reference)

### `deploy.sh` (on the server, at `/opt/deploy/softcredible/deploy/deploy.sh`)
```sh
cd /opt/deploy/softcredible
git fetch origin main
git reset --hard origin/main
docker compose up -d --build
docker compose ps
```

### Smoke check (from the runner)
```sh
curl -sS -o /dev/null -w "homepage: HTTP %{http_code}\n" "http://<VPS_HOST>/"
```

---

## Monitoring a deploy

```bash
# Live tail of deploy logs (on the server)
tail -f /var/log/softcredible/deploy.log

# Container status after deploy
docker compose -f /opt/deploy/softcredible/docker-compose.yml ps
```

The deploy log records each run with a UTC timestamp, the git fetch/reset
output, the compose build output, and the final container statuses.

---

## What is NOT auto-deployed

- **Caddy config** (`/opt/caddy/Caddyfile`) — changed manually, then:
  ```bash
  cp /opt/deploy/softcredible/deploy/caddy/Caddyfile /opt/caddy/
  cd /opt/caddy && docker compose -f docker-compose.caddy.yml restart
  ```
- **Server secrets** (`/opt/deploy/softcredible/.env`) — never in git, changed by
  editing the file on the server directly.
- **Database schema** — the backend entrypoint runs `migrate --force` on every
  container start, so schema changes from a new push are applied automatically.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Workflow fails at "Set up SSH" | `VPS_SSH_KEY` wrong/missing; re-add the secret |
| `Permission denied (publickey)` in logs | Key not in `authorized_keys`; re-add `/root/.ssh/github_actions.pub` |
| Build fails in workflow | Check `docker compose build` locally; look at `docker compose logs` on server |
| Site down after deploy | `docker compose ps` on server; `docker compose logs backend/frontend` |
| Deploy log empty | Confirm the runner's `VPS_USER`/`VPS_HOST` are correct |

---

## Hardening (recommended, after the pipeline is confirmed working)

Disable password SSH login on the server so only key-based access remains:

```bash
sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd
```
> Only do this once the GitHub Actions deploy works — if the workflow key
> breaks, you'd still have the original key-based session.

---

## Commands cheat-sheet

| Task | Command |
|---|---|
| Add repo secrets | GitHub → Settings → Secrets and variables → Actions |
| Get deploy key locally | `scp root@217.216.110.233:/root/.ssh/github_actions .` |
| Trigger deploy | `git push origin main` (or Actions → Run workflow) |
| Tail deploy log | `tail -f /var/log/softcredible/deploy.log` |
| Check containers | `docker compose -f /opt/deploy/softcredible/docker-compose.yml ps` |
| Redeploy Caddy config | `cp deploy/caddy/Caddyfile /opt/caddy/ && cd /opt/caddy && docker compose -f docker-compose.caddy.yml restart` |
| Rotate deploy key | Delete key line in `/root/.ssh/authorized_keys`, remove secret, regenerate |
