import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LAUNCH_DATE = new Date("2026-06-10T00:00:00Z");

function daysUntilLaunch() {
  return Math.max(0, Math.floor((LAUNCH_DATE - Date.now()) / 86400000));
}

function parseToken(token) {
  if (!token) return null;
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

const TIER_COLORS = {
  free: { label: "Free", color: "#64748B", bg: "#64748B15" },
  pro: { label: "Pro", color: "#00C9B1", bg: "#00C9B115" },
  elite: { label: "Elite", color: "#D4A017", bg: "#D4A01715" },
  founders: { label: "Founders", color: "#D4A017", bg: "#D4A01730" },
};

const QUICK_ACTIONS = [
  { label: "Generate Roadmap", icon: "🗺", desc: "Build a new AI business roadmap", link: "/starter" },
  { label: "View Pricing", icon: "💎", desc: "Compare Pro, Elite, Founders plans", link: "/pricing" },
  { label: "Credit Readiness", icon: "📊", desc: "Check your business credit path", link: "/credit-repair" },
  { label: "Funding Resources", icon: "💰", desc: "SBA, CDFI, and alternative funding", link: "/funding" },
  { label: "Affiliate Resources", icon: "🤝", desc: "Tools to build and grow your business", link: "/affiliate" },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [countdown, setCountdown] = useState({});
  const days = daysUntilLaunch();

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    const stored = localStorage.getItem("pen2pro_user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else if (token) {
      const payload = parseToken(token);
      if (payload) setUser({ name: payload.name, tier: payload.tier || "free", email: payload.sub });
    } else {
      // Not logged in — allow viewing dashboard with guest state
      setUser({ name: "Guest", tier: "free", email: "" });
    }

    function calcCountdown() {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) return setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calcCountdown();
    const id = setInterval(calcCountdown, 1000);
    return () => clearInterval(id);
  }, []);

  const tier = user?.tier || "free";
  const tierInfo = TIER_COLORS[tier] || TIER_COLORS.free;
  const firstName = (user?.name || "Founder").split(" ")[0];

  const lastRoadmap = (() => {
    try {
      return JSON.parse(localStorage.getItem("pen2pro_last_roadmap") || "null");
    } catch { return null; }
  })();

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Welcome Header */}
        <div className="mb-8 animate-fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-black text-white">
                Welcome back, {firstName} 👋
              </h1>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: tierInfo.bg, color: tierInfo.color }}
                >
                  {tierInfo.label} Member
                </span>
                {user?.email && (
                  <span className="text-xs text-slate-500">{user.email}</span>
                )}
              </div>
            </div>
            <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">
              + New Roadmap
            </Link>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              label: "Roadmaps Generated",
              value: lastRoadmap ? "1" : "0",
              sub: lastRoadmap ? `Latest: ${lastRoadmap.business_idea || "Your Roadmap"}` : "Generate your first roadmap",
              color: "#D4A017",
            },
            {
              label: "Days Until Launch",
              value: days,
              sub: "June 10, 2026 — PEN2PRO goes live",
              color: "#00C9B1",
            },
            {
              label: "Current Tier",
              value: tierInfo.label,
              sub: tier === "free" ? "Upgrade before launch" : "Access confirmed",
              color: tierInfo.color,
            },
            {
              label: "Next Action",
              value: tier === "free" ? "Upgrade" : "Generate",
              sub: tier === "free" ? "Join waitlist for Pro/Elite" : "Build your next roadmap",
              color: "#D4A017",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-2">{m.label}</p>
              <p className="font-display text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
              <p className="text-xs text-slate-500 mt-1">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Upgrade Banner for Free Users */}
        {tier === "free" && (
          <div className="mb-8 rounded-2xl border border-[#D4A017] p-6" style={{ background: "#D4A01708" }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-white mb-1">
                  Upgrade before the June 10 launch
                </h2>
                <p className="text-sm text-slate-400">
                  Pro members get unlimited roadmaps, outreach automation, and credit/funding matching.
                  Founders Lifetime is just $497 — limited to 200 spots.
                </p>
              </div>
              <div className="flex gap-3">
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {QUICK_ACTIONS.map((action, i) => (
                <Link
                  key={i}
                  to={action.link}
                  className="flex items-center gap-4 rounded-2xl border border-[#1A2235] p-4 hover:border-[#D4A017]/40 transition-all group"
                  style={{ background: "#0F1520" }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1A2235] text-2xl group-hover:border-[#D4A017]/40 transition-all">
                    {action.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors">{action.label}</p>
                    <p className="text-xs text-slate-500">{action.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Recent Roadmaps */}
            <div className="mt-6">
              <h2 className="font-display text-lg font-bold text-white mb-4">Recent Roadmaps</h2>
              <div className="rounded-2xl border border-[#1A2235]" style={{ background: "#0F1520" }}>
                {lastRoadmap ? (
                  <Link
                    to="/results"
                    state={{ roadmap: lastRoadmap }}
                    className="flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-gold text-xs font-black text-[#080C14]">
                      P2P
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors">
                        {lastRoadmap.business_idea || "Your Business Roadmap"}
                      </p>
                      <p className="text-xs text-slate-500">{lastRoadmap.category || "Business Roadmap"}</p>
                    </div>
                    <span className="text-xs text-slate-600">View →</span>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                    <div className="mb-3 text-4xl">🗺</div>
                    <p className="text-sm font-semibold text-white mb-1">No roadmaps yet</p>
                    <p className="text-xs text-slate-500 mb-4">Build your first free AI business roadmap in under 2 minutes</p>
                    <Link to="/starter" className="btn-gold px-5 py-2.5 text-sm font-bold">
                      Build Your Roadmap
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: Launch Countdown */}
          <div>
            <h2 className="font-display text-lg font-bold text-white mb-4">Launch Countdown</h2>
            <div className="rounded-2xl border border-[#D4A017]/30 p-6 text-center mb-4" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">PEN2PRO Goes Live</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {["days", "hours", "minutes", "seconds"].map(unit => (
                  <div key={unit} className="countdown-box">
                    <div className="font-display text-2xl font-black" style={{ color: "#D4A017" }}>
                      {String(countdown[unit] ?? 0).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-slate-500 capitalize">{unit}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">June 10, 2026</p>
            </div>

            {/* Account info card */}
            <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Account</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Name</span>
                  <span className="text-white font-medium">{user?.name || "—"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Tier</span>
                  <span className="font-bold" style={{ color: tierInfo.color }}>{tierInfo.label}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Roadmaps</span>
                  <span className="text-white">{lastRoadmap ? 1 : 0} / {tier === "free" ? 1 : "∞"}</span>
                </div>
              </div>
              {tier === "free" && (
                <Link to="/pricing" className="mt-4 block text-center text-xs font-semibold" style={{ color: "#D4A017" }}>
                  View upgrade options →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
