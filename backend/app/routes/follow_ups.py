from fastapi import APIRouter, HTTPException
from app.services.crm_service import crm_service
router = APIRouter()
@router.post('')
def create_follow_up(payload:dict): return crm_service.create_follow_up(payload)
@router.get('')
def list_follow_ups(status:str|None=None): return crm_service.list_follow_ups(status)
@router.get('/due')
def due(): return crm_service.get_due_follow_ups()
@router.patch('/{follow_up_id}/complete')
def complete(follow_up_id:int):
    f=crm_service.complete_follow_up(follow_up_id)
    if not f: raise HTTPException(404,'Follow-up not found')
    return f
