from app.agents.base_agent import BaseAgent, call_ai
import json

class ShortVideoScriptAgent(BaseAgent):
    name = "Short Video Script Agent"
    description = "Generates short-form video scripts for TikTok, Reels, Shorts."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("topic") or payload.get("idea") or payload.get("request"))

    def run(self, payload):
        topic = payload.get("topic") or payload.get("idea") or payload.get("request", "")
        platform = payload.get("platform", "TikTok/Reels")
        system = "You are PEN2PRO. Write viral short-form video scripts for small business owners."
        user = f"Topic: {topic} | Platform: {platform}\nReturn JSON: {{\"scripts\": [{{\"title\": \"...\", \"hook\": \"first 3 seconds\", \"body\": \"...\", \"cta\": \"...\", \"duration\": \"30-60s\"}}, {{\"title\": \"...\", \"hook\": \"...\", \"body\": \"...\", \"cta\": \"...\", \"duration\": \"...\"}}], \"filming_tips\": [\"tip1\", \"tip2\"]}}"
        raw = call_ai(system, user, max_tokens=800)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"output": raw}
        return {"status": "ok", "agent_key": "short_video_script", "scripts": result}
