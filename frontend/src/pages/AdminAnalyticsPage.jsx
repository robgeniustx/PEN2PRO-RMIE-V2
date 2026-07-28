import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import AdminKeyGate from "../components/admin/AdminKeyGate";
import { getAdminMetrics } from "../api/adminApi";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    getAdminMetrics().then(setMetrics);
  }, []);

  return (
    <AdminKeyGate>
      <div className="min-h-screen" style={{ background: "#080C14" }}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-black text-white">Event Intelligence</h1>
              <p className="text-sm text-slate-500 mt-1">Event volume, tier distribution, and recent activity</p>
            </div>
            <Link to="/admin" className="btn-outline px-5 py-2.5 text-sm font-bold">
              ← Back to Admin
            </Link>
          </div>

          {!metrics ? (
            <div className="text-center py-20 text-slate-500">Loading metrics...</div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Tier Distribution</h2>
                <TierDistributionChart data={metrics.active_tier_counts} />
              </div>
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Top Features</h2>
                <FeatureUsageTable data={metrics.top_features} />
              </div>
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Recent Activity</h2>
                <RecentActivityTable data={metrics.recent_activity} />
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminKeyGate>
  );
}
