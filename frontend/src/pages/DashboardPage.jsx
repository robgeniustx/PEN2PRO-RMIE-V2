import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_COLORS = {
  free:     { label: "Free",            color: "#64748B", bg: "#64748B15" },
  pro:      { label: "Pro",             color: "#00C9B1", bg: "#00C9B115" },
  elite:    { label: "Elite",           color: "#D4A017", bg: "#D4A01715" },
  founders: { label: "Founders",        color: "#D4A017", bg: "#D4A01730" },
};

const PLAN_RANK = { free: 0, pro: 1, elite: 2, founders: 3 };

function canAccess(userTier, required) {
  return (PLAN_RANK[userTier] || 0) >= (PLAN_RANK[required] || 0);
}

function relativeTime(isoString) {
  if (!isoString) return "";
  const diff = Date.now() - new Date(isoString).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const QUICK_ACTIONS = [
  { label: "Generate Roadmap",    icon: "🗺",  desc: "Build a new AI business roadmap",          link: "/starter",      tier: "free" },
  { label: "Pipeline",            icon: "📊",  desc: "Track deals and close rates",               link: "/dashboard/pipeline", tier: "pro" },
  { label: "Credit Readiness",    icon: "💳",  desc: "Check your business credit path",           link: "/credit-repair", tier: "free" },
  { label: "Funding Resources",   icon: "💰",  desc: "SBA, CDFI, and alternative funding",        link: "/funding",      tier: "free" },
  { label: "Outreach Scripts",    icon: "✉️",  desc: "Cold DM, phone openers, close scripts",     link: "/dashboard/outreach", tier: "pro" },
  { label: "Content Generator",   icon: "✍️",  desc: "Posts, emails, video scripts",              link: "/dashboard/content", tier: "pro" },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser]               = useState(null);
  const [summary, setSummary]         = useState(null);
  const [loading, setLoading]         = useState(true);
  const [roadmaps, setRoadmaps]       = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");

    async function fetchDashboard() {
      // Always try to pull fresh profile from backend first
      if (token) {
        try {
          const meRes = await fetch(`${API}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (meRes.ok) {
            const meData = await meRes.json();
            setUser(meData);
            localStorage.setItem("pen2pro_user", JSON.stringify(meData));
          } else if (meRes.status === 401) {
            // Expired token — clear and show guest
            localStorage.removeItem("pen2pro_token");
            localStorage.removeItem("pen2pro_user");
          }
        } catch {
          // Backend unreachable — fall back to localStorage
        }
      }

      // Fall back to stored user if backend not available
      if (!user) {
        const stored = localStorage.getItem("pen2pro_user");
        if (stored) {
          try { setUser(JSON.parse(stored)); } catch { /* ignore */ }
        }
      }

      // Fetch dashboard summary (roadmap count, tier, etc.)
      if (token) {
        try {
          const summaryRes = await fetch(`${API}/api/users/dashboard-summary`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (summaryRes.ok) {
            const data = await summaryRes.json();
            setSummary(data);
            setUser(data.user);
            setRoadmaps(data.recent_roadmaps || []);
            localStorage.setItem("pen2pro_user", JSON.stringify(data.user));
          }
        } catch {
          // Backend unreachable — show localStorage roadmap
          const last = (() => {
            try { return JSON.parse(localStorage.getItem("pen2pro_last_roadmap") || "null"); }
            catch { return null; }
          })();
          if (last) {
            setRoadmaps([{
              id: "local",
              business_idea: last.business_idea || "Your Roadmap",
              category: last.category || "Business Roadmap",
              created_at: null,
            }]);
          }
        }
      } else {
        // No token — set guest state
        setUser(u => u || { name: "Guest", tier: "free", email: "" });
        // Try localStorage for last roadmap
        const last = (() => {
          try { return JSON.parse(localStorage.getItem("pen2pro_last_roadmap") || "null"); }
          catch { return null; }
        })();
        if (last) {
          setRoadmaps([{
            id: "local",
            business_idea: last.business_idea || "Your Roadmap",
            category: last.category || "Business Roadmap",
            created_at: null,
          }]);
        }
      }

      setLoading(false);
    }

    fetchDashboard();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const tier      = user?.tier || "free";
  const tierInfo  = TIER_COLORS[tier] || TIER_COLORS.free;
  const firstName = (user?.name || "Founder").split(" ")[0];
  const roadmapCount = summary?.stats?.roadmaps_generated ?? roadmaps.length;
  const token = localStorage.getItem("pen2pro_token");

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8 animate-fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-black text-white">
                {loading ? "Loading…" : `Welcome back, ${firstName}`}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: tierInfo.bg, color: tierInfo.color }}
                >
                  {tierInfo.label} Member
                </span>
                {user?.email && (
                  <span className="text-xs text-slate-500">{user.email}</span>
                )}
                {user?.business_name && (
                  <span className="text-xs text-slate-400">· {user.business_name}</span>
                )}
                {user?.city && (
                  <span className="text-xs text-slate-500">{user.city}{user.state ? `, ${user.state}` : ""}</span>
                )}
              </div>
            </div>
            <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">
              + New Roadmap
            </Link>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              label: "Roadmaps Generated",
              value: loading ? "—" : roadmapCount,
              sub: roadmapCount > 0
                ? `${roadmaps[0]?.business_idea?.slice(0, 28) || "Latest roadmap"}…`
                : "Build your first roadmap",
              color: "#D4A017",
            },
            {
              label: "Current Plan",
              value: tierInfo.label,
              sub: tier === "free" ? "Upgrade for full access" : "Full platform access",
              color: tierInfo.color,
            },
            {
              label: "Member Since",
              value: user?.member_since
                ? new Date(user.member_since).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                : "—",
              sub: user?.member_since ? "PEN2PRO account active" : "Not signed in",
              color: "#00C9B1",
            },
            {
              label: "Next Action",
              value: tier === "free" ? "Upgrade" : roadmapCount > 0 ? "Grow" : "Generate",
              sub: tier === "free"
                ? "Join waitlist for Pro / Elite"
                : roadmapCount > 0
                  ? "Refine your roadmap strategy"
                  : "Build your first roadmap",
              color: "#D4A017",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-2">{m.label}</p>
              <p className="font-display text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
              <p className="text-xs text-slate-500 mt-1 truncate">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Upgrade Banner — free users only */}
        {tier === "free" && !loading && (
          <div className="mb-8 rounded-2xl border border-[#D4A017] p-6" style={{ background: "#D4A01708" }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-white mb-1">
                  Unlock the full PEN2PRO platform
                </h2>
                <p className="text-sm text-slate-400">
                  Pro gives you unlimited roadmaps, CRM pipeline, outreach automation, and credit/funding matching.
                  Founders Lifetime — limited to 200 spots.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link to="/waitlist?tier=pro" className="btn-gold px-5 py-2.5 text-sm font-bold whitespace-nowrap">
                  Join Waitlist
                </Link>
                <Link to="/pricing" className="btn-outline px-5 py-2.5 text-sm font-bold whitespace-nowrap">
                  See Plans
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* No account banner */}
        {!token && !loading && (
          <div className="mb-8 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-base font-bold text-white mb-1">Sign in to save your roadmaps</h2>
                <p className="text-sm text-slate-400">Your generated roadmaps are saved to your account and accessible from any device.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link to="/login" className="btn-gold px-5 py-2.5 text-sm font-bold whitespace-nowrap">Sign In</Link>
                <Link to="/signup" className="btn-outline px-5 py-2.5 text-sm font-bold whitespace-nowrap">Create Account</Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Quick Actions + Roadmap History */}
          <div className="lg:col-span-2 space-y-6">

            {/* Quick Actions */}
            <div>
              <h2 className="font-display text-lg font-bold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {QUICK_ACTIONS.map((action, i) => {
                  const locked = !canAccess(tier, action.tier);
                  return (
                    <Link
                      key={i}
                      to={locked ? "/pricing" : action.link}
                      className={`flex items-center gap-4 rounded-2xl border p-4 transition-all group ${
                        locked
                          ? "border-[#1A2235] opacity-50 cursor-default"
                          : "border-[#1A2235] hover:border-[#D4A017]/40"
                      }`}
                      style={{ background: "#0F1520" }}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1A2235] text-2xl group-hover:border-[#D4A017]/40 transition-all">
                        {action.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors truncate">{action.label}</p>
                          {locked && (
                            <span className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase" style={{ background: "#D4A01720", color: "#D4A017" }}>
                              {action.tier}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 truncate">{action.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Roadmap History */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-bold text-white">Your Roadmaps</h2>
                {roadmaps.length > 0 && (
                  <span className="text-xs text-slate-500">{roadmapCount} total</span>
                )}
              </div>
              <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
                {loading ? (
                  <div className="flex items-center justify-center py-10">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#D4A017] border-t-transparent" />
                  </div>
                ) : roadmaps.length > 0 ? (
                  <div className="divide-y divide-[#1A2235]">
                    {roadmaps.map((r, i) => (
                      <Link
                        key={r.id || i}
                        to="/starter"
                        className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-all group"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-gold text-xs font-black text-[#080C14]">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors truncate">
                            {r.business_idea}
                          </p>
                          <p className="text-xs text-slate-500">
                            {r.category || "Business Roadmap"}
                            {r.city ? ` · ${r.city}${r.state ? `, ${r.state}` : ""}` : ""}
                            {r.created_at ? ` · ${relativeTime(r.created_at)}` : ""}
                            {r.is_sample ? " · Preview" : ""}
                          </p>
                        </div>
                        <span className="text-xs text-slate-600 shrink-0">View →</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                    <div className="mb-3 text-4xl">🗺</div>
                    <p className="text-sm font-semibold text-white mb-1">No roadmaps yet</p>
                    <p className="text-xs text-slate-500 mb-4">
                      Build your first free AI business roadmap in under 2 minutes
                    </p>
                    <Link to="/starter" className="btn-gold px-5 py-2.5 text-sm font-bold">
                      Build Your Roadmap
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">

            {/* Account Card */}
            <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Account</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Name</span>
                  <span className="text-white font-medium truncate ml-2">{user?.name || "—"}</span>
                </div>
                {user?.business_name && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Business</span>
                    <span className="text-white truncate ml-2">{user.business_name}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Plan</span>
                  <span className="font-bold" style={{ color: tierInfo.color }}>{tierInfo.label}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Roadmaps</span>
                  <span className="text-white">
                    {loading ? "—" : roadmapCount} / {tier === "free" ? "∞ preview" : "∞"}
                  </span>
                </div>
                {user?.member_since && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Since</span>
                    <span className="text-white">
                      {new Date(user.member_since).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 space-y-2">
                {tier === "free" ? (
                  <Link to="/pricing" className="block text-center text-xs font-semibold" style={{ color: "#D4A017" }}>
                    View upgrade options →
                  </Link>
                ) : (
                  <Link to="/settings" className="block text-center text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                    Account Settings →
                  </Link>
                )}
              </div>
            </div>

            {/* Plan Features */}
            <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Your Plan Includes</p>
              <ul className="space-y-2">
                {(tier === "free" ? [
                  "Free roadmap generator",
                  "Business idea preview",
                  "7-day action plan",
                  "Sales script starter",
                  "Credit readiness checklist",
                ] : tier === "pro" ? [
                  "Unlimited roadmaps",
                  "Full CRM pipeline",
                  "Outreach automation",
                  "Website builder",
                  "AI content generator",
                  "Credit + funding tools",
                ] : [
                  "Everything in Pro",
                  "Advanced AI strategy",
                  "Financial projections",
                  "Done-with-you guidance",
                  "Priority support",
                  "Founders: lifetime access",
                ]).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <span style={{ color: "#00C9B1" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              {tier === "free" && (
                <Link to="/waitlist?tier=pro" className="mt-4 btn-gold block w-full py-2.5 text-center text-xs font-bold">
                  Upgrade to Pro
                </Link>
              )}
            </div>

            {/* Resources */}
            <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Resources</p>
              <div className="space-y-3">
                {[
                  { label: "Affiliate Tools", link: "/affiliate", icon: "🤝" },
                  { label: "Funding Readiness", link: "/funding", icon: "💰" },
                  { label: "Credit Repair Guide", link: "/credit-repair", icon: "📈" },
                  { label: "About PEN2PRO", link: "/about", icon: "📖" },
                ].map((r, i) => (
                  <Link
                    key={i}
                    to={r.link}
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{r.icon}</span>
                    <span>{r.label}</span>
                    <span className="ml-auto text-slate-600 text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
