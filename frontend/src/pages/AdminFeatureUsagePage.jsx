import { useEffect, useState } from 'react';
import { getFeatureUsageSummary } from '../api/adminApi';
import FeatureUsageTable from '../components/admin/FeatureUsageTable';
import AdminKeyGate from '../components/admin/AdminKeyGate';

export default function AdminFeatureUsagePage() {
  const [d, setD] = useState([]);
  useEffect(() => { getFeatureUsageSummary().then(setD); }, []);
  return (
    <AdminKeyGate>
      <div className="p-4 bg-slate-950 min-h-screen">
        <FeatureUsageTable data={d} />
      </div>
    </AdminKeyGate>
  );
}
