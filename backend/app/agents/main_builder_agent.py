class MainBuilderAgent:
    name = "Main Builder Agent"
    tier_required = "founders"

    def validate_input(self, payload: dict) -> bool:
        if not isinstance(payload, dict):
            return False

        request = payload.get("request") or payload.get("prompt") or payload.get("task")
        return isinstance(request, str) and len(request.strip()) > 0

    def run(self, payload: dict):
        request = payload.get("request") or payload.get("prompt") or payload.get("task")
        tier = payload.get("tier", "free")

        return {
            "status": "ok",
            "agent_key": "main_builder",
            "tier": tier,
            "request": request,
            "objective": "Route connected. Main Builder Agent is ready for deeper automation logic.",
            "next_actions": [
                "Inspect the requested frontend/backend issue.",
                "Identify affected files.",
                "Return a structured work order.",
                "Prepare safe patch steps for review.",
            ],
            "message": "Main Builder Agent placeholder is connected successfully."
        }
