import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const STEPS = [
  {
    num: "01",
    title: "Tell Us Your Idea",
    desc: "Answer a short intake: your business idea, target customer, budget range, and goals. Takes under 5 minutes.",
    color: "#1E88E5",
  },
  {
    num: "02",
    title: "RMIE Builds Your Blueprint",
    desc: "Our AI engine generates a full business plan — offer structure, pricing, LLC checklist, startup costs, and a 7-day action plan.",
    color: "#FF8A00",
  },
  {
    num: "03",
    title: "Execute With Your Plan",
    desc: "Follow your roadmap step by step. Save, export, or upgrade to Pro/Elite for deeper strategy and execution support.",
    color: "#00C9B1",
  },
];

const FEATURES = [
  { icon: "📝", label: "Business idea intake form" },
  { icon: "💡", label: "Brand name generation" },
  { icon: "🏗️", label: "Business model creation" },
  { icon: "💰", label: "Offer & pricing structure" },
  { icon: "📋", label: "LLC / EIN / bank checklist" },
  { icon: "💵", label: "Startup cost estimate" },
  { icon: "📅", label: "7-day action plan" },
  { icon: "🚀", label: "30-day launch roadmap" },
  { icon: "🎯", label: "Target customer profile" },
  { icon: "📣", label: "Basic marketing direction" },
  { icon: "📊", label: "Revenue model outline" },
  { icon: "🔗", label: "Resource & tool recommendations" },
];

const WHO_ITS_FOR = [
  { title: "First-Time Entrepreneurs",  desc: "Never started a business? Builder walks you through every foundational step." },
  { title: "Side Hustlers",             desc: "Turn your skill, service, or passion into a structured business — not just a gig." },
  { title: "Career Changers",           desc: "Walking away from a job? Builder helps you structure your transition." },
  { title: "People With Skills, No Plan", desc: "You know what you can do. Builder turns that into a real business structure." },
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[40%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-28 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            PEN2PRO Builder Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Business Builder
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From Idea to Launch.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Stop guessing and start building. PEN2PRO Builder takes your idea and turns it into a structured business blueprint — offer, pricing, checklist, and a step-by-step launch plan.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Building Free
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF8A00] transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Three Steps to Your Blueprint</h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            No experience needed. Answer a few questions and Builder does the heavy lifting.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl font-display text-xl font-black"
                  style={{ background: s.color + "20", color: s.color, border: `1px solid ${s.color}40` }}>
                  {s.num}
                </div>
                <h3 className="mb-3 font-bold text-white text-lg">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">What Builder Generates</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Your Complete Business Blueprint</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Every output is built around your specific idea, not a generic template. No copy-paste advice.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <span className="text-xl shrink-0">{f.icon}</span>
                <span className="text-sm font-medium text-slate-300 leading-snug">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Who Builder Is For</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Built for Builders at Any Stage</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            You don't need a business degree, a track record, or existing capital. You just need an idea and the willingness to move.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-2 font-bold text-white text-base">{w.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Blueprint Is One Step Away
          </h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            Start free. No credit card. No guesswork. PEN2PRO Builder gives you a real business plan in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Your Business Blueprint
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
