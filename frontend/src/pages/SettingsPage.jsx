import { useState } from "react";
import { Link } from "react-router-dom";

function getUser() {
  try { return JSON.parse(localStorage.getItem("pen2pro_user") || "{}"); } catch { return {}; }
}

const PLAN_LABELS = {
  free: { label: "Free", color: "#64748B", next: "Pro", nextPath: "/pro" },
  pro: { label: "Pro", color: "#2d9cff", next: "Elite", nextPath: "/elite" },
  elite: { label: "Elite", color: "#d4af37", next: "Founders Lifetime", nextPath: "/founders" },
  founders: { label: "Legacy Founder", color: "#FF8A00", next: null, nextPath: null },
};

export default function SettingsPage() {
  const user = getUser();
  const tier = user.tier || "free";
  const plan = PLAN_LABELS[tier] || PLAN_LABELS.free;

  const [name, setName] = useState(user.name || "");
  const [email] = useState(user.email || "");
  const [emailNotify, setEmailNotify] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const updated = { ...user, name };
    localStorage.setItem("pen2pro_user", JSON.stringify(updated));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="mb-8">
          <Link to="/dashboard" className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            ← Dashboard
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Account</p>
          <h1 className="mt-1 font-display text-2xl font-black">Settings</h1>
        </div>

        {/* Current Plan */}
        <div className="mb-5 rounded-2xl border p-5" style={{ borderColor: plan.color + "33", background: plan.color + "08" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Plan</p>
              <p className="mt-1 text-lg font-black" style={{ color: plan.color }}>{plan.label}</p>
            </div>
            {plan.next && (
              <Link
                to={plan.nextPath}
                className="rounded-xl px-4 py-2 text-sm font-bold text-[#081226] transition hover:scale-[1.02]"
                style={{ background: plan.color }}
              >
                Upgrade to {plan.next}
              </Link>
            )}
          </div>
          {tier === "founders" && (
            <p className="mt-2 text-xs text-slate-400">You have lifetime access — all features, no renewals, no limits.</p>
          )}
        </div>

        {/* Profile Settings */}
        <div className="mb-5 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-bold text-white">Profile</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-2.5 text-sm text-white focus:border-[#D4A017] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">Email Address</label>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full cursor-not-allowed rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-2.5 text-sm text-slate-500"
              />
              <p className="mt-1 text-xs text-slate-600">Email cannot be changed here. Contact support.</p>
            </div>
            <button
              type="submit"
              className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#081226] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
            >
              {saved ? "Saved ✓" : "Save Changes"}
            </button>
          </form>
        </div>

        {/* Notifications */}
        <div className="mb-5 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-bold text-white">Notifications</h2>
          <div className="flex items-center justify-between rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-slate-200">Email updates</p>
              <p className="text-xs text-slate-500">Roadmap tips, platform news, and feature announcements</p>
            </div>
            <button
              onClick={() => setEmailNotify(!emailNotify)}
              className={`relative h-6 w-11 rounded-full transition-colors ${emailNotify ? "bg-[#2d9cff]" : "bg-[#1A2235]"}`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${emailNotify ? "left-6" : "left-1"}`}
              />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <h2 className="mb-2 font-bold text-red-400">Account Actions</h2>
          <p className="mb-4 text-sm text-slate-400">
            Sign out of your account on this device.
          </p>
          <button
            onClick={() => {
              localStorage.removeItem("pen2pro_token");
              localStorage.removeItem("pen2pro_user");
              window.location.href = "/login";
            }}
            className="rounded-xl border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
