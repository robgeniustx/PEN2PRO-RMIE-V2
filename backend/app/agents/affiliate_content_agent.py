from .base_agent import BaseAgent
from app.services.affiliate_service import generate_review_post, generate_comparison_post, generate_disclosure

class AffiliateContentAgent(BaseAgent):
    name = "Affiliate Content Agent"
    description = "Creates ethical affiliate review, comparison, and promotional content."
    tier_required = "elite"

    def validate_input(self, request_data):
        return "tier" in request_data

    def run(self, request_data):
        return {"review_post": generate_review_post(request_data), "comparison_post": generate_comparison_post(request_data), "disclosure": generate_disclosure(request_data)}
