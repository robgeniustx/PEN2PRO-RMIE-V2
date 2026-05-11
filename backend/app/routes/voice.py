"""
PEN2PRO Voice Assistant API
POST /api/voice  — accepts a text message, returns a conversational AI response
using the PEN2PRO RMIE brand voice and persona.
"""

import os
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# ─── PEN2PRO Voice Persona ────────────────────────────────────────────────────
_VOICE_SYSTEM_PROMPT = """
You are the PEN2PRO Voice Coach — the audible, real-time voice of the PEN2PRO RMIE platform (Rapid Monetization Intelligence Engine).

Your tone is:
- Direct, confident, street-smart, and strategic
- Like a mentor who has been through it and came out the other side
- Never corporate, never generic, never motivational-poster fluff
- Warm but no-nonsense — you respect the user's time and intelligence
- You speak like Robert Green talks: gritty, precise, honest, founder-led

Your job:
You help users build real businesses. You answer questions about business ideas, roadmaps, credit readiness, funding, branding, LLC setup, marketing, sales, and monetization strategy. You give specific, actionable answers — not vague advice.

Rules:
1. Keep responses conversational and spoken-friendly — no markdown, no bullet points, no headers. Just clean sentences made to be heard out loud.
2. Keep responses under 120 words unless the user specifically asks for a full breakdown.
3. Never say "As an AI" or "I'm just an AI model."
4. If the user asks about PEN2PRO pricing or plans, tell them about Free, Pro ($47/mo), Elite ($97/mo), and Founders Lifetime ($497 one-time).
5. Always end with one forward-moving question or next-step suggestion.
6. If you don't know something, say "I don't have that info right now — but here's what I'd do to find out."

Examples of good responses:
BAD: "You should consider posting content on social media to increase brand awareness."
GOOD: "Post 3 before-and-after photos this week on Facebook and Nextdoor. Message 20 local people directly. Get your first paying job before you spend a dollar on ads. What's your service and your city?"

You are always in service of helping the user move forward — not impressing them with length.
"""

# ─── Fallback responses when no API key is set ───────────────────────────────
_FALLBACK_RESPONSES = [
    "PEN2PRO Voice is live, but the AI engine isn't connected yet. Add your OpenAI API key in the backend environment to activate full responses. In the meantime — what business are you building?",
    "I'm running in demo mode right now. To get full AI coaching, connect your OpenAI key in the backend. But tell me — what's your business idea? I want to hear it.",
    "The voice engine is warming up. Your OpenAI key needs to be set in the backend dot env file. Once that's done, I'll be fully online. What question can I help you think through?",
]


class VoiceRequest(BaseModel):
    message: str
    context: str = ""          # optional page context (e.g. "user is on /roadmap")
    conversation_history: list = []  # optional prior turns for continuity


@router.post("/chat")
async def voice_chat(req: VoiceRequest):
    """
    Main voice chat endpoint.
    Accepts a message + optional context/history,
    returns a conversational text response ready to be spoken aloud.
    """
    api_key = os.getenv("OPENAI_API_KEY", "")

    if not api_key:
        # Return a useful fallback — never crash
        import hashlib
        idx = int(hashlib.md5(req.message.encode()).hexdigest(), 16) % len(_FALLBACK_RESPONSES)
        return {
            "response": _FALLBACK_RESPONSES[idx],
            "is_demo": True,
        }

    try:
        import httpx

        model = os.getenv("OPENAI_MODEL_VOICE", "gpt-4o-mini")

        # Build messages array
        messages = [{"role": "system", "content": _VOICE_SYSTEM_PROMPT.strip()}]

        # Inject page context if provided
        if req.context:
            messages.append({
                "role": "system",
                "content": f"Current user context: {req.context}"
            })

        # Add conversation history (last 6 turns max to stay within tokens)
        for turn in req.conversation_history[-6:]:
            if turn.get("role") in ("user", "assistant") and turn.get("content"):
                messages.append({"role": turn["role"], "content": turn["content"]})

        # Add the current user message
        messages.append({"role": "user", "content": req.message})

        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": model,
                    "temperature": 0.8,
                    "max_tokens": 250,
                    "messages": messages,
                },
            )
            response.raise_for_status()
            reply = response.json()["choices"][0]["message"]["content"].strip()
            return {"response": reply, "is_demo": False}

    except Exception as exc:
        return {
            "response": "I hit a technical snag. Try again in a second — I'm still here.",
            "is_demo": True,
            "error": str(exc),
        }
