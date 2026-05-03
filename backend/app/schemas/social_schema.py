from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


class SocialPostSchema(BaseModel):
    platform: str
    post_type: str
    hook: str
    caption: str
    cta: str
    hashtags: List[str]
    script: Optional[str] = None
    scheduled_day: Optional[int] = None


class SocialGenerateRequest(BaseModel):
    blueprint_id: Optional[int] = None
    tier: str = Field(default="free")
    business_name: str
    offer: str
    ideal_customer: str
    platform_focus: List[str] = Field(default_factory=list)
    brand_voice: Optional[Dict[str, Any]] = None
    calendar_length: str = Field(default="7_day")
    goal: str
    experience_level: Optional[str] = "beginner"


class SocialGenerateResponse(BaseModel):
    status: str
    strategy: Dict[str, str]
    calendar: Dict[str, Any]
    posts: List[Dict[str, Any]]
    scripts: List[Dict[str, Any]]
    checklist: List[str]
    repurposing_plan: List[str]
    brand_voice: Dict[str, Any]
    locked_sections: Optional[List[str]] = None
