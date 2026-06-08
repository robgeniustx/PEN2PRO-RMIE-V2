from app.agents.base_agent import BaseAgent, call_ai
import json

class BrandIdentityAgent(BaseAgent):
    name = "Brand Identity Agent"
    description = "Deep brand identity system — visual, voice, positioning."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        system = "You are PEN2PRO's brand identity specialist. Build premium, cohesive brand identity systems."
        user = f"Business: {idea}\nReturn JSON: {{\"brand_story\": \"...\", \"mission\": \"...\", \"vision\": \"...\", \"values\": [\"...\",\"...\",\"...\"], \"tone_of_voice\": \"...\", \"visual_style\": \"...\", \"competitor_positioning\": \"how to stand out vs competitors\", \"brand_promise\": \"one sentence commitment to customers\"}}"
        raw = call_ai(system, user, max_tokens=800)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "brand_identity", "identity": result}
