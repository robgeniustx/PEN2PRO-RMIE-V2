"""
Twilio + ElevenLabs voice response helpers for the PEN2PRO AI Voice Agent.
"""
import os
import uuid
from pathlib import Path

from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs

load_dotenv(".env")

AUDIO_DIR = Path(os.getenv("VOICE_AUDIO_DIR", "generated_audio"))
AUDIO_DIR.mkdir(parents=True, exist_ok=True)


def build_voice_response_text(caller_text: str) -> str:
    """Build the first production-safe voice response from caller speech."""
    caller_text = (caller_text or "").strip()

    if not caller_text:
        return (
            "Thank you for calling PEN2PRO. Tell me what kind of business you want "
            "to launch, repair, or grow today."
        )

    return (
        f"Thank you. I heard you say: {caller_text}. "
        "PEN2PRO can help turn that into a practical business roadmap with an offer, "
        "pricing strategy, launch checklist, funding readiness steps, and follow up plan. "
        "A team member can follow up with you shortly."
    )


def generate_elevenlabs_audio(text: str) -> str:
    """
    Generate an ElevenLabs MP3 response and return the generated filename.

    Raises RuntimeError when the API key is missing so the route can fall back to
    Twilio Say during local testing instead of crashing the call.
    """
    api_key = os.getenv("ELEVENLABS_API_KEY")
    voice_id = os.getenv("ELEVENLABS_VOICE_ID", "JBFqnCBsd6RMkjVDRZzb")
    model_id = os.getenv("ELEVENLABS_MODEL_ID", "eleven_flash_v2_5")

    if not api_key:
        raise RuntimeError("ELEVENLABS_API_KEY is missing.")

    client = ElevenLabs(api_key=api_key)
    audio = client.text_to_speech.convert(
        text=text,
        voice_id=voice_id,
        model_id=model_id,
        output_format="mp3_44100_128",
    )

    filename = f"{uuid.uuid4()}.mp3"
    path = AUDIO_DIR / filename

    with path.open("wb") as output_file:
        for chunk in audio:
            output_file.write(chunk)

    return filename
