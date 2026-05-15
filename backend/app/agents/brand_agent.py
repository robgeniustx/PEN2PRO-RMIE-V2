from app.agents.base_agent import BaseAgent


class BrandAgent(BaseAgent):
    name = "Brand Agent"
    description = "Creates brand positioning, naming direction, and customer-facing message."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload.get("business_idea") or payload.get("idea") or payload.get("request") or payload.get("brand_name"))

    def run(self, payload):
        idea = payload.get("business_idea") or payload.get("idea") or payload.get("request") or "new business"
        return {
            "status": "ok",
            "agent_key": "brand",
            "positioning": f"A practical, trustworthy brand built around {idea}.",
            "tagline_options": [
                "Built to Launch. Ready to Grow.",
                "From Idea to Income.",
                "Start Clear. Move Fast. Build Real.",
            ],
            "brand_voice": ["clear", "confident", "practical", "motivational"],
            "message": "Brand Agent placeholder is connected successfully."
        }
