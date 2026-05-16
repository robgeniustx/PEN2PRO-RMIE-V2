"""
Twilio webhook routes for the PEN2PRO AI Voice Agent.
"""
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import APIRouter, Form, HTTPException, Request
from fastapi.responses import FileResponse, Response
from twilio.twiml.voice_response import Gather, VoiceResponse

from app.services.voice_ai_service import (
    AUDIO_DIR,
    build_voice_response_text,
    generate_elevenlabs_audio,
)

load_dotenv(".env")

router = APIRouter(prefix="/api/voice-agent", tags=["Voice Agent Twilio"])


def _backend_url() -> str:
    return os.getenv("BACKEND_URL", "http://127.0.0.1:8000").rstrip("/")


@router.post("/incoming")
async def incoming_call(request: Request):
    """Answer an inbound Twilio voice call and collect caller speech."""
    response = VoiceResponse()
    gather = Gather(
        input="speech",
        action=f"{_backend_url()}/api/voice-agent/process",
        method="POST",
        speech_timeout="auto",
        timeout=5,
    )
    gather.say(
        "Thank you for calling PEN2PRO. Tell me what kind of business you want "
        "to launch, repair, or grow today."
    )
    response.append(gather)
    response.say("I did not hear anything. Please call back when you are ready.")
    response.hangup()

    return Response(content=str(response), media_type="application/xml")


@router.post("/process")
async def process_speech(SpeechResult: str = Form(default="")):
    """Turn caller speech into a PEN2PRO response and play ElevenLabs audio."""
    response_text = build_voice_response_text(SpeechResult)
    response = VoiceResponse()

    try:
        audio_filename = generate_elevenlabs_audio(response_text)
        response.play(f"{_backend_url()}/api/voice-agent/audio/{audio_filename}")
    except Exception:
        response.say(response_text)

    response.say("Thank you for calling PEN2PRO. Goodbye.")
    response.hangup()

    return Response(content=str(response), media_type="application/xml")


@router.get("/audio/{filename}")
async def get_audio(filename: str):
    """Serve generated ElevenLabs MP3 files to Twilio."""
    safe_filename = Path(filename).name
    path = AUDIO_DIR / safe_filename

    if not path.exists():
        raise HTTPException(status_code=404, detail="Audio file not found")

    return FileResponse(path, media_type="audio/mpeg")


@router.post("/webhook")
async def elevenlabs_webhook(request: Request):
    """Accept generic ElevenLabs event payloads for future production wiring."""
    payload = await request.json()
    return {
        "status": "received",
        "source": "elevenlabs",
        "payload_keys": list(payload.keys()) if isinstance(payload, dict) else [],
    }
