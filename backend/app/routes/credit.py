from fastapi import APIRouter, HTTPException
from app.schemas.credit_schema import CreditReadinessRequest, DocumentRecordCreate, DisputeWorkspaceRequest
from app.services import credit_service

router = APIRouter()

@router.get('/health')
def health(): return {"status":"ok"}

@router.post('/readiness')
def readiness(payload: CreditReadinessRequest): return credit_service.generate_credit_readiness(payload.model_dump())

@router.post('/vendor-guidance')
def vendor_guidance(payload: CreditReadinessRequest): return {"status":"success","vendor_credit_guidance":credit_service.generate_vendor_credit_guidance(payload.model_dump())}

@router.post('/dispute-workspace')
def dispute_workspace(payload: DisputeWorkspaceRequest): return credit_service.generate_dispute_workspace(payload.model_dump())

@router.post('/documents')
def create_doc(payload: DocumentRecordCreate): return credit_service.create_document_record(payload.model_dump())

@router.get('/documents')
def list_docs(status: str | None = None, document_type: str | None = None): return credit_service.list_document_records(status, document_type)

@router.get('/documents/{document_id}')
def get_doc(document_id: int):
    rec = credit_service.get_document_record(document_id)
    if not rec: raise HTTPException(status_code=404, detail='Document not found')
    return rec

@router.patch('/documents/{document_id}')
def patch_doc(document_id: int, payload: dict):
    rec = credit_service.update_document_record(document_id, payload)
    if not rec: raise HTTPException(status_code=404, detail='Document not found')
    return rec

@router.delete('/documents/{document_id}')
def delete_doc(document_id: int):
    rec = credit_service.delete_document_record(document_id)
    if not rec: raise HTTPException(status_code=404, detail='Document not found')
    return {"status":"deleted"}
