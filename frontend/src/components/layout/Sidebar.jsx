import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ nav = [], user, collapsed = false }) {
  const loc = useLocation();
  const isActive = (path) =>
    path === "/dashboard"
      ? loc.pathname === "/dashboard"
      : loc.pathname.startsWith(path);

  const grouped = nav.reduce((acc, item) => {
    const section = item.section || "Menu";
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});

  return (
    <aside className="p2p-sidebar">
      <Link to="/" className="p2p-brand">
        {collapsed ? "P2" : (
          <>
            <span style={{ color: "#FFFFFF" }}>PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </>
        )}
      </Link>

      {user && !collapsed && (
        <div className="p2p-user-card">
          <div className="p2p-avatar">{(user.name || "U").slice(0, 1).toUpperCase()}</div>
          <div className="min-w-0">
            <strong className="block truncate text-sm">{user.name || "User"}</strong>
            <span className="text-xs capitalize text-slate-500">{user.tier || "free"} plan</span>
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-2">
        {Object.entries(grouped).map(([section, items]) => (
          <div key={section} className="p2p-nav-section">
            {!collapsed && <p className="px-3 mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">{section}</p>}
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                title={collapsed ? item.label : undefined}
                className={[
                  "p2p-nav-item",
                  isActive(item.path) ? "active" : "",
                  collapsed ? "justify-center px-2" : "",
                ].filter(Boolean).join(" ")}
              >
                {item.icon && <span className="shrink-0 text-base">{item.icon}</span>}
                {!collapsed && <span className="truncate">{item.label}</span>}
                {!collapsed && item.badge && (
                  <span className="ml-auto rounded-full bg-[#FF8A00] px-1.5 py-0.5 text-[10px] font-bold text-[#0A0F1E]">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {!collapsed && (
        <div className="border-t border-[#1A2235] p-3">
          <Link
            to="/pricing"
            className="block rounded-xl bg-gradient-to-r from-[#FF8A00]/10 to-[#D4A017]/10 border border-[#FF8A00]/20 px-3 py-2.5 text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A00]">Upgrade Plan</p>
            <p className="text-[11px] text-slate-500">Pro · Elite · Founders</p>
          </Link>
        </div>
      )}
    </aside>
  );
}
