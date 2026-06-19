import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getFeatureUsageSummary, getModuleUsageSummary } from "../api/adminApi";

export default function AdminFeatureUsagePage() {
  const [features, setFeatures] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getFeatureUsageSummary().then((d) => setFeatures(Array.isArray(d) ? d : []));
    getModuleUsageSummary().then((d) => setModules(Array.isArray(d) ? d : []));
  }, []);

  const maxCount = Math.max(...features.map((f) => f.usage_count || 0), 1);

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8 flex items-center gap-4">
          <Link to="/admin" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">
            ← Admin
          </Link>
          <h1 className="font-display text-2xl font-black text-white">Feature Usage</h1>
        </div>

        <div className="space-y-8">
          {/* Feature usage bars */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="font-display text-lg font-black text-white mb-6">Feature Activity</h2>
            {features.length === 0 ? (
              <p className="text-sm text-slate-500">No feature data available.</p>
            ) : (
              <div className="space-y-5">
                {features.map((f, i) => {
                  const pct = Math.round((f.usage_count / maxCount) * 100);
                  return (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-sm font-bold text-white">{f.feature_name}</span>
                          <span className="ml-2 text-xs text-slate-600">({f.module_name})</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 uppercase">{f.tier}</span>
                          <span className="text-sm font-black text-[#FF8A00]">{f.usage_count}</span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-[#1A2235]">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-[#FF8A00] to-[#D4A017] transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Module usage */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="font-display text-lg font-black text-white mb-4">Module Activity</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1A2D50] text-left text-xs text-slate-500 uppercase tracking-widest">
                    <th className="pb-3 pr-6">Module</th>
                    <th className="pb-3">Usage Count</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((m, i) => (
                    <tr key={i} className="border-b border-[#1A2235]">
                      <td className="py-3 pr-6 font-semibold text-slate-300 capitalize">
                        {m.module_name}
                      </td>
                      <td className="py-3 font-black text-[#FF8A00]">{m.usage_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
