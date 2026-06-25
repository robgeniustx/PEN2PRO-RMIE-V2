import { Link, useLocation } from "react-router-dom";

const SECTIONS = [
  {
    title: "Workspace",
    items: [
      { label: "Overview", path: "/dashboard", icon: "⚡" },
      { label: "Blueprint", path: "/dashboard/blueprint", icon: "📋" },
      { label: "Roadmap", path: "/dashboard/roadmap", icon: "🗺️" },
    ],
  },
  {
    title: "Business Tools",
    items: [
      { label: "Contacts", path: "/dashboard/contacts", icon: "👥" },
      { label: "Lead Inbox", path: "/dashboard/lead-inbox", icon: "📥" },
      { label: "Pipeline", path: "/dashboard/pipeline", icon: "📊" },
      { label: "Invoices", path: "/dashboard/invoices", icon: "🧾" },
    ],
  },
  {
    title: "Growth",
    items: [
      { label: "Social", path: "/dashboard/social", icon: "📱" },
      { label: "Funnels", path: "/dashboard/funnels", icon: "🔀" },
      { label: "Outreach", path: "/dashboard/outreach", icon: "📤" },
      { label: "Automations", path: "/dashboard/automations", icon: "⚙️" },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "Funding", path: "/funding", icon: "💰" },
      { label: "Credit", path: "/credit-repair", icon: "📈" },
      { label: "Affiliate", path: "/affiliate", icon: "🤝" },
    ],
  },
];

export default function Sidebar({ collapsed = false }) {
  const { pathname } = useLocation();

  return (
    <aside
      className={`flex flex-col bg-[#0F1520] border-r border-[#1A2D50] transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      } min-h-screen`}
    >
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-4 border-b border-[#1A2D50] shrink-0"
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
          style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
        >
          <span className="text-sm">⚡</span>
        </div>
        {!collapsed && (
          <span className="font-black text-base leading-none">
            <span className="text-white">PEN</span>
            <span className="text-[#FF8A00]">2</span>
            <span className="text-[#1E88E5]">PRO</span>
          </span>
        )}
      </Link>

      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {SECTIONS.map((section) => (
          <div key={section.title} className="mb-5">
            {!collapsed && (
              <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {section.title}
              </p>
            )}
            {section.items.map((item) => {
              const active = pathname === item.path || pathname.startsWith(item.path + "/");
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.label : undefined}
                  className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-semibold transition-colors mb-0.5 ${
                    active
                      ? "bg-[#1A2D50] text-[#FF8A00]"
                      : "text-slate-400 hover:bg-[#1A2235] hover:text-white"
                  }`}
                >
                  <span className="text-base shrink-0">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="border-t border-[#1A2D50] p-3 shrink-0">
        <Link
          to="/pricing"
          className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#FF8A00] hover:bg-[#1A2235] transition-colors ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <span className="shrink-0">⬆️</span>
          {!collapsed && <span>Upgrade Plan</span>}
        </Link>
      </div>
    </aside>
  );
}
