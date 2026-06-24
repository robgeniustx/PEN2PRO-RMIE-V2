import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import RecentActivityTable from "../components/admin/RecentActivityTable";
import AdminMetricCard from "../components/admin/AdminMetricCard";
import { getAdminMetrics } from "../api/adminApi";

export default function AdminAnalyticsPage() {
  const key = sessionStorage.getItem("pen2pro_admin_key");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    getAdminMetrics()
      .then(setData)
      .catch(() => setError("Failed to load analytics."))
      .finally(() => setLoading(false));
  }, [key]);

  if (!key) return <Navigate to="/admin" replace />;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition">
            ← Back to Admin
          </Link>
          <h1 className="font-display text-3xl font-black text-white mt-2">Event Analytics</h1>
          <p className="text-sm text-slate-500 mt-1">Platform-wide event intelligence and tier distribution</p>
        </div>

        {loading && (
          <div className="text-center py-20 text-slate-500">Loading analytics...</div>
        )}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {data && (
          <>
            {/* Metric Cards */}
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <AdminMetricCard label="Total Users" value={data.total_users} icon="👥" color="#D4A017" />
              <AdminMetricCard label="Events Tracked" value={data.total_events} icon="⚡" color="#1E88E5" />
              <AdminMetricCard label="Blueprints Generated" value={data.total_blueprints} icon="📋" color="#00C9B1" />
              <AdminMetricCard label="Upgrade Clicks" value={data.total_upgrade_clicks} icon="🎯" color="#A855F7" />
            </div>

            {/* Charts Row */}
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <TierDistributionChart data={data.active_tier_counts} />

              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: '#0F1520' }}>
                <h3 className="font-display text-base font-bold text-white mb-5">Event Summary</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Blueprints Generated',  value: data.total_blueprints,          color: '#00C9B1' },
                    { label: 'Events Tracked',         value: data.total_events,              color: '#1E88E5' },
                    { label: 'Upgrade Button Clicks',  value: data.total_upgrade_clicks,      color: '#D4A017' },
                    { label: 'Checkouts Started',      value: data.total_checkouts_started,   color: '#A855F7' },
                    { label: 'Checkouts Completed',    value: data.total_checkouts_completed, color: '#10B981' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#1A2235] last:border-0">
                      <span className="text-sm text-slate-400">{s.label}</span>
                      <span className="font-bold text-sm" style={{ color: s.color }}>
                        {(s.value ?? 0).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <RecentActivityTable data={data.recent_activity ?? []} />
          </>
        )}
      </div>
    </div>
  );
}
