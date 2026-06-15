import os
from openai import OpenAI

_client = None

def get_openai_client():
    global _client
    if _client is None:
        api_key = os.getenv("OPENAI_API_KEY")
        if api_key:
            _client = OpenAI(api_key=api_key)
    return _client


def call_ai(system_prompt: str, user_prompt: str, max_tokens: int = 1800) -> str:
    """
    Call OpenAI GPT-4o-mini and return text.
    Falls back to a descriptive placeholder if the key is missing or call fails.
    """
    client = get_openai_client()
    if not client:
        return "[AI unavailable — set OPENAI_API_KEY in Render environment variables]"
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            max_tokens=max_tokens,
            temperature=0.7,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"[AI error: {str(e)}]"


class BaseAgent:
    name = "base_agent"
    description = "Base agent"
    tier_required = "free"

    def validate_input(self, request_data):
        return bool(request_data)

    def run(self, request_data):
        raise NotImplementedError
