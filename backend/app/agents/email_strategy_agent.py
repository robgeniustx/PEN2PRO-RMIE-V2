from app.agents.base_agent import BaseAgent
import json
import logging

logger = logging.getLogger(__name__)

class EmailStrategyAgent(BaseAgent):
    """
    Email Marketing Strategy Agent powered by GPT-4.

    Generates comprehensive email strategy including:
    - List building strategy
    - Funnel design and sequences
    - Segmentation strategy
    - Email automation
    - Copy templates
    - Metrics and KPIs
    """

    def get_system_prompt(self) -> str:
        return """You are an elite email marketing strategist with 12+ years building 7-figure email lists.

Your expertise spans:
- Industry expertise: SaaS, E-commerce, Marketplace, Agency, Consulting, Manufacturing, Real Estate, Healthcare, Education, FinTech, Social Media Influencers, Creator Economy, and 100+ verticals
- List building and growth strategies
- Funnel design (awareness → consideration → decision)
- Email sequences and automation
- Segmentation and personalization
- Copy writing for email (subject lines, CTAs)
- A/B testing and optimization
- Deliverability and list health
- Email compliance (CAN-SPAM, GDPR)
- Analytics and KPI tracking
- Revenue attribution

You are DATA-DRIVEN and CONVERSION-FOCUSED. Email is one of the highest-ROI channels when done right (40:1 ROI).

Your output must be JSON formatted and immediately actionable."""

    def get_user_prompt(self, **kwargs) -> str:
        business_idea = kwargs.get("business_idea", "")
        description = kwargs.get("description", "")
        industry = kwargs.get("industry", "")
        target_audience = kwargs.get("target_audience", "")
        budget = kwargs.get("budget", "unknown")
        timeline = kwargs.get("timeline", "12 months")

        prompt = f"""Develop a comprehensive email marketing strategy:

BUSINESS: {business_idea}
DESCRIPTION: {description or 'Not provided'}
INDUSTRY: {industry or 'Not specified'}
TARGET AUDIENCE: {target_audience or 'To be determined'}
TIMELINE: {timeline}
BUDGET: {budget}

Generate a strategic email blueprint. Return ONLY valid JSON:

{{
    "list_building": {{
        "lead_magnets": [
            {{
                "name": "Lead magnet type",
                "format": "PDF/checklist/template/course",
                "value_proposition": "Why it's irresistible",
                "conversion_rate_estimate": "0%",
                "cost_per_lead": "$X"
            }}
        ],
        "traffic_sources": ["Website", "Social media", "Paid ads", "Content marketing", "Partnerships"],
        "growth_targets": {{"month_3": 0, "month_6": 0, "month_12": 0}}
    }},

    "funnel_architecture": {{
        "welcome_sequence": {{
            "emails": 5,
            "duration": "7 days",
            "goal": "Build relationship, deliver lead magnet, introduce business"
        }},
        "nurture_sequence": {{
            "emails": 12,
            "duration": "30 days",
            "goal": "Provide value, build trust, move to sales"
        }},
        "sales_sequence": {{
            "emails": 8,
            "duration": "21 days",
            "goal": "Present offer, handle objections, convert"
        }}
    }},

    "segmentation_strategy": {{
        "segments": [
            {{"name": "Segment name", "size_percent": 0, "messaging": "How to speak to them", "offers": "What to promote"}}
        ],
        "behavioral_triggers": ["Cart abandonment", "Engaged subscriber", "Inactive subscriber"],
        "dynamic_content": "Personalization by segment or behavior"
    }},

    "email_sequences": {{
        "welcome_series": [
            {{"email": 1, "subject": "...", "goal": "...", "cta": "..."}},
            {{"email": 2, "subject": "...", "goal": "...", "cta": "..."}}
        ],
        "recurring_sends": "Weekly newsletter, bi-weekly tips, monthly promotion"
    }},

    "automation": {{
        "workflows": [
            {{"trigger": "Joined list/Clicked link/Bought product", "emails": 5, "duration": "30 days"}}
        ],
        "tools": "Mailchimp/ConvertKit/ActiveCampaign/Klaviyo",
        "tracking": "Pixel tracking, UTM parameters, revenue attribution"
    }},

    "copy_templates": {{
        "subject_line_formulas": [
            "Curiosity: Did you know...?",
            "Benefit: How to...?",
            "Urgency: Only 48 hours...",
            "Personal: [Name], this is for you"
        ],
        "cta_templates": ["Click here to...", "Join...", "Claim your...", "Get instant access..."],
        "storytelling_structure": "Problem → Agitation → Solution → CTA"
    }},

    "testing_and_optimization": {{
        "a_b_tests": ["Subject lines", "Send times", "CTA copy", "Email length"],
        "kpis": {{"open_rate": "20-40%", "click_rate": "2-5%", "conversion_rate": "1-3%"}},
        "optimization_cycle": "Weekly review, monthly strategy adjustment"
    }},

    "implementation_roadmap": {{
        "phase_1": {{
            "title": "Foundation (Months 1-3)",
            "focus": "Platform setup, list building, welcome sequence",
            "deliverables": ["Email platform live", "1000 subscribers", "Welcome sequence live"],
            "expected_results": "List growing, engagement data flowing"
        }},
        "phase_2": {{
            "title": "Growth (Months 4-8)",
            "focus": "List scaling, sales sequences, automation",
            "deliverables": ["5000 subscribers", "Sales sequences live", "3 automations"],
            "expected_results": "Revenue from email, 20%+ ROI"
        }},
        "phase_3": {{
            "title": "Scaling (Months 9-12)",
            "focus": "Optimization, segmentation, advanced automation",
            "deliverables": ["15000+ subscribers", "Advanced segmentation", "40:1 ROI achieved"],
            "expected_results": "Email as 30%+ of revenue"
        }}
    }},

    "financial_projections": {{
        "month_6": {{"subscribers": 0, "monthly_email_revenue": 0}},
        "month_12": {{"subscribers": 0, "monthly_email_revenue": 0, "roi": "40:1"}}
    }},

    "quick_wins": [
        "Create one lead magnet and email capture form today",
        "Write 5 welcome emails and set to send",
        "Add email signup to all website pages",
        "Create email signature with subscribe link",
        "Do first A/B test on subject lines this week"
    ]
}}

Be specific with sequence details. Be strategic with segmentation. This is a real email strategy."""

        return prompt

    def parse_response(self, response_text: str) -> dict:
        """Parse GPT-4 response into structured email strategy"""
        try:
            data = self._parse_json_from_response(response_text)

            return {
                "list_building": self._stringify_dict(data.get("list_building", {})),
                "funnel_architecture": self._stringify_dict(data.get("funnel_architecture", {})),
                "segmentation_strategy": self._stringify_dict(data.get("segmentation_strategy", {})),
                "email_sequences": self._stringify_dict(data.get("email_sequences", {})),
                "automation": self._stringify_dict(data.get("automation", {})),
                "copy_templates": self._stringify_dict(data.get("copy_templates", {})),
                "testing_and_optimization": self._stringify_dict(data.get("testing_and_optimization", {})),
                "implementation_roadmap": self._stringify_dict(data.get("implementation_roadmap", {})),
                "financial_projections": self._stringify_dict(data.get("financial_projections", {})),
                "quick_wins": data.get("quick_wins", []),
            }
        except Exception as e:
            logger.error(f"Failed to parse email strategy agent response: {e}")
            raise

    def _stringify_dict(self, d: dict) -> str:
        """Convert dict to pretty JSON string"""
        try:
            return json.dumps(d, indent=2)
        except:
            return str(d)
