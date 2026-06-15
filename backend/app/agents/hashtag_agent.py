from app.agents.base_agent import BaseAgent, call_ai
import json

class HashtagAgent(BaseAgent):
    name = "Hashtag Agent"
    description = "Generates strategic hashtag sets for social platforms."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("niche") or payload.get("idea") or payload.get("request"))

    def run(self, payload):
        niche = payload.get("niche") or payload.get("idea") or payload.get("request", "")
        platform = payload.get("platform", "Instagram")
        system = "You are PEN2PRO. Generate strategic hashtag sets that expand reach for small businesses."
        user = f"Niche: {niche} | Platform: {platform}\nReturn JSON: {{\"niche_tags\": [\"#tag\",...], \"local_tags\": [\"#tag\",...], \"broad_tags\": [\"#tag\",...], \"branded_suggestion\": \"#uniquetag\", \"usage_tip\": \"how to rotate sets\"}}"
        raw = call_ai(system, user, max_tokens=400)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "hashtag", "result": result}
