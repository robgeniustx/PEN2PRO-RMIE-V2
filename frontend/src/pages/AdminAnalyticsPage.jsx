import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getAdminMetrics } from "../api/adminApi";

function MetricCard({ label, value, color = "#FF8A00" }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color }}>{value ?? "—"}</p>
    </div>
  );
}

function TierBar({ label, count, total, color }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-400 mb-1">
        <span className="font-bold capitalize">{label}</span>
        <span>{count} ({pct}%)</span>
      </div>
      <div className="h-2 rounded-full bg-[#1A2235]">
        <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

const TIER_COLORS = { free: "#475569", pro: "#D4A017", elite: "#00C9B1", founders: "#FF8A00" };

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    getAdminMetrics().then(setMetrics);
  }, []);

  const totalUsers = metrics
    ? Object.values(metrics.active_tier_counts || {}).reduce((a, b) => a + b, 0)
    : 0;

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link to="/admin" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">
            ← Admin
          </Link>
          <h1 className="font-display text-2xl font-black text-white">Analytics Overview</h1>
        </div>

        {!metrics ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 rounded-full border-2 border-t-[#FF8A00] border-[#1A2D50] animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <MetricCard label="Total Users" value={metrics.total_users} color="#FF8A00" />
              <MetricCard label="Blueprints" value={metrics.total_blueprints} color="#1E88E5" />
              <MetricCard label="Events" value={metrics.total_events} color="#00C9B1" />
              <MetricCard label="Est. Revenue" value={`$${(metrics.estimated_revenue || 0).toLocaleString()}`} color="#D4A017" />
            </div>

            {/* Tier distribution */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="font-display text-lg font-black text-white mb-4">User Tier Distribution</h2>
              <div className="space-y-4">
                {Object.entries(metrics.active_tier_counts || {}).map(([tier, count]) => (
                  <TierBar
                    key={tier}
                    label={tier}
                    count={count}
                    total={totalUsers}
                    color={TIER_COLORS[tier] || "#475569"}
                  />
                ))}
              </div>
            </div>

            {/* Top features */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="font-display text-lg font-black text-white mb-4">Top Features</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2D50] text-left text-xs text-slate-500 uppercase tracking-widest">
                      <th className="pb-3 pr-4">Feature</th>
                      <th className="pb-3 pr-4">Module</th>
                      <th className="pb-3 pr-4">Uses</th>
                      <th className="pb-3">Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(metrics.top_features || []).map((f, i) => (
                      <tr key={i} className="border-b border-[#1A2235] text-slate-300">
                        <td className="py-3 pr-4 font-semibold">{f.feature_name}</td>
                        <td className="py-3 pr-4 text-slate-500">{f.module_name}</td>
                        <td className="py-3 pr-4 text-[#FF8A00] font-bold">{f.usage_count}</td>
                        <td className="py-3 capitalize text-xs">{f.tier}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Funnel */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="font-display text-lg font-black text-white mb-4">Conversion Funnel</h2>
              <div className="space-y-2">
                {Object.entries(metrics.funnel_summary || {}).map(([step, count]) => (
                  <div key={step} className="flex justify-between py-2 border-b border-[#1A2235] text-sm">
                    <span className="text-slate-400 capitalize">{step.replace(/_/g, " ")}</span>
                    <span className="font-bold text-white">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
