from app.agents.base_agent import BaseAgent, call_ai
import json


class BrandAgent(BaseAgent):
    name = "Brand Agent"
    description = "Generates brand identity — name, voice, tagline, positioning."
    tier_required = "free"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        industry = payload.get("industry", "general")
        audience = payload.get("audience", "general consumers")

        system = "You are PEN2PRO's brand strategist. Create brand identities that are memorable, market-specific, and fundable."
        user = f"""
Create a complete brand identity for: {idea}
Industry: {industry} | Audience: {audience}

Return JSON:
{{
  "business_names": ["Name1", "Name2", "Name3", "Name4", "Name5"],
  "taglines": ["Tagline 1", "Tagline 2", "Tagline 3"],
  "brand_voice": "professional/energetic/trustworthy/etc with 2-sentence description",
  "brand_colors": {{"primary": "#hex", "secondary": "#hex", "accent": "#hex", "rationale": "why these colors"}},
  "target_message": "The core message this brand communicates to the market",
  "brand_archetype": "Hero/Sage/Creator/etc — with explanation",
  "social_bio": "Instagram/Facebook bio under 150 characters",
  "elevator_pitch": "30-second verbal pitch for networking events",
  "domain_suggestions": ["domain1.com", "domain2.com", "domain3.com"]
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}

        return {"status": "ok", "agent_key": "brand", "business_idea": idea, "brand": result}
