import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { step: "1", icon: "💡", title: "Define Your Idea", desc: "Describe what your business does and who it helps." },
  { step: "2", icon: "🎯", title: "Identify Your Customer", desc: "Who has the problem you solve? Where do they hang out?" },
  { step: "3", icon: "💰", title: "Build Your Offer", desc: "Create 1–3 service packages with clear pricing." },
  { step: "4", icon: "🏗️", title: "Set Up Your Foundation", desc: "LLC, EIN, business bank, and basic online presence." },
  { step: "5", icon: "🚀", title: "Launch & Get Clients", desc: "7-day action plan to land your first paying customer." },
];

const CHECKLIST = [
  { section: "Business Entity", items: ["Choose business structure (LLC recommended)", "Register LLC with your state", "Obtain EIN from IRS (free)", "Open business checking account", "Get business address / registered agent"] },
  { section: "Brand Foundation", items: ["Confirm your business name", "Register domain name", "Create Google Business Profile", "Set up business email (yourname@yourbiz.com)", "Create social media handles"] },
  { section: "Offer & Pricing", items: ["Define 3 service tiers or packages", "Set your pricing (hourly, project, retainer)", "Create a simple service menu or one-pager", "Draft intake form or discovery call process", "Build a referral or testimonial ask"] },
  { section: "Revenue Readiness", items: ["Set up payment processing (Stripe, Square, etc.)", "Send your first invoice or proposal", "Build a simple lead tracking spreadsheet", "Create a follow-up sequence (3 touchpoints)", "Track all income and expenses from day one"] },
];

export default function BuilderPage() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleStart(e) {
    e.preventDefault();
    if (idea.trim().length < 5) return;
    navigate(`/starter?idea=${encodeURIComponent(idea.trim())}`);
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-center px-5">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,201,177,0.12) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Business Builder</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Turn Your Idea Into<br />
            <span style={{ color: "#00C9B1" }}>A Real Business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Business Builder mode walks you through every step — from raw idea to registered entity, branded offer, and first paying customer. No fluff. No theory. Real steps.
          </p>
        </div>
      </section>

      {/* Idea Intake */}
      <section className="mx-auto max-w-2xl px-5 pb-16">
        <div className="rounded-3xl border border-[#1A2D50] p-8" style={{ background: "#0F1520" }}>
          <h2 className="mb-2 font-display text-2xl font-black text-white">Start With Your Idea</h2>
          <p className="mb-6 text-sm text-slate-400">Describe your business idea in a sentence. We'll build a full roadmap around it.</p>
          <form onSubmit={handleStart} className="space-y-4">
            <textarea
              value={idea}
              onChange={e => setIdea(e.target.value)}
              placeholder="Example: I want to start a mobile pressure washing business in my city targeting residential driveways and commercial parking lots..."
              rows={4}
              className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#00C9B1] focus:outline-none resize-none"
            />
            <button
              type="submit"
              disabled={idea.trim().length < 5}
              className="w-full rounded-xl px-6 py-4 text-base font-black text-[#080C14] disabled:opacity-50 transition-all"
              style={{ background: "linear-gradient(135deg, #00C9B1 0%, #1E88E5 100%)" }}>
              Build My Roadmap →
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-slate-500">Free to start. No account required for the basic roadmap.</p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">The Builder Process</h2>
        <p className="mb-12 text-center text-slate-400">Five phases. Zero guessing. Complete business foundation.</p>
        <div className="grid gap-5 sm:grid-cols-5">
          {BUILDER_STEPS.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-[#1A2D50] p-6 text-center"
              style={{ background: "#0F1520" }}>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#00C9B1]/30 text-2xl"
                style={{ background: "rgba(0,201,177,0.1)" }}>
                {s.icon}
              </div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Step {s.step}</p>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-xs leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Launch Checklist */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">Business Launch Checklist</h2>
        <p className="mb-12 text-center text-slate-400">Everything you need to do before you officially call yourself open for business.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {CHECKLIST.map((section) => (
            <div key={section.section} className="rounded-2xl border border-[#1A2D50] p-6"
              style={{ background: "#0F1520" }}>
              <h3 className="mb-4 font-bold" style={{ color: "#00C9B1" }}>{section.section}</h3>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 h-4 w-4 rounded border border-[#1A2D50] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-[#00C9B1]/20 bg-[#00C9B1]/5 px-6 py-4 text-center text-sm text-slate-400">
          Pro and Elite members get an interactive checklist inside the dashboard — trackable, saveable, and shareable.{" "}
          <Link to="/pricing" className="font-semibold text-[#00C9B1] hover:underline">Upgrade to unlock →</Link>
        </div>
      </section>

      {/* Pro Upgrade CTA */}
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <div className="rounded-3xl border border-[#00C9B1]/30 p-10"
          style={{ background: "linear-gradient(135deg, #0D1528 0%, #0F1520 100%)" }}>
          <h2 className="font-display text-3xl font-black text-white">Save Your Blueprint. Upgrade When Ready.</h2>
          <p className="mt-4 text-slate-400">Free mode gives you the roadmap. Pro gives you the full system — tracking, branding, export, AI refinement, credit readiness, and outreach strategy.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1 0%, #1E88E5 100%)" }}>
              Start Free Roadmap
            </Link>
            <Link to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#00C9B1] hover:text-white transition-all">
              Explore Pro →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
