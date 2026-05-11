from app.agents.base_agent import BaseAgent
from app.services import website_service


class LandingPageAgent(BaseAgent):
    name = "Landing Page Agent"
    description = "Creates a simple landing page that supports offer validation and lead capture."
    tier_required = "pro"

    def validate_input(self, payload):
        return payload

    def run(self, payload):
        return website_service.generate_landing_page(self.validate_input(payload))
