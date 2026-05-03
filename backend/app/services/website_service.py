import os


def _mock(request_data):
    business = request_data.get("business_name", "Your Business")
    offer = request_data.get("offer", "your offer")
    customer = request_data.get("ideal_customer", "ideal customers")
    return {
        "status": "success",
        "website_project": {"business_name": business, "domain_idea": request_data.get("domain_idea"), "website_goal": request_data.get("website_goal", "lead_capture"), "status": "draft"},
        "landing_page": {
            "hero_headline": f"{business}: A simple next step for {customer}",
            "hero_subheadline": f"Validate demand first with a focused offer: {offer}.",
            "primary_cta": "Get Started",
            "secondary_cta": "Book a Quick Call",
            "problem_section": "Most beginners overbuild websites before testing demand.",
            "offer_section": f"Start with a lean landing page centered on {offer}.",
            "benefits": ["Clear value proposition", "Fast launch", "Lower cost while validating"],
            "proof_section": "Add real outcomes as you gather early customer feedback.",
            "process_steps": ["Define offer", "Launch landing page", "Collect interest", "Refine messaging"],
            "faq": [{"question": "Do I need a full website?", "answer": "No. Start simple and validate first."}],
            "contact_section": "Use a short contact form with name, email, and goal.",
        },
        "website_copy": {"home": "Clear homepage positioning with a single CTA.", "about": "Founder story focused on trust and customer outcome.", "services": "Simple services summary and next step.", "contact": "Friendly contact instructions with response expectations."},
        "seo": {"seo_title": f"{business} | {offer}", "meta_description": f"Learn how {business} helps {customer} with {offer}.", "keywords": [business, offer, customer], "slug": business.lower().replace(' ', '-')},
        "service_pages": [{"title": "Service Page Outline", "sections": ["Problem", "Solution", "Process", "CTA"]}],
        "cta_sections": [{"headline": "Ready to validate your offer?", "cta": "Request Details"}],
        "contact_form_blueprint": {"fields": ["name", "email", "phone(optional)", "goal"], "cta_label": "Send Request"},
        "domain_guidance": {"principles": ["Keep it short", "Use readable words", "Match your offer"], "examples": [f"{business.lower().replace(' ', '')}.com", f"get{business.lower().replace(' ', '')}.com"]},
        "brand_direction": {"colors": ["#0B1020", "#1E90FF", "#F59E0B"], "logo_direction": "Simple wordmark first", "typography": "Modern sans-serif", "image_style": "Clean, real, service-focused"},
        "locked_sections": [],
    }


def generate_landing_page(request_data): return _mock(request_data)["landing_page"]
def generate_website_copy(request_data): return _mock(request_data)["website_copy"]
def generate_seo_assets(request_data): return _mock(request_data)["seo"]
def generate_service_pages(request_data): return _mock(request_data)["service_pages"]
def generate_cta_sections(request_data): return _mock(request_data)["cta_sections"]
def generate_contact_form_blueprint(request_data): return _mock(request_data)["contact_form_blueprint"]
def generate_domain_guidance(request_data): return _mock(request_data)["domain_guidance"]
def generate_brand_direction(request_data): return _mock(request_data)["brand_direction"]


def generate_website_builder(request_data):
    _ = os.getenv("OPENAI_MODEL_WEBSITE", "gpt-4o-mini")
    if not os.getenv("OPENAI_API_KEY"):
        return _mock(request_data)
    try:
        return _mock(request_data)
    except Exception:
        return _mock(request_data)
