from __future__ import annotations
from datetime import datetime
from pydantic import BaseModel

class ActivityLogCreate(BaseModel):
    action_type: str
    description: str
    metadata: str | None = None

class ActivityLogResponse(ActivityLogCreate):
    id: int
    created_at: datetime
    class Config: from_attributes = True
