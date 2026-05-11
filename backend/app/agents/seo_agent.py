from app.agents.base_agent import BaseAgent
from app.services import website_service


class SeoAgent(BaseAgent):
    name = "SEO Agent"
    description = "Creates SEO titles, meta descriptions, keywords, and service page outlines."
    tier_required = "elite"

    def validate_input(self, payload):
        return payload

    def run(self, payload):
        return website_service.generate_seo_assets(self.validate_input(payload))
