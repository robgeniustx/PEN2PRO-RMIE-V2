import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    icon: "💡",
    title: "Submit Your Business Idea",
    body: "Tell PEN2PRO your idea in plain language. No fancy language required. Just describe what you want to build or sell.",
  },
  {
    step: "02",
    icon: "🏷️",
    title: "Get Brand Name Ideas",
    body: "The AI generates business name options that are memorable, available as domains, and match your brand direction.",
  },
  {
    step: "03",
    icon: "📐",
    title: "Business Model Generation",
    body: "Choose between a service, product, subscription, consulting, or hybrid model — and get a complete business structure mapped out.",
  },
  {
    step: "04",
    icon: "🎯",
    title: "Offer Creation",
    body: "Build your first offer — what you sell, how much you charge, who you sell it to, and why they should choose you.",
  },
  {
    step: "05",
    icon: "🚀",
    title: "Launch Roadmap",
    body: "A 7-day, 30-day, and 90-day launch plan — specific, measurable steps to go from zero to first customer.",
  },
  {
    step: "06",
    icon: "📋",
    title: "Startup Checklist",
    body: "LLC formation, EIN registration, business bank account, domain name, payment processing, and all the setup steps — in order.",
  },
];

const CHECKLIST_ITEMS = [
  "Business idea summary and offer description",
  "Target customer and market analysis",
  "Business model (service, product, subscription, consulting, hybrid)",
  "Brand name ideas and domain availability",
  "Startup cost estimate and initial budget",
  "Revenue model and pricing strategy",
  "7-day action plan",
  "30-day launch roadmap",
  "90-day growth plan",
  "Customer acquisition strategy",
  "LLC / EIN / business bank checklist",
  "First sales script and outreach template",
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
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
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(5,150,105,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#059669] uppercase tracking-widest">
            🏗️ PEN2PRO Business Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span style={{ background: "linear-gradient(90deg, #059669, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Real Business
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Builder walks you through every step of turning an idea into a launched business. Brand name, business model, offer structure, startup checklist, and a full 90-day roadmap — built for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Your Builder Roadmap — Free
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Pro for Full Access →
            </Link>
          </div>
        </div>
      </section>

      {/* How Builder Works */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#059669]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            6 Steps from Idea to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Builder doesn't give you a generic template. It builds a real plan around your specific idea, your market, and your starting resources.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl font-black text-[#1A2D50]">{s.step}</div>
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg pr-8">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Your Builder Output</div>
              <h2 className="mb-5 font-display text-3xl font-black md:text-4xl">
                Everything Included in Your Roadmap
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Builder doesn't give vague advice. It gives you a specific, actionable roadmap for your business — with real numbers, real steps, and a real timeline.
              </p>
              <Link to="/starter" className="inline-block rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
                Build My Roadmap
              </Link>
            </div>
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-4">Your Roadmap Includes</p>
              <ul className="space-y-3">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#059669]/20 text-[#059669] text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Builder vs Generic Advice */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why Builder Is Different</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black md:text-4xl">
            Real Advice vs. Generic Advice
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-[#0F1520] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Generic AI Advice</p>
              <ul className="space-y-3">
                {[
                  '"Post on social media"',
                  '"Market your business"',
                  '"Build a website"',
                  '"Find your target audience"',
                  '"Create a business plan"',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-500">
                    <span className="text-red-400 shrink-0">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#059669]/30 bg-[#0F1520] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-4">PEN2PRO Builder Output</p>
              <ul className="space-y-3">
                {[
                  "Create 3 offer packages for your specific service",
                  "Identify 50 local prospects in your target zip code",
                  "Message 20 prospects per day for the first 7 days",
                  "Create a Google Business Profile and collect 3 testimonials first",
                  "Test a $10/day ad only after you validate demand from direct outreach",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-[#059669] shrink-0 font-bold">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Callout */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                tier: "Free",
                desc: "Start your builder roadmap. Get a preview of your business plan and action steps.",
                cta: "Start Free",
                to: "/starter",
                color: "text-slate-300",
                border: "border-[#1A2D50]",
              },
              {
                tier: "Pro",
                desc: "Full Builder output — complete roadmap, branding, credit readiness, and export.",
                cta: "Join Pro Waitlist",
                to: "/waitlist?tier=pro",
                color: "text-[#1E88E5]",
                border: "border-[#1E88E5]/40",
                highlight: true,
              },
              {
                tier: "Elite",
                desc: "Advanced Builder + financial projections, company formation, and done-with-you support.",
                cta: "Join Elite Waitlist",
                to: "/waitlist?tier=elite",
                color: "text-[#D4A017]",
                border: "border-[#D4A017]/40",
              },
            ].map((t) => (
              <div key={t.tier} className={`rounded-2xl border ${t.border} bg-[#0F1520] p-6 ${t.highlight ? "ring-2 ring-[#1E88E5]/20" : ""}`}>
                <p className={`text-sm font-black uppercase tracking-widest mb-2 ${t.color}`}>{t.tier}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{t.desc}</p>
                <Link to={t.to} className={`block rounded-xl px-4 py-2.5 text-center text-xs font-black ${t.highlight ? "btn-gold text-[#0A0F1E]" : "border border-[#1A2D50] text-slate-300 hover:text-white transition-colors"}`}>
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Business Plan Starts Here
          </h2>
          <p className="mb-10 text-slate-400">
            It takes 5 minutes to submit your idea. PEN2PRO does the rest — a real roadmap, a real plan, and real steps to launch.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start My Business Builder — Free
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Accelerator Mode →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
