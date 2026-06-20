import { Link } from "react-router-dom";

export default function Sidebar({ modules = [], activeKey = "", user = {} }) {
  const grouped = modules.reduce((acc, item) => {
    const section = item.section || "Workspace";
    acc[section] = acc[section] || [];
    acc[section].push(item);
    return acc;
  }, {});

  return (
    <aside className="p2p-sidebar">
      <Link to="/" className="p2p-brand">PEN2PRO</Link>
      <div className="p2p-user-card">
        <div className="p2p-avatar">{(user?.name || "U").slice(0, 1).toUpperCase()}</div>
        <div>
          <strong>{user?.name || "User"}</strong>
          <span>{user?.tier || "free"} plan</span>
        </div>
      </div>
      {Object.entries(grouped).map(([section, items]) => (
        <div className="p2p-nav-section" key={section}>
          <p>{section}</p>
          {items.map((item) => (
            <Link
              key={item.key}
              className={`p2p-nav-link ${activeKey === item.key ? "active" : ""}`}
              to={item.key === "overview" ? "/dashboard" : `/dashboard/${item.key}`}
            >
              <span>{item.label}</span>
              {item.required_plan && item.required_plan !== "free" && (
                <small>{item.required_plan}</small>
              )}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
