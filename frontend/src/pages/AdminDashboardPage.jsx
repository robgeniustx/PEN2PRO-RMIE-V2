import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function AdminDashboardPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchMetrics(adminKey) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/admin/waitlist-metrics`, {
        headers: { "x-admin-key": adminKey },
      });
      const json = await res.json();
      if (res.status === 403) {
        setKeyError("Invalid admin key");
        setKey("");
        sessionStorage.removeItem("pen2pro_admin_key");
        return;
      }
      if (!res.ok) throw new Error(json.detail || "Failed to load metrics");
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (key) fetchMetrics(key);
  }, [key]);

  function handleKeySubmit(e) {
    e.preventDefault();
    setKeyError("");
    sessionStorage.setItem("pen2pro_admin_key", keyInput);
    setKey(keyInput);
  }

  // Key gate
  if (!key) {
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Admin Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">PEN2PRO waitlist &amp; signups</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/waitlist" className="btn-gold px-5 py-2.5 text-sm font-bold">
              View Waitlist
            </Link>
            <Link to="/admin/analytics" className="btn-outline px-5 py-2.5 text-sm font-bold">
              Analytics
            </Link>
            <button
              onClick={() => { sessionStorage.removeItem("pen2pro_admin_key"); setKey(""); }}
              className="btn-outline px-5 py-2.5 text-sm font-bold"
            >
              Sign Out
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20 text-slate-500">Loading metrics...</div>
        )}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error} —{" "}
            <button onClick={() => fetchMetrics(key)} className="underline">Retry</button>
          </div>
        )}

        {data && (
          <>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <Link to="/admin/analytics" className="rounded-2xl border border-[#1A2235] p-5 transition hover:border-[#D4A017]/40" style={{ background: "#0F1520" }}>
                <p className="text-xs text-slate-500 mb-1">Analytics</p>
                <h3 className="text-white font-bold">Event Intelligence</h3>
                <p className="text-sm text-slate-400 mt-2">View event volume, tier distribution, and recent tracked activity.</p>
              </Link>
              <Link to="/admin/feature-usage" className="rounded-2xl border border-[#1A2235] p-5 transition hover:border-[#D4A017]/40" style={{ background: "#0F1520" }}>
                <p className="text-xs text-slate-500 mb-1">Feature Usage</p>
                <h3 className="text-white font-bold">Module Adoption</h3>
                <p className="text-sm text-slate-400 mt-2">Check module engagement and top utilized PEN2PRO tools.</p>
              </Link>
              <Link to="/admin/conversions" className="rounded-2xl border border-[#1A2235] p-5 transition hover:border-[#D4A017]/40" style={{ background: "#0F1520" }}>
                <p className="text-xs text-slate-500 mb-1">Conversions</p>
                <h3 className="text-white font-bold">Revenue Funnel</h3>
                <p className="text-sm text-slate-400 mt-2">Inspect upgrades, checkout progress, and conversion signals.</p>
              </Link>
            </div>

            {/* Metric Cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Total Signups", value: data.total_signups ?? 0, color: "#D4A017" },
                { label: "Pro Interest", value: data.by_interest?.["Pro Plan ($47/mo)"] ?? 0, color: "#00C9B1" },
                { label: "Elite Interest", value: data.by_interest?.["Elite Plan ($97/mo)"] ?? 0, color: "#D4A017" },
                { label: "Founders Interest", value: data.by_interest?.["Founders Lifetime ($497)"] ?? 0, color: "#D4A017" },
              ].map((m, i) => (
                <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                  <p className="text-xs text-slate-500 mb-2">{m.label}</p>
                  <p className="font-display text-3xl font-black" style={{ color: m.color }}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Interest Breakdown */}
            {data.by_interest && Object.keys(data.by_interest).length > 0 && (
              <div className="mb-8 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Interest Breakdown</h2>
                <div className="space-y-3">
                  {Object.entries(data.by_interest).map(([interest, count], i) => (
                    <div key={i} className="flex items-center gap-4">
                      <p className="text-sm text-slate-400 w-40">{interest}</p>
                      <div className="flex-1 h-2 rounded-full bg-[#1A2235]">
                        <div
                          className="h-2 rounded-full gradient-gold"
                          style={{ width: `${Math.max(4, (count / data.total_signups) * 100)}%` }}
                        />
                      </div>
                      <p className="text-sm font-bold text-white w-8 text-right">{count}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Referral Breakdown */}
            {data.by_referral && Object.keys(data.by_referral).length > 0 && (
              <div className="mb-8 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <h2 className="font-display text-lg font-bold text-white mb-4">Referral Sources</h2>
                <div className="space-y-3">
                  {Object.entries(data.by_referral).sort((a,b) => b[1]-a[1]).map(([ref, count], i) => (
                    <div key={i} className="flex items-center gap-4">
                      <p className="text-sm text-teal-400 w-40 truncate">🤝 {ref}</p>
                      <div className="flex-1 h-2 rounded-full bg-[#1A2235]">
                        <div
                          className="h-2 rounded-full"
                          style={{ width: `${Math.max(4, (count / data.total_signups) * 100)}%`, background: "linear-gradient(90deg,#00C9B1,#00A99D)" }}
                        />
                      </div>
                      <p className="text-sm font-bold text-white w-8 text-right">{count}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Signups */}
            <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2235]">
                <h2 className="font-display text-lg font-bold text-white">Recent Signups</h2>
                <Link to="/admin/waitlist" className="text-xs font-semibold" style={{ color: "#D4A017" }}>
                  View all →
                </Link>
              </div>
              {(data.recent_5 || []).length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-500 text-sm">No signups yet.</div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A2235]">
                      {["Name", "Email", "Interest", "Submitted"].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(data.recent_5 || []).map((entry, i) => (
                      <tr key={i} className="border-b border-[#1A2235] hover:bg-white/[0.02] transition-all">
                        <td className="px-4 py-3 text-white font-medium">{entry.name}</td>
                        <td className="px-4 py-3 text-slate-400">{entry.email}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-2 py-0.5 text-xs font-semibold" style={{ color: "#D4A017" }}>
                            {entry.interest}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 text-xs">
                          {new Date(entry.submitted_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
