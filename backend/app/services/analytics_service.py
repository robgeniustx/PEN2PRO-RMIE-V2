from datetime import datetime, timezone
from typing import Any, Dict, List

MOCK_METRICS = {
    "total_users": 128,
    "total_blueprints": 312,
    "total_events": 1820,
    "total_upgrade_clicks": 94,
    "total_checkouts_started": 52,
    "total_checkouts_completed": 31,
    "estimated_revenue": 8947.0,
    "active_tier_counts": {"free": 76, "pro": 34, "elite": 15, "founders": 3},
    "top_features": [{"feature_name": "blueprint_generate", "usage_count": 212}],
    "module_usage": [{"module_name": "blueprint", "usage_count": 412}],
    "recent_activity": [{"event_name": "blueprint_generated", "created_at": datetime.now(timezone.utc).isoformat()}],
    "conversion_summary": {"upgrade_click": 94, "checkout_started": 52, "checkout_completed": 31, "checkout_cancelled": 14},
    "funnel_summary": {"starter_visits": 430, "blueprint_generated": 312, "pricing_viewed": 210, "upgrade_clicked": 94, "checkout_started": 52, "checkout_completed": 31},
}

_EVENTS: List[Dict[str, Any]] = []
_FEATURES: List[Dict[str, Any]] = []
_CONVERSIONS: List[Dict[str, Any]] = []


def track_event(data):
    payload = data.model_dump() if hasattr(data, "model_dump") else dict(data)
    payload["id"] = len(_EVENTS) + 1
    payload["created_at"] = datetime.now(timezone.utc).isoformat()
    _EVENTS.append(payload)
    return payload


def track_feature_usage(data):
    payload = data.model_dump() if hasattr(data, "model_dump") else dict(data)
    payload["id"] = len(_FEATURES) + 1
    payload["usage_count"] = payload.get("usage_count", 1)
    payload["created_at"] = datetime.now(timezone.utc).isoformat()
    _FEATURES.append(payload)
    return payload


def track_conversion_event(data):
    payload = data.model_dump() if hasattr(data, "model_dump") else dict(data)
    payload["id"] = len(_CONVERSIONS) + 1
    payload["created_at"] = datetime.now(timezone.utc).isoformat()
    _CONVERSIONS.append(payload)
    return payload


def get_feature_usage_summary():
    return _FEATURES or MOCK_METRICS["top_features"]


def get_module_usage_summary():
    return MOCK_METRICS["module_usage"] if not _FEATURES else [{"module_name": f.get("module_name", "unknown"), "usage_count": 1} for f in _FEATURES]


def get_conversion_summary():
    summary = {"upgrade_click": 0, "checkout_started": 0, "checkout_completed": 0, "checkout_cancelled": 0, "plan_viewed": 0}
    for item in _CONVERSIONS:
        ctype = item.get("conversion_type")
        if ctype in summary:
            summary[ctype] += 1
    return summary if _CONVERSIONS else MOCK_METRICS["conversion_summary"]


def get_funnel_summary():
    if not _EVENTS:
        return MOCK_METRICS["funnel_summary"]
    names = [e.get("event_name") for e in _EVENTS]
    return {
        "starter_visits": names.count("starter_page_viewed"),
        "blueprint_generated": names.count("blueprint_generated"),
        "pricing_viewed": names.count("pricing_page_viewed"),
        "upgrade_clicked": names.count("upgrade_clicked"),
        "checkout_started": get_conversion_summary().get("checkout_started", 0),
        "checkout_completed": get_conversion_summary().get("checkout_completed", 0),
    }


def get_recent_activity(limit=25):
    rows = list(reversed(_EVENTS[-limit:]))
    return rows or MOCK_METRICS["recent_activity"]


def get_tier_distribution():
    return MOCK_METRICS["active_tier_counts"]


def get_revenue_summary():
    if not _CONVERSIONS:
        return MOCK_METRICS["estimated_revenue"]
    return sum(float(c.get("amount") or 0) for c in _CONVERSIONS if c.get("conversion_type") == "checkout_completed")


def get_admin_metrics():
    return {
        "total_users": MOCK_METRICS["total_users"],
        "total_blueprints": len([e for e in _EVENTS if e.get("event_name") == "blueprint_generated"]) or MOCK_METRICS["total_blueprints"],
        "total_events": len(_EVENTS) or MOCK_METRICS["total_events"],
        "total_upgrade_clicks": len([e for e in _EVENTS if e.get("event_name") == "upgrade_clicked"]) or MOCK_METRICS["total_upgrade_clicks"],
        "total_checkouts_started": get_conversion_summary().get("checkout_started", 0),
        "total_checkouts_completed": get_conversion_summary().get("checkout_completed", 0),
        "estimated_revenue": get_revenue_summary(),
        "active_tier_counts": get_tier_distribution(),
        "top_features": get_feature_usage_summary(),
        "module_usage": get_module_usage_summary(),
        "recent_activity": get_recent_activity(),
        "conversion_summary": get_conversion_summary(),
        "funnel_summary": get_funnel_summary(),
    }
