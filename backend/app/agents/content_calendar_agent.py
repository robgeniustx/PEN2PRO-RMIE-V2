from app.agents.base_agent import BaseAgent, call_ai
import json

class ContentCalendarAgent(BaseAgent):
    name = "Content Calendar Agent"
    description = "Builds a 30-day content calendar with post ideas."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        system = "You are PEN2PRO. Build a 30-day content calendar with specific post ideas."
        user = f"Business: {idea}\nReturn JSON: {{\"week_1\": [{{\"day\": \"Mon\", \"type\": \"...\", \"topic\": \"...\"}},{{\"day\": \"Wed\", \"type\": \"...\", \"topic\": \"...\"}},{{\"day\": \"Fri\", \"type\": \"...\", \"topic\": \"...\"}}], \"week_2\": [...same structure...], \"week_3\": [...], \"week_4\": [...], \"monthly_theme\": \"...\"}}"
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "content_calendar", "calendar": result}
