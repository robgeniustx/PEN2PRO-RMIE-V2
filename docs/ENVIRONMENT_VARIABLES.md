
Backend required:
`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_STRATEGIST` (one-time $100 price), `STRIPE_PRICE_PRO_MONTHLY`, `STRIPE_PRICE_ELITE_MONTHLY`, `STRIPE_PRICE_FOUNDERS_LIFETIME`, `FRONTEND_URL`, `ENVIRONMENT`, `ALLOW_TEST_TIER_ACCESS`.

Frontend required:
`VITE_API_BASE_URL`, `VITE_STRIPE_PUBLISHABLE_KEY`, `VITE_ALLOW_TEST_TIER_ACCESS`.

- `PEN2PRO_DB_PATH` (backend, **required in production**): path to the SQLite file that stores accounts, purchases, saved roadmaps, starter leads and dashboard records. Use a path on a persistent disk (Render: `/var/data/pen2pro.db`). Without a persistent disk the file is recreated empty on every deploy.
- `ADMIN_EMAILS` (backend): comma-separated emails that get owner/admin access in the dashboard and owner-only tools such as the voice agent.
- `JWT_SECRET_KEY` (backend, **required in production**): long random string. The API refuses to sign sessions in production if it is missing or still a default.
- `RATE_LIMIT_BLUEPRINT_PER_HOUR` (backend, default 8): free roadmap generations per visitor per hour.
- `ADMIN_ACCESS_KEY` (backend, **required in production**): secret key for the admin dashboard, sent as the `X-Admin-Key` header. Admin endpoints return 403 in production when it is unset.
- `VITE_AFFILIATE_LLC_URL`, `_BANKING_`, `_CREDIT_`, `_FUNDING_`, `_DOMAIN_`, `_BOOKKEEPING_`, `_PAYMENT_`, `_CRM_`, `_INSURANCE_` (frontend, optional): affiliate links for the resources page. Vite bakes these in at build time, so redeploy the frontend after changing them.
- `ADMIN_DASHBOARD_ENABLED` (backend): enables admin endpoints in production.
- `VITE_ADMIN_DASHBOARD_ENABLED` (frontend): enables admin routes in UI.

AI Voice Agent / ElevenLabs:
- `ELEVENLABS_API_KEY` (backend): ElevenLabs API key stored in Render.
- `ELEVENLABS_WEBHOOK_SECRET` (backend): HMAC secret from the ElevenLabs webhook configuration.
- `ELEVENLABS_AGENT_ID` (backend, optional): ElevenLabs agent id used for environment/status checks.
- `ELEVENLABS_VOICE_ID` (backend): voice used for Twilio call audio. Starter default is `JBFqnCBsd6RMkjVDRZzb`.
- `ELEVENLABS_MODEL_ID` (backend): ElevenLabs TTS model. Starter default is `eleven_flash_v2_5`.
- `VOICE_AUDIO_DIR` (backend, optional): local folder for generated Twilio playback audio. Default is `generated_audio`.

Twilio AI Voice Agent:
- `TWILIO_ACCOUNT_SID` (backend): Twilio project Account SID.
- `TWILIO_AUTH_TOKEN` (backend): Twilio auth token. Keep this secret in Render/local `.env` only.
- `TWILIO_PHONE_NUMBER` (backend): Twilio number assigned to PEN2PRO.
- `BACKEND_URL` (backend): public backend URL used in TwiML `<Gather>` and `<Play>` callbacks.

Configure the ElevenLabs webhook URL to:
`https://<your-backend-render-service>.onrender.com/api/voice-agent/webhook/elevenlabs`

Configure the Twilio voice webhook URL to:
`https://<your-backend-render-service>.onrender.com/api/voice-agent/incoming`
