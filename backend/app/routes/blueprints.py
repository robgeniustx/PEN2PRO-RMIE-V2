import json
import os
import pathlib
from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Load the senior strategist system prompt
_PROMPT_PATH = pathlib.Path(__file__).parent.parent / "prompts" / "blueprint_prompt.md"
_SYSTEM_PROMPT = _PROMPT_PATH.read_text() if _PROMPT_PATH.exists() else "You are a senior business strategist."

# ─── Sample fallback roadmap (returned when no API key) ─────────────────────
_SAMPLE = {
    "is_sample": True,
    "business_idea": "General Business",
    "snapshot": {
        "names": ["LaunchPath Co.", "BuildRight Ventures", "ProStart Business"],
        "value_proposition": "A practical, profitable business built around your skills and market.",
        "target_customer": "Local businesses or consumers who need your core service and will pay for reliability.",
        "problem": "Customers can't find a dependable, professional provider at a fair price.",
        "revenue_model": "Service-based flat-rate pricing with recurring monthly retainer option.",
        "startup_low": "$800",
        "startup_realistic": "$2,500",
        "startup_stretch": "$6,000",
    },
    "offer_structure": {
        "core": "Your core service delivered professionally and on schedule",
        "tiers": [
            {"name": "Starter", "price": "$99–$199", "includes": "Basic service, 1 location"},
            {"name": "Standard", "price": "$299–$499", "includes": "Full service + follow-up"},
            {"name": "Premium", "price": "$599–$999", "includes": "Full service + recurring plan + priority"},
        ],
        "entry_price": "$99",
        "entry_why": "Low barrier gets first 5 clients fast. Upsell once they see results.",
    },
    "seven_days": [
        "Day 1: File your LLC at your state Secretary of State website. Cost: $50–$300. Download Wave (free invoicing).",
        "Day 2: Get your EIN free at IRS.gov. 5 minutes online. Print and save.",
        "Day 3: Open Chase Business Complete Checking — bring EIN, LLC docs, personal ID.",
        "Day 4: Create Google Business Profile at business.google.com. Add photos today.",
        "Day 5: Buy your domain on Namecheap ($12). Set up Google Workspace email ($6/mo).",
        "Day 6: Set your 3-tier pricing. Create a 1-page service menu using Canva.",
        "Day 7: Message 20 contacts. Offer $99 intro rate. Post on Facebook, Nextdoor, Instagram.",
    ],
    "thirty_day_plan": [
        "Week 1: Land first 2 paid jobs at intro rate. Post before/after content immediately.",
        "Week 2: Follow up on all Week 1 leads. Ask for referrals. Post 3x on social. Target: 4–5 jobs.",
        "Week 3: Request Google reviews. Apply for Uline net-30 vendor account (business credit step 1).",
        "Week 4: Run a Nextdoor ad ($50 budget). Revenue target: $1,500 by Day 30.",
    ],
    "ninety_day_plan": [
        "Month 1 ($0–$2,000): Validate offer, get 5 paying clients, collect 3 Google reviews.",
        "Month 2 ($2,000–$5,000): Systemize delivery, add a helper, get 10 testimonials.",
        "Month 3 ($5,000–$10,000): Hire first part-time employee, run paid ads ($200/mo), add upsell.",
    ],
    "sales_script": {
        "cold_dm": "Hey [Name] — I just launched [Business] in [City]. First 5 jobs are $99 (normally $199). Want to grab a spot this week?",
        "follow_up": "Hey — still have 2 intro spots open. Want to lock one in before they're gone?",
        "phone_opener": "Hey [Name], this is [Your Name] with [Business]. I have openings this week — can I get you a quick quote?",
        "objection": "I get it. Take 24 hours — but I only have 2 intro slots left at $99. What's holding you back?",
        "close": "Want me to pencil you in for [day] at [time]? Just need your address.",
    },
    "branding": [
        "Business name registered with state",
        "Google Business Profile created and verified",
        "Logo created on Canva (free tier)",
        "Business email set up (Google Workspace $6/mo)",
        "Instagram, Facebook, Nextdoor profiles claimed",
        "Domain purchased on Namecheap ($12/yr)",
    ],
    "entity_legal": [
        "1. File LLC — state Secretary of State — $50 (TX) to $500 (CA)",
        "2. Get EIN free at IRS.gov — 5 minutes",
        "3. Open business bank account — Chase Business Complete Checking",
        "4. Business address — UPS Store mailbox ~$30/mo if home-based",
        "5. General Liability Insurance — $400–$800/yr via nextinsurance.com or hiscox.com",
    ],
    "credit_funding": {
        "personal": [
            "Pull free report at AnnualCreditReport.com",
            "Need 650+ for most business funding",
            "Dispute errors at consumerfinance.gov/complaint",
            "Keep revolving balances below 30% utilization",
        ],
        "business": [
            "Step 1: Open business bank account (already done in legal section)",
            "Step 2: Apply for Uline net-30 — free, reports to D&B (uline.com)",
            "Step 3: Apply for Quill net-30 — free, reports to D&B (quill.com)",
            "Step 4: Apply for Grainger net-30 — free (grainger.com)",
            "Step 5: After 90 days, check D&B PAYDEX score at nav.com",
            "Step 6: Apply for Divvy or Brex business card",
            "Step 7: After 6–12 months, apply for SBA Microloan ($500–$50,000)",
        ],
    },
    "marketing": {
        "primary_platform": "Facebook Groups + Nextdoor (zero cost, high local reach)",
        "secondary_platform": "Instagram (before/after photos)",
        "post_frequency": "5x per week minimum for first 90 days",
        "content_pillars": [
            "Before/after results with location + price",
            "Educational tips for your target customer",
            "Behind-the-scenes of your daily work",
        ],
        "paid_ads": "Do NOT run ads until you have 3 paying clients and can describe your best customer precisely.",
    },
    "tool_stack": [
        {"tool": "Wave", "use": "Free invoicing + accounting", "cost": "$0"},
        {"tool": "Google Workspace", "use": "Business email + drive", "cost": "$6/mo"},
        {"tool": "Canva", "use": "Graphics + social content", "cost": "$0 (free tier)"},
        {"tool": "Google Voice", "use": "Business phone number", "cost": "$10/mo"},
        {"tool": "Calendly", "use": "Appointment scheduling", "cost": "$0 (free tier)"},
        {"tool": "HubSpot CRM", "use": "Client tracking + follow-ups", "cost": "$0"},
        {"tool": "Namecheap", "use": "Domain registration", "cost": "$12/yr"},
    ],
    "risks": [
        "Underpricing to get clients — sets wrong market expectation. Stick to your rates.",
        "Spending on equipment before validating demand — rent first, buy after you're booked.",
        "Mixing personal and business money — opens IRS risk and kills your credit path.",
        "Skipping liability insurance — one property damage claim without it ends the business.",
        "No follow-up system — 80% of sales require 5+ touchpoints. Most stop at 1.",
    ],
    "upgrade_note": "This roadmap gives you the foundation. Pro members get full outreach automation, financial projections, AI-refined marketing copy, and credit/funding resource matching. Elite members get done-with-you strategy sessions, vendor introductions, and launch support. Upgrade to Pro or Elite before the June 10 launch to lock in founding member pricing.",
}


class BlueprintRequest(BaseModel):
    business_idea: str
    category: Optional[str] = ""
    industry_id: Optional[str] = ""   # e.g. "pressure-washing", "hvac", "attorney-law-firm"
    target_customer: Optional[str] = ""
    budget: Optional[str] = ""
    timeline: Optional[str] = ""
    challenge: Optional[str] = ""
    name: Optional[str] = ""
    email: Optional[str] = ""
    referral: Optional[str] = ""
    city: Optional[str] = ""
    state: Optional[str] = ""


def _build_user_prompt(req: BlueprintRequest) -> str:
    # Pull in niche-specific guidance if an industry_id is provided
    niche_context = ""
    if req.industry_id:
        from app.data.niche_guides import get_niche_prompt_addition
        niche_addition = get_niche_prompt_addition(req.industry_id)
        if niche_addition:
            niche_context = f"\n\n--- INDUSTRY-SPECIFIC CONTEXT ---\n{niche_addition}\n--- END INDUSTRY CONTEXT ---\n"

    return f"""Generate a complete PEN2PRO business roadmap for the following:

Business Idea: {req.business_idea}
Category: {req.category or req.industry_id or "General Business"}
Target Customer: {req.target_customer or "Not specified"}
Location: {req.city or "Houston"}, {req.state or "TX"}
Starting Budget: {req.budget or "Under $1,000"}
Timeline Goal: {req.timeline or "90 days"}
Biggest Challenge: {req.challenge or "Not specified"}
{niche_context}

Respond with a JSON object matching this exact structure:
{{
  "snapshot": {{
    "names": ["Name1", "Name2", "Name3"],
    "value_proposition": "...",
    "target_customer": "...",
    "problem": "...",
    "revenue_model": "...",
    "startup_low": "$X",
    "startup_realistic": "$X",
    "startup_stretch": "$X"
  }},
  "offer_structure": {{
    "core": "...",
    "tiers": [
      {{"name": "...", "price": "$X", "includes": "..."}},
      {{"name": "...", "price": "$X", "includes": "..."}},
      {{"name": "...", "price": "$X", "includes": "..."}}
    ],
    "entry_price": "$X",
    "entry_why": "..."
  }},
  "seven_days": ["Day 1: ...", "Day 2: ...", ..., "Day 7: ..."],
  "thirty_day_plan": ["Week 1: ...", "Week 2: ...", "Week 3: ...", "Week 4: ..."],
  "ninety_day_plan": ["Month 1 ($X–$X): ...", "Month 2 ($X–$X): ...", "Month 3 ($X–$X): ..."],
  "sales_script": {{
    "cold_dm": "...",
    "follow_up": "...",
    "phone_opener": "...",
    "objection": "...",
    "close": "..."
  }},
  "branding": ["item1", "item2", ...],
  "entity_legal": ["1. ...", "2. ...", "3. ...", "4. ...", "5. ..."],
  "credit_funding": {{
    "personal": ["item1", "item2", "item3", "item4"],
    "business": ["Step 1: ...", "Step 2: ...", ..., "Step 7: ..."]
  }},
  "marketing": {{
    "primary_platform": "...",
    "secondary_platform": "...",
    "post_frequency": "...",
    "content_pillars": ["...", "...", "..."],
    "paid_ads": "..."
  }},
  "tool_stack": [
    {{"tool": "...", "use": "...", "cost": "$X"}}
  ],
  "risks": ["risk1", "risk2", "risk3", "risk4", "risk5"],
  "upgrade_note": "..."
}}

Be specific. Use real dollar amounts. Name real tools and websites. Every step must be actionable today."""


async def _call_openai(req: BlueprintRequest) -> dict:
    """Call OpenAI API for real AI-generated roadmap."""
    try:
        import httpx

        api_key = os.getenv("OPENAI_API_KEY", "")
        model = os.getenv("OPENAI_MODEL_BLUEPRINT", "gpt-4o-mini")

        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": model,
                    "temperature": 0.7,
                    "max_tokens": 3000,
                    "response_format": {"type": "json_object"},
                    "messages": [
                        {"role": "system", "content": _SYSTEM_PROMPT},
                        {"role": "user", "content": _build_user_prompt(req)},
                    ],
                },
            )
            response.raise_for_status()
            content = response.json()["choices"][0]["message"]["content"]
            data = json.loads(content)
            data["is_sample"] = False
            data["business_idea"] = req.business_idea
            data["category"] = req.category
            return data
    except Exception as exc:
        # On any error, return sample with error flag
        result = dict(_SAMPLE)
        result["is_sample"] = True
        result["ai_error"] = str(exc)
        result["business_idea"] = req.business_idea
        return result


@router.post("/generate")
async def generate_blueprint(req: BlueprintRequest):
    api_key = os.getenv("OPENAI_API_KEY", "")
    if not api_key:
        # Return rich sample — never crash
        result = dict(_SAMPLE)
        result["business_idea"] = req.business_idea
        result["category"] = req.category or req.industry_id or "General Business"
        result["industry_id"] = req.industry_id or ""
        result["is_sample"] = True
        return result

    return await _call_openai(req)


@router.get("/niche-preview/{industry_id}")
def niche_roadmap_preview(industry_id: str):
    """Return a preview of what niche guidance is loaded for a given industry."""
    from app.data.niche_guides import get_niche_prompt_addition
    content = get_niche_prompt_addition(industry_id)
    return {
        "industry_id": industry_id,
        "has_niche_guide": bool(content),
        "preview": content[:500] + "..." if len(content) > 500 else content,
    }
