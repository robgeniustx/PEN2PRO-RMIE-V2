import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getFeatureUsageSummary, getModuleUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";
import ModuleUsageChart from "../components/admin/ModuleUsageChart";

export default function AdminFeatureUsagePage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [features, setFeatures] = useState(null);
  const [modules, setModules] = useState(null);
  const [loading, setLoading] = useState(false);

  async function load(adminKey) {
    setLoading(true);
    setKeyError("");
    try {
      const [f, m] = await Promise.all([
        getFeatureUsageSummary(adminKey),
        getModuleUsageSummary(adminKey),
      ]);
      setFeatures(f);
      setModules(m);
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
            <p className="text-sm text-slate-500 mt-1">Enter your admin key to view feature usage</p>
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
        <h1 className="font-display text-3xl font-black text-white mt-2 mb-1">Module Adoption</h1>
        <p className="text-sm text-slate-500 mb-8">Feature engagement and top utilized PEN2PRO tools</p>

        {loading && <div className="text-center py-20 text-slate-500">Loading feature usage...</div>}

        {!loading && features && modules && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-4">Feature Usage</h2>
              <FeatureUsageTable data={features} />
            </div>
            <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-4">Module Usage</h2>
              <ModuleUsageChart data={modules} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
