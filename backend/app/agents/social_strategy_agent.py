from app.agents.base_agent import BaseAgent, call_ai
import json

class SocialStrategyAgent(BaseAgent):
    name = "Social Strategy Agent"
    description = "Builds a platform-specific social media strategy."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        platforms = payload.get("platforms", ["Instagram", "Facebook"])

        system = "You are PEN2PRO's social media strategist. Build specific, executable social strategies for small businesses."
        user = f"""
Build a social media strategy for: {idea}
Platforms: {platforms}

Return JSON:
{{
  "platform_focus": "Which platform to prioritize first and why",
  "content_mix": {{"educational": "30%", "promotional": "20%", "social_proof": "25%", "behind_scenes": "25%"}},
  "weekly_schedule": [{{"day": "Monday", "content_type": "...", "example": "..."}}, {{"day": "Wednesday", "content_type": "...", "example": "..."}}, {{"day": "Friday", "content_type": "...", "example": "..."}}],
  "growth_tactics": ["Tactic 1", "Tactic 2", "Tactic 3"],
  "profile_optimization": ["Tip 1", "Tip 2", "Tip 3"],
  "first_30_days_goal": "Specific follower/engagement target and how to hit it"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=800)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "social_strategy", "strategy": result}
