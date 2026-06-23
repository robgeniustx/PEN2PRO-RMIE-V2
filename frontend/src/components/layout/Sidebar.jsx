import { Link, useLocation } from "react-router-dom";

const NAV_SECTIONS = [
  {
    label: "Core",
    items: [
      { label: "Dashboard",    path: "/dashboard",              plan: "free" },
      { label: "My Blueprint", path: "/dashboard/blueprint",    plan: "free" },
      { label: "Tasks",        path: "/dashboard/tasks",        plan: "free" },
    ],
  },
  {
    label: "CRM",
    items: [
      { label: "Contacts",   path: "/dashboard/contacts",   plan: "free" },
      { label: "Lead Inbox", path: "/dashboard/lead-inbox", plan: "free" },
      { label: "Pipeline",   path: "/dashboard/pipeline",   plan: "pro" },
    ],
  },
  {
    label: "Sales",
    items: [
      { label: "Estimates", path: "/dashboard/estimates", plan: "pro" },
      { label: "Invoices",  path: "/dashboard/invoices",  plan: "pro" },
      { label: "Payments",  path: "/dashboard/payments",  plan: "pro" },
    ],
  },
  {
    label: "Marketing",
    items: [
      { label: "Campaigns",  path: "/dashboard/campaigns",  plan: "pro" },
      { label: "Funnels",    path: "/dashboard/funnels",    plan: "elite" },
      { label: "Websites",   path: "/dashboard/websites",   plan: "pro" },
      { label: "Reputation", path: "/dashboard/reputation", plan: "elite" },
    ],
  },
  {
    label: "AI Tools",
    items: [
      { label: "Voice Agent",    path: "/voice-agent",     plan: "pro" },
      { label: "Builder",        path: "/builder",         plan: "free" },
      { label: "Accelerator",    path: "/accelerator",     plan: "pro" },
      { label: "Website Builder",path: "/website-builder", plan: "pro" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Credit Readiness", path: "/credit-repair", plan: "free" },
      { label: "Funding Readiness",path: "/funding",       plan: "free" },
      { label: "Affiliate Tools",  path: "/affiliate",     plan: "free" },
    ],
  },
  {
    label: "Settings",
    items: [
      { label: "Analytics",    path: "/dashboard/reports",       plan: "pro" },
      { label: "Integrations", path: "/dashboard/integrations",  plan: "pro" },
      { label: "Billing",      path: "/pricing",                 plan: "free" },
    ],
  },
];

const PLAN_RANK = { free: 0, starter: 0, pro: 1, elite: 2, founders: 3 };

function canAccess(itemPlan, userTier) {
  return (PLAN_RANK[userTier] ?? 0) >= (PLAN_RANK[itemPlan] ?? 0);
}

export default function Sidebar({ user, collapsed = false }) {
  const loc = useLocation();
  const tier = user?.tier || "free";

  function isActive(path) {
    if (path === "/dashboard") return loc.pathname === "/dashboard";
    return loc.pathname === path || loc.pathname.startsWith(path + "/");
  }

  return (
    <aside
      className="flex flex-col overflow-y-auto border-r shrink-0"
      style={{
        width: collapsed ? 56 : 220,
        background: "#0A0F1E",
        borderColor: "#1A2D50",
        minHeight: "100vh",
        transition: "width 0.2s ease",
      }}
    >
      {/* Brand */}
      <Link
        to="/"
        className="flex items-center gap-2.5 px-4 py-4 border-b shrink-0"
        style={{ borderColor: "#1A2D50" }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
          style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
        >
          <span className="text-sm leading-none">⚡</span>
        </div>
        {!collapsed && (
          <span className="font-display text-base font-black tracking-tight leading-none">
            <span style={{ color: "#FFFFFF" }}>PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </span>
        )}
      </Link>

      {/* User card */}
      {!collapsed && (
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{ borderColor: "#1A2D50" }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
          >
            {(user?.name || "U").slice(0, 1).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">{user?.name || "User"}</p>
            <p className="text-xs text-slate-500 capitalize">{tier} plan</p>
          </div>
        </div>
      )}

      {/* Nav sections */}
      <nav className="flex-1 py-3 px-2 space-y-1">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="mb-2">
            {!collapsed && (
              <p className="px-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                {section.label}
              </p>
            )}
            {section.items.map((item) => {
              const unlocked = canAccess(item.plan, tier);
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={unlocked ? item.path : "/pricing"}
                  title={collapsed ? item.label : undefined}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors mb-0.5 ${
                    active
                      ? "bg-[#1A2D50] text-[#FF8A00]"
                      : unlocked
                      ? "text-slate-400 hover:bg-[#0F1520] hover:text-white"
                      : "text-slate-600 cursor-pointer hover:bg-[#0F1520]"
                  }`}
                >
                  <span className="truncate">{!collapsed && item.label}</span>
                  {!collapsed && !unlocked && (
                    <span
                      className="ml-auto rounded px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide shrink-0"
                      style={{
                        background: "rgba(255,138,0,0.1)",
                        color: "#FF8A00",
                        border: "1px solid rgba(255,138,0,0.2)",
                      }}
                    >
                      {item.plan}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Upgrade CTA for free users */}
      {!collapsed && (tier === "free" || tier === "starter") && (
        <div className="p-3 border-t" style={{ borderColor: "#1A2D50" }}>
          <Link
            to="/pricing"
            className="block rounded-xl px-4 py-3 text-center text-xs font-black text-[#0A0F1E] btn-gold"
          >
            Upgrade to Pro
          </Link>
        </div>
      )}
    </aside>
  );
}
