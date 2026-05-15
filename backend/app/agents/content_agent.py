from app.agents.base_agent import BaseAgent


class ContentAgent(BaseAgent):
    name = "Content Agent"
    description = "Creates launch content ideas and customer education content."
    tier_required = "pro"

    def validate_input(self, payload):
        return bool(payload.get("topic") or payload.get("business_idea") or payload.get("request"))

    def run(self, payload):
        topic = payload.get("topic") or payload.get("business_idea") or payload.get("request")
        return {
            "status": "ok",
            "agent_key": "content",
            "topic": topic,
            "content_angles": [
                "Problem awareness",
                "Founder story",
                "Before and after transformation",
                "Customer pain point",
                "Offer explanation",
            ],
            "sample_posts": [
                f"Most people do not need more motivation. They need a roadmap for {topic}.",
                f"If you have been sitting on an idea for {topic}, this is your sign to build.",
            ],
            "message": "Content Agent placeholder is connected successfully."
        }
