import { Link, useLocation } from "react-router-dom";

const NAV_SECTIONS = [
  {
    section: "Overview",
    items: [
      { label: "Dashboard", path: "/dashboard", icon: "▦" },
      { label: "My Blueprints", path: "/dashboard/blueprints", icon: "📋" },
    ],
  },
  {
    section: "Build",
    items: [
      { label: "Starter Roadmap", path: "/starter", icon: "🗺️" },
      { label: "Builder", path: "/builder", icon: "🏗️" },
      { label: "Accelerator", path: "/accelerator", icon: "🚀" },
      { label: "Website Builder", path: "/website-builder", icon: "🌐" },
    ],
  },
  {
    section: "Grow",
    items: [
      { label: "Lead Inbox", path: "/dashboard/lead-inbox", icon: "📬" },
      { label: "Pipeline", path: "/dashboard/pipeline", icon: "📊" },
      { label: "Contacts", path: "/dashboard/contacts", icon: "👥" },
      { label: "Outreach", path: "/dashboard/outreach", icon: "📣" },
    ],
  },
  {
    section: "Finance",
    items: [
      { label: "Invoices", path: "/dashboard/invoices", icon: "🧾" },
      { label: "Funding Readiness", path: "/funding", icon: "💰" },
      { label: "Credit Repair", path: "/credit-repair", icon: "💳" },
      { label: "Affiliate", path: "/affiliate", icon: "🤝" },
    ],
  },
  {
    section: "Account",
    items: [
      { label: "Settings", path: "/dashboard/settings", icon: "⚙️" },
      { label: "Upgrade Plan", path: "/pricing", icon: "⬆️" },
    ],
  },
];

export default function Sidebar({ collapsed = false }) {
  const location = useLocation();

  function isActive(path) {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  }

  return (
    <aside
      className={`flex flex-col bg-[#0F1520] border-r border-[#1A2D50] min-h-screen transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Brand */}
      <div
        className={`flex items-center gap-3 border-b border-[#1A2D50] px-4 py-5 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-black text-sm text-white"
          style={{ background: "linear-gradient(135deg, #1E88E5, #2d9cff)" }}
        >
          P
        </div>
        {!collapsed && (
          <Link
            to="/"
            className="font-display text-lg font-black tracking-widest"
            style={{
              background: "linear-gradient(90deg, #2d9cff, #00C9B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PEN2PRO
          </Link>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-5">
        {NAV_SECTIONS.map(({ section, items }) => (
          <div key={section}>
            {!collapsed && (
              <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                {section}
              </p>
            )}
            <ul className="space-y-0.5">
              {items.map(({ label, path, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    title={collapsed ? label : undefined}
                    className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                      isActive(path)
                        ? "bg-[#1A2D50] text-white"
                        : "text-slate-400 hover:bg-[#1A2235] hover:text-slate-200"
                    }`}
                  >
                    <span className="shrink-0 text-base leading-none">{icon}</span>
                    {!collapsed && <span>{label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Upgrade CTA */}
      {!collapsed && (
        <div className="border-t border-[#1A2D50] p-3">
          <Link
            to="/pricing"
            className="block rounded-xl px-4 py-2.5 text-center text-xs font-black text-[#080C14] transition hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
          >
            Upgrade to Pro
          </Link>
          <p className="mt-2 text-center text-[10px] text-slate-600">
            Pro · Elite · Founders
          </p>
        </div>
      )}
    </aside>
  );
}
