from app.agents.base_agent import BaseAgent, call_ai
import json

class TaskAgent(BaseAgent):
    name = "Task Agent"
    description = "Generates a prioritized task list for business launch."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload)

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "business")
        system = "You are PEN2PRO. Generate a specific, prioritized task checklist for launching this business."
        user = f"Business: {idea}\nReturn JSON: {{\"today\": [\"task1\",\"task2\",\"task3\"], \"this_week\": [\"task1\",\"task2\",\"task3\"], \"this_month\": [\"task1\",\"task2\",\"task3\"], \"notes\": \"key priority note\"}}"
        raw = call_ai(system, user, max_tokens=600)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "task", "tasks": result}
