import os
from typing import Any, Dict, List

from app.permissions.tier_permissions import social_locked_sections


def _mock_days(length: int) -> List[Dict[str, Any]]:
    days = []
    for i in range(1, length + 1):
        days.append({
            "day": i,
            "theme": f"Problem/Solution Day {i}",
            "platform": "instagram",
            "post_type": "reel",
            "hook": f"Stop losing leads with this simple fix #{i}",
            "caption": "Teach one tactical step your audience can apply today.",
            "cta": "Comment 'PLAN' and I will send the checklist.",
            "hashtags": ["#pen2pro", "#smallbusiness", "#contentstrategy"],
            "script": "Hook, pain point, one step, CTA.",
        })
    return days


def generate_social_strategy(request_data):
    return {
        "tiktok": "Post fast-paced education with founder POV and direct hooks.",
        "instagram": "Use reels + carousel teaching posts with clear CTA.",
        "facebook": "Repurpose reels and add discussion prompts in groups.",
        "linkedin": "Share authority-based lessons and short case breakdowns.",
        "youtube_shorts": "Publish 30-45 second tactical clips with one promise.",
    }


def generate_content_calendar(request_data):
    cal_type = request_data.get("calendar_length", "7_day")
    length = {"7_day": 7, "14_day": 14, "30_day": 30}.get(cal_type, 7)
    return {"calendar_type": cal_type, "days": _mock_days(length)}


def generate_social_posts(request_data):
    return _mock_days(3)


def generate_short_video_scripts(request_data):
    return [{"hook": d["hook"], "scene_direction": "Talk to camera", "script": d["script"], "cta": d["cta"], "caption": d["caption"], "hashtags": d["hashtags"]} for d in _mock_days(3)]


def generate_hashtags(request_data):
    return ["#pen2pro", "#growthmarketing", "#smallbusinesstips"]


def generate_ctas(request_data):
    return ["DM 'START' for the template.", "Comment 'PLAN' for the checklist.", "Save this and apply step one today."]


def generate_repurposing_plan(request_data):
    return ["Turn one reel into carousel, short, and linkedin post.", "Extract one quote into story post."]


def generate_brand_voice(request_data):
    return {"tone": "confident and practical", "audience": request_data.get("ideal_customer", "small business owners"), "style_rules": ["short sentences", "one CTA"], "avoid_words": ["guaranteed", "viral"], "example_phrases": ["Start simple and stay consistent."]}


def generate_social_marketing_engine(request_data):
    tier = request_data.get("tier", "free").lower()
    using_openai = bool(os.getenv("OPENAI_API_KEY"))
    result = {
        "status": "success",
        "strategy": generate_social_strategy(request_data),
        "calendar": generate_content_calendar(request_data),
        "posts": generate_social_posts(request_data),
        "scripts": generate_short_video_scripts(request_data),
        "checklist": ["Review goal", "Publish one post", "Reply to 5 comments"],
        "repurposing_plan": generate_repurposing_plan(request_data),
        "brand_voice": generate_brand_voice(request_data),
        "locked_sections": social_locked_sections(tier),
        "meta": {"openai_enabled": using_openai, "model": os.getenv("OPENAI_MODEL_SOCIAL", "gpt-4o-mini")},
    }

    if tier == "free":
        result["calendar"] = {"calendar_type": request_data.get("calendar_length", "7_day"), "days": []}
        result["scripts"] = []
        result["repurposing_plan"] = []
        result["brand_voice"] = {}
        result["posts"] = result["posts"][:3]
    elif tier == "pro" and result["calendar"]["calendar_type"] == "30_day":
        result["calendar"] = {"calendar_type": "14_day", "days": _mock_days(14)}
        result["scripts"] = []

    return result
