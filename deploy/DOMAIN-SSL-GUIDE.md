# Softcredible — Domain, SSL & Certificate Renewal Guide

Complete process for pointing `softcredible.com` at the VPS, activating HTTPS
via Caddy (Let's Encrypt), and keeping the certificate renewed automatically.

**Reference server:** `root@217.216.110.233` · Site: `softcredible.com`

---

## 1. Point the domain to the server (DNS)

Do this at your **domain registrar / DNS provider** (where `softcredible.com`
is registered — GoDaddy, Cloudflare, Namecheap, etc.).

Create two **A records**:

| Type | Host/Name | Value | TTL |
|---|---|---|---|
| A | `@` (softcredible.com) | `217.216.110.233` | 300 (or lowest) |
| A | `www` | `217.216.110.233` | 300 (or lowest) |

### Verify DNS propagation
```bash
# From anywhere:
dig +short softcredible.com
dig +short www.softcredible.com
# Both should print: 217.216.110.233
```
Propagation can take minutes to 48h. Caddy retries certificate issuance
automatically, so you don't need to manually re-trigger it.

---

## 2. Caddyfile — domain block (already deployed)

The Caddyfile lives at `/opt/caddy/Caddyfile` (repo source:
`deploy/caddy/Caddyfile`). The domain block:

```
softcredible.com, www.softcredible.com {
    encode gzip

    handle /api/* {
        reverse_proxy softcredible-backend-1:8000
    }

    handle {
        reverse_proxy softcredible-frontend-1:3000
    }

    header {
        -Server
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy strict-origin-when-cross-origin
    }
}
```

Routing rules:
- `/api/*` → Laravel backend container (`softcredible-backend-1:8000`)
- everything else → Nuxt frontend container (`softcredible-frontend-1:3000`)

### Deploy a Caddyfile change
```bash
cd /var/www/softcredible && git pull -q origin main   # get latest Caddyfile
cp deploy/caddy/Caddyfile /opt/caddy/
cd /opt/caddy && docker compose -f docker-compose.caddy.yml restart
```

---

## 3. Activate HTTPS (Let's Encrypt via Caddy)

Caddy 2 obtains and manages TLS **automatically** when a site block has a real
domain. There is no separate "enable SSL" step:

1. Point DNS (step 1). Caddy validates the domain via ACME (HTTP-01 or
   TLS-ALPN-01) and requests a certificate from Let's Encrypt.
2. Within minutes of DNS propagation, Caddy serves `https://softcredible.com`
   with a valid certificate. It also redirects HTTP → HTTPS automatically.

### Watch it happen
```bash
docker logs -f caddy-caddy-1
# Look for: "certificate obtained successfully" / "served certificate"
```

### Verify the certificate
```bash
# From anywhere:
curl -sI https://softcredible.com | head -5        # expect HTTP/2 200, not 502
echo | openssl s_client -connect softcredible.com:443 -servername softcredible.com 2>/dev/null \
  | openssl x509 -noout -dates -issuer              # shows expiry + Let's Encrypt
```

### Troubleshooting cert issuance
- `NXDOMAIN` errors in Caddy logs → DNS not propagated yet. Wait, or fix the A records.
- `connection refused`/`timeout` on :80 or :443 → firewall blocks. Allow:
  ```bash
  ufw allow 80/tcp && ufw allow 443/tcp && ufw enable
  ```
- Cert issued for one host only → ensure **both** `softcredible.com` and
  `www` are in the site block (they are) and both resolve.

---

## 4. Automatic renewal (cron)

Caddy 2 renews certificates automatically in the background (~60 days before
expiry). As a safety net, a cron job reloads Caddy twice a month so any
renewed cert is picked up immediately.

### The cron job (already installed)
File: `/etc/cron.d/caddy-renew`
```
0 4 1,15 * * root /usr/local/sbin/caddy-renew.sh
```
Runs every 1st and 15th of the month at 04:00.

### The script (already installed)
`/usr/local/sbin/caddy-renew.sh`:
```sh
#!/bin/sh
LOG=/var/log/caddy-renew.log
echo "=== $(date -u '+%Y-%m-%d %H:%M:%S UTC') caddy reload check ===" >> "$LOG"
cd /opt/caddy && docker compose -f docker-compose.caddy.yml exec -T caddy \
    caddy reload --config /etc/caddy/Caddyfile >> "$LOG" 2>&1
echo "reload exit code: $?" >> "$LOG"
```

### Verify the cron is active
```bash
ls -l /etc/cron.d/caddy-renew          # file exists, 644
cat /etc/cron.d/caddy-renew            # shows the schedule
/usr/local/sbin/caddy-renew.sh         # run once to test
tail /var/log/caddy-renew.log          # expect "reload exit code: 0"
```

### Manual certificate operations (if ever needed)
```bash
# See certs Caddy is managing
docker compose -f /opt/caddy/docker-compose.caddy.yml exec caddy caddy list-modules | grep tls
docker compose -f /opt/caddy/docker-compose.caddy.yml exec caddy caddy cert list

# Force a full reload
cd /opt/caddy && docker compose -f docker-compose.caddy.yml restart
```

---

## 5. Complete flow — what happens after DNS propagates

1. You add the A records at the registrar.
2. Caddy (already configured) retries ACME automatically → issues certs for
   `softcredible.com` + `www.softcredible.com`.
3. `https://softcredible.com` starts working; HTTP redirects to HTTPS.
4. The cron reloads Caddy on the 1st/15th so renewals are always live.
5. Nothing else is required — no manual cert files, no nginx SSL blocks.

---

## 6. Rollback (if the domain ever needs to move off this server)

```bash
# Remove the domain block, keep only the :80 IP fallback
# (edit /opt/caddy/Caddyfile, then:)
cd /opt/caddy && docker compose -f docker-compose.caddy.yml restart
# And remove/keep the cron (harmless either way).
```

---

## Commands cheat-sheet

| Task | Command |
|---|---|
| Check DNS | `dig +short softcredible.com` |
| Deploy Caddyfile | `cp deploy/caddy/Caddyfile /opt/caddy/ && cd /opt/caddy && docker compose -f docker-compose.caddy.yml restart` |
| Watch cert issuance | `docker logs -f caddy-caddy-1` |
| Verify HTTPS | `curl -sI https://softcredible.com` |
| Check cert expiry | `echo \| openssl s_client -connect softcredible.com:443 -servername softcredible.com 2>/dev/null \| openssl x509 -noout -dates` |
| Test renewal cron | `/usr/local/sbin/caddy-renew.sh && tail /var/log/caddy-renew.log` |
| List managed certs | `docker compose -f /opt/caddy/docker-compose.caddy.yml exec caddy caddy cert list` |
| Open firewall ports | `ufw allow 80/tcp && ufw allow 443/tcp` |
