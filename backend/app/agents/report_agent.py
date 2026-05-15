from app.agents.base_agent import BaseAgent


class ReportAgent(BaseAgent):
    name = "Report Agent"
    description = "Summarizes activity and progress into a business report."
    tier_required = "elite"

    def validate_input(self, payload):
        return isinstance(payload, dict)

    def run(self, payload):
        return {
            "status": "ok",
            "agent_key": "report",
            "summary": "Business progress report generated.",
            "highlights": payload.get("highlights", []),
            "risks": payload.get("risks", []),
            "recommended_next_actions": [
                "Review incomplete roadmap tasks",
                "Follow up with leads",
                "Update pricing and offer page",
            ],
            "message": "Report Agent placeholder is connected successfully."
        }
