import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_MODULES = [
  { icon: "💡", title: "Business Idea Intake", body: "Start with your idea, skill, or lived experience. RMIE asks the right questions and builds around your reality." },
  { icon: "🏷️", title: "Brand Name Generator", body: "Get 5–10 brand name options generated specifically for your niche, with availability guidance." },
  { icon: "📐", title: "Business Model Canvas", body: "Visual business model — revenue streams, customer segments, key partnerships, and cost structure in one view." },
  { icon: "🎁", title: "Offer Creation Engine", body: "Build 3 tiered service or product packages with pricing strategy and value positioning included." },
  { icon: "📋", title: "Full Startup Checklist", body: "Everything you need to legally and operationally launch — broken down into a prioritized daily checklist." },
  { icon: "📝", title: "LLC / EIN / Bank Checklist", body: "Step-by-step entity setup: business name, LLC filing, EIN registration, business bank account, and merchant processing." },
  { icon: "🗺️", title: "90-Day Launch Roadmap", body: "A day-by-day, week-by-week launch plan built for your specific business — not a generic template." },
  { icon: "💾", title: "Save & Export Your Plan", body: "Save your entire blueprint to your account or export it as a PDF to share with partners, lenders, or advisors." },
];

const WHO_ITS_FOR = [
  { icon: "💼", label: "First-Time Entrepreneurs" },
  { icon: "🎖️", label: "Veterans Starting a Business" },
  { icon: "🔄", label: "Returning Citizens" },
  { icon: "👷", label: "Tradespeople Going Independent" },
  { icon: "📱", label: "Creators Monetizing Skills" },
  { icon: "👩‍👧", label: "Parents Building Income" },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-32 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.14) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-[50%] -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#1E88E5" }}>
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build Your Business<br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From Idea to Launch.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Business Builder mode walks you through every step of turning your idea into a real, operating business — brand, offer, entity, checklist, and 90-day roadmap included.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Start Building Now →
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — STEPS */}
      <section className="px-5 py-16 border-t border-b border-[#1A2D50] bg-[#0A0F1E]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#1E88E5" }}>How It Works</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">3 Steps to a Real Business Plan</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { step: "1", title: "Answer 10 Questions", body: "Tell RMIE about your idea, your skills, your available time, and your budget. Takes 5 minutes." },
              { step: "2", title: "RMIE Builds Your Blueprint", body: "AI generates your business model, brand direction, pricing, 90-day roadmap, and startup checklist instantly." },
              { step: "3", title: "Execute Your Plan", body: "Follow your checklist step by step. Save your blueprint. Export it. Upgrade to unlock more depth." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl font-black text-[#080C14] text-sm"
                  style={{ background: "linear-gradient(135deg, #1E88E5, #00C9B1)" }}>
                  {s.step}
                </div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#1E88E5" }}>Builder Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything Inside Business Builder</h2>
          <p className="mb-14 text-center text-slate-400 max-w-xl mx-auto">
            Every module is connected. Enter your idea once — Builder handles the rest across all eight sections.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {BUILDER_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-2xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm leading-snug">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#1E88E5" }}>Who It's Built For</div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            If You Have an Idea, Builder Has Your Plan
          </h2>
          <p className="mb-12 text-slate-400">
            You don't need business experience. You don't need a degree. You need an idea and the willingness to follow the plan.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
                <div className="mb-2 text-3xl">{w.icon}</div>
                <p className="text-sm font-semibold text-slate-200">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Blueprint Is 5 Minutes Away
          </h2>
          <p className="mb-10 text-slate-400 max-w-lg mx-auto">
            Start free. Answer the questions. Get your full business blueprint, startup checklist, and 90-day roadmap instantly.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
