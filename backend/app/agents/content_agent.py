from app.agents.base_agent import BaseAgent, call_ai
import json

class ContentAgent(BaseAgent):
    name = "Content Agent"
    description = "Generates social media content, captions, and copy."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("topic"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("topic", "")
        platform = payload.get("platform", "Instagram")
        tone = payload.get("tone", "professional and engaging")

        system = "You are PEN2PRO's content strategist. Create content that builds authority and drives leads for small businesses."
        user = f"""
Create social media content for: {idea}
Platform: {platform} | Tone: {tone}

Return JSON:
{{
  "posts": [
    {{"type": "hook post", "caption": "full caption with hashtags", "cta": "call to action"}},
    {{"type": "value post", "caption": "...", "cta": "..."}},
    {{"type": "testimonial/social proof post", "caption": "...", "cta": "..."}},
    {{"type": "offer post", "caption": "...", "cta": "..."}},
    {{"type": "story/behind the scenes", "caption": "...", "cta": "..."}}
  ],
  "content_pillars": ["Pillar 1", "Pillar 2", "Pillar 3"],
  "posting_schedule": "Recommended days/times for {platform}",
  "hashtag_sets": {{"niche": ["#tag1","#tag2"], "local": ["#tag1","#tag2"], "broad": ["#tag1","#tag2"]}}
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=1200)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "content", "topic": idea, "content": result}
