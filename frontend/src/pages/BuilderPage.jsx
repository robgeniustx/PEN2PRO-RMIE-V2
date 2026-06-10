import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const STEPS = [
  { num: "01", title: "Define Your Idea", body: "Describe what you want to build, who you serve, and what problem you solve." },
  { num: "02", title: "Brand Name & Identity", body: "AI suggests brand names, taglines, and visual direction aligned to your offer." },
  { num: "03", title: "Build Your Offer", body: "Structure your service or product into a clear, priced offer package." },
  { num: "04", title: "Business Foundation", body: "LLC, EIN, business bank checklist — the foundation most builders skip." },
  { num: "05", title: "Launch Roadmap", body: "7-day action plan, 30-day launch, 90-day growth — built around your idea." },
  { num: "06", title: "Save & Upgrade", body: "Save your blueprint, track your progress, and upgrade when you're ready to execute." },
];

const CHECKLIST = [
  "Business idea clearly defined",
  "Target customer identified",
  "Offer structured and priced",
  "Brand name selected",
  "LLC / business entity decision made",
  "EIN obtained",
  "Business bank account opened",
  "Website or landing page live",
  "Payment method set up",
  "First 10 customers contacted",
];

export default function BuilderPage() {
  const [idea, setIdea] = useState("");
  const navigate = useNavigate();

  function handleStart(e) {
    e.preventDefault();
    if (!idea.trim()) return;
    navigate(`/starter?idea=${encodeURIComponent(idea.trim())}`);
  }

  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-5 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(16,185,129,0.12) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            Business Builder
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea<br />
            <span style={{ background: "linear-gradient(90deg,#10B981,#34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Into a Real Business.
            </span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 max-w-2xl mx-auto">
            The PEN2PRO Builder walks you through every step — brand identity, offer structure, startup checklist, and your personal launch roadmap.
          </p>

          {/* Quick Start Form */}
          <form onSubmit={handleStart} className="mx-auto max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Describe your business idea..."
                className="flex-1 rounded-xl border border-[#1A2D50] bg-[#0D1626] px-5 py-4 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
                maxLength={200}
              />
              <button
                type="submit"
                disabled={!idea.trim()}
                className="rounded-xl px-7 py-4 font-black text-[#0A0F1E] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                style={{ background: "linear-gradient(135deg,#10B981,#059669)" }}
              >
                Build It →
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">Free to start. No account required for your first blueprint.</p>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-3xl font-black">How the Builder Works</h2>
          <p className="mb-14 text-center text-slate-400">Six steps from raw idea to real launch roadmap.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl border border-[#1A2D50] bg-[#0D1626] p-6">
                <div className="mb-3 font-mono text-3xl font-black text-emerald-500/40">{s.num}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Checklist */}
      <section className="py-16 px-5 bg-[#0A0F1E]">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-3 text-center text-2xl font-black">Startup Checklist</h2>
          <p className="mb-8 text-center text-slate-400 text-sm">The 10 boxes every new business needs to check before going live.</p>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0D1626] p-8">
            <ul className="space-y-3">
              {CHECKLIST.map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Pro and Elite members get a personalized checklist with links and AI guidance for each step.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-black">Your Blueprint Is Waiting.</h2>
          <p className="mb-8 text-slate-400">Start free. Describe your idea and get your personalized PEN2PRO roadmap in minutes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/starter" className="rounded-xl px-8 py-4 font-black text-[#0A0F1E] btn-gold">
              Start Free Blueprint
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-emerald-500/40 px-8 py-4 font-semibold text-emerald-400 hover:border-emerald-400 hover:text-white transition-colors">
              See Accelerator Mode →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
