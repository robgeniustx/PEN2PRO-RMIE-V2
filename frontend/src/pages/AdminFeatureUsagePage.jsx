import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeatureUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function AdminFeatureUsagePage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadData(adminKey) {
    setLoading(true);
    try {
      const result = await getFeatureUsageSummary(adminKey);
      setData(result || []);
    } catch {
      // show empty state
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { if (key) loadData(key); }, [key]);

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

  return (
    <div className="min-h-screen p-6" style={{ background: "#080C14" }}>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-white">Feature Usage</h1>
          <p className="text-sm text-slate-500 mt-1">Most-used platform features and engagement by tier</p>
        </div>
        <div className="flex gap-3">
          <Link to="/admin" className="rounded-xl border border-[#1A2235] px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">← Dashboard</Link>
          <Link to="/admin/analytics" className="rounded-xl border border-[#1A2235] px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">Analytics</Link>
          <Link to="/admin/conversions" className="rounded-xl border border-[#1A2235] px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">Conversions</Link>
        </div>
      </div>

      {loading && <p className="text-slate-500 text-sm">Loading feature data...</p>}

      {!loading && (
        <div className="rounded-2xl border border-[#1A2235]" style={{ background: "#0D1528" }}>
          <div className="border-b border-[#1A2235] px-6 py-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Feature Engagement</h2>
          </div>
          <div className="p-6">
            {data && data.length > 0 ? (
              <FeatureUsageTable data={data} />
            ) : (
              <div className="py-12 text-center">
                <p className="text-slate-600 text-sm">No feature usage data available yet.</p>
                <p className="mt-2 text-slate-700 text-xs">Data will appear here once users interact with platform features.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
