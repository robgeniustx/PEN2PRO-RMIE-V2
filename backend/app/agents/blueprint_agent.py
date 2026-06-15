from app.agents.base_agent import BaseAgent, call_ai


class BlueprintAgent(BaseAgent):
    name = "Blueprint Agent"
    description = "Generates a full PEN2PRO business blueprint from a user idea."
    tier_required = "free"

    def validate_input(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("prompt")
        return isinstance(idea, str) and len(idea.strip()) > 0

    def run(self, payload):
        idea = payload.get("idea") or payload.get("business_idea") or payload.get("request") or payload.get("prompt")
        industry = payload.get("industry", "general business")
        audience = payload.get("audience", "first-time entrepreneurs")
        budget = payload.get("budget", "unknown")
        tier = payload.get("tier", "free")

        system = (
            "You are PEN2PRO, an elite AI business development strategist. "
            "You give direct, practical, actionable business blueprints — not generic advice. "
            "Your output is structured, specific to the idea, and built for someone who is ready to execute. "
            "Never use filler. Every sentence must add value. Write like a business mentor who has built real companies."
        )

        user = f"""
Create a complete business blueprint for the following:

Business Idea: {idea}
Industry: {industry}
Target Audience: {audience}
Starting Budget: {budget}
Subscription Tier: {tier}

Return a JSON object with these exact keys:
{{
  "business_snapshot": "2-3 sentence description of the business concept and its market opportunity",
  "target_customer": "Specific description of the ideal customer — demographics, pain points, where to find them",
  "value_proposition": "One sentence that explains why customers choose this business over alternatives",
  "starter_offer": "The exact first offer to sell — what it includes, what it costs, why it works",
  "revenue_model": "How money is made — pricing tiers, recurring vs one-time, upsell path",
  "startup_costs": {{
    "low": "dollar amount",
    "realistic": "dollar amount",
    "stretch": "dollar amount"
  }},
  "first_7_days": ["Day 1 action", "Day 2 action", "Day 3 action", "Day 4 action", "Day 5 action", "Day 6 action", "Day 7 action"],
  "first_30_days": ["Week 1 goal", "Week 2 goal", "Week 3 goal", "Week 4 goal"],
  "first_90_days": "Paragraph describing 90-day growth milestones and revenue targets",
  "business_names": ["Name 1", "Name 2", "Name 3"],
  "sales_script": "A complete cold outreach script the owner can use today — phone or DM",
  "top_3_risks": ["Risk 1 and how to mitigate it", "Risk 2", "Risk 3"],
  "credit_and_funding": "What business credit steps to take in month 1-3 and what funding options exist",
  "legal_foundation": "LLC filing, EIN, licenses, and insurance steps specific to this business type",
  "marketing_channels": ["Channel 1 with specific tactic", "Channel 2", "Channel 3", "Channel 4"]
}}

Return ONLY valid JSON. No markdown. No explanation outside the JSON.
"""

        import json
        raw = call_ai(system, user, max_tokens=2000)
        try:
            # Strip any markdown fences if model adds them
            clean = raw.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
            sections = json.loads(clean)
        except Exception:
            sections = {"raw_output": raw, "parse_error": "AI returned non-JSON — raw output shown above"}

        return {
            "status": "ok",
            "agent_key": "blueprint",
            "business_idea": idea,
            "industry": industry,
            "audience": audience,
            "sections": sections,
        }
