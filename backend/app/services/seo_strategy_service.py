from motor.motor_asyncio import AsyncDatabase
from app.agents.seo_agent import SEOAgent
from bson.objectid import ObjectId
from datetime import datetime
import logging
import uuid

logger = logging.getLogger(__name__)

class SEOStrategyService:
    """Service to execute SEO strategy agent and store results"""

    def __init__(self, db: AsyncDatabase):
        self.db = db
        self.blueprints_collection = db["blueprints"]
        self.agent_runs_collection = db["agent_runs"]

    async def run_seo_agent(
        self,
        blueprint_id: str,
        business_idea: str,
        description: str = None,
        industry: str = None,
        target_keywords: str = None,
        budget: str = "unknown",
        timeline: str = "12 months",
    ) -> dict:
        """Run SEO strategy agent and store results"""

        agent_run_id = str(uuid.uuid4())

        try:
            # Log agent run start
            await self.agent_runs_collection.insert_one({
                "_id": agent_run_id,
                "blueprint_id": blueprint_id,
                "agent_type": "seo",
                "status": "processing",
                "created_at": datetime.utcnow(),
                "completed_at": None,
            })

            # Run the agent
            agent = SEOAgent()
            result = await agent.run(
                business_idea=business_idea,
                description=description,
                industry=industry,
                target_keywords=target_keywords,
                budget=budget,
                timeline=timeline,
            )

            # Store results in blueprint
            await self.blueprints_collection.update_one(
                {"_id": ObjectId(blueprint_id)},
                {"$set": {
                    "seo_strategy": {
                        "target_keywords": result.get("target_keywords"),
                        "content_strategy": result.get("content_strategy"),
                        "technical_seo": result.get("technical_seo"),
                        "link_building": result.get("link_building"),
                        "competitive_analysis": result.get("competitive_analysis"),
                        "implementation_roadmap": result.get("implementation_roadmap"),
                        "success_metrics": result.get("success_metrics"),
                        "quick_wins": result.get("quick_wins"),
                    },
                    "seo_agent_run_id": agent_run_id,
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

            logger.info(f"SEO agent completed for {blueprint_id}")

            return {
                "agent_run_id": agent_run_id,
                "blueprint_id": blueprint_id,
                "status": "completed",
                "result": result,
            }

        except Exception as e:
            logger.error(f"SEO agent failed: {e}")

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
