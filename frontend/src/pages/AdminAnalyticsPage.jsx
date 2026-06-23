import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics, getRecentActivity } from "../api/adminApi";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";

function MetricCard({ label, value, sub, color = "#D4A017" }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
      <p className="text-xs text-slate-500 mb-2">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color }}>
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAdminMetrics(), getRecentActivity()]).then(([m, a]) => {
      setMetrics(m);
      setActivity(Array.isArray(a) ? a : []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/admin" className="hover:text-white transition-colors">Admin</Link>
          <span>/</span>
          <span className="text-white">Analytics</span>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Event Intelligence</h1>
            <p className="mt-1 text-sm text-slate-500">Platform-wide event tracking, tier distribution, and feature adoption</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/conversions" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Conversions
            </Link>
            <Link to="/admin/feature-usage" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Feature Usage
            </Link>
            <Link to="/admin" className="btn-gold px-4 py-2.5 text-sm font-bold rounded-xl">
              ← Dashboard
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">Loading analytics...</div>
        ) : metrics ? (
          <div className="space-y-8">
            {/* Summary Metrics */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <MetricCard label="Total Users" value={metrics.total_users ?? 0} color="#D4A017" />
              <MetricCard label="Total Events" value={metrics.total_events ?? 0} color="#1E88E5" />
              <MetricCard label="Blueprints Generated" value={metrics.total_blueprints ?? 0} color="#00C9B1" />
              <MetricCard
                label="Upgrade Clicks"
                value={metrics.total_upgrade_clicks ?? 0}
                sub={`${metrics.total_checkouts_started ?? 0} checkouts started`}
                color="#f97316"
              />
            </div>

            {/* Tier Distribution */}
            <TierDistributionChart data={metrics.active_tier_counts || {}} />

            {/* Feature Usage */}
            <FeatureUsageTable data={metrics.top_features || []} />

            {/* Recent Activity */}
            <RecentActivityTable data={activity.length > 0 ? activity : (metrics.recent_activity || [])} />
          </div>
        ) : (
          <div className="py-20 text-center text-slate-500 text-sm">No analytics data available.</div>
        )}
      </div>
    </div>
  );
}
