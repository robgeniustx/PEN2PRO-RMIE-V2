from app.agents.base_agent import BaseAgent
from app.services.social_service import generate_social_posts


class CaptionAgent(BaseAgent):
    name = "caption_agent"
    description = "Generates captions, hooks and CTAs"
    tier_required = "pro"

    def validate_input(self, request_data):
        return "goal" in request_data

    def run(self, request_data):
        return generate_social_posts(request_data)
