from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class FinancialModelingAgent(BaseAgent):
    """
    Financial Modeling Agent powered by GPT-4.

    Generates comprehensive financial projections including:
    - 5-year revenue projections
    - Unit economics
    - Cost structure and burn rate
    - Break-even analysis
    - Funding requirements
    - Sensitivity analysis
    """

    def get_system_prompt(self) -> str:
        return """You are an elite financial modeler with 12+ years modeling startups and scaling companies.

Your expertise spans:
- Industry expertise: SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ verticals
- Revenue modeling and growth projections
- Unit economics and CAC/LTV
- Cost structure and operational expenses
- Cash flow forecasting and burn rate
- Break-even analysis and path to profitability
- Funding requirements and runway
- Sensitivity analysis and scenario planning
- Financial assumptions and validation
- P&L, balance sheet, and cash flow statements
- Valuation and investor metrics

You are CONSERVATIVE and DATA-DRIVEN. You don't create hockey stick projections. You build realistic models with clear assumptions.

Your output must be JSON formatted with clear, auditable assumptions."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        industry = kwargs.get("industry", "")
        revenue_model = kwargs.get("revenue_model", "")
        initial_investment = kwargs.get("initial_investment", "")
        timeline = kwargs.get("timeline", "5 years")

        prompt = f"""Build a comprehensive financial model:

BUSINESS: {business_idea}
DESCRIPTION: {description or 'Not provided'}
INDUSTRY: {industry or 'Not specified'}
REVENUE MODEL: {revenue_model or 'To be determined'}
INITIAL INVESTMENT: {initial_investment or 'Not specified'}
TIMELINE: {timeline}

Generate a realistic financial projection. Return ONLY valid JSON:

{{
    "assumptions": {{
        "revenue_model": "Subscription/Marketplace/SaaS/Service/Other",
        "average_transaction_value": "$X",
        "customer_acquisition_cost": "$X",
        "customer_lifetime_value": "$X",
        "churn_rate": "X% monthly",
        "gross_margin": "X%",
        "operating_margin_year_3": "X%",
        "tax_rate": "0%"
    }},

    "revenue_projections": {{
        "year_1": {{"customers": 0, "mrr": 0, "arr": 0}},
        "year_2": {{"customers": 0, "mrr": 0, "arr": 0}},
        "year_3": {{"customers": 0, "mrr": 0, "arr": 0}},
        "year_4": {{"customers": 0, "mrr": 0, "arr": 0}},
        "year_5": {{"customers": 0, "mrr": 0, "arr": 0}},
        "growth_rate": "100% YoY"
    }},

    "cost_structure": {{
        "year_1": {{
            "cogs": 0,
            "marketing_sales": 0,
            "operations": 0,
            "technology": 0,
            "team_salaries": 0,
            "total_expenses": 0
        }},
        "unit_economics": {{
            "cac": "$X",
            "ltv": "$X",
            "ltv_to_cac_ratio": "3:1",
            "payback_period": "X months"
        }}
    }},

    "cash_flow": {{
        "year_1": {{"revenue": 0, "expenses": 0, "cash_flow": 0, "cumulative": 0}},
        "year_2": {{"revenue": 0, "expenses": 0, "cash_flow": 0, "cumulative": 0}},
        "year_3": {{"revenue": 0, "expenses": 0, "cash_flow": 0, "cumulative": 0}}
    }},

    "profitability": {{
        "break_even_month": "Month X",
        "break_even_year": "Year X",
        "path_to_profitability": "How you get there (CAC reduction, margin expansion, etc.)",
        "year_3_net_margin": "X%",
        "year_5_net_margin": "X%"
    }},

    "funding_analysis": {{
        "initial_investment_needed": "$X",
        "burn_rate": "$X per month",
        "runway": "X months",
        "funding_requirements": {{
            "seed": "$X (solve for product-market fit)",
            "series_a": "$X (solve for growth)",
            "series_b": "$X (solve for market leadership)"
        }}
    }},

    "sensitivity_analysis": {{
        "if_customer_growth_slower": "-20% customer growth → Break-even delayed X months",
        "if_cac_higher": "+30% CAC → Payback period X months",
        "if_churn_higher": "+1% monthly churn → LTV reduced $X",
        "upside_scenario": "3x growth if hitting all targets"
    }},

    "key_metrics": {{
        "year_1": {{"arr": 0, "rr": "0%", "magic_number": 0}},
        "year_3": {{"arr": 0, "nrr": "100%", "rule_of_40": "40+ (growth + margin)"}},
        "year_5": {{"arr": 0, "implied_valuation": "$X at 5x ARR multiple"}}
    }},

    "investor_ready_summary": {{
        "total_addressable_market": "$X billion",
        "year_5_market_opportunity": "$X million",
        "implied_valuation": "$X at 5x ARR",
        "investment_thesis": "Why this business is valuable"
    }},

    "risk_factors": [
        "Market adoption slower than projected",
        "Competition intensifies",
        "CAC increases faster than LTV",
        "Churn higher than assumed"
    ]
}}

Be specific with numbers. Be conservative with assumptions. Show your work. This is investor-ready financial modeling."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured financial model"""
        try:
            data = self._parse_json_from_response(response_text)

            return {
                "assumptions": self._stringify_dict(data.get("assumptions", {})),
                "revenue_projections": self._stringify_dict(data.get("revenue_projections", {})),
                "cost_structure": self._stringify_dict(data.get("cost_structure", {})),
                "cash_flow": self._stringify_dict(data.get("cash_flow", {})),
                "profitability": self._stringify_dict(data.get("profitability", {})),
                "funding_analysis": self._stringify_dict(data.get("funding_analysis", {})),
                "sensitivity_analysis": self._stringify_dict(data.get("sensitivity_analysis", {})),
                "key_metrics": self._stringify_dict(data.get("key_metrics", {})),
                "investor_ready_summary": self._stringify_dict(data.get("investor_ready_summary", {})),
                "risk_factors": data.get("risk_factors", []),
            }
        except Exception as e:
            logger.error(f"Failed to parse financial modeling agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)
