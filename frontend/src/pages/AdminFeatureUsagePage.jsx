import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AdminFeatureUsagePage() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { getFeatureUsageSummary } = await import("../api/adminApi");
        const data = await getFeatureUsageSummary();
        setFeatures(Array.isArray(data) ? data : []);
      } catch {
        setFeatures([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">← Admin Dashboard</Link>
          <h1 className="font-display text-3xl font-black text-white mt-2">Feature Usage</h1>
          <p className="text-sm text-slate-500">Which PEN2PRO features are being used most across all tiers.</p>
        </div>

        {loading && (
          <div className="py-20 text-center text-slate-500">Loading feature data...</div>
        )}

        {!loading && (
          <div className="rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
            <div className="px-6 py-4 border-b border-[#1A2D50] flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-white">Feature Breakdown</h2>
              <span className="text-xs text-slate-500">{features.length} features tracked</span>
            </div>

            {features.length === 0 ? (
              <div className="py-16 text-center text-slate-500 text-sm">
                No feature usage data available. Usage logs will appear here as users interact with the platform.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2D50]">
                      {["Rank", "Feature", "Usage Count", "Tier Access", "Last Used"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((f, i) => (
                      <tr key={i} className="border-b border-[#1A2D50] hover:bg-white/[0.02] transition-all">
                        <td className="px-4 py-3 text-slate-600 text-xs font-bold">#{i + 1}</td>
                        <td className="px-4 py-3 text-white font-medium">{f.feature || f.name || "—"}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="font-display text-lg font-black text-[#D4A017]">{f.count ?? 0}</span>
                            <div className="flex-1 max-w-24 h-1.5 rounded-full bg-[#1A2D50]">
                              <div
                                className="h-1.5 rounded-full"
                                style={{
                                  width: `${Math.max(4, (f.count / (features[0]?.count || 1)) * 100)}%`,
                                  background: "linear-gradient(90deg, #D4A017, #FF8A00)",
                                }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="rounded-full border border-[#1A2D50] px-2 py-0.5 text-xs text-slate-400 capitalize">
                            {f.tier || f.required_plan || "all"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 text-xs">
                          {f.last_used ? new Date(f.last_used).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
