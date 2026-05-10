from fastapi import APIRouter, HTTPException
from app.services.crm_service import crm_service
router = APIRouter()
@router.post('')
def create_lead(payload: dict): return crm_service.create_lead(payload)
@router.get('')
def list_leads(status: str|None=None, source: str|None=None): return crm_service.list_leads(status, source)
@router.get('/{lead_id}')
def get_lead(lead_id:int):
    lead=crm_service.get_lead(lead_id)
    if not lead: raise HTTPException(404,'Lead not found')
    return lead
@router.patch('/{lead_id}')
def update_lead(lead_id:int,payload:dict):
    lead=crm_service.update_lead(lead_id,payload)
    if not lead: raise HTTPException(404,'Lead not found')
    return lead
@router.delete('/{lead_id}')
def delete_lead(lead_id:int): crm_service.delete_lead(lead_id); return {'status':'deleted'}
