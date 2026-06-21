import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TABS = [
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "plan", label: "Plan & Billing", icon: "💳" },
  { id: "notifications", label: "Notifications", icon: "🔔" },
  { id: "security", label: "Security", icon: "🔒" },
];

function ProfileTab() {
  const [saved, setSaved] = useState(false);
  const save = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return (
    <form onSubmit={save} className="space-y-6">
      <h2 className="text-xl font-black text-white">Profile Information</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          { label: "First Name", placeholder: "Robert" },
          { label: "Last Name", placeholder: "Green" },
        ].map(({ label, placeholder }) => (
          <div key={label}>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
            />
          </div>
        ))}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Business Name (optional)</label>
        <input
          type="text"
          placeholder="Your Business Name"
          className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Industry</label>
        <select className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-slate-300 focus:border-[#FF8A00] focus:outline-none">
          <option value="">Select your industry</option>
          <option>Cleaning Services</option>
          <option>Food & Beverage</option>
          <option>Construction & Trades</option>
          <option>Consulting & Coaching</option>
          <option>E-Commerce / Retail</option>
          <option>Healthcare / Wellness</option>
          <option>Technology</option>
          <option>Transportation & Logistics</option>
          <option>Real Estate</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" className="rounded-xl px-8 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
        {saved ? "✓ Saved" : "Save Changes"}
      </button>
    </form>
  );
}

function PlanTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-white">Plan & Billing</h2>
      <div className="rounded-2xl border border-[#1A2D50] bg-[#0A0F1E] p-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Current Plan</p>
            <p className="text-lg font-black text-white">Free Roadmap</p>
            <p className="text-sm text-slate-400 mt-0.5">Starter tier — limited AI output</p>
          </div>
          <Link to="/pricing" className="rounded-xl px-6 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
            Upgrade Plan
          </Link>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { name: "Pro", price: "$249/mo", color: "#1E88E5", path: "/pro" },
          { name: "Elite", price: "$499/mo", color: "#FF8A00", path: "/elite" },
          { name: "Founders Lifetime", price: "One-Time", color: "#D4A017", path: "/founders" },
        ].map((plan) => (
          <div key={plan.name} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
            <p className="font-black text-white">{plan.name}</p>
            <p className="text-sm mt-1" style={{ color: plan.color }}>{plan.price}</p>
            <Link to={plan.path} className="mt-4 block rounded-lg border border-[#1A2D50] px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationsTab() {
  const [prefs, setPrefs] = useState({
    roadmapUpdates: true,
    productLaunches: true,
    weeklyDigest: false,
    affiliateAlerts: false,
  });
  const toggle = (key) => setPrefs((p) => ({ ...p, [key]: !p[key] }));
  const rows = [
    { key: "roadmapUpdates", label: "Roadmap updates", desc: "Get notified when your roadmap is ready or updated" },
    { key: "productLaunches", label: "Platform announcements", desc: "New features, launches, and PEN2PRO updates" },
    { key: "weeklyDigest", label: "Weekly strategy digest", desc: "A weekly email with business tips and resources" },
    { key: "affiliateAlerts", label: "Affiliate offers", desc: "Relevant partner tools and funding opportunities" },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-white">Notification Preferences</h2>
      <div className="rounded-2xl border border-[#1A2D50] bg-[#0A0F1E] divide-y divide-[#1A2D50]">
        {rows.map(({ key, label, desc }) => (
          <div key={key} className="flex items-center justify-between px-6 py-4 gap-4">
            <div>
              <p className="text-sm font-semibold text-white">{label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
            </div>
            <button
              onClick={() => toggle(key)}
              className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${prefs[key] ? "bg-[#FF8A00]" : "bg-[#1A2D50]"}`}
            >
              <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${prefs[key] ? "translate-x-5" : ""}`} />
            </button>
          </div>
        ))}
      </div>
      <button className="rounded-xl px-8 py-3 text-sm font-black text-[#0A0F1E] btn-gold">Save Preferences</button>
    </div>
  );
}

function SecurityTab() {
  const [saved, setSaved] = useState(false);
  const save = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return (
    <form onSubmit={save} className="space-y-6">
      <h2 className="text-xl font-black text-white">Security Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Current Password</label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
          />
        </div>
      </div>
      <button type="submit" className="rounded-xl px-8 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
        {saved ? "✓ Password Updated" : "Update Password"}
      </button>
      <div className="mt-6 rounded-2xl border border-red-900/40 bg-red-950/20 p-5">
        <p className="text-sm font-bold text-red-400 mb-1">Danger Zone</p>
        <p className="text-xs text-slate-500 mb-3">Permanently delete your PEN2PRO account and all associated data. This action cannot be undone.</p>
        <button type="button" className="rounded-lg border border-red-800 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-900/30 transition-colors">
          Delete Account
        </button>
      </div>
    </form>
  );
}

export default function SettingsPage() {
  const [tab, setTab] = useState("profile");

  const renderTab = () => {
    if (tab === "profile") return <ProfileTab />;
    if (tab === "plan") return <PlanTab />;
    if (tab === "notifications") return <NotificationsTab />;
    if (tab === "security") return <SecurityTab />;
    return null;
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-14 border-b border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-black text-white">Account Settings</h1>
          <p className="text-slate-400 mt-1">Manage your profile, plan, notifications, and security preferences.</p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-8">
          {/* Sidebar tabs */}
          <div className="md:w-56 flex-shrink-0">
            <nav className="space-y-1">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-left transition-colors ${
                    tab === t.id
                      ? "bg-[#0F1520] border border-[#FF8A00]/40 text-[#FF8A00]"
                      : "text-slate-400 hover:text-white hover:bg-[#0F1520]"
                  }`}
                >
                  <span>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
            {renderTab()}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
