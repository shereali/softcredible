#!/bin/sh
# Deploy script run on the VPS after a push to main.
# Pulls the latest code and rebuilds/restarts the Docker stack.
# Caddy is untouched by deploys (config changes are deployed separately).

set -e

DEPLOY_DIR="/opt/deploy/softcredible"
LOG_DIR="/var/log/softcredible"
LOG_FILE="$LOG_DIR/deploy.log"

mkdir -p "$LOG_DIR"

echo "=== $(date -u '+%Y-%m-%d %H:%M:%S UTC') deploy start ===" >> "$LOG_FILE"

cd "$DEPLOY_DIR"

# Fetch + fast-forward to the pushed commit
git fetch origin main >> "$LOG_FILE" 2>&1
git reset --hard origin/main >> "$LOG_FILE" 2>&1

# Rebuild and restart (images build only when their inputs changed)
docker compose up -d --build >> "$LOG_FILE" 2>&1

# Report status
STATUS=$(docker compose ps --format '{{.Service}}={{.Status}}' | tr '\n' ' ')
echo "deploy finished — $STATUS" >> "$LOG_FILE"

echo "=== deploy done ===" >> "$LOG_FILE"
exit 0
