"""Minimal OpenAI chat client used by the roadmap refiner and website generator."""
import json
import os
from typing import Any, Dict

import httpx
from fastapi import HTTPException


def configured() -> bool:
    return bool(os.getenv("OPENAI_API_KEY"))


async def chat_json(system: str, user: str, model_env: str = "OPENAI_MODEL_BLUEPRINT", max_tokens: int = 3500) -> Dict[str, Any]:
    if not configured():
        raise HTTPException(status_code=503, detail="AI generation is not available right now. Please try again later.")
    model = os.getenv(model_env, "gpt-4o-mini")
    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            res = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={"Authorization": f"Bearer {os.getenv('OPENAI_API_KEY')}", "Content-Type": "application/json"},
                json={
                    "model": model,
                    "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
                    "response_format": {"type": "json_object"},
                    "max_tokens": max_tokens,
                    "temperature": 0.6,
                },
            )
        res.raise_for_status()
        return json.loads(res.json()["choices"][0]["message"]["content"])
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=503, detail="AI generation failed. Please try again in a moment.")
