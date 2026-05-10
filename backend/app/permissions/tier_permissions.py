WEBSITE_TIER_ACCESS = {
    "free": {"website_builder": False, "landing_page": False, "seo": False, "brand_kit": False},
    "pro": {"website_builder": True, "landing_page": True, "seo": False, "brand_kit": False},
    "elite": {"website_builder": True, "landing_page": True, "seo": True, "brand_kit": True},
    "founders": {"website_builder": True, "landing_page": True, "seo": True, "brand_kit": True},
}
CRM_PERMISSIONS = {
    'free': {'crm_access': False},
    'pro': {'crm_access': True, 'lead_scoring': False, 'pipeline_board': False},
    'elite': {'crm_access': True, 'lead_scoring': True, 'pipeline_board': True},
    'founders': {'crm_access': True, 'lead_scoring': True, 'pipeline_board': True, 'automation_placeholders': True},
}
TIER_ORDER = ["free", "pro", "elite", "founders"]


def has_tier_access(user_tier: str, required_tier: str) -> bool:
    try:
        return TIER_ORDER.index(user_tier.lower()) >= TIER_ORDER.index(required_tier.lower())
    except ValueError:
        return False


def social_locked_sections(tier: str):
    t = (tier or "free").lower()
    if t == "free":
        return ["calendar", "scripts", "repurposing_plan", "brand_voice"]
    if t == "pro":
        return ["30_day_calendar", "short_video_scripts", "advanced_repurposing", "advanced_brand_voice"]
    return []
