from app.services.credit_service import generate_credit_readiness

class CreditReadinessAgent:
    name = 'Credit Readiness Agent'
    description = 'Helps users understand business credit foundations and organize readiness steps.'
    tier_required = 'elite'
    def validate_input(self, data): return 'tier' in data
    def run(self, data): return generate_credit_readiness(data)
