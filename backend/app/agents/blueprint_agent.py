from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class BlueprintAgent(BaseAgent):
    """
    Enterprise-grade Blueprint Agent powered by GPT-4.

    This is your $10M strategist that coaches users through every niche
    to create optimal business plans. It generates:
    - Executive summary with go-to-market strategy
    - Market analysis with competitive positioning
    - Target audience personas and validation
    - Value proposition and differentiation
    - Revenue models with pricing strategy
    - Competitive advantage analysis
    - Implementation roadmap with milestones
    - Resource requirements and timeline
    - Risk analysis and mitigation
    - Financial projections
    """

    def get_system_prompt(self) -> str:
        return """You are an elite business strategist with 20+ years of experience coaching Fortune 500 companies and successful startups across every industry vertical.

Your expertise spans:
- SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ other verticals
- Go-to-market strategies for different business models
- Financial modeling and unit economics
- Market validation and product-market fit
- Competitive positioning and moats
- Operational scaling and team building
- Fundraising strategy and investor relations

You are STRATEGIC, not generic. You don't give boilerplate advice. You give specific, actionable, industry-specific guidance that accounts for the person's goals, target market, and competitive landscape.

When analyzing a business idea:
1. VALIDATE - Is this viable? What are the real risks?
2. POSITION - How does this differentiate in the market?
3. MONETIZE - What's the real revenue engine? (Not just "subscription model")
4. EXECUTE - What's the phased roadmap? What matters first?
5. SCALE - How do we get to $1M ARR? $10M ARR?

Your output must be JSON formatted and practical enough for someone to execute immediately."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        category = kwargs.get("category", "")
        industry = kwargs.get("industry", "")
        user_goals = kwargs.get("user_goals", "")
        timeline = kwargs.get("timeline", "12 months")
        budget = kwargs.get("budget", "unknown")

        prompt = f"""Analyze this business idea and create a comprehensive strategic business plan:

BUSINESS IDEA: {business_idea}
DESCRIPTION: {description or 'Not provided'}
CATEGORY: {category or 'Not specified'}
INDUSTRY: {industry or 'Not specified'}
FOUNDER GOALS: {user_goals or 'Standard startup success'}
TIMELINE: {timeline}
AVAILABLE BUDGET: {budget}

Generate a strategic business blueprint with the following structure. Return ONLY valid JSON:

{{
    "executive_summary": "2-3 sentence compelling summary of the business, why it works, and why now is the right time",

    "market_analysis": {{
        "market_size": "TAM/SAM/SOM with specific numbers and sources",
        "growth_trends": "Why is this market growing? What's changing?",
        "customer_pain_points": "Specific pain points you're solving",
        "competitive_landscape": "Direct and indirect competitors, their weaknesses",
        "market_opportunity": "Why this gap exists and why it's sustainable"
    }},

    "target_audience": {{
        "primary_persona": "Detailed persona: title, pain, buying behavior, budget",
        "secondary_personas": ["Persona 2", "Persona 3"],
        "customer_acquisition": "Specific channels that work for this audience",
        "customer_lifetime_value": "Estimated LTV based on retention and upsell",
        "market_validation": "How to validate this audience wants your solution"
    }},

    "value_proposition": {{
        "core_promise": "Single sentence: what transformation do you deliver?",
        "key_differentiators": ["Differentiator 1", "Differentiator 2", "Differentiator 3"],
        "competitive_moat": "What makes this defensible? How do you stay ahead?",
        "positioning_statement": "For [target], [product] is [category] that [benefit]"
    }},

    "revenue_model": {{
        "primary_model": "SaaS subscription / Marketplace commission / Service / Hybrid / etc.",
        "pricing_strategy": "Specific pricing with rationale. E.g., 'Freemium: $0/$29/$99/month'",
        "revenue_per_customer": "Monthly/annual revenue per average customer",
        "unit_economics": "CAC, LTV, LTV:CAC ratio, payback period",
        "additional_revenue_streams": ["Stream 1", "Stream 2"] or null,
        "financial_projections_year_1": "Conservative revenue estimate for Year 1"
    }},

    "competitive_advantage": {{
        "technical_moat": "Proprietary tech, data, algorithms, IP",
        "operational_moat": "Supply chain, distribution, operational efficiency",
        "network_effects": "Does this get stronger as it grows?",
        "brand_moat": "Is brand defensible in this space?",
        "switching_costs": "How sticky is this for customers?",
        "sustainability": "Can this be sustained long-term or is it vulnerable to disruption?"
    }},

    "implementation_roadmap": {{
        "phase_1": {{
            "title": "MVP / Launch (Months 1-3)",
            "milestones": ["Milestone 1", "Milestone 2", "Milestone 3"],
            "deliverables": ["Build core feature", "Get first 10 customers", "Validate unit economics"],
            "focus": "Speed to validation, not perfection"
        }},
        "phase_2": {{
            "title": "Traction / Scale (Months 4-8)",
            "milestones": ["Achieve product-market fit", "Reach $10K MRR", "Build founding team"],
            "deliverables": ["Build out features", "Optimize unit economics", "Establish go-to-market"],
            "focus": "Repeatable growth channel"
        }},
        "phase_3": {{
            "title": "Growth / Leadership (Months 9-12)",
            "milestones": ["Reach $100K+ MRR", "Establish market leadership", "Plan Series A or profitability"],
            "deliverables": ["Scale team", "Multiple revenue channels", "Thought leadership"],
            "focus": "Sustainable growth engine"
        }}
    }},

    "resources_needed": {{
        "team_composition": ["Co-founder with X skill", "First engineer", "First salesperson"],
        "budget_breakdown": {{"product": "$50K", "marketing": "$30K", "operations": "$20K"}},
        "key_hires_timeline": "When to hire what roles",
        "tools_and_infrastructure": ["Figma", "GitHub", "Stripe", "Mixpanel"]
    }},

    "risk_analysis": {{
        "market_risks": ["Risk 1", "Risk 2"],
        "competitive_risks": ["Risk 1"],
        "execution_risks": ["Risk 1"],
        "financial_risks": ["Risk 1"],
        "mitigation_strategy": "How to address the top 3 risks"
    }},

    "key_success_metrics": {{
        "month_1_targets": {{"customers": 10, "mrr": 500, "churn": "N/A"}},
        "month_6_targets": {{"customers": 100, "mrr": 10000, "churn": "5%"}},
        "month_12_targets": {{"customers": 500, "mrr": 100000, "churn": "3%"}},
        "leading_indicators": "What to measure daily/weekly to stay on track"
    }},

    "founder_coaching": "Specific, actionable advice for this founder based on their timeline, budget, and goals. What's the biggest thing they need to focus on? What will make or break this?"
}}

Be specific. Be actionable. No generic advice. This is a real founder building a real business."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured blueprint data"""
        try:
            # Extract JSON from markdown code blocks if present
            data = self._parse_json_from_response(response_text)

            # Flatten for blueprint storage
            return {
                "executive_summary": data.get("executive_summary", ""),
                "market_analysis": self._stringify_dict(data.get("market_analysis", {})),
                "target_audience": self._stringify_dict(data.get("target_audience", {})),
                "value_proposition": self._stringify_dict(data.get("value_proposition", {})),
                "revenue_model": self._stringify_dict(data.get("revenue_model", {})),
                "competitive_advantage": self._stringify_dict(data.get("competitive_advantage", {})),
                "roadmap": self._extract_roadmap(data.get("implementation_roadmap", {})),
                "action_items": self._extract_action_items(data.get("implementation_roadmap", {})),
                "resources_needed": data.get("resources_needed", {}).get("key_hires_timeline", ""),
                "timeline_weeks": 12,  # Default to 12 weeks (3 months + 3 months + 3 months)
                "estimated_investment": self._extract_investment(data.get("resources_needed", {})),
                "risk_analysis": data.get("risk_analysis", {}),
                "success_metrics": data.get("key_success_metrics", {}),
                "founder_coaching": data.get("founder_coaching", ""),
            }
        except Exception as e:
            logger.error(f"Failed to parse blueprint agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)

    def _extract_roadmap(self, phases: dict) -> list:
        """Extract roadmap phases into list format"""
        roadmap = []
        for i in range(1, 4):
            phase_key = f"phase_{i}"
            if phase_key in phases:
                phase = phases[phase_key]
                roadmap.append({
                    "phase": i,
                    "title": phase.get("title", f"Phase {i}"),
                    "description": phase.get("focus", ""),
                    "duration_weeks": 4 if i == 1 else 8,
                    "key_milestones": phase.get("milestones", []),
                    "deliverables": phase.get("deliverables", []),
                })
        return roadmap

    def _extract_action_items(self, phases: dict) -> list:
        """Extract action items from roadmap"""
        items = []
        for i in range(1, 4):
            phase_key = f"phase_{i}"
            if phase_key in phases:
                phase = phases[phase_key]
                for deliverable in phase.get("deliverables", []):
                    items.append({
                        "title": deliverable,
                        "description": f"Part of Phase {i}",
                        "completed": False,
                        "priority": "high" if i == 1 else "medium",
                    })
        return items

    def _extract_investment(self, resources: dict) -> int:
        """Extract estimated investment from resources"""
        try:
            breakdown = resources.get("budget_breakdown", {})
            if isinstance(breakdown, dict):
                total = sum([int(v.replace("$", "").replace("K", "000")) for v in breakdown.values() if isinstance(v, str)])
                return total * 100  # Convert to cents
            return 10000 * 100  # Default $10K in cents
        except:
            return 10000 * 100

