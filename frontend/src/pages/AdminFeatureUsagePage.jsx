import { useEffect, useState } from 'react';
import { getFeatureUsageSummary } from '../api/adminApi';
import AdminKeyGate from '../components/layout/AdminKeyGate';
import FeatureUsageTable from '../components/admin/FeatureUsageTable';

export default function AdminFeatureUsagePage() {
  const [d, setD] = useState([]);
  useEffect(() => { getFeatureUsageSummary().then(setD) }, []);
  return (
    <AdminKeyGate>
      <div className="p-4 bg-slate-950 min-h-screen">
        <FeatureUsageTable data={d} />
      </div>
    </AdminKeyGate>
  );
}
