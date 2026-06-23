import { Link } from "react-router-dom";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-white">Settings</h2>
        <p className="mt-1 text-sm text-slate-500">Manage your account preferences, notifications, and workspace defaults.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: "👤", title: "Profile", desc: "Update your name, email, and contact info." },
          { icon: "🔔", title: "Notifications", desc: "Control email and in-app notification preferences." },
          { icon: "🔒", title: "Security", desc: "Change your password and manage session security." },
          { icon: "💳", title: "Billing", desc: "View your plan, invoices, and payment method." },
          { icon: "🔗", title: "Integrations", desc: "Connect Stripe, Twilio, and other tools to your workspace." },
          { icon: "🏢", title: "Business Profile", desc: "Set your business name, industry, and branding defaults." },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border p-5"
            style={{ borderColor: "#1A2D50", background: "#0F1520" }}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border p-6 text-center"
        style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}
      >
        <p className="text-sm font-bold text-white mb-2">Full settings panel coming in the Pro launch.</p>
        <p className="text-xs text-slate-500 mb-4">Upgrade to Pro to unlock advanced settings, integrations, and workspace customization.</p>
        <Link
          to="/pricing"
          className="inline-block rounded-xl px-6 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold"
        >
          View Upgrade Options
        </Link>
      </div>
    </div>
  );
}
