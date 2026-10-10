from typing import Any, Dict

from app.services import ai_client

SYSTEM = (
    "You write website copy for small service businesses. Be specific, plain-spoken and honest. "
    "Never invent testimonials, statistics, awards, licenses or guarantees. Use [placeholders] where real proof is needed. "
    "Return one JSON object with exactly these keys: "
    "landing_page {hero_headline, hero_subheadline, primary_cta, secondary_cta, problem_section, offer_section, benefits[], proof_section, "
    "process_steps[], faq[{question, answer}], contact_section}, "
    "website_copy {home, about, services, contact}, "
    "seo {seo_title, meta_description, keywords[], slug}, "
    "service_pages [{title, sections[]}], cta_sections [{headline, cta}], "
    "contact_form_blueprint {fields[], cta_label}, "
    "domain_guidance {principles[], examples[]}, "
    "brand_direction {colors[], logo_direction, typography, image_style}."
)


def _prompt(data: Dict[str, Any]) -> str:
    lines = [f"{k.replace('_', ' ')}: {v}" for k, v in data.items() if v not in (None, "", [])]
    return "Write the website plan and copy for this business.\n" + "\n".join(lines)


async def generate_website_builder(request_data: Dict[str, Any]) -> Dict[str, Any]:
    result = await ai_client.chat_json(SYSTEM, _prompt(request_data), "OPENAI_MODEL_WEBSITE", 3500)
    business = request_data.get("business_name", "Your Business")
    return {
        "status": "success",
        "website_project": {
            "business_name": business,
            "domain_idea": request_data.get("domain_idea"),
            "website_goal": request_data.get("website_goal", "lead_capture"),
            "status": "draft",
        },
        **{k: result.get(k) for k in (
            "landing_page", "website_copy", "seo", "service_pages", "cta_sections",
            "contact_form_blueprint", "domain_guidance", "brand_direction",
        )},
        "locked_sections": [],
    }


async def _section(request_data: Dict[str, Any], key: str) -> Any:
    return (await generate_website_builder(request_data)).get(key)
