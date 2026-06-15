from fastapi import APIRouter
from app.agents.follow_up_agent import FollowUpAgent
from app.agents.lead_scoring_agent import LeadScoringAgent

router = APIRouter()
_followup = FollowUpAgent()
_scoring = LeadScoringAgent()

@router.get("/health")
def health():
    return {"status": "ok", "module": "crm"}

@router.get("/pipeline-summary")
def pipeline_summary():
    return {
        "total_leads": 0,
        "by_stage": {
            "New Lead": 0, "Contacted": 0, "Quote Sent": 0,
            "Follow-Up": 0, "Won": 0, "Closed": 0
        },
        "total_value": "$0",
        "message": "Connect your leads data to see live pipeline"
    }

@router.post("/generate-follow-up")
def generate_follow_up(payload: dict):
    return _followup.run(payload)

@router.post("/score-lead")
def score_lead(payload: dict):
    return _scoring.run(payload)
