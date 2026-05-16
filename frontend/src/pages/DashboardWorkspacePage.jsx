import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDashboardModule, listDashboardModules } from "../api/dashboardApi";
import { DASHBOARD_NAV, normalizePlan, userCanAccess } from "../data/dashboardModules";

function getStoredUser() {
  try {
    const stored = JSON.parse(localStorage.getItem("pen2pro_user") || "null");
    if (stored) return stored;
  } catch {
    return null;
  }
  return { name: "Robert Green", email: "", tier: "free", role: "member" };
}

function formatValue(value, type) {
  if (type === "money" && typeof value === "number") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
  }
  return value ?? "-";
}

function modulePath(key) {
  return key === "overview" ? "/dashboard" : `/dashboard/${key}`;
}

function Sidebar({ modules, activeKey, user }) {
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
        <div className="p2p-avatar">{(user?.name || "R").slice(0, 1).toUpperCase()}</div>
        <div>
          <strong>{user?.name || "Robert Green"}</strong>
          <span>{String(user?.role || "member").toLowerCase() === "admin" ? "Admin unlock" : `${normalizePlan(user?.tier)} plan`}</span>
        </div>
      </div>

      {Object.entries(grouped).map(([section, items]) => (
        <div className="p2p-nav-section" key={section}>
          <p>{section}</p>
          {items.map((item) => {
            const unlocked = item.access?.unlocked ?? userCanAccess(item.required_plan, user);
            return (
              <Link
                key={item.key}
                className={`p2p-nav-link ${activeKey === item.key ? "active" : ""}`}
                to={modulePath(item.key)}
              >
                <span>{item.label}</span>
                {!unlocked && <small>{item.required_plan}</small>}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}

function AccessBanner({ module, user }) {
  const access = module?.access;
  if (access?.unlocked) {
    return (
      <div className="p2p-access-banner unlocked">
        <strong>{access.reason === "admin_unlock" ? "Admin unlock active" : "Feature unlocked"}</strong>
        <span>
          {access.reason === "admin_unlock"
            ? "user.role = admin unlocks every PEN2PRO dashboard feature regardless of plan."
            : `Your ${access.user_plan} access includes this module.`}
        </span>
      </div>
    );
  }

  return (
    <div className="p2p-access-banner locked">
      <strong>{module.label} requires {module.required_plan}</strong>
      <span>Preview the structure below, then upgrade to activate live records, actions, and automation.</span>
      <Link to="/pricing">View upgrade options</Link>
    </div>
  );
}

function ModuleTable({ module }) {
  return (
    <div className="p2p-table-wrap">
      <table className="p2p-table">
        <thead>
          <tr>
            {module.columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {module.records.map((row) => (
            <tr key={row.id}>
              {module.columns.map((column) => (
                <td key={column.key}>
                  <span className={column.type === "status" ? "p2p-status" : ""}>
                    {formatValue(row[column.key], column.type)}
                  </span>
                </td>
              ))}
              <td><button className="p2p-icon-button">Open</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModuleForm({ module, onCreate }) {
  const fields = module.form_schema || [];
  if (!fields.length) {
    return (
      <div className="p2p-panel">
        <h3>Controls</h3>
        <p className="p2p-muted">This module is read-focused. Use the actions above or connect the listed API endpoints.</p>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextRecord = { id: Date.now() };
    fields.forEach((field) => {
      nextRecord[field.key] = form.get(field.key) || "";
    });
    nextRecord.status = nextRecord.status || "draft";
    onCreate(nextRecord);
    event.currentTarget.reset();
  }

  return (
    <form className="p2p-panel" onSubmit={handleSubmit}>
      <h3>{module.label} Form</h3>
      <div className="p2p-form-grid">
        {fields.map((field) => (
          <label key={field.key}>
            <span>{field.label}</span>
            {field.type === "textarea" ? (
              <textarea name={field.key} placeholder={field.label} required={field.required} />
            ) : field.type === "select" ? (
              <select name={field.key} defaultValue="" required={field.required}>
                <option value="" disabled>Select {field.label}</option>
                {(field.options || ["draft", "active"]).map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input name={field.key} type={field.type || "text"} placeholder={field.label} required={field.required} />
            )}
          </label>
        ))}
      </div>
      <button className="p2p-primary">Save {module.label.replace(/s$/, "")}</button>
    </form>
  );
}

function ApiPanel({ module }) {
  return (
    <div className="p2p-panel">
      <h3>API-Ready Structure</h3>
      <div className="p2p-endpoints">
        {Object.entries(module.endpoints || {}).map(([key, path]) => (
          <div key={key}>
            <span>{key}</span>
            <code>{path}</code>
          </div>
        ))}
      </div>
      <pre>{JSON.stringify({
        module: module.key,
        required_plan: module.required_plan,
        columns: module.columns,
        form_schema: module.form_schema,
      }, null, 2)}</pre>
    </div>
  );
}

export default function DashboardWorkspacePage() {
  const params = useParams();
  const navigate = useNavigate();
  const activeKey = params.moduleKey || "overview";
  const [user, setUser] = useState(getStoredUser());
  const [modules, setModules] = useState(DASHBOARD_NAV.map((item) => ({
    key: item.key,
    label: item.label,
    section: item.section,
    required_plan: item.requiredPlan,
    access: { unlocked: userCanAccess(item.requiredPlan, user) },
  })));
  const [module, setModule] = useState(null);
  const [records, setRecords] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const nextUser = getStoredUser();
    setUser(nextUser);
    listDashboardModules(nextUser).then((payload) => setModules(payload.modules || []));
  }, []);

  useEffect(() => {
    if (!DASHBOARD_NAV.some((item) => item.key === activeKey)) {
      navigate("/dashboard", { replace: true });
      return;
    }
    getDashboardModule(activeKey, user).then((payload) => {
      setModule(payload);
      setRecords(payload.records || []);
      setNotice("");
    });
  }, [activeKey, navigate, user]);

  const activeModule = useMemo(() => module || { key: activeKey, label: "Dashboard", records: [], columns: [], actions: [], metrics: [] }, [module, activeKey]);
  const visibleModule = useMemo(() => ({ ...activeModule, records }), [activeModule, records]);
  const actionButtons = activeModule.actions || [];

  return (
    <div className="p2p-dashboard">
      <Sidebar modules={modules} activeKey={activeModule.key} user={user} />
      <main className="p2p-main">
        <header className="p2p-topbar">
          <div>
            <p className="p2p-eyebrow">PEN2PRO BusinessOS</p>
            <h1>{activeModule.label}</h1>
            <span>{activeModule.description}</span>
          </div>
          <div className="p2p-top-actions">
            <Link to="/starter">New Blueprint</Link>
            <Link to="/pricing">Upgrade</Link>
          </div>
        </header>

        <AccessBanner module={activeModule} user={user} />
        {notice && <div className="p2p-inline-notice">{notice}</div>}

        <section className="p2p-metrics">
          {(activeModule.metrics?.length ? activeModule.metrics : [
            { label: "Records", value: records.length || 0 },
            { label: "Required Plan", value: activeModule.required_plan || "free" },
            { label: "Access", value: activeModule.access?.unlocked ? "Unlocked" : "Locked" },
          ]).map((metric) => (
            <div className="p2p-metric" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </section>

        <section className="p2p-actions-row">
          {actionButtons.map((action) => (
            <button
              type="button"
              key={action.key}
              onClick={() => setNotice(`${action.label} is wired as ${action.method} ${activeModule.endpoints?.create || activeModule.endpoints?.list || "/api/dashboard"}.`)}
            >
              {action.label}<span>{action.method}</span>
            </button>
          ))}
        </section>

        <section className="p2p-content-grid">
          <div className="p2p-panel wide">
            <div className="p2p-panel-head">
              <h2>{activeModule.label} Records</h2>
              <button className="p2p-secondary">Export CSV</button>
            </div>
            <ModuleTable module={visibleModule} />
          </div>
          <ModuleForm
            module={activeModule}
            onCreate={(nextRecord) => {
              setRecords((current) => [nextRecord, ...current]);
              setNotice(`${activeModule.label} record added locally. Next step is persisting it through ${activeModule.endpoints?.create || "/api/dashboard"}.`);
            }}
          />
          <ApiPanel module={activeModule} />
        </section>
      </main>
    </div>
  );
}
