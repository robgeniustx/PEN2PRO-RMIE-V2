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
