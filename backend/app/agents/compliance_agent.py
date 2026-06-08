from app.agents.base_agent import BaseAgent, call_ai
import json

class ComplianceAgent(BaseAgent):
    name = "Compliance Agent"
    description = "Generates legal and compliance foundation checklist."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        state = payload.get("state", "Texas")
        industry = payload.get("industry", "general")

        system = "You are PEN2PRO's compliance advisor. Give specific, actionable legal setup steps — not disclaimers."
        user = f"""
Build a legal/compliance foundation for: {idea}
State: {state} | Industry: {industry}

Return JSON:
{{
  "entity_recommendation": "LLC / S-Corp / Sole Prop — with reason",
  "formation_steps": ["Step 1 with link/resource", "Step 2", "Step 3"],
  "ein_steps": "How to get EIN online in 10 minutes",
  "licenses_required": ["License 1 specific to this business/state", "License 2"],
  "insurance_needed": ["Insurance type 1", "Insurance type 2"],
  "contracts_needed": ["Contract 1", "Contract 2"],
  "bank_account_tips": "What to look for in a business bank account for this type of business",
  "compliance_calendar": ["Month 1 task", "Month 3 task", "Month 6 task", "Annual task"],
  "cost_estimate": "Realistic total cost to get legally set up"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "compliance", "business_idea": idea, "compliance": result}
