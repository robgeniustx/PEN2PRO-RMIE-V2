class MainBuilderAgent:
    name = "Main Builder Agent"
    tier_required = "founders"

    ROUTING_RULES = {
        "blueprint": ["idea", "roadmap", "business plan", "launch plan", "startup", "start a business"],
        "brand": ["brand", "name", "tagline", "positioning", "identity"],
        "offer": ["offer", "pricing", "package", "monetize", "sell"],
        "website": ["website", "web page", "site", "landing page", "domain"],
        "seo": ["seo", "google", "ranking", "search", "keywords"],
        "content": ["content", "post", "caption", "copy", "blog"],
        "social_strategy": ["social", "tiktok", "instagram", "facebook", "marketing plan"],
        "short_video_script": ["video", "reel", "short", "script", "faceless"],
        "ad": ["ad", "ads", "paid", "campaign", "meta", "google ads"],
        "outreach": ["outreach", "dm", "cold", "message", "lead list"],
        "follow_up": ["follow up", "follow-up", "nurture", "reminder"],
        "lead_scoring": ["lead score", "lead scoring", "qualified lead"],
        "funding_readiness": ["funding", "loan", "credit line", "capital", "grant"],
        "credit_readiness": ["credit", "business credit", "tradeline", "score"],
        "compliance": ["compliance", "llc", "ein", "license", "legal", "permit"],
        "task": ["task", "todo", "to-do", "checklist", "next step"],
        "progress": ["progress", "completion", "track", "status"],
        "report": ["report", "summary", "analytics", "review"],
        "monetization": ["revenue", "income", "profit", "monetization", "scale"],
    }

    DEFAULT_SEQUENCE = [
        "intake",
        "blueprint",
        "brand",
        "offer",
        "website",
        "content",
        "outreach",
        "task",
    ]

    def validate_input(self, payload: dict) -> bool:
        if not isinstance(payload, dict):
            return False

        request = payload.get("request") or payload.get("prompt") or payload.get("task") or payload.get("business_idea")
        return isinstance(request, str) and len(request.strip()) > 0

    def _request_text(self, payload: dict) -> str:
        return (
            payload.get("request")
            or payload.get("prompt")
            or payload.get("task")
            or payload.get("business_idea")
            or ""
        ).strip()

    def _detect_agents(self, request: str):
        request_lower = request.lower()
        matched = []

        for agent_key, keywords in self.ROUTING_RULES.items():
            if any(keyword in request_lower for keyword in keywords):
                matched.append(agent_key)

        if not matched:
            matched = list(self.DEFAULT_SEQUENCE)

        if "intake" not in matched:
            matched.insert(0, "intake")

        if "task" not in matched:
            matched.append("task")

        seen = set()
        ordered = []
        for agent in matched:
            if agent not in seen:
                ordered.append(agent)
                seen.add(agent)

        return ordered

    def _build_work_order(self, request: str, recommended_agents, payload: dict):
        return {
            "title": "PEN2PRO Main Builder Work Order",
            "request": request,
            "tier": payload.get("tier", "free"),
            "priority": "high" if payload.get("tier") in {"elite", "founders"} else "normal",
            "recommended_agents": recommended_agents,
            "execution_mode": "coordinated_agent_plan",
            "deliverables": [
                "Structured business roadmap",
                "Brand and offer direction",
                "Website or landing page direction",
                "Marketing and outreach actions",
                "Task list for next execution step",
            ],
            "safety_note": "Main Builder returns a structured work order first. Code changes should still be reviewed before applying.",
        }

    def run(self, payload: dict):
        request = self._request_text(payload)
        tier = payload.get("tier", "free")
        recommended_agents = self._detect_agents(request)

        return {
            "status": "ok",
            "agent_key": "main_builder",
            "agent_name": self.name,
            "tier": tier,
            "request": request,
            "recommended_agents": recommended_agents,
            "execution_order": recommended_agents,
            "work_order": self._build_work_order(request, recommended_agents, payload),
            "next_actions": [
                "Run the intake agent to normalize the request.",
                "Run the highest-priority specialist agents in execution_order.",
                "Combine outputs into one user-facing action plan.",
                "Ask for approval before applying production code changes.",
            ],
            "message": "Main Builder Agent coordinator is connected successfully.",
        }
