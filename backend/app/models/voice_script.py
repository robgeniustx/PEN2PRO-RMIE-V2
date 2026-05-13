"""Voice script model for P2P AI Voice Agent."""
from datetime import datetime, timezone
from typing import List, Optional
from pydantic import BaseModel, Field


class ScriptStep(BaseModel):
    order: int
    type: str           # greeting | qualify | offer | objection | close | transfer | goodbye
    text: str
    condition: Optional[str] = None


class VoiceScript(BaseModel):
    id: str
    name: str
    industry: Optional[str] = None
    script_mode: str = "general"   # general | quote-intake | appointment | after-hours | emergency
    greeting: str = "Thank you for calling. How can I help you today?"
    steps: List[ScriptStep] = []
    is_active: bool = False
    is_after_hours: bool = False
    business_hours_start: str = "08:00"
    business_hours_end: str = "18:00"
    timezone: str = "America/Chicago"
    transfer_number: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
