# PEN2PRO RMIE — V2 to Live

This repository contains the **PEN2PRO RMIE V2** codebase being compiled into the **PEN2PRO RMIE Live** product.

## Project Context

- **Codebase:** `PEN2PRO-RMIE-V2`
- **Live Product Name:** **PEN2PRO RMIE Live**
- **Current Milestone:** **Phase 4 — Social Media Marketing Engine**
- **Core Flow:** Idea → Offer → Blueprint → Content → Social Media Execution

---

## What "V2 to Live" Means in This Repo

This repository now includes the production-oriented scaffolding needed to move V2 into Live operation for the Social module:

1. Backend API endpoints for social generation flows.
2. Tier-aware response shaping and feature locks.
3. Frontend routes/pages/components for social planning workflows.
4. Mock-safe behavior when backend/OpenAI is unavailable.
5. Safety guardrails documented for public/live usage.

---

## Phase 4 (Live) — Implemented Scope

### Backend (FastAPI)
Social endpoints under `/api/social`:

- `GET /api/social/health`
- `POST /api/social/generate`
- `POST /api/social/calendar`
- `POST /api/social/posts`
- `POST /api/social/scripts`
- `POST /api/social/brand-voice`

Also available:

- `GET /api/health`
- `POST /api/intake`
- `POST /api/blueprints/generate`
- `POST /api/stripe/create-checkout-session`

### Frontend (React + Vite)
Live social routes:

- `/social`
- `/social-calendar`
- `/social-posts`
- `/social-scripts`
- `/social-analytics` *(stub placeholder)*

---

## Tier Access (V2 Compiled for Live)

- **Free:** limited preview content only (no full calendar/scripts/advanced brand voice)
- **Pro:** strategy + 7/14-day calendar + captions/hooks/hashtags/checklist
- **Elite:** Pro + 30-day calendar + scripts + repurposing + advanced brand voice + CTA depth
- **Founders:** Elite + future placeholders for scheduling/analytics/campaign automation

---

## Environment Variables

### Backend
- `OPENAI_API_KEY` *(optional; if missing, structured mock output is returned)*
- `OPENAI_MODEL_SOCIAL` *(optional model override for social generation)*

### Frontend
- `VITE_API_BASE_URL` *(e.g., `http://localhost:8000`)*
- `VITE_ALLOW_TEST_TIER_ACCESS` *(dev-only tier visibility helper)*

---

## Safety + Compliance Boundaries (Live)

The current Live implementation intentionally does **not**:

- auto-post to social platforms
- request/store social media passwords
- connect to real TikTok/Instagram/Facebook/LinkedIn/YouTube APIs yet
- guarantee viral growth, follower counts, leads, or sales

---

## Run Locally

### Backend
```bash
cd backend
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Frontend Build
```bash
cd frontend
npm run build
```

---

## Current Status

- ✅ V2 Social Engine scaffolding is compiled into Live routes and pages.
- ✅ Mock fallback behavior works when OpenAI is unavailable.
- ✅ Tier-gating structure is in place.
- ⚠️ Real social integrations, external scheduling, and real analytics are future phases.
