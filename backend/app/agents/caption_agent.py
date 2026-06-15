from app.agents.base_agent import BaseAgent, call_ai
import json

class CaptionAgent(BaseAgent):
    name = "Caption Agent"
    description = "Generates social media captions for any platform."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("topic") or payload.get("idea") or payload.get("request"))

    def run(self, payload):
        topic = payload.get("topic") or payload.get("idea") or payload.get("request", "")
        platform = payload.get("platform", "Instagram")
        system = "You are PEN2PRO. Write scroll-stopping social captions for small business owners."
        user = f"Topic: {topic} | Platform: {platform}\nReturn JSON: {{\"captions\": [{{\"style\": \"hook\", \"text\": \"...\"}}, {{\"style\": \"value\", \"text\": \"...\"}}, {{\"style\": \"cta\", \"text\": \"...\"}}], \"hashtags\": [\"#tag1\",\"#tag2\",\"#tag3\"]}}"
        raw = call_ai(system, user, max_tokens=600)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "caption", "result": result}
