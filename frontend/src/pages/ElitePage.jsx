import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full RMIE blueprint, branding support, PDF export, AI refinement, outreach scripts, credit/funding checklist, and LLC setup guidance." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Elite gives you execution-level AI strategy — not just a roadmap, but the specific moves experienced business owners use to scale." },
  { icon: "📈", title: "Financial Projections", body: "Revenue forecast, break-even analysis, startup cost breakdown, and 12-month growth modeling built around your specific business idea and pricing." },
  { icon: "🏛️", title: "Legal Foundation Checklist", body: "Trademark guidance, operating agreement basics, contract templates, and compliance checklist so you are protected as you grow." },
  { icon: "🤝", title: "Vendor & Resource Center", body: "Direct access to vetted vendors, SBA lenders, community development financial institutions (CDFIs), and business credit building partners." },
  { icon: "🏦", title: "Funding Readiness Deep Dive", body: "Detailed fundability profile, credit optimization strategy, business banking setup, tradeline readiness, and lender preparation checklist." },
  { icon: "📢", title: "Marketing & Launch Execution", body: "Full launch campaign, social media strategy, content calendar, ad strategy, email sequences, and sales funnel design included." },
  { icon: "⚡", title: "Done-With-You Guidance", body: "Not a generic AI tool — Elite gives you co-execution strategy. Step-by-step guidance shaped around where you are and what you need next." },
  { icon: "🎯", title: "Priority Support", body: "Elite users move to the front of the line. Faster response times, priority access to new features, and early access to PEN2PRO tools." },
];

const COMPARE_ROWS = [
  { label: "Full RMIE blueprint", pro: true, elite: true },
  { label: "Branding + positioning", pro: true, elite: true },
  { label: "30/60/90-day plan", pro: true, elite: true },
  { label: "Financial projections", pro: false, elite: true },
  { label: "Legal foundation checklist", pro: false, elite: true },
  { label: "Funding readiness deep dive", pro: "Basic", elite: true },
  { label: "Vendor/lender resource center", pro: false, elite: true },
  { label: "Done-with-you guidance", pro: false, elite: true },
  { label: "Advanced marketing strategy", pro: false, elite: true },
  { label: "Priority support", pro: false, elite: true },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 right-0 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            PEN2PRO Elite — $499/mo
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for builders who are done planning and ready to move. Financial projections, legal foundation, funding readiness, vendor access, and done-with-you strategy — all in one place.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Who Elite Is For */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-8 text-center">
            <div className="mb-3 text-4xl">🎯</div>
            <h2 className="mb-4 font-display text-2xl font-black text-white">Elite Is Not for Everyone</h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Elite is for people who have an idea or early business and are serious about scaling it. You understand that real business growth requires real strategy — not just motivation or a checklist. If you need more than a roadmap and you're ready to execute, Elite was built for you.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Features</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Execute
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#FF8A00]/30 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro vs Elite */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Pro vs Elite</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">How Elite Goes Further</h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] p-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center text-[#1E88E5]">Pro</span>
              <span className="text-center text-[#FF8A00]">Elite</span>
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div key={row.label}
                className={`grid grid-cols-3 items-center px-4 py-3.5 text-sm ${i % 2 === 0 ? "bg-[#0A0F1E]/50" : ""}`}>
                <span className="text-slate-300">{row.label}</span>
                <span className="text-center">
                  {row.pro === true ? <span className="text-[#1E88E5] font-bold">✓</span>
                    : row.pro === false ? <span className="text-slate-600">—</span>
                    : <span className="text-slate-400 text-xs">{row.pro}</span>}
                </span>
                <span className="text-center">
                  {row.elite === true ? <span className="text-[#FF8A00] font-bold">✓</span>
                    : <span className="text-slate-400 text-xs">{row.elite}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] px-8 py-6">
            <div className="text-5xl font-black text-white mb-1">$499<span className="text-xl font-semibold text-slate-400">/mo</span></div>
            <div className="text-sm text-slate-400">Cancel anytime. Everything included.</div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">Ready for Elite?</h2>
          <p className="mb-8 text-slate-400">
            Subscriptions open at launch. Join the waitlist to lock in early access and founding member pricing.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors">
              See Legacy Founder →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
