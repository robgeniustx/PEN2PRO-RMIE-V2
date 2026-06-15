from fastapi import APIRouter
from app.agents.content_agent import ContentAgent
from app.agents.caption_agent import CaptionAgent
from app.agents.short_video_script_agent import ShortVideoScriptAgent
from app.agents.content_calendar_agent import ContentCalendarAgent

router = APIRouter()
_content = ContentAgent()
_caption = CaptionAgent()
_video = ShortVideoScriptAgent()
_calendar = ContentCalendarAgent()

@router.post("/generate")
def generate_content(payload: dict):
    if not _content.validate_input(payload):
        return {"error": "Missing required fields"}
    return _content.run(payload)

@router.post("/caption")
def generate_caption(payload: dict):
    return _caption.run(payload)

@router.post("/video-script")
def generate_video_script(payload: dict):
    return _video.run(payload)

@router.post("/calendar")
def generate_calendar(payload: dict):
    return _calendar.run(payload)

@router.get("/health")
def health():
    return {"status": "ok", "module": "content"}
