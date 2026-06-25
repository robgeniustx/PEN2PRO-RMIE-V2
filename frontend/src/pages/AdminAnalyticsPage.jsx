import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics } from "../api/adminApi";

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

export default function AdminAnalyticsPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    setLoading(true);
    getAdminMetrics()
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [key]);

  if (!key) return <AdminKeyGate onUnlock={setKey} />;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Analytics</h1>
            <p className="text-sm text-slate-500 mt-1">Event intelligence &amp; platform activity</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ADMIN_NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg border border-[#1A2235] px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-[#D4A017]/40 hover:text-white"
                style={n.to === "/admin/analytics" ? { borderColor: "#D4A017", color: "#D4A017" } : {}}
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

        {loading && <div className="py-20 text-center text-slate-500">Loading analytics...</div>}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error} — <button onClick={() => getAdminMetrics().then(setData)} className="underline">Retry</button>
          </div>
        )}

        {data && (
          <>
            {/* Summary Metric Cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Total Events", value: data.total_events ?? data.total_signups ?? 0, color: "#FF8A00" },
                { label: "Active Users", value: data.active_users ?? data.unique_visitors ?? "—", color: "#1E88E5" },
                { label: "Blueprints Generated", value: data.blueprints_generated ?? data.total_blueprints ?? "—", color: "#00C9B1" },
                { label: "Signups (7d)", value: data.signups_last_7_days ?? data.recent_signups ?? "—", color: "#D4A017" },
              ].map((m, i) => (
                <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                  <p className="text-xs text-slate-500 mb-2">{m.label}</p>
                  <p className="font-display text-3xl font-black" style={{ color: m.color }}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Tier Distribution */}
            {data.active_tier_counts && (
              <div className="mb-8 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-5">Tier Distribution</h2>
                <div className="space-y-4">
                  {Object.entries(data.active_tier_counts).map(([tier, count], i) => {
                    const total = Object.values(data.active_tier_counts).reduce((a, b) => a + b, 0);
                    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                    const colors = { free: "#FF8A00", pro: "#1E88E5", elite: "#00C9B1", founders: "#D4A017" };
                    const color = colors[tier.toLowerCase()] || "#64748b";
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <p className="w-20 text-sm capitalize text-slate-300">{tier}</p>
                        <div className="flex-1 h-2.5 rounded-full" style={{ background: "#1A2235" }}>
                          <div
                            className="h-2.5 rounded-full transition-all"
                            style={{ width: `${Math.max(3, pct)}%`, background: color }}
                          />
                        </div>
                        <p className="w-12 text-right text-sm font-bold text-white">{count}</p>
                        <p className="w-10 text-right text-xs text-slate-500">{pct}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Recent Activity */}
            {data.recent_activity && data.recent_activity.length > 0 && (
              <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2235]">
                  <h2 className="font-display text-lg font-bold text-white">Recent Activity</h2>
                  <span className="text-xs text-slate-500">{data.recent_activity.length} events</span>
                </div>
                <div className="divide-y divide-[#1A2235]">
                  {data.recent_activity.slice(0, 20).map((ev, i) => (
                    <div key={i} className="flex items-start gap-4 px-6 py-3 hover:bg-white/[0.02] transition">
                      <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#FF8A00]" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{ev.event || ev.action || "Event"}</p>
                        <p className="text-xs text-slate-500">{ev.user || ev.email || "Anonymous"}</p>
                      </div>
                      <p className="shrink-0 text-xs text-slate-500">
                        {ev.timestamp || ev.created_at
                          ? new Date(ev.timestamp || ev.created_at).toLocaleString()
                          : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!data.recent_activity?.length && !data.active_tier_counts && (
              <div className="rounded-2xl border border-[#1A2235] p-12 text-center" style={{ background: "#0F1520" }}>
                <p className="text-slate-500 text-sm">No analytics data available yet. Data populates as users interact with the platform.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
