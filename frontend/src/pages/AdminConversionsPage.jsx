import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";

function ConversionRow({ label, value, percent, color = "#1E88E5" }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#1A2235] last:border-0">
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-200">{label}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-black" style={{ color }}>{value ?? "—"}</p>
        {percent != null && (
          <p className="text-xs text-slate-500">{percent}% of total</p>
        )}
      </div>
    </div>
  );
}

function FunnelBar({ label, value, max, color }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-slate-400 mb-1.5">
        <span className="font-semibold">{label}</span>
        <span>{value?.toLocaleString() ?? "0"} ({pct}%)</span>
      </div>
      <div className="h-2.5 rounded-full bg-[#1A2235] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Conversions | PEN2PRO Admin";
    getAdminMetrics()
      .then(setMetrics)
      .catch(() => setError("Failed to load conversion data."))
      .finally(() => setLoading(false));
  }, []);

  const conv = metrics?.conversion_summary || {};
  const totalUsers = metrics?.total_users || 0;
  const estimatedRevenue = metrics?.estimated_revenue;

  const TIER_COLORS = {
    free: "#64748B",
    pro: "#1E88E5",
    elite: "#FF8A00",
    founders: "#D4A017",
  };

  const tierBreakdown = metrics?.active_tier_counts || {};
  const maxTier = Math.max(...Object.values(tierBreakdown), 1);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center">
        <div className="text-center">
          <div className="h-10 w-10 mx-auto mb-4 rounded-full border-2 border-[#FF8A00] border-t-transparent animate-spin" />
          <p className="text-slate-400 text-sm">Loading conversion data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Admin</Link>
            <span className="text-slate-600">›</span>
            <span className="text-xs text-[#FF8A00] font-semibold">Conversions</span>
          </div>
          <h1 className="text-2xl font-black">Conversion Funnel</h1>
          <p className="text-slate-400 text-sm mt-1">Free-to-paid conversion rates, tier breakdown, and revenue estimates.</p>
        </div>
        <Link
          to="/admin"
          className="rounded-xl border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Admin
        </Link>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Revenue Summary */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mb-8">
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Est. Monthly Revenue</p>
          <p className="text-3xl font-black text-[#D4A017]">
            {estimatedRevenue ? `$${Number(estimatedRevenue).toLocaleString()}` : "—"}
          </p>
          <p className="text-xs text-slate-500 mt-1">from active paid subscriptions</p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Total Registered</p>
          <p className="text-3xl font-black text-white">{totalUsers?.toLocaleString() || "—"}</p>
          <p className="text-xs text-slate-500 mt-1">all-time user accounts</p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 col-span-2 md:col-span-1">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Paid Conversion Rate</p>
          <p className="text-3xl font-black text-[#10B981]">
            {conv.conversion_rate != null ? `${conv.conversion_rate}%` : "—"}
          </p>
          <p className="text-xs text-slate-500 mt-1">free → any paid tier</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Tier Funnel */}
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-black text-white">Tier Distribution</h2>
          {Object.keys(tierBreakdown).length > 0 ? (
            Object.entries(tierBreakdown).map(([tier, count]) => (
              <FunnelBar
                key={tier}
                label={tier.charAt(0).toUpperCase() + tier.slice(1)}
                value={count}
                max={maxTier}
                color={TIER_COLORS[tier] || "#64748B"}
              />
            ))
          ) : (
            <p className="text-slate-500 text-sm">No tier data available yet.</p>
          )}
        </div>

        {/* Conversion Breakdown */}
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-black text-white">Conversion Summary</h2>
          {Object.keys(conv).length > 0 ? (
            <>
              <ConversionRow label="Free Users" value={conv.free_count} percent={conv.free_pct} color="#64748B" />
              <ConversionRow label="Pro Subscribers" value={conv.pro_count} percent={conv.pro_pct} color="#1E88E5" />
              <ConversionRow label="Elite Subscribers" value={conv.elite_count} percent={conv.elite_pct} color="#FF8A00" />
              <ConversionRow label="Founders Members" value={conv.founders_count} percent={conv.founders_pct} color="#D4A017" />
              <ConversionRow label="Waitlist Leads" value={conv.waitlist_count} color="#10B981" />
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-slate-500 text-sm">No conversion data available yet.</p>
              <p className="text-slate-600 text-xs mt-1">Will populate once backend is connected and users are active.</p>
            </div>
          )}
        </div>
      </div>

      {/* Raw Data Debug */}
      {metrics && (
        <details className="mt-6">
          <summary className="text-xs text-slate-600 cursor-pointer hover:text-slate-400 transition-colors">
            Raw JSON (debug)
          </summary>
          <pre className="mt-3 rounded-xl bg-[#0F1520] border border-[#1A2235] p-4 text-xs text-slate-400 overflow-auto max-h-64">
            {JSON.stringify(conv, null, 2)}
          </pre>
        </details>
      )}

      {/* Nav */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Admin Home", "/admin"],
          ["Waitlist", "/admin/waitlist"],
          ["Analytics", "/admin/analytics"],
          ["Feature Usage", "/admin/feature-usage"],
        ].map(([label, path]) => (
          <Link key={path} to={path} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-center text-sm font-semibold text-slate-400 hover:text-white hover:border-[#FF8A00] transition-all">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
