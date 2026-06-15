from fastapi import APIRouter
from app.agents.ad_agent import AdAgent

router = APIRouter()
_ad = AdAgent()

@router.post("/generate")
def generate_ad_campaign(payload: dict):
    if not _ad.validate_input(payload):
        return {"error": "Missing business idea or request"}
    return _ad.run(payload)

@router.get("/health")
def health():
    return {"status": "ok", "module": "ads"}
