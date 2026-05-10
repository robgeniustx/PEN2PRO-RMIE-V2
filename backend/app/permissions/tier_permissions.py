TIER_PERMISSIONS = {
    "free": {"affiliate": {"access": False, "preview": False}},
    "pro": {"affiliate": {"access": "preview", "preview": True}},
    "elite": {"affiliate": {"access": True, "preview": True}},
    "founders": {"affiliate": {"access": True, "preview": True, "future_placeholders": True}},
}
