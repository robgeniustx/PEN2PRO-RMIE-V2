import { useEffect, useState } from 'react';
import { getFeatureUsageSummary, getModuleUsageSummary } from '../api/adminApi';
import Navbar from '../components/layout/Navbar';
import FeatureUsageTable from '../components/admin/FeatureUsageTable';
import ModuleUsageChart from '../components/admin/ModuleUsageChart';

const TIER_COLORS = { free: '#1E88E5', pro: '#D4A017', elite: '#00C9B1', founders: '#FF8A00' };

export default function AdminFeatureUsagePage() {
  const [features, setFeatures] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getFeatureUsageSummary().then((d) => setFeatures(Array.isArray(d) ? d : []));
    getModuleUsageSummary().then((d) => setModules(Array.isArray(d) ? d : []));
  }, []);

  const totalUsage = features.reduce((acc, f) => acc + (f.usage_count || 0), 0);
  const topModule = modules.length > 0
    ? modules.reduce((a, b) => (a.usage_count > b.usage_count ? a : b))
    : null;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-1">Admin</p>
          <h1 className="font-display text-3xl font-black text-white">Feature Usage</h1>
          <p className="mt-1 text-sm text-slate-500">Module and feature adoption across all user tiers</p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Total Feature Events</p>
            <p className="font-display text-3xl font-black text-[#D4A017]">{totalUsage.toLocaleString()}</p>
          </div>
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Features Tracked</p>
            <p className="font-display text-3xl font-black text-[#1E88E5]">{features.length}</p>
          </div>
          {topModule && (
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Top Module</p>
              <p className="font-display text-3xl font-black text-[#00C9B1] capitalize">{topModule.module_name}</p>
              <p className="mt-1 text-xs text-slate-600">{(topModule.usage_count || 0).toLocaleString()} events</p>
            </div>
          )}
        </div>

        {modules.length > 0 && (
          <div className="mb-8 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-4 text-base font-bold text-white">Module Usage</h2>
            <ModuleUsageChart data={modules} />
          </div>
        )}

        <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-white">Feature Breakdown</h2>
            <div className="flex items-center gap-3">
              {Object.entries(TIER_COLORS).map(([tier, color]) => (
                <span key={tier} className="flex items-center gap-1.5 text-xs font-semibold capitalize text-slate-400">
                  <span className="h-2 w-2 rounded-full" style={{ background: color }} />
                  {tier}
                </span>
              ))}
            </div>
          </div>
          <FeatureUsageTable data={features} />
        </div>
      </div>
    </div>
  );
}
