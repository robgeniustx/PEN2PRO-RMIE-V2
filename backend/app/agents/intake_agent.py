from app.agents.base_agent import BaseAgent


class IntakeAgent(BaseAgent):
    name = "Intake Agent"
    description = "Normalizes user intake answers into structured business data."
    tier_required = "free"

    def validate_input(self, payload):
        return isinstance(payload, dict) and bool(payload)

    def run(self, payload):
        return {
            "status": "ok",
            "agent_key": "intake",
            "normalized": {
                "idea": payload.get("idea") or payload.get("business_idea") or payload.get("request"),
                "industry": payload.get("industry", "general"),
                "budget": payload.get("budget", "unknown"),
                "experience_level": payload.get("experience_level", "beginner"),
            },
            "missing_fields": [
                field for field in ["idea", "industry", "budget", "experience_level"]
                if not payload.get(field)
            ],
            "message": "Intake Agent placeholder is connected successfully."
        }
