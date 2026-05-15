from app.agents.base_agent import BaseAgent


class AdAgent(BaseAgent):
    name = "Ad Agent"
    description = "Creates simple ad angles, hooks, and CTA ideas."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(payload.get("offer") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        offer = payload.get("offer") or payload.get("business_idea") or payload.get("request")
        return {
            "status": "ok",
            "agent_key": "ad",
            "offer": offer,
            "hooks": [
                "Still sitting on your business idea?",
                "You do not need another idea. You need a launch plan.",
                "Turn your idea into income with a real roadmap.",
            ],
            "ctas": ["Start Free", "Build Your Roadmap", "Upgrade Your Plan"],
            "message": "Ad Agent placeholder is connected successfully."
        }
