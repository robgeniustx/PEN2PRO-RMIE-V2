from fastapi import APIRouter, HTTPException, status, Depends, BackgroundTasks
from app.dependencies import get_db, get_current_user, get_current_user_tier
from app.config import settings
from app.services.agent_runner_service import AgentRunnerService
from app.services.seo_strategy_service import SEOStrategyService
from motor.motor_asyncio import AsyncDatabase
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/{blueprint_id}/run-blueprint-agent")
async def run_blueprint_agent(
    blueprint_id: str,
    background_tasks: BackgroundTasks,
    current_user: dict = Depends(get_current_user),
    tier: str = Depends(get_current_user_tier),
    db: AsyncDatabase = Depends(get_db),
):
    """
    Run the Blueprint Agent to generate a comprehensive business plan.

    This endpoint triggers the GPT-4 powered Blueprint Agent which generates:
    - Executive summary
    - Market analysis
    - Target audience personas
    - Value proposition
    - Revenue model
    - Competitive advantage
    - Implementation roadmap
    - Resource requirements
    - Risk analysis
    - Success metrics
    - Founder coaching

    Pro tier gets: Detailed analysis, revenue projections, competitive benchmarking
    Elite tier gets: Everything + personalized coaching, scenario planning, investor materials
    """
    try:
        # Check tier access
        if tier == "starter":
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Blueprint Agent available for Pro and Elite tiers only"
            )

        # Get blueprint
        from bson.objectid import ObjectId
        blueprint = await db["blueprints"].find_one({"_id": ObjectId(blueprint_id)})

        if not blueprint:
            raise HTTPException(status_code=404, detail="Blueprint not found")

        if blueprint["user_id"] != current_user["user_id"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not authorized"
            )

        # Run agent in background
        service = AgentRunnerService(db)

        # Start async agent run
        background_tasks.add_task(
            service.run_blueprint_agent,
            blueprint_id=blueprint_id,
            business_idea=blueprint.get("business_idea"),
            description=blueprint.get("description"),
            category=blueprint.get("category"),
            industry=blueprint.get("industry"),
        )

        return {
            "message": "Blueprint agent is analyzing your business idea...",
            "blueprint_id": blueprint_id,
            "tier": tier,
            "estimated_time": "2-3 minutes",
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Agent execution error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to run agent"
        )


@router.post("/{blueprint_id}/run-seo-agent")
async def run_seo_agent(
    blueprint_id: str,
    background_tasks: BackgroundTasks,
    current_user: dict = Depends(get_current_user),
    tier: str = Depends(get_current_user_tier),
    db: AsyncDatabase = Depends(get_db),
):
    """
    Run the SEO Strategy Agent to generate organic growth strategy.

    This endpoint triggers the GPT-4 powered SEO Agent which generates:
    - Target keywords (high-intent, long-tail, branded)
    - Content strategy with pillar topics and clusters
    - Technical SEO recommendations
    - Link building strategy
    - Competitive analysis
    - Implementation roadmap
    - Success metrics (Month 3/6/12)
    - Quick wins

    Pro tier gets: Strategic keyword targeting, content calendar, basic link strategy
    Elite tier gets: Everything + advanced competitive analysis, advanced optimization tactics
    """
    try:
        # Check tier access
        if tier == "starter":
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="SEO Agent available for Pro and Elite tiers only"
            )

        # Get blueprint
        from bson.objectid import ObjectId
        blueprint = await db["blueprints"].find_one({"_id": ObjectId(blueprint_id)})

        if not blueprint:
            raise HTTPException(status_code=404, detail="Blueprint not found")

        if blueprint["user_id"] != current_user["user_id"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not authorized"
            )

        # Run agent in background
        service = SEOStrategyService(db)

        # Start async agent run
        background_tasks.add_task(
            service.run_seo_agent,
            blueprint_id=blueprint_id,
            business_idea=blueprint.get("business_idea"),
            description=blueprint.get("description"),
            industry=blueprint.get("industry"),
            target_keywords=blueprint.get("target_keywords", ""),
            budget=blueprint.get("estimated_investment", "unknown"),
            timeline=f"{blueprint.get('timeline_weeks', 12)} weeks",
        )

        return {
            "message": "SEO agent is developing your organic growth strategy...",
            "blueprint_id": blueprint_id,
            "tier": tier,
            "estimated_time": "2-3 minutes",
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"SEO agent execution error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to run SEO agent"
        )


@router.get("/{blueprint_id}/status")
async def get_agent_status(
    blueprint_id: str,
    agent_type: str = "blueprint",
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db),
):
    """
    Get the status of an agent run for a blueprint.

    Query params:
    - agent_type: "blueprint", "seo", "social", "affiliate", "email", "gtm", "financial" (default: "blueprint")

    Returns:
    - status: "processing", "completed", or "failed"
    - message: Status message
    - result: Agent results if completed
    """
    try:
        from bson.objectid import ObjectId
        blueprint = await db["blueprints"].find_one({"_id": ObjectId(blueprint_id)})

        if not blueprint:
            raise HTTPException(status_code=404, detail="Blueprint not found")

        if blueprint["user_id"] != current_user["user_id"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not authorized"
            )

        # Map agent types to blueprint fields
        agent_field_map = {
            "blueprint": ("executive_summary", "agent_run_id"),
            "seo": ("seo_strategy", "seo_agent_run_id"),
            "social": ("social_strategy", "social_agent_run_id"),
            "affiliate": ("affiliate_strategy", "affiliate_agent_run_id"),
            "email": ("email_strategy", "email_agent_run_id"),
            "gtm": ("gtm_strategy", "gtm_agent_run_id"),
            "financial": ("financial_strategy", "financial_agent_run_id"),
        }

        result_field, run_id_field = agent_field_map.get(agent_type, ("executive_summary", "agent_run_id"))

        # Check if blueprint has agent results
        if blueprint.get(result_field):
            return {
                "status": "completed",
                "message": f"{agent_type.capitalize()} agent completed successfully",
                "blueprint_id": blueprint_id,
                "agent_type": agent_type,
                "agent_run_id": blueprint.get(run_id_field),
                "updated_at": blueprint.get("updated_at"),
            }
        elif blueprint.get(run_id_field):
            # Check agent_runs collection for status
            agent_run = await db["agent_runs"].find_one({"_id": blueprint.get(run_id_field)})
            if agent_run:
                return {
                    "status": agent_run.get("status", "processing"),
                    "message": f"{agent_type.capitalize()} agent run status: {agent_run.get('status', 'unknown')}",
                    "blueprint_id": blueprint_id,
                    "agent_type": agent_type,
                    "agent_run_id": agent_run.get("_id"),
                }

        return {
            "status": "not_started",
            "message": f"No {agent_type} agent run has been initiated for this blueprint",
            "blueprint_id": blueprint_id,
            "agent_type": agent_type,
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Status check error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to get agent status"
        )
