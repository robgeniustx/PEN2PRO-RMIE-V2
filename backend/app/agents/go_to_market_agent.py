from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class GoToMarketAgent(BaseAgent):
    """
    Go-to-Market (GTM) Strategy Agent powered by GPT-4.

    Generates comprehensive GTM strategy including:
    - Market positioning
    - Channel strategy
    - Sales approach
    - Marketing tactics
    - Launch roadmap
    - Success metrics
    """

    def get_system_prompt(self) -> str:
        return """You are an elite go-to-market strategist with 15+ years launching and scaling products across industries.

Your expertise spans:
- Industry expertise: SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ verticals
- Market positioning and differentiation
- Target market selection and TAM expansion
- Channel mix and optimization
- Sales model and process design
- Marketing strategy and messaging
- Competitive positioning
- Launch planning and execution
- Growth metrics and KPIs
- Product-market fit validation
- Revenue modeling

You are STRATEGIC AND PRAGMATIC. You build GTM strategies that work with limited budgets and tight timelines.

Your output must be JSON formatted and immediately executable."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        industry = kwargs.get("industry", "")
        target_market = kwargs.get("target_market", "")
        budget = kwargs.get("budget", "unknown")
        timeline = kwargs.get("timeline", "12 months")

        prompt = f"""Develop a comprehensive go-to-market strategy:

BUSINESS: {business_idea}
DESCRIPTION: {description or 'Not provided'}
INDUSTRY: {industry or 'Not specified'}
TARGET MARKET: {target_market or 'To be determined'}
LAUNCH TIMELINE: {timeline}
BUDGET: {budget}

Generate a strategic GTM blueprint. Return ONLY valid JSON:

{{
    "market_positioning": {{
        "target_segment": "Who you serve",
        "problem_statement": "What pain point you solve",
        "positioning_statement": "For [target], [product] is [category] that [benefit]",
        "competitive_advantage": "Why you win",
        "messaging": "Core marketing message"
    }},

    "channel_strategy": {{
        "primary_channels": [
            {{
                "channel": "Direct sales/Content marketing/Partnerships/Paid ads/Product-led growth",
                "investment": "$X per month",
                "expected_cap": "X customers/month",
                "timeline": "When to launch"
            }}
        ],
        "channel_mix_rationale": "Why this mix for this market"
    }},

    "sales_strategy": {{
        "sales_model": "Self-serve/Sales-assisted/Enterprise sales",
        "sales_process": "Prospecting → Qualification → Demo → Close → Onboard",
        "sales_team": "Founder-led → Sales hire → Build sales org",
        "target_deal_size": "$X per customer",
        "sales_cycle": "X days from first touch to close"
    }},

    "marketing_strategy": {{
        "brand_positioning": "How you want to be perceived",
        "content_strategy": "What content to create and where",
        "messaging_pillars": ["Pillar 1", "Pillar 2", "Pillar 3"],
        "demand_generation": "How to create demand",
        "customer_acquisition_cost": "$X CAC target"
    }},

    "launch_plan": {{
        "phase_1": {{
            "title": "Soft Launch (Week 1-2)",
            "focus": "Beta with early adopters",
            "activities": ["Outreach to 100 targets", "Collect feedback", "Polish product"],
            "success_metrics": "5-10 beta customers"
        }},
        "phase_2": {{
            "title": "Public Launch (Week 3-4)",
            "focus": "Go public, media outreach",
            "activities": ["Press release", "Social announcement", "Launch on PH/Beta List"],
            "success_metrics": "100+ signups, 10+ customers"
        }},
        "phase_3": {{
            "title": "Growth (Month 2-3)",
            "focus": "Scale what works",
            "activities": ["Double down on working channels", "Optimize funnel", "Expand partnerships"],
            "success_metrics": "X customers, $X MRR"
        }}
    }},

    "partnership_strategy": {{
        "strategic_partners": ["Who to partner with", "Why it helps both"],
        "integration_partners": ["Complementary products to integrate with"],
        "affiliate_partners": ["How to build affiliate channel"],
        "timeline": "When to approach partners"
    }},

    "customer_acquisition": {{
        "month_1": {{"customers": 0, "mrr": 0, "cac": "$X"}},
        "month_3": {{"customers": 0, "mrr": 0, "cac": "$X"}},
        "month_6": {{"customers": 0, "mrr": 0, "cac": "$X", "ltv": "$X"}}
    }},

    "success_metrics": {{
        "launch_metrics": {{"signups": 0, "paid_customers": 0, "revenue": 0}},
        "growth_metrics": {{"mrr_growth": "0% month/month", "churn": "0%", "ltv_cac_ratio": "3:1"}},
        "leading_indicators": ["Demo requests", "Email opens", "Content engagement"]
    }},

    "budget_allocation": {{
        "paid_marketing": "X%",
        "content_marketing": "X%",
        "sales": "X%",
        "product": "X%",
        "operations": "X%"
    }},

    "risks_and_mitigations": {{
        "market_risk": "Is there demand? → Mitigate by validating early with customers",
        "execution_risk": "Can we execute? → Mitigate by starting small, iterating",
        "competition_risk": "Who competes? → Mitigate by owning specific niche"
    }},

    "quick_wins": [
        "Identify 50 target customers and email 5 today",
        "Create one-page positioning statement",
        "Find 3 potential partners and research contact info",
        "Write first case study or customer story",
        "Record demo video for website"
    ]
}}

Be specific with timelines. Be realistic with numbers. This is a real GTM strategy."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured GTM strategy"""
        try:
            data = self._parse_json_from_response(response_text)

            return {
                "market_positioning": self._stringify_dict(data.get("market_positioning", {})),
                "channel_strategy": self._stringify_dict(data.get("channel_strategy", {})),
                "sales_strategy": self._stringify_dict(data.get("sales_strategy", {})),
                "marketing_strategy": self._stringify_dict(data.get("marketing_strategy", {})),
                "launch_plan": self._stringify_dict(data.get("launch_plan", {})),
                "partnership_strategy": self._stringify_dict(data.get("partnership_strategy", {})),
                "customer_acquisition": self._stringify_dict(data.get("customer_acquisition", {})),
                "success_metrics": self._stringify_dict(data.get("success_metrics", {})),
                "budget_allocation": self._stringify_dict(data.get("budget_allocation", {})),
                "risks_and_mitigations": self._stringify_dict(data.get("risks_and_mitigations", {})),
                "quick_wins": data.get("quick_wins", []),
            }
        except Exception as e:
            logger.error(f"Failed to parse GTM agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)
