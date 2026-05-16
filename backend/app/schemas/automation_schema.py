from __future__ import annotations
from datetime import date, datetime
from pydantic import BaseModel

class AgentCommandCreate(BaseModel):
    agent_name: str
    command_type: str
    command_text: str
    input_payload: str | None = None
    blueprint_id: int | None = None
    company_id: int | None = None
    tier: str | None = "free"

class AgentCommandResponse(BaseModel):
    id: int
    agent_name: str
    command_type: str
    command_text: str
    status: str
    result_payload: str | None = None
    error_message: str | None = None
    tier_required: str | None = None
    created_at: datetime
    updated_at: datetime
    class Config: from_attributes = True

class AgentApprovalCreate(BaseModel):
    agent_command_id: int | None = None
    action_type: str
    action_summary: str
    proposed_payload: str | None = None

class AgentApprovalResponse(BaseModel):
    id: int
    agent_command_id: int | None = None
    action_type: str
    action_summary: str
    approval_status: str
    proposed_payload: str | None = None
    created_at: datetime
    updated_at: datetime
    class Config: from_attributes = True

class DailyReportResponse(BaseModel):
    id: int
    report_date: date
    summary: str
    completed_tasks: str | None = None
    pending_tasks: str | None = None
    recommended_next_actions: str | None = None
    risks_or_blockers: str | None = None
    metrics_snapshot: str | None = None
    created_at: datetime
    class Config: from_attributes = True
