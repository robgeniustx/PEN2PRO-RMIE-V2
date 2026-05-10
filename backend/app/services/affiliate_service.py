import json
import logging
import os
from datetime import datetime, timezone
from typing import Any, Dict, List

logger = logging.getLogger(__name__)

DISCLOSURE = "This content may contain affiliate links. If someone buys through my link, I may earn a commission at no extra cost to them."
_LINKS: List[Dict[str, Any]] = []
_NEXT_ID = 1


def _mock_affiliate_engine(_: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "status": "success",
        "niche_strategy": {"recommended_niche": "Beginner productivity tools", "audience": "Freelancers starting online", "problem_solved": "Choosing simple tools without overwhelm", "why_it_fits": "Low complexity and easy educational content", "risk_notes": ["Avoid income promises", "Only promote tools you understand"]},
        "product_categories": [{"category": "Task management", "audience_fit": "New freelancers", "content_angle": "setup tutorials", "risk_notes": "avoid fake claims"}],
        "funnel": {"funnel_name": "Starter Tool Guide Funnel", "traffic_source": "Short-form video + blog", "landing_page_angle": "Simple stack for first-time freelancers", "lead_magnet": "1-page tool checklist", "cta": "Read the full beginner tool guide", "steps": ["Educational content", "Guide landing page", "Disclosure before links", "Manual click logging"]},
        "review_post": {"title": "Beginner Review: Simple Task Tool", "hook": "If you need a starter workflow, begin here.", "body": "This review explains who the tool is for, limitations, and setup steps.", "pros": ["easy setup"], "cons": ["limited advanced automation"], "cta": "Compare this with two alternatives.", "disclosure": DISCLOSURE},
        "comparison_post": {"title": "Task Tool A vs B vs C", "angle": "Best for beginners", "comparison_points": ["price", "learning curve", "support"], "recommendation_guidance": "Pick based on your first 30-day use case, not hype.", "disclosure": DISCLOSURE},
        "disclosure": DISCLOSURE,
        "traffic_plan": [{"channel": "YouTube Shorts", "action": "Publish one beginner tip daily"}],
        "content_plan": [{"week": 1, "deliverable": "1 review + 1 comparison"}],
        "link_tracker": _LINKS,
        "locked_sections": []
    }


def generate_affiliate_strategy(request_data): return _mock_affiliate_engine(request_data)["niche_strategy"]
def generate_product_categories(request_data): return _mock_affiliate_engine(request_data)["product_categories"]
def generate_affiliate_funnel(request_data): return _mock_affiliate_engine(request_data)["funnel"]
def generate_review_post(request_data): return _mock_affiliate_engine(request_data)["review_post"]
def generate_comparison_post(request_data): return _mock_affiliate_engine(request_data)["comparison_post"]
def generate_disclosure(request_data): return _mock_affiliate_engine(request_data)["disclosure"]
def generate_traffic_plan(request_data): return _mock_affiliate_engine(request_data)["traffic_plan"]
def generate_affiliate_content_plan(request_data): return _mock_affiliate_engine(request_data)["content_plan"]


def generate_affiliate_engine(request_data):
    if not os.getenv("OPENAI_API_KEY"):
        return _mock_affiliate_engine(request_data)
    model = os.getenv("OPENAI_MODEL_AFFILIATE", "gpt-4o-mini")
    try:
        # Safe stub until network integrations/LLM wiring are finalized.
        data = _mock_affiliate_engine(request_data)
        data["status"] = f"success (model configured: {model})"
        return data
    except Exception as exc:
        logger.exception("Affiliate generation failed: %s", exc)
        fallback = _mock_affiliate_engine(request_data)
        fallback["status"] = "fallback"
        return fallback


def create_affiliate_link(data):
    global _NEXT_ID
    now = datetime.now(timezone.utc).isoformat()
    link = {"id": _NEXT_ID, "product_name": data.get("product_name"), "product_category": data.get("product_category"), "affiliate_url": data.get("affiliate_url"), "platform": data.get("platform"), "clicks": data.get("clicks", 0), "conversions": data.get("conversions", 0), "estimated_commission": data.get("estimated_commission"), "notes": data.get("notes"), "affiliate_funnel_id": data.get("affiliate_funnel_id"), "created_at": now, "updated_at": now}
    _NEXT_ID += 1
    _LINKS.append(link)
    return link

def list_affiliate_links(): return _LINKS
def get_affiliate_link(link_id): return next((x for x in _LINKS if x["id"] == link_id), None)
def update_affiliate_link(link_id, data):
    link = get_affiliate_link(link_id)
    if not link: return None
    link.update({k: v for k, v in data.items() if v is not None})
    link["updated_at"] = datetime.now(timezone.utc).isoformat()
    return link

def delete_affiliate_link(link_id):
    global _LINKS
    before = len(_LINKS)
    _LINKS = [x for x in _LINKS if x["id"] != link_id]
    return len(_LINKS) < before
