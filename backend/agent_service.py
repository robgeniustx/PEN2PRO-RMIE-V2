import asyncio
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId

from agents.blueprint_agent import (
    BlueprintAgent,
    SEOAgent,
    EmailAgent,
    GTMAgent,
    FinancialAgent,
    AffiliateAgent,
    SocialAgent,
)


class AgentService:
    """Service to run agents and store results."""

    AGENTS = {
        "blueprint": BlueprintAgent,
        "seo": SEOAgent,
        "email": EmailAgent,
        "gtm": GTMAgent,
        "financial": FinancialAgent,
        "affiliate": AffiliateAgent,
        "social": SocialAgent,
    }

    FIELD_MAPPING = {
        "blueprint": "blueprint_agent_result",
        "seo": "seo_agent_result",
        "email": "email_agent_result",
        "gtm": "gtm_agent_result",
        "financial": "financial_agent_result",
        "affiliate": "affiliate_agent_result",
        "social": "social_agent_result",
    }

    @staticmethod
    async def run_agent(
        agent_type: str,
        blueprint_id: str,
        db: AsyncIOMotorDatabase,
    ) -> dict:
        """Run a specific agent and store results."""
        try:
            # Fetch blueprint
            bp = await db.blueprints.find_one({"_id": ObjectId(blueprint_id)})
            if not bp:
                return {"error": "Blueprint not found"}

            # Get agent class
            agent_class = AgentService.AGENTS.get(agent_type)
            if not agent_class:
                return {"error": f"Unknown agent type: {agent_type}"}

            # Run agent
            agent = agent_class()
            result = await agent.execute(bp)

            # Store result
            field_name = AgentService.FIELD_MAPPING.get(agent_type)
            await db.blueprints.update_one(
                {"_id": ObjectId(blueprint_id)},
                {"$set": {field_name: result}}
            )

            return result

        except Exception as e:
            return {"error": str(e)}

    @staticmethod
    def run_agent_background(
        agent_type: str,
        blueprint_id: str,
        db: AsyncIOMotorDatabase,
    ):
        """Queue agent to run in background (for FastAPI BackgroundTasks)."""
        asyncio.create_task(AgentService.run_agent(agent_type, blueprint_id, db))
