import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TIER_CONFIG = {
  free: {
    label: "Free",
    color: "#64748B",
    features: ["1 business blueprint", "Basic roadmap preview", "Waitlist access"],
  },
  pro: {
    label: "Pro",
    color: "#00C9B1",
    features: ["Unlimited roadmaps", "Full AI strategy engine", "Credit & funding readiness", "Branding support", "Email/PDF export"],
  },
  elite: {
    label: "Elite",
    color: "#D4A017",
    features: ["Everything in Pro", "Advanced strategist guidance", "Financial projections", "Vendor & funding center", "Priority support"],
  },
  founders: {
    label: "Legacy Founder",
    color: "#D4A017",
    features: ["Lifetime access", "All Elite features", "Founder badge & recognition", "Early access to all future features", "Founder community access"],
  },
};

export default function SettingsPage() {
  const [user, setUser] = useState({ name: "", email: "", tier: "free" });
  const [nameInput, setNameInput] = useState("");
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    productUpdates: true,
    roadmapTips: true,
    fundingAlerts: false,
  });

  useEffect(() => {
    document.title = "Account Settings — PEN2PRO";
    const stored = localStorage.getItem("pen2pro_user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setNameInput(parsed.name || "");
    }
  }, []);

  function handleSaveName(e) {
    e.preventDefault();
    const updated = { ...user, name: nameInput };
    localStorage.setItem("pen2pro_user", JSON.stringify(updated));
    setUser(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const tier = user.tier || "free";
  const tierInfo = TIER_CONFIG[tier] || TIER_CONFIG.free;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-16">
        {/* Page header */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            ⚙️ Account Settings
          </div>
          <h1 className="font-display text-3xl font-black text-white">Your Account</h1>
          <p className="mt-2 text-sm text-slate-400">Manage your profile, plan, and preferences.</p>
        </div>

        {/* Profile */}
        <section className="mb-6 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Profile</h2>
          <form onSubmit={handleSaveName} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">Display Name</label>
              <input
                type="text"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">Email Address</label>
              <input
                type="email"
                value={user.email || ""}
                disabled
                className="w-full cursor-not-allowed rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-slate-500"
              />
              <p className="mt-1 text-xs text-slate-600">Email cannot be changed after registration.</p>
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="btn-gold px-6 py-2.5 text-sm font-bold">
                Save Changes
              </button>
              {saved && (
                <span className="text-sm font-semibold text-[#00C9B1]">✓ Saved successfully</span>
              )}
            </div>
          </form>
        </section>

        {/* Current Plan */}
        <section className="mb-6 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Current Plan</h2>
          <div className="flex items-start gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-black"
              style={{ background: `${tierInfo.color}20`, color: tierInfo.color }}
            >
              {tier === "free" ? "FREE" : tier === "pro" ? "PRO" : tier === "elite" ? "ELT" : "LF"}
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-lg">{tierInfo.label}</p>
              <ul className="mt-2 space-y-1">
                {tierInfo.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <span style={{ color: tierInfo.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {tier === "free" && (
            <div className="mt-5 border-t border-[#1A2235] pt-5">
              <p className="mb-3 text-sm text-slate-400">
                Unlock unlimited roadmaps, AI strategy, credit readiness, and execution support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/pricing" className="btn-gold px-5 py-2.5 text-sm font-bold">
                  View Plans
                </Link>
                <Link
                  to="/waitlist?tier=pro"
                  className="rounded-xl border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          )}

          {tier !== "free" && tier !== "founders" && (
            <div className="mt-5 border-t border-[#1A2235] pt-5">
              <Link
                to="/founders"
                className="text-sm font-semibold hover:underline"
                style={{ color: "#D4A017" }}
              >
                Upgrade to Legacy Founder — Lifetime access →
              </Link>
            </div>
          )}
        </section>

        {/* Notifications */}
        <section className="mb-6 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Notifications</h2>
          <div className="space-y-5">
            {[
              { key: "productUpdates", label: "Product Updates", desc: "New features, launch announcements, and improvements" },
              { key: "roadmapTips", label: "Roadmap Tips", desc: "Weekly business building guidance tailored to your stage" },
              { key: "fundingAlerts", label: "Funding Alerts", desc: "New funding opportunities and credit-building resources" },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                </div>
                <button
                  onClick={() => setNotifications(n => ({ ...n, [key]: !n[key] }))}
                  aria-label={`Toggle ${label}`}
                  className={`relative flex h-6 w-11 shrink-0 items-center rounded-full transition-all ${
                    notifications[key] ? "bg-[#D4A017]" : "bg-[#1A2235]"
                  }`}
                >
                  <span
                    className={`absolute h-4 w-4 rounded-full bg-white shadow transition-all ${
                      notifications[key] ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-600">Preferences are stored locally and do not sync across devices.</p>
        </section>

        {/* Account Actions */}
        <section className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Account Actions</h2>
          <div className="space-y-3">
            <Link
              to="/starter"
              className="flex items-center justify-between rounded-xl border border-[#1A2235] p-4 hover:border-[#D4A017]/30 transition-all group"
            >
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors">
                  Generate a New Roadmap
                </p>
                <p className="text-xs text-slate-500">Build your next AI business blueprint</p>
              </div>
              <span className="text-slate-600 group-hover:text-[#D4A017] transition-colors">→</span>
            </Link>

            <Link
              to="/credit-repair"
              className="flex items-center justify-between rounded-xl border border-[#1A2235] p-4 hover:border-[#D4A017]/30 transition-all group"
            >
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors">
                  Check Credit & Funding Readiness
                </p>
                <p className="text-xs text-slate-500">See where you stand for business funding</p>
              </div>
              <span className="text-slate-600 group-hover:text-[#D4A017] transition-colors">→</span>
            </Link>

            <Link
              to="/tasks"
              className="flex items-center justify-between rounded-xl border border-[#1A2235] p-4 hover:border-[#D4A017]/30 transition-all group"
            >
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-[#D4A017] transition-colors">
                  View Your Tasks
                </p>
                <p className="text-xs text-slate-500">Track your business launch checklist</p>
              </div>
              <span className="text-slate-600 group-hover:text-[#D4A017] transition-colors">→</span>
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("pen2pro_token");
                localStorage.removeItem("pen2pro_user");
                window.location.href = "/login";
              }}
              className="flex w-full items-center justify-between rounded-xl border border-red-900/30 p-4 hover:border-red-500/40 transition-all group"
            >
              <div className="text-left">
                <p className="text-sm font-semibold text-red-400">Sign Out</p>
                <p className="text-xs text-slate-500">Sign out of your PEN2PRO account</p>
              </div>
              <span className="text-red-900 group-hover:text-red-400 transition-colors">→</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
