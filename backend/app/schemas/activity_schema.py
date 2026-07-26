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
    metadata: str | None = Field(None, validation_alias="meta")
    created_at: datetime
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)
