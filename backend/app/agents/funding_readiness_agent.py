from app.services.funding_service import generate_funding_readiness

class FundingReadinessAgent:
    name = 'Funding Readiness Agent'
    description = 'Helps users understand funding preparedness and required business documents.'
    tier_required = 'elite'
    def validate_input(self, data): return 'tier' in data
    def run(self, data): return generate_funding_readiness(data)
