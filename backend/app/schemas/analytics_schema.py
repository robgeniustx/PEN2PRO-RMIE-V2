from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel

class AnalyticsEventCreate(BaseModel):
    event_name: str
    event_category: Optional[str] = None
    tier: Optional[str] = None
    page_path: Optional[str] = None
    session_id: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None

class AnalyticsEventResponse(AnalyticsEventCreate):
    id: int
    created_at: datetime

class FeatureUsageCreate(BaseModel):
    feature_name: str
    module_name: str
    tier: Optional[str] = None

class ConversionEventCreate(BaseModel):
    source_page: Optional[str] = None
    prompt_location: Optional[str] = None
    from_tier: Optional[str] = None
    to_tier: Optional[str] = None
    conversion_type: str
    amount: Optional[float] = None
    currency: Optional[str] = None
    stripe_session_id: Optional[str] = None
    session_id: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None

class AdminMetricsResponse(BaseModel):
    total_users: int
    total_blueprints: int
    total_events: int
    total_upgrade_clicks: int
    total_checkouts_started: int
    total_checkouts_completed: int
    estimated_revenue: float
    active_tier_counts: Dict[str, int]
    top_features: List[Dict[str, Any]]
    module_usage: List[Dict[str, Any]]
    recent_activity: List[Dict[str, Any]]
    conversion_summary: Dict[str, Any]
    funnel_summary: Dict[str, int]
