# PEN2PRO Production Testing Checklist

## Automated checks (run locally; no CI workflows run on pull requests)

- **Backend tests:** `cd backend && python -m pytest tests` covers sign-up and login, plan unlock from a confirmed payment (and from the Stripe webhook), plan downgrade on cancellation, per-user data privacy, saved roadmaps, the Strategist plan math and gating, admin key protection, rate limiting, owner-only voice agent data, and that production never serves demo data or a canned roadmap.
- **Frontend build:** `cd frontend && npm run build` first runs `npm run check:links`, so any internal link without a matching route fails the build.
- **Browser tests:** `cd frontend && npx playwright test` starts the API (with a fresh temporary database) and the built frontend, then checks every route, a crawl of every internal link, desktop and mobile navigation, the $100 Strategist Plan and builder, the admin gate, sign-up, plan unlock, saved roadmaps, PDF button, and dashboard records persisting across sign-out.
- `.github/workflows/api-smoke-test.yml` checks the live backend after a push to `main`.

## Verify by hand before launch (needs your real accounts)

- Stripe, in test mode first: buy the $100 Strategist Plan, Pro, Elite and Founders. Confirm the plan unlocks on the success page and also via the webhook if you close the page early. Cancel a subscription and confirm the plan drops back to free.
- Webhook delivery to `/api/stripe/webhook` with `STRIPE_WEBHOOK_SECRET` set.
- Roadmap generation, Pro "Refine with AI", and the Website Builder with a real `OPENAI_API_KEY`.
- Voice Agent: needs your Twilio and ElevenLabs credentials and webhook URLs (see `docs/ENVIRONMENT_VARIABLES.md`).
- After a Render deploy, create an account, redeploy, and confirm you can still sign in (this proves the persistent disk is mounted).
