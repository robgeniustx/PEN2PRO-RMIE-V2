from app.agents.base_agent import BaseAgent


class ComplianceAgent(BaseAgent):
    name = "Compliance Agent"
    description = "Creates a basic legal and compliance checklist."
    tier_required = "pro"

    def validate_input(self, payload):
        return isinstance(payload, dict)

    def run(self, payload):
        industry = payload.get("industry", "general business")
        state = payload.get("state", "your state")
        return {
            "status": "ok",
            "agent_key": "compliance",
            "industry": industry,
            "state": state,
            "checklist": [
                "Choose business structure",
                "Check state registration requirements",
                "Check local licensing requirements",
                "Set up business bank account",
                "Review insurance needs",
                "Track taxes and bookkeeping",
            ],
            "disclaimer": "This is general business information, not legal advice.",
            "message": "Compliance Agent placeholder is connected successfully."
        }
