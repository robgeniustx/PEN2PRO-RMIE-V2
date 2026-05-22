from motor.motor_asyncio import AsyncDatabase
from app.models.blueprint import Blueprint, BlueprintStatus
from app.schemas.blueprint_schema import CreateBlueprintRequest, UpdateBlueprintRequest
from bson.objectid import ObjectId
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class BlueprintService:
    """Blueprint service with CRUD and AI integration"""

    def __init__(self, db: AsyncDatabase):
        self.db = db
        self.blueprints_collection = db["blueprints"]

    async def create_blueprint(self, user_id: str, req: CreateBlueprintRequest) -> dict:
        """Create new blueprint for user"""
        blueprint = Blueprint(
            user_id=user_id,
            business_idea=req.business_idea,
            description=req.description,
            category=req.category,
            industry=req.industry,
            tags=req.tags or [],
            status=BlueprintStatus.DRAFT,
        )

        result = await self.blueprints_collection.insert_one(blueprint.to_dict())
        blueprint._id = str(result.inserted_id)

        logger.info(f"Blueprint created: {blueprint._id} for user {user_id}")

        return {
            "_id": blueprint._id,
            "business_idea": blueprint.business_idea,
            "status": blueprint.status.value,
        }

    async def get_blueprint(self, blueprint_id: str) -> Blueprint:
        """Get blueprint by ID"""
        try:
            doc = await self.blueprints_collection.find_one({"_id": ObjectId(blueprint_id)})
            if not doc:
                raise ValueError("Blueprint not found")
            return Blueprint.from_dict(doc)
        except Exception as e:
            logger.error(f"Error fetching blueprint {blueprint_id}: {e}")
            raise

    async def get_user_blueprints(self, user_id: str, skip: int = 0, limit: int = 20) -> tuple:
        """Get all blueprints for user with pagination"""
        query = {"user_id": user_id}

        total = await self.blueprints_collection.count_documents(query)

        docs = await self.blueprints_collection.find(query)\
            .sort("created_at", -1)\
            .skip(skip)\
            .limit(limit)\
            .to_list(None)

        blueprints = [Blueprint.from_dict(doc) for doc in docs]
        return blueprints, total

    async def update_blueprint(self, blueprint_id: str, user_id: str, req: UpdateBlueprintRequest) -> Blueprint:
        """Update blueprint"""
        # Verify ownership
        blueprint = await self.get_blueprint(blueprint_id)
        if blueprint.user_id != user_id:
            raise ValueError("Not authorized to update this blueprint")

        # Build update dict
        updates = {}
        if req.business_idea is not None:
            updates["business_idea"] = req.business_idea
        if req.description is not None:
            updates["description"] = req.description
        if req.status is not None:
            updates["status"] = req.status
            if req.status == "completed":
                updates["completed_at"] = datetime.utcnow()
        if req.executive_summary is not None:
            updates["executive_summary"] = req.executive_summary
        if req.market_analysis is not None:
            updates["market_analysis"] = req.market_analysis
        if req.target_audience is not None:
            updates["target_audience"] = req.target_audience
        if req.value_proposition is not None:
            updates["value_proposition"] = req.value_proposition
        if req.revenue_model is not None:
            updates["revenue_model"] = req.revenue_model
        if req.competitive_advantage is not None:
            updates["competitive_advantage"] = req.competitive_advantage
        if req.timeline_weeks is not None:
            updates["timeline_weeks"] = req.timeline_weeks
        if req.estimated_investment is not None:
            updates["estimated_investment"] = req.estimated_investment
        if req.tags is not None:
            updates["tags"] = req.tags

        updates["updated_at"] = datetime.utcnow()
        updates["version"] = blueprint.version + 1

        result = await self.blueprints_collection.find_one_and_update(
            {"_id": ObjectId(blueprint_id)},
            {"$set": updates},
            return_document=True
        )

        if not result:
            raise ValueError("Failed to update blueprint")

        logger.info(f"Blueprint updated: {blueprint_id}")
        return Blueprint.from_dict(result)

    async def delete_blueprint(self, blueprint_id: str, user_id: str) -> bool:
        """Delete blueprint (soft delete via status)"""
        blueprint = await self.get_blueprint(blueprint_id)
        if blueprint.user_id != user_id:
            raise ValueError("Not authorized to delete this blueprint")

        result = await self.blueprints_collection.update_one(
            {"_id": ObjectId(blueprint_id)},
            {"$set": {"status": "archived", "updated_at": datetime.utcnow()}}
        )

        logger.info(f"Blueprint archived: {blueprint_id}")
        return result.modified_count > 0

    async def get_blueprint_stats(self, user_id: str) -> dict:
        """Get user's blueprint statistics"""
        total = await self.blueprints_collection.count_documents({"user_id": user_id})
        active = await self.blueprints_collection.count_documents(
            {"user_id": user_id, "status": "active"}
        )
        completed = await self.blueprints_collection.count_documents(
            {"user_id": user_id, "status": "completed"}
        )
        draft = await self.blueprints_collection.count_documents(
            {"user_id": user_id, "status": "draft"}
        )

        return {
            "total": total,
            "active": active,
            "completed": completed,
            "draft": draft,
        }

    async def store_agent_results(self, blueprint_id: str, agent_results: dict) -> Blueprint:
        """Store AI agent results in blueprint"""
        updates = {
            "executive_summary": agent_results.get("executive_summary"),
            "market_analysis": agent_results.get("market_analysis"),
            "target_audience": agent_results.get("target_audience"),
            "value_proposition": agent_results.get("value_proposition"),
            "revenue_model": agent_results.get("revenue_model"),
            "competitive_advantage": agent_results.get("competitive_advantage"),
            "roadmap": agent_results.get("roadmap", []),
            "action_items": agent_results.get("action_items", []),
            "resources_needed": agent_results.get("resources_needed", []),
            "timeline_weeks": agent_results.get("timeline_weeks"),
            "estimated_investment": agent_results.get("estimated_investment"),
            "agent_run_id": agent_results.get("agent_run_id"),
            "agent_model_used": agent_results.get("agent_model_used", "gpt-4"),
            "status": "active",
            "updated_at": datetime.utcnow(),
        }

        result = await self.blueprints_collection.find_one_and_update(
            {"_id": ObjectId(blueprint_id)},
            {"$set": updates},
            return_document=True
        )

        if not result:
            raise ValueError("Blueprint not found")

        logger.info(f"Agent results stored in blueprint: {blueprint_id}")
        return Blueprint.from_dict(result)

