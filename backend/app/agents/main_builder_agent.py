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

    MAX_EXECUTION_AGENTS = 8

    def validate_input(self, payload: dict) -> bool:
        if not isinstance(payload, dict):
            return False

        request = (
            payload.get("request")
            or payload.get("prompt")
            or payload.get("task")
            or payload.get("business_idea")
        )
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
            "safety_note": "Main Builder can run safe agents, but production code changes should still be reviewed before applying.",
        }

    def _build_agent_payload(self, payload: dict, request: str):
        return {
            **payload,
            "request": request,
            "business_idea": payload.get("business_idea") or request,
            "idea": payload.get("idea") or payload.get("business_idea") or request,
            "goal": payload.get("goal") or "launch and get first paying customers",
            "audience": payload.get("audience") or "target customers",
            "industry": payload.get("industry") or "general business",
            "tier": payload.get("tier", "free"),
            "admin_test": payload.get("admin_test", False),
        }

    def _execute_agents(self, recommended_agents, payload: dict, request: str):
        from app.agents.registry import get_agent

        execution_results = {}
        agent_payload = self._build_agent_payload(payload, request)

        for agent_key in recommended_agents[: self.MAX_EXECUTION_AGENTS]:
            if agent_key == "main_builder":
                continue

            agent = get_agent(agent_key)

            if not agent:
                execution_results[agent_key] = {
                    "status": "skipped",
                    "reason": "Agent not registered",
                }
                continue

            try:
                if not agent.validate_input(agent_payload):
                    execution_results[agent_key] = {
                        "status": "skipped",
                        "reason": "Agent validation failed",
                    }
                    continue

                execution_results[agent_key] = {
                    "status": "ok",
                    "agent_name": getattr(agent, "name", agent_key),
                    "result": agent.run(agent_payload),
                }
            except Exception as exc:
                execution_results[agent_key] = {
                    "status": "error",
                    "error": str(exc),
                }

        return execution_results

    def _summarize_execution(self, execution_results):
        completed = [
            key for key, value in execution_results.items()
            if value.get("status") == "ok"
        ]

        skipped = [
            key for key, value in execution_results.items()
            if value.get("status") == "skipped"
        ]

        errors = [
            key for key, value in execution_results.items()
            if value.get("status") == "error"
        ]

        return {
            "completed_agents": completed,
            "skipped_agents": skipped,
            "error_agents": errors,
            "completed_count": len(completed),
            "skipped_count": len(skipped),
            "error_count": len(errors),
        }

    def _build_combined_launch_plan(self, request: str, execution_results: dict):
        plan = {
            "title": "PEN2PRO Combined Launch Plan",
            "request": request,
            "summary": "Main Builder combined the available agent outputs into one launch-ready execution plan.",
            "sections": [],
            "next_steps": [],
        }

        if not execution_results:
            plan["sections"].append({
                "title": "Recommended Plan",
                "items": [
                    "Clarify the idea.",
                    "Build the starter offer.",
                    "Create the first landing page.",
                    "Start outreach.",
                    "Track progress in the dashboard.",
                ],
            })
            return plan

        section_map = {
            "intake": "Intake Summary",
            "blueprint": "Business Blueprint",
            "brand": "Brand Direction",
            "offer": "Offer Strategy",
            "website": "Website Strategy",
            "seo": "SEO Direction",
            "content": "Content Plan",
            "social_strategy": "Social Media Strategy",
            "short_video_script": "Short Video Scripts",
            "ad": "Ad Angles",
            "outreach": "Outreach Plan",
            "funding_readiness": "Funding Readiness",
            "credit_readiness": "Credit Readiness",
            "compliance": "Compliance Checklist",
            "task": "Execution Tasks",
            "progress": "Progress Tracking",
            "report": "Report Summary",
            "monetization": "Monetization Strategy",
        }

        for agent_key, wrapper in execution_results.items():
            if wrapper.get("status") != "ok":
                continue

            result = wrapper.get("result", {})
            title = section_map.get(agent_key, agent_key.replace("_", " ").title())

            plan["sections"].append({
                "agent": agent_key,
                "title": title,
                "data": result,
            })

        plan["next_steps"] = [
            "Review the blueprint and offer direction.",
            "Choose the first offer to launch.",
            "Build or refine the landing page.",
            "Start outreach to the first 25 prospects.",
            "Track completed steps inside the dashboard.",
        ]

        return plan

    def run(self, payload: dict):
        request = self._request_text(payload)
        tier = payload.get("tier", "free")
        recommended_agents = self._detect_agents(request)
        should_execute = payload.get("execute", True) is True

        execution_results = {}

        if should_execute:
            execution_results = self._execute_agents(recommended_agents, payload, request)

        return {
            "status": "ok",
            "agent_key": "main_builder",
            "agent_name": self.name,
            "tier": tier,
            "request": request,
            "recommended_agents": recommended_agents,
            "execution_order": recommended_agents,
            "work_order": self._build_work_order(request, recommended_agents, payload),
            "execution_enabled": should_execute,
            "execution_summary": self._summarize_execution(execution_results) if should_execute else None,
            "execution_results": execution_results,
            "combined_launch_plan": self._build_combined_launch_plan(request, execution_results) if should_execute else None,
            "next_actions": [
                "Review the combined agent outputs.",
                "Use execution_results to build the user-facing launch plan.",
                "Turn high-value outputs into dashboard cards, roadmap tasks, and exportable reports.",
                "Ask for approval before applying production code changes.",
            ],
            "message": "Main Builder Agent execution chain is connected successfully.",
        }
