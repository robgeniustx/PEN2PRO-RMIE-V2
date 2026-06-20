import { Link, useLocation } from "react-router-dom";

const NAV = [
  {
    section: "Core",
    items: [
      { key: "overview",    label: "Dashboard",        path: "/dashboard",               icon: "⚡" },
      { key: "starter",     label: "My Blueprints",    path: "/starter",                 icon: "🗺️" },
    ],
  },
  {
    section: "Business Tools",
    items: [
      { key: "builder",     label: "Builder",          path: "/builder",                 icon: "🏗️" },
      { key: "accelerator", label: "Accelerator",      path: "/accelerator",             icon: "🚀" },
      { key: "funding",     label: "Funding Readiness",path: "/funding",                 icon: "💳" },
      { key: "credit",      label: "Credit Readiness", path: "/credit-repair",           icon: "📊" },
      { key: "affiliate",   label: "Affiliate Tools",  path: "/affiliate",               icon: "🔗" },
    ],
  },
  {
    section: "Plans",
    items: [
      { key: "pro",         label: "Pro",              path: "/pro",                     icon: "🔵" },
      { key: "elite",       label: "Elite",            path: "/elite",                   icon: "🥇" },
      { key: "founders",    label: "Founders",         path: "/founders",                icon: "♾️" },
    ],
  },
  {
    section: "Account",
    items: [
      { key: "pricing",     label: "Upgrade",          path: "/pricing",                 icon: "⬆️" },
      { key: "waitlist",    label: "Waitlist",         path: "/waitlist",                icon: "📋" },
    ],
  },
];

export default function Sidebar({ user }) {
  const loc = useLocation();
  const initial = (user?.name || "R").slice(0, 1).toUpperCase();
  const tier = String(user?.tier || "free");

  return (
    <aside
      className="flex flex-col gap-0 border-r border-[#1A2235]"
      style={{ background: "#0B101A", width: 240, minHeight: "100vh" }}
    >
      {/* Brand */}
      <Link
        to="/"
        className="flex items-center gap-2.5 px-5 py-4 shrink-0"
        style={{ borderBottom: "1px solid #1A2235" }}
      >
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base"
          style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 14px rgba(30,136,229,0.3)" }}
        >
          ⚡
        </div>
        <span className="text-base font-black leading-none">
          <span style={{ color: "#FFF" }}>PEN</span>
          <span style={{ color: "#FF8A00" }}>2</span>
          <span style={{ color: "#1E88E5" }}>PRO</span>
        </span>
      </Link>

      {/* User card */}
      <div className="mx-3 my-3 flex items-center gap-2.5 rounded-xl border border-[#1A2235] bg-[#101827] px-3 py-2.5 shrink-0">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black"
          style={{ background: "#D4A017", color: "#0B101A" }}
        >
          {initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white leading-tight">{user?.name || "Guest"}</p>
          <p className="text-[11px] text-slate-500 capitalize">{tier} plan</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        {NAV.map((group) => (
          <div key={group.section} className="mb-4">
            <p className="mb-1.5 px-2 text-[10px] font-black uppercase tracking-widest text-slate-600">
              {group.section}
            </p>
            {group.items.map((item) => {
              const active = loc.pathname === item.path || loc.pathname.startsWith(item.path + "/");
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors"
                  style={{
                    color: active ? "#fff" : "#94a3b8",
                    background: active ? "#141c2b" : "transparent",
                    boxShadow: active ? "inset 3px 0 0 #D4A017" : "none",
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
