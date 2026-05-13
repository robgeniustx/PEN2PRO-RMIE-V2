"""Opportunity / Deal model for P2P Command Center pipeline."""
from datetime import datetime, timezone
from typing import Optional
from pydantic import BaseModel, Field


class Opportunity(BaseModel):
    id: str
    name: str
    customer_id: Optional[str] = None
    customer_name: Optional[str] = None
    stage: str = "prospect"        # prospect | qualified | proposal | negotiation | won | lost
    value: float = 0.0
    probability: int = 0           # 0–100
    expected_close: Optional[datetime] = None
    source: Optional[str] = None   # referral | cold outreach | website | voice-agent | etc.
    notes: Optional[str] = None
    lost_reason: Optional[str] = None
    assigned_to: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
