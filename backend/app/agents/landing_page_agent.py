from app.agents.base_agent import BaseAgent, call_ai
import json

class LandingPageAgent(BaseAgent):
    name = "Landing Page Agent"
    description = "Generates high-converting landing page copy and structure."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        system = "You are PEN2PRO. Generate high-converting landing page copy for small business owners."
        user = f"Business: {idea}\nReturn JSON: {{\"headline\": \"...\", \"subheadline\": \"...\", \"bullet_benefits\": [\"...\",\"...\",\"...\"], \"social_proof\": \"...\", \"cta_primary\": \"...\", \"urgency_element\": \"...\", \"footer_trust\": \"...\"}}"
        raw = call_ai(system, user, max_tokens=700)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "landing_page", "page": result}
