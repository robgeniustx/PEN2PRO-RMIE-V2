import { useEffect, useState } from "react";
import { getAdminMetrics } from "../api/adminApi";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";
import { Link } from "react-router-dom";

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch((e) => setError(e.message || "Failed to load analytics"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen p-6 space-y-8" style={{ background: "#080C14", color: "#E2E8F0" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Admin</p>
          <h1 className="text-2xl font-black text-white">Analytics</h1>
          <p className="text-sm text-slate-500 mt-1">Tier distribution, feature usage, and recent activity</p>
        </div>
        <div className="flex gap-3">
          <Link to="/admin" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 border border-[#1A2D50] hover:text-white">
            ← Dashboard
          </Link>
          <Link to="/admin/conversions" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 border border-[#1A2D50] hover:text-white">
            Conversions
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
        <div className="space-y-6">
          <TierDistributionChart data={metrics.active_tier_counts} />
          <FeatureUsageTable data={metrics.top_features} />
          <RecentActivityTable data={metrics.recent_activity} />
        </div>
      )}
    </div>
  );
}
