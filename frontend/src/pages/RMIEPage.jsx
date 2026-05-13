import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { INDUSTRIES } from "../constants/industries";

const RMIE_SECTIONS = [
  { icon: "🧭", title: "Business Roadmap", desc: "7-day, 30-day, and 90-day action plans built around your specific idea and market." },
  { icon: "💰", title: "Revenue Model", desc: "Pricing strategy, offer packages, and monetization steps tailored to your niche." },
  { icon: "📣", title: "Marketing & Outreach", desc: "Specific daily outreach targets, channels, messaging, and local marketing strategy." },
  { icon: "💳", title: "Credit & Funding Readiness", desc: "Know exactly where you stand — and what steps to take to become fundable." },
  { icon: "🏗️", title: "Business Foundation", desc: "LLC checklist, EIN guidance, business bank account setup, and brand identity." },
  { icon: "📋", title: "Sales Script", desc: "A real script you can use today — not a template, but tailored to your offer." },
];

export default function RMIEPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.14) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO RMIE
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Rapid Monetization
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Intelligence Engine
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Enter your business idea. RMIE builds a complete, realistic action plan — roadmap, revenue model, outreach strategy, foundation checklist, and funding readiness score.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Generate My Roadmap — Free
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT RMIE BUILDS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What RMIE Builds For You</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Not Motivation. An Actual Plan.
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RMIE_SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLE: REAL vs. GENERIC ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">RMIE Output Quality</div>
          <h2 className="mb-10 text-center font-display text-2xl font-black md:text-3xl">
            The Difference Between Generic AI and RMIE
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-900/50 bg-red-950/20 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">Generic AI Output ✗</p>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                "Post on social media and market your business online to reach more customers."
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/20 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">RMIE Output ✓</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                "Create 3 service packages ($149/$249/$399). Post 5 before/after photos. Message 20 local prospects per day for 7 days. Set up Google Business Profile. Collect 3 testimonials. Run a $10/day local ad after validating demand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Supported Niches</div>
          <h2 className="mb-10 text-center font-display text-2xl font-black md:text-3xl">
            RMIE Works for Your Industry
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span key={ind.id}
                className="rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-2 text-sm font-semibold text-slate-300">
                {ind.icon} {ind.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50] text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Roadmap Is One Click Away.
          </h2>
          <p className="mb-10 text-slate-400">
            Start free. No credit card. Get a real plan for your specific business idea in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm text-slate-500">
            <Link to="/command-center" className="hover:text-[#FF8A00] transition-colors">P2P Command Center →</Link>
            <Link to="/voice-agent" className="hover:text-[#FF8A00] transition-colors">AI Voice Agent →</Link>
            <Link to="/website-builder" className="hover:text-[#FF8A00] transition-colors">Website Builder →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
