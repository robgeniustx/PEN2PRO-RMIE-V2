import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    title: "Describe Your Business Idea",
    body: "Tell PEN2PRO what you want to build — a service, product, skill-based business, or side hustle. Plain English. No business degree needed.",
    color: "#FF8A00",
  },
  {
    step: "02",
    title: "Get Brand Name Suggestions",
    body: "RMIE generates brand name options based on your niche, audience, and positioning — professional names that stick and are available to register.",
    color: "#1E88E5",
  },
  {
    step: "03",
    title: "Build Your Business Model",
    body: "PEN2PRO analyzes your idea and builds a business model — revenue streams, pricing structures, offer packages, and target customer profiles.",
    color: "#00C9B1",
  },
  {
    step: "04",
    title: "Get Your Offer Created",
    body: "Learn exactly what to sell, how to package it, and how to price it — with three offer tiers (starter, standard, premium) built for your market.",
    color: "#FF8A00",
  },
  {
    step: "05",
    title: "Complete the Startup Checklist",
    body: "RMIE walks you through every foundation step: LLC formation, EIN registration, business banking, domain setup, and brand presence.",
    color: "#1E88E5",
  },
  {
    step: "06",
    title: "Get Your Launch Roadmap",
    body: "Receive a 7-day, 30-day, and 90-day launch plan with daily action items, weekly milestones, and realistic revenue targets for your idea.",
    color: "#00C9B1",
  },
];

const BUILDER_TOOLS = [
  { icon: "💡", title: "Idea Analysis", body: "RMIE evaluates your idea against real market conditions — demand, competition, startup cost, and income potential." },
  { icon: "🏷️", title: "Brand Name Generator", body: "Get 5–10 business name suggestions based on your niche, audience, and brand direction — all registrable and searchable." },
  { icon: "📦", title: "Offer Builder", body: "Create starter, standard, and premium service or product packages with pricing, deliverables, and positioning." },
  { icon: "🏛️", title: "LLC & EIN Checklist", body: "Step-by-step legal foundation guide — from choosing a state, filing your LLC, getting your EIN, to opening a business bank account." },
  { icon: "🏦", title: "Business Bank Setup Guide", body: "Which banks to use, what documents to bring, and how to structure your business banking from day one." },
  { icon: "🗺️", title: "Launch Roadmap Generator", body: "7-day, 30-day, and 90-day action plans built around your specific idea, market, and starting resources." },
];

const WHO_BUILDER_IS_FOR = [
  "You have an idea but don't know what to call it",
  "You know your skill but haven't packaged it as a real offer",
  "You need the legal steps to make it an official business",
  "You've been talking about starting — now you're done talking",
  "You're a service provider who needs pricing strategy",
  "You want a real plan, not motivation",
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Thinking.
            <br />
            <span className="gradient-text">Start Building.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Business Builder takes your idea from concept to a real, registered, operational business —
            with a brand, an offer, a launch plan, and the legal foundation to back it up.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold shadow-[0_0_35px_rgba(255,138,0,0.4)] transition hover:scale-[1.02]"
            >
              Start Building — Free
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View Pro & Elite Plans
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            6 Steps to a Real Business
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Builder walks you through every step — from naming your business to having a launch plan in your hands.
          </p>
          <div className="relative space-y-6">
            {BUILDER_STEPS.map((s, idx) => (
              <div key={s.step} className="flex gap-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black text-sm"
                  style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}
                >
                  {s.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1.5 font-bold text-white text-lg">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                </div>
                {idx < BUILDER_STEPS.length - 1 && (
                  <div className="absolute left-[23px] mt-[72px] h-[calc(100%+24px)] w-0 border-l border-dashed border-[#1A2D50]" style={{ display: "none" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Tools */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Builder Toolkit</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Every Tool You Need to Launch
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Not just a roadmap. Builder gives you the specific tools to take action on every step.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_TOOLS.map((tool) => (
              <div key={tool.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#FF8A00]/30">
                <div className="mb-3 text-3xl">{tool.icon}</div>
                <h3 className="mb-2 font-bold text-white">{tool.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{tool.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Who Builder Is For</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            Built for People Ready to Stop Waiting
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {WHO_BUILDER_IS_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-5 py-4">
                <span className="text-[#FF8A00] font-bold mt-0.5">→</span>
                <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's free vs Pro */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Free vs Pro</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black">Start Free. Go Deeper with Pro.</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Free Forever</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {["Starter business blueprint", "1 business idea analysis", "Basic brand name suggestions", "LLC & EIN checklist", "7-day action plan preview"].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-slate-500">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/starter" className="mt-6 block w-full rounded-xl border border-[#1A2D50] py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Start Free
              </Link>
            </div>
            <div className="rounded-2xl border border-[#2d9cff]/40 bg-[#101a30] p-6 shadow-[0_0_30px_rgba(45,156,255,0.15)]">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro — $249/mo</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {["Full 30 & 90-day roadmap", "Unlimited idea analysis", "Offer builder (3 packages)", "Full sales scripts", "Outreach strategy", "Credit readiness checklist", "PDF export", "AI refinement"].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-[#2d9cff]">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/pro" className="mt-6 block w-full rounded-xl bg-[#2d9cff] py-3 text-center text-sm font-black text-[#081226] transition hover:scale-[1.01]">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            Your Business Starts Here.
          </h2>
          <p className="mb-8 text-slate-400 text-lg">
            You don't need more ideas. You need a plan. Business Builder gives you both.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E] btn-gold shadow-[0_0_30px_rgba(255,138,0,0.35)] transition hover:scale-[1.02]">
              Start Building — Free
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Accelerator →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About PEN2PRO</Link>
            {" · "}
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">View pricing</Link>
            {" · "}
            <Link to="/waitlist" className="hover:text-slate-300 transition-colors">Join waitlist</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
