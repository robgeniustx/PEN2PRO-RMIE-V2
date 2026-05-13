"""
Supported industries for PEN2PRO BusinessOS.
Mirrors frontend/src/constants/industries.js — keep in sync.
"""
from typing import List, Dict, Optional

INDUSTRIES: List[Dict[str, str]] = [
    {"id": "pressure-washing",   "label": "Pressure Washing",       "icon": "💧"},
    {"id": "hvac",               "label": "HVAC",                   "icon": "❄️"},
    {"id": "plumbing",           "label": "Plumbing",               "icon": "🔧"},
    {"id": "roofing",            "label": "Roofing",                "icon": "🏠"},
    {"id": "real-estate",        "label": "Real Estate",            "icon": "🏢"},
    {"id": "cleaning-services",  "label": "Cleaning Services",      "icon": "🧹"},
    {"id": "auto-detailing",     "label": "Auto Detailing",         "icon": "🚗"},
    {"id": "coaching-consulting","label": "Coaching & Consulting",  "icon": "🎯"},
    {"id": "barbershop-salon",   "label": "Barbershop / Salon",     "icon": "✂️"},
    {"id": "food-beverage",      "label": "Food & Beverage",        "icon": "🍽️"},
    {"id": "ecommerce",          "label": "eCommerce / Retail",     "icon": "🛒"},
    {"id": "construction",       "label": "Construction",           "icon": "🏗️"},
    {"id": "transportation",     "label": "Transportation / Logistics","icon": "🚚"},
    {"id": "fitness-wellness",   "label": "Fitness & Wellness",     "icon": "💪"},
    {"id": "childcare",          "label": "Childcare / Education",  "icon": "👶"},
    # ── 13 New Industries ──────────────────────────────────────────────────────
    {"id": "funding-business",   "label": "Funding Business",       "icon": "💰"},
    {"id": "attorney-law-firm",  "label": "Attorney / Law Firm",    "icon": "⚖️"},
    {"id": "dentist-office",     "label": "Dentist Office",         "icon": "🦷"},
    {"id": "courier-services",   "label": "Courier Services",       "icon": "📦"},
    {"id": "content-creator",    "label": "Content Creator",        "icon": "🎥"},
    {"id": "tree-service",       "label": "Tree Service",           "icon": "🌳"},
    {"id": "landscaping",        "label": "Landscaping",            "icon": "🌱"},
    {"id": "consulting",         "label": "Consulting",             "icon": "📊"},
    {"id": "ai-developer",       "label": "AI Developer",           "icon": "🤖"},
    {"id": "cell-phone-repair",  "label": "Cell Phone & TV Repair", "icon": "📱"},
    {"id": "interior-designer",  "label": "Interior Designer",      "icon": "🎨"},
    {"id": "tshirt-company",     "label": "T-Shirt Company",        "icon": "👕"},
    {"id": "insurance-company",  "label": "Insurance Company",      "icon": "🛡️"},
]

INDUSTRY_IDS: List[str] = [i["id"] for i in INDUSTRIES]


def get_industry_by_id(industry_id: str) -> Optional[Dict[str, str]]:
    return next((i for i in INDUSTRIES if i["id"] == industry_id), None)
