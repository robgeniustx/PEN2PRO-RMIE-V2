from app.agents.base_agent import BaseAgent
from app.services import website_service


class WebsiteAgent(BaseAgent):
    name = "Website Agent"
    description = "Creates beginner-friendly website copy and structure based on the business blueprint."
    tier_required = "pro"

    def validate_input(self, payload):
        return payload

    def run(self, payload):
        return website_service.generate_website_builder(self.validate_input(payload))
