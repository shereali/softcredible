#!/bin/sh
# Deploy script run on the VPS after a push to main.
# Pulls the latest code and rebuilds/restarts the Docker stack.
# Caddy is untouched by deploys (config changes are deployed separately).
#
# Detach-safe: the workflow calls this with nohup, so it keeps running even
# if the SSH session ends. Writes a sentinel on completion so the caller
# can poll for the result.

set -e

DEPLOY_DIR="/opt/deploy/softcredible"
LOG_DIR="/var/log/softcredible"
LOG_FILE="$LOG_DIR/deploy.log"
SENTINEL="$LOG_DIR/deploy.done"
STATUS_FILE="$LOG_DIR/deploy.status"

mkdir -p "$LOG_DIR"

echo "=== $(date -u '+%Y-%m-%d %H:%M:%S UTC') deploy start ===" >> "$LOG_FILE"

cd "$DEPLOY_DIR"

# Fetch + fast-forward to the pushed commit
git fetch origin main >> "$LOG_FILE" 2>&1
git reset --hard origin/main >> "$LOG_FILE" 2>&1

# Rebuild and restart (images build only when their inputs changed)
if docker compose up -d --build >> "$LOG_FILE" 2>&1; then
    STATUS=$(docker compose ps --format '{{.Service}}={{.Status}}' | tr '\n' ' ')
    echo "deploy finished — $STATUS" >> "$LOG_FILE"
    echo "OK: $STATUS" > "$STATUS_FILE"
else
    echo "deploy FAILED" >> "$LOG_FILE"
    echo "FAILED: see $LOG_FILE" > "$STATUS_FILE"
    exit 1
fi

echo "=== deploy done ===" >> "$LOG_FILE"
echo "done" > "$SENTINEL"
exit 0
