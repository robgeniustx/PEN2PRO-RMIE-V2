from app.agents.base_agent import BaseAgent, call_ai
import json

class FollowUpAgent(BaseAgent):
    name = "Follow Up Agent"
    description = "Generates follow-up sequences for leads and customers."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload)

    def run(self, payload):
        context = payload.get("context") or payload.get("lead_name") or payload.get("request", "prospect")
        business = payload.get("business_idea") or payload.get("idea", "service business")
        system = "You are PEN2PRO. Write follow-up sequences that close deals without being pushy."
        user = f"Business: {business} | Lead/Context: {context}\nReturn JSON: {{\"sequence\": [{{\"day\": 1, \"channel\": \"...\", \"message\": \"...\"}}, {{\"day\": 3, \"channel\": \"...\", \"message\": \"...\"}}, {{\"day\": 7, \"channel\": \"...\", \"message\": \"...\"}}, {{\"day\": 14, \"channel\": \"...\", \"message\": \"...\"}}], \"closing_tip\": \"...\"}}"
        raw = call_ai(system, user, max_tokens=700)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "follow_up", "sequence": result}
