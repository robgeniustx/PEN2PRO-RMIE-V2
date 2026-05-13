from fastapi import APIRouter, HTTPException

from app.agents.registry import AGENTS, get_agent

router = APIRouter(prefix="/api/agents", tags=["agents"])

TIER_LEVELS = {
    "free": 0,
    "pro": 1,
    "elite": 2,
}


@router.post("/{agent_key}/run")
def run_agent(agent_key: str, payload: dict):
    agent = get_agent(agent_key)

    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")

    user_tier = payload.get("tier", "free")
    required_tier = getattr(agent, "tier_required", "free")

    if user_tier not in TIER_LEVELS:
        raise HTTPException(status_code=400, detail="Invalid user tier")

    if required_tier not in TIER_LEVELS:
        raise HTTPException(status_code=500, detail="Invalid agent tier configuration")

    if TIER_LEVELS[user_tier] < TIER_LEVELS[required_tier]:
        raise HTTPException(status_code=403, detail=f"{required_tier} tier required")

    if not agent.validate_input(payload):
        raise HTTPException(status_code=400, detail="Invalid agent input")

    return {
        "agent": agent.name,
        "result": agent.run(payload),
    }
