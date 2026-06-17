import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";

function StatCard({ label, value, sub, color = "#D4A017" }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</p>
      <p className="mt-2 font-display text-3xl font-black" style={{ color }}>{value ?? "—"}</p>
      {sub && <p className="mt-1 text-xs text-slate-600">{sub}</p>}
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch(() => setError("Unable to load analytics. Check your API connection."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Admin</p>
            <h1 className="mt-1 font-display text-3xl font-black text-white">Analytics</h1>
          </div>
          <div className="flex gap-3">
            <Link to="/admin" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition">
              ← Dashboard
            </Link>
            <Link to="/admin/waitlist" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition">
              Waitlist
            </Link>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-24 text-slate-500">
            <span className="animate-pulse text-sm">Loading analytics…</span>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {metrics && (
          <div className="space-y-8">
            {/* Top stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Total Users" value={metrics.total_users} />
              <StatCard label="Total Blueprints" value={metrics.total_blueprints} color="#00C9B1" />
              <StatCard label="Waitlist Signups" value={metrics.waitlist_count} color="#7C3AED" />
              <StatCard
                label="Est. Revenue"
                value={metrics.estimated_revenue ? `$${Number(metrics.estimated_revenue).toLocaleString()}` : "—"}
                color="#059669"
                sub="Based on active tier subscriptions"
              />
            </div>

            {/* Charts row */}
            <div className="grid gap-6 lg:grid-cols-2">
              <TierDistributionChart data={metrics.active_tier_counts || {}} />

              {/* Blueprint activity */}
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Blueprint Activity</h3>
                {metrics.blueprint_by_tier ? (
                  <div className="space-y-3">
                    {Object.entries(metrics.blueprint_by_tier).map(([tier, count]) => (
                      <div key={tier} className="flex items-center justify-between rounded-lg border border-[#1A2235] bg-[#080C14] px-4 py-2.5">
                        <span className="text-sm font-semibold capitalize text-slate-300">{tier}</span>
                        <span className="font-display text-lg font-black text-white">{count}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-600">No blueprint data available.</p>
                )}
              </div>
            </div>

            {/* Feature usage */}
            {metrics.top_features && (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Top Features Used</h3>
                <FeatureUsageTable data={metrics.top_features} />
              </div>
            )}

            {/* Recent activity */}
            {metrics.recent_activity && (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Recent Activity</h3>
                <RecentActivityTable data={metrics.recent_activity} />
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
