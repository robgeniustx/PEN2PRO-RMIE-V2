import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const STEPS = [
  { num: "01", title: "Describe Your Idea", body: "Tell PEN2PRO what you want to build. A service business, product, app, content brand, or side hustle. No business plan needed — just your idea." },
  { num: "02", title: "Generate Your Blueprint", body: "The RMIE engine analyzes your idea, your market, and your starting point. It generates a full business structure, offer design, and launch roadmap." },
  { num: "03", title: "Review Your Foundation", body: "Your blueprint includes an LLC checklist, EIN steps, business bank setup, brand name ideas, pricing model, and starter marketing plan." },
  { num: "04", title: "Execute or Upgrade", body: "Run the free roadmap on your own or upgrade to Pro/Elite for deeper strategy, AI refinement, financial projections, and done-with-you guidance." },
];

const CHECKLIST_ITEMS = [
  "Business idea validation",
  "Target customer profile",
  "Problem and solution summary",
  "Service or product offer design",
  "Startup cost estimate",
  "Pricing model and revenue structure",
  "Brand name ideas and tagline direction",
  "7-day action plan",
  "30-day launch roadmap",
  "LLC / EIN registration checklist",
  "Business bank account setup steps",
  "Basic marketing and outreach plan",
];

export default function BuilderPage() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");

  function handleStart(e) {
    e.preventDefault();
    if (idea.trim()) {
      navigate(`/starter?idea=${encodeURIComponent(idea.trim())}`);
    } else {
      navigate("/starter");
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[35%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
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
            🏗️ Business Builder — Free to Start
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Real Business
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            PEN2PRO Builder takes your idea and generates a complete business foundation — offer design, brand direction, startup checklist, pricing model, and a launch roadmap — in minutes.
          </p>

          {/* Quick Start Form */}
          <form onSubmit={handleStart} className="mx-auto mt-10 max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="What's your business idea? e.g. mobile auto detailing, tutoring, food truck..."
                className="flex-1 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-[#1E88E5] focus:outline-none"
              />
              <button type="submit" className="rounded-xl px-6 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold whitespace-nowrap">
                Build It →
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-600 text-center">Free forever. No credit card. No signup required to start.</p>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            From Idea to Blueprint in 4 Steps
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="shrink-0 text-4xl font-black text-[#1A2D50]">{s.num}</div>
                <div>
                  <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Blueprint Includes */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">What's Inside Your Blueprint</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            Not a Template. A Real Roadmap.
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {CHECKLIST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-5 w-5 shrink-0 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 flex items-center justify-center text-[#FF8A00] text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#1A2D50] text-center text-sm text-slate-500">
              Upgrade to <Link to="/pro" className="text-[#1E88E5] font-semibold hover:text-white transition-colors">Pro</Link> for AI refinement, outreach scripts, PDF export, credit/funding checklist, and full 90-day growth plan.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Ready to Build?</h2>
          <p className="mb-8 text-slate-400">
            Your business blueprint is free. No signup required to start. Enter your idea and PEN2PRO will generate a real roadmap in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Blueprint
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
