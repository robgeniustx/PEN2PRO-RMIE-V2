import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { n: "01", t: "Describe Your Idea", d: "Answer 5 structured questions about your business concept, target market, location, and starting budget." },
  { n: "02", t: "AI Builds Your Foundation", d: "Brand name ideas, business model selection, 3-tier offer structure, and startup cost breakdown." },
  { n: "03", t: "Get Your Launch Checklist", d: "LLC, EIN, business bank account, website, and branding — every step, in the right order." },
  { n: "04", t: "Execute the 7-Day Plan", d: "Daily action steps, your first 20 outreach targets, and a pricing strategy built for your market." },
];

const BUILDER_TOOLS = [
  { icon: "💡", title: "Business Idea Intake", desc: "Structured intake turns a vague idea into a focused, marketable business concept in minutes." },
  { icon: "🏷️", title: "Brand Name Generator", desc: "AI-generated brand names based on your niche, tone, location, and target customer profile." },
  { icon: "📐", title: "Business Model Selection", desc: "Service, product, hybrid, or subscription — the right model for your market and starting resources." },
  { icon: "💼", title: "3-Tier Offer Creation", desc: "Starter, standard, and premium offer packages with suggested pricing for your industry." },
  { icon: "✅", title: "Startup Checklist", desc: "The exact steps — in order — to go from idea to operating business in 30 days or less." },
  { icon: "🏦", title: "LLC & Banking Guidance", desc: "Formation process, EIN application, business bank account setup, and first account structure." },
  { icon: "🚀", title: "7-Day Launch Roadmap", desc: "Daily execution plan with specific actions, outreach targets, and quick-win milestones." },
  { icon: "💾", title: "Save Your Blueprint", desc: "Create a free account to save, track progress, and refine your business plan as you grow." },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into<br />
            <span
              style={{
                background: "linear-gradient(90deg, #1E88E5, #00C9B1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Real Business.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Builder mode takes your raw idea and produces a real business foundation — brand identity,
            business model, offer structure, startup checklist, and launch roadmap — in one session.
            Free to start. No credit card.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold">
              Start Building Free →
            </Link>
            <Link
              to="/pro"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-[#1E88E5]/50 hover:text-white transition"
            >
              See Pro & Elite Access
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            No account required to start · Save your blueprint with a free account
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">How It Works</p>
            <h2 className="font-display text-4xl font-black text-white">
              From blank page to business plan in 4 steps
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {BUILDER_STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6">
                <div
                  className="mb-4 font-display text-5xl font-black leading-none"
                  style={{ color: "rgba(30,136,229,0.2)" }}
                >
                  {step.n}
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{step.t}</h3>
                <p className="text-sm leading-6 text-slate-500">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDER TOOLS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Builder Tools</p>
            <h2 className="font-display text-4xl font-black text-white">What Builder mode creates for you</h2>
            <p className="mt-3 text-slate-500">
              Every output is specific to your idea, market, and starting resources — not generic advice.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUILDER_TOOLS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-[#1E88E5]/30 transition-colors"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE OUTPUT */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Real Output Example</p>
            <h2 className="font-display text-3xl font-black text-white">This is what Builder produces</h2>
            <p className="mt-3 text-slate-500">Not generic fluff. Specific, actionable, and built for you.</p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Business Concept", value: "Mobile pressure washing targeting residential clients in Houston, TX with a 3-tier service package." },
              { label: "Brand Name Ideas", value: "XLR8 Pressure Washing · CleanPro Mobile · RushWash Houston" },
              { label: "Starter Offer", value: "Driveway clean — $120 | Full exterior — $280 | Premium package (house + driveway + fence) — $450" },
              { label: "7-Day Action", value: "Day 1: File LLC. Day 2: Open business bank account. Day 3: Create Google Business Profile. Days 4–7: Message 15 neighbors per day in Facebook Groups." },
              { label: "Revenue Target", value: "$3,600/month at 8 premium packages per month. Achievable in 30 days with daily outreach." },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border border-[#1A2235] bg-[#080C14] px-5 py-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">{row.label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER UPGRADE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Save & Upgrade</p>
            <h2 className="font-display text-3xl font-black text-white">Start free. Unlock more when ready.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                tier: "Free",
                price: "$0",
                color: "#1A2235",
                textColor: "text-slate-300",
                accentColor: "text-slate-400",
                features: ["Basic blueprint preview", "Brand name suggestions", "Startup checklist", "7-day action plan"],
                cta: "Start Free",
                href: "/starter",
                ctaStyle: "border border-[#1A2235] text-slate-300 hover:border-white hover:text-white",
              },
              {
                tier: "Pro",
                price: "$249/mo",
                color: "#D4A017",
                textColor: "text-[#D4A017]",
                accentColor: "text-[#D4A017]",
                features: ["Full blueprint output", "90-day execution plan", "Sales scripts & outreach", "Credit readiness checklist", "AI roadmap refinement"],
                cta: "Upgrade to Pro",
                href: "/pro",
                ctaStyle: "btn-gold text-[#080C14]",
              },
              {
                tier: "Elite",
                price: "$499/mo",
                color: "#00C9B1",
                textColor: "text-[#00C9B1]",
                accentColor: "text-[#00C9B1]",
                features: ["Everything in Pro", "Financial projections", "Funding partner access", "Done-with-you guidance", "Priority support"],
                cta: "Upgrade to Elite",
                href: "/elite",
                ctaStyle: "border border-[#00C9B1]/50 text-[#00C9B1] hover:border-[#00C9B1]",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: t.color + "40" }}
              >
                <p className={`text-xs font-bold uppercase tracking-widest ${t.textColor}`}>{t.tier}</p>
                <p className="mt-1 mb-4 font-display text-2xl font-black text-white">{t.price}</p>
                <ul className="mb-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${t.accentColor}`}>
                      <span className="font-bold">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={t.href}
                  className={`block rounded-xl px-4 py-3 text-center text-sm font-black transition ${t.ctaStyle}`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
