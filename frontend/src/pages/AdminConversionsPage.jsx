import { useEffect, useState } from "react";
import { getAdminMetrics } from "../api/adminApi";
import { Link } from "react-router-dom";

function MetricTile({ label, value, sub, accent }) {
  return (
    <div className="rounded-xl border p-5" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent || "#1E88E5" }}>{label}</p>
      <p className="text-3xl font-black text-white">{value ?? "—"}</p>
      {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
    </div>
  );
}

function FunnelBar({ label, count, total, accent }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-300 font-medium">{label}</span>
        <span className="text-white font-bold">{count?.toLocaleString() ?? 0}</span>
      </div>
      <div className="h-2 rounded-full" style={{ background: "#1A2D50" }}>
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: accent || "#1E88E5" }}
        />
      </div>
      <p className="text-xs text-slate-600">{pct}% of visitors</p>
    </div>
  );
}

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch((e) => setError(e.message || "Failed to load metrics"))
      .finally(() => setLoading(false));
  }, []);

  const cs = metrics?.conversion_summary || {};
  const visitors = cs.visitors || cs.total_visitors || 0;
  const starters = cs.starter_sessions || cs.roadmap_starts || 0;
  const blueprints = cs.blueprints_generated || 0;
  const waitlist = cs.waitlist_signups || metrics?.total_waitlist || 0;
  const paid = cs.paid_conversions || cs.paid_upgrades || 0;
  const revenue = metrics?.estimated_revenue;

  return (
    <div className="min-h-screen p-6 space-y-8" style={{ background: "#080C14", color: "#E2E8F0" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Admin</p>
          <h1 className="text-2xl font-black text-white">Conversion Metrics</h1>
          <p className="text-sm text-slate-500 mt-1">Funnel performance and revenue summary</p>
        </div>
        <div className="flex gap-3">
          <Link to="/admin" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 border border-[#1A2D50] hover:text-white">
            ← Dashboard
          </Link>
          <Link to="/admin/analytics" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 border border-[#1A2D50] hover:text-white">
            Analytics
          </Link>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-24">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#1E88E5] border-t-transparent" />
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/30 p-4 text-sm text-red-400" style={{ background: "rgba(239,68,68,0.06)" }}>
          {error}
        </div>
      )}

      {!loading && metrics && (
        <>
          {/* KPI Row */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricTile label="Est. Revenue" value={revenue ? `$${Number(revenue).toLocaleString()}` : "—"} sub="All-time" accent="#D4A017" />
            <MetricTile label="Paid Upgrades" value={paid} sub="Pro / Elite / Founders" accent="#059669" />
            <MetricTile label="Waitlist Leads" value={waitlist} sub="Captured emails" accent="#7C3AED" />
            <MetricTile label="Blueprints Gen." value={blueprints} sub="Free + paid" accent="#1E88E5" />
          </div>

          {/* Funnel */}
          <div className="rounded-2xl border p-6 space-y-6" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
            <h2 className="text-base font-bold text-white">Conversion Funnel</h2>
            <div className="space-y-5">
              <FunnelBar label="Visitors" count={visitors} total={visitors} accent="#1E88E5" />
              <FunnelBar label="Roadmap Started" count={starters} total={visitors} accent="#00C9B1" />
              <FunnelBar label="Blueprint Generated" count={blueprints} total={visitors} accent="#7C3AED" />
              <FunnelBar label="Waitlist Joined" count={waitlist} total={visitors} accent="#D4A017" />
              <FunnelBar label="Paid Conversion" count={paid} total={visitors} accent="#059669" />
            </div>
          </div>

          {/* Tier Breakdown */}
          {cs.tier_breakdown && (
            <div className="rounded-2xl border p-6" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
              <h2 className="text-base font-bold text-white mb-4">Paid Tier Breakdown</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {Object.entries(cs.tier_breakdown).map(([tier, count]) => (
                  <div key={tier} className="rounded-xl border p-4 text-center" style={{ borderColor: "#1A2D50", background: "#080C14" }}>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{tier}</p>
                    <p className="text-2xl font-black text-white">{count}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Raw fallback if no structured data */}
          {!visitors && !paid && !waitlist && (
            <div className="rounded-xl border p-5" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Raw Summary</p>
              <pre className="text-xs text-slate-400 overflow-auto whitespace-pre-wrap">
                {JSON.stringify(metrics?.conversion_summary || metrics || {}, null, 2)}
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
