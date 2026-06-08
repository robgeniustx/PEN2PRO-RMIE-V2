from fastapi import APIRouter
from app.agents.outreach_agent import OutreachAgent
from app.agents.follow_up_agent import FollowUpAgent

router = APIRouter()
_outreach = OutreachAgent()
_followup = FollowUpAgent()

@router.post("/generate")
def generate_outreach(payload: dict):
    if not _outreach.validate_input(payload):
        return {"error": "Missing business idea or request"}
    return _outreach.run(payload)

@router.post("/follow-up")
def generate_follow_up(payload: dict):
    return _followup.run(payload)

@router.get("/health")
def health():
    return {"status": "ok", "module": "outreach"}
