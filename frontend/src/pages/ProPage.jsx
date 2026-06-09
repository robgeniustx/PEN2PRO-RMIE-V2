import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete roadmap with business structure, offer design, launch plan, and 90-day growth strategy — not a preview, the full thing." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone from idea to income. Mark steps complete, see what's next, and stay on a clear path." },
  { icon: "🎨", title: "Business Branding Support", body: "AI-assisted brand name, tagline, color direction, and positioning — built around your specific business idea." },
  { icon: "📄", title: "Email & PDF Export", body: "Download your full roadmap as a PDF or email it to yourself. Bring it to a bank meeting, investor pitch, or mentorship session." },
  { icon: "🤖", title: "AI Refinement", body: "Refine and sharpen your roadmap with follow-up AI questions. Adjust your niche, offer, pricing, and strategy as your idea evolves." },
  { icon: "📣", title: "Outreach Strategy", body: "Who to contact, what to say, and how many outreach touchpoints to run each week. Real scripts included." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly where you stand before applying for funding. Business credit foundation, bank setup, and lender-readiness steps." },
  { icon: "🏗️", title: "LLC, EIN & Business Bank Setup Checklist", body: "Step-by-step guidance to form your entity, get your EIN, open a business bank account, and protect yourself legally." },
];

const COMPARISON = [
  { feature: "Starter business blueprint", free: true, pro: true },
  { feature: "Full RMIE roadmap", free: false, pro: true },
  { feature: "Progress tracking", free: "Limited", pro: true },
  { feature: "Branding support", free: false, pro: true },
  { feature: "PDF / email export", free: false, pro: true },
  { feature: "AI roadmap refinement", free: false, pro: true },
  { feature: "Outreach strategy + scripts", free: false, pro: true },
  { feature: "Credit readiness checklist", free: false, pro: true },
  { feature: "LLC / EIN / bank setup guide", free: false, pro: true },
  { feature: "30 / 60 / 90-day execution plan", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            PEN2PRO Pro — $249/mo
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From Blueprint to
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Business
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the full RMIE roadmap — not a preview. Business structure, branding, launch plan, outreach scripts, credit readiness, and a 90-day growth strategy built around your specific idea.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You Get</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro Comparison */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Free vs Pro</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            The Upgrade Is Real
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] p-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#FF8A00]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature}
                className={`grid grid-cols-3 items-center px-4 py-3.5 text-sm ${i % 2 === 0 ? "bg-[#0A0F1E]/50" : ""}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">
                  {row.free === true ? <span className="text-green-400">✓</span>
                    : row.free === false ? <span className="text-slate-600">—</span>
                    : <span className="text-slate-400 text-xs">{row.free}</span>}
                </span>
                <span className="text-center">
                  {row.pro === true ? <span className="text-[#FF8A00] font-bold">✓</span>
                    : <span className="text-slate-400 text-xs">{row.pro}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-8 py-6">
            <div className="text-5xl font-black text-white mb-1">$249<span className="text-xl font-semibold text-slate-400">/mo</span></div>
            <div className="text-sm text-slate-400">Cancel anytime. No contracts.</div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">Ready to Go Pro?</h2>
          <p className="mb-8 text-slate-400">
            Subscriptions open at launch. Join the waitlist now to get early access and founding member pricing.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
