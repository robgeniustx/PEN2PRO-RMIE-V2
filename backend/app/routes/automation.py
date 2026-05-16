from __future__ import annotations
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.schemas.automation_schema import AgentCommandCreate, AgentCommandResponse, AgentApprovalCreate, AgentApprovalResponse, DailyReportResponse
from app.services.automation_service import AutomationService

router = APIRouter()
@router.get('/health')
def health(): return {"ok": True, "module": "automation"}
@router.post('/commands', response_model=AgentCommandResponse)
def create_command(payload: AgentCommandCreate, db: Session = Depends(get_db)): return AutomationService(db).create_agent_command(payload)
@router.get('/commands', response_model=list[AgentCommandResponse])
def list_commands(status: str | None = None, db: Session = Depends(get_db)): return AutomationService(db).list_agent_commands(status)
@router.get('/commands/{command_id}', response_model=AgentCommandResponse)
def get_command(command_id: int, db: Session = Depends(get_db)):
    c = AutomationService(db).get_agent_command(command_id)
    if not c: raise HTTPException(status_code=404, detail='Command not found')
    return c
@router.post('/commands/{command_id}/run', response_model=AgentCommandResponse)
def run_command(command_id: int, db: Session = Depends(get_db)): return AutomationService(db).run_agent_command(command_id)
@router.post('/commands/{command_id}/cancel', response_model=AgentCommandResponse)
def cancel_command(command_id: int, db: Session = Depends(get_db)): return AutomationService(db).cancel_agent_command(command_id)
@router.post('/approvals', response_model=AgentApprovalResponse)
def create_approval(payload: AgentApprovalCreate, db: Session = Depends(get_db)): return AutomationService(db).create_approval_request(payload)
@router.get('/approvals', response_model=list[AgentApprovalResponse])
def list_approvals(status: str | None = None, db: Session = Depends(get_db)): return AutomationService(db).list_approval_requests(status)
@router.post('/approvals/{approval_id}/approve', response_model=AgentApprovalResponse)
def approve(approval_id: int, db: Session = Depends(get_db)): return AutomationService(db).approve_action(approval_id)
@router.post('/approvals/{approval_id}/reject', response_model=AgentApprovalResponse)
def reject(approval_id: int, db: Session = Depends(get_db)): return AutomationService(db).reject_action(approval_id)
@router.post('/daily-report', response_model=DailyReportResponse)
def daily_report(db: Session = Depends(get_db)): return AutomationService(db).generate_daily_report()
@router.get('/daily-report/latest', response_model=DailyReportResponse | None)
def latest_report(db: Session = Depends(get_db)): return AutomationService(db).get_latest_daily_report()
