import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_NAV, normalizePlan, userCanAccess } from "../../data/dashboardModules";

function modulePath(key) {
  return key === "overview" ? "/dashboard" : `/dashboard/${key}`;
}

const SECTION_ICONS = {
  Core: "⚡",
  CRM: "👥",
  Operations: "📋",
  Communications: "💬",
  AI: "🤖",
  Sales: "💰",
  Automation: "⚙️",
  Marketing: "📣",
  Analytics: "📊",
  Settings: "🔧",
  Admin: "🛡️",
};

export default function Sidebar({ user }) {
  const loc = useLocation();
  const activeKey = (() => {
    const seg = loc.pathname.replace("/dashboard", "").replace(/^\//, "");
    return seg || "overview";
  })();

  const grouped = DASHBOARD_NAV.reduce((acc, item) => {
    const section = item.section || "Core";
    acc[section] = acc[section] || [];
    acc[section].push(item);
    return acc;
  }, {});

  return (
    <aside className="p2p-sidebar">
      {/* Brand */}
      <Link to="/" className="p2p-brand">
        <span style={{ color: "#FFFFFF" }}>PEN</span>
        <span style={{ color: "#FF8A00" }}>2</span>
        <span style={{ color: "#1E88E5" }}>PRO</span>
      </Link>

      {/* User card */}
      <div className="p2p-user-card">
        <div className="p2p-avatar">
          {(user?.name || "R").slice(0, 1).toUpperCase()}
        </div>
        <div>
          <strong>{user?.name || "Robert Green"}</strong>
          <span>
            {String(user?.role || "member").toLowerCase() === "admin"
              ? "Admin"
              : `${normalizePlan(user?.tier)} plan`}
          </span>
        </div>
      </div>

      {/* Nav sections */}
      {Object.entries(grouped).map(([section, items]) => (
        <div className="p2p-nav-section" key={section}>
          <p>
            <span className="mr-1.5 text-[10px]">{SECTION_ICONS[section] || "•"}</span>
            {section}
          </p>
          {items.map((item) => {
            const unlocked = userCanAccess(item.requiredPlan || item.required_plan, user);
            const isActive = activeKey === item.key;
            return (
              <Link
                key={item.key}
                className={`p2p-nav-link ${isActive ? "active" : ""} ${!unlocked ? "opacity-50" : ""}`}
                to={modulePath(item.key)}
                title={!unlocked ? `Requires ${item.requiredPlan || item.required_plan} plan` : item.label}
              >
                <span>{item.label}</span>
                {!unlocked && (
                  <small className="ml-auto shrink-0 rounded px-1 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#1A2D50] text-slate-400">
                    {item.requiredPlan || item.required_plan}
                  </small>
                )}
              </Link>
            );
          })}
        </div>
      ))}

      {/* Upgrade CTA for non-founders */}
      {user?.tier !== "founders" && user?.role !== "admin" && (
        <div className="mt-auto px-3 pb-4">
          <Link
            to="/pricing"
            className="block rounded-xl border border-[#D4A017]/30 bg-[#D4A017]/10 px-3 py-2.5 text-center text-xs font-bold text-[#D4A017] hover:bg-[#D4A017]/20 transition-colors"
          >
            ⚡ Upgrade Plan
          </Link>
        </div>
      )}
    </aside>
  );
}
