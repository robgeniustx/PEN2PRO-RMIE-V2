from __future__ import annotations
from datetime import datetime
from pydantic import BaseModel, Field

class ActivityLogCreate(BaseModel):
    action_type: str
    description: str
    metadata: str | None = None

class ActivityLogResponse(ActivityLogCreate):
    id: int
    created_at: datetime
    metadata: str | None = Field(default=None, validation_alias="event_metadata")
    class Config: from_attributes = True
