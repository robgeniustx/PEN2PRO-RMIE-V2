export const PLAN_RANK = {
  free: 0,
  starter: 0,
  pro: 1,
  elite: 2,
  founders: 3,
};

export const DASHBOARD_NAV = [
  { key: "overview", label: "Dashboard", requiredPlan: "free", section: "Core" },
  { key: "contacts", label: "Contacts", requiredPlan: "free", section: "CRM" },
  { key: "lead-inbox", label: "Lead Inbox", requiredPlan: "free", section: "CRM" },
  { key: "pipeline", label: "Pipeline", requiredPlan: "pro", section: "CRM" },
  { key: "calendar", label: "Calendar", requiredPlan: "pro", section: "Operations" },
  { key: "messages", label: "Messages", requiredPlan: "pro", section: "Communications" },
  { key: "calls", label: "Calls", requiredPlan: "pro", section: "Communications" },
  { key: "ai-voice-agent", label: "AI Voice Agent", requiredPlan: "elite", section: "AI" },
  { key: "estimates", label: "Estimates", requiredPlan: "pro", section: "Sales" },
  { key: "invoices", label: "Invoices", requiredPlan: "pro", section: "Sales" },
  { key: "payments", label: "Payments", requiredPlan: "pro", section: "Sales" },
  { key: "automations", label: "Automations", requiredPlan: "pro", section: "Automation" },
  { key: "campaigns", label: "Campaigns", requiredPlan: "pro", section: "Marketing" },
  { key: "funnels", label: "Funnels", requiredPlan: "elite", section: "Marketing" },
  { key: "websites", label: "Websites", requiredPlan: "elite", section: "Marketing" },
  { key: "domains", label: "Domains", requiredPlan: "elite", section: "Marketing" },
  { key: "reputation", label: "Reputation", requiredPlan: "elite", section: "Marketing" },
  { key: "tasks", label: "Tasks", requiredPlan: "free", section: "Operations" },
  { key: "reports", label: "Reports", requiredPlan: "pro", section: "Analytics" },
  { key: "team", label: "Team", requiredPlan: "pro", section: "Admin" },
  { key: "integrations", label: "Integrations", requiredPlan: "pro", section: "Settings" },
  { key: "settings", label: "Settings", requiredPlan: "pro", section: "Settings" },
  { key: "billing", label: "Billing", requiredPlan: "pro", section: "Settings" },
  { key: "admin", label: "Admin", requiredPlan: "founders", section: "Admin" },
];

const MODULE_COPY = {
  overview: "Command view of roadmaps, leads, revenue activity, and next actions.",
  contacts: "People and companies tied to leads, clients, partners, and vendors.",
  "lead-inbox": "Incoming opportunities from forms, calls, ads, referrals, and manual entry.",
  pipeline: "Deal stages, values, probabilities, and close dates.",
  calendar: "Appointments, follow-ups, job schedules, and sales calls.",
  messages: "Two-way email, SMS, and web chat conversations.",
  calls: "Call history, summaries, missed-call text back, and booking outcomes.",
  "ai-voice-agent": "AI phone assistant for intake, qualification, booking, summaries, and CRM updates.",
  estimates: "Professional estimates and proposal drafts tied to leads and deals.",
  invoices: "Invoices, due dates, balances, and collection status.",
  payments: "Payment links, payment status, deposits, and Stripe-ready records.",
  automations: "Rules, follow-up sequences, reminders, and workflow logic.",
  campaigns: "Email, SMS, social, and outbound campaigns tied to offers.",
  funnels: "Lead magnets, landing pages, bookings, upsells, and conversion paths.",
  websites: "Website builder projects, landing pages, SEO sections, and publishing status.",
  domains: "Domain search, connection, DNS readiness, and affiliate registrar links.",
  reputation: "Review requests, response templates, ratings, and customer proof.",
  tasks: "Action items, owners, due dates, and execution tracking.",
  reports: "Performance, pipeline, campaign, revenue, and operational reports.",
  team: "Users, roles, assignments, permissions, and seat management.",
  integrations: "Connected tools for email, SMS, calendar, payments, domains, and AI systems.",
  settings: "Business profile, preferences, notifications, security, and workspace defaults.",
  billing: "Plan, invoices, payment method, subscriptions, and Founders access.",
  admin: "Owner view of waitlist, metrics, users, feature access, and operating controls.",
};

const SAMPLE_ROWS = {
  overview: [
    { id: 1, name: "Starter blueprint", status: "active", owner: "Robert", next_action: "Generate or update roadmap" },
    { id: 2, name: "Lead inbox", status: "needs_review", owner: "Sales", next_action: "Review new leads" },
  ],
  contacts: [
    { id: 101, name: "Maria Johnson", company: "Oak Ridge Apartments", email: "maria@example.com", status: "prospect" },
    { id: 102, name: "David Ellis", company: "Ellis Logistics", email: "david@example.com", status: "customer" },
  ],
  "lead-inbox": [
    { id: 201, name: "Baytown property manager", source: "Website", interest: "Pressure washing bid", score: 84, status: "new" },
    { id: 202, name: "Veteran founder", source: "Waitlist", interest: "Funding help", score: 76, status: "qualified" },
  ],
  pipeline: [
    { id: 301, deal: "Apartment complex exterior cleaning", stage: "proposal", value: 8200, probability: "55%" },
    { id: 302, deal: "PEN2PRO Elite upgrade", stage: "qualified", value: 499, probability: "70%" },
  ],
};

export function normalizePlan(plan = "free") {
  const normalized = String(plan || "free").toLowerCase();
  return PLAN_RANK[normalized] === undefined ? "free" : normalized;
}

export function userCanAccess(requiredPlan, user = {}) {
  const role = String(user?.role || "member").toLowerCase();
  const plan = normalizePlan(user?.tier || user?.plan || "free");
  if (role === "admin") return true;
  if (plan === "founders") return true;
  return PLAN_RANK[plan] >= PLAN_RANK[requiredPlan || "free"];
}

export function getFallbackModule(key = "overview", user = {}) {
  const nav = DASHBOARD_NAV.find((item) => item.key === key) || DASHBOARD_NAV[0];
  const columns = Object.keys(SAMPLE_ROWS[nav.key]?.[0] || {
    name: "",
    status: "",
    owner: "",
    next_action: "",
  })
    .filter((column) => column !== "id")
    .map((column) => ({ key: column, label: column.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()), type: "text" }));

  return {
    key: nav.key,
    label: nav.label,
    section: nav.section,
    required_plan: nav.requiredPlan,
    description: MODULE_COPY[nav.key],
    columns,
    records: SAMPLE_ROWS[nav.key] || [
      { id: `${nav.key}-1`, name: `${nav.label} workspace`, status: "ready", owner: "PEN2PRO", next_action: "Connect live API data" },
      { id: `${nav.key}-2`, name: `${nav.label} sample record`, status: "draft", owner: "Robert", next_action: "Create first live record" },
    ],
    actions: [
      { key: "create", label: `Add ${nav.label.replace(/s$/, "")}`, method: "POST" },
      { key: "export", label: "Export", method: "GET" },
      { key: "settings", label: "Settings", method: "PATCH" },
    ],
    form_schema: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "status", label: "Status", type: "select", options: ["draft", "active", "pending", "complete"], required: true },
    ],
    endpoints: {
      list: `/api/dashboard/modules/${nav.key}`,
      create: `/api/${nav.key}`,
      update: `/api/${nav.key}/{id}`,
    },
    metrics: [
      { label: "Records", value: SAMPLE_ROWS[nav.key]?.length || 2 },
      { label: "Access", value: userCanAccess(nav.requiredPlan, user) ? "Unlocked" : "Upgrade" },
      { label: "Required", value: nav.requiredPlan },
    ],
    access: {
      unlocked: userCanAccess(nav.requiredPlan, user),
      reason: String(user?.role).toLowerCase() === "admin" ? "admin_unlock" : "plan_access",
      user_plan: normalizePlan(user?.tier || user?.plan || "free"),
      user_role: user?.role || "member",
      required_plan: nav.requiredPlan,
    },
  };
}
