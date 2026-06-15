from app.agents.base_agent import BaseAgent, call_ai
import json


class IntakeAgent(BaseAgent):
    name = "Intake Agent"
    description = "Analyzes user intake and produces structured business readiness data."
    tier_required = "free"

    def validate_input(self, payload):
        return isinstance(payload, dict) and bool(payload)

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request", "")
        industry = payload.get("industry", "")
        budget = payload.get("budget", "")
        experience = payload.get("experience_level", "")

        system = (
            "You are PEN2PRO's intake specialist. Analyze the user's business inputs and return "
            "a structured readiness assessment. Be direct and specific — no filler."
        )
        user = f"""
Analyze this business intake:
Idea: {idea}
Industry: {industry}
Budget: {budget}
Experience Level: {experience}

Return JSON:
{{
  "readiness_score": <integer 1-10>,
  "readiness_label": "Not Ready / Getting There / Ready to Launch",
  "strengths": ["strength 1", "strength 2"],
  "gaps": ["gap 1", "gap 2"],
  "immediate_actions": ["action 1", "action 2", "action 3"],
  "recommended_next_agent": "blueprint or offer or brand or compliance",
  "summary": "2-sentence assessment of where this person stands"
}}
Return ONLY valid JSON.
"""
        raw = call_ai(system, user, max_tokens=600)
        try:
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            result = json.loads(clean)
        except Exception:
            result = {"raw_output": raw}

        return {"status": "ok", "agent_key": "intake", "normalized": payload, "assessment": result}
