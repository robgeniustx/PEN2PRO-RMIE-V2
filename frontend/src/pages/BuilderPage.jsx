import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    title: "Clarify Your Idea",
    desc: "Define what you're building, who it's for, and the problem it solves. RMIE helps you pressure-test the idea before you invest a dollar.",
    color: "#1E88E5",
  },
  {
    step: "02",
    title: "Build Your Brand",
    desc: "Get brand name suggestions, logo direction, brand voice guidance, and a starter identity that sets you apart from day one.",
    color: "#FF8A00",
  },
  {
    step: "03",
    title: "Structure Your Offer",
    desc: "RMIE builds your service packages, pricing tiers, and offer stack — so you know exactly what to sell and what to charge.",
    color: "#00C9B1",
  },
  {
    step: "04",
    title: "Set Up Your Entity",
    desc: "LLC checklist, EIN application steps, business bank account setup, and legal foundation — all mapped out in the right sequence.",
    color: "#D4A017",
  },
  {
    step: "05",
    title: "Get Funding-Ready",
    desc: "Know your fundability score before you apply. Credit steps, tradeline readiness, and lender documentation — all in one place.",
    color: "#7C3AED",
  },
  {
    step: "06",
    title: "Launch With a Plan",
    desc: "7-day, 30-day, and 90-day action plans with daily tasks, outreach scripts, and milestones — not motivation, but execution.",
    color: "#059669",
  },
];

const CHECKLIST = [
  { item: "Business idea validated", done: true },
  { item: "Brand name & identity chosen", done: true },
  { item: "Service packages & pricing set", done: true },
  { item: "LLC filed", done: false },
  { item: "EIN obtained from IRS", done: false },
  { item: "Business bank account opened", done: false },
  { item: "Business credit profile started", done: false },
  { item: "First 10 prospects identified", done: false },
  { item: "Google Business Profile created", done: false },
  { item: "First paying client closed", done: false },
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ Business Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build Your Business
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From the Ground Up.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Stop guessing. PEN2PRO Builder walks you from raw idea to launched business — idea validation, brand identity, offer structure, entity setup, and 90-day execution plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start My Builder Blueprint →
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT BUILDER GIVES YOU */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Builder Process</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            6 Steps from Idea to Income
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Most people jump straight to marketing before the foundation is built. Builder gives you the right steps in the right order.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-display text-3xl font-black" style={{ color: s.color }}>{s.step}</span>
                  <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${s.color}40, transparent)` }} />
                </div>
                <h3 className="mb-2 font-bold text-white text-lg">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STARTUP CHECKLIST */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Your Launch Checklist</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Know Exactly Where You Stand
          </h2>
          <p className="mb-10 text-center text-slate-400">
            PEN2PRO tracks every step of your business launch. Here's what a typical Builder journey looks like — yours will be tailored to your idea and goals.
          </p>

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            {CHECKLIST.map((c, i) => (
              <div
                key={c.item}
                className={`flex items-center gap-4 px-6 py-4 ${i !== CHECKLIST.length - 1 ? "border-b border-[#1A2235]" : ""}`}
              >
                <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                  c.done ? "bg-emerald-500 text-white" : "border border-[#1A2D50] text-slate-600"
                }`}>
                  {c.done ? "✓" : "○"}
                </div>
                <span className={`text-sm font-medium ${c.done ? "text-slate-300" : "text-slate-500"}`}>{c.item}</span>
                {c.done && (
                  <span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase">Done</span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            Your actual checklist is generated from your business idea and goals — not a generic template.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Free Blueprint Includes</div>
              <h2 className="mb-4 font-display text-3xl font-black">
                Start Free.<br />Upgrade When Ready.
              </h2>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Every PEN2PRO user starts with a free builder blueprint. You'll get your idea validated, a brand direction, and your first action steps — before you ever spend a dollar.
              </p>
              <ul className="space-y-3">
                {[
                  "Business idea summary & market fit",
                  "Brand name suggestions",
                  "Offer structure & pricing guidance",
                  "LLC setup checklist",
                  "7-day action plan",
                  "Upgrade path when you're ready",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="text-[#D4A017]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/starter" className="mt-8 inline-flex rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
                Get My Free Blueprint →
              </Link>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Pro Builder Unlocks</div>
              <h2 className="mb-4 font-display text-3xl font-black">
                Full Execution.<br />Zero Guessing.
              </h2>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Upgrade to Pro and unlock the complete builder experience — full roadmaps, sales scripts, credit readiness, funding prep, and your 90-day execution plan.
              </p>
              <ul className="space-y-3">
                {[
                  "Full 90-day launch & growth plan",
                  "Sales scripts & outreach sequences",
                  "Credit readiness checklist",
                  "Funding readiness score",
                  "PDF/email export",
                  "AI business refinement sessions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="text-[#1E88E5]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/checkout/pro" className="mt-8 inline-flex rounded-xl border border-[#1E88E5] px-7 py-3 text-sm font-black text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white transition-all">
                Upgrade to Pro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Business Starts With One Decision.
          </h2>
          <p className="mb-10 text-slate-400">
            Not the perfect idea. Not the perfect time. Not the perfect funding. Just the decision to start building with a real system behind you.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Builder Blueprint — Free
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
