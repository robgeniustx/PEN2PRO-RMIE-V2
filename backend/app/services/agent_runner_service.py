from motor.motor_asyncio import AsyncDatabase
from app.agents.blueprint_agent import BlueprintAgent
from app.models.blueprint import Blueprint
from bson.objectid import ObjectId
from datetime import datetime
import logging
import uuid

logger = logging.getLogger(__name__)

class AgentRunnerService:
    """Service to execute agents and store results"""

    def __init__(self, db: AsyncDatabase):
        self.db = db
        self.blueprints_collection = db["blueprints"]
        self.agent_runs_collection = db["agent_runs"]

    async def run_blueprint_agent(
        self,
        blueprint_id: str,
        business_idea: str,
        description: str = None,
        category: str = None,
        industry: str = None,
        user_goals: str = None,
    ) -> dict:
        """Run blueprint agent and store results"""

        agent_run_id = str(uuid.uuid4())

        try:
            # Log agent run start
            await self.agent_runs_collection.insert_one({
                "_id": agent_run_id,
                "blueprint_id": blueprint_id,
                "status": "processing",
                "created_at": datetime.utcnow(),
                "completed_at": None,
            })

            # Run the agent
            agent = BlueprintAgent()
            result = await agent.run(
                business_idea=business_idea,
                description=description,
                category=category,
                industry=industry,
                user_goals=user_goals,
            )

            # Store results in blueprint
            await self.blueprints_collection.update_one(
                {"_id": ObjectId(blueprint_id)},
                {"$set": {
                    "executive_summary": result.get("executive_summary"),
                    "market_analysis": result.get("market_analysis"),
                    "target_audience": result.get("target_audience"),
                    "value_proposition": result.get("value_proposition"),
                    "revenue_model": result.get("revenue_model"),
                    "competitive_advantage": result.get("competitive_advantage"),
                    "roadmap": result.get("roadmap", []),
                    "action_items": result.get("action_items", []),
                    "resources_needed": result.get("resources_needed", []),
                    "timeline_weeks": result.get("timeline_weeks", 12),
                    "estimated_investment": result.get("estimated_investment"),
                    "agent_run_id": agent_run_id,
                    "agent_model_used": "gpt-4",
                    "status": "active",
                    "updated_at": datetime.utcnow(),
                }}
            )

            # Log completion
            await self.agent_runs_collection.update_one(
                {"_id": agent_run_id},
                {"$set": {
                    "status": "completed",
                    "completed_at": datetime.utcnow(),
                }}
            )

            logger.info(f"Blueprint agent completed for {blueprint_id}")

            return {
                "agent_run_id": agent_run_id,
                "blueprint_id": blueprint_id,
                "status": "completed",
                "result": result,
            }

        except Exception as e:
            logger.error(f"Blueprint agent failed: {e}")

            # Log failure
            await self.agent_runs_collection.update_one(
                {"_id": agent_run_id},
                {"$set": {
                    "status": "failed",
                    "error": str(e),
                    "completed_at": datetime.utcnow(),
                }}
            )

            raise
