from app.agents.caption_agent import CaptionAgent
from app.agents.hashtag_agent import HashtagAgent
from app.agents.content_calendar_agent import ContentCalendarAgent
from app.agents.landing_page_agent import LandingPageAgent
from app.agents.brand_identity_agent import BrandIdentityAgent
from app.agents.follow_up_agent import FollowUpAgent
from app.agents.lead_scoring_agent import LeadScoringAgent
from app.agents.affiliate_strategy_agent import AffiliateStrategyAgent
from app.agents.affiliate_content_agent import AffiliateContentAgent
from app.agents.affiliate_funnel_agent import AffiliateFunnelAgent
from app.agents.credit_readiness_agent import CreditReadinessAgent
from app.agents.funding_readiness_agent import FundingReadinessAgent

AGENTS = {
    "caption": CaptionAgent(),
    "hashtag": HashtagAgent(),
    "content_calendar": ContentCalendarAgent(),
    "landing_page": LandingPageAgent(),
    "brand_identity": BrandIdentityAgent(),
    "follow_up": FollowUpAgent(),
    "lead_scoring": LeadScoringAgent(),
    "affiliate_strategy": AffiliateStrategyAgent(),
    "affiliate_content": AffiliateContentAgent(),
    "affiliate_funnel": AffiliateFunnelAgent(),
    "credit_readiness": CreditReadinessAgent(),
    "funding_readiness": FundingReadinessAgent(),
}



def get_agent(agent_key: str):
    return AGENTS.get(agent_key)
