from app.agents.base_agent import BaseAgent, call_ai
import json

class AffiliateContentAgent(BaseAgent):
    name = "Affiliate Content Agent"
    description = "Generates content for affiliate marketing campaigns."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(payload.get("product") or payload.get("idea") or payload.get("request"))

    def run(self, payload):
        product = payload.get("product") or payload.get("idea") or payload.get("request", "")
        system = "You are PEN2PRO. Write affiliate content that converts — honest, benefit-focused, specific."
        user = f"Product/Service: {product}\nReturn JSON: {{\"review_post\": \"...\", \"email_promo\": {{\"subject\": \"...\", \"body\": \"...\"}}, \"social_posts\": [\"post 1\", \"post 2\"], \"youtube_script_outline\": [\"intro\", \"problem\", \"solution\", \"demo\", \"cta\"]}}"
        raw = call_ai(system, user, max_tokens=800)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "affiliate_content", "content": result}
