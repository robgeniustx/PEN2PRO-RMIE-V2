from app.agents.base_agent import BaseAgent


class SocialStrategyAgent(BaseAgent):
    name = "Social Strategy Agent"
    description = "Generates multi-platform social strategy."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(
            payload.get("business_name")
            or payload.get("offer")
            or payload.get("business_idea")
            or payload.get("idea")
            or payload.get("request")
        )

    def run(self, payload):
        business_name = payload.get("business_name", "Your Business")
        offer = payload.get("offer") or payload.get("business_idea") or payload.get("idea") or payload.get("request")
        audience = payload.get("audience", "target customers")
        industry = payload.get("industry", "business")

        return {
            "status": "ok",
            "agent_key": "social_strategy",
            "business_name": business_name,
            "industry": industry,
            "offer": offer,
            "audience": audience,
            "platforms": {
                "tiktok": {
                    "content_style": "Short direct hooks, founder story, before-and-after transformation.",
                    "posting_focus": "Awareness and curiosity."
                },
                "instagram": {
                    "content_style": "Carousels, reels, proof posts, and founder credibility.",
                    "posting_focus": "Trust-building and engagement."
                },
                "facebook": {
                    "content_style": "Community posts, local proof, customer education, and offer posts.",
                    "posting_focus": "Lead generation and local trust."
                }
            },
            "weekly_plan": [
                "2 pain-point posts",
                "2 educational posts",
                "1 founder story post",
                "1 offer explanation post",
                "1 proof or testimonial post"
            ],
            "message": "Social Strategy Agent placeholder is connected successfully."
        }
