<<<<<<< HEAD
TIER_ORDER = ["free", "pro", "elite", "founders"]

def normalize_tier(tier: str | None) -> str:
    return (tier or "free").lower()

def has_tier(min_tier: str, tier: str | None) -> bool:
    t = normalize_tier(tier)
    return TIER_ORDER.index(t) >= TIER_ORDER.index(min_tier)

def can_access_automation(tier: str | None) -> bool:
    return has_tier("pro", tier)
=======
# TODO tier_permissions
>>>>>>> main
