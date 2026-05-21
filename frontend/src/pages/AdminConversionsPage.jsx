import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { getAdminMetrics } = await import("../api/adminApi");
        const data = await getAdminMetrics();
        setMetrics(data);
      } catch {
        setMetrics(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const summary = metrics?.conversion_summary || {};
  const revenue = metrics?.estimated_revenue || "$0";

  const conversionRows = [
    { label: "Free → Pro Conversions", value: summary.free_to_pro ?? 0, color: "#00C9B1" },
    { label: "Free → Elite Conversions", value: summary.free_to_elite ?? 0, color: "#D4A017" },
    { label: "Pro → Elite Upgrades", value: summary.pro_to_elite ?? 0, color: "#FF8A00" },
    { label: "Free → Founders", value: summary.free_to_founders ?? 0, color: "#7C3AED" },
    { label: "Waitlist → Paid", value: summary.waitlist_to_paid ?? 0, color: "#1E88E5" },
    { label: "Total Conversions", value: summary.total ?? 0, color: "#D4A017" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">← Admin Dashboard</Link>
          <h1 className="font-display text-3xl font-black text-white mt-2">Conversions</h1>
          <p className="text-sm text-slate-500">Plan upgrades, funnel conversions, and estimated revenue.</p>
        </div>

        {loading && (
          <div className="py-20 text-center text-slate-500">Loading conversion data...</div>
        )}

        {!loading && (
          <>
            {/* Revenue Banner */}
            <div className="mb-8 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-1">Estimated Revenue</p>
                <p className="font-display text-4xl font-black text-white">{revenue}</p>
                <p className="text-xs text-slate-500 mt-1">Based on current active paid subscriptions</p>
              </div>
              <Link to="/admin/waitlist" className="btn-gold px-5 py-2.5 text-sm font-bold">
                View Waitlist
              </Link>
            </div>

            {/* Conversion Metrics */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {conversionRows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                  <p className="text-xs text-slate-500 mb-2">{row.label}</p>
                  <p className="font-display text-3xl font-black" style={{ color: row.color }}>{row.value}</p>
                </div>
              ))}
            </div>

            {/* Funnel Visualization */}
            <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-5">Conversion Funnel</h2>
              {Object.keys(summary).length === 0 ? (
                <p className="text-sm text-slate-500">No conversion data available yet. Data populates as users sign up and upgrade.</p>
              ) : (
                <div className="space-y-4">
                  {conversionRows.map((row, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <p className="text-sm text-slate-400 w-44 shrink-0">{row.label}</p>
                      <div className="flex-1 h-3 rounded-full bg-[#1A2D50]">
                        <div
                          className="h-3 rounded-full transition-all"
                          style={{
                            width: `${Math.max(3, (row.value / Math.max(summary.total || 1, 1)) * 100)}%`,
                            background: `${row.color}`,
                          }}
                        />
                      </div>
                      <p className="text-sm font-bold text-white w-8 text-right">{row.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
