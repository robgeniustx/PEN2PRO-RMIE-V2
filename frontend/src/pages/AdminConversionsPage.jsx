import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import AdminKeyGate from "../components/admin/AdminKeyGate";
import { getAdminMetrics } from "../api/adminApi";

export default function AdminConversionsPage() {
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
              <h1 className="font-display text-3xl font-black text-white">Revenue Funnel</h1>
              <p className="text-sm text-slate-500 mt-1">Upgrades, checkout progress, and conversion signals</p>
            </div>
            <Link to="/admin" className="btn-outline px-5 py-2.5 text-sm font-bold">
              ← Back to Admin
            </Link>
          </div>

          <div className="mb-6 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <p className="text-xs text-slate-500 mb-2">Estimated Revenue</p>
            <p className="font-display text-3xl font-black" style={{ color: "#D4A017" }}>
              ${metrics?.estimated_revenue ?? 0}
            </p>
          </div>

          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-lg font-bold text-white mb-4">Conversion Summary</h2>
            <pre className="rounded-xl bg-[#080C14] p-4 text-xs text-slate-300 overflow-auto">
              {JSON.stringify(metrics?.conversion_summary || {}, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </AdminKeyGate>
  );
}
