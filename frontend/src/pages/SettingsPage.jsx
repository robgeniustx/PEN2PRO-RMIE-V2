import { useState } from "react";
import { Link } from "react-router-dom";

const TIERS = ["Free", "Pro", "Elite", "Founders"];

function Section({ title, children }) {
  return (
    <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      <h2 className="mb-4 text-lg font-bold text-white">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</label>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const stored = (() => {
    try { return JSON.parse(localStorage.getItem("pen2pro_user") || "{}"); } catch { return {}; }
  })();

  const [name, setName] = useState(stored.name || "Robert Green");
  const [email, setEmail] = useState(stored.email || "");
  const [business, setBusiness] = useState(stored.business || "");
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  function save() {
    localStorage.setItem("pen2pro_user", JSON.stringify({ ...stored, name, email, business }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const tier = stored.tier || "free";
  const tierDisplay = TIERS.find(t => t.toLowerCase() === tier) || "Free";

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Settings</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your profile, preferences, and plan.</p>
      </div>

      <Section title="Profile">
        <Field label="Full Name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[#1A2D50] bg-[#1A2235] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#FF8A00] focus:outline-none"
          />
        </Field>
        <Field label="Email">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full rounded-xl border border-[#1A2D50] bg-[#1A2235] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#FF8A00] focus:outline-none"
          />
        </Field>
        <Field label="Business Name">
          <input
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="w-full rounded-xl border border-[#1A2D50] bg-[#1A2235] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#FF8A00] focus:outline-none"
          />
        </Field>
        <button
          onClick={save}
          className="mt-2 rounded-xl px-6 py-2.5 text-sm font-bold text-[#080C14] btn-gold"
        >
          {saved ? "Saved ✓" : "Save Changes"}
        </button>
      </Section>

      <Section title="Notifications">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-4 w-4 accent-[#FF8A00]"
          />
          <span className="text-sm text-slate-300">Receive roadmap tips and PEN2PRO platform updates</span>
        </label>
      </Section>

      <Section title="Plan & Billing">
        <div className="flex items-center justify-between rounded-xl border border-[#1A2D50] bg-[#1A2235] px-4 py-4">
          <div>
            <p className="font-bold text-white">Current Plan: <span className="text-[#FF8A00]">{tierDisplay}</span></p>
            <p className="mt-0.5 text-xs text-slate-400">
              {tier === "free"
                ? "Starter access — upgrade for full roadmap, branding, and strategy tools."
                : `${tierDisplay} plan active. Full platform access unlocked.`}
            </p>
          </div>
          {tier === "free" && (
            <Link
              to="/pricing"
              className="ml-4 shrink-0 rounded-lg px-4 py-2 text-xs font-bold text-[#080C14] btn-gold"
            >
              Upgrade
            </Link>
          )}
        </div>
        <div className="mt-3 text-xs text-slate-500">
          Need billing help? Contact us at{" "}
          <a href="mailto:support@pen2pro.com" className="text-[#1E88E5] hover:underline">
            support@pen2pro.com
          </a>
        </div>
      </Section>

      <Section title="Account Actions">
        <div className="flex flex-wrap gap-3">
          <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF8A00] transition">
            New Blueprint
          </Link>
          <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF8A00] transition">
            Join Waitlist
          </Link>
          <button
            onClick={() => { localStorage.removeItem("pen2pro_user"); window.location.href = "/login"; }}
            className="rounded-xl border border-red-900/40 px-5 py-2.5 text-sm font-semibold text-red-400 hover:text-red-300 hover:border-red-500 transition"
          >
            Sign Out
          </button>
        </div>
      </Section>
    </div>
  );
}
