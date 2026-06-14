import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_MODULES = [
  { icon: "💡", title: "Business Idea Intake", body: "Tell PEN2PRO your idea in your own words. The RMIE engine breaks it into a clear concept, target market, and offer structure." },
  { icon: "🏷️", title: "Brand Name Generator", body: "Get 5–10 brand name ideas based on your business concept, target market, and values. Domain check included." },
  { icon: "📦", title: "Business Model Generator", body: "Service-based, product, digital, hybrid — get a clear monetization model with pricing tiers and revenue projections for your specific idea." },
  { icon: "🎯", title: "Offer Creation", body: "Build your first 3 service or product packages with pricing, deliverables, positioning, and a clear value proposition." },
  { icon: "✅", title: "Startup Checklist", body: "Step-by-step checklist for every action needed to go from idea to operating business — nothing skipped or assumed." },
  { icon: "🏢", title: "LLC / EIN / Business Bank Setup", body: "Complete formation checklist including LLC filing, EIN registration, business bank account selection, and registered agent guidance." },
  { icon: "🗺️", title: "Launch Roadmap", body: "7-day action plan to get your first customer. 30-day plan to reach first revenue. 90-day plan to build sustainable income." },
  { icon: "💾", title: "Save & Upgrade", body: "Save your blueprint to your account. Upgrade to Pro or Elite to unlock deeper strategy, tracking, and execution tools." },
];

const STEPS = [
  { num: "01", title: "Describe Your Idea", body: "Enter your business concept in plain language. No business degree required." },
  { num: "02", title: "RMIE Analyzes It", body: "The Rapid Monetization Intelligence Engine breaks down your idea into a structured business framework." },
  { num: "03", title: "Get Your Blueprint", body: "Receive your full business blueprint: brand names, model, offers, checklist, and launch roadmap." },
  { num: "04", title: "Execute or Upgrade", body: "Follow your free roadmap or upgrade to Pro/Elite for deeper strategy, tracking, and done-with-you support." },
];

export default function BuilderPage() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");

  function handleStart(e) {
    e.preventDefault();
    if (!idea.trim()) return;
    navigate(`/starter?idea=${encodeURIComponent(idea.trim())}`);
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/50 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            🏗️ PEN2PRO Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Real Business Plan.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            PEN2PRO Builder takes your idea and turns it into a complete business model — brand names, offers, pricing, startup checklist, LLC formation guide, and a 90-day launch roadmap.
          </p>

          {/* Quick Start Form */}
          <form onSubmit={handleStart} className="mx-auto mt-10 max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={idea}
                onChange={e => setIdea(e.target.value)}
                placeholder="Describe your business idea..."
                className="flex-1 rounded-2xl border border-[#1A2235] bg-[#0F1520] px-5 py-4 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none"
              />
              <button type="submit" className="rounded-2xl px-6 py-4 text-sm font-black text-[#080C14] btn-gold whitespace-nowrap">
                Build My Plan →
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-600">Free · No credit card · Blueprint in under 3 minutes</p>
          </form>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">How It Works</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            From Idea to Blueprint in Minutes
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
                <div className="mb-3 font-display text-4xl font-black text-[#1A2D50]">{step.num}</div>
                <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Builder Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything a Business Needs to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Builder covers every foundational step most people skip — and gives you real, specific output for your idea.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {BUILDER_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-2xl">{m.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why RMIE Is Different</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black">Not Generic. Built for Your Idea.</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-red-500/20 bg-[#0F1520] p-5">
              <p className="text-sm font-bold text-red-400 mb-1">❌ Generic AI output:</p>
              <p className="text-sm text-slate-500">"Post on social media and grow your audience."</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0F1520] p-5">
              <p className="text-sm font-bold text-emerald-400 mb-1">✅ PEN2PRO RMIE output:</p>
              <p className="text-sm text-slate-300">"Create 3 service packages at $350, $650, and $1,200. Identify 50 local prospects using Google Maps in your area code. Message 20 per day for 7 days with your personalized script. Open a Google Business Profile this week. Collect your first 3 testimonials before running any ads."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Business Plan Is Waiting.
          </h2>
          <p className="mb-10 text-slate-400">
            Start free. Get your full business blueprint. Upgrade when you're ready for deeper strategy and execution support.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-sm font-black text-[#080C14] btn-gold">
              Start Building Now — Free
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#D4A017]/40 px-8 py-4 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              Upgrade to Pro
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
