import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createDashboardRecord,
  dashboardExportUrl,
  deleteDashboardRecord,
  getDashboardModule,
  listDashboardModules,
} from "../api/dashboardApi";
import { DASHBOARD_NAV, normalizePlan, userCanAccess } from "../data/dashboardModules";

function getStoredUser() {
  try {
    const stored = JSON.parse(localStorage.getItem("pen2pro_user") || "null");
    if (stored) return stored;
  } catch {
    return null;
  }
  return { name: "Guest", email: "", tier: "free", role: "member" };
}

function formatValue(value, type) {
  if (type === "money" && typeof value === "number") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
  }
  return value ?? "-";
}

function moneyValue(value) {
  const number = Number(value || 0);
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(number);
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

function ModuleTable({ module, onDelete }) {
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
              <td>
                <button className="p2p-icon-button" type="button">Open</button>
                {module.access?.unlocked && (
                  <button className="p2p-icon-button danger" type="button" onClick={() => onDelete(row.id)}>
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModuleForm({ module, onCreate, busy }) {
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
      <button className="p2p-primary" disabled={busy || !module.access?.unlocked}>
        {busy ? "Saving..." : `Save ${module.label.replace(/s$/, "")}`}
      </button>
    </form>
  );
}

function PlanScope({ module }) {
  const scope = module.plan_scope || {};
  if (!Object.keys(scope).length) return null;
  return (
    <section className="p2p-plan-scope">
      {["pro", "elite", "founders"].map((plan) => scope[plan] && (
        <article key={plan}>
          <strong>{plan}</strong>
          <span>{scope[plan]}</span>
        </article>
      ))}
    </section>
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

const MODULE_INTENT = {
  overview: { title: "Operating Snapshot", tone: "Roadmaps, leads, revenue, tasks, and next actions in one command view." },
  contacts: { title: "Customer Relationship Desk", tone: "Search, add, export, and organize every customer, lead, partner, or vendor." },
  "lead-inbox": { title: "Lead Intake Desk", tone: "Capture website, call, form, referral, and manual leads before they go cold." },
  pipeline: { title: "Revenue Pipeline", tone: "Move deals from new lead to won, while tracking value and close probability." },
  calendar: { title: "Scheduling Center", tone: "Keep appointments, follow-ups, site visits, sales calls, and jobs organized." },
  messages: { title: "Conversation Hub", tone: "Track SMS, email, web chat, and customer replies from one place." },
  calls: { title: "Call Command", tone: "Review call history, missed calls, outcomes, and voice-agent follow-up paths." },
  "ai-voice-agent": { title: "P2P AI Voice Setup", tone: "Configure intake, missed-call response, lead capture, and upgrade-ready voice workflows." },
  estimates: { title: "Estimate Builder", tone: "Create customer-specific estimates and proposal drafts tied to pipeline deals." },
  invoices: { title: "Invoice Desk", tone: "Issue invoices, track balances, and prepare payment collection workflows." },
  payments: { title: "Customer Payments", tone: "Create customer payment records, deposits, Stripe-ready payment links, and text-to-pay workflows." },
  automations: { title: "Automation Builder", tone: "Build follow-up logic, reminders, missed-call recovery, and nurture workflows." },
  campaigns: { title: "Campaign Studio", tone: "Plan email, SMS, social, and outbound campaigns connected to offers and leads." },
  funnels: { title: "Funnel Builder", tone: "Design lead magnets, booking paths, upsells, and conversion flows for Elite and Founders." },
  websites: { title: "Website Builder", tone: "Manage website projects, service pages, SEO status, publishing, and connected domains." },
  domains: { title: "Domain Control", tone: "Search, connect, and monitor domains for PEN2PRO-built sites and funnels." },
  reputation: { title: "Reputation Desk", tone: "Send review requests, track ratings, and draft professional customer responses." },
  tasks: { title: "Execution Board", tone: "Create tasks, assign owners, and keep business launch actions moving." },
  reports: { title: "Reports Center", tone: "Analyze pipeline, revenue, campaigns, payments, and operational performance." },
  team: { title: "Team Control", tone: "Manage roles, seats, assignments, and workspace access." },
  integrations: { title: "Integration Hub", tone: "Connect Stripe, Twilio, OpenAI, email, calendars, domains, and automation systems." },
  settings: { title: "Workspace Settings", tone: "Configure business profile, security, notifications, timezone, and workspace defaults." },
  billing: { title: "Plan & Billing", tone: "Track plan access, subscription state, customer payments, and Founders lifetime status." },
  admin: { title: "Owner Admin", tone: "Control waitlist, users, feature access, exports, and operating metrics." },
};

function FieldPreview({ module }) {
  return (
    <div className="p2p-field-preview">
      {(module.form_schema || []).slice(0, 5).map((field) => (
        <span key={field.key}>{field.label}</span>
      ))}
    </div>
  );
}

function CommandSummary({ module, records }) {
  const intent = MODULE_INTENT[module.key] || { title: module.label, tone: module.description };
  const active = records.filter((record) => ["active", "open", "new", "pending", "qualified", "sent", "partial"].includes(String(record.status || record.stage || "").toLowerCase())).length;
  const money = records.reduce((sum, row) => sum + Number(row.amount || row.balance || row.value || 0), 0);

  return (
    <section className="p2p-command-hero">
      <div>
        <p>{module.section || "workspace"}</p>
        <h2>{intent.title}</h2>
        <span>{intent.tone}</span>
      </div>
      <div className="p2p-command-score">
        <strong>{records.length}</strong>
        <span>records</span>
        <strong>{active}</strong>
        <span>active</span>
        {money > 0 && <><strong>{moneyValue(money)}</strong><span>customer value</span></>}
      </div>
    </section>
  );
}

function CardGrid({ module, records, onDelete }) {
  const columns = module.columns || [];
  return (
    <div className="p2p-card-grid">
      {records.map((row) => (
        <article className="p2p-record-card" key={row.id}>
          <header>
            <strong>{row.name || row.customer || row.deal || row.title || row.agent_name || row.domain || row.plan || module.label}</strong>
            <span>{row.status || row.stage || row.outcome || "active"}</span>
          </header>
          <div>
            {columns.slice(0, 4).map((column) => (
              <p key={column.key}>
                <small>{column.label}</small>
                <b>{formatValue(row[column.key], column.type)}</b>
              </p>
            ))}
          </div>
          <footer>
            <button type="button">Open</button>
            {module.access?.unlocked && <button type="button" onClick={() => onDelete(row.id)}>Delete</button>}
          </footer>
        </article>
      ))}
    </div>
  );
}

function PipelineBoard({ module, records, onDelete }) {
  const stages = ["new", "qualified", "proposal", "sent", "won"];
  return (
    <div className="p2p-kanban">
      {stages.map((stage) => {
        const stageRows = records.filter((row) => String(row.stage || row.status || "").toLowerCase().includes(stage));
        return (
          <section key={stage}>
            <h3>{stage}<span>{stageRows.length}</span></h3>
            {(stageRows.length ? stageRows : records.slice(0, 1)).map((row) => (
              <article key={`${stage}-${row.id}`}>
                <strong>{row.deal || row.name || row.customer || "Pipeline item"}</strong>
                <p>{moneyValue(row.value || row.amount || row.balance)} · {row.probability || row.status || "ready"}</p>
                {module.access?.unlocked && <button type="button" onClick={() => onDelete(row.id)}>Remove</button>}
              </article>
            ))}
          </section>
        );
      })}
    </div>
  );
}

function PaymentConsole({ module, records }) {
  const total = records.reduce((sum, row) => sum + Number(row.amount || row.balance || 0), 0);
  const pending = records.filter((row) => ["pending", "partial", "sent", "overdue", "draft"].includes(String(row.status || "").toLowerCase())).length;
  return (
    <div className="p2p-payment-console">
      <article><span>Total tracked</span><strong>{moneyValue(total)}</strong></article>
      <article><span>Needs action</span><strong>{pending}</strong></article>
      <article><span>Payment path</span><strong>Stripe + text-to-pay ready</strong></article>
      <article><span>Plan access</span><strong>{module.required_plan}+ customer payments</strong></article>
    </div>
  );
}

function VoiceConsole({ module }) {
  return (
    <div className="p2p-voice-console">
      {[
        ["Provider", "Twilio + ElevenLabs"],
        ["Pro mode", "P2P AI Voice (Basic)"],
        ["Elite mode", "Summaries, booking, CRM updates"],
        ["Webhook", "/api/voice-agent/incoming"],
      ].map(([label, value]) => (
        <article key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </article>
      ))}
      <Link to="/voice-agent">Open Voice Studio</Link>
      <Link to="/dashboard/calls">Review Calls</Link>
      <Link to="/dashboard/integrations">Check Integrations</Link>
      <FieldPreview module={module} />
    </div>
  );
}

function WebsiteConsole({ module }) {
  return (
    <div className="p2p-website-console">
      {["Site intake", "Service pages", "SEO metadata", "Domain review", "Publish checklist"].map((step, index) => (
        <article key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </article>
      ))}
      <Link to="/website-builder/editor">Open Website Editor</Link>
      <Link to="/dashboard/domains">Manage Domains</Link>
      <Link to="/dashboard/funnels">Build Funnel</Link>
      <FieldPreview module={module} />
    </div>
  );
}

function AutomationConsole({ records }) {
  return (
    <div className="p2p-flow-list">
      {records.map((row) => (
        <article key={row.id}>
          <strong>{row.name || row.title || row.setting}</strong>
          <span>{row.trigger || row.period || row.metric || row.value || row.status}</span>
        </article>
      ))}
    </div>
  );
}

function ModuleExperience({ module, records, onDelete }) {
  if (["pipeline"].includes(module.key)) return <PipelineBoard module={module} records={records} onDelete={onDelete} />;
  if (["payments", "invoices", "estimates", "billing"].includes(module.key)) return <><PaymentConsole module={module} records={records} /><CardGrid module={module} records={records} onDelete={onDelete} /></>;
  if (module.key === "ai-voice-agent") return <><VoiceConsole module={module} /><CardGrid module={module} records={records} onDelete={onDelete} /></>;
  if (module.key === "websites") return <><WebsiteConsole module={module} /><CardGrid module={module} records={records} onDelete={onDelete} /></>;
  if (["automations", "campaigns", "reports", "tasks", "integrations", "settings", "admin"].includes(module.key)) return <><AutomationConsole records={records} /><CardGrid module={module} records={records} onDelete={onDelete} /></>;
  return <CardGrid module={module} records={records} onDelete={onDelete} />;
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
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
    const token = localStorage.getItem("pen2pro_token");
    async function loadUser() {
      let nextUser = getStoredUser();
      if (token) {
        try {
          const res = await fetch(`${API_BASE}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
          if (res.ok) {
            const data = await res.json();
            nextUser = data;
            localStorage.setItem("pen2pro_user", JSON.stringify(data));
          }
        } catch { /* backend unreachable — use stored */ }
      }
      setUser(nextUser);
      listDashboardModules(nextUser).then((payload) => setModules(payload.modules || []));
    }
    loadUser();
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

  async function handleCreate(nextRecord) {
    if (!activeModule.access?.unlocked) {
      setNotice(`${activeModule.label} requires ${activeModule.required_plan}. Upgrade or use admin access to save records.`);
      return;
    }
    setBusy(true);
    try {
      const payload = await createDashboardRecord(activeModule.key, nextRecord, user);
      setRecords(payload.records || [payload.record, ...records]);
      setNotice(`${activeModule.label} record saved to the Command Center backend.`);
    } catch (error) {
      setNotice(error.message || "Unable to save this Command Center record.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(recordId) {
    setBusy(true);
    try {
      const payload = await deleteDashboardRecord(activeModule.key, recordId, user);
      setRecords(payload.records || records.filter((record) => record.id !== recordId));
      setNotice(`${activeModule.label} record deleted.`);
    } catch (error) {
      setNotice(error.message || "Unable to delete this Command Center record.");
    } finally {
      setBusy(false);
    }
  }

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
        <PlanScope module={activeModule} />
        {notice && <div className="p2p-inline-notice">{notice}</div>}
        <CommandSummary module={activeModule} records={records} />

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
              <h2>{activeModule.label} Workspace</h2>
              <a className="p2p-secondary" href={dashboardExportUrl(activeModule.key, user)}>
                Export CSV
              </a>
            </div>
            <ModuleExperience module={visibleModule} records={records} onDelete={handleDelete} />
          </div>
          <ModuleForm
            module={activeModule}
            busy={busy}
            onCreate={handleCreate}
          />
          <div className="p2p-panel">
            <h3>Table View</h3>
            <ModuleTable module={visibleModule} onDelete={handleDelete} />
          </div>
          <ApiPanel module={activeModule} />
        </section>
      </main>
    </div>
  );
}
