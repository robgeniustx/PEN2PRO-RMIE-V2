from app.agents.base_agent import BaseAgent, call_ai
import json

class FundingReadinessAgent(BaseAgent):
    name = "Funding Readiness Agent"
    description = "Evaluates funding readiness and identifies capital sources."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "business")
        funding_need = payload.get("funding_need", "unknown")
        revenue = payload.get("revenue", "$0/month")
        credit_score = payload.get("credit_score", "unknown")

        system = "You are PEN2PRO's funding advisor. Identify real capital sources and what it takes to qualify."
        user = f"""
Funding readiness for: {idea}
Funding Need: {funding_need}
Revenue: {revenue}
Credit Score: {credit_score}

Return JSON:
{{
  "funding_gap": "Assessment of how much is needed vs how much they can realistically get now",
  "best_options_now": [
    {{"source": "...", "amount": "$X", "requirements": "...", "timeline": "X weeks/months", "apply_at": "URL or location"}}
  ],
  "options_in_90_days": ["Option after credit/revenue improvements"],
  "documents_needed": ["Document 1", "Document 2", "Document 3"],
  "pitch_summary": "2-sentence funding pitch for this specific business",
  "grants_to_explore": ["Grant 1 specific to Texas or veteran-owned if applicable", "Grant 2"],
  "action_plan": ["Step 1 this week", "Step 2 next week", "Step 3 in 30 days"]
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "funding_readiness", "assessment": result}
