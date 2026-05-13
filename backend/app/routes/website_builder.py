"""
P2P Website Builder API Routes
Niche-specific website templates, content generation, and domain search.
"""
import os
import uuid
from typing import Optional, Dict, Any

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel

from app.services.niche_marketing_service import get_website_template, WEBSITE_TEMPLATES

router = APIRouter(prefix="/website-builder", tags=["Website Builder"])

# ---------------------------------------------------------------------------
# In-memory website project store
# ---------------------------------------------------------------------------
_WEBSITES: Dict[str, dict] = {}


# ---------------------------------------------------------------------------
# TEMPLATES
# ---------------------------------------------------------------------------

@router.get("/templates")
def list_website_templates():
    """List all available niche-specific website templates."""
    return {
        "templates": [
            {
                "industry_id": industry_id,
                "theme": tmpl.get("theme"),
                "primary_color": tmpl.get("primary_color"),
                "accent_color": tmpl.get("accent_color"),
                "sections_count": len(tmpl.get("homepage_sections", [])),
                "has_blog_topics": bool(tmpl.get("blog_topics")),
                "has_seo_meta": bool(tmpl.get("seo_meta")),
            }
            for industry_id, tmpl in WEBSITE_TEMPLATES.items()
        ]
    }


@router.get("/templates/{industry_id}")
def get_template(industry_id: str):
    """Return full website template for a given industry."""
    template = get_website_template(industry_id)
    return {"industry_id": industry_id, "template": template}


# ---------------------------------------------------------------------------
# WEBSITE PROJECTS
# ---------------------------------------------------------------------------

class WebsiteCreate(BaseModel):
    business_name: str
    industry_id: str
    city: Optional[str] = None
    state: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    tagline: Optional[str] = None
    domain: Optional[str] = None
    color_override: Optional[str] = None


@router.post("/websites")
def create_website(payload: WebsiteCreate):
    """Create a new website project using a niche template."""
    website_id = str(uuid.uuid4())
    template = get_website_template(payload.industry_id)

    # Apply business-specific variables to template
    business_vars = {
        "{business_name}": payload.business_name,
        "{city}": payload.city or "Your City",
        "{state}": payload.state or "Your State",
        "{phone_number}": payload.phone or "",
        "{email}": payload.email or "",
    }

    def apply_vars(obj):
        if isinstance(obj, str):
            for k, v in business_vars.items():
                obj = obj.replace(k, v)
            return obj
        if isinstance(obj, dict):
            return {k: apply_vars(v) for k, v in obj.items()}
        if isinstance(obj, list):
            return [apply_vars(item) for item in obj]
        return obj

    personalized_template = apply_vars(template)

    website = {
        "id": website_id,
        "business_name": payload.business_name,
        "industry_id": payload.industry_id,
        "city": payload.city,
        "state": payload.state,
        "phone": payload.phone,
        "email": payload.email,
        "tagline": payload.tagline,
        "domain": payload.domain,
        "template": personalized_template,
        "status": "draft",
        "published": False,
        "created_at": str(uuid.uuid4()),
    }
    _WEBSITES[website_id] = website
    return website


@router.get("/websites")
def list_websites():
    return {"websites": list(_WEBSITES.values()), "total": len(_WEBSITES)}


@router.get("/websites/{website_id}")
def get_website(website_id: str):
    website = _WEBSITES.get(website_id)
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    return website


@router.patch("/websites/{website_id}")
def update_website(website_id: str, payload: dict):
    website = _WEBSITES.get(website_id)
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    website.update(payload)
    return website


@router.delete("/websites/{website_id}")
def delete_website(website_id: str):
    if website_id not in _WEBSITES:
        raise HTTPException(status_code=404, detail="Website not found")
    del _WEBSITES[website_id]
    return {"deleted": True}


# ---------------------------------------------------------------------------
# CONTENT GENERATION
# ---------------------------------------------------------------------------

class ContentRequest(BaseModel):
    business_name: str
    industry_id: str
    city: Optional[str] = None
    section_type: str  # hero | services | about | testimonials | faq | blog_post
    topic: Optional[str] = None


@router.post("/generate-content")
async def generate_content(payload: ContentRequest):
    """
    Generate website section content using OpenAI.
    Falls back to template-based content if API key is not set.
    """
    import httpx

    api_key = os.getenv("OPENAI_API_KEY", "")
    model = os.getenv("AI_MODEL", "gpt-4o-mini")

    template = get_website_template(payload.industry_id)

    if not api_key:
        # Fallback content based on template
        fallback_section = next(
            (s for s in template.get("homepage_sections", []) if s.get("type") == payload.section_type),
            None,
        )
        return {
            "section_type": payload.section_type,
            "content": fallback_section or {"message": "Section template not found"},
            "source": "template_fallback",
        }

    prompt = f"""Generate professional website copy for a {payload.industry_id.replace("-", " ")} business.
Business Name: {payload.business_name}
Location: {payload.city or "Houston, TX"}
Section: {payload.section_type}
{"Topic: " + payload.topic if payload.topic else ""}

Write compelling, specific copy for this section. Avoid generic phrases.
Return only the content, no explanations."""

    try:
        async with httpx.AsyncClient(timeout=20) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={"Authorization": f"Bearer {api_key}"},
                json={
                    "model": model,
                    "messages": [{"role": "user", "content": prompt}],
                    "max_tokens": 500,
                    "temperature": 0.7,
                },
            )
            data = response.json()
            content = data["choices"][0]["message"]["content"]
            return {"section_type": payload.section_type, "content": content, "source": "ai"}
    except Exception as e:
        return {
            "section_type": payload.section_type,
            "content": f"Content generation temporarily unavailable.",
            "source": "error",
            "error": str(e),
        }


# ---------------------------------------------------------------------------
# SEO META GENERATOR
# ---------------------------------------------------------------------------

class SeoRequest(BaseModel):
    business_name: str
    industry_id: str
    city: Optional[str] = None
    state: Optional[str] = None
    keywords: Optional[str] = None


@router.post("/seo-meta")
def generate_seo_meta(payload: SeoRequest):
    """Generate SEO meta tags for the website."""
    template = get_website_template(payload.industry_id)
    seo = template.get("seo_meta", {})

    industry_label = payload.industry_id.replace("-", " ").title()
    city = payload.city or "Your City"
    state = payload.state or ""
    location = f"{city}, {state}".strip(", ")

    title = seo.get("title", "{business_name} — {industry} Services in {city}") \
        .replace("{business_name}", payload.business_name) \
        .replace("{industry}", industry_label) \
        .replace("{city}", city) \
        .replace("{state}", state)

    description = seo.get("description", "Professional {industry} services in {city}.") \
        .replace("{business_name}", payload.business_name) \
        .replace("{industry}", industry_label) \
        .replace("{city}", city) \
        .replace("{state}", state)

    blog_topics = [
        t.replace("{city}", city).replace("{state}", state).replace("{business_name}", payload.business_name)
        for t in template.get("blog_topics", [])
    ]

    return {
        "title": title,
        "description": description,
        "keywords": f"{industry_label}, {city}, {payload.business_name}",
        "og_title": title,
        "og_description": description,
        "blog_topics": blog_topics,
    }
