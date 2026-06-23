import { Link } from "react-router-dom";

const AD_CHANNELS = [
  { icon: "📘", label: "Facebook & Instagram Ads", desc: "Target local and national audiences with offer-based campaigns validated by your RMIE roadmap." },
  { icon: "🔍", label: "Google Search Ads", desc: "Capture high-intent buyers searching for your services right now." },
  { icon: "🎯", label: "TikTok Ads", desc: "Reach younger demographics and trend-driven audiences with short-form video ads." },
  { icon: "🐦", label: "X (Twitter) Ads", desc: "Promoted posts and targeted campaigns for brand awareness and lead generation." },
  { icon: "💼", label: "LinkedIn Ads", desc: "B2B targeting for service businesses, consultants, and professional offers." },
  { icon: "📺", label: "YouTube Pre-Roll", desc: "Video ads before YouTube content targeting specific interests and behaviors." },
];

export default function AdsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-white">Ads Manager</h2>
        <p className="mt-1 text-sm text-slate-500">Plan, track, and optimize paid advertising campaigns across all major platforms.</p>
      </div>

      <div
        className="rounded-2xl border p-5 flex items-start gap-4"
        style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}
      >
        <span className="text-2xl shrink-0 mt-0.5">⚠️</span>
        <div>
          <p className="text-sm font-bold text-white mb-1">Validate demand before running ads.</p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your PEN2PRO roadmap recommends testing your offer organically first — 20 outreach
            messages per day for 7 days — before spending money on ads. Paid advertising works
            best after you have proven demand, a tested offer, and a clear target customer.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AD_CHANNELS.map((ch) => (
          <div
            key={ch.label}
            className="rounded-2xl border p-5 transition-colors hover:border-[#1E88E5]/30"
            style={{ borderColor: "#1A2D50", background: "#0F1520" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl">{ch.icon}</span>
              <h3 className="text-sm font-bold text-white">{ch.label}</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{ch.desc}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border p-7 text-center"
        style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}
      >
        <p className="text-base font-black text-white mb-2">Full Ads Manager requires Elite.</p>
        <p className="text-sm text-slate-400 mb-5 leading-relaxed">
          Elite users get campaign planning, budget allocation guidance, ad copy generation,
          A/B testing frameworks, and ROI tracking built around your specific offer and audience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/elite" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
            Upgrade to Elite
          </Link>
          <Link to="/waitlist" className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-300 border border-[#1A2D50] hover:border-[#FF8A00] transition-colors">
            Join Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
