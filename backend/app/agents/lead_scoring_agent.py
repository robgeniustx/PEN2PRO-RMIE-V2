from app.agents.base_agent import BaseAgent
from app.services.crm_service import crm_service

class LeadScoringAgent(BaseAgent):
    name='Lead Scoring Agent'
    description='Scores leads and recommends the next best sales action.'
    tier_required='elite'
    def validate_input(self,payload): return bool(payload.get('offer'))
    def run(self,payload):
        if not self.validate_input(payload): return {'status':'error','message':'Invalid payload'}
        return crm_service.score_lead(payload)
