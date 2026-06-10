import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    title: "Describe Your Idea",
    body: "Tell PEN2PRO what you want to build — a service, product, side hustle, business, or brand. The more specific, the better the output.",
    icon: "💡",
  },
  {
    step: "02",
    title: "AI Generates Your Business Model",
    body: "The RMIE engine analyzes your idea and builds your business model — target customer, offer structure, pricing tiers, and revenue strategy.",
    icon: "🤖",
  },
  {
    step: "03",
    title: "Get Brand Name & Identity Ideas",
    body: "Receive AI-generated brand name options, tagline suggestions, color palette direction, and social media handle ideas for your business.",
    icon: "🎨",
  },
  {
    step: "04",
    title: "Build Your Foundation Checklist",
    body: "Get a step-by-step checklist: LLC formation, EIN registration, business bank account, payment processor, and business tools setup.",
    icon: "🏗️",
  },
  {
    step: "05",
    title: "Get Your Launch Roadmap",
    body: "Your 7-day quick start, 30-day launch plan, and 90-day growth strategy — specific actions for your business, not generic advice.",
    icon: "🗺️",
  },
  {
    step: "06",
    title: "Save, Export, or Upgrade",
    body: "Save your roadmap to your dashboard, export as PDF, share with partners, or upgrade to Pro/Elite for deeper execution support.",
    icon: "💾",
  },
];

const CHECKLIST_ITEMS = [
  { label: "LLC Formation (or sole proprietor choice)", icon: "🏛️" },
  { label: "EIN Registration (IRS employer ID)", icon: "📋" },
  { label: "Business Bank Account Setup", icon: "🏦" },
  { label: "Payment Processor (Stripe, Square, etc.)", icon: "💳" },
  { label: "Business Email Address", icon: "📧" },
  { label: "Domain Name & Website", icon: "🌐" },
  { label: "CRM or Contact Management", icon: "👥" },
  { label: "Business Insurance (if applicable)", icon: "🛡️" },
  { label: "Bookkeeping Setup", icon: "📊" },
  { label: "Social Media Business Profiles", icon: "📱" },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center relative">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Real Business Plan.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Business Builder walks you from raw idea to structured business — brand name, business model, offer creation, startup checklist, and a real launch roadmap — in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] shadow-[0_0_35px_rgba(255,138,0,0.4)] transition hover:scale-[1.02] btn-gold"
            >
              Start Building — Free
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Pro & Elite Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">6 Steps From Idea to Launch Plan</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Builder is not a template. It is an AI-powered intake and generation system that builds your plan around your specific idea and situation.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#1A2D50]">{s.step}</span>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STARTUP CHECKLIST ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Built-In</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Your Startup Foundation Checklist</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
            Builder includes a full business foundation checklist — not just the ideas, but the actual legal, financial, and operational steps to stand your business up correctly.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {CHECKLIST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-5 py-4">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE OUTPUT ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Sample Output Quality</div>
          <h2 className="mb-8 text-center font-display text-2xl font-black">This Is Not Generic Advice</h2>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">❌ What Basic Tools Give You</p>
              <p className="text-slate-400 text-sm">"Post on social media and market your business to grow your customer base."</p>
            </div>
            <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF8A00] mb-2">✓ What PEN2PRO Builder Gives You</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Create 3 service packages at $97, $197, and $397. Identify 50 local prospects using Google Maps. Message 20 prospects per day for 7 days with this specific script. Set up Google Business Profile with these 5 categories. Collect 3 written testimonials within 30 days. Test a $10/day Instagram ad after you have validated demand with direct outreach — not before."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Your Idea Is Ready to Become a Business.</h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            Start with the free Builder mode. Get your brand name ideas, business model, startup checklist, and launch roadmap. Save it. Upgrade when you are ready to execute at the next level.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold shadow-[0_0_35px_rgba(255,138,0,0.4)] transition hover:scale-[1.02]">
              Start Building — Free
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Pro Plan
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
