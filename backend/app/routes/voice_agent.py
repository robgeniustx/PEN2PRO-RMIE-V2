"""
P2P AI Voice Agent API Routes
Call management, script management, dashboard metrics, and Twilio webhook handling.
"""
import uuid
import hmac
import hashlib
from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, HTTPException, Request, Header, Query
from pydantic import BaseModel

from app.services.voice_agent_service import (
    create_call,
    list_calls,
    get_call,
    create_script,
    list_scripts,
    get_script,
    get_dashboard_metrics,
    sync_call_to_crm,
    generate_call_summary,
    generate_follow_up_message,
    get_script_for_industry,
)
import os

router = APIRouter(prefix="/voice-agent", tags=["Voice Agent"])

TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN", "")


# ---------------------------------------------------------------------------
# DASHBOARD
# ---------------------------------------------------------------------------

@router.get("/dashboard")
async def voice_dashboard():
    """Return Voice Agent dashboard metrics."""
    return get_dashboard_metrics()


# ---------------------------------------------------------------------------
# CALL RECORDS
# ---------------------------------------------------------------------------

class CallCreate(BaseModel):
    caller_number: Optional[str] = None
    caller_name: Optional[str] = None
    direction: str = "inbound"
    status: str = "completed"
    duration_seconds: int = 0
    summary: Optional[str] = None
    transcript: Optional[str] = None
    lead_captured: bool = False
    appointment_booked: bool = False
    call_reason: Optional[str] = None
    script_mode: Optional[str] = None
    recording_url: Optional[str] = None


@router.get("/calls")
def list_call_records(
    status: Optional[str] = Query(None),
    direction: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=200),
):
    calls = list_calls()
    if status:
        calls = [c for c in calls if c.get("status") == status]
    if direction:
        calls = [c for c in calls if c.get("direction") == direction]
    return {"calls": calls[:limit], "total": len(calls)}


@router.post("/calls")
def log_call(payload: CallCreate):
    call = create_call(payload.dict())
    return call


@router.get("/calls/{call_id}")
def get_call_record(call_id: str):
    call = get_call(call_id)
    if not call:
        raise HTTPException(status_code=404, detail="Call not found")
    return call


@router.post("/calls/{call_id}/sync-to-crm")
async def sync_call(call_id: str):
    call = get_call(call_id)
    if not call:
        raise HTTPException(status_code=404, detail="Call not found")
    result = sync_call_to_crm(call_id)
    return result


@router.post("/calls/{call_id}/summarize")
async def summarize_call(call_id: str):
    call = get_call(call_id)
    if not call:
        raise HTTPException(status_code=404, detail="Call not found")
    transcript = call.get("transcript", "")
    if not transcript:
        raise HTTPException(status_code=400, detail="No transcript available for this call")
    summary = await generate_call_summary(transcript)
    call["summary"] = summary
    call["updated_at"] = datetime.now(timezone.utc).isoformat()
    return {"call_id": call_id, "summary": summary}


@router.post("/calls/{call_id}/follow-up")
async def generate_followup(call_id: str):
    call = get_call(call_id)
    if not call:
        raise HTTPException(status_code=404, detail="Call not found")
    message = await generate_follow_up_message(call)
    return {"call_id": call_id, "follow_up_message": message}


# ---------------------------------------------------------------------------
# SCRIPTS
# ---------------------------------------------------------------------------

class ScriptCreate(BaseModel):
    name: str
    industry: Optional[str] = None
    script_mode: str = "general"
    greeting: str = "Thank you for calling. How can I help you today?"
    steps: list = []
    is_active: bool = False
    is_after_hours: bool = False
    business_hours_start: str = "08:00"
    business_hours_end: str = "18:00"
    timezone: str = "America/Chicago"
    transfer_number: Optional[str] = None


@router.get("/scripts")
def list_voice_scripts():
    return {"scripts": list_scripts()}


@router.post("/scripts")
def create_voice_script(payload: ScriptCreate):
    script = create_script(payload.dict())
    return script


@router.get("/scripts/{script_id}")
def get_voice_script(script_id: str):
    script = get_script(script_id)
    if not script:
        raise HTTPException(status_code=404, detail="Script not found")
    return script


@router.get("/scripts/industry/{industry_id}")
def get_industry_script(industry_id: str):
    """Return the pre-configured call script for a specific industry."""
    script = get_script_for_industry(industry_id)
    if not script:
        raise HTTPException(status_code=404, detail=f"No script found for industry: {industry_id}")
    return script


# ---------------------------------------------------------------------------
# TWILIO WEBHOOK — Incoming call handler
# ---------------------------------------------------------------------------

@router.post("/webhook/incoming-call")
async def twilio_incoming_call(request: Request):
    """
    Twilio webhook for inbound calls.
    Returns TwiML XML to handle the call with the AI agent.
    Note: In production, validate the Twilio signature header before processing.
    """
    form = await request.form()
    caller_number = form.get("From", "Unknown")
    called_number = form.get("To", "")
    call_sid = form.get("CallSid", str(uuid.uuid4()))

    # Log the incoming call
    call_data = {
        "id": call_sid,
        "caller_number": caller_number,
        "direction": "inbound",
        "status": "in_progress",
        "duration_seconds": 0,
        "lead_captured": False,
        "appointment_booked": False,
        "follow_up_sent": False,
        "synced_to_crm": False,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "updated_at": datetime.now(timezone.utc).isoformat(),
    }
    from app.services.voice_agent_service import _CALLS
    _CALLS[call_sid] = call_data

    # Return TwiML — in production this would route to your AI voice agent
    twiml = f"""<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say voice="Polly.Joanna">
        Thank you for calling. Please hold while we connect you with our team.
    </Say>
    <Pause length="1"/>
    <Say voice="Polly.Joanna">
        We look forward to serving you today.
    </Say>
</Response>"""

    from fastapi.responses import Response
    return Response(content=twiml, media_type="application/xml")


@router.post("/webhook/call-status")
async def twilio_call_status(request: Request):
    """
    Twilio status callback — updates call record when a call ends.
    """
    form = await request.form()
    call_sid = form.get("CallSid", "")
    call_status = form.get("CallStatus", "completed")
    duration = int(form.get("CallDuration", 0))

    from app.services.voice_agent_service import _CALLS
    if call_sid in _CALLS:
        _CALLS[call_sid].update({
            "status": call_status,
            "duration_seconds": duration,
            "updated_at": datetime.now(timezone.utc).isoformat(),
        })

    return {"received": True}


@router.post("/webhook/sms-reply")
async def twilio_sms_reply(request: Request):
    """
    Handle inbound SMS replies (for missed-call text-back responses).
    """
    form = await request.form()
    from_number = form.get("From", "Unknown")
    body = form.get("Body", "")

    # Auto-reply TwiML
    twiml = """<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message>Thanks for your reply! A member of our team will follow up shortly.</Message>
</Response>"""

    from fastapi.responses import Response
    return Response(content=twiml, media_type="application/xml")
