from app.agents.base_agent import BaseAgent, call_ai
import json

class AffiliateStrategyAgent(BaseAgent):
    name = "Affiliate Strategy Agent"
    description = "Builds affiliate and partnership revenue strategy."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        system = "You are PEN2PRO. Build affiliate marketing strategies for small businesses."
        user = f"Business: {idea}\nReturn JSON: {{\"affiliate_model\": \"...\", \"commission_structure\": \"...\", \"partner_targets\": [\"...\",\"...\",\"...\"], \"recruitment_script\": \"...\", \"tracking_method\": \"...\", \"first_5_partners\": \"how to land the first 5\"}}"
        raw = call_ai(system, user, max_tokens=700)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "affiliate_strategy", "strategy": result}
