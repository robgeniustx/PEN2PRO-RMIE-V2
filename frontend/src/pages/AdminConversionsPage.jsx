import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics, getConversionSummary } from "../api/adminApi";

const ADMIN_NAV = [
  { label: "Overview", to: "/admin" },
  { label: "Waitlist", to: "/admin/waitlist" },
  { label: "Analytics", to: "/admin/analytics" },
  { label: "Feature Usage", to: "/admin/feature-usage" },
  { label: "Conversions", to: "/admin/conversions" },
];

function AdminKeyGate({ onUnlock }) {
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setErr("");
    sessionStorage.setItem("pen2pro_admin_key", input);
    onUnlock(input);
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#080C14" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
            P2P
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
          <p className="text-sm text-slate-500 mt-1">Enter your admin key to continue</p>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          {err && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{err}</div>
          )}
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Admin access key"
            className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
          />
          <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">Access Admin Panel</button>
        </form>
      </div>
    </div>
  );
}

function fmt(n) {
  if (n == null) return "—";
  if (typeof n === "number") return n.toLocaleString();
  return String(n);
}

function money(n) {
  if (n == null) return "—";
  return `$${Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function AdminConversionsPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [metrics, setMetrics] = useState(null);
  const [conv, setConv] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    setLoading(true);
    Promise.all([getAdminMetrics(), getConversionSummary()])
      .then(([m, c]) => { setMetrics(m); setConv(c); })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [key]);

  if (!key) return <AdminKeyGate onUnlock={setKey} />;

  const summary = conv || metrics?.conversion_summary || {};
  const revenue = metrics?.estimated_revenue;

  const FUNNEL_STEPS = [
    { label: "Visitors", value: summary.total_visitors ?? metrics?.total_visitors ?? "—", color: "#64748b" },
    { label: "Started Roadmap", value: summary.started_blueprint ?? metrics?.blueprints_started ?? "—", color: "#FF8A00" },
    { label: "Completed Blueprint", value: summary.completed_blueprint ?? metrics?.blueprints_generated ?? "—", color: "#1E88E5" },
    { label: "Joined Waitlist", value: summary.joined_waitlist ?? metrics?.total_signups ?? "—", color: "#00C9B1" },
    { label: "Upgraded to Pro", value: summary.upgraded_pro ?? metrics?.pro_count ?? "—", color: "#D4A017" },
    { label: "Upgraded to Elite", value: summary.upgraded_elite ?? metrics?.elite_count ?? "—", color: "#D4A017" },
    { label: "Founders", value: summary.upgraded_founders ?? metrics?.founders_count ?? "—", color: "#D4A017" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Conversions</h1>
            <p className="text-sm text-slate-500 mt-1">Revenue funnel &amp; upgrade signals</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ADMIN_NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg border border-[#1A2235] px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-[#D4A017]/40 hover:text-white"
                style={n.to === "/admin/conversions" ? { borderColor: "#D4A017", color: "#D4A017" } : {}}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { sessionStorage.removeItem("pen2pro_admin_key"); setKey(""); }}
              className="rounded-lg border border-[#1A2235] px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        {loading && <div className="py-20 text-center text-slate-500">Loading conversion data...</div>}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {(metrics || conv) && (
          <>
            {/* Revenue Snapshot */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Est. MRR", value: money(revenue?.mrr ?? revenue?.monthly_revenue), color: "#D4A017" },
                { label: "Est. ARR", value: money(revenue?.arr ?? revenue?.annual_revenue), color: "#D4A017" },
                { label: "Paid Subscribers", value: fmt(summary.total_paid ?? metrics?.paid_count), color: "#00C9B1" },
                { label: "Waitlist (Pre-Revenue)", value: fmt(metrics?.total_signups), color: "#FF8A00" },
              ].map((m, i) => (
                <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                  <p className="text-xs text-slate-500 mb-2">{m.label}</p>
                  <p className="font-display text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Conversion Funnel */}
            <div className="mb-8 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-6">Conversion Funnel</h2>
              <div className="space-y-3">
                {FUNNEL_STEPS.map((step, i) => {
                  const first = typeof FUNNEL_STEPS[0].value === "number" ? FUNNEL_STEPS[0].value : 1;
                  const pct = typeof step.value === "number" && first > 0
                    ? Math.round((step.value / first) * 100)
                    : null;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <p className="w-40 text-sm text-slate-300 shrink-0">{step.label}</p>
                      <div className="flex-1 h-2.5 rounded-full" style={{ background: "#1A2235" }}>
                        <div
                          className="h-2.5 rounded-full transition-all"
                          style={{ width: pct != null ? `${Math.max(2, pct)}%` : "2%", background: step.color }}
                        />
                      </div>
                      <p className="w-16 text-right text-sm font-bold text-white shrink-0">{fmt(step.value)}</p>
                      {pct != null && (
                        <p className="w-10 text-right text-xs text-slate-500 shrink-0">{pct}%</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Raw Conversion Summary */}
            {Object.keys(summary).length > 0 && (
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-5">Conversion Detail</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(summary).map(([k, v], i) => (
                    <div key={i} className="rounded-xl border border-[#1A2235] px-4 py-3" style={{ background: "#080C14" }}>
                      <p className="text-xs text-slate-500 capitalize mb-1">{k.replace(/_/g, " ")}</p>
                      <p className="text-sm font-bold text-white">{typeof v === "number" ? fmt(v) : String(v)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Object.keys(summary).length === 0 && !loading && (
              <div className="rounded-2xl border border-[#1A2235] p-12 text-center" style={{ background: "#0F1520" }}>
                <p className="text-slate-500 text-sm">No conversion data yet. Data appears after users start upgrading or completing blueprints.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
