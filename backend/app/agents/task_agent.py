from app.agents.base_agent import BaseAgent


class TaskAgent(BaseAgent):
    name = "Task Agent"
    description = "Creates an actionable task list from a business request."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload.get("request") or payload.get("goal") or payload.get("business_idea"))

    def run(self, payload):
        goal = payload.get("goal") or payload.get("request") or payload.get("business_idea")
        return {
            "status": "ok",
            "agent_key": "task",
            "goal": goal,
            "tasks": [
                {"title": "Clarify the goal", "priority": "high"},
                {"title": "Identify required files or tools", "priority": "high"},
                {"title": "Complete first execution step", "priority": "medium"},
                {"title": "Test the result", "priority": "high"},
            ],
            "message": "Task Agent placeholder is connected successfully."
        }
