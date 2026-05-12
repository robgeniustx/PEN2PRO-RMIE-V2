#!/bin/bash
set -euo pipefail

# Only run full install in remote Claude Code web sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"

echo "[PEN2PRO session-start] Installing frontend dependencies..."
cd "$PROJECT_DIR/frontend"
npm install

echo "[PEN2PRO session-start] Installing backend Python dependencies..."
pip install -r "$PROJECT_DIR/backend/requirements.txt" --quiet

echo "[PEN2PRO session-start] Setup complete."
