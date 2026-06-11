import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Full Roadmap Access", body: "Complete 90-day roadmap with 7-day quick start, 30-day launch plan, and 90-day growth execution plan." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone, action item, and goal completion. Know exactly where you stand at all times." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, tagline options, color direction, and visual identity guidance tailored to your business." },
  { icon: "📄", title: "Email & PDF Export", body: "Export your complete roadmap as a PDF or email it to yourself. Save and share your blueprint." },
  { icon: "🤖", title: "AI Refinement", body: "Refine and improve your roadmap with follow-up AI prompts. Get deeper answers for specific challenges." },
  { icon: "📣", title: "Outreach Strategy", body: "Pre-written outreach scripts, messaging frameworks, and prospect targeting guidance built for your offer." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly what steps to take to get fundable. Personal credit, business credit, and lender preparation." },
  { icon: "📈", title: "Revenue Model & Pricing Strategy", body: "Specific pricing recommendations, offer packaging, and revenue projections based on your market." },
];

const COMPARE = [
  { feature: "Business roadmap", free: "Preview only", pro: true },
  { feature: "7-day action plan", free: false, pro: true },
  { feature: "30-day launch plan", free: false, pro: true },
  { feature: "90-day growth plan", free: false, pro: true },
  { feature: "Progress tracking", free: false, pro: true },
  { feature: "Branding support", free: false, pro: true },
  { feature: "PDF/email export", free: false, pro: true },
  { feature: "AI refinement", free: false, pro: true },
  { feature: "Outreach scripts", free: false, pro: true },
  { feature: "Credit readiness checklist", free: false, pro: true },
  { feature: "Pricing strategy", free: false, pro: true },
  { feature: "Sales script", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1E88E5" }}>
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Your Full Business
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Roadmap. Unlocked.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete RMIE blueprint — full roadmap, progress tracking, branding support, outreach strategy, credit readiness, and the AI tools to refine and execute your plan.
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-1">
            <div className="text-5xl font-black text-white">$29<span className="text-2xl text-slate-400">/mo</span></div>
            <div className="text-sm text-slate-500">Cancel anytime · No contracts</div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch & Grow
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro gives you the complete toolkit — not just the roadmap, but the strategy, scripts, branding, and funding readiness to actually execute it.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-display text-3xl font-black">Free vs. Pro</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#0F1520] px-6 py-4 text-sm font-bold text-slate-400">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center" style={{ color: "#FF8A00" }}>Pro</span>
            </div>
            {COMPARE.map((row, i) => (
              <div key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1A]"}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">
                  {row.free === true ? <span className="text-green-400">✓</span>
                    : row.free === false ? <span className="text-slate-600">—</span>
                    : <span className="text-slate-500 text-xs">{row.free}</span>}
                </span>
                <span className="text-center">
                  {row.pro === true ? <span style={{ color: "#FF8A00" }}>✓</span>
                    : <span className="text-slate-600">—</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-2xl mx-auto"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Go Pro?
          </h2>
          <p className="mb-8 text-slate-400">
            Pro is currently in early access. Join the waitlist to be first in line and lock in your founding rate.
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
              className="rounded-xl border border-[#1E88E5]/30 px-8 py-3.5 text-sm font-semibold text-[#1E88E5] hover:border-[#1E88E5] transition-colors">
              See Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
