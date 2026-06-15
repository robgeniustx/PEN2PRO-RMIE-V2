from app.agents.base_agent import BaseAgent, call_ai
import json

class CreditReadinessAgent(BaseAgent):
    name = "Credit Readiness Agent"
    description = "Evaluates business credit readiness and builds a 90-day credit path."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("credit_score"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "business")
        credit_score = payload.get("credit_score", "unknown")
        time_in_business = payload.get("time_in_business", "0 months")
        revenue = payload.get("revenue", "$0/month")

        system = "You are PEN2PRO's credit and funding strategist. Give specific, executable credit-building steps."
        user = f"""
Build a credit readiness plan for: {idea}
Personal Credit Score: {credit_score}
Time in Business: {time_in_business}
Monthly Revenue: {revenue}

Return JSON:
{{
  "readiness_score": <1-10>,
  "readiness_label": "Not Ready / Building / Ready",
  "immediate_steps": ["Step 1", "Step 2", "Step 3"],
  "business_credit_path": {{
    "month_1": "Actions to take",
    "month_2": "Actions to take",
    "month_3": "Actions to take"
  }},
  "vendor_tradelines": ["Vendor 1 — net 30, reports to Dun & Bradstreet", "Vendor 2", "Vendor 3"],
  "funding_options": [
    {{"type": "Microloans", "amount": "$X-$Y", "requirements": "..."}},
    {{"type": "SBA 7(a)", "amount": "$X-$Y", "requirements": "..."}},
    {{"type": "Business Credit Card", "amount": "$X-$Y", "requirements": "..."}}
  ],
  "red_flags_to_fix": ["Issue 1", "Issue 2"],
  "timeline_to_fundable": "Realistic estimate in months"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "credit_readiness", "assessment": result}
