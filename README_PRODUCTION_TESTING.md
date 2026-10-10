# PEN2PRO Production Testing Checklist

## Automated checks

- **Build Check** (`.github/workflows/build.yml`): frontend build, which first runs `npm run check:links` so any internal link without a matching route fails the build, plus a backend compile check.
- **Playwright E2E** (`frontend/tests/e2e`): starts the API and the built frontend itself, then verifies every required route renders, a crawl of every internal link, desktop and mobile navigation, the gated $100 Strategist Plan, the admin key gate, sign-up and the free roadmap flow.
- **API Smoke Test** (`.github/workflows/api-smoke-test.yml`): checks the live backend after a deploy.

## Run locally

```
cd frontend
npm install
npm run build
npx playwright test        # needs python deps from backend/requirements.txt
```

## Still verify by hand before launch

- Real Stripe checkout for the $100 Strategist Plan, Pro, Elite and Founders (test mode first), including opening the playbook after payment.
- Stripe webhook delivery to `/api/stripe/webhook`.
- Roadmap generation with a real `OPENAI_API_KEY`.
- AI Voice Agent Twilio call flow.
