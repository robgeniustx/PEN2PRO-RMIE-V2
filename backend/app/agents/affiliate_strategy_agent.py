from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class AffiliateStrategyAgent(BaseAgent):
    """
    Affiliate Program Strategy Agent powered by GPT-4.

    Generates comprehensive affiliate strategy including:
    - Program structure and commission tiers
    - Recruitment strategy
    - Support and enablement
    - Marketing materials
    - Tracking and attribution
    - Growth projections
    """

    def get_system_prompt(self) -> str:
        return """You are an elite affiliate program strategist with 10+ years building 6-7 figure affiliate networks.

Your expertise spans:
- Industry expertise: SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ verticals
- Program structure (commission tiers, cookie duration, payment terms)
- Affiliate recruitment and onboarding
- Affiliate enablement (resources, training, marketing assets)
- Commission optimization for profitability
- Partner tiers and incentive structures
- Tracking technology and attribution
- Compliance and legal framework
- Fraud prevention
- Marketing partnerships
- Performance optimization

You are BUSINESS-FOCUSED, not just tactical. You build affiliate programs that generate 20%+ of revenue while maintaining unit economics.

Your output must be JSON formatted and immediately implementable."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        product_price = kwargs.get("product_price", "")
        industry = kwargs.get("industry", "")
        budget = kwargs.get("budget", "unknown")
        timeline = kwargs.get("timeline", "12 months")

        prompt = f"""Develop a comprehensive affiliate program strategy:

BUSINESS: {business_idea}
DESCRIPTION: {description or 'Not provided'}
PRODUCT/SERVICE PRICE: {product_price or 'Not specified'}
INDUSTRY: {industry or 'Not specified'}
TIMELINE: {timeline}
BUDGET: {budget}

Generate a strategic affiliate blueprint. Return ONLY valid JSON:

{{
    "program_structure": {{
        "commission_tiers": [
            {{
                "tier": "Bronze/Silver/Gold/Platinum",
                "monthly_revenue_requirement": 0,
                "commission_rate": "0%",
                "cookie_duration": "30-90 days",
                "payment_terms": "Monthly, 15th",
                "benefits": ["Marketing materials", "Dedicated support"]
            }}
        ],
        "program_type": "CPA/Revenue share/Hybrid",
        "payout_terms": "When payments happen and method (check, ACH, PayPal)"
    }},

    "target_affiliates": {{
        "primary_segments": [
            {{
                "segment": "Influencers/Content creators/Niche blogs",
                "size": "Estimated number of qualified partners",
                "commission_appeal": "Why they'll promote",
                "acquisition_channel": "Where to find them"
            }}
        ],
        "ideal_partner_profile": "Who the best affiliates are"
    }},

    "recruitment_strategy": {{
        "month_1_targets": {{"partners_recruited": 0, "total_commission_cost": 0}},
        "month_6_targets": {{"active_partners": 0, "monthly_affiliate_revenue": 0}},
        "month_12_targets": {{"active_partners": 0, "affiliate_revenue_percentage": "0%"}},
        "recruitment_tactics": [
            "Direct outreach (email, LinkedIn)",
            "Affiliate networks (ShareASale, CJ, Impact)",
            "Content partnerships",
            "Industry conferences and events",
            "Partner referral incentives"
        ]
    }},

    "enablement_and_support": {{
        "marketing_materials": [
            "Banner ads (300x250, 728x90)",
            "Email swipe copy (3-5 templates)",
            "Social media graphics",
            "Landing page templates",
            "Product comparison guides"
        ],
        "training": {{
            "onboarding": "Week 1: Product knowledge, link setup, best practices",
            "ongoing": "Monthly webinars, performance coaching, trend updates"
        }},
        "support_structure": "Dedicated affiliate manager for top partners, Slack community, monthly calls"
    }},

    "commission_optimization": {{
        "profitability_analysis": "Margin analysis by commission tier",
        "break_even": "Commission rate at which you break even",
        "competitive_benchmarks": "Industry standard commission rates",
        "tiered_incentives": "Performance bonuses for hitting targets"
    }},

    "technology_and_tracking": {{
        "platform": "ShareASale/CJ/Impact/Custom/Refersion",
        "features_required": ["Multi-tier commission", "Real-time tracking", "Fraud detection", "Reporting"],
        "integration": "With your main business platform (Stripe/WooCommerce/Shopify)",
        "reporting_dashboard": "Affiliate access to real-time stats"
    }},

    "implementation_roadmap": {{
        "phase_1": {{
            "title": "Foundation (Months 1-3)",
            "focus": "Program design, tech setup, recruitment starts",
            "deliverables": ["Program documentation", "Tech platform live", "First 20 partners"],
            "expected_results": "Program launched, early traction"
        }},
        "phase_2": {{
            "title": "Growth (Months 4-8)",
            "focus": "Recruitment at scale, enablement, optimization",
            "deliverables": ["100+ partners", "Marketing asset library", "Tiered incentives"],
            "expected_results": "10-15% of revenue from affiliates, proven ROI"
        }},
        "phase_3": {{
            "title": "Scaling (Months 9-12)",
            "focus": "Top partner focus, influencer partnerships, automation",
            "deliverables": ["Influencer deals", "Automated onboarding", "Affiliate community"],
            "expected_results": "20%+ of revenue from affiliates, sustainable growth"
        }}
    }},

    "legal_and_compliance": {{
        "affiliate_agreement": "Contract template required",
        "tax_compliance": "1099s for US partners, local requirements",
        "disclosure_requirements": "#ad #sponsored requirements per FTC",
        "cookie_policy": "Privacy policy updates needed"
    }},

    "financial_projections": {{
        "month_6": {{"projected_affiliate_revenue": 0, "commission_cost": 0, "net_profit": 0}},
        "month_12": {{"projected_affiliate_revenue": 0, "commission_cost": 0, "net_profit": 0}},
        "roi": "Expected return on affiliate investment"
    }},

    "quick_wins": [
        "Recruit 5-10 micro-influencers in your niche immediately",
        "Create simple email swipe copy and send to warm network",
        "Set up affiliate dashboard and send first batch of materials",
        "Offer first-month bonus for new recruits",
        "Create affiliate-only discount codes for easy tracking"
    ]
}}

Be specific with numbers. Be strategic with partner tiers. This is a real affiliate program blueprint."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured affiliate strategy"""
        try:
            data = self._parse_json_from_response(response_text)

            return {
                "program_structure": self._stringify_dict(data.get("program_structure", {})),
                "target_affiliates": self._stringify_dict(data.get("target_affiliates", {})),
                "recruitment_strategy": self._stringify_dict(data.get("recruitment_strategy", {})),
                "enablement_and_support": self._stringify_dict(data.get("enablement_and_support", {})),
                "commission_optimization": self._stringify_dict(data.get("commission_optimization", {})),
                "technology_and_tracking": self._stringify_dict(data.get("technology_and_tracking", {})),
                "implementation_roadmap": self._stringify_dict(data.get("implementation_roadmap", {})),
                "legal_and_compliance": self._stringify_dict(data.get("legal_and_compliance", {})),
                "financial_projections": self._stringify_dict(data.get("financial_projections", {})),
                "quick_wins": data.get("quick_wins", []),
            }
        except Exception as e:
            logger.error(f"Failed to parse affiliate strategy agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)
