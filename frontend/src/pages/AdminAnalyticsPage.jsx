import { useEffect, useState } from 'react';
import { getAdminMetrics } from '../api/adminApi';
import TierDistributionChart from '../components/admin/TierDistributionChart';
import FeatureUsageTable from '../components/admin/FeatureUsageTable';
import RecentActivityTable from '../components/admin/RecentActivityTable';
import AdminKeyGate from '../components/admin/AdminKeyGate';

export default function AdminAnalyticsPage() {
  const [m, setM] = useState(null);
  useEffect(() => { getAdminMetrics().then(setM); }, []);
  return (
    <AdminKeyGate>
      {!m ? null : (
        <div className="p-4 bg-slate-950 min-h-screen space-y-4">
          <TierDistributionChart data={m.active_tier_counts} />
          <FeatureUsageTable data={m.top_features} />
          <RecentActivityTable data={m.recent_activity} />
        </div>
      )}
    </AdminKeyGate>
  );
}
