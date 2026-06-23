import { Link } from "react-router-dom";

const OUTREACH_TYPES = [
  { icon: "📧", label: "Email Outreach", desc: "Write cold emails, follow-up sequences, and nurture campaigns for your target prospects." },
  { icon: "📱", label: "SMS Campaigns", desc: "Send text-based outreach to local leads, past customers, and warm prospects." },
  { icon: "📞", label: "Call Scripts", desc: "AI-generated sales scripts tailored to your offer and target customer persona." },
  { icon: "📌", label: "Social DMs", desc: "Direct message templates for reaching prospects on social platforms." },
  { icon: "🤝", label: "Referral Outreach", desc: "Templates to ask for referrals from satisfied customers and strategic partners." },
  { icon: "🔄", label: "Re-Engagement", desc: "Win back cold leads and past clients with targeted re-engagement messaging." },
];

export default function OutreachPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-white">Outreach</h2>
        <p className="mt-1 text-sm text-slate-500">AI-powered outreach scripts, email templates, and prospect engagement tools.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {OUTREACH_TYPES.map((type) => (
          <div
            key={type.label}
            className="rounded-2xl border p-5 transition-colors hover:border-[#FF8A00]/30"
            style={{ borderColor: "#1A2D50", background: "#0F1520" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl">{type.icon}</span>
              <h3 className="text-sm font-bold text-white">{type.label}</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{type.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border p-7"
        style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-base font-black text-white mb-2">Outreach module requires Pro.</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pro users get AI-generated sales scripts, 20-prospect-per-day action plans,
              email templates, SMS sequences, and full outreach tracking. Upgrade to start
              building your prospect pipeline today.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <Link
              to="/pro"
              className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold text-center"
            >
              Upgrade to Pro
            </Link>
            <Link
              to="/waitlist"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-300 border border-[#1A2D50] hover:border-[#FF8A00] transition-colors text-center"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
