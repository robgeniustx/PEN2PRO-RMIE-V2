name: API Smoke Test

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  api-smoke-test:
    name: Test Live Backend API
    runs-on: ubuntu-latest

    steps:
      - name: Check backend health route
        run: curl -f "${{ secrets.BACKEND_URL }}/api/health"

      - name: Check pricing route
        run: curl -f "${{ secrets.BACKEND_URL }}/api/pricing"

      - name: Report RMIE route status
        run: |
          curl -I "${{ secrets.BACKEND_URL }}/api/blueprint" || true
          curl -I "${{ secrets.BACKEND_URL }}/api/rmie" || true

      - name: Report AI Voice Agent route status
        run: |
          curl -I "${{ secrets.BACKEND_URL }}/api/voice/status" || true
          curl -I "${{ secrets.BACKEND_URL }}/api/voice/health" || true

      - name: Report Command Center route status
        run: |
          curl -I "${{ secrets.BACKEND_URL }}/api/admin/health" || true
          curl -I "${{ secrets.BACKEND_URL }}/api/admin" || true
