from app.agents.base_agent import BaseAgent


class OutreachAgent(BaseAgent):
    name = "Outreach Agent"
    description = "Creates starter outreach messages for leads and early customers."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("audience") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        audience = payload.get("audience", "potential customers")
        idea = payload.get("business_idea") or payload.get("idea") or payload.get("request", "your offer")
        return {
            "status": "ok",
            "agent_key": "outreach",
            "audience": audience,
            "messages": [
                f"Hey, I’m launching {idea} and wanted to see if this could help you.",
                f"Quick question — are you currently looking for a better way to handle {idea}?",
                f"I’m putting together a simple solution for {audience}. Can I send you the details?",
            ],
            "message": "Outreach Agent placeholder is connected successfully."
        }
