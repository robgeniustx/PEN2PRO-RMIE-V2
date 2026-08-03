import { useEffect, useState } from 'react';
import { getAdminMetrics } from '../api/adminApi';
import AdminKeyGate from '../components/admin/AdminKeyGate';

export default function AdminConversionsPage() {
  const [m, setM] = useState(null);
  useEffect(() => { getAdminMetrics().then(setM); }, []);
  return (
    <AdminKeyGate>
      <div className="p-4 bg-slate-950 text-white min-h-screen">
        <pre>{JSON.stringify(m?.conversion_summary || {}, null, 2)}</pre>
        <div>Estimated revenue: {m?.estimated_revenue}</div>
      </div>
    </AdminKeyGate>
  );
}
