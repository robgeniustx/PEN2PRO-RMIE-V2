import { Link } from "react-router-dom";

const AD_TYPES = [
  { icon: "📱", title: "Facebook / Instagram Ads", desc: "Run targeted social ads to your ideal customer using your PEN2PRO audience profile." },
  { icon: "🔍", title: "Google Ads (Search)", desc: "Capture high-intent buyers searching for your service or product right now." },
  { icon: "📍", title: "Local Geo Targeting", desc: "Reach customers within your city or service area for local service businesses." },
  { icon: "🎯", title: "Retargeting Campaigns", desc: "Re-engage visitors who saw your offer but did not convert the first time." },
  { icon: "📧", title: "Email Campaigns", desc: "Run automated email sequences to warm leads from your CRM and waitlist." },
  { icon: "🤝", title: "Referral Campaigns", desc: "Build a referral system that turns your existing customers into your sales team." },
];

const AD_CHECKLIST = [
  "Define your ideal customer (age, income, problem, location)",
  "Create 1 clear offer with a specific result or transformation",
  "Write 3 ad headlines targeting the problem, not the product",
  "Design 1 image or video creative — authentic outperforms polished",
  "Set a $10/day test budget and run for 7 days before scaling",
  "Send traffic to a dedicated landing page, not a homepage",
  "Install a pixel/tag for retargeting before you spend",
  "Track cost per lead, not just clicks",
];

export default function AdsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Advertising Strategy</h1>
        <p className="mt-1 text-sm text-slate-400">
          Build your ad strategy the right way. Know your offer, your audience, and your budget before you spend.
        </p>
      </div>

      {/* PEN2PRO Rule */}
      <div className="mb-8 rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">PEN2PRO Rule</p>
        <p className="mt-2 text-base font-semibold text-white">
          Do not run ads until you have validated demand with real conversations or sales first.
          Ads multiply what works. They also amplify what does not work — and that costs money.
        </p>
      </div>

      {/* Ad Types */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        {AD_TYPES.map((a) => (
          <div key={a.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
            <div className="mb-2 flex items-center gap-2.5">
              <span className="text-2xl">{a.icon}</span>
              <h3 className="font-bold text-white">{a.title}</h3>
            </div>
            <p className="text-sm text-slate-400">{a.desc}</p>
          </div>
        ))}
      </div>

      {/* Pre-Launch Checklist */}
      <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
        <h2 className="mb-4 text-lg font-bold text-white">Pre-Launch Ad Checklist</h2>
        <ul className="space-y-2.5">
          {AD_CHECKLIST.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-0.5 shrink-0 text-[#FF8A00]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-[#1A2D50] bg-gradient-to-br from-[#0F1520] to-[#1A2235] p-6 text-center">
        <h2 className="mb-2 text-lg font-bold text-white">Get Your Ad Strategy Built Into Your Roadmap</h2>
        <p className="mb-5 text-sm text-slate-400">
          Pro and Elite members get a custom advertising strategy, offer framework, and customer acquisition plan
          built directly into their PEN2PRO blueprint.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/starter" className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold">
            Build Your Roadmap
          </Link>
          <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF8A00] transition">
            View Pro Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
