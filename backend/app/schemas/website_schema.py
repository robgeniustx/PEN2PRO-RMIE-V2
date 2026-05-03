from typing import Any, Dict, List, Optional

from pydantic import BaseModel


class WebsiteGenerateRequest(BaseModel):
    blueprint_id: Optional[int] = None
    tier: str
    business_name: str
    offer: str
    ideal_customer: str
    problem_being_solved: Optional[str] = None
    city_state: Optional[str] = None
    website_goal: str
    domain_idea: Optional[str] = None
    brand_voice: Optional[str] = None
    tone: Optional[str] = None
    services: Optional[List[str]] = None


class WebsiteProjectResponse(BaseModel):
    id: Optional[int] = None
    business_name: str
    domain_idea: Optional[str] = None
    website_goal: Optional[str] = None
    status: str
    brand_direction: Optional[Dict[str, Any]] = None


class LandingPageResponse(BaseModel):
    hero_headline: str
    hero_subheadline: str
    primary_cta: str
    secondary_cta: Optional[str] = None
    problem_section: Optional[str] = None
    offer_section: Optional[str] = None
    benefits: Optional[List[str]] = None
    proof_section: Optional[str] = None
    process_steps: Optional[List[str]] = None
    faq: Optional[List[Dict[str, str]]] = None
    contact_section: Optional[str] = None


class SeoAssetResponse(BaseModel):
    page_type: str
    seo_title: str
    meta_description: str
    keywords: Optional[List[str]] = None
    slug: Optional[str] = None


class WebsiteGenerateResponse(BaseModel):
    status: str
    website_project: Dict[str, Any]
    landing_page: Dict[str, Any]
    website_copy: Dict[str, Any]
    seo: Dict[str, Any]
    service_pages: List[Dict[str, Any]]
    cta_sections: List[Dict[str, Any]]
    contact_form_blueprint: Dict[str, Any]
    domain_guidance: Dict[str, Any]
    brand_direction: Dict[str, Any]
    locked_sections: Optional[List[str]] = None
