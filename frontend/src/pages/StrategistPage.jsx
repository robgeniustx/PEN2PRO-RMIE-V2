import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StepCard from "../components/strategist/StepCard";
import { createCheckoutSession } from "../api/stripeApi";
import { fetchStrategistOutline, fetchStrategistSample, getStoredStrategistSession } from "../api/strategistApi";

const INCLUDED = [
  { icon: "🎯", title: "Your $10K-a-month path", body: "Pick your occupation and the strategist works out how many customers, hours and outreach messages it takes, flags where your numbers don't fit, and gives you a 12-week plan with weekly targets and proof checkpoints. It is arithmetic on your own numbers, not a promise." },
  { icon: "🧭", title: "15 steps, in order", body: "From choosing the right idea to your first 10 customers and a 90-day operating plan. Nothing to figure out about what comes next." },
  { icon: "🧾", title: "Legal and money setup", body: "Sole proprietor or LLC, free EIN, business bank account, licenses, insurance, and tax set-aside, explained in plain English." },
  { icon: "💬", title: "Scripts you can use today", body: "First message, discovery call, follow-up, price objection, and review request. Copy, adjust, send." },
  { icon: "💵", title: "Pricing and offers", body: "Build three priced packages with real math, not guesses, and a floor you never go below." },
  { icon: "📈", title: "Customers before spending", body: "A validation method that gets paying or committed customers before you buy equipment or run ads." },
  { icon: "🏦", title: "Credit and funding readiness", body: "Build the records and business credit foundation lenders look for, with no shortcuts and no scams." },
];

const FAQ = [
  { q: "Is this a course or software?", a: "It is a step-by-step playbook inside PEN2PRO. Each step has actions, a checkpoint, and mistakes to avoid, and you can check off your progress as you go." },
  { q: "How much do I need to start?", a: "The plan is designed for a lean start. Many of the core steps cost nothing (EIN, Google Business Profile, free bookkeeping). State filing fees, licenses, and insurance vary by location and are covered in the plan." },
  { q: "How do I get access?", a: "After checkout you are taken straight to your plan. Your purchase is saved on the device you use, and the receipt is emailed by Stripe." },
  { q: "Is this legal or tax advice?", a: "No. It is education and organization. For legal structure and tax decisions, confirm with a qualified professional. The plan shows you where and when to do that." },
  { q: "Can I try before I buy?", a: "Yes. Step 1 is free to read below, so you can see the level of detail before you decide." },
];

const FALLBACK_STEP_TITLES = [
  "Pick the business you will actually start", "Define your customer and their problem", "Build your first offer and set your price",
  "Validate demand before you spend money", "Choose your legal structure", "Register your name, get your EIN, and claim your handles",
  "Separate your money: business bank account and bookkeeping", "Licenses, permits, insurance, and taxes", "Set up your storefront in one weekend",
  "Build your sales system: script, follow-up, tracking", "Land your first 10 customers in 30 days", "Deliver well, document it, and collect proof",
  "Know your numbers, raise your price, reinvest wisely", "Build business credit and funding readiness", "Your 30/60/90-day plan and weekly operating rhythm",
];

export default function StrategistPage() {
  const [outline, setOutline] = useState(null);
  const [sample, setSample] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const purchased = !!getStoredStrategistSession();

  useEffect(() => {
    fetchStrategistOutline().then(setOutline).catch(() => setOutline(null));
    fetchStrategistSample().then(setSample).catch(() => setSample(null));
  }, []);

  const handleCheckout = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "strategist" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setError(result?.error || "Checkout is not available right now. Please try again shortly.");
    } catch {
      setError("Unable to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const phases = outline?.phases || [];
  const steps = outline?.steps || [];

  const BuyButton = ({ className = "" }) => (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={`btn-gold rounded-2xl px-8 py-4 text-base font-black text-[#080C14] glow-gold disabled:opacity-60 ${className}`}
    >
      {loading ? "Starting Checkout..." : "Get the Strategist Plan — $100"}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-20 text-center md:pt-28">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[700px] w-[700px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 inline-block rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            $100 · One-time · Instant access
          </p>
          <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
            The <span className="gradient-text">$100 Strategist Plan</span>
            <br />
            Start your business, step by step.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A detailed 15-step plan from "I have an idea" to paying customers, plus a strategist that builds a 12-week path to $10K a month for your occupation, with weekly targets and proof you can check against your bank statement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {purchased ? (
              <Link to="/strategist/playbook" className="btn-gold rounded-2xl px-8 py-4 text-base font-black text-[#080C14] glow-gold">
                Open My Strategist Plan →
              </Link>
            ) : (
              <BuyButton />
            )}
            <a href="#free-step" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400">
              Read Step 1 Free
            </a>
          </div>
          {error && (
            <p role="alert" className="mx-auto mt-4 max-w-md rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">{error}</p>
          )}
          <p className="mt-4 text-xs text-slate-600">Secure checkout by Stripe · Not ready? <Link to="/starter" className="text-slate-400 underline">Start the free roadmap</Link></p>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What you get</p>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">Everything between the idea and the first dollar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-display text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outline */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">The roadmap</p>
          <h2 className="mb-3 text-center font-display text-3xl font-black md:text-4xl">All 15 steps</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Five phases over about 90 days. Every step has actions, a time estimate, a cost estimate, a checkpoint, and mistakes to avoid.
          </p>

          {phases.length > 0 ? (
            <div className="space-y-8">
              {phases.map((phase) => (
                <div key={phase.id}>
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-[#D4A017]">{phase.name}</h3>
                    <span className="text-xs font-semibold text-slate-500">{phase.days}</span>
                  </div>
                  <ul className="space-y-3">
                    {steps.filter((s) => s.phase === phase.id).map((s) => (
                      <li key={s.id} className="flex gap-4 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-gold text-sm font-black text-[#080C14]">{s.id}</span>
                        <div>
                          <p className="font-bold text-white">{s.title}</p>
                          <p className="mt-1 text-sm text-slate-400">{s.goal}</p>
                          <p className="mt-1 text-xs text-slate-500">⏱ {s.time} · 💵 {s.cost}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ol className="space-y-3">
              {FALLBACK_STEP_TITLES.map((t, i) => (
                <li key={t} className="flex gap-4 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-gold text-sm font-black text-[#080C14]">{i + 1}</span>
                  <p className="font-bold text-white">{t}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* Free sample */}
      <section id="free-step" className="scroll-mt-20 border-y border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Free preview</p>
          <h2 className="mb-8 text-center font-display text-3xl font-black">Read Step 1 in full</h2>
          {sample?.step ? (
            <StepCard step={sample.step} defaultOpen />
          ) : (
            <p className="rounded-xl border border-[#1A2235] p-6 text-center text-sm text-slate-400">
              The preview is loading. If it does not appear, <Link to="/starter" className="underline">try the free roadmap</Link> in the meantime.
            </p>
          )}
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display text-3xl font-black md:text-4xl">Built for people who have been counted out</h2>
          <p className="mx-auto max-w-2xl text-slate-400 leading-8">
            First-time entrepreneurs, veterans, returning citizens, working-class builders, creators, side hustlers, and parents building income. If you have skills and ambition but no roadmap, this is the roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-300">
            {["First-time owners", "Veterans", "Returning citizens", "Creators", "Side hustlers", "Parents", "Service businesses"].map((x) => (
              <span key={x} className="rounded-full border border-[#1A2235] bg-[#0F1520] px-4 py-2">{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1A2235] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-black">Questions</h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                <summary className="cursor-pointer font-bold text-white">{f.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-24 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#D4A017]/40 p-10" style={{ background: "#D4A01708" }}>
          <h2 className="font-display text-3xl font-black">Stop waiting for permission.</h2>
          <p className="mt-3 text-slate-400">One payment. Fifteen steps. Start this week.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {purchased ? (
              <Link to="/strategist/playbook" className="btn-gold rounded-2xl px-8 py-4 text-base font-black text-[#080C14]">Open My Strategist Plan →</Link>
            ) : (
              <BuyButton />
            )}
            <Link to="/pricing" className="text-sm font-semibold text-slate-400 hover:text-white">Compare all plans</Link>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-xs leading-6 text-slate-600">{outline?.disclaimer || "PEN2PRO provides education, strategy, organization, and readiness tools. It does not guarantee business success, credit repair results, or funding approval."}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
