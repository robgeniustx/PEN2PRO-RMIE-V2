from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId

from database import get_database
from security import get_current_user
from agent_service import AgentService

router = APIRouter(prefix="/agents", tags=["agents"])


@router.post("/{blueprint_id}/run/{agent_type}")
async def run_agent(
    blueprint_id: str,
    agent_type: str,
    background_tasks: BackgroundTasks,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Run an AI agent on a blueprint."""
    # Validate agent type
    if agent_type not in AgentService.AGENTS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unknown agent type: {agent_type}"
        )

    # Check blueprint ownership
    try:
        bp_id = ObjectId(blueprint_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid blueprint ID"
        )

    blueprint = await db.blueprints.find_one({
        "_id": bp_id,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not blueprint:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blueprint not found"
        )

    # Check tier access (all agents available on Pro, Elite, Founder)
    user = await db.users.find_one({"_id": ObjectId(current_user["user_id"])})
    tier = user.get("tier", "STARTER")

    if tier == "STARTER":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Agents are only available for Pro, Elite, and Founder tiers"
        )

    # Queue agent to run in background
    background_tasks.add_task(
        AgentService.run_agent,
        agent_type,
        blueprint_id,
        db
    )

    return {
        "status": "running",
        "blueprint_id": blueprint_id,
        "agent_type": agent_type,
        "message": f"{agent_type} agent is running. Check back in 2-3 minutes."
    }


@router.get("/{blueprint_id}/status")
async def get_agent_status(
    blueprint_id: str,
    agent_type: str = "blueprint",
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Get agent execution status (check if results are ready)."""
    try:
        bp_id = ObjectId(blueprint_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid blueprint ID"
        )

    blueprint = await db.blueprints.find_one({
        "_id": bp_id,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not blueprint:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blueprint not found"
        )

    # Map agent type to field name
    field_mapping = {
        "blueprint": "blueprint_agent_result",
        "seo": "seo_agent_result",
        "email": "email_agent_result",
        "gtm": "gtm_agent_result",
        "financial": "financial_agent_result",
        "affiliate": "affiliate_agent_result",
        "social": "social_agent_result",
    }

    field_name = field_mapping.get(agent_type)
    if not field_name:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unknown agent type: {agent_type}"
        )

    result = blueprint.get(field_name)

    if result is None:
        return {
            "status": "not_started",
            "agent_type": agent_type,
            "result": None
        }

    if isinstance(result, dict) and "error" in result:
        return {
            "status": "error",
            "agent_type": agent_type,
            "error": result.get("error"),
            "result": None
        }

    return {
        "status": "complete",
        "agent_type": agent_type,
        "result": result
    }
