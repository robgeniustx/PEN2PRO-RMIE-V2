# Agent System

This document defines the default activation model for core PEN2PRO automation agents.

## Agent Trigger & Schedule Matrix

| Agent                    | Trigger                          | Schedule           |
| ------------------------ | -------------------------------- | ------------------ |
| Caption / Hashtag        | Customer clicks generate         | On demand          |
| Landing Page             | Customer creates offer           | On demand          |
| Brand Identity           | Customer builds brand kit        | On demand          |
| Content Calendar         | Customer action + weekly refresh | Weekly Monday 6 AM |
| Follow-Up                | New lead + daily reminders       | Daily 9 AM         |
| Lead Scoring             | New lead + periodic rescore      | Every 30 minutes   |
| Affiliate Agents         | Elite user action                | On demand / weekly |
| Credit/Funding Readiness | Elite user action                | On demand          |

## Notes

- "On demand" agents run immediately from explicit user actions.
- Scheduled agents should be orchestrated by background jobs and can also be manually re-run when needed.
- Elite-only agents must enforce tier checks before execution.
