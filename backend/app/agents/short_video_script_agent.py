from app.agents.base_agent import BaseAgent


class ShortVideoScriptAgent(BaseAgent):
    name = "Short Video Script Agent"
    description = "Generates short-form video scripts."
    tier_required = "elite"

    def validate_input(self, payload):
        return bool(
            payload.get("platform_focus")
            or payload.get("topic")
            or payload.get("business_idea")
            or payload.get("idea")
            or payload.get("request")
        )

    def run(self, payload):
        platform = payload.get("platform_focus", "TikTok, Instagram Reels, and Facebook Reels")
        topic = payload.get("topic") or payload.get("business_idea") or payload.get("idea") or payload.get("request")
        audience = payload.get("audience", "target customers")

        return {
            "status": "ok",
            "agent_key": "short_video_script",
            "platform_focus": platform,
            "topic": topic,
            "audience": audience,
            "scripts": [
                {
                    "hook": "Most people do not fail because their idea is bad.",
                    "body": f"They fail because they never get a clear roadmap for {topic}.",
                    "cta": "Start with a real plan before you waste time guessing."
                },
                {
                    "hook": "You do not need another idea.",
                    "body": f"You need a step-by-step execution plan that turns {topic} into income.",
                    "cta": "Build the roadmap first."
                },
                {
                    "hook": "If you have been sitting on a business idea, this is your sign.",
                    "body": f"Your audience is waiting for a clear offer. Start with one simple problem and one clear solution.",
                    "cta": "Turn the idea into action."
                }
            ],
            "message": "Short Video Script Agent placeholder is connected successfully."
        }
