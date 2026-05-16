from __future__ import annotations

from copy import deepcopy
from datetime import datetime, timezone
import csv
import io
import json
import os
from pathlib import Path
import uuid
from typing import Any


PLAN_RANK = {
    "free": 0,
    "starter": 0,
    "pro": 1,
    "elite": 2,
    "founders": 3,
}


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _module(
    key: str,
    label: str,
    section: str,
    required_plan: str,
    description: str,
    columns: list[dict[str, str]],
    records: list[dict[str, Any]],
    actions: list[dict[str, str]],
    form_schema: list[dict[str, Any]],
    endpoints: dict[str, str],
    metrics: list[dict[str, Any]] | None = None,
    plan_scope: dict[str, Any] | None = None,
) -> dict[str, Any]:
    return {
        "key": key,
        "label": label,
        "section": section,
        "required_plan": required_plan,
        "description": description,
        "columns": columns,
        "records": records,
        "actions": actions,
        "form_schema": form_schema,
        "endpoints": endpoints,
        "metrics": metrics or [],
        "plan_scope": plan_scope or {},
        "updated_at": _now(),
    }


TEXT = "text"
MONEY = "money"
STATUS = "status"
DATE = "date"


DASHBOARD_MODULES = [
    _module(
        "overview",
        "Dashboard",
        "core",
        "free",
        "Command view of roadmaps, leads, revenue activity, and next actions.",
        [
            {"key": "name", "label": "Item", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
            {"key": "owner", "label": "Owner", "type": TEXT},
            {"key": "next_action", "label": "Next Action", "type": TEXT},
        ],
        [
            {"id": 1, "name": "Starter blueprint", "status": "active", "owner": "Robert", "next_action": "Generate or update roadmap"},
            {"id": 2, "name": "Lead inbox", "status": "needs_review", "owner": "Sales", "next_action": "Review new leads"},
            {"id": 3, "name": "Funding readiness", "status": "draft", "owner": "Founder", "next_action": "Complete checklist"},
        ],
        [
            {"key": "new_blueprint", "label": "New Blueprint", "method": "POST"},
            {"key": "add_lead", "label": "Add Lead", "method": "POST"},
            {"key": "view_reports", "label": "View Reports", "method": "GET"},
        ],
        [],
        {"list": "/api/dashboard/modules/overview", "create": "/api/roadmap"},
        [
            {"label": "Open leads", "value": 12},
            {"label": "Pipeline value", "value": "$18,400"},
            {"label": "Tasks due", "value": 5},
            {"label": "Plan health", "value": "Active"},
        ],
        {
            "free": "Dashboard preview, limited contacts, lead inbox, and basic tasks.",
            "pro": "Customer CRM, estimates, invoices, payments, P2P AI Voice (Basic), and website records.",
            "elite": "Advanced automations, funnels, domains, reputation, reports, and voice workflows.",
            "founders": "Everything unlocked for life with owner/admin controls.",
        },
    ),
    _module(
        "contacts",
        "Contacts",
        "crm",
        "free",
        "People and companies tied to leads, clients, partners, and vendors.",
        [
            {"key": "name", "label": "Name", "type": TEXT},
            {"key": "company", "label": "Company", "type": TEXT},
            {"key": "email", "label": "Email", "type": TEXT},
            {"key": "phone", "label": "Phone", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 101, "name": "Maria Johnson", "company": "Oak Ridge Apartments", "email": "maria@example.com", "phone": "713-555-0188", "status": "prospect"},
            {"id": 102, "name": "David Ellis", "company": "Ellis Logistics", "email": "david@example.com", "phone": "832-555-0144", "status": "customer"},
        ],
        [
            {"key": "create_contact", "label": "Add Contact", "method": "POST"},
            {"key": "import_contacts", "label": "Import CSV", "method": "POST"},
            {"key": "export_contacts", "label": "Export", "method": "GET"},
        ],
        [
            {"key": "name", "label": "Full name", "type": "text", "required": True},
            {"key": "email", "label": "Email", "type": "email", "required": True},
            {"key": "phone", "label": "Phone", "type": "tel", "required": False},
            {"key": "company", "label": "Company", "type": "text", "required": False},
        ],
        {"list": "/api/customers", "create": "/api/customers", "update": "/api/customers/{id}"},
    ),
    _module(
        "lead-inbox",
        "Lead Inbox",
        "crm",
        "free",
        "Incoming opportunities from forms, calls, ads, referrals, and manual entry.",
        [
            {"key": "name", "label": "Lead", "type": TEXT},
            {"key": "source", "label": "Source", "type": TEXT},
            {"key": "interest", "label": "Interest", "type": TEXT},
            {"key": "score", "label": "Score", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 201, "name": "Baytown property manager", "source": "Website", "interest": "Pressure washing bid", "score": 84, "status": "new"},
            {"id": 202, "name": "Veteran founder", "source": "Waitlist", "interest": "Funding help", "score": 76, "status": "qualified"},
        ],
        [
            {"key": "create_lead", "label": "Add Lead", "method": "POST"},
            {"key": "score_lead", "label": "Score Lead", "method": "POST"},
            {"key": "convert_contact", "label": "Convert to Contact", "method": "POST"},
        ],
        [
            {"key": "name", "label": "Lead name", "type": "text", "required": True},
            {"key": "source", "label": "Source", "type": "select", "options": ["Website", "Referral", "Call", "Manual"], "required": True},
            {"key": "interest", "label": "Interest", "type": "text", "required": True},
            {"key": "deal_value", "label": "Estimated value", "type": "number", "required": False},
        ],
        {"list": "/api/leads", "create": "/api/leads", "score": "/api/crm/score-lead"},
    ),
    _module(
        "pipeline",
        "Pipeline",
        "crm",
        "pro",
        "Deal stages, values, probabilities, and close dates.",
        [
            {"key": "deal", "label": "Deal", "type": TEXT},
            {"key": "stage", "label": "Stage", "type": STATUS},
            {"key": "value", "label": "Value", "type": MONEY},
            {"key": "probability", "label": "Probability", "type": TEXT},
            {"key": "close_date", "label": "Close Date", "type": DATE},
        ],
        [
            {"id": 301, "deal": "Apartment complex exterior cleaning", "stage": "proposal", "value": 8200, "probability": "55%", "close_date": "2026-05-28"},
            {"id": 302, "deal": "PEN2PRO Elite upgrade", "stage": "qualified", "value": 499, "probability": "70%", "close_date": "2026-05-20"},
        ],
        [
            {"key": "create_deal", "label": "Add Deal", "method": "POST"},
            {"key": "move_stage", "label": "Move Stage", "method": "PATCH"},
            {"key": "forecast", "label": "Forecast", "method": "GET"},
        ],
        [
            {"key": "deal", "label": "Deal name", "type": "text", "required": True},
            {"key": "stage", "label": "Stage", "type": "select", "options": ["new", "qualified", "proposal", "won", "lost"], "required": True},
            {"key": "value", "label": "Value", "type": "number", "required": True},
        ],
        {"list": "/api/crm/deals", "create": "/api/crm/deals", "summary": "/api/crm/pipeline-summary"},
    ),
    _module(
        "calendar",
        "Calendar",
        "operations",
        "pro",
        "Appointments, follow-ups, job schedules, and sales calls.",
        [
            {"key": "title", "label": "Event", "type": TEXT},
            {"key": "type", "label": "Type", "type": TEXT},
            {"key": "date", "label": "Date", "type": DATE},
            {"key": "assigned_to", "label": "Assigned", "type": TEXT},
        ],
        [
            {"id": 401, "title": "Discovery call with property manager", "type": "Sales", "date": "2026-05-16 10:00", "assigned_to": "Robert"},
            {"id": 402, "title": "Follow up on funding checklist", "type": "Customer success", "date": "2026-05-17 14:00", "assigned_to": "PEN2PRO"},
        ],
        [{"key": "create_event", "label": "Add Event", "method": "POST"}, {"key": "sync_calendar", "label": "Sync Calendar", "method": "POST"}],
        [{"key": "title", "label": "Title", "type": "text", "required": True}, {"key": "date", "label": "Date/time", "type": "datetime-local", "required": True}],
        {"list": "/api/calendar/scheduling", "create": "/api/calendar/events"},
    ),
    _module(
        "messages",
        "Messages",
        "communications",
        "pro",
        "Two-way email, SMS, and web chat conversations.",
        [
            {"key": "contact", "label": "Contact", "type": TEXT},
            {"key": "channel", "label": "Channel", "type": TEXT},
            {"key": "last_message", "label": "Last Message", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 501, "contact": "Maria Johnson", "channel": "SMS", "last_message": "Can you send the estimate?", "status": "open"},
            {"id": 502, "contact": "Veteran founder", "channel": "Email", "last_message": "I need help with funding readiness.", "status": "waiting"},
        ],
        [{"key": "new_message", "label": "New Message", "method": "POST"}, {"key": "template", "label": "Use Template", "method": "POST"}],
        [{"key": "contact", "label": "Contact", "type": "text", "required": True}, {"key": "message", "label": "Message", "type": "textarea", "required": True}],
        {"list": "/api/conversations", "create": "/api/messages"},
    ),
    _module(
        "calls",
        "Calls",
        "communications",
        "pro",
        "Call history, summaries, missed-call text back, and booking outcomes.",
        [
            {"key": "caller", "label": "Caller", "type": TEXT},
            {"key": "direction", "label": "Direction", "type": TEXT},
            {"key": "duration", "label": "Duration", "type": TEXT},
            {"key": "outcome", "label": "Outcome", "type": STATUS},
        ],
        [
            {"id": 601, "caller": "713-555-0188", "direction": "Inbound", "duration": "4m 22s", "outcome": "qualified"},
            {"id": 602, "caller": "832-555-0144", "direction": "Outbound", "duration": "2m 10s", "outcome": "follow_up"},
        ],
        [{"key": "log_call", "label": "Log Call", "method": "POST"}, {"key": "missed_call_text", "label": "Missed Call Text", "method": "POST"}],
        [{"key": "phone", "label": "Phone", "type": "tel", "required": True}, {"key": "outcome", "label": "Outcome", "type": "text", "required": True}],
        {"list": "/api/voice-agent/calls", "create": "/api/voice-agent/call-summary"},
    ),
    _module(
        "ai-voice-agent",
        "AI Voice Agent",
        "ai",
        "pro",
        "P2P AI Voice (Basic) for intake, missed-call response, lead capture, and upgrade-ready call workflows.",
        [
            {"key": "agent_name", "label": "Agent", "type": TEXT},
            {"key": "phone_number", "label": "Number", "type": TEXT},
            {"key": "mode", "label": "Mode", "type": STATUS},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 701, "agent_name": "PEN2PRO Intake Agent", "phone_number": "Not connected", "mode": "Lead qualification", "status": "setup_required"},
            {"id": 702, "agent_name": "Commercial Quote Agent", "phone_number": "Not connected", "mode": "Estimate intake", "status": "draft"},
        ],
        [{"key": "configure_agent", "label": "Configure Agent", "method": "POST"}, {"key": "test_call", "label": "Test Call", "method": "POST"}],
        [{"key": "agent_name", "label": "Agent name", "type": "text", "required": True}, {"key": "voice_provider", "label": "Provider", "type": "select", "options": ["Twilio", "Vapi", "Retell", "Bland", "ElevenLabs"], "required": True}],
        {"list": "/api/voice-agent/dashboard", "create": "/api/voice-agent/settings"},
        None,
        {
            "pro": "Basic voice setup, test call workflow, missed-call response, and lead intake.",
            "elite": "Call summaries, qualification, appointment booking, CRM updates, and advanced routing.",
            "founders": "Best available voice model access, priority setup, and full future voice features.",
        },
    ),
    _module(
        "estimates",
        "Estimates",
        "sales",
        "pro",
        "Professional estimates and proposal drafts tied to leads and deals.",
        [
            {"key": "number", "label": "Estimate #", "type": TEXT},
            {"key": "customer", "label": "Customer", "type": TEXT},
            {"key": "amount", "label": "Amount", "type": MONEY},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 801, "number": "EST-1001", "customer": "Oak Ridge Apartments", "amount": 8200, "status": "sent"},
            {"id": 802, "number": "EST-1002", "customer": "Ellis Logistics", "amount": 2400, "status": "draft"},
        ],
        [{"key": "create_estimate", "label": "Create Estimate", "method": "POST"}, {"key": "send_estimate", "label": "Send", "method": "POST"}],
        [{"key": "customer", "label": "Customer", "type": "text", "required": True}, {"key": "amount", "label": "Amount", "type": "number", "required": True}],
        {"list": "/api/proposals-estimates", "create": "/api/proposals-estimates"},
    ),
    _module(
        "invoices",
        "Invoices",
        "sales",
        "pro",
        "Invoices, due dates, balances, and collection status.",
        [
            {"key": "number", "label": "Invoice #", "type": TEXT},
            {"key": "customer", "label": "Customer", "type": TEXT},
            {"key": "balance", "label": "Balance", "type": MONEY},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 901, "number": "INV-1001", "customer": "Oak Ridge Apartments", "balance": 4100, "status": "partial"},
            {"id": 902, "number": "INV-1002", "customer": "Ellis Logistics", "balance": 2400, "status": "draft"},
        ],
        [{"key": "create_invoice", "label": "Create Invoice", "method": "POST"}, {"key": "send_invoice", "label": "Send Invoice", "method": "POST"}],
        [{"key": "customer", "label": "Customer", "type": "text", "required": True}, {"key": "line_items", "label": "Line items", "type": "textarea", "required": True}],
        {"list": "/api/payments/invoices", "create": "/api/payments/invoices"},
    ),
    _module(
        "payments",
        "Payments",
        "sales",
        "pro",
        "Payment links, payment status, deposits, and Stripe-ready records.",
        [
            {"key": "customer", "label": "Customer", "type": TEXT},
            {"key": "amount", "label": "Amount", "type": MONEY},
            {"key": "method", "label": "Method", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1001, "customer": "Oak Ridge Apartments", "amount": 4100, "method": "Stripe link", "status": "pending"},
            {"id": 1002, "customer": "PEN2PRO Pro subscriber", "amount": 249, "method": "Card", "status": "paid"},
        ],
        [{"key": "create_payment_link", "label": "Create Link", "method": "POST"}, {"key": "text_to_pay", "label": "Text to Pay", "method": "POST"}],
        [{"key": "customer", "label": "Customer", "type": "text", "required": True}, {"key": "amount", "label": "Amount", "type": "number", "required": True}],
        {"list": "/api/payments/invoices", "create": "/api/payments/text-to-pay"},
        None,
        {
            "pro": "Customer-specific payment links, deposits, invoice balances, and Stripe-ready records.",
            "elite": "Text-to-pay, payment recovery automations, and pipeline-to-payment workflows.",
            "founders": "Full payment operations access for life.",
        },
    ),
    _module(
        "automations",
        "Automations",
        "automation",
        "pro",
        "Rules, follow-up sequences, reminders, and advanced workflow logic.",
        [
            {"key": "name", "label": "Automation", "type": TEXT},
            {"key": "trigger", "label": "Trigger", "type": TEXT},
            {"key": "runs", "label": "Runs", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1101, "name": "New lead 5-touch follow-up", "trigger": "Lead created", "runs": 42, "status": "active"},
            {"id": 1102, "name": "Missed-call text back", "trigger": "Missed call", "runs": 7, "status": "draft"},
        ],
        [{"key": "create_automation", "label": "New Automation", "method": "POST"}, {"key": "run_test", "label": "Test Workflow", "method": "POST"}],
        [{"key": "name", "label": "Automation name", "type": "text", "required": True}, {"key": "trigger", "label": "Trigger", "type": "text", "required": True}],
        {"list": "/api/automation/tasks", "create": "/api/automation/commands"},
    ),
    _module(
        "campaigns",
        "Campaigns",
        "marketing",
        "pro",
        "Email, SMS, social, and outbound campaigns tied to offers.",
        [
            {"key": "name", "label": "Campaign", "type": TEXT},
            {"key": "channel", "label": "Channel", "type": TEXT},
            {"key": "audience", "label": "Audience", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1201, "name": "Houston property manager outreach", "channel": "Email/SMS", "audience": "Commercial property", "status": "draft"},
            {"id": 1202, "name": "Founder waitlist nurture", "channel": "Email", "audience": "Waitlist", "status": "active"},
        ],
        [{"key": "create_campaign", "label": "New Campaign", "method": "POST"}, {"key": "generate_copy", "label": "Generate Copy", "method": "POST"}],
        [{"key": "name", "label": "Campaign name", "type": "text", "required": True}, {"key": "channel", "label": "Channel", "type": "select", "options": ["Email", "SMS", "Social", "Outbound"], "required": True}],
        {"list": "/api/email-marketing/campaign", "create": "/api/email-marketing/campaign"},
    ),
    _module(
        "funnels",
        "Funnels",
        "marketing",
        "elite",
        "Lead magnets, landing pages, bookings, upsells, and conversion paths.",
        [
            {"key": "name", "label": "Funnel", "type": TEXT},
            {"key": "offer", "label": "Offer", "type": TEXT},
            {"key": "conversion", "label": "Conversion", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1301, "name": "Free roadmap to Pro", "offer": "PEN2PRO Roadmap", "conversion": "18%", "status": "active"},
            {"id": 1302, "name": "Pressure washing quote funnel", "offer": "Commercial quote", "conversion": "Draft", "status": "draft"},
        ],
        [{"key": "create_funnel", "label": "New Funnel", "method": "POST"}, {"key": "preview", "label": "Preview", "method": "GET"}],
        [{"key": "name", "label": "Funnel name", "type": "text", "required": True}, {"key": "offer", "label": "Offer", "type": "text", "required": True}],
        {"list": "/api/funnels", "create": "/api/website-builder/generate"},
    ),
    _module(
        "websites",
        "Websites",
        "marketing",
        "pro",
        "Website builder projects, landing pages, SEO sections, and publishing status.",
        [
            {"key": "name", "label": "Website", "type": TEXT},
            {"key": "domain", "label": "Domain", "type": TEXT},
            {"key": "pages", "label": "Pages", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1401, "name": "PEN2PRO Launch Site", "domain": "pen2pro.com", "pages": 8, "status": "published"},
            {"id": 1402, "name": "Commercial Service Website", "domain": "examplebusiness.com", "pages": 5, "status": "draft"},
        ],
        [{"key": "create_site", "label": "Create Website", "method": "POST"}, {"key": "publish", "label": "Publish", "method": "POST"}],
        [{"key": "business_idea", "label": "Business / site purpose", "type": "text", "required": True}, {"key": "domain", "label": "Domain", "type": "text", "required": False}],
        {"list": "/api/website-builder/projects", "create": "/api/website-builder/generate"},
        None,
        {
            "pro": "Starter website projects, service pages, SEO basics, and publishing readiness.",
            "elite": "Advanced websites, funnels, domains, blogs, and multi-site growth workflows.",
            "founders": "Lifetime access to all website, funnel, and domain-builder capabilities.",
        },
    ),
    _module(
        "domains",
        "Domains",
        "marketing",
        "elite",
        "Domain search, connection, DNS readiness, and affiliate registrar links.",
        [
            {"key": "domain", "label": "Domain", "type": TEXT},
            {"key": "provider", "label": "Provider", "type": TEXT},
            {"key": "renewal", "label": "Renewal", "type": DATE},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1501, "domain": "pen2pro.com", "provider": "Registrar", "renewal": "2027-01-10", "status": "connected"},
            {"id": 1502, "domain": "examplebusiness.com", "provider": "Registrar", "renewal": "2026-11-18", "status": "dns_review"},
        ],
        [{"key": "search_domain", "label": "Search Domain", "method": "GET"}, {"key": "connect_domain", "label": "Connect", "method": "POST"}],
        [{"key": "query", "label": "Domain idea", "type": "text", "required": True}],
        {"list": "/api/domain/search", "create": "/api/domain/search"},
    ),
    _module(
        "reputation",
        "Reputation",
        "marketing",
        "elite",
        "Review requests, response templates, ratings, and customer proof.",
        [
            {"key": "customer", "label": "Customer", "type": TEXT},
            {"key": "rating", "label": "Rating", "type": TEXT},
            {"key": "platform", "label": "Platform", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1601, "customer": "Oak Ridge Apartments", "rating": "5", "platform": "Google", "status": "published"},
            {"id": 1602, "customer": "Ellis Logistics", "rating": "Request sent", "platform": "Google", "status": "pending"},
        ],
        [{"key": "request_review", "label": "Request Review", "method": "POST"}, {"key": "draft_response", "label": "Draft Response", "method": "POST"}],
        [{"key": "customer", "label": "Customer", "type": "text", "required": True}, {"key": "platform", "label": "Platform", "type": "text", "required": True}],
        {"list": "/api/reputation", "create": "/api/reputation"},
    ),
    _module(
        "tasks",
        "Tasks",
        "operations",
        "free",
        "Action items, owners, due dates, and execution tracking.",
        [
            {"key": "title", "label": "Task", "type": TEXT},
            {"key": "owner", "label": "Owner", "type": TEXT},
            {"key": "due_at", "label": "Due", "type": DATE},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1701, "title": "Finish free roadmap intake", "owner": "Robert", "due_at": "2026-05-16", "status": "todo"},
            {"id": 1702, "title": "Review admin dashboard access", "owner": "PEN2PRO", "due_at": "2026-05-17", "status": "in_progress"},
        ],
        [{"key": "create_task", "label": "Add Task", "method": "POST"}, {"key": "complete_task", "label": "Complete", "method": "PATCH"}],
        [{"key": "title", "label": "Task title", "type": "text", "required": True}, {"key": "due_at", "label": "Due date", "type": "date", "required": False}],
        {"list": "/api/tasks", "create": "/api/tasks"},
    ),
    _module(
        "reports",
        "Reports",
        "analytics",
        "pro",
        "Performance, pipeline, campaign, revenue, and operational reports.",
        [
            {"key": "name", "label": "Report", "type": TEXT},
            {"key": "period", "label": "Period", "type": TEXT},
            {"key": "metric", "label": "Metric", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1801, "name": "Pipeline forecast", "period": "May 2026", "metric": "$18,400", "status": "ready"},
            {"id": 1802, "name": "Campaign performance", "period": "Last 30 days", "metric": "12.8% conversion", "status": "ready"},
        ],
        [{"key": "generate_report", "label": "Generate Report", "method": "POST"}, {"key": "export_report", "label": "Export CSV", "method": "GET"}],
        [{"key": "report_type", "label": "Report type", "type": "select", "options": ["Pipeline", "Revenue", "Campaigns", "Tasks"], "required": True}],
        {"list": "/api/analytics/overview", "create": "/api/reports"},
    ),
    _module(
        "team",
        "Team",
        "admin",
        "pro",
        "Users, roles, assignments, permissions, and seat management.",
        [
            {"key": "name", "label": "Name", "type": TEXT},
            {"key": "role", "label": "Role", "type": TEXT},
            {"key": "plan_access", "label": "Access", "type": STATUS},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 1901, "name": "Robert Green", "role": "admin", "plan_access": "founders", "status": "active"},
            {"id": 1902, "name": "Sales Assistant", "role": "member", "plan_access": "pro", "status": "invited"},
        ],
        [{"key": "invite_user", "label": "Invite User", "method": "POST"}, {"key": "change_role", "label": "Change Role", "method": "PATCH"}],
        [{"key": "email", "label": "Email", "type": "email", "required": True}, {"key": "role", "label": "Role", "type": "select", "options": ["admin", "manager", "member"], "required": True}],
        {"list": "/api/users", "create": "/api/users/invite"},
    ),
    _module(
        "integrations",
        "Integrations",
        "settings",
        "pro",
        "Connected tools for email, SMS, calendar, payments, domains, and AI systems.",
        [
            {"key": "name", "label": "Integration", "type": TEXT},
            {"key": "category", "label": "Category", "type": TEXT},
            {"key": "env_key", "label": "Environment Key", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 2001, "name": "Stripe", "category": "Payments", "env_key": "STRIPE_SECRET_KEY", "status": "not_connected"},
            {"id": 2002, "name": "Twilio", "category": "Voice/SMS", "env_key": "TWILIO_AUTH_TOKEN", "status": "not_connected"},
            {"id": 2003, "name": "OpenAI", "category": "AI", "env_key": "OPENAI_API_KEY", "status": "configured_if_env_present"},
        ],
        [{"key": "connect", "label": "Connect", "method": "POST"}, {"key": "test", "label": "Test Connection", "method": "POST"}],
        [{"key": "provider", "label": "Provider", "type": "select", "options": ["Stripe", "Twilio", "OpenAI", "Composio", "Firecrawl"], "required": True}],
        {"list": "/api/integrations", "create": "/api/integrations"},
    ),
    _module(
        "settings",
        "Settings",
        "settings",
        "pro",
        "Business profile, preferences, notifications, security, and workspace defaults.",
        [
            {"key": "setting", "label": "Setting", "type": TEXT},
            {"key": "value", "label": "Value", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 2101, "setting": "Business profile", "value": "PEN2PRO", "status": "active"},
            {"id": 2102, "setting": "Admin access", "value": "ADMIN_ACCESS_KEY", "status": "required"},
        ],
        [{"key": "save_settings", "label": "Save Settings", "method": "PATCH"}, {"key": "security_review", "label": "Security Review", "method": "GET"}],
        [{"key": "business_name", "label": "Business name", "type": "text", "required": True}, {"key": "timezone", "label": "Timezone", "type": "text", "required": True}],
        {"list": "/api/settings", "update": "/api/settings"},
    ),
    _module(
        "billing",
        "Billing",
        "settings",
        "pro",
        "Plan, invoices, payment method, subscriptions, and Founders access.",
        [
            {"key": "plan", "label": "Plan", "type": TEXT},
            {"key": "amount", "label": "Amount", "type": MONEY},
            {"key": "renewal", "label": "Renewal", "type": DATE},
            {"key": "status", "label": "Status", "type": STATUS},
        ],
        [
            {"id": 2201, "plan": "Free Forever", "amount": 0, "renewal": "N/A", "status": "active"},
            {"id": 2202, "plan": "Founders Lifetime", "amount": 497, "renewal": "Lifetime", "status": "waitlist"},
        ],
        [{"key": "upgrade", "label": "Upgrade", "method": "POST"}, {"key": "manage_billing", "label": "Manage Billing", "method": "POST"}],
        [{"key": "plan", "label": "Plan", "type": "select", "options": ["free", "pro", "elite", "founders"], "required": True}],
        {"list": "/api/pricing", "create": "/api/stripe/create-checkout-session"},
        None,
        {
            "pro": "Pro customer payment status, subscription upgrade path, and billing records.",
            "elite": "Elite subscription, advanced usage, voice, automation, and payment operations.",
            "founders": "Lifetime access, founder status, and full billing controls.",
        },
    ),
    _module(
        "admin",
        "Admin",
        "admin",
        "founders",
        "Owner view of waitlist, metrics, users, feature access, and operating controls.",
        [
            {"key": "area", "label": "Area", "type": TEXT},
            {"key": "metric", "label": "Metric", "type": TEXT},
            {"key": "status", "label": "Status", "type": STATUS},
            {"key": "action", "label": "Action", "type": TEXT},
        ],
        [
            {"id": 2301, "area": "Waitlist", "metric": "Lead collection", "status": "active", "action": "Review signups"},
            {"id": 2302, "area": "Access control", "metric": "Role override", "status": "active", "action": "Admin unlocks all"},
            {"id": 2303, "area": "Agent runs", "metric": "Operational readiness", "status": "draft", "action": "Add observability"},
        ],
        [{"key": "view_waitlist", "label": "View Waitlist", "method": "GET"}, {"key": "export", "label": "Export", "method": "GET"}],
        [],
        {"list": "/api/admin/metrics", "waitlist": "/api/admin/waitlist"},
    ),
]


STORE_PATH = Path(
    os.getenv(
        "DASHBOARD_RECORD_STORE",
        str(Path(__file__).resolve().parents[2] / ".local" / "dashboard_records.json"),
    )
)


def _module_by_key(module_key: str) -> dict[str, Any] | None:
    return next((item for item in DASHBOARD_MODULES if item["key"] == module_key), None)


def _load_store() -> dict[str, list[dict[str, Any]]]:
    if not STORE_PATH.exists():
        return {}
    try:
        payload = json.loads(STORE_PATH.read_text())
    except (OSError, json.JSONDecodeError):
        return {}
    return payload if isinstance(payload, dict) else {}


def _save_store(store: dict[str, list[dict[str, Any]]]) -> None:
    STORE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STORE_PATH.write_text(json.dumps(store, indent=2, sort_keys=True))


def get_module_records(module_key: str) -> list[dict[str, Any]]:
    module = _module_by_key(module_key)
    if not module:
        return []
    store = _load_store()
    return deepcopy(store.get(module_key) or module["records"])


def create_module_record(module_key: str, payload: dict[str, Any], user_plan: str = "free", user_role: str = "member") -> dict[str, Any] | None:
    module = _module_by_key(module_key)
    if not module or not access_payload(module, user_plan, user_role)["unlocked"]:
        return None
    store = _load_store()
    records = store.get(module_key) or deepcopy(module["records"])
    record = _normalize_record(module_key, payload)
    records.insert(0, record)
    store[module_key] = records
    _save_store(store)
    return record


def update_module_record(module_key: str, record_id: str, payload: dict[str, Any], user_plan: str = "free", user_role: str = "member") -> dict[str, Any] | None:
    module = _module_by_key(module_key)
    if not module or not access_payload(module, user_plan, user_role)["unlocked"]:
        return None
    store = _load_store()
    records = store.get(module_key) or deepcopy(module["records"])
    for index, record in enumerate(records):
        if str(record.get("id")) == str(record_id):
            records[index] = {**record, **payload, "updated_at": _now()}
            store[module_key] = records
            _save_store(store)
            return records[index]
    return None


def delete_module_record(module_key: str, record_id: str, user_plan: str = "free", user_role: str = "member") -> bool:
    module = _module_by_key(module_key)
    if not module or not access_payload(module, user_plan, user_role)["unlocked"]:
        return False
    store = _load_store()
    records = store.get(module_key) or deepcopy(module["records"])
    next_records = [record for record in records if str(record.get("id")) != str(record_id)]
    if len(next_records) == len(records):
        return False
    store[module_key] = next_records
    _save_store(store)
    return True


def export_module_csv(module_key: str) -> str | None:
    module = _module_by_key(module_key)
    if not module:
        return None
    records = get_module_records(module_key)
    columns = ["id", *[column["key"] for column in module["columns"]], "status", "created_at", "updated_at"]
    output = io.StringIO()
    writer = csv.DictWriter(output, fieldnames=list(dict.fromkeys(columns)), extrasaction="ignore")
    writer.writeheader()
    writer.writerows(records)
    return output.getvalue()


def _normalize_record(module_key: str, payload: dict[str, Any]) -> dict[str, Any]:
    record = {key: value for key, value in payload.items() if value not in (None, "")}
    record["id"] = record.get("id") or str(uuid.uuid4())
    record["status"] = record.get("status") or _default_status(module_key)
    record["created_at"] = record.get("created_at") or _now()
    record["updated_at"] = _now()
    _apply_customer_payment_defaults(module_key, record)
    return record


def _default_status(module_key: str) -> str:
    if module_key in {"payments", "invoices", "estimates"}:
        return "draft"
    if module_key in {"contacts", "lead-inbox", "pipeline"}:
        return "new"
    return "active"


def _apply_customer_payment_defaults(module_key: str, record: dict[str, Any]) -> None:
    if module_key == "payments":
        record.setdefault("customer", record.get("name", "Customer"))
        record.setdefault("method", "Stripe link")
        record["amount"] = _coerce_money(record.get("amount"))
    if module_key == "invoices":
        record.setdefault("number", f"INV-{str(record['id'])[:8].upper()}")
        record.setdefault("customer", record.get("name", "Customer"))
        record["balance"] = _coerce_money(record.get("balance") or record.get("amount"))
    if module_key == "estimates":
        record.setdefault("number", f"EST-{str(record['id'])[:8].upper()}")
        record.setdefault("customer", record.get("name", "Customer"))
        record["amount"] = _coerce_money(record.get("amount"))


def _coerce_money(value: Any) -> float:
    try:
        return float(value or 0)
    except (TypeError, ValueError):
        return 0.0


def list_dashboard_modules(user_plan: str = "free", user_role: str = "member") -> dict[str, Any]:
    return {
        "user_plan": normalize_plan(user_plan),
        "user_role": normalize_role(user_role),
        "modules": [module_summary(module, user_plan, user_role) for module in DASHBOARD_MODULES],
    }


def get_dashboard_module(module_key: str, user_plan: str = "free", user_role: str = "member") -> dict[str, Any] | None:
    module = _module_by_key(module_key)
    if not module:
        return None
    result = deepcopy(module)
    result["records"] = get_module_records(module_key)
    result["access"] = access_payload(module, user_plan, user_role)
    result["metrics"] = result["metrics"] or module_metrics(result)
    return result


def module_summary(module: dict[str, Any], user_plan: str, user_role: str) -> dict[str, Any]:
    return {
        "key": module["key"],
        "label": module["label"],
        "section": module["section"],
        "required_plan": module["required_plan"],
        "description": module["description"],
        "plan_scope": module.get("plan_scope", {}),
        "access": access_payload(module, user_plan, user_role),
    }


def module_metrics(module: dict[str, Any]) -> list[dict[str, Any]]:
    records = module.get("records", [])
    money_total = 0.0
    for row in records:
        for key in ("amount", "balance", "value"):
            if key in row:
                money_total += _coerce_money(row.get(key))
                break
    metrics = [
        {"label": "Records", "value": len(records)},
        {"label": "Required Plan", "value": module.get("required_plan", "free")},
        {"label": "Live Store", "value": "Local JSON"},
    ]
    if money_total:
        metrics.insert(1, {"label": "Customer Value", "value": f"${money_total:,.0f}"})
    return metrics


def access_payload(module: dict[str, Any], user_plan: str, user_role: str) -> dict[str, Any]:
    normalized_plan = normalize_plan(user_plan)
    normalized_role = normalize_role(user_role)
    unlocked = normalized_role == "admin" or normalized_plan == "founders" or PLAN_RANK[normalized_plan] >= PLAN_RANK[module["required_plan"]]
    return {
        "unlocked": unlocked,
        "reason": "admin_unlock" if normalized_role == "admin" else ("plan_access" if unlocked else "upgrade_required"),
        "user_plan": normalized_plan,
        "user_role": normalized_role,
        "required_plan": module["required_plan"],
    }


def normalize_plan(plan: str | None) -> str:
    normalized = (plan or "free").strip().lower()
    return normalized if normalized in PLAN_RANK else "free"


def normalize_role(role: str | None) -> str:
    normalized = (role or "member").strip().lower()
    return "admin" if normalized == "admin" else "member"
