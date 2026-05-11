from fastapi import APIRouter
from app.schemas.funding_schema import FundingReadinessRequest
from app.services import funding_service

router = APIRouter()

@router.get('/health')
def health(): return {"status":"ok"}

@router.post('/readiness')
def readiness(payload: FundingReadinessRequest): return funding_service.generate_funding_readiness(payload.model_dump())

@router.post('/document-checklist')
def docs(payload: FundingReadinessRequest): return {"status":"success","document_checklist":funding_service.generate_document_checklist(payload.model_dump())}

@router.post('/path-options')
def paths(payload: FundingReadinessRequest): return {"status":"success","funding_path_options":funding_service.generate_funding_path_options(payload.model_dump())}
