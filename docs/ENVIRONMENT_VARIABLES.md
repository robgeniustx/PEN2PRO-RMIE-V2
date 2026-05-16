
Backend required:
`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_PRO_MONTHLY`, `STRIPE_PRICE_ELITE_MONTHLY`, `STRIPE_PRICE_FOUNDERS_LIFETIME`, `FRONTEND_URL`, `ENVIRONMENT`, `ALLOW_TEST_TIER_ACCESS`.

Frontend required:
`VITE_API_BASE_URL`, `VITE_STRIPE_PUBLISHABLE_KEY`, `VITE_ALLOW_TEST_TIER_ACCESS`.

- `ADMIN_DASHBOARD_ENABLED` (backend): enables admin endpoints in production.
- `VITE_ADMIN_DASHBOARD_ENABLED` (frontend): enables admin routes in UI.

AI Voice Agent / ElevenLabs:
- `ELEVENLABS_API_KEY` (backend): ElevenLabs API key stored in Render.
- `ELEVENLABS_WEBHOOK_SECRET` (backend): HMAC secret from the ElevenLabs webhook configuration.
- `ELEVENLABS_AGENT_ID` (backend, optional): ElevenLabs agent id used for environment/status checks.

Configure the ElevenLabs webhook URL to:
`https://<your-backend-render-service>.onrender.com/api/voice-agent/webhook/elevenlabs`
