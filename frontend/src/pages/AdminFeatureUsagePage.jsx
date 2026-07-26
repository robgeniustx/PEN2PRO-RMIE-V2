import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getFeatureUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

export default function AdminFeatureUsagePage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!key) return;
    setLoading(true);
    getFeatureUsageSummary(key).then((d) => { setData(d || []); setLoading(false); });
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

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <Link to="/admin" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">← Admin Dashboard</Link>
          <h1 className="font-display text-3xl font-black text-white mt-1">Module Adoption</h1>
          <p className="text-sm text-slate-500">Which PEN2PRO tools users engage with most.</p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500">Loading feature usage...</div>
        ) : (
          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <FeatureUsageTable data={data} />
          </div>
        )}
      </div>
    </div>
  );
}
