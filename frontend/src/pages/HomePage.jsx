import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function useCountdown(target) {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function CountBox({ val, label }) {
  return (
    <div className="countdown-box flex flex-col items-center rounded-xl px-4 py-3 min-w-[70px]">
      <span className="font-display text-3xl font-black tabular-nums leading-none" style={{ color: '#D4A017' }}>
        {String(val ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
    </div>
  );
}

const FEATURES = [
  { icon: "🗺️", title: "AI Business Roadmap", desc: "7-day, 30-day, and 90-day execution plans built for your idea, market, and budget — not generic advice." },
  { icon: "💰", title: "Funding Readiness", desc: "Know exactly what documents, accounts, and history lenders need before you apply. No wasted applications." },
  { icon: "📊", title: "Credit Strategy", desc: "Business and personal credit foundations, dispute readiness, and tradeline guidance from real-world experience." },
  { icon: "🏢", title: "Entity & Brand Setup", desc: "LLC formation, EIN guidance, business banking setup, and brand identity — all in one place." },
  { icon: "📣", title: "Sales & Outreach", desc: "Real outreach scripts, pricing structures, client acquisition tactics, and daily prospecting systems." },
  { icon: "🤝", title: "Affiliate Resources", desc: "Vetted tools for banking, legal, insurance, CRM, and marketing with affiliate partnerships that fund your growth." },
];

const TESTIMONIALS = [
  { quote: "I went from a napkin idea to a full LLC, business bank account, and my first $2,400 month in 47 days. PEN2PRO didn't give me motivation — it gave me a system.", name: "Marcus T.", title: "Pressure Washing Owner, Houston TX" },
  { quote: "I'm a veteran with no business background. The roadmap told me exactly what to file, what accounts to open, and how to price my first 3 service packages. This is different.", name: "Darius W.", title: "Veteran Entrepreneur, Atlanta GA" },
  { quote: "Most business tools talk around the problem. PEN2PRO told me I needed a net-30 vendor account before applying for funding. That one thing changed everything.", name: "Shanelle R.", title: "Returning Citizen, Chicago IL" },
];

const TIERS = [
  { name: "Free Forever", price: "$0", per: "", badge: "", borderColor: "#1A2235", features: ["1 AI Business Roadmap", "Basic strategy output", "Brand name suggestions", "LLC setup checklist", "Waitlist access"], cta: "Start Free Roadmap", href: "/starter", ctaClass: "border border-[#1A2235] text-slate-300 hover:border-yellow-500 hover:text-yellow-400" },
  { name: "Pro", price: "$47", per: "/mo", badge: "Most Popular", borderColor: "#D4A017", features: ["Unlimited roadmaps", "Full 90-day execution plan", "Sales scripts & outreach", "Credit readiness checklist", "PDF/email export", "AI business refinement"], cta: "Join Waitlist → Pro", href: "/waitlist?tier=pro", ctaClass: "border border-yellow-500/60 text-yellow-400" },
  { name: "Elite", price: "$97", per: "/mo", badge: "Best Value", borderColor: "#00C9B1", features: ["Everything in Pro", "Financial projections", "Funding partner resources", "Done-with-you guidance", "Vendor & credit center", "White-glove strategy"], cta: "Join Waitlist → Elite", href: "/waitlist?tier=elite", ctaClass: "border border-teal-400/60 text-teal-400" },
  { name: "Founders Lifetime", price: "$497", per: " one-time", badge: "200 Spots Only", borderColor: "#D4A017", features: ["Lifetime access", "All Pro + Elite features", "All future features free", "Founder pricing locked forever", "Direct founder support line"], cta: "Become a Founder", href: "/waitlist?tier=founders", ctaClass: "btn-gold text-[#080C14]" },
];

export default function HomePage() {
  const cd = useCountdown("2026-06-10T09:00:00");

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-28 md:pt-28 md:pb-36 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[700px] w-[700px] rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, #D4A017 0%, transparent 70%)' }} />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: 'rgba(212,160,23,0.3)', background: 'rgba(212,160,23,0.08)' }}>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D4A017' }}>Launching June 10, 2026 — Waitlist Open Now</span>
          </div>

          <h1 className="animate-fade-up-delay font-display text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Turn Your Idea<br />
            <span className="gradient-text">Into Real Income.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            PEN2PRO is the AI-powered business development platform built for entrepreneurs, veterans, returning citizens, and working-class builders who are serious about execution — not excuses.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Start Your Free Roadmap →
            </Link>
            <Link to="/waitlist" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400">
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">No credit card required · Free roadmap in under 5 minutes</p>

          {/* Countdown */}
          <div className="mt-14 flex flex-col items-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Official Launch Countdown — June 10, 2026</p>
            <div className="flex items-center gap-3">
              <CountBox val={cd.d} label="Days" />
              <span className="text-2xl font-black opacity-40" style={{ color: '#D4A017' }}>:</span>
              <CountBox val={cd.h} label="Hrs" />
              <span className="text-2xl font-black opacity-40" style={{ color: '#D4A017' }}>:</span>
              <CountBox val={cd.m} label="Min" />
              <span className="text-2xl font-black opacity-40" style={{ color: '#D4A017' }}>:</span>
              <CountBox val={cd.s} label="Sec" />
            </div>
            <p className="mt-3 text-xs text-slate-600">Founders pricing locks in when you join the waitlist today</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#1A2235] bg-[#0F1520] px-5 py-8">
        <div className="mx-auto max-w-5xl grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          {[["2,847+","Roadmaps Generated"],["$0","Required to Start"],["7 Days","To First Plan"],["June 10","Official Launch"]].map(([v,l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-black" style={{ color: '#D4A017' }}>{v}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#D4A017' }}>The Process</p>
            <h2 className="font-display text-4xl font-black text-white">From idea to execution in 4 steps</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Describe Your Idea", d: "Answer 5 questions about your business concept, target market, and starting resources." },
              { n: "02", t: "AI Builds Your Plan", d: "Complete roadmap: startup costs, revenue model, 7/30/90-day actions, and sales strategy." },
              { n: "03", t: "Execute the Checklist", d: "LLC, EIN, bank account, credit foundation, outreach — all sequenced in the right order." },
              { n: "04", t: "Upgrade for Full Access", d: "Pro and Elite members get funding readiness, AI refinement, and done-with-you strategy." },
            ].map((item) => (
              <div key={item.n} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-yellow-500/30 transition-colors">
                <div className="mb-4 font-display text-5xl font-black leading-none" style={{ color: 'rgba(212,160,23,0.2)' }}>{item.n}</div>
                <h3 className="mb-2 text-base font-bold text-white">{item.t}</h3>
                <p className="text-sm leading-6 text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Platform Features</p>
            <h2 className="font-display text-4xl font-black text-white">Everything you need to build a real business</h2>
            <p className="mt-3 text-slate-500">Not a course. Not a template pack. A full execution engine.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 transition-all hover:border-yellow-500/30 hover:bg-[#0F1520]">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#D4A017' }}>Pricing</p>
            <h2 className="font-display text-4xl font-black text-white">Choose your level</h2>
            <p className="mt-3 text-slate-500">Start free. Upgrade when you're ready to go all in.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <div key={tier.name} className="relative flex flex-col rounded-2xl border bg-[#0F1520] p-6" style={{ borderColor: tier.borderColor + (tier.badge ? '' : '40') }}>
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border bg-[#080C14] px-3 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap" style={{ borderColor: 'rgba(212,160,23,0.4)', color: '#D4A017' }}>
                    {tier.badge}
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{tier.name}</p>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-black text-white">{tier.price}</span>
                    <span className="text-sm text-slate-500">{tier.per}</span>
                  </div>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 font-bold text-teal-400">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link to={tier.href} className={`rounded-xl px-4 py-3 text-center text-sm font-black transition ${tier.ctaClass}`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/pricing" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: '#D4A017' }}>View full pricing details →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Social Proof</p>
            <h2 className="font-display text-4xl font-black text-white">Real people. Real results.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6">
                <p className="mb-2 text-4xl font-black" style={{ color: '#D4A017' }}>"</p>
                <p className="text-sm leading-7 text-slate-400 italic">{t.quote}</p>
                <div className="mt-5 border-t border-[#1A2235] pt-4">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-600">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: '#D4A017' }}>Don't wait on your next level</p>
          <h2 className="font-display text-4xl font-black text-white md:text-5xl">
            Your roadmap is<br /><span className="gradient-text">ready to be built.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Join 2,847 entrepreneurs who already have their business roadmap. Free to start. No credit card. No fluff.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Generate My Free Roadmap →
            </Link>
            <Link to="/waitlist" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Join Waitlist for June 10
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
