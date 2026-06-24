import { Link, useLocation } from "react-router-dom";

const DEFAULT_NAV = [
  { section: "Workspace", items: [
    { label: "Overview",     path: "/dashboard",          icon: "📊" },
    { label: "Blueprint",    path: "/dashboard/blueprint", icon: "🗺️" },
    { label: "Builder",      path: "/builder",             icon: "🏗️" },
    { label: "Accelerator",  path: "/accelerator",         icon: "🚀" },
  ]},
  { section: "Growth", items: [
    { label: "Funding",      path: "/funding",             icon: "💳" },
    { label: "Credit",       path: "/credit-repair",       icon: "📈" },
    { label: "Affiliate",    path: "/affiliate",           icon: "🤝" },
  ]},
  { section: "Platform", items: [
    { label: "Pricing",      path: "/pricing",             icon: "💰" },
    { label: "Settings",     path: "/dashboard/settings",  icon: "⚙️" },
  ]},
];

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "{}");
  } catch {
    return {};
  }
}

export default function Sidebar({ nav = DEFAULT_NAV }) {
  const { pathname } = useLocation();
  const user = getUser();

  const isActive = (path) =>
    path === "/dashboard"
      ? pathname === "/dashboard"
      : pathname === path || pathname.startsWith(path + "/");

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-[#1A2235] bg-[#0A0F1E] min-h-screen">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2.5 px-5 py-5 border-b border-[#1A2235]">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-xl text-sm"
          style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
        >
          ⚡
        </div>
        <span className="font-display text-lg font-black tracking-tight">
          <span className="text-white">PEN</span>
          <span style={{ color: "#FF8A00" }}>2</span>
          <span style={{ color: "#1E88E5" }}>PRO</span>
        </span>
      </Link>

      {/* User card */}
      <div className="mx-3 my-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
          >
            {(user?.name || "U").slice(0, 1).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white leading-none">
              {user?.name || "Account"}
            </p>
            <p className="mt-0.5 text-xs capitalize text-[#FF8A00]">
              {user?.tier || "free"} plan
            </p>
          </div>
        </div>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {nav.map((section) => (
          <div key={section.section} className="mb-4">
            <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              {section.section}
            </p>
            {section.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mb-0.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive(item.path)
                    ? "bg-[#1A2D50] text-[#FF8A00]"
                    : "text-slate-400 hover:bg-[#0F1520] hover:text-white"
                }`}
              >
                <span className="text-base leading-none">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {/* Upgrade CTA for free users */}
      {(!user?.tier || user.tier === "free") && (
        <div className="m-3 rounded-xl border border-[#D4A017]/30 bg-[#15120a] p-4">
          <p className="text-xs font-bold text-[#D4A017] mb-1">Upgrade to Pro</p>
          <p className="text-xs text-slate-500 mb-3">Unlock full roadmaps, branding, and export tools.</p>
          <Link
            to="/pro"
            className="block w-full rounded-lg py-2 text-center text-xs font-black text-[#080C14]"
            style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
          >
            Upgrade Now
          </Link>
        </div>
      )}
    </aside>
  );
}
