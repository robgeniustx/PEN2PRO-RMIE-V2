from app.agents.base_agent import BaseAgent


class OfferAgent(BaseAgent):
    name = "Offer Agent"
    description = "Builds a simple monetizable offer from the user business idea."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("business_idea") or payload.get("idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("business_idea") or payload.get("idea") or payload.get("request")
        return {
            "status": "ok",
            "agent_key": "offer",
            "core_offer": f"Starter package for {idea}",
            "pricing_suggestions": ["Starter: $99-$299", "Core: $500-$1,500", "Premium: $2,500+"],
            "offer_stack": [
                "Clear outcome",
                "Fast-start checklist",
                "Done-with-you guidance",
                "Follow-up support",
            ],
            "message": "Offer Agent placeholder is connected successfully."
        }
