import copy
import os
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.routes.stripe_routes import router as stripe_router
from app.routes.admin import router as admin_router
from app.routes.analytics import router as analytics_router
from app.routes.credit import router as credit_router
from app.routes.funding import router as funding_router
from app.routes.waitlist import router as waitlist_router
from app.routes.auth import router as auth_router
from app.routes.blueprints import router as blueprints_router
from app.routes.voice import router as voice_router
from app.routes.agents import router as agents_router
from app.routes.rmie_knowledge import router as rmie_knowledge_router
from app.routes.command_center import router as command_center_router
from app.routes.voice_agent import router as voice_agent_router
from app.routes.website_builder import router as website_builder_router
from app.routes.domain_search import router as domain_router
from app.routes.dashboard import router as dashboard_router

try:
    from app.routes.customers import router as customers_router
    _has_customers = True
except ImportError:
    _has_customers = False


class BusinessRequest(BaseModel):
    business_idea: str
    industry: Optional[str] = None
    target_customer: Optional[str] = None
    budget: Optional[str] = None
    experience_level: Optional[str] = None
    revenue_goal: Optional[str] = None
    location: Optional[str] = None
    timeline: Optional[str] = None
    tier: Optional[str] = "free"


FREE_FEATURES = ["starter_blueprint", "basic_summary", "basic_sales_script", "limited_roadmap_preview"]
PRO_FEATURES = FREE_FEATURES + ["rmie_strategy_engine", "full_business_roadmap", "website_builder", "domain_search_affiliate", "unlimited_websites_funnels", "unlimited_contacts", "unlimited_sales_pipelines", "crm_dashboard", "calendar_scheduling", "payments_invoices", "proposals_estimates", "reputation_management", "multi_channel_messaging", "email_marketing", "two_way_conversations", "missed_call_text_back", "social_media_planner", "branding_boards", "workflows_automations", "three_users", "basic_ai_voice_agent", "niche_marketing_plan"]
ELITE_FEATURES = PRO_FEATURES + ["advanced_rmie_strategy_engine", "advanced_business_plan_generation", "advanced_niche_marketing_plans", "unlimited_domains_blogs", "unlimited_memberships_courses", "unlimited_video_hosting", "unlimited_communities", "unlimited_certificates", "expert_nurture_campaigns", "advanced_workflows_automations", "advanced_pipeline_reporting", "ai_follow_up_sales_assistant", "ai_content_funnel_assistant", "ai_review_response_assistant", "ai_proposal_estimate_generator", "ai_profit_loss_insight", "ten_users", "advanced_p2p_ai_voice_agent", "call_summaries_lead_qualification", "appointment_booking_via_ai", "crm_updates_from_calls", "text_to_pay", "priority_support"]
FOUNDERS_FEATURES = ELITE_FEATURES + ["lifetime_access", "future_features", "founder_badge", "founder_only_roadmap", "founder_level_strategy"]


def get_tier_access(tier: str):
    t = tier.lower().strip()
    if t == "free":
        return FREE_FEATURES
    if t == "pro":
        return PRO_FEATURES
    if t == "elite":
        return ELITE_FEATURES
    if t == "founders":
        return FOUNDERS_FEATURES
    raise ValueError("Invalid tier. Use free, pro, elite, or founders.")


def require_feature(tier: str, feature: str):
    if feature not in get_tier_access(tier):
        raise HTTPException(status_code=403, detail=f"Tier '{tier}' lacks required feature '{feature}'")


def strategist_response(req: BusinessRequest, elite: bool = False):
    label = "10M Strategist Engine" if elite else "RMIE Strategist Engine"
    return {
        "engine": label,
        "database_status": "not_connected_or_mock_mode",
        "inputs": req.model_dump(),
        "Business positioning": f"Position {req.business_idea} as a high-trust offer in {req.industry or 'your market'} with a clear profit path.",
        "Target customer strategy": f"Focus on {req.target_customer or 'buyers with urgent pain'} and build a specific before/after promise.",
        "Offer stack": ["Starter offer", "Core cash-flow offer", "Premium high-margin offer"],
        "Revenue model": f"Blend upfront and recurring revenue to reach {req.revenue_goal or 'monthly cash-flow milestones'}.",
        "Pricing strategy": "Use value-based pricing, anchor with premium tier, and protect margins with scope boundaries.",
        "Customer acquisition plan": "Run outbound + local SEO + referral loops, track CAC by channel weekly.",
        "CRM pipeline plan": "Stages: New lead -> Qualified -> Proposal -> Closed Won/Lost with SLA follow-up automations.",
        "Website/funnel plan": "Single niche funnel first, then service-specific pages with proof and booking CTA.",
        "Automation plan": "Automate lead capture, reminders, follow-ups, and lost-deal reactivation.",
        "AI Voice Agent plan": "Deploy inbound qualification, missed-call text back, and appointment booking.",
        "Marketing plan": "30-day content sprint + direct outreach + paid retargeting after message-market fit.",
        "Financial growth plan": "Track weekly revenue, margin, payback period, and pipeline coverage ratio.",
        "30-day execution plan": "Validate offer, close first clients, implement CRM and follow-up infrastructure.",
        "90-day scaling plan": "Standardize SOPs, hire support, and expand channels with KPI guardrails.",
        "Risks and warnings": ["Underselling margins", "No follow-up discipline", "Channel over-expansion too early"],
        "Next best actions": ["Finalize core offer", "Launch booking funnel", "Activate outreach cadence"],
    }


app = FastAPI(title="PEN2PRO BusinessOS API", version="3.1.0", description="PEN2PRO RMIE", docs_url="/api/docs", redoc_url="/api/redoc")
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
BACKEND_URL = os.getenv("BACKEND_URL", "http://localhost:8000")
app.add_middleware(CORSMiddleware, allow_origins=[FRONTEND_URL, BACKEND_URL, "http://localhost:5173", "http://localhost:3000", "https://pen2pro.com", "https://www.pen2pro.com"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/api/health")
def health(): return {"status": "ok", "service": "PEN2PRO BusinessOS API", "version": "3.1.0"}

@app.get("/api/pricing")
def get_pricing():
    return {"plans": {"free_forever": {"name": "Free Forever", "price": "$0/mo", "features": ["Starter RMIE blueprint", "Basic business roadmap preview", "Basic sales script", "Locked Pro, Elite, and Founders sections"]}, "pro": {"name": "RMIE Pro", "price": "$249/mo", "value": "$525/mo", "features": ["RMIE strategy engine", "Full business roadmap", "Website builder", "Domain search + affiliate link", "Unlimited websites & funnels", "Unlimited contacts", "Unlimited sales pipelines", "Full CRM dashboard", "Calendar & scheduling", "Payments & invoices", "Proposals & estimates", "Reputation management", "Multi-channel messaging", "Email marketing", "2-way text/email conversation", "Missed-call text-back", "Social media planner", "Branding boards", "Workflows & automations", "Up to 3 users", "Basic AI Voice Agent", "Niche marketing plan generator"]}, "elite": {"name": "RMIE Elite", "price": "$499/mo", "features": ["Everything in Pro", "Advanced RMIE strategy engine", "Advanced business plan generation", "Advanced niche marketing plans", "Unlimited domains & blogs", "Unlimited memberships & courses", "Unlimited video hosting", "Unlimited communities", "Unlimited certificates", "Expert nurture campaigns", "Advanced workflows & automations", "Advanced pipeline reporting", "AI follow-up & sales assistant", "AI content & funnel assistant", "AI review response assistant", "AI proposal/estimate generator", "AI profit/loss insight", "Up to 10 users", "Advanced P2P AI Voice Agent", "Call summaries & lead qualification", "Appointment booking via AI", "CRM updates from calls", "Text-to-pay", "Priority support"]}, "founders": {"name": "Founders Lifetime Access", "price": "", "launch_note": "Founder pricing will be announced on launch date.", "features": ["Everything in Pro", "Everything in Elite", "Lifetime access", "Future feature access", "Founder-only roadmap", "Founder-level strategy"]}}}

@app.get("/api/rmie/pro/tools")
def pro_tools(): return {"tier": "pro", "features": PRO_FEATURES}
@app.get("/api/rmie/elite/tools")
def elite_tools(): return {"tier": "elite", "tools": [{"name": "Advanced P2P AI Voice Agent", "status": "active", "route": "/api/voice-agent/advanced", "description": "Advanced voice assistant for call handling, lead qualification, appointment booking, summaries, and CRM updates.", "requires_connector": True, "connector_note": "Requires Twilio, Vapi, Retell, Bland AI, ElevenLabs, or another voice provider."}], "features": ELITE_FEATURES}
@app.get("/api/rmie/founders/tools")
def founders_tools(): return {"tier": "founders", "features": FOUNDERS_FEATURES}

@app.post("/api/rmie/strategy-engine")
def rmie_strategy(req: BusinessRequest): require_feature(req.tier or "free", "rmie_strategy_engine"); return strategist_response(req)
@app.post("/api/rmie/roadmap")
def rmie_roadmap(req: BusinessRequest): return strategist_response(req, elite=(req.tier in {"elite", "founders"}))
@app.post("/api/rmie/elite/advanced-strategy")
def elite_strategy(req: BusinessRequest): require_feature(req.tier or "free", "advanced_rmie_strategy_engine"); return strategist_response(req, elite=True)
@app.post("/api/rmie/elite/business-plan")
def elite_business_plan(req: BusinessRequest):
    require_feature(req.tier or "free", "advanced_business_plan_generation")
    return {"database_status": "not_connected_or_mock_mode", "Executive summary": f"{req.business_idea} growth blueprint", "Business model": "Recurring + project mix", "Target market": req.target_customer or "Defined ICP", "Offer stack": ["Entry", "Core", "Premium"], "Pricing strategy": "Value-based tiering", "Marketing plan": "Outbound + content + referral", "Operations plan": "SOP-driven delivery", "CRM plan": "Lifecycle pipeline + automations", "Automation plan": "Lead routing, reminders, reactivation", "AI Voice Agent plan": "Qualify, book, summarize, update CRM", "Financial projections placeholder": "Projected 12-month P&L placeholder", "30-day plan": "Validate and close initial clients", "90-day plan": "Scale acquisition and team capacity"}

@app.get('/api/voice-agent/basic')
def voice_basic(): return {"tier": "pro", "capabilities": ["Call greeting", "Lead intake", "Missed-call text-back"], "connector_note": "Live AI voice requires Vapi, Retell, Bland AI, Twilio Voice, ElevenLabs, or equivalent."}
@app.get('/api/voice-agent/advanced')
def voice_adv(): return {"tier": "elite", "features": ["Inbound call handling", "Lead qualification", "Appointment booking", "Call summaries", "CRM call notes", "Missed-call text-back", "Text-to-pay", "Owner notification", "Priority routing"]}
@app.post('/api/ai/profit-loss-insight')
def profit_loss(req: BusinessRequest): return {"Revenue assumptions": "Monthly recurring + project close-rate assumptions", "Expense categories": ["Labor", "Tools", "Software", "Ads", "COGS"], "Break-even guidance": "Target break-even by month 3-4", "Margin warnings": ["Discounting too early", "Over-servicing low-ticket clients"], "Profit improvement ideas": ["Upsells", "Retention offers", "Price floor policy"], "Recommended KPIs": ["Gross margin", "CAC", "LTV", "Close rate"]}
@app.post('/api/payments/text-to-pay')
def text_to_pay(): return {"Payment request message": "Hi {{customer_name}}, use this secure payment link for invoice {{invoice_amount}}.", "Customer name placeholder": "{{customer_name}}", "Invoice amount placeholder": "{{invoice_amount}}", "Stripe connector note": "Live payments require Stripe.", "SMS connector note": "Live SMS requires Twilio or equivalent."}



@app.post("/api/website-builder/generate")
def website_builder_generate(req: BusinessRequest):
    require_feature(req.tier or "free", "website_builder")
    return {"database_status":"not_connected_or_mock_mode","website_plan":{"headline":f"{req.business_idea} for {req.target_customer or 'local customers'}","pages":["Home","Services","About","Contact"],"funnel":"Lead magnet -> booking -> follow-up"}}

@app.post("/api/domain/search")
def domain_search(req: BusinessRequest):
    require_feature(req.tier or "free", "domain_search_affiliate")
    seed=(req.business_idea or 'brand').lower().replace(' ','')[:14]
    return {"domains":[f"{seed}.com",f"{seed}hq.com"],"affiliate_link":"https://example-registrar.test/ref/pen2pro","connector_note":"Live domain availability requires Namecheap, GoDaddy, Enom, or another domain API."}

@app.get('/api/funnels')
def funnels(tier:str='free'):
    require_feature(tier, 'unlimited_websites_funnels')
    return {"items":["Lead capture funnel","Appointment funnel"],"database_status":"not_connected_or_mock_mode"}

@app.get('/api/crm/dashboard')
def crm_dashboard(tier:str='free'): require_feature(tier,'crm_dashboard'); return {"open_leads":12,"pipeline_value":"$18,400","database_status":"not_connected_or_mock_mode","connector_note":"Live CRM persistence requires database models."}
@app.get('/api/crm/contacts')
def crm_contacts(tier:str='free'): require_feature(tier,'unlimited_contacts'); return {"contacts":[{"name":"Sample Lead","stage":"New"}],"database_status":"not_connected_or_mock_mode"}
@app.get('/api/crm/pipelines')
def crm_pipelines(tier:str='free'): require_feature(tier,'unlimited_sales_pipelines'); return {"stages":["New lead","Qualified","Proposal","Closed"],"database_status":"not_connected_or_mock_mode"}
@app.get('/api/calendar/scheduling')
def calendar_sched(tier:str='free'): require_feature(tier,'calendar_scheduling'); return {"available_slots":["Mon 10:00","Tue 14:00"]}
@app.get('/api/payments/invoices')
def payment_invoices(tier:str='free'): require_feature(tier,'payments_invoices'); return {"invoices":[{"id":"INV-1001","status":"draft"}],"connector_note":"Live payments require Stripe."}
@app.post('/api/proposals-estimates')
def proposals_estimates(req:BusinessRequest): require_feature(req.tier or 'free','proposals_estimates'); return {"proposal":"Scope + timeline + pricing for %s"%req.business_idea}
@app.get('/api/reputation')
def reputation(tier:str='free'): require_feature(tier,'reputation_management'); return {"review_workflow":"Request review 24h after delivery"}
@app.get('/api/messaging/multichannel')
def messaging_multi(tier:str='free'): require_feature(tier,'multi_channel_messaging'); return {"channels":["SMS","Email","Web chat"]}
@app.post('/api/email-marketing/campaign')
def email_campaign(req:BusinessRequest): require_feature(req.tier or 'free','email_marketing'); return {"campaign":"Welcome + nurture series","connector_note":"Live email marketing requires SendGrid, Mailgun, Resend, Postmark, or SMTP."}
@app.get('/api/conversations')
def conversations(tier:str='free'): require_feature(tier,'two_way_conversations'); return {"threads":[{"channel":"sms","last_message":"Thanks, send invoice."}]}
@app.get('/api/voice/missed-call-text-back')
def missed_call(tier:str='free'): require_feature(tier,'missed_call_text_back'); return {"message_template":"Sorry we missed your call. Reply to book.","connector_note":"Live SMS requires Twilio or equivalent."}
@app.post('/api/social/planner')
def social_planner(req:BusinessRequest): require_feature(req.tier or 'free','social_media_planner'); return {"weekly_posts":["Pain point post","Proof post","Offer post"]}
@app.post('/api/branding/board')
def branding_board(req:BusinessRequest): require_feature(req.tier or 'free','branding_boards'); return {"brand_voice":"Direct, credible, outcome-focused"}
@app.get('/api/workflows/automations')
def workflows_auto(tier:str='free'): require_feature(tier,'workflows_automations'); return {"automations":["Lead follow-up","No-show recovery"],"database_status":"not_connected_or_mock_mode"}
@app.get('/api/users/pro-limit')
def pro_limit(tier:str='free'): require_feature(tier,'three_users'); return {"user_limit":3}
@app.post('/api/marketing/niche-plan')
def niche_plan(req:BusinessRequest): require_feature(req.tier or 'free','niche_marketing_plan'); return {"plan":"Niche message, offer, channels, and KPI cadence."}

@app.post('/api/marketing/elite/niche-plan')
def elite_niche(req:BusinessRequest): require_feature(req.tier or 'free','advanced_niche_marketing_plans'); return {"plan":"Advanced niche expansion plan with channel mix and monetization ladders."}
@app.get('/api/domains/elite')
def elite_domains(tier:str='free'): require_feature(tier,'unlimited_domains_blogs'); return {"domains":["brand.com","brand.ai"],"connector_note":"Live domain availability requires Namecheap, GoDaddy, Enom, or another domain API."}
@app.get('/api/blogs/elite')
def elite_blogs(tier:str='free'): require_feature(tier,'unlimited_domains_blogs'); return {"blogs":["SEO cluster 1","SEO cluster 2"]}
@app.get('/api/memberships-courses')
def memberships(tier:str='free'): require_feature(tier,'unlimited_memberships_courses'); return {"products":["Starter course","Premium membership"]}
@app.get('/api/video-hosting')
def video_hosting(tier:str='free'): require_feature(tier,'unlimited_video_hosting'); return {"status":"mock_ready","connector_note":"Live video hosting requires storage/provider integration."}
@app.get('/api/communities')
def communities(tier:str='free'): require_feature(tier,'unlimited_communities'); return {"communities":["Founders community"]}
@app.get('/api/certificates')
def certificates(tier:str='free'): require_feature(tier,'unlimited_certificates'); return {"templates":["Completion certificate"]}
@app.post('/api/campaigns/expert-nurture')
def expert_nurture(req:BusinessRequest): require_feature(req.tier or 'free','expert_nurture_campaigns'); return {"sequence":["Authority email","Case study","CTA"]}
@app.get('/api/workflows/advanced')
def workflows_adv(tier:str='free'): require_feature(tier,'advanced_workflows_automations'); return {"automations":["Pipeline velocity optimizer","Lead-score routing"]}
@app.get('/api/reports/pipeline-advanced')
def pipe_adv(tier:str='free'): require_feature(tier,'advanced_pipeline_reporting'); return {"metrics":["Stage conversion","Velocity","Rep close rate"]}
@app.post('/api/ai/follow-up-sales-assistant')
def ai_follow(req:BusinessRequest): require_feature(req.tier or 'free','ai_follow_up_sales_assistant'); return {"assistant_output":"Personalized follow-up cadence and script."}
@app.post('/api/ai/content-funnel-assistant')
def ai_content(req:BusinessRequest): require_feature(req.tier or 'free','ai_content_funnel_assistant'); return {"assistant_output":"Content angles + funnel hooks."}
@app.post('/api/ai/review-response-assistant')
def ai_review(req:BusinessRequest): require_feature(req.tier or 'free','ai_review_response_assistant'); return {"assistant_output":"Professional review response drafts."}
@app.post('/api/ai/proposal-estimate-generator')
def ai_prop(req:BusinessRequest): require_feature(req.tier or 'free','ai_proposal_estimate_generator'); return {"assistant_output":"Proposal with scope, milestones, and estimate."}
@app.get('/api/users/elite-limit')
def elite_limit(tier:str='free'): require_feature(tier,'ten_users'); return {"user_limit":10}
@app.post('/api/voice-agent/call-summary')
def call_summary(req:BusinessRequest): require_feature(req.tier or 'free','call_summaries_lead_qualification'); return {"summary":"Caller qualified, requested callback within 2 hours."}
@app.post('/api/voice-agent/lead-qualification')
def lead_qual(req:BusinessRequest): require_feature(req.tier or 'free','call_summaries_lead_qualification'); return {"qualification":"High intent, budget aligned."}
@app.post('/api/voice-agent/book-appointment')
def book_appt(req:BusinessRequest): require_feature(req.tier or 'free','appointment_booking_via_ai'); return {"appointment":"Booked Tue 2:00 PM"}
@app.post('/api/voice-agent/update-crm-from-call')
def update_crm(req:BusinessRequest): require_feature(req.tier or 'free','crm_updates_from_calls'); return {"status":"crm_updated_mock","database_status":"not_connected_or_mock_mode"}
@app.get('/api/support/priority')
def priority_support(tier:str='free'): require_feature(tier,'priority_support'); return {"support_sla":"Priority queue enabled"}

@app.get('/api/founders/access')
def founders_access(tier:str='free'): require_feature(tier,'lifetime_access'); return {"status":"lifetime_access_active","future_features":True,"founder_badge":True}
@app.post('/api/founders/roadmap')
def founders_roadmap(req:BusinessRequest): require_feature(req.tier or 'free','founder_only_roadmap'); out=strategist_response(req,elite=True); out['Founder-level strategy']='Long-horizon moat building and portfolio expansion.'; return out
@app.get('/api/founders/benefits')
def founders_benefits(tier:str='free'): require_feature(tier,'future_features'); return {"benefits":["Lifetime full-system access","Founder-only roadmap","Future feature access"]}

# keep existing routers
app.include_router(blueprints_router, prefix="/api/blueprints", tags=["RMIE"])
app.include_router(stripe_router, prefix="/api/stripe", tags=["Stripe"])
app.include_router(admin_router, prefix="/api/admin", tags=["Admin"])
app.include_router(analytics_router, prefix="/api/analytics", tags=["Analytics"])
app.include_router(credit_router, prefix="/api/credit", tags=["Credit"])
app.include_router(funding_router, prefix="/api/funding", tags=["Funding"])
app.include_router(waitlist_router, prefix="/api/waitlist", tags=["Waitlist"])
app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
app.include_router(voice_router, prefix="/api/voice", tags=["Voice Coach"])
app.include_router(agents_router)
app.include_router(rmie_knowledge_router, prefix="/api/rmie", tags=["RMIE Vector Knowledge"])
app.include_router(command_center_router, prefix="/api", tags=["Command Center"])
app.include_router(voice_agent_router, prefix="/api", tags=["Voice Agent"])
app.include_router(website_builder_router, prefix="/api", tags=["Website Builder"])
app.include_router(domain_router, prefix="/api", tags=["Domain Search"])
app.include_router(dashboard_router)
if _has_customers:
    app.include_router(customers_router, prefix="/api/customers", tags=["Customers"])

from app.routes.blueprints import BlueprintRequest, _SAMPLE, _call_openai
@app.post("/api/roadmap")
async def roadmap_alias(req: BlueprintRequest):
    if not os.getenv("OPENAI_API_KEY", ""):
        result = copy.deepcopy(_SAMPLE)
        result["business_idea"] = req.business_idea
        result["category"] = req.category or req.industry_id or "General Business"
        result["industry_id"] = req.industry_id or ""
        result["is_sample"] = True
        return result
    return await _call_openai(req)

@app.get("/api/industries")
def list_industries():
    from app.data.industries import INDUSTRIES
    return {"industries": INDUSTRIES}
