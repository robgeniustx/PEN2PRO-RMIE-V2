import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics } from "../api/adminApi";

const FUNNEL_STEPS = [
  { key: "starter_visits",     label: "Starter Visits",      desc: "Visitors who landed on /starter" },
  { key: "blueprint_generated",label: "Blueprints Generated", desc: "Users who completed intake + got a roadmap" },
  { key: "pricing_viewed",     label: "Pricing Views",        desc: "Users who visited /pricing" },
  { key: "upgrade_clicked",    label: "Upgrade Clicks",       desc: "Users who clicked an upgrade CTA" },
  { key: "checkout_started",   label: "Checkouts Started",    desc: "Stripe checkout sessions initiated" },
  { key: "checkout_completed", label: "Checkouts Completed",  desc: "Successful payments" },
];

function pct(a, b) {
  if (!b || !a) return "—";
  return `${Math.round((a / b) * 100)}%`;
}

function fmt(v) {
  return typeof v === "number" ? v.toLocaleString() : (v ?? "—");
}

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminMetrics().then(m => { setMetrics(m); setLoading(false); });
  }, []);

  const funnel = metrics?.funnel_summary || {};
  const conv = metrics?.conversion_summary || {};
  const revenue = metrics?.estimated_revenue || 0;

  const topStep = FUNNEL_STEPS[0];
  const topVal = funnel[topStep.key] || 1;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/admin" className="hover:text-white transition-colors">Admin</Link>
          <span>/</span>
          <span className="text-white">Conversions</span>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Revenue Funnel</h1>
            <p className="mt-1 text-sm text-slate-500">Track how users move from visitor to paying subscriber</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/analytics" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Analytics
            </Link>
            <Link to="/admin/feature-usage" className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Feature Usage
            </Link>
            <Link to="/admin" className="btn-gold px-4 py-2.5 text-sm font-bold rounded-xl">
              ← Dashboard
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">Loading conversion data...</div>
        ) : (
          <div className="space-y-8">
            {/* Revenue highlight */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#D4A017]/30 p-6 md:col-span-1" style={{ background: "rgba(212,160,23,0.06)" }}>
                <p className="text-xs text-slate-500 mb-2">Estimated Revenue</p>
                <p className="font-display text-4xl font-black" style={{ color: "#D4A017" }}>
                  ${(revenue).toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-slate-500">Based on completed checkouts</p>
              </div>
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <p className="text-xs text-slate-500 mb-2">Checkout Conversion</p>
                <p className="font-display text-4xl font-black text-white">
                  {pct(conv.checkout_completed, conv.checkout_started)}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {fmt(conv.checkout_completed)} of {fmt(conv.checkout_started)} checkouts completed
                </p>
              </div>
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <p className="text-xs text-slate-500 mb-2">Visitor → Blueprint Rate</p>
                <p className="font-display text-4xl font-black text-white">
                  {pct(funnel.blueprint_generated, funnel.starter_visits)}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {fmt(funnel.blueprint_generated)} blueprints from {fmt(funnel.starter_visits)} visits
                </p>
              </div>
            </div>

            {/* Funnel visualization */}
            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-6">Conversion Funnel</h2>
              <div className="space-y-3">
                {FUNNEL_STEPS.map((step, i) => {
                  const val = funnel[step.key] || conv[step.key.replace("starter_visits","plan_viewed")] || 0;
                  const barPct = topVal > 0 ? Math.max(Math.round((val / topVal) * 100), val > 0 ? 2 : 0) : 0;
                  const prevStep = i > 0 ? FUNNEL_STEPS[i - 1] : null;
                  const prevVal = prevStep
                    ? (funnel[prevStep.key] || conv[prevStep.key] || 0)
                    : topVal;
                  const dropPct = prevVal > 0 ? 100 - Math.round((val / prevVal) * 100) : 0;

                  return (
                    <div key={step.key} className="group">
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A2235] text-xs font-bold text-slate-400">
                            {i + 1}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">{step.label}</p>
                            <p className="text-xs text-slate-500">{step.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-black" style={{ color: "#D4A017" }}>{fmt(val)}</p>
                          {i > 0 && dropPct > 0 && (
                            <p className="text-xs text-red-400">-{dropPct}% drop</p>
                          )}
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-[#1A2235]">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${barPct}%`,
                            background: i === FUNNEL_STEPS.length - 1
                              ? "linear-gradient(90deg,#22c55e,#16a34a)"
                              : "linear-gradient(90deg,#D4A017,#F59E0B)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Conversion event summary */}
            {Object.keys(conv).length > 0 && (
              <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
                <div className="px-6 py-4 border-b border-[#1A2235]">
                  <h2 className="font-display text-lg font-bold text-white">Conversion Events</h2>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2235]">
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Event</th>
                      <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A2235]">
                    {Object.entries(conv).map(([event, count], i) => (
                      <tr key={i} className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-medium text-white capitalize">{event.replace(/_/g, " ")}</td>
                        <td className="px-4 py-3 text-right font-black" style={{ color: "#D4A017" }}>
                          {fmt(count)}
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
    </div>
  );
}
