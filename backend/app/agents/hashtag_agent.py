from app.agents.base_agent import BaseAgent
from app.services.social_service import generate_hashtags


class HashtagAgent(BaseAgent):
    name = "hashtag_agent"
    description = "Generates tier-safe hashtag packs"
    tier_required = "pro"

    def validate_input(self, request_data):
        return True

    def run(self, request_data):
        return generate_hashtags(request_data)
