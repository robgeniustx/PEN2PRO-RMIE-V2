from app.agents.base_agent import BaseAgent, call_ai
import json

class OutreachAgent(BaseAgent):
    name = "Outreach Agent"
    description = "Generates a complete outreach strategy with scripts and targeting."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        industry = payload.get("industry", "general")
        audience = payload.get("audience", "local customers")

        system = "You are PEN2PRO's outreach strategist. Write scripts that actually get responses — specific, not generic."
        user = f"""
Build a full outreach strategy for: {idea} ({industry})
Target audience: {audience}

Return JSON:
{{
  "cold_call_script": "Full phone script with intro, hook, value prop, close, and objection handling",
  "cold_dm_script": "Full DM/text script for Instagram, Facebook, or SMS",
  "email_template": {{"subject": "...", "body": "Full email body"}},
  "follow_up_sequence": [
    {{"day": 1, "channel": "text/call/email", "message": "..."}},
    {{"day": 3, "channel": "...", "message": "..."}},
    {{"day": 7, "channel": "...", "message": "..."}}
  ],
  "top_lead_sources": ["source 1 with how to find them", "source 2", "source 3"],
  "daily_outreach_target": "X contacts per day — explanation",
  "tracking_method": "How to track leads and follow-ups manually or with free tools"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=1200)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "outreach", "business_idea": idea, "outreach": result}
