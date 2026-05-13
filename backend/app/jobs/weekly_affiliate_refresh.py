from datetime import datetime, timezone

from app.agents.registry import AGENTS


def run_weekly_affiliate_refresh(payload: dict | None = None) -> dict:
    """Refresh affiliate strategy/content/funnel outputs weekly."""
    strategy_agent = AGENTS["affiliate_strategy"]
    content_agent = AGENTS["affiliate_content"]
    funnel_agent = AGENTS["affiliate_funnel"]

    request_payload = {
        "tier": "elite",
        "cron": "weekly_affiliate_refresh",
        "requested_at": datetime.now(timezone.utc).isoformat(),
    }
    if payload:
        request_payload.update(payload)

    for agent in (strategy_agent, content_agent, funnel_agent):
        if not agent.validate_input(request_payload):
            return {"ok": False, "job": "weekly_affiliate_refresh", "error": "invalid_payload"}

    return {
        "ok": True,
        "job": "weekly_affiliate_refresh",
        "runs": [
            {"agent": strategy_agent.name, "result": strategy_agent.run(request_payload)},
            {"agent": content_agent.name, "result": content_agent.run(request_payload)},
            {"agent": funnel_agent.name, "result": funnel_agent.run(request_payload)},
        ],
    }


if __name__ == '__main__':
    print(run_weekly_affiliate_refresh())
