from datetime import datetime, timezone

from app.agents.registry import AGENTS


def run_weekly_content_calendars(payload: dict | None = None) -> dict:
    """Generate weekly content calendars via agent automation."""
    agent = AGENTS["content_calendar"]
    request_payload = {
        "tier": "elite",
        "cron": "weekly_content_calendars",
        "requested_at": datetime.now(timezone.utc).isoformat(),
    }
    if payload:
        request_payload.update(payload)

    if not agent.validate_input(request_payload):
        return {"ok": False, "job": "weekly_content_calendars", "error": "invalid_payload"}

    return {
        "ok": True,
        "job": "weekly_content_calendars",
        "agent": agent.name,
        "result": agent.run(request_payload),
    }


if __name__ == '__main__':
    print(run_weekly_content_calendars())
