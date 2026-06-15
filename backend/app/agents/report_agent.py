from app.agents.base_agent import BaseAgent, call_ai
import json

class ReportAgent(BaseAgent):
    name = "Report Agent"
    description = "Generates business progress reports and summaries."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload)

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "business")
        system = "You are PEN2PRO. Generate a structured business progress report."
        user = f"Business: {idea}\nReturn JSON: {{\"executive_summary\": \"...\", \"wins\": [\"...\"], \"challenges\": [\"...\"], \"kpis\": {{\"revenue\": \"...\", \"leads\": \"...\", \"conversions\": \"...\"}}, \"next_30_days\": [\"action1\",\"action2\"]}}"
        raw = call_ai(system, user, max_tokens=600)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "report", "report": result}
