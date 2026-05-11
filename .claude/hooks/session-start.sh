#!/bin/bash
set -euo pipefail

# Only run full setup in remote (web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": true, "asyncTimeout": 300000}'

FRONTEND_DIR="$CLAUDE_PROJECT_DIR/frontend"

echo "[PEN2PRO session-start] Installing frontend dependencies..."
cd "$FRONTEND_DIR"
npm install

echo "[PEN2PRO session-start] Done. Frontend deps ready."
