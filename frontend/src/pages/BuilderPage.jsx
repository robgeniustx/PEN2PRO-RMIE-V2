import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    title: "Define Your Business Idea",
    body: "Describe what you want to build — a service, product, brand, or skill-based business. RMIE takes your idea and turns it into a structured business model.",
  },
  {
    step: "02",
    title: "Build Your Offer",
    body: "Get a 3-tier offer structure: entry-level, core offer, and premium package. Know exactly what to sell, who to sell it to, and what to charge.",
  },
  {
    step: "03",
    title: "Set Your Foundation",
    body: "Get your LLC, EIN, business bank account, and business credit profile checklist — everything you need before you spend a dollar on marketing.",
  },
  {
    step: "04",
    title: "Launch Your Roadmap",
    body: "Get a 7-day sprint plan, 30-day launch checklist, and 90-day growth roadmap built specifically for your business type and available resources.",
  },
];

const BUILDER_TOOLS = [
  { icon: "💡", label: "Business Idea Intake" },
  { icon: "🏷️", label: "Brand Name Generator" },
  { icon: "📦", label: "Offer Builder" },
  { icon: "📋", label: "Startup Checklist" },
  { icon: "🏛️", label: "LLC / EIN Guide" },
  { icon: "🏦", label: "Business Bank Checklist" },
  { icon: "🗺️", label: "Launch Roadmap" },
  { icon: "💰", label: "Revenue Model Builder" },
];

export default function BuilderPage() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStart = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setSubmitted(true);
    const encoded = encodeURIComponent(idea.trim());
    setTimeout(() => {
      navigate(`/starter?idea=${encoded}`);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF8A00, #FFB347)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Real Business
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Business Builder takes your idea — no matter how rough or early — and builds it out into a complete business structure with an offer, a name, a foundation checklist, and a launch roadmap.
          </p>

          {/* Quick Start Form */}
          <div className="mx-auto max-w-xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="mb-4 text-sm font-bold text-slate-300">What's your business idea?</p>
            <form onSubmit={handleStart} className="flex flex-col gap-3">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Example: I want to start a mobile pressure washing business in my city..."
                className="min-h-[100px] w-full resize-none rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#FF8A00] focus:outline-none transition-colors"
                maxLength={500}
              />
              <button
                type="submit"
                disabled={!idea.trim() || submitted}
                className="rounded-xl bg-[#FF8A00] py-3 text-sm font-black text-[#0A0F1E] shadow-[0_0_30px_rgba(255,138,0,0.35)] transition hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? "Building Your Roadmap..." : "Build My Business →"}
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">Free. No credit card. Takes about 60 seconds.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">4 Steps From Idea to Launch</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Business Builder is not a generic checklist. It's a structured system that takes your specific idea and builds a personalized roadmap around it.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 font-display text-3xl font-black text-[#FF8A00] opacity-60">{s.step}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Builder Tools</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything You Need to Launch</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Every tool in Business Builder is designed to move you forward — not overwhelm you. Start with an idea. Leave with a real plan.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {BUILDER_TOOLS.map((tool) => (
              <div key={tool.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
                <div className="mb-2 text-3xl">{tool.icon}</div>
                <p className="text-xs font-semibold text-slate-300">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Checklist Preview */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Business Foundation</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Don't Skip the Foundation</h2>
          <p className="mb-10 text-center text-slate-400">
            Most people try to market before they have a business structure. Business Builder makes sure you have the foundation before you spend a dollar on ads.
          </p>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="mb-5 text-sm font-bold uppercase tracking-widest text-[#FF8A00]">Startup Foundation Checklist</p>
            <div className="space-y-3">
              {[
                { label: "Register your LLC", note: "Protect your personal assets from day one" },
                { label: "Get your EIN", note: "Required for business banking and hiring" },
                { label: "Open a business bank account", note: "Separate personal and business finances" },
                { label: "Set up business credit", note: "Build business credit independent of personal credit" },
                { label: "Create your business email", note: "Professional communications from the start" },
                { label: "Set your pricing structure", note: "3 tiers: entry, core, premium" },
                { label: "Build your first offer", note: "What you sell, who you sell it to, and for how much" },
                { label: "Create your Google Business Profile", note: "Free visibility in local search" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-lg border border-[#1A2235] p-3">
                  <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-[#FF8A00]/40 bg-[#FF8A00]/10" />
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Build Your Business?</h2>
          <p className="mb-10 text-slate-400">
            Start with your idea. Business Builder will give you a name, an offer, a foundation checklist, and a launch roadmap — in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-[#FF8A00] px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_30px_rgba(255,138,0,0.35)] transition hover:scale-[1.02]"
            >
              Start Free Roadmap
            </Link>
            <Link
              to="/accelerator"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Explore Accelerator Mode →
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Need advanced strategy?{" "}
            <Link to="/pro" className="text-[#2d9cff] hover:underline">Upgrade to Pro</Link>{" "}
            or{" "}
            <Link to="/elite" className="text-[#d4af37] hover:underline">Elite</Link>{" "}
            for the full execution toolkit.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
