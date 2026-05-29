import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { step: "01", title: "Business Idea Intake", desc: "Tell PEN2PRO what you want to build — your idea, your skills, your market, your resources, and your goal." },
  { step: "02", title: "Brand Name Generation", desc: "Get 5–10 brand name ideas, domain suggestions, and brand identity direction built around your business concept." },
  { step: "03", title: "Business Model Creation", desc: "We define your offer, pricing structure, service packages, and how you'll make money — specific to your niche." },
  { step: "04", title: "Offer Development", desc: "Create 2–3 offer tiers with specific deliverables, pricing, and positioning designed to convert your target customer." },
  { step: "05", title: "Startup Checklist", desc: "Everything you need to launch — LLC filing, EIN, business bank account, domain, social media handles, and tools." },
  { step: "06", title: "Launch Roadmap", desc: "Your 7-day launch plan — exactly what to do each day to go from zero to your first paying customer." },
];

const CHECKLIST_ITEMS = [
  "Choose business structure (LLC, Sole Prop, S-Corp)",
  "File LLC formation documents",
  "Obtain EIN from the IRS",
  "Open a dedicated business bank account",
  "Register your domain name",
  "Set up professional email",
  "Create social media profiles (Instagram, Facebook, LinkedIn)",
  "Build or claim your Google Business Profile",
  "Create a simple service/product offer",
  "Set up a payment processor (Stripe, Square, PayPal)",
  "Define your target customer and first outreach list",
  "Send your first 10 outreach messages",
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #1E88E5 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(30,136,229,0.3)", background: "rgba(30,136,229,0.08)" }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E88E5" }}>Business Builder Mode</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            From Idea to<br />
            <span style={{ color: "#D4A017" }}>Operational Business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Builder mode walks you through every foundational step — naming, modeling, offer creation, entity setup, and launch — so you leave with an actual business structure, not just a concept.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 text-base font-black text-[#080C14]">
              Start Your Free Blueprint
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-base font-semibold text-slate-300 transition hover:border-[#D4A017] hover:text-white">
              Upgrade for Full Access
            </Link>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="mb-3 text-center text-3xl font-black text-white">How Builder Mode Works</h2>
        <p className="mb-12 text-center text-slate-400">Six structured phases that take you from raw idea to a launchable business.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDER_STEPS.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-[#1A2235] p-6 transition hover:border-[#D4A017]/30" style={{ background: "#0F1520" }}>
              <div className="mb-4 text-4xl font-black" style={{ color: "rgba(212,160,23,0.2)" }}>{s.step}</div>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STARTUP CHECKLIST */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
          <h2 className="mb-2 text-2xl font-black text-white">Startup Checklist</h2>
          <p className="mb-6 text-sm text-slate-400">Every item a new business needs to operate legally, professionally, and credibly.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {CHECKLIST_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#1A2D50] text-[10px] text-slate-500">{i + 1}</span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="btn-gold rounded-xl px-6 py-3 text-center text-sm font-black text-[#080C14]">
              Get My Personalized Checklist
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 transition hover:border-[#D4A017]">
              Unlock Full Builder with Pro
            </Link>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="mx-auto max-w-4xl px-5 pb-20">
        <h2 className="mb-8 text-center text-2xl font-black text-white">Builder Mode Is For You If...</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "You have an idea but haven't started yet",
            "You started but skipped the business foundation steps",
            "You're not sure what business structure to use",
            "You want a real business name that fits your market",
            "You need a clear offer and pricing strategy",
            "You want to know the exact steps to take in the next 7 days",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-[#1A2235] px-5 py-4" style={{ background: "#0F1520" }}>
              <span className="text-lg" style={{ color: "#D4A017" }}>→</span>
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-5 pb-28 text-center">
        <div className="rounded-2xl border px-8 py-12" style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.05)" }}>
          <h2 className="mb-4 text-3xl font-black text-white">Start Building Your Business Today</h2>
          <p className="mb-8 text-slate-400">Free blueprint gets you started. Pro and Elite unlock the full builder experience.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 font-black text-[#080C14]">
              Start Free Blueprint
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 font-semibold text-slate-300 transition hover:border-[#D4A017]">
              Go to Accelerator Mode →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
