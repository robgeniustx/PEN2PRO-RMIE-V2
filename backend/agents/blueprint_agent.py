from .base_agent import BaseAgent


class BlueprintAgent(BaseAgent):
    """Blueprint Agent - Generates 10-section comprehensive business plan."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate business plan."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert business strategist with 20+ years experience. Analyze this business and provide a comprehensive business plan.

{context}

Provide a detailed business plan with these 10 sections. Return as JSON with keys: executive_summary, market_analysis, target_audience, value_proposition, revenue_model, competitive_advantage, implementation_roadmap, resources_needed, risk_analysis, founder_coaching.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}


class SEOAgent(BaseAgent):
    """SEO Agent - Generates 8-section organic growth strategy."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate SEO strategy."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert SEO strategist with 15+ years experience. Create a complete SEO strategy for this business.

{context}

Provide an 8-section SEO strategy with: target_keywords, content_strategy, technical_seo, link_building, competitive_analysis, implementation_roadmap, success_metrics, quick_wins.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}


class EmailAgent(BaseAgent):
    """Email Agent - Generates 10-section email marketing strategy."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate email strategy."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert email marketing strategist. Create a complete email marketing strategy for this business.

{context}

Provide a 10-section email strategy with: audience_segmentation, list_building, email_sequences, automation_workflows, copywriting_framework, frequency_strategy, metrics_tracking, compliance, tools_recommendations, implementation_timeline.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}


class GTMAgent(BaseAgent):
    """GTM Agent - Generates 11-section go-to-market strategy."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate GTM strategy."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert go-to-market strategist. Create a detailed GTM strategy for this business launch.

{context}

Provide an 11-section GTM strategy with: positioning, target_market, distribution_channels, pricing_strategy, launch_timeline, marketing_budget, sales_process, partnerships, metrics_kpis, risk_mitigation, first_90_days.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}


class FinancialAgent(BaseAgent):
    """Financial Agent - Generates 10-section financial projections."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate financial model."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert financial analyst. Create a detailed financial model for this business.

{context}

Provide a 10-section financial model with: revenue_assumptions, cost_structure, unit_economics, cash_flow_projections, break_even_analysis, funding_requirements, use_of_funds, financial_ratios, scenario_analysis, key_assumptions.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}


class AffiliateAgent(BaseAgent):
    """Affiliate Agent - Generates 9-section affiliate program strategy."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate affiliate strategy."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert affiliate marketing strategist. Create a complete affiliate program strategy for this business.

{context}

Provide a 9-section affiliate strategy with: program_structure, commission_model, partner_recruitment, marketing_assets, tracking_technology, partner_support, profitability_analysis, platform_selection, growth_roadmap.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}


class SocialAgent(BaseAgent):
    """Social Agent - Generates 9-section social media strategy."""

    async def execute(self, blueprint: dict) -> dict:
        """Generate social media strategy."""
        context = self._build_blueprint_context(blueprint)

        prompt = f"""
You are an expert social media strategist. Create a complete social media strategy for this business.

{context}

Provide a 9-section social strategy with: platform_selection, audience_analysis, content_pillars, posting_schedule, engagement_strategy, growth_tactics, influencer_partnerships, analytics_framework, tools_stack.

RETURN ONLY VALID JSON, NO OTHER TEXT.
"""

        result = await self._call_gpt(prompt)
        return result if "error" not in result else {"error": result.get("error")}
