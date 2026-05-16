from __future__ import annotations
from datetime import datetime, timezone

from app.agents.registry import AGENTS


def run_daily_followups(payload: dict | None = None) -> dict:
    """Run the follow-up agent using a cron-safe default payload."""
    agent = AGENTS["follow_up"]
    request_payload = {
        "tier": "elite",
        "cron": "daily_followups",
        "requested_at": datetime.now(timezone.utc).isoformat(),
    }
    if payload:
        request_payload.update(payload)

    if not agent.validate_input(request_payload):
        return {"ok": False, "job": "daily_followups", "error": "invalid_payload"}

    return {
        "ok": True,
        "job": "daily_followups",
        "agent": agent.name,
        "result": agent.run(request_payload),
    }


if __name__ == '__main__':
    print(run_daily_followups())
