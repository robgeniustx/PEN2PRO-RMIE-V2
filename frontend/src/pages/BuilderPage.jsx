import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { step: "01", icon: "💡", title: "Business Idea Intake", body: "Describe your idea, skills, or experience. RMIE analyzes it and identifies viable business models, target customers, and monetization paths." },
  { step: "02", icon: "🏷️", title: "Brand Name & Positioning", body: "Get 5–10 brand name ideas based on your business concept, plus tagline options, positioning strategy, and brand voice direction." },
  { step: "03", icon: "📦", title: "Offer & Business Model", body: "Define your offer — what you sell, at what price, to whom, and how. Service packages, product tiers, subscription models, or hybrid options." },
  { step: "04", icon: "📋", title: "Startup Checklist", body: "A step-by-step checklist of everything you need to get legally and operationally set up: LLC, EIN, business bank, tools, and website." },
  { step: "05", icon: "🗺️", title: "Launch Roadmap", body: "A 7-day quick-start plan, a 30-day launch plan, and a 90-day growth roadmap — specific to your business type and market." },
  { step: "06", icon: "💾", title: "Save & Upgrade", body: "Save your blueprint to your account. Upgrade to Pro to unlock AI refinement, full export, outreach strategy, and credit readiness tools." },
];

const FOUNDATION_CHECKLIST = [
  { item: "Choose your business structure (LLC, sole proprietor, S-Corp)", done: false },
  { item: "File your LLC with your state", done: false },
  { item: "Get your EIN from the IRS (free, takes 15 min)", done: false },
  { item: "Open a dedicated business bank account", done: false },
  { item: "Register your business name / DBA if needed", done: false },
  { item: "Get a business email address", done: false },
  { item: "Set up your basic business profile (Google, Yelp, social)", done: false },
  { item: "Create 3 core service or product packages", done: false },
  { item: "Set your pricing and payment method", done: false },
  { item: "Get your first 3 customers or proof-of-concept sales", done: false },
];

const BUSINESS_TYPES = [
  "Service Business (cleaning, pressure washing, landscaping, etc.)",
  "Consulting or Coaching",
  "Creative (design, photography, video, content)",
  "E-Commerce or Physical Products",
  "Digital Products or Courses",
  "Staffing or Placement Agency",
  "Trucking or Logistics",
  "Real Estate (wholesaling, property management, etc.)",
  "Food & Catering",
  "Tech / Software / App",
  "Health & Wellness",
  "Other / I'll describe it",
];

export default function BuilderPage() {
  const [idea, setIdea] = useState("");
  const [type, setType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleStart(e) {
    e.preventDefault();
    if (!idea.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,136,229,0.1),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#5ab0ff]">
            Business Builder Mode
          </span>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into a<br />Real Business Blueprint
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Builder mode takes your business idea — no matter how rough — and generates a complete startup blueprint with brand direction, offer structure, startup checklist, and a step-by-step launch roadmap.
          </p>
          <Link to="/starter" className="rounded-xl bg-[#2d9cff] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.45)] transition hover:scale-[1.02]">
            Start Your Free Blueprint
          </Link>
        </div>
      </section>

      {/* Quick Intake */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#1A2D50] bg-[#0F1520] p-8">
          {!submitted ? (
            <>
              <h2 className="mb-2 font-display text-2xl font-black">What's Your Business Idea?</h2>
              <p className="mb-6 text-sm text-slate-400">Give me a rough idea and I'll show you what your blueprint could look like. No account needed to start.</p>
              <form onSubmit={handleStart} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Business Idea or Skill</label>
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    rows={3}
                    placeholder="e.g. I want to start a pressure washing business, I'm a great cook and want to do catering, I have experience in logistics..."
                    className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#2d9cff] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Business Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white focus:border-[#2d9cff] focus:outline-none"
                  >
                    <option value="">Select a type…</option>
                    {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full rounded-xl bg-[#2d9cff] py-3.5 text-sm font-black text-[#081226] transition hover:scale-[1.01]">
                  Generate My Business Blueprint →
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-4 text-4xl">⚡</div>
              <h2 className="mb-3 font-display text-2xl font-black">Blueprint Preview Ready</h2>
              <p className="mb-6 text-slate-300 text-sm">Your idea has been captured. Start your full RMIE intake to get your complete blueprint with launch plan, branding, and startup checklist.</p>
              <Link to={`/starter?idea=${encodeURIComponent(idea)}`} className="inline-block rounded-xl bg-[#2d9cff] px-8 py-3 text-sm font-black text-[#081226] transition hover:scale-[1.01]">
                Start Full Blueprint →
              </Link>
              <button onClick={() => setSubmitted(false)} className="ml-4 text-sm text-slate-400 hover:text-white underline">
                Edit idea
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">How It Works</p>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">6 Steps From Idea to Blueprint</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <span className="absolute right-4 top-4 text-xs font-black text-slate-700">{s.step}</span>
                <div className="mb-3 text-2xl">{s.icon}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Checklist */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">Starter Foundation</p>
          <h2 className="mb-8 text-center font-display text-3xl font-black">Business Foundation Checklist</h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            {FOUNDATION_CHECKLIST.map((row, i) => (
              <div key={row.item} className={`flex items-start gap-4 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#0a0f1e]"} ${i < FOUNDATION_CHECKLIST.length - 1 ? "border-b border-[#1A2D50]" : ""}`}>
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2d9cff]/40 bg-[#2d9cff]/10 text-[10px] text-[#2d9cff]">☐</span>
                <span className="text-slate-300">{row.item}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Pro users get an interactive checklist with progress tracking and resource links.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#2d9cff]/30 bg-[linear-gradient(160deg,#101a2f,#0a0f1e)] p-10">
          <h2 className="mb-4 font-display text-3xl font-black">Ready to Build Something Real?</h2>
          <p className="mb-7 text-slate-300">Start your free business blueprint now. No credit card. No fluff. Just your idea, turned into a real roadmap.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl bg-[#2d9cff] px-8 py-3 text-sm font-black text-[#081226] transition hover:scale-[1.02]">
              Start Free Blueprint
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400">
              See Pro Features →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
