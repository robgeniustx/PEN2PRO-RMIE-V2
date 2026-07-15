from __future__ import annotations
from datetime import datetime
from pydantic import BaseModel, Field, AliasChoices

class ActivityLogCreate(BaseModel):
    action_type: str
    description: str
    metadata: str | None = None

class ActivityLogResponse(ActivityLogCreate):
    id: int
    created_at: datetime
    # ORM attribute is `event_metadata` (SQLAlchemy reserves `metadata` on Base), but the API field stays `metadata`.
    metadata: str | None = Field(default=None, validation_alias=AliasChoices("event_metadata", "metadata"))
    class Config: from_attributes = True
