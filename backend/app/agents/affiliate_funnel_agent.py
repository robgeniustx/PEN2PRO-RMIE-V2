from app.agents.base_agent import BaseAgent, call_ai
import json

class AffiliateFunnelAgent(BaseAgent):
    name = "Affiliate Funnel Agent"
    description = "Designs complete affiliate marketing funnels."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("request", "")
        system = "You are PEN2PRO. Design affiliate funnels that generate passive income."
        user = f"Niche/Product: {idea}\nReturn JSON: {{\"funnel_stages\": [{{\"stage\": \"Awareness\", \"tactic\": \"...\"}}, {{\"stage\": \"Interest\", \"tactic\": \"...\"}}, {{\"stage\": \"Decision\", \"tactic\": \"...\"}}, {{\"stage\": \"Action\", \"tactic\": \"...\"}}], \"lead_magnet\": \"...\", \"email_sequence_overview\": [\"Email 1\", \"Email 2\", \"Email 3\"], \"monthly_income_estimate\": \"...\"}}"
        raw = call_ai(system, user, max_tokens=700)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "affiliate_funnel", "funnel": result}
