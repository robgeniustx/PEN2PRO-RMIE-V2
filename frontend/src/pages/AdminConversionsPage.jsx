import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminMetrics } from "../api/adminApi";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

function StatCard({ label, value, sub, accent }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0D1528" }}>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accent || "#FF8A00" }}>{label}</p>
      <p className="mt-2 text-3xl font-black text-white">{value ?? "—"}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export default function AdminConversionsPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchMetrics(adminKey) {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/admin/waitlist-metrics`, {
        headers: { "x-admin-key": adminKey },
      });
      if (res.status === 403) {
        setKeyError("Invalid admin key");
        setKey("");
        sessionStorage.removeItem("pen2pro_admin_key");
        return;
      }
      const json = await res.json();
      setMetrics(json);
    } catch {
      // silently fail — show empty state
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { if (key) fetchMetrics(key); }, [key]);

  function handleKeySubmit(e) {
    e.preventDefault();
    setKeyError("");
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
            {keyError && <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{keyError}</div>}
            <input type="password" value={keyInput} onChange={e => setKeyInput(e.target.value)} placeholder="Admin access key"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none" />
            <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">Access Admin Panel</button>
          </form>
        </div>
      </div>
    );
  }

  const conv = metrics?.conversion_summary || {};
  const revenue = metrics?.estimated_revenue;
  const tiers = metrics?.active_tier_counts || {};

  return (
    <div className="min-h-screen p-6" style={{ background: "#080C14" }}>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-white">Conversion Analytics</h1>
          <p className="text-sm text-slate-500 mt-1">Tier upgrades, revenue, and funnel performance</p>
        </div>
        <div className="flex gap-3">
          <Link to="/admin" className="rounded-xl border border-[#1A2235] px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">← Dashboard</Link>
          <Link to="/admin/waitlist" className="rounded-xl border border-[#1A2235] px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">Waitlist</Link>
          <Link to="/admin/analytics" className="rounded-xl border border-[#1A2235] px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">Analytics</Link>
        </div>
      </div>

      {loading && <p className="text-slate-500 text-sm">Loading metrics...</p>}

      {!loading && (
        <>
          {/* Revenue stat */}
          <div className="mb-6">
            <div className="rounded-2xl border p-8 text-center" style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.05)" }}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">Estimated Monthly Revenue</p>
              <p className="mt-3 text-5xl font-black text-white">{revenue ? `$${Number(revenue).toLocaleString()}` : "—"}</p>
              <p className="mt-2 text-sm text-slate-500">Based on active paid tier subscriptions</p>
            </div>
          </div>

          {/* Tier counts */}
          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard label="Pro Users" value={tiers.pro ?? 0} accent="#1E88E5" />
            <StatCard label="Elite Users" value={tiers.elite ?? 0} accent="#00C9B1" />
            <StatCard label="Founders" value={tiers.founders ?? 0} accent="#D4A017" />
            <StatCard label="Free / Starter" value={tiers.free ?? 0} accent="#64748b" />
          </div>

          {/* Conversion summary */}
          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0D1528" }}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Conversion Summary</h2>
            {Object.keys(conv).length > 0 ? (
              <div className="space-y-3">
                {Object.entries(conv).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl border border-[#1A2235] px-4 py-3">
                    <span className="text-sm text-slate-400 capitalize">{k.replace(/_/g, " ")}</span>
                    <span className="text-sm font-bold text-white">{v}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-600">No conversion data available yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
