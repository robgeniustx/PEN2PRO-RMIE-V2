import { Link, useLocation } from "react-router-dom";

const SIDEBAR_LINKS = [
  { icon: "🏠", label: "Dashboard", path: "/dashboard" },
  { icon: "🗺️", label: "My Roadmap", path: "/dashboard/roadmap" },
  { icon: "📊", label: "Progress", path: "/dashboard/progress" },
  { icon: "💳", label: "Credit Readiness", path: "/credit-repair" },
  { icon: "💰", label: "Funding", path: "/funding" },
  { icon: "🤝", label: "Affiliate", path: "/affiliate" },
  { icon: "⚙️", label: "Settings", path: "/dashboard/settings" },
];

export default function Sidebar({ collapsed = false }) {
  const loc = useLocation();
  const isActive = (path) =>
    loc.pathname === path || loc.pathname.startsWith(path + "/");

  return (
    <aside
      className={`flex flex-col border-r border-[#1A2D50] bg-[#0A0F1E] transition-all duration-300 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      <nav className="flex-1 py-6 px-2 space-y-1">
        {SIDEBAR_LINKS.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
              isActive(l.path)
                ? "bg-[#1A2D50] text-[#FF8A00]"
                : "text-slate-400 hover:bg-[#0F1520] hover:text-white"
            }`}
          >
            <span className="text-lg shrink-0">{l.icon}</span>
            {!collapsed && <span>{l.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="border-t border-[#1A2D50] p-3">
        <Link
          to="/pricing"
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-black text-[#080C14] btn-gold ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <span className="text-lg shrink-0">⚡</span>
          {!collapsed && <span>Upgrade Plan</span>}
        </Link>
      </div>
    </aside>
  );
}
