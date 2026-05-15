from app.agents.base_agent import BaseAgent


class BlueprintAgent(BaseAgent):
    name = "Blueprint Agent"
    description = "Generates a structured PEN2PRO business blueprint from a user idea."
    tier_required = "free"

    def validate_input(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("prompt")
        return isinstance(idea, str) and len(idea.strip()) > 0

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("prompt")
        industry = payload.get("industry", "general business")
        audience = payload.get("audience", "first-time entrepreneurs")

        return {
            "status": "ok",
            "agent_key": "blueprint",
            "business_idea": idea,
            "industry": industry,
            "audience": audience,
            "sections": {
                "business_snapshot": f"Launch a {industry} offer based on: {idea}",
                "target_customer": audience,
                "starter_offer": "Create one clear entry-level offer that solves a painful problem quickly.",
                "first_7_days": [
                    "Clarify the offer",
                    "Choose a simple business name",
                    "Draft the landing page promise",
                    "Create a customer outreach list",
                    "Start collecting leads",
                ],
                "first_30_days": [
                    "Validate pricing",
                    "Get first paying customers",
                    "Collect testimonials",
                    "Refine sales script",
                    "Build basic CRM follow-up",
                ],
            },
            "message": "Blueprint Agent placeholder is connected successfully."
        }
