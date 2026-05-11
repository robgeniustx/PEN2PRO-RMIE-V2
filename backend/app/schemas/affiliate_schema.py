from datetime import datetime
from typing import Any, Dict, List, Literal, Optional

from pydantic import BaseModel


class AffiliateGenerateRequest(BaseModel):
    blueprint_id: Optional[int] = None
    tier: str
    business_name: Optional[str] = None
    skills: Optional[str] = None
    interests: Optional[str] = None
    audience: Optional[str] = None
    preferred_platforms: Optional[List[str]] = None
    niche: Optional[str] = None
    goal: Optional[Literal['content_income', 'product_reviews', 'service_referrals', 'digital_tools', 'local_business_referrals']] = None
    experience_level: Optional[str] = None


class AffiliateGenerateResponse(BaseModel):
    status: str
    niche_strategy: Dict[str, Any]
    product_categories: List[Dict[str, Any]]
    funnel: Dict[str, Any]
    review_post: Dict[str, Any]
    comparison_post: Dict[str, Any]
    disclosure: str
    traffic_plan: List[Dict[str, Any]]
    content_plan: List[Dict[str, Any]]
    link_tracker: List[Dict[str, Any]]
    locked_sections: Optional[List[str]] = None


class AffiliateLinkCreate(BaseModel):
    product_name: str
    product_category: Optional[str] = None
    affiliate_url: Optional[str] = None
    platform: Optional[str] = None
    estimated_commission: Optional[float] = None
    notes: Optional[str] = None
    affiliate_funnel_id: Optional[int] = None


class AffiliateLinkResponse(BaseModel):
    id: int
    product_name: str
    product_category: Optional[str] = None
    affiliate_url: Optional[str] = None
    platform: Optional[str] = None
    clicks: int
    conversions: int
    estimated_commission: Optional[float] = None
    notes: Optional[str] = None
    created_at: datetime
    updated_at: datetime


class AffiliateLinkUpdate(BaseModel):
    product_name: Optional[str] = None
    product_category: Optional[str] = None
    affiliate_url: Optional[str] = None
    platform: Optional[str] = None
    clicks: Optional[int] = None
    conversions: Optional[int] = None
    estimated_commission: Optional[float] = None
    notes: Optional[str] = None
