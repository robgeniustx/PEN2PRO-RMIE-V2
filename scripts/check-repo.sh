#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

PYTHON_BIN="${PYTHON_BIN:-python3.11}"

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  echo "Missing $PYTHON_BIN. The backend runtime is Python 3.11.9; install Python 3.11 or set PYTHON_BIN=/path/to/python3.11."
  exit 1
fi

echo "Using $($PYTHON_BIN --version)"

echo "Checking backend compile..."
"$PYTHON_BIN" -m compileall backend/app backend/main.py >/dev/null

echo "Running backend tests..."
"$PYTHON_BIN" -m unittest discover backend/tests

echo "Checking FastAPI import..."
"$PYTHON_BIN" - <<'PY'
import sys
sys.path.insert(0, "backend")
from main import app
print(f"FastAPI import OK: {app.title}")
PY

echo "Building frontend..."
cd frontend
npm run build

echo "Repo checks passed."
