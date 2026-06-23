import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getFeatureUsageSummary, getModuleUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

export default function AdminFeatureUsagePage() {
  const [features, setFeatures] = useState([]);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getFeatureUsageSummary(), getModuleUsageSummary()]).then(([f, m]) => {
      setFeatures(Array.isArray(f) ? f : []);
      setModules(Array.isArray(m) ? m : []);
      setLoading(false);
    });
  }, []);

  const maxModuleUsage = Math.max(...modules.map(m => m.usage_count || 0), 1);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/admin" className="hover:text-white transition-colors">Admin</Link>
          <span>/</span>
          <span className="text-white">Feature Usage</span>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Module Adoption</h1>
            <p className="mt-1 text-sm text-slate-500">Which features and modules users are actually engaging with</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/analytics" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Analytics
            </Link>
            <Link to="/admin/conversions" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Conversions
            </Link>
            <Link to="/admin" className="btn-gold px-4 py-2.5 text-sm font-bold rounded-xl">
              ← Dashboard
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">Loading usage data...</div>
        ) : (
          <div className="space-y-8">
            {/* Module usage bar chart */}
            {modules.length > 0 && (
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-6">Module Usage</h2>
                <div className="space-y-4">
                  {modules
                    .slice()
                    .sort((a, b) => (b.usage_count || 0) - (a.usage_count || 0))
                    .map((mod, i) => {
                      const barPct = Math.max(Math.round(((mod.usage_count || 0) / maxModuleUsage) * 100), mod.usage_count > 0 ? 2 : 0);
                      return (
                        <div key={i}>
                          <div className="mb-1.5 flex items-center justify-between">
                            <span className="text-sm font-semibold capitalize text-white">{mod.module_name}</span>
                            <span className="text-sm font-black" style={{ color: "#D4A017" }}>
                              {(mod.usage_count || 0).toLocaleString()}
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-[#1A2235]">
                            <div
                              className="h-2 rounded-full transition-all duration-500"
                              style={{
                                width: `${barPct}%`,
                                background: i === 0
                                  ? "linear-gradient(90deg,#D4A017,#F59E0B)"
                                  : "linear-gradient(90deg,#1E88E5,#42A5F5)",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Feature usage table */}
            <FeatureUsageTable data={features} />

            {features.length === 0 && modules.length === 0 && (
              <div className="py-20 text-center text-slate-500 text-sm">
                No usage data available yet. Data appears once users start engaging with platform features.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
