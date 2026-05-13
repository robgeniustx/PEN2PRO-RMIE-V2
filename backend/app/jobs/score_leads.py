from datetime import datetime, timezone

from app.agents.registry import AGENTS


def run_score_leads(payload: dict | None = None) -> dict:
    """Run lead scoring for periodic CRM hygiene."""
    agent = AGENTS["lead_scoring"]
    request_payload = {
        "tier": "elite",
        "cron": "score_leads",
        "requested_at": datetime.now(timezone.utc).isoformat(),
    }
    if payload:
        request_payload.update(payload)

    if not agent.validate_input(request_payload):
        return {"ok": False, "job": "score_leads", "error": "invalid_payload"}

    return {
        "ok": True,
        "job": "score_leads",
        "agent": agent.name,
        "result": agent.run(request_payload),
    }


if __name__ == '__main__':
    print(run_score_leads())
