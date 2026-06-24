import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PLAN_LABELS = {
  free: { label: "Free Roadmap", color: "#D4A017", next: "/pricing" },
  pro: { label: "Pro Strategy", color: "#1E88E5", next: "/elite" },
  elite: { label: "Elite Execution", color: "#7C3AED", next: "/founders" },
  founders: { label: "Legacy Founder", color: "#FF8A00", next: null },
};

const SECTION = ({ title, children }) => (
  <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
    <h3 className="mb-5 font-bold text-white text-lg border-b border-[#1A2D50] pb-3">{title}</h3>
    {children}
  </div>
);

const Field = ({ label, value, type = "text", onChange, placeholder, readOnly }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-slate-400">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
        readOnly
          ? "border-[#1A2235] text-slate-500 cursor-not-allowed"
          : "border-[#1A2235] focus:border-[#D4A017]"
      }`}
    />
  </div>
);

export default function SettingsPage() {
  const [user, setUser] = useState({ name: "", email: "", tier: "free" });
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [saved, setSaved] = useState(false);
  const [pwForm, setPwForm] = useState({ current: "", next: "", confirm: "" });
  const [pwMsg, setPwMsg] = useState("");
  const [notifs, setNotifs] = useState({ marketing: true, product: true, roadmap: true });

  useEffect(() => {
    const raw = localStorage.getItem("pen2pro_user");
    if (raw) {
      const u = JSON.parse(raw);
      setUser(u);
      setProfile({ name: u.name || "", email: u.email || "" });
    }
  }, []);

  function handleSaveProfile(e) {
    e.preventDefault();
    const updated = { ...user, name: profile.name, email: profile.email };
    localStorage.setItem("pen2pro_user", JSON.stringify(updated));
    setUser(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    if (pwForm.next !== pwForm.confirm) {
      setPwMsg("New passwords do not match.");
      return;
    }
    if (pwForm.next.length < 8) {
      setPwMsg("Password must be at least 8 characters.");
      return;
    }
    setPwMsg("Password change requires backend connection — coming soon.");
    setTimeout(() => setPwMsg(""), 3000);
  }

  const plan = PLAN_LABELS[user.tier] || PLAN_LABELS.free;

  return (
    <div className="space-y-6 max-w-2xl mx-auto py-6 px-4">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-black text-white">Account Settings</h1>
        <p className="mt-1 text-sm text-slate-400">Manage your profile, plan, and preferences.</p>
      </div>

      {/* Current Plan */}
      <SECTION title="Your Plan">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center text-lg"
              style={{ background: `${plan.color}22`, border: `1.5px solid ${plan.color}44` }}>
              {user.tier === "founders" ? "👑" : user.tier === "elite" ? "🏆" : user.tier === "pro" ? "📈" : "⚡"}
            </div>
            <div>
              <p className="font-bold text-white">{plan.label}</p>
              <p className="text-xs text-slate-500">Active plan</p>
            </div>
          </div>
          {plan.next && (
            <Link to={plan.next}
              className="rounded-xl px-4 py-2 text-xs font-bold text-[#080C14]"
              style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)" }}>
              Upgrade →
            </Link>
          )}
          {!plan.next && (
            <span className="rounded-xl px-4 py-2 text-xs font-bold text-[#FF8A00] border border-[#FF8A00]/30">
              Lifetime ✓
            </span>
          )}
        </div>
      </SECTION>

      {/* Profile */}
      <SECTION title="Profile">
        <form onSubmit={handleSaveProfile} className="space-y-4">
          <Field label="Full Name" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} placeholder="Your name" />
          <Field label="Email Address" value={profile.email} type="email" onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" />
          <div className="flex items-center gap-3">
            <button type="submit"
              className="rounded-xl px-6 py-2.5 text-sm font-bold text-[#080C14]"
              style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)" }}>
              Save Changes
            </button>
            {saved && <span className="text-sm text-green-400 font-semibold">✓ Saved</span>}
          </div>
        </form>
      </SECTION>

      {/* Password */}
      <SECTION title="Change Password">
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <Field label="Current Password" value={pwForm.current} type="password" onChange={e => setPwForm(p => ({ ...p, current: e.target.value }))} placeholder="••••••••" />
          <Field label="New Password" value={pwForm.next} type="password" onChange={e => setPwForm(p => ({ ...p, next: e.target.value }))} placeholder="Min 8 characters" />
          <Field label="Confirm New Password" value={pwForm.confirm} type="password" onChange={e => setPwForm(p => ({ ...p, confirm: e.target.value }))} placeholder="••••••••" />
          {pwMsg && <p className="text-sm text-[#D4A017]">{pwMsg}</p>}
          <button type="submit"
            className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Update Password
          </button>
        </form>
      </SECTION>

      {/* Notifications */}
      <SECTION title="Notifications">
        <div className="space-y-4">
          {[
            { key: "marketing", label: "Marketing & announcements", desc: "New features, offers, and platform news" },
            { key: "product", label: "Product updates", desc: "Changelog, new tools, and improvements" },
            { key: "roadmap", label: "Roadmap reminders", desc: "Reminders to review and act on your blueprint" },
          ].map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
              </div>
              <button
                onClick={() => setNotifs(n => ({ ...n, [key]: !n[key] }))}
                className={`relative h-6 w-11 rounded-full transition-colors ${notifs[key] ? "bg-[#D4A017]" : "bg-[#1A2235]"}`}
                aria-label={`Toggle ${label}`}
              >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${notifs[key] ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </SECTION>

      {/* Danger zone */}
      <SECTION title="Account">
        <div className="space-y-3">
          <p className="text-sm text-slate-400">
            Need help?{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#1E88E5] hover:underline">support@pen2pro.com</a>
          </p>
          <button
            className="rounded-xl border border-red-500/30 px-4 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
            onClick={() => {
              if (confirm("Sign out of PEN2PRO?")) {
                localStorage.removeItem("pen2pro_token");
                localStorage.removeItem("pen2pro_user");
                window.location.href = "/login";
              }
            }}
          >
            Sign Out
          </button>
        </div>
      </SECTION>
    </div>
  );
}
