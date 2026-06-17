import { Link, useLocation } from "react-router-dom";

const NAV_SECTIONS = [
  {
    section: "Core",
    items: [
      { label: "Dashboard", path: "/dashboard", icon: "⚡" },
    ],
  },
  {
    section: "RMIE",
    items: [
      { label: "Starter", path: "/starter", icon: "🚀" },
      { label: "Builder", path: "/builder", icon: "🔨" },
      { label: "Accelerator", path: "/accelerator", icon: "📈" },
    ],
  },
  {
    section: "CRM",
    items: [
      { label: "Contacts", path: "/dashboard/contacts", icon: "👥" },
      { label: "Lead Inbox", path: "/dashboard/lead-inbox", icon: "📥" },
      { label: "Pipeline", path: "/dashboard/pipeline", icon: "🎯" },
    ],
  },
  {
    section: "Resources",
    items: [
      { label: "Funding", path: "/funding", icon: "💰" },
      { label: "Credit Repair", path: "/credit-repair", icon: "📊" },
      { label: "Affiliate", path: "/affiliate", icon: "🤝" },
    ],
  },
  {
    section: "Settings",
    items: [
      { label: "Settings", path: "/dashboard/settings", icon: "⚙️" },
    ],
  },
];

export default function Sidebar({ user }) {
  const loc = useLocation();
  const isActive = (path) =>
    path === "/dashboard"
      ? loc.pathname === "/dashboard"
      : loc.pathname.startsWith(path);

  const initials = (user?.name || "R").slice(0, 1).toUpperCase();
  const tierLabel = ({ free: "Free", pro: "Pro", elite: "Elite", founders: "Founders" })[user?.tier] || "Free";

  return (
    <aside className="p2p-sidebar">
      <Link to="/" className="p2p-brand">
        PEN<span style={{ color: "#FF8A00" }}>2</span>PRO
      </Link>

      <div className="p2p-user-card">
        <div className="p2p-avatar">{initials}</div>
        <div>
          <strong>{user?.name || "Robert Green"}</strong>
          <span>{tierLabel} Plan</span>
        </div>
      </div>

      {NAV_SECTIONS.map(({ section, items }) => (
        <div className="p2p-nav-section" key={section}>
          <p>{section}</p>
          {items.map(({ label, path, icon }) => (
            <Link
              key={path}
              to={path}
              className={`p2p-nav-link ${isActive(path) ? "active" : ""}`}
            >
              <span>{icon} {label}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
