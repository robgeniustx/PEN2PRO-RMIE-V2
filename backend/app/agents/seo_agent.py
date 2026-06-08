from app.agents.base_agent import BaseAgent, call_ai
import json

class SeoAgent(BaseAgent):
    name = "SEO Agent"
    description = "Generates local SEO strategy and keyword plan."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        location = payload.get("location", "Houston, TX")
        industry = payload.get("industry", "general")

        system = "You are PEN2PRO's SEO specialist. Build local SEO strategies that get small businesses found on Google fast."
        user = f"""
Build a local SEO strategy for: {idea}
Location: {location} | Industry: {industry}

Return JSON:
{{
  "primary_keywords": ["keyword 1", "keyword 2", "keyword 3"],
  "long_tail_keywords": ["phrase 1", "phrase 2", "phrase 3", "phrase 4"],
  "google_business_profile": {{
    "category": "best GBP category",
    "description": "optimized GBP description under 750 chars",
    "services_to_list": ["service 1", "service 2", "service 3"],
    "post_ideas": ["Post idea 1", "Post idea 2"]
  }},
  "local_citation_sites": ["Site 1", "Site 2", "Site 3", "Site 4"],
  "content_topics": ["Blog/page topic 1", "Topic 2", "Topic 3"],
  "30_day_seo_plan": ["Week 1 task", "Week 2 task", "Week 3 task", "Week 4 task"],
  "competitor_intel": "How to identify and outrank local competitors"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=900)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "seo", "business_idea": idea, "seo": result}
