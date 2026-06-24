import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ConversionFunnel from "../components/admin/ConversionFunnel";
import AdminMetricCard from "../components/admin/AdminMetricCard";
import { getAdminMetrics } from "../api/adminApi";

export default function AdminConversionsPage() {
  const key = sessionStorage.getItem("pen2pro_admin_key");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    getAdminMetrics()
      .then(setData)
      .catch(() => setError("Failed to load conversion data."))
      .finally(() => setLoading(false));
  }, [key]);

  if (!key) return <Navigate to="/admin" replace />;

  const completions  = data?.total_checkouts_completed ?? 0;
  const started      = data?.total_checkouts_started   ?? 0;
  const checkoutRate = started > 0 ? ((completions / started) * 100).toFixed(1) : "0.0";
  const revenue      = data?.estimated_revenue ?? 0;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition">
            ← Back to Admin
          </Link>
          <h1 className="font-display text-3xl font-black text-white mt-2">Revenue Funnel</h1>
          <p className="text-sm text-slate-500 mt-1">
            Upgrade signals, checkout progression, and conversion metrics
          </p>
        </div>

        {loading && (
          <div className="text-center py-20 text-slate-500">Loading conversion data...</div>
        )}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {data && (
          <>
            {/* Metric Cards */}
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <AdminMetricCard
                label="Est. Revenue"
                value={`$${revenue.toLocaleString()}`}
                icon="💰"
                color="#10B981"
              />
              <AdminMetricCard
                label="Checkouts Completed"
                value={completions}
                icon="✅"
                color="#D4A017"
              />
              <AdminMetricCard
                label="Checkouts Started"
                value={started}
                icon="🛒"
                color="#1E88E5"
              />
              <AdminMetricCard
                label="Checkout Rate"
                value={`${checkoutRate}%`}
                icon="📈"
                color="#A855F7"
              />
            </div>

            {/* Funnel + Summary */}
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <ConversionFunnel data={data.funnel_summary ?? {}} />

              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: '#0F1520' }}>
                <h3 className="font-display text-base font-bold text-white mb-5">Event Breakdown</h3>
                {data.conversion_summary && Object.keys(data.conversion_summary).length > 0 ? (
                  <div className="space-y-1">
                    {Object.entries(data.conversion_summary).map(([event, count], i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2.5 border-b border-[#1A2235] last:border-0"
                      >
                        <span className="text-sm text-slate-400 capitalize">
                          {event.replace(/_/g, ' ')}
                        </span>
                        <span className="font-bold text-white">{(count ?? 0).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">No conversion data yet.</p>
                )}
              </div>
            </div>

            {/* Revenue panel */}
            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: '#0F1520' }}>
              <h3 className="font-display text-base font-bold text-white mb-1">Revenue Estimate</h3>
              <p className="text-sm text-slate-500 mb-6">Based on completed checkouts and plan pricing.</p>
              <div className="flex items-end gap-6 flex-wrap">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Estimated Revenue</p>
                  <p className="font-display text-5xl font-black" style={{ color: '#10B981' }}>
                    ${revenue.toLocaleString()}
                  </p>
                </div>
                <div className="mb-1 space-y-1">
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-bold">{completions}</span> completed checkouts
                  </p>
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-bold">{checkoutRate}%</span> checkout-to-completion rate
                  </p>
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-bold">{data.total_upgrade_clicks ?? 0}</span> upgrade button clicks
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
