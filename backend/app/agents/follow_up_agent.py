from app.agents.base_agent import BaseAgent
from app.services.crm_service import crm_service

class FollowUpAgent(BaseAgent):
    name='Follow-Up Agent'
    description='Writes beginner-friendly follow-up messages for leads and customers.'
    tier_required='pro'
    def validate_input(self,payload): return bool(payload.get('lead_name') and payload.get('offer'))
    def run(self,payload):
        if not self.validate_input(payload): return {'status':'error','message':'Invalid payload'}
        return crm_service.generate_follow_up_message(payload)
