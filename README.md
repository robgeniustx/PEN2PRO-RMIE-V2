# PEN2PRO RMIE Live
codex/implement-phase-9-for-autonomous-agent-operations

HEAD
Phase 9 implemented Autonomous Agent Operations foundation (safe draft mode).

## Local setup
Backend:
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Stripe test mode
1. Create three Stripe prices (Pro monthly, Elite monthly, Founders lifetime).
2. Set backend env vars from `backend/.env.example` and frontend env vars from `frontend/.env.example`.
3. Use Stripe CLI for local webhooks (optional):
```bash
stripe listen --forward-to localhost:8000/api/stripe/webhook
```

Core flow: Idea → Offer → Blueprint → Upgrade Prompt → Stripe Checkout → Paid Tier Access.

## Phase 10 Admin Analytics
Includes internal analytics event tracking, admin metrics endpoints, and frontend admin dashboard pages.
