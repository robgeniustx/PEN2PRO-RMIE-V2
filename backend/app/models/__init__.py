"""Import every live SQLAlchemy model so it registers on Base.metadata
before app.db.Base.metadata.create_all() runs at startup."""

from app.models.activity_log import ActivityLog  # noqa: F401
from app.models.agent_approval import AgentApproval  # noqa: F401
from app.models.agent_command import AgentCommand  # noqa: F401
from app.models.agent_run import AgentRun  # noqa: F401
from app.models.daily_report import DailyReport  # noqa: F401
from app.models.task import Task  # noqa: F401
from app.models.analytics_event import AnalyticsEvent  # noqa: F401
from app.models.conversion_event import ConversionEvent  # noqa: F401
from app.models.feature_usage import FeatureUsage  # noqa: F401
from app.models.landing_page import LandingPage  # noqa: F401
from app.models.seo_asset import SeoAsset  # noqa: F401
from app.models.website_project import WebsiteProject  # noqa: F401
from app.models.affiliate_funnel import AffiliateFunnel  # noqa: F401
from app.models.affiliate_link import AffiliateLink  # noqa: F401
from app.models.affiliate_niche import AffiliateNiche  # noqa: F401
from app.models.brand_voice import BrandVoice  # noqa: F401
from app.models.customer import Customer  # noqa: F401
from app.models.deal import Deal  # noqa: F401
from app.models.follow_up import FollowUp  # noqa: F401
from app.models.lead import Lead  # noqa: F401
from app.models.social_calendar import SocialCalendar  # noqa: F401
from app.models.social_post import SocialPost  # noqa: F401
