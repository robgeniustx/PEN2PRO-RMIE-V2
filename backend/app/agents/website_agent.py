from app.agents.base_agent import BaseAgent, call_ai
import json

class WebsiteAgent(BaseAgent):
    name = "Website Agent"
    description = "Generates complete website copy, structure, and SEO strategy."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("idea") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        industry = payload.get("industry", "general")

        system = "You are PEN2PRO's website strategist. Build landing pages that convert — not brochures."
        user = f"""
Generate complete website copy for: {idea} ({industry})

Return JSON:
{{
  "headline": "Hero headline (under 10 words, outcome-focused)",
  "subheadline": "Supporting statement that clarifies the offer",
  "hero_cta": "Button text",
  "about_section": "3-4 sentences about the business and why they're the right choice",
  "services": [
    {{"name": "Service 1", "description": "...", "price_range": "$X-$Y"}},
    {{"name": "Service 2", "description": "...", "price_range": "$X-$Y"}},
    {{"name": "Service 3", "description": "...", "price_range": "$X-$Y"}}
  ],
  "social_proof_section": "Placeholder testimonial format + what to ask customers for",
  "faq": [
    {{"question": "Q1", "answer": "A1"}},
    {{"question": "Q2", "answer": "A2"}},
    {{"question": "Q3", "answer": "A3"}}
  ],
  "footer_cta": "Final call-to-action text",
  "seo_keywords": ["keyword 1", "keyword 2", "keyword 3", "keyword 4", "keyword 5"],
  "meta_description": "SEO meta description under 160 characters",
  "google_business_tips": ["Tip 1 for Google Business Profile", "Tip 2", "Tip 3"]
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=1200)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}
        return {"status": "ok", "agent_key": "website", "business_idea": idea, "website": result}
