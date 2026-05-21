import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    industry: "",
    notifications: true,
    marketing_emails: false,
  });

  function update(field, val) {
    setForm((f) => ({ ...f, [field]: val }));
  }

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-2xl px-5 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-black text-white">Settings</h1>
          <p className="mt-2 text-slate-400 text-sm">Manage your PEN2PRO profile and preferences.</p>
        </div>

        {saved && (
          <div className="mb-6 rounded-xl border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-4 py-3 text-sm text-[#00C9B1]">
            Settings saved successfully.
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Profile */}
          <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-base font-bold text-white mb-5">Profile</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { field: "name", label: "Full Name", placeholder: "Robert Green" },
                { field: "email", label: "Email Address", placeholder: "you@example.com" },
                { field: "phone", label: "Phone Number", placeholder: "(832) 555-0100" },
                { field: "business_name", label: "Business Name", placeholder: "Your Business LLC" },
              ].map(({ field, label, placeholder }) => (
                <div key={field}>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</label>
                  <input
                    type="text"
                    value={form[field]}
                    onChange={(e) => update(field, e.target.value)}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Business */}
          <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-base font-bold text-white mb-5">Business Profile</h2>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-400 uppercase tracking-wider">Industry / Category</label>
              <input
                type="text"
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
                placeholder="e.g. Pressure Washing, Consulting, E-commerce"
                className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-base font-bold text-white mb-5">Notifications</h2>
            <div className="space-y-4">
              {[
                { field: "notifications", label: "Platform notifications", desc: "Get notified about roadmap updates and platform news" },
                { field: "marketing_emails", label: "Marketing emails", desc: "Receive tips, strategies, and PEN2PRO updates" },
              ].map(({ field, label, desc }) => (
                <div key={field} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => update(field, !form[field])}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      form[field] ? "bg-[#D4A017]" : "bg-[#1A2D50]"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        form[field] ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button type="submit" className="btn-gold flex-1 py-3 text-sm font-bold">
              Save Settings
            </button>
            <Link to="/dashboard" className="btn-outline flex-1 py-3 text-sm font-bold text-center">
              Back to Dashboard
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
