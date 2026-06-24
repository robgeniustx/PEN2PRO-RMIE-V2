import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import ModuleUsageChart from "../components/admin/ModuleUsageChart";
import AdminMetricCard from "../components/admin/AdminMetricCard";
import { getAdminMetrics, getModuleUsageSummary } from "../api/adminApi";

export default function AdminFeatureUsagePage() {
  const key = sessionStorage.getItem("pen2pro_admin_key");
  const [data, setData] = useState(null);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    Promise.all([getAdminMetrics(), getModuleUsageSummary()])
      .then(([metrics, mod]) => {
        setData(metrics);
        setModules(Array.isArray(mod) ? mod : metrics.module_usage ?? []);
      })
      .catch(() => setError("Failed to load feature data."))
      .finally(() => setLoading(false));
  }, [key]);

  if (!key) return <Navigate to="/admin" replace />;

  const topFeature = data?.top_features?.[0];
  const topModule  = Array.isArray(modules) && modules[0];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition">
            ← Back to Admin
          </Link>
          <h1 className="font-display text-3xl font-black text-white mt-2">Feature Usage</h1>
          <p className="text-sm text-slate-500 mt-1">Module adoption and top utilized PEN2PRO tools</p>
        </div>

        {loading && (
          <div className="text-center py-20 text-slate-500">Loading feature data...</div>
        )}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {data && (
          <>
            {/* Metric Cards */}
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              <AdminMetricCard
                label="Top Feature"
                value={topFeature?.feature_name ?? '—'}
                icon="🏆"
                color="#D4A017"
              />
              <AdminMetricCard
                label="Top Module"
                value={topModule?.module_name ?? '—'}
                icon="⚙️"
                color="#1E88E5"
              />
              <AdminMetricCard
                label="Features Tracked"
                value={data.top_features?.length ?? 0}
                icon="📊"
                color="#00C9B1"
              />
            </div>

            {/* Module chart */}
            <div className="mb-6">
              <ModuleUsageChart data={modules} />
            </div>

            {/* Feature table */}
            <FeatureUsageTable data={data.top_features ?? []} />
          </>
        )}
      </div>
    </div>
  );
}
