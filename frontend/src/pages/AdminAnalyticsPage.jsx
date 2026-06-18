import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";

function MetricBox({ label, value, sub, color = "#1E88E5" }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{label}</p>
      <p className="text-3xl font-black" style={{ color }}>{value ?? "—"}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Analytics | PEN2PRO Admin";
    getAdminMetrics()
      .then(setMetrics)
      .catch(() => setError("Failed to load analytics data."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center">
        <div className="text-center">
          <div className="h-10 w-10 mx-auto mb-4 rounded-full border-2 border-[#1E88E5] border-t-transparent animate-spin" />
          <p className="text-slate-400 text-sm">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Admin</Link>
            <span className="text-slate-600">›</span>
            <span className="text-xs text-[#1E88E5] font-semibold">Analytics</span>
          </div>
          <h1 className="text-2xl font-black">Platform Analytics</h1>
          <p className="text-slate-400 text-sm mt-1">User engagement, tier distribution, and feature usage data.</p>
        </div>
        <Link
          to="/admin"
          className="rounded-xl border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Admin
        </Link>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Summary Metrics */}
      {metrics && (
        <>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
            <MetricBox
              label="Total Users"
              value={metrics.total_users?.toLocaleString()}
              sub="all registered accounts"
              color="#1E88E5"
            />
            <MetricBox
              label="Active This Week"
              value={metrics.active_this_week?.toLocaleString()}
              sub="unique sessions"
              color="#10B981"
            />
            <MetricBox
              label="Blueprints Generated"
              value={metrics.blueprints_generated?.toLocaleString()}
              sub="total roadmaps created"
              color="#FF8A00"
            />
            <MetricBox
              label="Estimated MRR"
              value={metrics.estimated_revenue ? `$${Number(metrics.estimated_revenue).toLocaleString()}` : "—"}
              sub="monthly recurring revenue"
              color="#D4A017"
            />
          </div>

          {/* Charts */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 font-black text-white">Tier Distribution</h2>
              {metrics.active_tier_counts ? (
                <TierDistributionChart data={metrics.active_tier_counts} />
              ) : (
                <p className="text-slate-500 text-sm">No tier data available.</p>
              )}
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 font-black text-white">Top Features Used</h2>
              {metrics.top_features ? (
                <FeatureUsageTable data={metrics.top_features} />
              ) : (
                <p className="text-slate-500 text-sm">No feature data available.</p>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-4 font-black text-white">Recent Activity</h2>
            {metrics.recent_activity ? (
              <RecentActivityTable data={metrics.recent_activity} />
            ) : (
              <p className="text-slate-500 text-sm">No recent activity data.</p>
            )}
          </div>
        </>
      )}

      {!metrics && !error && (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-12 text-center">
          <p className="text-slate-400">No analytics data available yet.</p>
          <p className="text-slate-500 text-sm mt-2">Data will appear once the backend is connected and users are active.</p>
        </div>
      )}

      {/* Nav to other admin pages */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Admin Home", "/admin"],
          ["Waitlist", "/admin/waitlist"],
          ["Conversions", "/admin/conversions"],
          ["Feature Usage", "/admin/feature-usage"],
        ].map(([label, path]) => (
          <Link key={path} to={path} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-center text-sm font-semibold text-slate-400 hover:text-white hover:border-[#1E88E5] transition-all">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
