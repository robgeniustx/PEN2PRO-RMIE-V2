from datetime import datetime
from typing import Optional, List, Dict
from enum import Enum

class BlueprintStatus(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    COMPLETED = "completed"
    ARCHIVED = "archived"

class Blueprint:
    """MongoDB Blueprint Document Model"""

    collection_name = "blueprints"

    def __init__(
        self,
        user_id: str,
        business_idea: str,
        description: Optional[str] = None,
        status: BlueprintStatus = BlueprintStatus.DRAFT,
        _id: Optional[str] = None,
        # Roadmap/Strategy fields
        executive_summary: Optional[str] = None,
        market_analysis: Optional[str] = None,
        target_audience: Optional[str] = None,
        value_proposition: Optional[str] = None,
        revenue_model: Optional[str] = None,
        competitive_advantage: Optional[str] = None,
        # Implementation
        roadmap: Optional[List[Dict]] = None,  # Phases with milestones
        action_items: Optional[List[Dict]] = None,  # Checklist of tasks
        resources_needed: Optional[List[str]] = None,  # Team, tools, budget
        timeline_weeks: Optional[int] = None,
        estimated_investment: Optional[int] = None,  # In cents
        # Metadata
        tags: Optional[List[str]] = None,
        category: Optional[str] = None,  # e.g., "SaaS", "E-commerce", "Service"
        industry: Optional[str] = None,
        # AI Agent Results
        agent_run_id: Optional[str] = None,
        agent_model_used: Optional[str] = None,  # e.g., "gpt-4"
        # Tracking
        version: int = 1,
        created_at: Optional[datetime] = None,
        updated_at: Optional[datetime] = None,
        completed_at: Optional[datetime] = None,
    ):
        self._id = _id
        self.user_id = user_id
        self.business_idea = business_idea
        self.description = description
        self.status = status
        self.executive_summary = executive_summary
        self.market_analysis = market_analysis
        self.target_audience = target_audience
        self.value_proposition = value_proposition
        self.revenue_model = revenue_model
        self.competitive_advantage = competitive_advantage
        self.roadmap = roadmap or []
        self.action_items = action_items or []
        self.resources_needed = resources_needed or []
        self.timeline_weeks = timeline_weeks
        self.estimated_investment = estimated_investment
        self.tags = tags or []
        self.category = category
        self.industry = industry
        self.agent_run_id = agent_run_id
        self.agent_model_used = agent_model_used
        self.version = version
        self.created_at = created_at or datetime.utcnow()
        self.updated_at = updated_at or datetime.utcnow()
        self.completed_at = completed_at

    def to_dict(self):
        """Convert to MongoDB document"""
        doc = {
            "user_id": self.user_id,
            "business_idea": self.business_idea,
            "description": self.description,
            "status": self.status.value,
            "executive_summary": self.executive_summary,
            "market_analysis": self.market_analysis,
            "target_audience": self.target_audience,
            "value_proposition": self.value_proposition,
            "revenue_model": self.revenue_model,
            "competitive_advantage": self.competitive_advantage,
            "roadmap": self.roadmap,
            "action_items": self.action_items,
            "resources_needed": self.resources_needed,
            "timeline_weeks": self.timeline_weeks,
            "estimated_investment": self.estimated_investment,
            "tags": self.tags,
            "category": self.category,
            "industry": self.industry,
            "agent_run_id": self.agent_run_id,
            "agent_model_used": self.agent_model_used,
            "version": self.version,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "completed_at": self.completed_at,
        }
        if self._id:
            doc["_id"] = self._id
        return doc

    @staticmethod
    def from_dict(doc: dict) -> "Blueprint":
        """Create Blueprint from MongoDB document"""
        return Blueprint(
            _id=doc.get("_id"),
            user_id=doc.get("user_id", ""),
            business_idea=doc.get("business_idea", ""),
            description=doc.get("description"),
            status=BlueprintStatus(doc.get("status", "draft")),
            executive_summary=doc.get("executive_summary"),
            market_analysis=doc.get("market_analysis"),
            target_audience=doc.get("target_audience"),
            value_proposition=doc.get("value_proposition"),
            revenue_model=doc.get("revenue_model"),
            competitive_advantage=doc.get("competitive_advantage"),
            roadmap=doc.get("roadmap", []),
            action_items=doc.get("action_items", []),
            resources_needed=doc.get("resources_needed", []),
            timeline_weeks=doc.get("timeline_weeks"),
            estimated_investment=doc.get("estimated_investment"),
            tags=doc.get("tags", []),
            category=doc.get("category"),
            industry=doc.get("industry"),
            agent_run_id=doc.get("agent_run_id"),
            agent_model_used=doc.get("agent_model_used"),
            version=doc.get("version", 1),
            created_at=doc.get("created_at"),
            updated_at=doc.get("updated_at"),
            completed_at=doc.get("completed_at"),
        )

