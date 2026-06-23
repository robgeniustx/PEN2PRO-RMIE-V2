import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getFeatureUsageSummary, getModuleUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import AdminMetricCard from "../components/admin/AdminMetricCard";

const TIER_COLORS = { free: "#475569", pro: "#D4A017", elite: "#00C9B1", founders: "#7C3AED" };

export default function AdminFeatureUsagePage() {
  const [features, setFeatures] = useState([]);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getFeatureUsageSummary(), getModuleUsageSummary()])
      .then(([f, m]) => { setFeatures(Array.isArray(f) ? f : []); setModules(Array.isArray(m) ? m : []); })
      .catch(() => setError("Failed to load feature data"))
      .finally(() => setLoading(false));
  }, []);

  const totalUsage = features.reduce((s, f) => s + (f.usage_count || 0), 0);
  const topFeature = features.length > 0 ? features[0] : null;
  const maxUsage = Math.max(...features.map(f => f.usage_count || 0), 1);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
              <Link to="/admin" className="hover:text-[#D4A017] transition-colors">Admin</Link>
              {" · "}Feature Usage
            </p>
            <h1 className="font-display text-3xl font-black text-white">Module Adoption</h1>
            <p className="text-sm text-slate-500 mt-1">Feature engagement and usage patterns across all tiers</p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Link to="/admin/analytics" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#D4A017]/40 transition-colors">
              Analytics →
            </Link>
            <Link to="/admin/conversions" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#D4A017]/40 transition-colors">
              Conversions →
            </Link>
          </div>
        </div>

        {loading && <div className="py-20 text-center text-slate-500">Loading feature data…</div>}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
        )}

        {!loading && !error && (
          <>
            {/* Summary cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              <AdminMetricCard
                label="Total Feature Uses"
                value={totalUsage.toLocaleString()}
                icon="⚡"
                accent="#D4A017"
              />
              <AdminMetricCard
                label="Tracked Features"
                value={features.length}
                icon="📋"
                accent="#00C9B1"
              />
              <AdminMetricCard
                label="Top Feature"
                value={topFeature ? topFeature.feature_name : "—"}
                icon="🏆"
                accent="#FF8A00"
                description={topFeature ? `${topFeature.usage_count} uses` : ""}
              />
            </div>

            {/* Feature usage bar chart */}
            <div className="mb-8 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
              <h2 className="font-display text-lg font-bold text-white mb-5">Feature Usage Breakdown</h2>
              {features.length === 0 ? (
                <p className="text-sm text-slate-500">No feature data yet.</p>
              ) : (
                <div className="space-y-4">
                  {features.map((f) => {
                    const pct = Math.round(((f.usage_count || 0) / maxUsage) * 100);
                    const tierColor = TIER_COLORS[f.tier] || "#475569";
                    return (
                      <div key={f.feature_name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{f.feature_name}</span>
                            <span
                              className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                              style={{ background: tierColor + "22", color: tierColor }}
                            >
                              {f.tier}
                            </span>
                          </div>
                          <span className="text-slate-400 tabular-nums">{(f.usage_count || 0).toLocaleString()}</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-[#1A2235]">
                          <div
                            className="h-2.5 rounded-full transition-all duration-700"
                            style={{ width: `${pct}%`, background: tierColor }}
                          />
                        </div>
                        {f.module_name && (
                          <p className="mt-1 text-xs text-slate-600 capitalize">Module: {f.module_name}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Module usage */}
            {modules.length > 0 && (
              <div className="mb-8 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="font-display text-lg font-bold text-white mb-5">Module Usage</h2>
                <div className="space-y-3">
                  {modules.map((mod) => {
                    const maxMod = Math.max(...modules.map(m => m.usage_count || 0), 1);
                    const pct = Math.round(((mod.usage_count || 0) / maxMod) * 100);
                    return (
                      <div key={mod.module_name}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="font-semibold capitalize text-slate-300">{mod.module_name}</span>
                          <span className="text-slate-400">{(mod.usage_count || 0).toLocaleString()}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-[#1A2235]">
                          <div
                            className="h-2 rounded-full"
                            style={{ width: `${pct}%`, background: "linear-gradient(90deg, #1E88E5, #00C9B1)" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Full table */}
            <div>
              <h2 className="font-display text-lg font-bold text-white mb-4">Full Feature Table</h2>
              <FeatureUsageTable data={features} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
