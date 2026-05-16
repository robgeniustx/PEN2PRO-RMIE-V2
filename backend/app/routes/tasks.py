from __future__ import annotations
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app.schemas.task_schema import TaskCreate, TaskUpdate, TaskResponse
from app.services.automation_service import AutomationService
router = APIRouter()
@router.post('', response_model=TaskResponse)
def create(payload: TaskCreate, db: Session = Depends(get_db)): return AutomationService(db).create_task(payload)
@router.get('', response_model=list[TaskResponse])
def list_tasks(status: str | None = None, source: str | None = None, db: Session = Depends(get_db)): return AutomationService(db).list_tasks(status, source)
@router.patch('/{task_id}', response_model=TaskResponse)
def update(task_id: int, payload: TaskUpdate, db: Session = Depends(get_db)): return AutomationService(db).update_task(task_id, payload)
@router.post('/{task_id}/complete', response_model=TaskResponse)
def complete(task_id: int, db: Session = Depends(get_db)): return AutomationService(db).complete_task(task_id)
