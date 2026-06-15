from app.agents.base_agent import BaseAgent, call_ai
import json

class LeadScoringAgent(BaseAgent):
    name = "Lead Scoring Agent"
    description = "Scores and prioritizes leads based on quality signals."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload)

    def run(self, payload):
        lead_data = payload.get("lead") or payload
        system = "You are PEN2PRO. Score and prioritize this lead with actionable next steps."
        user = f"Lead data: {lead_data}\nReturn JSON: {{\"score\": 1-100, \"grade\": \"A/B/C/D\", \"priority\": \"Hot/Warm/Cold\", \"reasons\": [\"...\",\"...\"], \"recommended_action\": \"...\", \"best_channel\": \"call/text/email\"}}"
        raw = call_ai(system, user, max_tokens=400)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "lead_scoring", "scoring": result}
