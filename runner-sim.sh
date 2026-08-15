#!/bin/bash
set -eo pipefail
KEY="/c/Users/kakkhopath/AppData/Local/Temp/commandcode/ec9261b9-2572-4626-beed-016b3b18f91a/scratchpad/gh_key"
echo "--- runner-equivalent: start deploy ---"
ssh -i "$KEY" -o StrictHostKeyChecking=accept-new -o ConnectTimeout=20 \
    root@217.216.110.233 \
    "rm -f /var/log/softcredible/deploy.done; setsid nohup bash /var/www/softcredible/deploy/deploy.sh </dev/null >/dev/null 2>&1 & echo started; exit 0"
echo "START_STEP_EXIT=$?"
echo "--- runner-equivalent: wait/poll ---"
for i in $(seq 1 12); do
  RESULT=$(ssh -i "$KEY" -o StrictHostKeyChecking=accept-new \
      root@217.216.110.233 \
      "cat /var/log/softcredible/deploy.done 2>/dev/null || echo WAITING")
  echo "poll $i: $RESULT"
  if [ "$RESULT" = "done" ]; then break; fi
  sleep 15
done
echo "--- status ---"
ssh -i "$KEY" -o StrictHostKeyChecking=accept-new root@217.216.110.233 "cat /var/log/softcredible/deploy.status"
echo "DONE"
