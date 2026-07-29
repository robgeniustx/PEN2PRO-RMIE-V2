import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getAdminMetrics } from "../api/adminApi";
import AdminMetricCard from "../components/admin/AdminMetricCard";
import ConversionFunnel from "../components/admin/ConversionFunnel";

export default function AdminConversionsPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function load(adminKey) {
    setLoading(true);
    setKeyError("");
    try {
      const result = await getAdminMetrics(adminKey);
      setData(result);
    } catch (err) {
      if (err?.status === 403) {
        setKeyError("Invalid admin key");
        setKey("");
        sessionStorage.removeItem("pen2pro_admin_key");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (key) load(key);
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
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
              P2P
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-sm text-slate-500 mt-1">Enter your admin key to view conversions</p>
          </div>
          <form onSubmit={handleKeySubmit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            {keyError && (
              <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {keyError}
              </div>
            )}
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              placeholder="Admin access key"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
            />
            <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <Link to="/admin" className="text-xs font-semibold" style={{ color: "#D4A017" }}>← Back to Admin</Link>
        <h1 className="font-display text-3xl font-black text-white mt-2 mb-1">Revenue Funnel</h1>
        <p className="text-sm text-slate-500 mb-8">Upgrades, checkout progress, and conversion signals</p>

        {loading && <div className="text-center py-20 text-slate-500">Loading conversions...</div>}

        {!loading && data && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <AdminMetricCard label="Upgrade Clicks" value={data.total_upgrade_clicks ?? 0} />
              <AdminMetricCard label="Checkouts Started" value={data.total_checkouts_started ?? 0} />
              <AdminMetricCard label="Checkouts Completed" value={data.total_checkouts_completed ?? 0} />
              <AdminMetricCard label="Est. Revenue" value={`$${data.estimated_revenue ?? 0}`} />
            </div>
            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-4">Conversion Funnel</h2>
              <ConversionFunnel data={data.conversion_summary} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
