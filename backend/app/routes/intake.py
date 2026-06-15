from fastapi import APIRouter
from app.agents.intake_agent import IntakeAgent

router = APIRouter()
_intake = IntakeAgent()

@router.post("/submit")
def submit_intake(payload: dict):
    return _intake.run(payload)

@router.get("/health")
def health():
    return {"status": "ok", "module": "intake"}
