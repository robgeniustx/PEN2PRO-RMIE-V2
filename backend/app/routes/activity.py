from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app.schemas.activity_schema import ActivityLogCreate, ActivityLogResponse
from app.services.automation_service import AutomationService
router = APIRouter()
@router.get('', response_model=list[ActivityLogResponse])
def list_activity(db: Session = Depends(get_db)): return AutomationService(db).list_activity_logs()
@router.post('/log', response_model=ActivityLogResponse)
def log(payload: ActivityLogCreate, db: Session = Depends(get_db)): s=AutomationService(db); l=s.log_activity(payload.action_type,payload.description,payload.metadata); s.db.commit(); s.db.refresh(l); return l
