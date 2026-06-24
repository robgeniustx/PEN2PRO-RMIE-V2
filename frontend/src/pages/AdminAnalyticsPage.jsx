import { useEffect, useState } from "react";
import { getAdminMetrics } from "../api/adminApi";
import TierDistributionChart from "../components/admin/TierDistributionChart";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import RecentActivityTable from "../components/admin/RecentActivityTable";

const StatCard = ({ label, value, sub, color = "#D4A017" }) => (
  <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{label}</p>
    <p className="mt-2 text-3xl font-black text-white">{value ?? "—"}</p>
    {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
  </div>
);

export default function AdminAnalyticsPage() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch(err => setError(err.message || "Failed to load metrics"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080C14] text-slate-400">
        Loading analytics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080C14]">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-sm text-red-400">
          {error}
        </div>
      </div>
    );
  }

  const tiers = metrics?.active_tier_counts || {};
  const totalUsers = Object.values(tiers).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-[#080C14] p-6 text-white space-y-6">
      <div>
        <h1 className="font-display text-2xl font-black text-white">Analytics Overview</h1>
        <p className="mt-1 text-sm text-slate-400">Platform usage, tier distribution, and feature adoption.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Users" value={totalUsers} sub="All tiers combined" color="#1E88E5" />
        <StatCard label="Free Tier" value={tiers.free ?? 0} sub="Free roadmap users" color="#D4A017" />
        <StatCard label="Pro Users" value={tiers.pro ?? 0} sub="Pro subscribers" color="#1E88E5" />
        <StatCard label="Elite / Founders" value={(tiers.elite ?? 0) + (tiers.founders ?? 0)} sub="Paid top tiers" color="#FF8A00" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <h2 className="mb-4 font-bold text-white">Tier Distribution</h2>
          <TierDistributionChart data={tiers} />
        </div>

        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <h2 className="mb-4 font-bold text-white">Top Features Used</h2>
          <FeatureUsageTable data={metrics?.top_features || []} />
        </div>
      </div>

      <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
        <h2 className="mb-4 font-bold text-white">Recent Activity</h2>
        <RecentActivityTable data={metrics?.recent_activity || []} />
      </div>
    </div>
  );
}
