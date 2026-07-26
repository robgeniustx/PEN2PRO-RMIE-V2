import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics } from "../api/adminApi";

const STAGE_LABELS = {
  upgrade_click: "Upgrade Clicked",
  checkout_started: "Checkout Started",
  checkout_completed: "Checkout Completed",
  checkout_cancelled: "Checkout Cancelled",
  plan_viewed: "Plan Viewed",
};

export default function AdminConversionsPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!key) return;
    setLoading(true);
    getAdminMetrics(key).then((m) => { setData(m); setLoading(false); });
  }, [key]);

  function handleKeySubmit(e) {
    e.preventDefault();
    sessionStorage.setItem("pen2pro_admin_key", keyInput);
    setKey(keyInput);
  }

  if (!key) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080C14" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">P2P</div>
            <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-sm text-slate-500 mt-1">Enter your admin key to continue</p>
          </div>
          <form onSubmit={handleKeySubmit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Admin access key"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
            />
            <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">Access Admin Panel</button>
          </form>
        </div>
      </div>
    );
  }

  const summary = data?.conversion_summary || {};
  const maxVal = Math.max(1, ...Object.values(summary));

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">← Admin Dashboard</Link>
          <h1 className="font-display text-3xl font-black text-white mt-1">Revenue Funnel</h1>
          <p className="text-sm text-slate-500">Upgrade clicks, checkout progress, and conversion signals.</p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500">Loading conversions...</div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-2">Estimated Revenue</p>
              <p className="font-display text-4xl font-black" style={{ color: "#D4A017" }}>
                ${Number(data?.estimated_revenue ?? 0).toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-4">Conversion Stages</h2>
              {Object.keys(summary).length === 0 ? (
                <p className="text-sm text-slate-500">No conversion events tracked yet.</p>
              ) : (
                <div className="space-y-3">
                  {Object.entries(summary).map(([stage, count]) => (
                    <div key={stage} className="flex items-center gap-4">
                      <p className="w-44 text-sm text-slate-400">{STAGE_LABELS[stage] || stage}</p>
                      <div className="h-2 flex-1 rounded-full bg-[#1A2235]">
                        <div
                          className="h-2 rounded-full gradient-gold"
                          style={{ width: `${Math.max(4, (count / maxVal) * 100)}%` }}
                        />
                      </div>
                      <p className="w-10 text-right text-sm font-bold text-white">{count}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
