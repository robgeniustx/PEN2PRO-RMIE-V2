from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class SocialStrategyAgent(BaseAgent):
    """
    Social Media Strategy Agent powered by GPT-4.

    Generates comprehensive social media strategy including:
    - Platform selection and prioritization
    - Content calendar and posting strategy
    - Engagement tactics
    - Growth targets and metrics
    - Community management approach
    - Influencer/partnership strategy
    """

    def get_system_prompt(self) -> str:
        return """You are an elite social media strategist with 12+ years of experience building 7-figure brands on social platforms.

Your expertise spans:
- Industry expertise: SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ verticals
- Platform strategy (TikTok, Instagram, LinkedIn, Twitter/X, YouTube, Pinterest)
- Content creation and posting cadence
- Algorithm optimization for each platform
- Community management and engagement
- Growth hacking and viral mechanics
- Influencer partnerships and collaborations
- Social commerce and conversion
- Analytics and KPI tracking
- Personal branding and thought leadership
- Crisis management on social

You are DATA-DRIVEN, not trendy. You don't chase viral moments. You build sustainable growth engines with repeatable processes.

Your output must be JSON formatted and actionable for immediate execution."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        industry = kwargs.get("industry", "")
        target_audience = kwargs.get("target_audience", "")
        budget = kwargs.get("budget", "unknown")
        timeline = kwargs.get("timeline", "12 months")

        prompt = f"""Develop a comprehensive social media strategy for this business:

BUSINESS: {business_idea}
DESCRIPTION: {description or 'Not provided'}
INDUSTRY: {industry or 'Not specified'}
TARGET AUDIENCE: {target_audience or 'To be determined'}
TIMELINE: {timeline}
BUDGET: {budget}

Generate a strategic social media blueprint. Return ONLY valid JSON:

{{
    "platform_strategy": {{
        "primary_platforms": [
            {{
                "platform": "TikTok/Instagram/LinkedIn/YouTube/Twitter/Pinterest",
                "priority": "primary/secondary",
                "reason": "Why this platform for this audience",
                "posting_frequency": "X posts per week",
                "best_times": "Time zones and specific times",
                "content_focus": "Type of content that performs best"
            }}
        ],
        "platform_rationale": "Why this specific mix for target audience"
    }},

    "content_strategy": {{
        "content_pillars": [
            {{
                "pillar": "Education/Entertainment/Inspiration/Community",
                "percentage": 0,
                "examples": ["...", "..."]
            }}
        ],
        "content_formats": ["Reels/TikToks", "Carousel posts", "Stories", "Livestreams", "Threads/Long-form"],
        "posting_calendar": "Specific content themes for each week/month"
    }},

    "growth_strategy": {{
        "month_3_targets": {{"followers": 0, "engagement_rate": "0%", "impressions_per_post": 0}},
        "month_6_targets": {{"followers": 0, "engagement_rate": "0%", "monthly_reach": 0}},
        "month_12_targets": {{"followers": 0, "monthly_organic_reach": 0, "conversion_rate": "0%"}},
        "growth_tactics": [
            "Hashtag strategy and research",
            "Collaboration and partnerships",
            "Cross-platform promotion",
            "Community engagement playbook",
            "Viral mechanics and hooks"
        ]
    }},

    "engagement_framework": {{
        "response_strategy": "How to respond to comments/DMs/mentions (timing, tone, templates)",
        "community_management": "Daily rituals for community building",
        "loyalty_program": "How to convert followers to customers/advocates",
        "crisis_protocol": "How to handle negative comments or PR issues"
    }},

    "monetization": {{
        "direct_monetization": "Ads, sponsorships, affiliates",
        "indirect_monetization": "Funnel to products/services",
        "partnership_strategy": "Brands/influencers to partner with",
        "timeline": "When monetization starts generating revenue"
    }},

    "implementation_roadmap": {{
        "phase_1": {{
            "title": "Foundation (Months 1-4)",
            "focus": "Profile optimization, content pillars, posting cadence",
            "deliverables": ["Optimized profiles", "20-30 content pieces", "Brand kit/templates"],
            "expected_results": "First 500-1000 followers, audience understanding"
        }},
        "phase_2": {{
            "title": "Growth (Months 5-8)",
            "focus": "Viral mechanics, engagement, partnerships",
            "deliverables": ["Collab content", "Engagement playbook", "Analytics dashboard"],
            "expected_results": "5x follower growth, 3x+ engagement rate"
        }},
        "phase_3": {{
            "title": "Monetization (Months 9-12)",
            "focus": "Conversion, partnerships, scaling",
            "deliverables": ["Sales funnel", "Partner deals", "Influencer network"],
            "expected_results": "Profitable funnel, 10x+ followers, brand recognition"
        }}
    }},

    "tools_and_resources": {{
        "content_creation": ["Canva", "Adobe Creative Cloud", "CapCut", "Adobe Premiere"],
        "scheduling": ["Buffer", "Later", "Hootsuite", "native platform schedulers"],
        "analytics": ["Native analytics", "Sprout Social", "Hootsuite insights"],
        "team": ["Content creator", "Community manager", "Designer", "Analytics specialist"]
    }},

    "success_metrics": {{
        "leading_indicators": ["Posting consistency", "Engagement rate", "Comment depth"],
        "lagging_indicators": ["Follower growth", "Monthly reach", "Conversion rate"],
        "reporting_frequency": "Weekly engagement report, monthly strategy review"
    }},

    "unique_positioning": "How to stand out in crowded social landscape"
}}

Be specific. Be data-driven. No vague social media advice. This is a real growth plan."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured social strategy"""
        try:
            data = self._parse_json_from_response(response_text)

            return {
                "platform_strategy": self._stringify_dict(data.get("platform_strategy", {})),
                "content_strategy": self._stringify_dict(data.get("content_strategy", {})),
                "growth_strategy": self._stringify_dict(data.get("growth_strategy", {})),
                "engagement_framework": self._stringify_dict(data.get("engagement_framework", {})),
                "monetization": self._stringify_dict(data.get("monetization", {})),
                "implementation_roadmap": self._stringify_dict(data.get("implementation_roadmap", {})),
                "tools_and_resources": self._stringify_dict(data.get("tools_and_resources", {})),
                "success_metrics": self._stringify_dict(data.get("success_metrics", {})),
                "unique_positioning": data.get("unique_positioning", ""),
            }
        except Exception as e:
            logger.error(f"Failed to parse social strategy agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)
