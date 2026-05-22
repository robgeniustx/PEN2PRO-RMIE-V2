from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId

from database import get_database
from models import (
    BlueprintCreate,
    BlueprintUpdate,
    BlueprintResponse,
)
from security import get_current_user

router = APIRouter(prefix="/blueprints", tags=["blueprints"])


@router.post("", response_model=BlueprintResponse, status_code=status.HTTP_201_CREATED)
async def create_blueprint(
    blueprint_data: BlueprintCreate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Create a new blueprint."""
    # Check blueprint limit based on tier
    user = await db.users.find_one({"_id": ObjectId(current_user["user_id"])})
    tier = user.get("tier", "STARTER")

    blueprint_limits = {
        "STARTER": 3,
        "PRO": 20,
        "ELITE": float("inf"),
        "FOUNDER": float("inf"),
    }

    # Count existing blueprints (not archived)
    count = await db.blueprints.count_documents({
        "user_id": ObjectId(current_user["user_id"]),
        "status": {"$ne": "completed"}
    })

    if count >= blueprint_limits.get(tier, 3):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Blueprint limit reached for {tier} tier"
        )

    # Create blueprint
    blueprint_doc = {
        "user_id": ObjectId(current_user["user_id"]),
        "business_idea": blueprint_data.business_idea,
        "description": blueprint_data.description,
        "category": blueprint_data.category,
        "industry": blueprint_data.industry,
        "timeline_weeks": blueprint_data.timeline_weeks or 12,
        "estimated_investment": blueprint_data.estimated_investment,
        "status": blueprint_data.status or "draft",
        "blueprint_agent_result": None,
        "seo_agent_result": None,
        "email_agent_result": None,
        "gtm_agent_result": None,
        "financial_agent_result": None,
        "affiliate_agent_result": None,
        "social_agent_result": None,
        "created_at": None,  # Will be set by DB
        "updated_at": None,
    }

    result = await db.blueprints.insert_one(blueprint_doc)
    blueprint_doc["_id"] = result.inserted_id

    return BlueprintResponse(
        _id=str(blueprint_doc["_id"]),
        user_id=str(blueprint_doc["user_id"]),
        **{k: v for k, v in blueprint_doc.items() if k not in ["_id", "user_id"]}
    )


@router.get("", response_model=List[BlueprintResponse])
async def list_blueprints(
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """List all blueprints for current user."""
    blueprints = await db.blueprints.find({
        "user_id": ObjectId(current_user["user_id"])
    }).sort("created_at", -1).to_list(None)

    return [
        BlueprintResponse(
            _id=str(bp["_id"]),
            user_id=str(bp["user_id"]),
            **{k: v for k, v in bp.items() if k not in ["_id", "user_id"]}
        )
        for bp in blueprints
    ]


@router.get("/{blueprint_id}", response_model=BlueprintResponse)
async def get_blueprint(
    blueprint_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Get a specific blueprint."""
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

    return BlueprintResponse(
        _id=str(blueprint["_id"]),
        user_id=str(blueprint["user_id"]),
        **{k: v for k, v in blueprint.items() if k not in ["_id", "user_id"]}
    )


@router.put("/{blueprint_id}", response_model=BlueprintResponse)
async def update_blueprint(
    blueprint_id: str,
    blueprint_data: BlueprintUpdate,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Update a blueprint."""
    try:
        bp_id = ObjectId(blueprint_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid blueprint ID"
        )

    # Check ownership
    blueprint = await db.blueprints.find_one({
        "_id": bp_id,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not blueprint:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blueprint not found"
        )

    # Build update dict (only include provided fields)
    update_data = {}
    if blueprint_data.business_idea is not None:
        update_data["business_idea"] = blueprint_data.business_idea
    if blueprint_data.description is not None:
        update_data["description"] = blueprint_data.description
    if blueprint_data.category is not None:
        update_data["category"] = blueprint_data.category
    if blueprint_data.industry is not None:
        update_data["industry"] = blueprint_data.industry
    if blueprint_data.timeline_weeks is not None:
        update_data["timeline_weeks"] = blueprint_data.timeline_weeks
    if blueprint_data.estimated_investment is not None:
        update_data["estimated_investment"] = blueprint_data.estimated_investment
    if blueprint_data.status is not None:
        update_data["status"] = blueprint_data.status

    if not update_data:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No fields to update"
        )

    result = await db.blueprints.update_one(
        {"_id": bp_id},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blueprint not found"
        )

    # Fetch updated blueprint
    updated = await db.blueprints.find_one({"_id": bp_id})

    return BlueprintResponse(
        _id=str(updated["_id"]),
        user_id=str(updated["user_id"]),
        **{k: v for k, v in updated.items() if k not in ["_id", "user_id"]}
    )


@router.delete("/{blueprint_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_blueprint(
    blueprint_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncIOMotorDatabase = Depends(get_database),
):
    """Delete a blueprint (mark as completed/archived)."""
    try:
        bp_id = ObjectId(blueprint_id)
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid blueprint ID"
        )

    # Check ownership
    blueprint = await db.blueprints.find_one({
        "_id": bp_id,
        "user_id": ObjectId(current_user["user_id"])
    })

    if not blueprint:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Blueprint not found"
        )

    # Archive instead of delete
    await db.blueprints.update_one(
        {"_id": bp_id},
        {"$set": {"status": "completed"}}
    )
