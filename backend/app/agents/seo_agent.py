from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class SEOAgent(BaseAgent):
    """
    SEO Strategy Agent powered by GPT-4.

    Generates comprehensive SEO strategy including:
    - Keyword research and targeting
    - Content calendar
    - Technical SEO recommendations
    - Link building strategy
    - Competitive analysis
    - Implementation roadmap
    """

    def get_system_prompt(self) -> str:
        return """You are an elite SEO strategist with 15+ years of experience ranking websites in competitive niches.

Your expertise spans:
- Keyword research and targeting (high-intent, long-tail, LSI)
- Industry expertise: SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ verticals
- Technical SEO (site speed, mobile, core web vitals, crawlability)
- On-page optimization (content structure, entity optimization)
- Link building strategy (DR/DA analysis, white-hat outreach)
- Content marketing and topical authority
- E-E-A-T signals (expertise, experience, authority, trustworthiness)
- Local SEO and international targeting
- Schema markup and rich snippets
- Analytics and tracking (GA4, GSC, rank tracking)
- Competitive analysis and market positioning

You are STRATEGIC, not tactical. You don't give generic "add keywords to your title" advice. You give specific keyword targets, estimated search volumes, competition analysis, and phased implementation strategies.

Your output must be JSON formatted and executable immediately."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        industry = kwargs.get("industry", "")
        target_keywords = kwargs.get("target_keywords", "")
        budget = kwargs.get("budget", "unknown")
        timeline = kwargs.get("timeline", "12 months")

        prompt = f"""Develop a comprehensive SEO strategy for this business:

BUSINESS: {business_idea}
DESCRIPTION: {description or 'Not provided'}
INDUSTRY: {industry or 'Not specified'}
TARGET KEYWORDS: {target_keywords or 'To be determined'}
TIMELINE: {timeline}
BUDGET: {budget}

Generate a strategic SEO blueprint. Return ONLY valid JSON:

{{
    "target_keywords": {{
        "high_intent": [
            {{"keyword": "...", "monthly_searches": 0, "difficulty": 0-100, "target_position": 1-3}},
            {{"keyword": "...", "monthly_searches": 0, "difficulty": 0-100, "target_position": 4-10}}
        ],
        "long_tail": [
            {{"keyword": "...", "monthly_searches": 0, "difficulty": 0-100}}
        ],
        "branded": [
            {{"keyword": "...", "intent": "navigational/informational"}}
        ]
    }},

    "content_strategy": {{
        "pillar_topics": [
            {{"topic": "...", "target_keyword": "...", "estimated_traffic": 0, "monthly_updates": 0}}
        ],
        "cluster_content": [
            {{"pillar": "...", "clusters": ["...", "..."], "total_pieces": 0}}
        ],
        "content_calendar": "Phase 1 (Months 1-4): Foundation. Months 5-8: Expansion. Months 9-12: Authority"
    }},

    "technical_seo": {{
        "priority_fixes": ["Core Web Vitals", "Mobile optimization", "Site speed (target: <2s)"],
        "implementation": "Week 1-2: Audit. Week 3-4: Core fixes. Week 5+: Advanced optimization",
        "tools_needed": ["Google PageSpeed Insights", "GTmetrix", "Screaming Frog", "Google Search Console"]
    }},

    "link_building": {{
        "target_authority": "DA 30+ for Month 12",
        "strategy": "White-hat outreach to industry publications, guest posting, resource pages, broken link building",
        "monthly_targets": {{"months_1_3": 5, "months_4_8": 8, "months_9_12": 10}},
        "prospects": ["Industry blogs", "News sites", "Resource directories", "Expert networks"]
    }},

    "competitive_analysis": {{
        "top_competitors": [
            {{"domain": "...", "estimated_traffic": 0, "backlinks": 0, "top_keywords": ["...", "..."]}}
        ],
        "gaps_and_opportunities": "Analysis of underserved keywords and content gaps"
    }},

    "implementation_roadmap": {{
        "phase_1": {{
            "title": "Foundation (Months 1-4)",
            "focus": "Technical SEO, keyword research, pillar content",
            "deliverables": ["Site audit", "Keyword targeting doc", "4 pillar pieces"],
            "expected_results": "Crawlability fixed, baseline established"
        }},
        "phase_2": {{
            "title": "Expansion (Months 5-8)",
            "focus": "Cluster content, link building starts",
            "deliverables": ["12 cluster articles", "20 backlinks", "Schema markup"],
            "expected_results": "Topical authority emerging, traffic +50%"
        }},
        "phase_3": {{
            "title": "Authority (Months 9-12)",
            "focus": "Advanced optimization, scaling",
            "deliverables": ["Advanced content", "40+ backlinks total", "Featured snippet strategy"],
            "expected_results": "Target keywords ranking, 100%+ traffic growth"
        }}
    }},

    "success_metrics": {{
        "month_3": {{"target_keywords_ranking": 5, "monthly_organic_traffic": 200, "indexed_pages": 50}},
        "month_6": {{"target_keywords_ranking": 15, "monthly_organic_traffic": 1000, "domain_authority": 20}},
        "month_12": {{"target_keywords_ranking": 30, "monthly_organic_traffic": 5000, "domain_authority": 30}}
    }},

    "resource_requirements": {{
        "tools": ["SEO platform (Ahrefs/SEMrush)", "Content management", "Analytics", "Rank tracking"],
        "team": ["SEO specialist", "Content writer", "Technical developer (part-time)"],
        "budget_breakdown": {{"tools": "$200-300/month", "content": "$2000-5000/month", "outreach": "$500-1000/month"}}
    }},

    "quick_wins": [
        "Identify and fix 404 errors",
        "Optimize site speed (images, caching)",
        "Fix mobile usability issues",
        "Add schema markup to key pages",
        "Improve internal linking structure"
    ]
}}

Be specific with numbers. Be strategic with timeline. No generic SEO advice."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured SEO strategy"""
        try:
            data = self._parse_json_from_response(response_text)

            return {
                "target_keywords": self._stringify_dict(data.get("target_keywords", {})),
                "content_strategy": self._stringify_dict(data.get("content_strategy", {})),
                "technical_seo": self._stringify_dict(data.get("technical_seo", {})),
                "link_building": self._stringify_dict(data.get("link_building", {})),
                "competitive_analysis": self._stringify_dict(data.get("competitive_analysis", {})),
                "implementation_roadmap": self._stringify_dict(data.get("implementation_roadmap", {})),
                "success_metrics": self._stringify_dict(data.get("success_metrics", {})),
                "resource_requirements": self._stringify_dict(data.get("resource_requirements", {})),
                "quick_wins": data.get("quick_wins", []),
            }
        except Exception as e:
            logger.error(f"Failed to parse SEO agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)
