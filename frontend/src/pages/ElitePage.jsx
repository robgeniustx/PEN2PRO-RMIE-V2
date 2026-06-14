import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Done-with-you strategy sessions, deeper AI analysis of your business model, and strategic pivots when your market or offer needs adjustment." },
  { icon: "📈", title: "Financial Projections", body: "Month-by-month revenue projections, break-even analysis, profit margin targets, and realistic growth scenarios based on your specific offer and market size." },
  { icon: "🏦", title: "Vendor & Funding Resource Center", body: "Curated list of funding partners, credit vendors, tradeline providers, and lending-ready resources with application prep guidance." },
  { icon: "🏢", title: "Company Formation Checklist", body: "Full LLC, EIN, business bank account, registered agent, operating agreement, and corporate structure guidance — one complete checklist." },
  { icon: "™️", title: "Trademark & Brand Protection", body: "Trademark search, filing guidance, brand asset organization, and social media handle strategy to protect and grow your brand from day one." },
  { icon: "📣", title: "Advanced Marketing Strategy", body: "Multi-channel marketing plan: organic content, paid ads, email sequences, partnerships, and referral programs — all tailored to your niche." },
  { icon: "🤝", title: "Done-With-You Guidance", body: "Not just a roadmap — structured guidance at key execution points so you never get stuck. The strategy adapts as your business grows." },
  { icon: "⚡", title: "Priority Support", body: "Elite members get priority response times and dedicated support when roadblocks appear. You are not alone in this." },
];

const INCLUDED = [
  "Everything in Pro plan",
  "Full 90-day execution roadmap",
  "Sales scripts and outreach sequences",
  "Credit and funding readiness checklist",
  "PDF and email export",
  "AI business refinement",
  "Business branding support",
  "Progress tracking",
];

const ELITE_ONLY = [
  "Advanced strategist guidance",
  "Financial projections and revenue modeling",
  "Vendor and funding resource center",
  "Company formation complete checklist",
  "Trademark and brand protection guidance",
  "Advanced multi-channel marketing strategy",
  "Done-with-you execution support",
  "Priority support response",
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            ⚡ PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for builders who are serious about scaling — with financial projections, done-with-you guidance, vendor and funding resources, and advanced marketing strategy that goes far beyond a roadmap.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1 0%, #1E88E5 100%)" }}>
              Join Elite Waitlist →
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
          <p className="mt-3 text-sm text-[#00C9B1] font-semibold">$499/month · Cancel anytime</p>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Elite Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Full Execution Arsenal
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite is not just a better roadmap. It is a complete execution system with advanced strategy, financial modeling, and done-with-you support from the PEN2PRO team.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#00C9B1]/20 bg-[#0F1520] p-6 hover:border-[#00C9B1]/50 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Complete Package</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">Elite Includes Everything</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h3 className="mb-5 font-bold text-slate-300 text-sm uppercase tracking-widest">Pro Plan Included</h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-0.5 text-[#D4A017] font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#0F1520] p-6">
              <h3 className="mb-5 font-bold text-[#00C9B1] text-sm uppercase tracking-widest">Elite Exclusive</h3>
              <ul className="space-y-3">
                {ELITE_ONLY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white font-semibold">
                    <span className="mt-0.5 text-[#00C9B1] font-black shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Elite Is For</div>
          <h2 className="mb-10 font-display text-3xl font-black">For Builders Who Are All In</h2>
          <div className="grid gap-4 sm:grid-cols-2 text-left">
            {["Entrepreneurs who have started but need a real scale plan", "Builders who need financial projections to attract partners or investors", "Small business owners ready to formalize, systemize, and grow", "Veterans building serious service-based or product businesses", "Anyone who needs more than a roadmap — they need a complete execution system"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <span className="mt-0.5 text-[#00C9B1] font-black shrink-0">✓</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Planning. Start Executing.
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Elite waitlist. Get priority access and launch-day pricing when PEN2PRO goes live.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1 0%, #1E88E5 100%)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#D4A017]/40 px-8 py-4 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              See Founders Lifetime →
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Try Free First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
