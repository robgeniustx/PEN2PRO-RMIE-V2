import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AdminAnalyticsPage() {
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

  const tierData = metrics?.active_tier_counts || { free: 0, pro: 0, elite: 0, founders: 0 };
  const topFeatures = metrics?.top_features || [];
  const recentActivity = metrics?.recent_activity || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">← Admin Dashboard</Link>
          <h1 className="font-display text-3xl font-black text-white mt-2">Analytics Overview</h1>
          <p className="text-sm text-slate-500">Platform usage, tier distribution, and feature activity.</p>
        </div>

        {loading && (
          <div className="py-20 text-center text-slate-500">Loading analytics...</div>
        )}

        {!loading && (
          <>
            {/* Tier Distribution */}
            <div className="mb-8 rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-5">Active Tier Distribution</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Free", count: tierData.free ?? 0, color: "#94A3B8" },
                  { label: "Pro", count: tierData.pro ?? 0, color: "#00C9B1" },
                  { label: "Elite", count: tierData.elite ?? 0, color: "#D4A017" },
                  { label: "Founders", count: tierData.founders ?? 0, color: "#FF8A00" },
                ].map((t) => (
                  <div key={t.label} className="rounded-xl border border-[#1A2D50] p-4 text-center" style={{ background: "#080C14" }}>
                    <p className="text-xs text-slate-500 mb-1">{t.label}</p>
                    <p className="font-display text-3xl font-black" style={{ color: t.color }}>{t.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Features */}
            <div className="mb-8 rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-5">Top Features Used</h2>
              {topFeatures.length === 0 ? (
                <p className="text-sm text-slate-500">No feature usage data available yet.</p>
              ) : (
                <div className="space-y-3">
                  {topFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <p className="text-sm text-slate-400 w-40 truncate">{f.feature || f.name}</p>
                      <div className="flex-1 h-2 rounded-full bg-[#1A2D50]">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${Math.max(4, (f.count / (topFeatures[0]?.count || 1)) * 100)}%`,
                            background: "linear-gradient(90deg, #D4A017, #FF8A00)",
                          }}
                        />
                      </div>
                      <p className="text-sm font-bold text-white w-10 text-right">{f.count}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
              <div className="px-6 py-4 border-b border-[#1A2D50]">
                <h2 className="font-display text-lg font-bold text-white">Recent Activity</h2>
              </div>
              {recentActivity.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">No recent activity.</div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2D50]">
                      {["User", "Event", "Feature", "Time"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((a, i) => (
                      <tr key={i} className="border-b border-[#1A2D50] hover:bg-white/[0.02] transition-all">
                        <td className="px-4 py-3 text-white font-medium">{a.user || a.email || "—"}</td>
                        <td className="px-4 py-3 text-slate-400">{a.event || a.action || "—"}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full border border-[#1A2D50] px-2 py-0.5 text-xs text-slate-400">{a.feature || "—"}</span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 text-xs">
                          {a.timestamp ? new Date(a.timestamp).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
