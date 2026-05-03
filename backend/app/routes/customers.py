from fastapi import APIRouter, HTTPException
from app.services.crm_service import crm_service
router = APIRouter()
@router.post('')
def create_customer(payload:dict): return crm_service.create_customer(payload)
@router.get('')
def list_customers(): return crm_service.list_customers()
@router.get('/{customer_id}')
def get_customer(customer_id:int):
    c=crm_service.get_customer(customer_id)
    if not c: raise HTTPException(404,'Customer not found')
    return c
@router.patch('/{customer_id}')
def update_customer(customer_id:int,payload:dict):
    c=crm_service.update_customer(customer_id,payload)
    if not c: raise HTTPException(404,'Customer not found')
    return c
