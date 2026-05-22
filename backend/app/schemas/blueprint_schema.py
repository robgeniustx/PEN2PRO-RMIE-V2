from pydantic import BaseModel, Field
from typing import Optional, List, Dict
from datetime import datetime

class CreateBlueprintRequest(BaseModel):
    """Create new blueprint request"""
    business_idea: str = Field(..., min_length=3, max_length=200)
    description: Optional[str] = Field(None, max_length=1000)
    category: Optional[str] = None  # e.g., SaaS, E-commerce, Service
    industry: Optional[str] = None
    tags: Optional[List[str]] = None

    class Config:
        json_schema_extra = {
            "example": {
                "business_idea": "AI-powered pressure washing scheduling platform",
                "description": "Mobile app for scheduling and managing pressure washing jobs",
                "category": "SaaS",
                "industry": "Service Industry",
                "tags": ["AI", "Mobile", "B2B"]
            }
        }

class UpdateBlueprintRequest(BaseModel):
    """Update blueprint request"""
    business_idea: Optional[str] = Field(None, min_length=3, max_length=200)
    description: Optional[str] = Field(None, max_length=1000)
    status: Optional[str] = None  # draft, active, completed, archived
    executive_summary: Optional[str] = None
    market_analysis: Optional[str] = None
    target_audience: Optional[str] = None
    value_proposition: Optional[str] = None
    revenue_model: Optional[str] = None
    competitive_advantage: Optional[str] = None
    timeline_weeks: Optional[int] = None
    estimated_investment: Optional[int] = None
    tags: Optional[List[str]] = None

class RoadmapPhase(BaseModel):
    """Roadmap phase/milestone"""
    phase: int
    title: str
    description: str
    duration_weeks: int
    key_milestones: List[str] = []
    deliverables: List[str] = []

class ActionItem(BaseModel):
    """Action item / task"""
    title: str
    description: Optional[str] = None
    completed: bool = False
    priority: Optional[str] = None  # high, medium, low

class BlueprintResponse(BaseModel):
    """Blueprint profile response"""
    id: str = Field(alias="_id")
    user_id: str
    business_idea: str
    description: Optional[str] = None
    status: str
    executive_summary: Optional[str] = None
    market_analysis: Optional[str] = None
    target_audience: Optional[str] = None
    value_proposition: Optional[str] = None
    revenue_model: Optional[str] = None
    competitive_advantage: Optional[str] = None
    roadmap: List[Dict] = []
    action_items: List[Dict] = []
    resources_needed: List[str] = []
    timeline_weeks: Optional[int] = None
    estimated_investment: Optional[int] = None
    tags: List[str] = []
    category: Optional[str] = None
    industry: Optional[str] = None
    agent_run_id: Optional[str] = None
    agent_model_used: Optional[str] = None
    version: int
    created_at: datetime
    updated_at: datetime
    completed_at: Optional[datetime] = None

    class Config:
        populate_by_name = True

class BlueprintListResponse(BaseModel):
    """Blueprint list item (summary)"""
    id: str = Field(alias="_id")
    business_idea: str
    status: str
    category: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        populate_by_name = True

class RunBlueprintAgentRequest(BaseModel):
    """Request to run blueprint agent"""
    blueprint_id: str
    regenerate: bool = False  # Force regenerate even if completed

class BlueprintAgentResponse(BaseModel):
    """Blueprint agent response"""
    agent_run_id: str
    blueprint_id: str
    status: str  # processing, completed, failed
    executive_summary: str
    market_analysis: str
    target_audience: str
    value_proposition: str
    revenue_model: str
    competitive_advantage: str
    roadmap: List[RoadmapPhase]
    action_items: List[ActionItem]
    timeline_weeks: int
    estimated_investment: int

