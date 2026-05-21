#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "=== PEN2PRO Session Start: Installing dependencies ==="

# Install frontend npm dependencies
echo "--- Installing frontend dependencies ---"
cd "$CLAUDE_PROJECT_DIR/frontend"
npm install

# Install backend Python dependencies
echo "--- Installing backend dependencies ---"
cd "$CLAUDE_PROJECT_DIR/backend"
pip install -r requirements.txt --quiet

echo "=== PEN2PRO Session Start: Done ==="
