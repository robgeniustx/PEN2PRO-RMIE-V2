# PEN2PRO RMIE Live

PEN2PRO RMIE Live is a full-stack business execution platform.

This repository currently includes **Phase 4: Social Media Marketing Engine** scaffolding that converts business inputs into structured social execution plans with safe fallbacks when AI is unavailable.

## What Phase 4 Includes

### Backend (FastAPI)
- Social module endpoints under `/api/social`:
  - `POST /api/social/generate`
  - `POST /api/social/calendar`
  - `POST /api/social/posts`
  - `POST /api/social/scripts`
  - `POST /api/social/brand-voice`
  - `GET /api/social/health`
- Tier-aware response shaping (free/pro/elite/founders placeholders)
- Structured mock fallback output if `OPENAI_API_KEY` is missing

### Frontend (React + Vite)
- Social pages/routes:
  - `/social`
  - `/social-calendar`
  - `/social-posts`
  - `/social-scripts`
  - `/social-analytics` (stub)
- Mock-backed Social API client for backend-offline behavior
- Reusable Social UI cards/components

## Safety & Scope Boundaries

The Social Media Marketing Engine intentionally **does not**:
- auto-post to social platforms
- request or store social media passwords
- connect to real TikTok/Instagram/Facebook/LinkedIn/YouTube APIs yet
- promise guaranteed viral growth, followers, leads, or sales

## Environment Variables

Backend:
- `OPENAI_API_KEY` (optional for live AI generation)
- `OPENAI_MODEL_SOCIAL` (optional model override)

Frontend:
- `VITE_API_BASE_URL` (default: `http://localhost:8000`)
- `VITE_ALLOW_TEST_TIER_ACCESS` (optional development override)

## Local Development

### 1) Run Backend
```bash
cd backend
uvicorn main:app --reload
```

### 2) Run Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3) Build Frontend
```bash
cd frontend
npm run build
```

## Current Status

- ✅ Social module endpoints and UI scaffolding are present.
- ✅ Mock fallback content works when OpenAI is unavailable.
- ⚠️ Real social platform integrations and auto-scheduling are intentionally not implemented yet.
