import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeatureUsageSummary } from "../api/adminApi";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

export default function AdminFeatureUsagePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeatureUsageSummary()
      .then(setData)
      .catch(() => setError("Unable to load feature usage data."))
      .finally(() => setLoading(false));
  }, []);

  const totalUsage = Array.isArray(data)
    ? data.reduce((s, row) => s + (Number(row.count || row.usage || 0)), 0)
    : 0;

  const topFeature = Array.isArray(data) && data.length > 0 ? data[0] : null;

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Admin</p>
            <h1 className="mt-1 font-display text-3xl font-black text-white">Feature Usage</h1>
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
            <span className="animate-pulse text-sm">Loading feature data…</span>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-6">
            {/* Summary cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Feature Uses</p>
                <p className="mt-2 font-display text-3xl font-black text-white">{totalUsage.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Unique Features</p>
                <p className="mt-2 font-display text-3xl font-black" style={{ color: "#D4A017" }}>
                  {Array.isArray(data) ? data.length : "—"}
                </p>
              </div>
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Top Feature</p>
                <p className="mt-2 font-display text-xl font-black text-white truncate">
                  {topFeature ? (topFeature.feature || topFeature.name || "—") : "—"}
                </p>
              </div>
            </div>

            {/* Feature usage table */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">All Features</h3>
              {data.length > 0 ? (
                <FeatureUsageTable data={data} />
              ) : (
                <p className="text-sm text-slate-600">
                  No feature usage data yet. Data appears here once users start interacting with platform features.
                </p>
              )}
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Admin Navigation</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Dashboard",   href: "/admin" },
                  { label: "Waitlist",    href: "/admin/waitlist" },
                  { label: "Analytics",   href: "/admin/analytics" },
                  { label: "Conversions", href: "/admin/conversions" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-center text-sm font-semibold text-slate-300 hover:border-yellow-500/40 hover:text-yellow-400 transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
