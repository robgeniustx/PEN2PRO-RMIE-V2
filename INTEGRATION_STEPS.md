# Agent Cron Integration Steps

## 1) Add cron modules

The automation entrypoints are:

- `backend/app/jobs/daily_followups.py`
- `backend/app/jobs/score_leads.py`
- `backend/app/jobs/weekly_content_calendars.py`
- `backend/app/jobs/weekly_affiliate_refresh.py`

Each job composes a cron-safe payload and calls the same agent implementations used by `/api/agents/{agent_key}/run`.

## 2) Add Render cron resources

Apply `render.agent-crons.patch.yaml` into your `render.yaml` and deploy.

## 3) Validate jobs locally

```bash
python -m backend.app.jobs.daily_followups
python -m backend.app.jobs.score_leads
python -m backend.app.jobs.weekly_content_calendars
python -m backend.app.jobs.weekly_affiliate_refresh
```

## 4) Production verification checklist

- Confirm each Render cron shows "Last run: success".
- Confirm Agent Run telemetry has one record per cron invocation.
- Confirm API quota and OpenAI spend alerts are active for cron-trigger windows.
