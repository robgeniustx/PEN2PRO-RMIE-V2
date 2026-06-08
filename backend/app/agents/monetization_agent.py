from app.agents.base_agent import BaseAgent, call_ai
import json

class MonetizationAgent(BaseAgent):
    name = "Monetization Agent"
    description = "Builds revenue streams and scaling strategy."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        current_revenue = payload.get("current_revenue", "$0")

        system = "You are PEN2PRO's revenue strategist. Build practical, specific monetization paths for real businesses."
        user = f"""
Build a monetization and scaling strategy for: {idea}
Current Revenue: {current_revenue}

Return JSON:
{{
  "revenue_streams": [
    {{"stream": "Primary", "description": "...", "monthly_potential": "$X-$Y"}},
    {{"stream": "Secondary", "description": "...", "monthly_potential": "$X-$Y"}},
    {{"stream": "Passive/Recurring", "description": "...", "monthly_potential": "$X-$Y"}}
  ],
  "pricing_strategy": "Value-based, hourly, retainer, or project — with rationale",
  "milestone_targets": {{
    "month_1": "$X target and how to hit it",
    "month_3": "$X target and how to hit it",
    "month_6": "$X target",
    "year_1": "$X target"
  }},
  "scaling_levers": ["Lever 1", "Lever 2", "Lever 3"],
  "first_100k_path": "Step-by-step path from $0 to $100K for this specific business"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "monetization", "business_idea": idea, "monetization": result}
