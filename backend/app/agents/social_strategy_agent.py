from app.agents.base_agent import BaseAgent
from app.services.social_service import generate_social_strategy


class SocialStrategyAgent(BaseAgent):
    name = "social_strategy_agent"
    description = "Generates multi-platform social strategy"
    tier_required = "pro"

    def validate_input(self, request_data):
        return "business_name" in request_data and "offer" in request_data

    def run(self, request_data):
        return generate_social_strategy(request_data)
