from fastapi import APIRouter

router = APIRouter(tags=["Pricing"])


PLANS = [
    {
        "id": "free",
        "name": "Free Forever",
        "price": 0,
        "display_price": "$0",
        "billing_type": "free",
        "description": "Start your business roadmap with a basic PEN2PRO blueprint.",
        "cta": "Start Free",
        "stripe_tier": None,
        "features": [
            "1 starter business blueprint",
            "Basic roadmap preview",
            "Limited progress tracking",
            "Free Forever access",
        ],
    },
    {
        "id": "pro",
        "name": "PEN2PRO Pro",
        "price": 249,
        "display_price": "$249/mo",
        "billing_type": "monthly",
        "description": "For builders ready to move from idea to income with execution tools.",
        "cta": "Upgrade to Pro",
        "stripe_tier": "pro",
        "features": [
            "Full RMIE business blueprint",
            "P2P Command Center access",
            "CRM basics",
            "Website Builder access",
            "P2P AI Voice (Basic)",
            "Marketing and monetization roadmap",
            "Progress tracking",
            "Email and PDF export",
        ],
    },
    {
        "id": "elite",
        "name": "PEN2PRO Elite",
        "price": 499,
        "display_price": "$499/mo",
        "billing_type": "monthly",
        "description": "Advanced AI, automation, and business scaling support.",
        "cta": "Upgrade to Elite",
        "stripe_tier": "elite",
        "features": [
            "Everything in Pro",
            "Advanced RMIE strategy engine",
            "P2P AI Voice Agent advanced access",
            "Advanced automations",
            "Funding readiness tools",
            "Advanced CRM and pipeline tools",
            "Priority support",
        ],
    },
    {
        "id": "founders",
        "name": "Founders Lifetime",
        "price": 1899,
        "display_price": "$1,899 for life",
        "billing_type": "lifetime",
        "description": "Everything you need to launch your business from idea to income and scale with a 10M strategist framework over the next 12 months.",
        "cta": "Claim Founders Lifetime",
        "stripe_tier": "founders",
        "spots_total": 200,
        "spots_message": "Only 200 Founders spots available.",
        "urgency": "This offer will not last long.",
        "features": [
            "Lifetime PEN2PRO access",
            "Everything in Elite",
            "RMIE launch and scaling roadmap",
            "P2P Command Center",
            "P2P AI Voice Agent",
            "Website Builder",
            "CRM and automation tools",
            "Funding readiness tools",
            "Branding and launch execution tools",
            "12-month 10M strategist framework",
        ],
    },
]


@router.get("/")
def get_pricing():
    return {
        "status": "ok",
        "launch_date": "June 15",
        "brand": "PEN2PRO",
        "tagline": "From Idea to Income",
        "plans": PLANS,
    }


@router.get("/plans")
def get_pricing_plans():
    return {
        "status": "ok",
        "plans": PLANS,
    }


@router.get("/founders")
def get_founders_offer():
    founders = next(plan for plan in PLANS if plan["id"] == "founders")
    return {
        "status": "ok",
        "offer": founders,
    }
