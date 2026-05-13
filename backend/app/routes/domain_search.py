"""
Domain Search API Routes
Business name suggestions and domain availability checks.
"""
import os
import re
import random
import httpx
from typing import List, Optional

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel

router = APIRouter(prefix="/domain", tags=["Domain Search"])

CLOUDFLARE_API_TOKEN = os.getenv("CLOUDFLARE_API_TOKEN", "")
DOMAIN_AFFILIATE_URL = os.getenv("DOMAIN_AFFILIATE_URL", "https://namecheap.com")


def _slugify(text: str) -> str:
    """Convert a business name to a domain-safe slug."""
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def _generate_domain_suggestions(business_name: str, industry_id: Optional[str] = None) -> List[str]:
    """Generate domain name suggestions based on the business name."""
    slug = _slugify(business_name)
    suggestions = [
        f"{slug}.com",
        f"{slug}.net",
        f"{slug}.co",
        f"get{slug}.com",
        f"{slug}pro.com",
        f"{slug}llc.com",
        f"my{slug}.com",
        f"{slug}services.com",
    ]

    # Add industry-specific suffixes
    if industry_id:
        industry_keywords = {
            "pressure-washing": ["wash", "clean", "shine"],
            "hvac": ["hvac", "air", "cooling"],
            "plumbing": ["plumbing", "pipes", "flow"],
            "roofing": ["roof", "roofing", "shingle"],
            "landscaping": ["lawn", "landscape", "green"],
            "cleaning-services": ["clean", "sparkling", "shine"],
            "auto-detailing": ["detail", "auto", "shine"],
            "tree-service": ["tree", "arborist", "trim"],
            "consulting": ["consult", "strategy", "advisory"],
            "content-creator": ["media", "content", "studio"],
        }
        keywords = industry_keywords.get(industry_id, ["pro", "services"])
        for kw in keywords[:2]:
            suggestions.append(f"{slug}{kw}.com")

    return suggestions[:10]


# ---------------------------------------------------------------------------
# ROUTES
# ---------------------------------------------------------------------------

class DomainCheckRequest(BaseModel):
    business_name: str
    industry_id: Optional[str] = None


@router.post("/suggest")
def suggest_domains(payload: DomainCheckRequest):
    """Return domain name suggestions for a given business name."""
    suggestions = _generate_domain_suggestions(payload.business_name, payload.industry_id)
    return {
        "business_name": payload.business_name,
        "suggestions": suggestions,
        "register_link": DOMAIN_AFFILIATE_URL,
        "note": "Check availability and register your domain at Namecheap or your preferred registrar.",
    }


@router.get("/check")
async def check_domain(domain: str = Query(..., description="Domain name to check, e.g. mybusiness.com")):
    """
    Check domain availability via Cloudflare API or return a mock response.
    In production with CLOUDFLARE_API_TOKEN set, this calls the Cloudflare registrar API.
    """
    domain = domain.lower().strip()
    if not re.match(r"^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]\.[a-z]{2,}$", domain):
        raise HTTPException(status_code=400, detail="Invalid domain format")

    # If no API token, return mock availability
    if not CLOUDFLARE_API_TOKEN:
        # Simulate: .com domains randomly available for demo
        available = random.random() > 0.4
        price = 10.99 if available else 0
        return {
            "domain": domain,
            "available": available,
            "price": price,
            "currency": "USD",
            "register_link": f"{DOMAIN_AFFILIATE_URL}?domain={domain}",
            "source": "demo",
        }

    try:
        # Cloudflare registrar availability check
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(
                f"https://api.cloudflare.com/client/v4/accounts/registrar/domains/{domain}",
                headers={"Authorization": f"Bearer {CLOUDFLARE_API_TOKEN}"},
            )
            data = response.json()
            available = data.get("result", {}).get("available", False)
            price = data.get("result", {}).get("fees", {}).get("icann_fee", 10.99)
            return {
                "domain": domain,
                "available": available,
                "price": price,
                "currency": "USD",
                "register_link": f"{DOMAIN_AFFILIATE_URL}?domain={domain}",
                "source": "cloudflare",
            }
    except Exception as e:
        # Graceful fallback
        return {
            "domain": domain,
            "available": None,
            "message": "Domain availability check temporarily unavailable.",
            "register_link": f"{DOMAIN_AFFILIATE_URL}?domain={domain}",
            "source": "error",
        }


@router.get("/business-name-ideas")
def business_name_ideas(
    industry: str = Query(...),
    keywords: Optional[str] = Query(None, description="Comma-separated keywords related to your business"),
):
    """Generate business name ideas for a given industry."""
    industry_starters = {
        "pressure-washing": ["ProWash", "ClearPath", "BrightSurface", "XLR8 Wash", "Apex Clean"],
        "hvac": ["ComfortPro", "ClimateFirst", "AirMasters", "CoolEdge", "ThermalPro"],
        "plumbing": ["FlowPro", "PipeMasters", "QuickFlow", "DrainRight", "WaterWorks"],
        "roofing": ["ApexRoof", "ShieldTop", "RoofRight", "PeakPro", "CrestRoofing"],
        "landscaping": ["GreenEdge", "ProLawn", "TerraVista", "LushLandscape", "YardMasters"],
        "cleaning-services": ["SparkleRight", "CleanSlate", "ShineOn", "PristineClean", "FreshStart"],
        "consulting": ["Apex Strategy", "ClearPath Consulting", "Insight Partners", "Forward Advisory", "ProEdge Consulting"],
        "content-creator": ["Bold Media", "StoryFirst Studio", "PixelEdge Creative", "RealContent Co", "VoiceForward Media"],
        "funding-business": ["CapitalPath", "FundReady Pro", "ApprovalEdge", "BuildCapital", "FundingForward"],
        "attorney-law-firm": ["Shield Legal", "Justice Forward", "Advocate Law Group", "RightLaw Partners", "ProLegal Group"],
    }

    base_names = industry_starters.get(industry, ["ProEdge", "FirstChoice", "Apex", "Elite Services", "Premier Group"])

    if keywords:
        extra_keywords = [k.strip().title() for k in keywords.split(",") if k.strip()]
        for kw in extra_keywords[:3]:
            base_names.append(f"{kw} Pro")
            base_names.append(f"{kw} Group")

    return {
        "industry": industry,
        "suggestions": base_names[:10],
        "note": "These are name ideas only. Check trademark availability before registering.",
    }
