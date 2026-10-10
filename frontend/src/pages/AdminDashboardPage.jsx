import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics } from "../api/adminApi";
import { clearAdminKey } from "../components/layout/AdminRoute";

const money = (n) => `$${Number(n || 0).toLocaleString()}`;

export default function AdminDashboardPage() {
  const [m, setM] = useState(null);

  useEffect(() => { getAdminMetrics().then(setM); }, []);

  const signOut = () => { clearAdminKey(); window.location.assign("/admin"); };

  const cards = m ? [
    { label: "Total Users", value: m.total_users ?? 0 },
    { label: "Roadmaps Generated", value: m.total_blueprints ?? 0 },
    { label: "Upgrade Clicks", value: m.total_upgrade_clicks ?? 0 },
    { label: "Checkouts Completed", value: m.total_checkouts_completed ?? 0 },
    { label: "Revenue", value: money(m.estimated_revenue) },
  ] : [];

  const tiers = Object.entries(m?.active_tier_counts || {});
  const funnel = Object.entries(m?.funnel_summary || {});
  const maxFunnel = Math.max(1, ...funnel.map(([, v]) => v));

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Admin Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">PEN2PRO users, roadmaps, upgrades and revenue</p>
          </div>
          <button onClick={signOut} className="btn-outline px-5 py-2.5 text-sm font-bold">Lock Admin</button>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ["/admin/analytics", "Analytics", "Event Intelligence", "Event volume, tier distribution and recent tracked activity."],
            ["/admin/feature-usage", "Feature Usage", "Module Adoption", "Which PEN2PRO tools people actually use."],
            ["/admin/conversions", "Conversions", "Revenue Funnel", "Upgrades, checkout progress and conversion signals."],
          ].map(([to, kicker, title, desc]) => (
            <Link key={to} to={to} className="rounded-2xl border border-[#1A2235] p-5 transition hover:border-[#D4A017]/40" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-1">{kicker}</p>
              <h3 className="text-white font-bold">{title}</h3>
              <p className="text-sm text-slate-400 mt-2">{desc}</p>
            </Link>
          ))}
        </div>

        {!m && <div className="py-20 text-center text-slate-500">Loading metrics…</div>}

        {m && (
          <>
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
              {cards.map((c) => (
                <div key={c.label} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                  <p className="text-xs text-slate-500 mb-2">{c.label}</p>
                  <p className="font-display text-3xl font-black" style={{ color: "#D4A017" }}>{c.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Accounts by plan</h2>
                {tiers.length === 0 ? <p className="text-sm text-slate-500">No accounts yet.</p> : (
                  <ul className="space-y-2">
                    {tiers.map(([tier, count]) => (
                      <li key={tier} className="flex justify-between text-sm"><span className="capitalize text-slate-400">{tier}</span><span className="font-bold text-white">{count}</span></li>
                    ))}
                  </ul>
                )}
              </section>
              <section className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Funnel</h2>
                {funnel.map(([step, count]) => (
                  <div key={step} className="mb-3 flex items-center gap-4">
                    <p className="w-40 text-sm capitalize text-slate-400">{step.replace(/_/g, " ")}</p>
                    <div className="h-2 flex-1 rounded-full bg-[#1A2235]">
                      <div className="h-2 rounded-full gradient-gold" style={{ width: `${Math.max(3, (count / maxFunnel) * 100)}%` }} />
                    </div>
                    <p className="w-10 text-right text-sm font-bold text-white">{count}</p>
                  </div>
                ))}
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
