import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_MODULES = [
  { icon: "💡", title: "Business Idea Intake", body: "Describe your idea in plain language. RMIE breaks it down into a structured concept — product/service, target customer, problem solved, and revenue model." },
  { icon: "🏷️", title: "Brand Name Ideas", body: "Get AI-generated brand name suggestions based on your idea, market, and personality. Filter by domain availability and vibe." },
  { icon: "⚙️", title: "Business Model Generation", body: "Define how your business makes money — pricing structure, revenue streams, service packages, and monetization options built for your type of business." },
  { icon: "📦", title: "Offer Creation", body: "Build 2–3 offer packages with pricing tiers, what's included, delivery method, and positioning for different customer types." },
  { icon: "📋", title: "Startup Checklist", body: "Step-by-step checklist to get your business operational — from idea validation to first sale." },
  { icon: "🏛️", title: "LLC & EIN Setup Guide", body: "Know exactly which business structure fits, how to form your LLC, and how to get your EIN through the IRS — no attorney required for basic setup." },
  { icon: "🏦", title: "Business Bank Account Checklist", body: "What banks require, which accounts are best for new businesses, and how to get your business banking set up right." },
  { icon: "🗺️", title: "Launch Roadmap", body: "7-day, 30-day, and 90-day launch plan with specific daily/weekly actions. Not generic — built for your business type and market." },
];

const CHECKLIST_ITEMS = [
  "Define your business idea and target customer",
  "Choose your business structure (LLC, sole prop, etc.)",
  "Register your business name",
  "File for your EIN (free through IRS.gov)",
  "Open a business checking account",
  "Set up a payment processing account",
  "Create your service/product offer packages",
  "Build your pricing strategy",
  "Set up your Google Business Profile",
  "Create 3 testimonial opportunities",
  "Launch your outreach campaign",
  "Land your first 3 customers",
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.22) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.25) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
  </div>
);

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From Idea to
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Operating Business.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Builder Mode walks you through every step of launching a real business — from naming and structuring to offers, legal setup, banking, and your first customers.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Building Now — Free
            </Link>
            <Link to="/waitlist?tier=pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Pro Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Builder Tools</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Builder Mode doesn't just give you a plan — it builds the actual foundation: brand, structure, offer, legal setup, banking, and launch roadmap.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {BUILDER_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAUNCH CHECKLIST ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Launch Checklist</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">
            12 Steps to Your First Customer
          </h2>
          <p className="mb-10 text-center text-slate-400">
            PEN2PRO Builder Mode generates this checklist around your specific business — not generic advice.
          </p>
          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item, i) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-6 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                  {i + 1}
                </span>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">3 Steps to Your Business Blueprint</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Describe Your Idea", body: "Tell the RMIE engine what you want to build — a service, product, skill-based business, or side hustle. Plain language is fine." },
              { step: "02", title: "Get Your Blueprint", body: "RMIE generates a complete business blueprint — structure, offer, pricing, checklist, launch plan, and your first steps." },
              { step: "03", title: "Execute and Upgrade", body: "Start with the free blueprint. When you're ready to go deeper, upgrade to Pro or Elite for advanced strategy, tracking, and execution support." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-white text-lg">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Build?
          </h2>
          <p className="mb-10 text-slate-400">
            Start your free blueprint now. No credit card. No fluff. Just a real plan for your specific business idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Building — Free
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Pro
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Go to Accelerator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
