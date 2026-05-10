from .base_agent import BaseAgent
from app.services.affiliate_service import generate_affiliate_funnel, generate_traffic_plan

class AffiliateFunnelAgent(BaseAgent):
    name = "Affiliate Funnel Agent"
    description = "Creates beginner-friendly affiliate funnels and traffic plans."
    tier_required = "elite"

    def validate_input(self, request_data):
        return "tier" in request_data

    def run(self, request_data):
        return {"funnel": generate_affiliate_funnel(request_data), "traffic_plan": generate_traffic_plan(request_data)}
