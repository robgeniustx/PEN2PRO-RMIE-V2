from __future__ import annotations
from datetime import datetime
from pydantic import BaseModel

class TaskCreate(BaseModel):
    title: str
    description: str | None = None
    status: str | None = "todo"
    priority: str | None = "medium"
    due_at: datetime | None = None
    source: str | None = None

class TaskUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    status: str | None = None
    priority: str | None = None
    due_at: datetime | None = None
    completed_at: datetime | None = None

class TaskResponse(TaskCreate):
    id: int
    completed_at: datetime | None = None
    created_at: datetime
    updated_at: datetime
    class Config: from_attributes = True
