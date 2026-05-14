from enum import Enum
from typing import Dict, List


class TierName(str, Enum):
    FREE = "free_forever"
    PRO = "pro"
    ELITE = "elite"
    FOUNDERS = "founders"


TIER_FEATURES: Dict[str, List[str]] = {
    TierName.FREE: [
        "rmie_basic_blueprint",
        "basic_progress_tracking",
        "limited_branding",
        "social_basic",
    ],
    TierName.PRO: [
        "rmie_full_blueprint",
        "full_progress_tracking",
        "branding_tools",
        "email_export",
        "pdf_export",
        "basic_ai_refinement",
        "crm_basic",
        "website_builder_basic",
        "funnels_basic",
        "automations_basic",
        "payments_basic",
        "social_media_planner",
        "social_post_generator",
        "basic_content_calendar",
    ],
    TierName.ELITE: [
        "everything_in_pro",
        "advanced_rmie_strategy_engine",
        "advanced_business_plan_generation",
        "advanced_niche_marketing_plans",
        "unlimited_domains",
        "unlimited_blogs",
        "unlimited_memberships",
        "unlimited_courses",
        "unlimited_video_hosting",
        "unlimited_communities",
        "unlimited_certificates",
        "expert_nurture_campaigns",
        "advanced_workflows",
        "advanced_pipeline_reporting",
        "ai_follow_up_sales_assistant",
        "ai_content_funnel_assistant",
        "ai_review_response_assistant",
        "ai_proposal_estimate_generator",
        "ai_profit_loss_insight",
        "up_to_10_users",
        "advanced_p2p_ai_voice_agent",
        "call_summaries",
        "lead_qualification",
        "ai_appointment_booking",
        "crm_updates_from_calls",
        "text_to_pay",
        "priority_support",
        "advanced_social_strategy",
        "unlimited_social_posts",
        "multi_platform_campaigns",
        "ai_caption_generator",
        "content_calendar_advanced",
    ],
    TierName.FOUNDERS: [
        "everything_in_elite",
        "lifetime_access",
        "founders_badge",
        "early_access_features",
        "priority_founder_support",
    ],
}


SOCIAL_LOCKED_SECTIONS: Dict[str, List[str]] = {
    TierName.FREE: [
        "advanced_social_strategy",
        "unlimited_social_posts",
        "multi_platform_campaigns",
        "ai_caption_generator",
        "content_calendar_advanced",
    ],
    TierName.PRO: [
        "advanced_social_strategy",
        "unlimited_social_posts",
        "multi_platform_campaigns",
        "content_calendar_advanced",
    ],
    TierName.ELITE: [],
    TierName.FOUNDERS: [],
}


# This name is required by backend/app/services/social_service.py
social_locked_sections = SOCIAL_LOCKED_SECTIONS


def normalize_tier(tier: str) -> str:
    if not tier:
        return TierName.FREE

    clean_tier = tier.strip().lower()

    aliases = {
        "free": TierName.FREE,
        "free_forever": TierName.FREE,
        "pro": TierName.PRO,
        "elite": TierName.ELITE,
        "founder": TierName.FOUNDERS,
        "founders": TierName.FOUNDERS,
    }

    return aliases.get(clean_tier, TierName.FREE)


def get_tier_features(tier: str) -> List[str]:
    normalized_tier = normalize_tier(tier)
    return TIER_FEATURES.get(normalized_tier, TIER_FEATURES[TierName.FREE])


def get_social_locked_sections(tier: str) -> List[str]:
    normalized_tier = normalize_tier(tier)
    return SOCIAL_LOCKED_SECTIONS.get(normalized_tier, SOCIAL_LOCKED_SECTIONS[TierName.FREE])


def has_feature_access(tier: str, feature: str) -> bool:
    normalized_tier = normalize_tier(tier)

    if normalized_tier == TierName.FOUNDERS:
        return True

    if normalized_tier == TierName.ELITE:
        return (
            feature in TIER_FEATURES[TierName.ELITE]
            or feature in TIER_FEATURES[TierName.PRO]
            or feature in TIER_FEATURES[TierName.FREE]
        )

    if normalized_tier == TierName.PRO:
        return feature in TIER_FEATURES[TierName.PRO] or feature in TIER_FEATURES[TierName.FREE]

    return feature in get_tier_features(normalized_tier)


def require_feature_access(tier: str, feature: str) -> bool:
    return has_feature_access(tier, feature)
