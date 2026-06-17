import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TIER_COLORS = {
  free:     "#1E88E5",
  pro:      "#D4A017",
  elite:    "#00C9B1",
  founders: "#7C3AED",
};

function ConversionRow({ tier, count, revenue }) {
  const color = TIER_COLORS[tier?.toLowerCase()] || "#64748b";
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#1A2235] bg-[#080C14] px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
        <span className="font-semibold capitalize text-white">{tier}</span>
      </div>
      <div className="flex items-center gap-8 text-right">
        <div>
          <p className="text-xs text-slate-600">Conversions</p>
          <p className="font-display text-xl font-black text-white">{count ?? 0}</p>
        </div>
        {revenue !== undefined && (
          <div>
            <p className="text-xs text-slate-600">Revenue</p>
            <p className="font-display text-xl font-black text-emerald-400">
              ${Number(revenue || 0).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch(() => setError("Unable to load conversion data. Check your API connection."))
      .finally(() => setLoading(false));
  }, []);

  const summary = metrics?.conversion_summary || {};
  const summaryEntries = Object.entries(summary);
  const totalConversions = summaryEntries.reduce((s, [, v]) => s + (Number(v) || 0), 0);

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Admin</p>
            <h1 className="mt-1 font-display text-3xl font-black text-white">Conversions</h1>
          </div>
          <div className="flex gap-3">
            <Link to="/admin" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition">
              ← Dashboard
            </Link>
            <Link to="/admin/analytics" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition">
              Analytics
            </Link>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-24 text-slate-500">
            <span className="animate-pulse text-sm">Loading conversion data…</span>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {metrics && (
          <div className="space-y-8">
            {/* Summary cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Conversions</p>
                <p className="mt-2 font-display text-3xl font-black text-white">{totalConversions}</p>
              </div>
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Est. Revenue</p>
                <p className="mt-2 font-display text-3xl font-black text-emerald-400">
                  {metrics.estimated_revenue ? `$${Number(metrics.estimated_revenue).toLocaleString()}` : "—"}
                </p>
                <p className="mt-1 text-xs text-slate-600">Based on active subscriptions</p>
              </div>
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Active Tiers</p>
                <p className="mt-2 font-display text-3xl font-black" style={{ color: "#D4A017" }}>
                  {Object.keys(metrics.active_tier_counts || {}).length}
                </p>
              </div>
            </div>

            {/* Conversion breakdown */}
            {summaryEntries.length > 0 ? (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Conversion by Tier</h3>
                <div className="space-y-3">
                  {summaryEntries.map(([tier, count]) => (
                    <ConversionRow key={tier} tier={tier} count={count} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Conversion by Tier</h3>
                <p className="text-sm text-slate-600">No conversion data available yet. Data appears here once users upgrade to a paid tier.</p>
              </div>
            )}

            {/* Active tier counts */}
            {metrics.active_tier_counts && Object.keys(metrics.active_tier_counts).length > 0 && (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Active Subscribers by Tier</h3>
                <div className="space-y-3">
                  {Object.entries(metrics.active_tier_counts).map(([tier, count]) => (
                    <ConversionRow key={tier} tier={tier} count={count} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
