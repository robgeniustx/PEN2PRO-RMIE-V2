from fastapi import APIRouter, HTTPException, status, Depends, Query
from app.dependencies import get_db, get_current_user, get_current_user_tier
from app.config import settings
from app.services.blueprint_service import BlueprintService
from app.schemas.blueprint_schema import (
    CreateBlueprintRequest, UpdateBlueprintRequest, BlueprintResponse,
    BlueprintListResponse, RunBlueprintAgentRequest
)
from motor.motor_asyncio import AsyncDatabase
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/", response_model=BlueprintResponse, status_code=status.HTTP_201_CREATED)
async def create_blueprint(
    req: CreateBlueprintRequest,
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db),
    tier: str = Depends(get_current_user_tier)
):
    """Create new blueprint"""
    try:
        # Check tier limits
        service = BlueprintService(db)
        stats = await service.get_blueprint_stats(current_user["user_id"])

        max_blueprints = settings.max_blueprints_starter
        if tier == "pro":
            max_blueprints = settings.max_blueprints_pro
        elif tier == "elite":
            max_blueprints = -1  # unlimited

        if max_blueprints > 0 and stats["total"] >= max_blueprints:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Blueprint limit reached for {tier} tier"
            )

        result = await service.create_blueprint(current_user["user_id"], req)
        blueprint = await service.get_blueprint(result["_id"])

        return {
            "_id": str(blueprint._id),
            "user_id": blueprint.user_id,
            "business_idea": blueprint.business_idea,
            "description": blueprint.description,
            "status": blueprint.status.value,
            "executive_summary": blueprint.executive_summary,
            "market_analysis": blueprint.market_analysis,
            "target_audience": blueprint.target_audience,
            "value_proposition": blueprint.value_proposition,
            "revenue_model": blueprint.revenue_model,
            "competitive_advantage": blueprint.competitive_advantage,
            "roadmap": blueprint.roadmap,
            "action_items": blueprint.action_items,
            "resources_needed": blueprint.resources_needed,
            "timeline_weeks": blueprint.timeline_weeks,
            "estimated_investment": blueprint.estimated_investment,
            "tags": blueprint.tags,
            "category": blueprint.category,
            "industry": blueprint.industry,
            "agent_run_id": blueprint.agent_run_id,
            "agent_model_used": blueprint.agent_model_used,
            "version": blueprint.version,
            "created_at": blueprint.created_at,
            "updated_at": blueprint.updated_at,
            "completed_at": blueprint.completed_at,
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Create blueprint error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create blueprint"
        )

@router.get("/", response_model=list[BlueprintListResponse])
async def list_blueprints(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """List user's blueprints"""
    try:
        service = BlueprintService(db)
        blueprints, total = await service.get_user_blueprints(
            current_user["user_id"], skip, limit
        )

        return [
            {
                "_id": str(bp._id),
                "business_idea": bp.business_idea,
                "status": bp.status.value,
                "category": bp.category,
                "created_at": bp.created_at,
                "updated_at": bp.updated_at,
            }
            for bp in blueprints
        ]
    except Exception as e:
        logger.error(f"List blueprints error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch blueprints"
        )

@router.get("/{blueprint_id}", response_model=BlueprintResponse)
async def get_blueprint(
    blueprint_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Get blueprint by ID"""
    try:
        service = BlueprintService(db)
        blueprint = await service.get_blueprint(blueprint_id)

        if blueprint.user_id != current_user["user_id"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not authorized to view this blueprint"
            )

        return {
            "_id": str(blueprint._id),
            "user_id": blueprint.user_id,
            "business_idea": blueprint.business_idea,
            "description": blueprint.description,
            "status": blueprint.status.value,
            "executive_summary": blueprint.executive_summary,
            "market_analysis": blueprint.market_analysis,
            "target_audience": blueprint.target_audience,
            "value_proposition": blueprint.value_proposition,
            "revenue_model": blueprint.revenue_model,
            "competitive_advantage": blueprint.competitive_advantage,
            "roadmap": blueprint.roadmap,
            "action_items": blueprint.action_items,
            "resources_needed": blueprint.resources_needed,
            "timeline_weeks": blueprint.timeline_weeks,
            "estimated_investment": blueprint.estimated_investment,
            "tags": blueprint.tags,
            "category": blueprint.category,
            "industry": blueprint.industry,
            "agent_run_id": blueprint.agent_run_id,
            "agent_model_used": blueprint.agent_model_used,
            "version": blueprint.version,
            "created_at": blueprint.created_at,
            "updated_at": blueprint.updated_at,
            "completed_at": blueprint.completed_at,
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Get blueprint error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch blueprint"
        )

@router.put("/{blueprint_id}", response_model=BlueprintResponse)
async def update_blueprint(
    blueprint_id: str,
    req: UpdateBlueprintRequest,
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Update blueprint"""
    try:
        service = BlueprintService(db)
        blueprint = await service.update_blueprint(
            blueprint_id, current_user["user_id"], req
        )

        return {
            "_id": str(blueprint._id),
            "user_id": blueprint.user_id,
            "business_idea": blueprint.business_idea,
            "description": blueprint.description,
            "status": blueprint.status.value,
            "executive_summary": blueprint.executive_summary,
            "market_analysis": blueprint.market_analysis,
            "target_audience": blueprint.target_audience,
            "value_proposition": blueprint.value_proposition,
            "revenue_model": blueprint.revenue_model,
            "competitive_advantage": blueprint.competitive_advantage,
            "roadmap": blueprint.roadmap,
            "action_items": blueprint.action_items,
            "resources_needed": blueprint.resources_needed,
            "timeline_weeks": blueprint.timeline_weeks,
            "estimated_investment": blueprint.estimated_investment,
            "tags": blueprint.tags,
            "category": blueprint.category,
            "industry": blueprint.industry,
            "agent_run_id": blueprint.agent_run_id,
            "agent_model_used": blueprint.agent_model_used,
            "version": blueprint.version,
            "created_at": blueprint.created_at,
            "updated_at": blueprint.updated_at,
            "completed_at": blueprint.completed_at,
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Update blueprint error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update blueprint"
        )

@router.delete("/{blueprint_id}")
async def delete_blueprint(
    blueprint_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Delete blueprint"""
    try:
        service = BlueprintService(db)
        await service.delete_blueprint(blueprint_id, current_user["user_id"])
        return {"message": "Blueprint deleted"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Delete blueprint error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to delete blueprint"
        )

@router.get("/{blueprint_id}/stats")
async def get_blueprint_stats(
    current_user: dict = Depends(get_current_user),
    db: AsyncDatabase = Depends(get_db)
):
    """Get user's blueprint statistics"""
    try:
        service = BlueprintService(db)
        stats = await service.get_blueprint_stats(current_user["user_id"])
        return stats
    except Exception as e:
        logger.error(f"Get stats error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch stats"
        )
