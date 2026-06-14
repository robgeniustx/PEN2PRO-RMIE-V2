import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete roadmap with business model, pricing strategy, target customer, offer structure, and 90-day launch plan — specific to your idea." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone: business registration, first client, first $1,000, website live, funding-ready status. See exactly where you stand." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, tagline options, color direction, and positioning strategy so your business looks real from day one." },
  { icon: "📤", title: "Email & PDF Export", body: "Export your full business blueprint as a professional PDF or send it to your inbox. Own your roadmap." },
  { icon: "🤖", title: "AI Refinement", body: "Ask follow-up questions, refine your offer, test pricing models, and get sharper answers than the free version provides." },
  { icon: "📣", title: "Outreach Strategy", body: "Scripts, messaging templates, and a 7-day outreach plan to get your first clients fast — no ad spend required." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Find out where you stand with business credit, what documents you need, and what steps to take before approaching any lender." },
  { icon: "🏗️", title: "Marketing Plan Included", body: "30-day social media strategy, content topics, and a simple marketing calendar built around your offer and market." },
];

const COMPARISON = [
  { feature: "Business Blueprint", free: "Preview only", pro: true },
  { feature: "Full Roadmap (90-day plan)", free: false, pro: true },
  { feature: "Progress Tracking", free: "Basic", pro: "Full" },
  { feature: "AI Refinement", free: false, pro: true },
  { feature: "Outreach Strategy", free: false, pro: true },
  { feature: "PDF / Email Export", free: false, pro: true },
  { feature: "Branding Direction", free: false, pro: true },
  { feature: "Credit & Funding Checklist", free: false, pro: true },
  { feature: "Marketing Plan", free: false, pro: true },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[35%] -right-48 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.22) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
  </div>
);

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#22C55E]" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Full Roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Execution Tools.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete business blueprint, outreach strategy, credit &amp; funding checklist, branding direction, and 90-day launch plan — built around your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Launching soon · Limited founding member pricing available</p>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Pro Unlocks</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything the Free Version Can't Give You
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The free roadmap gives you a preview. Pro gives you the complete picture — so you can stop guessing and start building.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
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

      {/* ── COMPARISON TABLE ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Free vs Pro</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            The Difference Is Real
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#0F1520] px-6 py-4 text-sm font-bold text-slate-400">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#1E88E5]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"}`}>
                <span className="text-slate-300 font-medium">{row.feature}</span>
                <span className="flex justify-center">
                  {row.free === true ? <CheckIcon /> : row.free === false ? <XIcon /> : (
                    <span className="text-xs text-slate-500">{row.free}</span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.pro === true ? <CheckIcon /> : row.pro === false ? <XIcon /> : (
                    <span className="text-xs text-[#22C55E] font-semibold">{row.pro}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center justify-center gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-8 py-5">
            <div>
              <p className="text-sm text-slate-400 line-through">$249/mo</p>
              <p className="font-display text-4xl font-black text-white">Founding Price</p>
              <p className="text-sm text-[#FF8A00] font-semibold mt-1">Join the waitlist to lock in early pricing</p>
            </div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">
            Ready to Go From Idea to Income?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist now. You'll get early access, founding member pricing, and first notification when Pro opens.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Try Free First
            </Link>
            <Link to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
