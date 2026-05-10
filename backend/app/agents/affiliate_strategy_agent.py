from .base_agent import BaseAgent
from app.services.affiliate_service import generate_affiliate_strategy, generate_product_categories

class AffiliateStrategyAgent(BaseAgent):
    name = "Affiliate Strategy Agent"
    description = "Helps users choose affiliate niches and product categories."
    tier_required = "elite"

    def validate_input(self, request_data):
        return "tier" in request_data

    def run(self, request_data):
        return {"niche_strategy": generate_affiliate_strategy(request_data), "product_categories": generate_product_categories(request_data)}
