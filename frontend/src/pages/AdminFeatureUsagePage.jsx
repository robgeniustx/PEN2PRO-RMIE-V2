import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { getFeatureUsageSummary, getModuleUsageSummary } from "../api/adminApi";

const ADMIN_NAV = [
  { label: "Overview", to: "/admin" },
  { label: "Waitlist", to: "/admin/waitlist" },
  { label: "Analytics", to: "/admin/analytics" },
  { label: "Feature Usage", to: "/admin/feature-usage" },
  { label: "Conversions", to: "/admin/conversions" },
];

function AdminKeyGate({ onUnlock }) {
  const [input, setInput] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    sessionStorage.setItem("pen2pro_admin_key", input);
    onUnlock(input);
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#080C14" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
            P2P
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
          <p className="text-sm text-slate-500 mt-1">Enter your admin key to continue</p>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Admin access key"
            className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
          />
          <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">Access Admin Panel</button>
        </form>
      </div>
    </div>
  );
}

export default function AdminFeatureUsagePage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [features, setFeatures] = useState(null);
  const [modules, setModules] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    setLoading(true);
    Promise.all([getFeatureUsageSummary(), getModuleUsageSummary()])
      .then(([f, m]) => { setFeatures(f); setModules(m); })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [key]);

  if (!key) return <AdminKeyGate onUnlock={setKey} />;

  const featureList = Array.isArray(features) ? features : Object.entries(features || {}).map(([k, v]) => ({ feature: k, count: v, name: k }));
  const moduleList = Array.isArray(modules) ? modules : Object.entries(modules || {}).map(([k, v]) => ({ module: k, count: v, name: k }));

  const maxFeatureCount = Math.max(1, ...featureList.map(f => f.count ?? f.uses ?? 0));
  const maxModuleCount = Math.max(1, ...moduleList.map(m => m.count ?? m.uses ?? 0));

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Feature Usage</h1>
            <p className="text-sm text-slate-500 mt-1">Module adoption &amp; top utilized tools</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ADMIN_NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg border border-[#1A2235] px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-[#D4A017]/40 hover:text-white"
                style={n.to === "/admin/feature-usage" ? { borderColor: "#D4A017", color: "#D4A017" } : {}}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { sessionStorage.removeItem("pen2pro_admin_key"); setKey(""); }}
              className="rounded-lg border border-[#1A2235] px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        {loading && <div className="py-20 text-center text-slate-500">Loading feature usage data...</div>}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
        )}

        {(features || modules) && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Top Features */}
            <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
              <div className="px-6 py-4 border-b border-[#1A2235]">
                <h2 className="font-display text-lg font-bold text-white">Top Features</h2>
                <p className="text-xs text-slate-500 mt-0.5">Most used PEN2PRO features by users</p>
              </div>
              {featureList.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-500 text-sm">No feature usage data yet.</div>
              ) : (
                <div className="divide-y divide-[#1A2235]">
                  {featureList.slice(0, 15).map((f, i) => {
                    const count = f.count ?? f.uses ?? 0;
                    const name = f.name ?? f.feature ?? f.key ?? `Feature ${i + 1}`;
                    const pct = Math.round((count / maxFeatureCount) * 100);
                    return (
                      <div key={i} className="flex items-center gap-4 px-6 py-3 hover:bg-white/[0.02] transition">
                        <p className="w-6 text-xs font-bold text-slate-600">{i + 1}</p>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-200 truncate capitalize">{String(name).replace(/_/g, " ")}</p>
                          <div className="mt-1.5 h-1.5 w-full rounded-full" style={{ background: "#1A2235" }}>
                            <div
                              className="h-1.5 rounded-full"
                              style={{ width: `${Math.max(3, pct)}%`, background: "linear-gradient(90deg,#FF8A00,#FFB347)" }}
                            />
                          </div>
                        </div>
                        <p className="shrink-0 text-sm font-bold text-white">{count.toLocaleString()}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Module Usage */}
            <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
              <div className="px-6 py-4 border-b border-[#1A2235]">
                <h2 className="font-display text-lg font-bold text-white">Module Adoption</h2>
                <p className="text-xs text-slate-500 mt-0.5">Dashboard module engagement rates</p>
              </div>
              {moduleList.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-500 text-sm">No module usage data yet.</div>
              ) : (
                <div className="divide-y divide-[#1A2235]">
                  {moduleList.slice(0, 15).map((m, i) => {
                    const count = m.count ?? m.uses ?? m.sessions ?? 0;
                    const name = m.name ?? m.module ?? m.key ?? `Module ${i + 1}`;
                    const pct = Math.round((count / maxModuleCount) * 100);
                    return (
                      <div key={i} className="flex items-center gap-4 px-6 py-3 hover:bg-white/[0.02] transition">
                        <p className="w-6 text-xs font-bold text-slate-600">{i + 1}</p>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-200 truncate capitalize">{String(name).replace(/_/g, " ")}</p>
                          <div className="mt-1.5 h-1.5 w-full rounded-full" style={{ background: "#1A2235" }}>
                            <div
                              className="h-1.5 rounded-full"
                              style={{ width: `${Math.max(3, pct)}%`, background: "linear-gradient(90deg,#1E88E5,#00C9B1)" }}
                            />
                          </div>
                        </div>
                        <p className="shrink-0 text-sm font-bold text-white">{count.toLocaleString()}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {!features && !modules && !loading && (
          <div className="rounded-2xl border border-[#1A2235] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm">No feature usage data available yet. Data populates as users interact with PEN2PRO modules.</p>
          </div>
        )}
      </div>
    </div>
  );
}
