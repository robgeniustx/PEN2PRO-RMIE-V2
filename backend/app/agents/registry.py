from app.agents.task_agent import TaskAgent
from app.agents.report_agent import ReportAgent
from app.agents.progress_agent import ProgressAgent
from app.agents.intake_agent import IntakeAgent
from app.agents.monetization_agent import MonetizationAgent
from app.agents.seo_agent import SeoAgent
from app.agents.compliance_agent import ComplianceAgent
from app.agents.outreach_agent import OutreachAgent
from app.agents.offer_agent import OfferAgent
from app.agents.ad_agent import AdAgent
from app.agents.short_video_script_agent import ShortVideoScriptAgent
from app.agents.social_strategy_agent import SocialStrategyAgent
from app.agents.content_agent import ContentAgent
from app.agents.website_agent import WebsiteAgent
from app.agents.brand_agent import BrandAgent
from app.agents.blueprint_agent import BlueprintAgent
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
from app.agents.main_builder_agent import MainBuilderAgent

AGENTS = {
    "task": TaskAgent(),
    "report": ReportAgent(),
    "progress": ProgressAgent(),
    "intake": IntakeAgent(),
    "monetization": MonetizationAgent(),
    "seo": SeoAgent(),
    "compliance": ComplianceAgent(),
    "outreach": OutreachAgent(),
    "offer": OfferAgent(),
    "ad": AdAgent(),
    "short_video_script": ShortVideoScriptAgent(),
    "social_strategy": SocialStrategyAgent(),
    "content": ContentAgent(),
    "website": WebsiteAgent(),
    "brand": BrandAgent(),
    "blueprint": BlueprintAgent(),
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
    "main_builder": MainBuilderAgent(),
}



def get_agent(agent_key: str):
    return AGENTS.get(agent_key)
