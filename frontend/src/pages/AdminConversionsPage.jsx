import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";

const TIER_COLORS = {
  pro: "#1E88E5",
  elite: "#FF8A00",
  founders: "#D4A017",
  free: "#64748b",
};

function StatCard({ label, value, sub, color = "#FF8A00" }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{label}</p>
      <p className="text-3xl font-black" style={{ color }}>{value ?? "—"}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch(() => setMetrics(null))
      .finally(() => setLoading(false));
  }, []);

  const conv = metrics?.conversion_summary || {};
  const revenue = metrics?.estimated_revenue;
  const tierCounts = metrics?.active_tier_counts || {};

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Header */}
      <div className="border-b border-[#1A2D50] bg-[#0A0F1E] px-6 py-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Link to="/admin" className="text-slate-500 hover:text-slate-300 text-sm">← Admin</Link>
            <span className="text-slate-700">/</span>
            <span className="text-sm text-white font-semibold">Conversions</span>
          </div>
          <h1 className="text-2xl font-black text-white">Conversion Summary</h1>
          <p className="text-sm text-slate-400 mt-0.5">Revenue, tier conversions, and upgrade tracking.</p>
        </div>
        <button
          onClick={() => { setLoading(true); getAdminMetrics().then(setMetrics).finally(() => setLoading(false)); }}
          className="rounded-xl border border-[#1A2D50] px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          ↻ Refresh
        </button>
      </div>

      <div className="px-6 py-8 space-y-8 max-w-6xl">

        {loading && (
          <div className="text-center py-20 text-slate-500">Loading conversion data…</div>
        )}

        {!loading && !metrics && (
          <div className="rounded-2xl border border-red-900/40 bg-red-950/20 p-6 text-center">
            <p className="text-red-400 font-semibold">Could not load metrics.</p>
            <p className="text-slate-500 text-sm mt-1">Check that the backend API is running and admin credentials are set.</p>
          </div>
        )}

        {!loading && metrics && (
          <>
            {/* Top stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Estimated Revenue"
                value={revenue != null ? `$${Number(revenue).toLocaleString()}` : "—"}
                sub="All-time estimated"
                color="#D4A017"
              />
              <StatCard
                label="Pro Subscribers"
                value={tierCounts.pro ?? conv.pro ?? "—"}
                sub="Active Pro accounts"
                color="#1E88E5"
              />
              <StatCard
                label="Elite Subscribers"
                value={tierCounts.elite ?? conv.elite ?? "—"}
                sub="Active Elite accounts"
                color="#FF8A00"
              />
              <StatCard
                label="Founders Members"
                value={tierCounts.founders ?? conv.founders ?? "—"}
                sub="Lifetime access"
                color="#D4A017"
              />
            </div>

            {/* Tier breakdown */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="text-lg font-black text-white mb-4">Tier Distribution</h2>
              <div className="space-y-4">
                {Object.entries({ free: tierCounts.free, pro: tierCounts.pro, elite: tierCounts.elite, founders: tierCounts.founders })
                  .filter(([, v]) => v !== undefined)
                  .map(([tier, count]) => {
                    const total = Object.values(tierCounts).reduce((a, b) => a + (b || 0), 0) || 1;
                    const pct = Math.round(((count || 0) / total) * 100);
                    return (
                      <div key={tier}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-semibold text-white capitalize">{tier}</span>
                          <span className="text-slate-400">{count ?? 0} users ({pct}%)</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#1A2D50] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${pct}%`, background: TIER_COLORS[tier] || "#64748b" }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Raw conversion summary */}
            {Object.keys(conv).length > 0 && (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="text-lg font-black text-white mb-4">Raw Conversion Data</h2>
                <div className="overflow-auto">
                  <pre className="text-xs text-slate-400 leading-relaxed font-mono whitespace-pre-wrap">
                    {JSON.stringify(conv, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
