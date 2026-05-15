from app.agents.base_agent import BaseAgent


class MonetizationAgent(BaseAgent):
    name = "Monetization Agent"
    description = "Creates revenue paths and pricing ideas."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("business_idea") or payload.get("idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("business_idea") or payload.get("idea") or payload.get("request")
        return {
            "status": "ok",
            "agent_key": "monetization",
            "business_idea": idea,
            "revenue_paths": [
                "Starter service/package",
                "Monthly subscription or maintenance plan",
                "Premium done-for-you offer",
                "Affiliate/referral partnerships",
                "Digital product or training add-on",
            ],
            "message": "Monetization Agent placeholder is connected successfully."
        }
