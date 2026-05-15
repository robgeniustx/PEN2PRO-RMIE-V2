from app.agents.base_agent import BaseAgent


class ProgressAgent(BaseAgent):
    name = "Progress Agent"
    description = "Tracks roadmap progress and suggests next steps."
    tier_required = "free"

    def validate_input(self, payload):
        return isinstance(payload, dict)

    def run(self, payload):
        completed = payload.get("completed_tasks", [])
        total = payload.get("total_tasks", 10)
        count = len(completed) if isinstance(completed, list) else 0
        percent = int((count / total) * 100) if total else 0
        return {
            "status": "ok",
            "agent_key": "progress",
            "completed_count": count,
            "total_tasks": total,
            "progress_percent": percent,
            "next_step": "Complete the next highest-impact task on your roadmap.",
            "message": "Progress Agent placeholder is connected successfully."
        }
