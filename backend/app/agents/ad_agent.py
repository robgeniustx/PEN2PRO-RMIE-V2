from app.agents.base_agent import BaseAgent, call_ai
import json

class AdAgent(BaseAgent):
    name = "Ad Agent"
    description = "Generates paid ad copy and campaign strategy."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        budget = payload.get("ad_budget", "$500/month")
        platform = payload.get("ad_platform", "Facebook/Instagram")

        system = "You are PEN2PRO's paid ads strategist. Write ad copy and campaigns that generate leads for local service businesses."
        user = f"""
Build a paid ad campaign for: {idea}
Budget: {budget} | Platform: {platform}

Return JSON:
{{
  "campaign_objective": "Leads / Traffic / Calls",
  "target_audience": {{"demographics": "...", "interests": ["..."], "behaviors": ["..."], "location_radius": "X miles"}},
  "ad_creative": [
    {{"type": "Image Ad", "headline": "...", "body": "...", "cta": "..."}},
    {{"type": "Video Ad Script", "hook": "...", "body": "...", "cta": "..."}}
  ],
  "budget_split": {{"daily_budget": "$X/day", "testing_phase": "First 2 weeks — how to allocate", "scaling_phase": "After validation"}},
  "kpis": {{"cpl_target": "$X per lead", "ctr_benchmark": "X%", "roas_goal": "Xx"}},
  "landing_page_tips": ["Tip 1", "Tip 2"]
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "ad", "campaign": result}
