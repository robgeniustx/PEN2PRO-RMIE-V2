from app.agents.base_agent import BaseAgent
from app.services import website_service


class BrandIdentityAgent(BaseAgent):
    name = "Brand Identity Agent"
    description = "Creates brand colors, logo direction, style guidance, and visual identity suggestions."
    tier_required = "elite"

    def validate_input(self, payload):
        return payload

    def run(self, payload):
        return website_service.generate_brand_direction(self.validate_input(payload))
