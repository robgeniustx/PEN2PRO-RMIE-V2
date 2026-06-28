import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";

const ADMIN_NAV = [
  { label: "Overview", path: "/admin" },
  { label: "Waitlist", path: "/admin/waitlist" },
  { label: "Analytics", path: "/admin/analytics" },
  { label: "Feature Usage", path: "/admin/feature-usage" },
  { label: "Conversions", path: "/admin/conversions" },
];

function MetricCard({ label, value, sub, accent }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
      <p className={`mb-1 text-3xl font-black ${accent || "text-white"}`}>{value ?? "—"}</p>
      {sub && <p className="text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

function fmt(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n ?? 0);
}

export default function AdminConversionsPage() {
  const location = useLocation();
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch(() => setError("Could not load metrics. Check admin access key."))
      .finally(() => setLoading(false));
  }, []);

  const conv = metrics?.conversion_summary || {};
  const tierCounts = metrics?.active_tier_counts || {};
  const revenue = metrics?.estimated_revenue;

  const TIER_CARDS = [
    { label: "Free Users", key: "free", accent: "text-slate-300" },
    { label: "Pro Users", key: "pro", accent: "text-[#2d9cff]" },
    { label: "Elite Users", key: "elite", accent: "text-[#D4A017]" },
    { label: "Founders", key: "founders", accent: "text-[#00C9B1]" },
  ];

  return (
    <div className="min-h-screen bg-[#080C14] text-white px-5 py-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Admin Panel</div>
          <h1 className="text-3xl font-black">Conversions &amp; Revenue</h1>
          <p className="mt-1 text-slate-400">
            Track tier upgrades, conversion rates, and estimated platform revenue.
          </p>
        </div>

        {/* Admin nav tabs */}
        <nav className="mb-8 flex flex-wrap gap-2">
          {ADMIN_NAV.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                location.pathname === path
                  ? "bg-[#1A2D50] text-white"
                  : "border border-[#1A2D50] text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {loading && (
          <div className="py-20 text-center text-slate-400">Loading conversion data...</div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Revenue spotlight */}
            <div
              className="mb-8 rounded-2xl border border-[#D4A017]/30 p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,160,23,0.12) 0%, rgba(255,138,0,0.06) 100%)",
              }}
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                Estimated Monthly Revenue
              </p>
              <p className="text-5xl font-black text-white">
                {revenue != null ? fmt(revenue) : "—"}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Based on active paid tier subscriptions
              </p>
            </div>

            {/* Tier counts */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TIER_CARDS.map(({ label, key, accent }) => (
                <MetricCard
                  key={key}
                  label={label}
                  value={tierCounts[key] ?? 0}
                  sub="active accounts"
                  accent={accent}
                />
              ))}
            </div>

            {/* Conversion table */}
            {Object.keys(conv).length > 0 ? (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
                <div className="border-b border-[#1A2D50] px-6 py-4">
                  <h2 className="font-bold text-white">Conversion Summary</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    All conversion events tracked by the platform
                  </p>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2D50] bg-[#0A0F1E]">
                      <th className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Metric
                      </th>
                      <th className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(conv).map(([key, value]) => (
                      <tr key={key} className="border-b border-[#1A2D50]/40 hover:bg-[#1A2235]">
                        <td className="px-6 py-3 font-medium text-slate-300 capitalize">
                          {key.replace(/_/g, " ")}
                        </td>
                        <td className="px-6 py-3 font-bold text-white">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A2D50] text-3xl">
                  📊
                </div>
                <p className="font-bold text-white">No conversion data yet</p>
                <p className="mt-1 text-sm text-slate-400">
                  As users upgrade their plans, conversion metrics will appear here.
                </p>
                <Link
                  to="/admin/waitlist"
                  className="mt-6 inline-block rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  View Waitlist
                </Link>
              </div>
            )}

            {/* Back to admin */}
            <div className="mt-8 text-center">
              <Link to="/admin" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                ← Back to Admin Overview
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
