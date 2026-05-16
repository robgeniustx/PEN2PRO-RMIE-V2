from __future__ import annotations
from app.permissions.tier_permissions import has_tier

SAFE_DRAFT_ACTIONS = {"generate copy", "create checklist", "draft follow-up", "draft post", "create report", "score lead", "suggest next action"}
APPROVAL_REQUIRED_ACTIONS = {"send email", "send sms", "send dm", "publish social post", "submit form", "create payment link", "export official document", "update live website", "submit credit dispute", "apply for funding"}
BLOCKED_ACTIONS = {"scrape leads without permission", "submit false information", "fake reviews/testimonials", "spam outreach", "bypass platform rules", "impersonate user without approval", "submit legal/credit/funding documents automatically"}

PRO_AGENTS = {"report"}
ELITE_AGENTS = {"blueprint", "social", "crm", "website", "affiliate", "credit", "funding"}

def can_run_agent(tier: str | None, agent_name: str) -> bool:
    a = (agent_name or "").lower()
    if has_tier("elite", tier):
        return a in PRO_AGENTS or a in ELITE_AGENTS
    if has_tier("pro", tier):
        return a in PRO_AGENTS
    return False

def classify_agent_action(action_type: str) -> str:
    a = (action_type or "").lower()
    if a in BLOCKED_ACTIONS: return "blocked"
    if a in APPROVAL_REQUIRED_ACTIONS: return "approval_required"
    return "safe_draft"

def requires_approval(action_type: str) -> bool:
    return classify_agent_action(action_type) == "approval_required"

def is_blocked_action(action_type: str) -> bool:
    return classify_agent_action(action_type) == "blocked"
