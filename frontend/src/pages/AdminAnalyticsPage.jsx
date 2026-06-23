import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics } from "../api/adminApi";
import AdminMetricCard from "../components/admin/AdminMetricCard";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getAdminMetrics()
      .then((d) => { setMetrics(d); setLoading(false); })
      .catch(() => { setError("Failed to load analytics"); setLoading(false); });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
              <Link to="/admin" className="hover:text-[#D4A017] transition-colors">Admin</Link>
              {" · "}Analytics
            </p>
            <h1 className="font-display text-3xl font-black text-white">Event Intelligence</h1>
            <p className="text-sm text-slate-500 mt-1">Platform activity, tier distribution, and feature engagement</p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Link to="/admin/feature-usage" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#D4A017]/40 transition-colors">
              Feature Usage →
            </Link>
            <Link to="/admin/conversions" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#D4A017]/40 transition-colors">
              Conversions →
            </Link>
          </div>
        </div>

        {loading && (
          <div className="py-20 text-center text-slate-500">Loading analytics…</div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {metrics && (
          <>
            {/* Key Metrics */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <AdminMetricCard
                label="Total Users"
                value={metrics.total_users}
                icon="👥"
                accent="#D4A017"
                description="All registered accounts"
              />
              <AdminMetricCard
                label="Blueprints Generated"
                value={metrics.total_blueprints}
                icon="🗺️"
                accent="#00C9B1"
                description="Roadmaps created"
              />
              <AdminMetricCard
                label="Total Events"
                value={metrics.total_events}
                icon="⚡"
                accent="#1E88E5"
                description="Tracked platform events"
              />
              <AdminMetricCard
                label="Upgrade Clicks"
                value={metrics.total_upgrade_clicks}
                icon="🚀"
                accent="#FF8A00"
                description="Users who clicked upgrade"
              />
            </div>

            {/* Tier Distribution + Top Features */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <TierDistributionChart data={metrics.active_tier_counts} />
              <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h3 className="font-display text-base font-bold text-white mb-4">Module Usage</h3>
                <div className="space-y-3">
                  {(metrics.module_usage || []).map((mod) => {
                    const max = Math.max(...(metrics.module_usage || []).map(m => m.usage_count), 1);
                    return (
                      <div key={mod.module_name}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="font-semibold capitalize text-slate-300">{mod.module_name}</span>
                          <span className="text-slate-400">{mod.usage_count}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-[#1A2235]">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${Math.round((mod.usage_count / max) * 100)}%`,
                              background: "linear-gradient(90deg, #1E88E5, #00C9B1)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Feature Usage Table */}
            <div className="mb-8">
              <h2 className="font-display text-lg font-bold text-white mb-4">Top Features</h2>
              <FeatureUsageTable data={metrics.top_features} />
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="font-display text-lg font-bold text-white mb-4">Recent Activity</h2>
              <RecentActivityTable data={metrics.recent_activity} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
