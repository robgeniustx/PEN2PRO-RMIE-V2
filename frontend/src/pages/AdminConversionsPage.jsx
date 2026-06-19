import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getAdminMetrics } from "../api/adminApi";

function StatRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#1A2235]">
      <span className="text-sm text-slate-400 capitalize">{label.replace(/_/g, " ")}</span>
      <span className={`text-sm font-black ${highlight ? "text-[#FF8A00]" : "text-white"}`}>
        {value ?? 0}
      </span>
    </div>
  );
}

function ConvRate({ label, numerator, denominator }) {
  const rate = denominator > 0 ? ((numerator / denominator) * 100).toFixed(1) : "0.0";
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{label}</p>
      <p className="font-display text-4xl font-black text-[#D4A017]">{rate}%</p>
      <p className="text-xs text-slate-600 mt-1">{numerator} / {denominator}</p>
    </div>
  );
}

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    getAdminMetrics().then(setMetrics);
  }, []);

  const cs = metrics?.conversion_summary || {};
  const fs = metrics?.funnel_summary || {};

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8 flex items-center gap-4">
          <Link to="/admin" className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">
            ← Admin
          </Link>
          <h1 className="font-display text-2xl font-black text-white">Conversions</h1>
        </div>

        {!metrics ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 rounded-full border-2 border-t-[#FF8A00] border-[#1A2D50] animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Conversion rates */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <ConvRate
                label="Starter → Blueprint"
                numerator={fs.blueprint_generated}
                denominator={fs.starter_visits}
              />
              <ConvRate
                label="Pricing → Upgrade Click"
                numerator={cs.upgrade_click}
                denominator={fs.pricing_viewed}
              />
              <ConvRate
                label="Checkout → Completed"
                numerator={cs.checkout_completed}
                denominator={cs.checkout_started}
              />
            </div>

            {/* Revenue card */}
            <div className="rounded-2xl border border-[#D4A017] bg-[#0F1520] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Estimated Revenue</p>
              <p className="font-display text-4xl font-black text-[#D4A017]">
                ${(metrics.estimated_revenue || 0).toLocaleString()}
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Based on {cs.checkout_completed || 0} completed checkouts
              </p>
            </div>

            {/* Conversion events */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="font-display text-lg font-black text-white mb-4">Conversion Events</h2>
              {Object.entries(cs).map(([key, val]) => (
                <StatRow
                  key={key}
                  label={key}
                  value={val}
                  highlight={key === "checkout_completed"}
                />
              ))}
            </div>

            {/* Funnel detail */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="font-display text-lg font-black text-white mb-4">Full Funnel Detail</h2>
              {Object.entries(fs).map(([key, val]) => (
                <StatRow key={key} label={key} value={val} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
