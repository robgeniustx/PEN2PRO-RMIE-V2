from app.agents.base_agent import BaseAgent, call_ai
import json

class ProgressAgent(BaseAgent):
    name = "Progress Agent"
    description = "Tracks and scores business launch progress."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload)

    def run(self, payload):
        idea = payload.get("idea") or payload.get("request", "business")
        completed = payload.get("completed_steps", [])
        system = "You are PEN2PRO. Evaluate business launch progress and guide next steps."
        user = f"Business: {idea}\nCompleted: {completed}\nReturn JSON: {{\"completion_pct\": 0-100, \"stage\": \"Ideation/Building/Launching/Scaling\", \"next_3_steps\": [\"...\",\"...\",\"...\"], \"encouragement\": \"one direct motivating sentence\"}}"
        raw = call_ai(system, user, max_tokens=400)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "progress", "progress": result}
