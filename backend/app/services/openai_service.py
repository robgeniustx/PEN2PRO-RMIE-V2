import os

def generate_structured_agent_output(system_prompt, user_payload, model_env="OPENAI_MODEL_AUTOMATION"):
    if not os.getenv("OPENAI_API_KEY"):
        return {"mode": "mock", "summary": "OPENAI_API_KEY missing; returning safe mock output.", "system_prompt": system_prompt, "payload": user_payload}
    return {"mode": "openai", "model": os.getenv(model_env, "gpt-4o-mini"), "summary": "Structured automation response (placeholder).", "payload": user_payload}
