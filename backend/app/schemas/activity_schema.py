from __future__ import annotations
from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field

class ActivityLogCreate(BaseModel):
    action_type: str
    description: str
    metadata: str | None = None

class ActivityLogResponse(BaseModel):
    id: int
    action_type: str
    description: str
    metadata: str | None = Field(default=None, validation_alias="event_metadata")
    created_at: datetime
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)
