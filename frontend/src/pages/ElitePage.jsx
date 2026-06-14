import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🧠", title: "Advanced RMIE Strategy Engine", body: "Deeper AI analysis — multi-scenario business modeling, competitive positioning, and advanced market segmentation for your idea." },
  { icon: "📈", title: "Financial Projections", body: "12-month revenue projections, break-even analysis, pricing optimization, and profitability modeling built specifically for your business." },
  { icon: "🏛️", title: "Company Formation Checklist", body: "Full step-by-step guide for LLC filing, EIN registration, business bank setup, operating agreement, and registered agent selection." },
  { icon: "🤝", title: "Vendor & Funding Resource Center", body: "Net-30 vendors, tradeline partners, SBA resources, CDFI lenders, and grant databases curated for small business owners." },
  { icon: "⚖️", title: "Trademark & Legal Foundation Guidance", body: "Business name protection, trademark filing guidance, IP basics, and LLC operating structure recommendations." },
  { icon: "📱", title: "Social Media & Marketing Guidance", body: "Platform-specific strategy, content calendar framework, brand voice setup, and paid ad readiness checklist." },
  { icon: "💰", title: "Done-With-You Strategy Guidance", body: "Elite-tier users get structured strategy sessions with advanced AI modeling — not generic tips, but deep execution planning." },
  { icon: "🎯", title: "Advanced Pipeline & CRM Tools", body: "Full CRM with lead scoring, pipeline automation, follow-up sequences, and deal tracking — unlimited contacts." },
  { icon: "⚡", title: "Priority Support", body: "Elite users move to the front of the line. Priority response on platform questions, strategy review, and technical issues." },
  { icon: "🤖", title: "Advanced P2P AI Voice Agent", body: "Full AI voice agent with call summaries, lead qualification, appointment booking, CRM updates from calls, and missed-call text-back." },
];

const TIERS = [
  { name: "Pro", price: "$249/mo", color: "#5ab0ff", included: ["Full blueprint", "90-day plan", "Sales scripts", "Credit checklist", "CRM basics", "Website Builder"] },
  { name: "Elite", price: "$499/mo", color: "#00C9B1", included: ["Everything in Pro", "Financial projections", "Advanced RMIE engine", "Funding resource center", "Trademark guidance", "Done-with-you strategy", "Advanced AI Voice", "Priority support"] },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/40 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#00C9B1] uppercase tracking-widest">
            ⚡ PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is the advanced tier for builders who are ready to move beyond planning into real execution — with financial projections, funding resources, legal foundation guidance, AI voice, and done-with-you strategy.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="block rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}>
              Join Elite Waitlist — $499/mo
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launch: June 15, 2026 · Join now to lock in Elite pricing</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">What You Get</p>
            <h2 className="font-display text-4xl font-black">Everything in Elite</h2>
            <p className="mt-3 text-slate-500">All Pro features, plus the advanced execution layer.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#080C14] p-6 hover:border-[#00C9B1]/30 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRO vs ELITE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Pro vs Elite</p>
            <h2 className="font-display text-3xl font-black">Why builders choose Elite</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIERS.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-[#0F1520] p-7" style={{ borderColor: t.color + "60" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: t.color }}>{t.name}</p>
                <p className="font-display text-3xl font-black text-white mb-5">{t.price}</p>
                <ul className="space-y-2.5">
                  {t.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="font-bold" style={{ color: t.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-xl text-center">
          <div className="rounded-3xl border p-10" style={{ borderColor: "rgba(0,201,177,0.4)", background: "#0D1A1A", boxShadow: "0 0 60px rgba(0,201,177,0.12)" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00C9B1] mb-3">PEN2PRO Elite</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="font-display text-5xl font-black text-white">$499</span>
              <span className="text-slate-400 text-lg">/mo</span>
            </div>
            <p className="text-slate-400 mb-8">Advanced strategy + execution. Cancel anytime.</p>
            <Link to="/waitlist?tier=elite" className="block w-full rounded-xl py-4 text-sm font-black text-[#080C14] mb-4 transition hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="block text-sm font-semibold text-[#D4A017] hover:opacity-80 transition">
              Want lifetime access? See Founders →
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Need less? <Link to="/pro" className="text-[#5ab0ff] hover:opacity-80">See Pro →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
