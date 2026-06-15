import { useEffect, useState } from 'react';
import { getAdminMetrics } from '../api/adminApi';
import TierDistributionChart from '../components/admin/TierDistributionChart';
import FeatureUsageTable from '../components/admin/FeatureUsageTable';
import RecentActivityTable from '../components/admin/RecentActivityTable';
import Navbar from '../components/layout/Navbar';

function MetricCard({ label, value, color = '#D4A017', note }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color }}>{value}</p>
      {note && <p className="mt-1 text-xs text-slate-600">{note}</p>}
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const [m, setM] = useState(null);

  useEffect(() => {
    getAdminMetrics().then(setM);
  }, []);

  if (!m) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center">
        <p className="text-slate-500 animate-pulse">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-1">Admin</p>
          <h1 className="font-display text-3xl font-black text-white">Platform Analytics</h1>
          <p className="mt-1 text-sm text-slate-500">Real-time metrics across all tiers and features</p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <MetricCard label="Total Users" value={(m.total_users || 0).toLocaleString()} color="#D4A017" />
          <MetricCard label="Blueprints Generated" value={(m.total_blueprints || 0).toLocaleString()} color="#00C9B1" />
          <MetricCard label="Total Events" value={(m.total_events || 0).toLocaleString()} color="#1E88E5" />
          <MetricCard label="Est. Revenue" value={`$${(m.estimated_revenue || 0).toLocaleString()}`} color="#D4A017" note="Completed checkouts" />
        </div>

        <div className="mb-6 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
          <h2 className="mb-4 text-base font-bold text-white">Tier Distribution</h2>
          <TierDistributionChart data={m.active_tier_counts} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-4 text-base font-bold text-white">Top Features</h2>
            <FeatureUsageTable data={m.top_features} />
          </div>
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-4 text-base font-bold text-white">Recent Activity</h2>
            <RecentActivityTable data={m.recent_activity} />
          </div>
        </div>
      </div>
    </div>
  );
}
