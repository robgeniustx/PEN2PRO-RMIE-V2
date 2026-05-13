"""Call record model for P2P AI Voice Agent."""
from datetime import datetime, timezone
from typing import Optional
from pydantic import BaseModel, Field


class CallRecord(BaseModel):
    id: str
    caller_number: Optional[str] = None
    caller_name: Optional[str] = None
    direction: str = "inbound"            # inbound | outbound
    status: str = "completed"             # completed | missed | voicemail | failed
    duration_seconds: int = 0
    summary: Optional[str] = None
    transcript: Optional[str] = None
    lead_captured: bool = False
    appointment_booked: bool = False
    follow_up_sent: bool = False
    call_reason: Optional[str] = None     # quote | appointment | information | complaint | other
    synced_to_crm: bool = False
    customer_id: Optional[str] = None
    lead_id: Optional[str] = None
    script_mode: Optional[str] = None    # industry script used
    recording_url: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
