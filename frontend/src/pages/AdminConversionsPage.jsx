import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics, getConversionSummary, getFunnelSummary } from "../api/adminApi";
import AdminMetricCard from "../components/admin/AdminMetricCard";
import ConversionFunnel from "../components/admin/ConversionFunnel";

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [conversion, setConversion] = useState(null);
  const [funnel, setFunnel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getAdminMetrics(), getConversionSummary(), getFunnelSummary()])
      .then(([m, c, f]) => {
        setMetrics(m);
        setConversion(c);
        setFunnel(f);
      })
      .catch(() => setError("Failed to load conversion data"))
      .finally(() => setLoading(false));
  }, []);

  const completionRate = conversion
    ? conversion.checkout_started > 0
      ? Math.round((conversion.checkout_completed / conversion.checkout_started) * 100)
      : 0
    : 0;

  const clickToCheckout = conversion
    ? conversion.upgrade_click > 0
      ? Math.round((conversion.checkout_started / conversion.upgrade_click) * 100)
      : 0
    : 0;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
              <Link to="/admin" className="hover:text-[#D4A017] transition-colors">Admin</Link>
              {" · "}Conversions
            </p>
            <h1 className="font-display text-3xl font-black text-white">Revenue Funnel</h1>
            <p className="text-sm text-slate-500 mt-1">Upgrade clicks, checkout progress, and revenue signals</p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Link to="/admin/analytics" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#D4A017]/40 transition-colors">
              Analytics →
            </Link>
            <Link to="/admin/feature-usage" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#D4A017]/40 transition-colors">
              Features →
            </Link>
          </div>
        </div>

        {loading && <div className="py-20 text-center text-slate-500">Loading conversion data…</div>}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
        )}

        {!loading && !error && metrics && (
          <>
            {/* Key Metrics */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <AdminMetricCard
                label="Upgrade Clicks"
                value={metrics.total_upgrade_clicks}
                icon="🚀"
                accent="#FF8A00"
                description="Users who clicked an upgrade CTA"
              />
              <AdminMetricCard
                label="Checkouts Started"
                value={metrics.total_checkouts_started}
                icon="🛒"
                accent="#D4A017"
                description="Users who initiated checkout"
              />
              <AdminMetricCard
                label="Checkouts Completed"
                value={metrics.total_checkouts_completed}
                icon="✅"
                accent="#059669"
                description="Successful payments"
              />
              <AdminMetricCard
                label="Est. Revenue"
                value={`$${(metrics.estimated_revenue || 0).toLocaleString()}`}
                icon="💰"
                accent="#D4A017"
                description="Estimated total revenue"
              />
            </div>

            {/* Conversion rates */}
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Click → Checkout Rate</p>
                <p className="font-display text-4xl font-black" style={{ color: "#D4A017" }}>{clickToCheckout}%</p>
                <p className="mt-1 text-xs text-slate-600">of upgrade clicks start checkout</p>
              </div>
              <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Checkout Completion Rate</p>
                <p className="font-display text-4xl font-black" style={{ color: "#00C9B1" }}>{completionRate}%</p>
                <p className="mt-1 text-xs text-slate-600">of started checkouts complete</p>
              </div>
              <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Plans Viewed</p>
                <p className="font-display text-4xl font-black" style={{ color: "#1E88E5" }}>
                  {conversion?.plan_viewed ?? 0}
                </p>
                <p className="mt-1 text-xs text-slate-600">total plan page views</p>
              </div>
            </div>

            {/* Funnel visualization */}
            <div className="mb-8">
              <ConversionFunnel data={funnel} />
            </div>

            {/* Raw conversion events */}
            {conversion && (
              <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] overflow-hidden">
                <div className="border-b border-[#1A2235] px-6 py-4">
                  <h2 className="font-display text-base font-bold text-white">Conversion Events</h2>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2235]">
                      {["Event", "Count"].map((h) => (
                        <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(conversion).map(([event, count]) => (
                      <tr key={event} className="border-b border-[#1A2235] hover:bg-white/[0.02] transition-all">
                        <td className="px-5 py-3 text-slate-300 font-medium capitalize">{event.replace(/_/g, " ")}</td>
                        <td className="px-5 py-3 font-bold tabular-nums" style={{ color: "#D4A017" }}>
                          {typeof count === "number" ? count.toLocaleString() : count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
