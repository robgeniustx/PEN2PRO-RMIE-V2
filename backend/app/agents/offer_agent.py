from app.agents.base_agent import BaseAgent, call_ai
import json


class OfferAgent(BaseAgent):
    name = "Offer Agent"
    description = "Builds a complete monetizable offer structure for the business."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        industry = payload.get("industry", "general")

        system = "You are PEN2PRO's offer architect. Build real, sellable offer packages — not templates."
        user = f"""
Build a complete offer structure for: {idea} ({industry})

Return JSON:
{{
  "core_offer": {{
    "name": "offer name",
    "price": "$XX",
    "what_they_get": "specific deliverables",
    "time_to_deliver": "X days/hours",
    "why_this_price": "justification"
  }},
  "tiers": [
    {{"name": "Entry", "price": "$XX", "includes": "...", "best_for": "..."}},
    {{"name": "Standard", "price": "$XX", "includes": "...", "best_for": "..."}},
    {{"name": "Premium", "price": "$XX", "includes": "...", "best_for": "..."}}
  ],
  "upsell": "What to offer after first sale",
  "guarantee": "Risk-reversal guarantee wording",
  "positioning_statement": "One sentence that makes this irresistible",
  "objection_handlers": {{
    "too expensive": "response",
    "need to think about it": "response",
    "already have someone": "response"
  }}
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}

        return {"status": "ok", "agent_key": "offer", "business_idea": idea, "offer": result}
