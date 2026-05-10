from fastapi import APIRouter
from app.services.crm_service import crm_service

router = APIRouter()
@router.get('/health')
def health(): return {'status':'ok','module':'crm'}
@router.get('/pipeline-summary')
def pipeline_summary(): return crm_service.get_pipeline_summary()
@router.post('/generate-follow-up')
def generate_follow_up(payload: dict): return crm_service.generate_follow_up_message(payload)
@router.post('/score-lead')
def score_lead(payload: dict): return crm_service.score_lead(payload)
