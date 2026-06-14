import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    n: "01",
    icon: "💡",
    title: "Describe Your Business Idea",
    desc: "Tell the Builder what you want to do — a service, product, skill, or concept. It doesn't need to be perfect. Just real.",
  },
  {
    n: "02",
    icon: "🏷️",
    title: "Get Brand Name Options",
    desc: "Receive AI-generated brand name ideas that match your niche, market, and vibe — professional and memorable.",
  },
  {
    n: "03",
    icon: "📐",
    title: "Build Your Business Model",
    desc: "Define your offer, pricing structure, revenue model, and target customer. Know exactly what you're selling and to whom.",
  },
  {
    n: "04",
    icon: "📋",
    title: "Launch Checklist",
    desc: "Step-by-step checklist covering LLC formation, EIN, business bank account, email, domain, and everything else you need to open.",
  },
  {
    n: "05",
    icon: "🗺️",
    title: "7-Day Launch Roadmap",
    desc: "Your first 7 days mapped out in daily tasks. From LLC registration to your first client conversation — all sequenced correctly.",
  },
  {
    n: "06",
    icon: "💰",
    title: "Startup Cost Estimate",
    desc: "Know exactly what it costs to launch — low budget, realistic, and stretch scenarios — so there are no surprises on day one.",
  },
];

const CHECKLIST_ITEMS = [
  { icon: "⚖️", title: "LLC Formation", desc: "State filing requirements, registered agent options, and the right structure for your business type." },
  { icon: "🔢", title: "EIN Registration", desc: "Free IRS employer identification number — required for business bank accounts, payroll, and credit." },
  { icon: "🏦", title: "Business Bank Account", desc: "What documents you need, which banks to consider, and how to keep personal and business money separate." },
  { icon: "🌐", title: "Domain & Email Setup", desc: "Claim your business name online. Professional email through Google Workspace or Microsoft 365." },
  { icon: "📄", title: "Operating Agreement", desc: "Document who owns what, how decisions are made, and how profit is distributed." },
  { icon: "📱", title: "Social Media Handles", desc: "Claim consistent handles across all platforms before someone else does — name strategy included." },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #1E88E5 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: "rgba(30,136,229,0.3)", background: "rgba(30,136,229,0.08)", color: "#1E88E5" }}
          >
            🏗️ PEN2PRO Builder Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            From Idea to<br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Open for Business.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Builder walks you through everything you need to turn an idea into a real, registered,
            operating business — with a brand, a model, a checklist, and a 7-day launch plan.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Start Your Business Blueprint →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
            >
              View Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Free to start · No credit card · 5 minutes to your first roadmap</p>
        </div>
      </section>

      {/* HOW BUILDER WORKS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-400">How It Works</p>
            <h2 className="font-display text-4xl font-black text-white">Six steps from idea to open</h2>
            <p className="mt-3 text-slate-500">Builder doesn't ask you to figure it out. It figures it out with you, in order, step by step.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-blue-500/30 transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-[#080C14]"
                    style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
                  >
                    {step.n}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDATION CHECKLIST */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Business Foundation</p>
            <h2 className="font-display text-4xl font-black text-white">The legal and financial foundation most people skip</h2>
            <p className="mt-3 text-slate-500">
              Most entrepreneurs jump to marketing before the foundation is set. Builder sequences the foundation correctly.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {CHECKLIST_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE OUTPUT */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-400">What Builder Produces</p>
            <h2 className="font-display text-4xl font-black text-white">Real output. Not generic advice.</h2>
          </div>
          <div className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-slate-600">Sample Builder Output — Pressure Washing Business</span>
            </div>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="rounded-xl bg-[#0F1520] p-4">
                <p className="font-bold text-white">Brand Names Generated</p>
                <p className="mt-1">AquaBlast Pro · ClearPath Wash Co. · HydroShield Services · PrestigePower Wash</p>
              </div>
              <div className="rounded-xl bg-[#0F1520] p-4">
                <p className="font-bold text-white">Offer Structure</p>
                <p className="mt-1">Starter Clean $149 · Full Home $349 · Premium Package $549 (driveway, siding, deck, gutters)</p>
              </div>
              <div className="rounded-xl bg-[#0F1520] p-4">
                <p className="font-bold text-white">7-Day Launch Plan</p>
                <p className="mt-1">Day 1: Register LLC · Day 2: Get EIN at IRS.gov · Day 3: Open Chase Business Checking · Day 4: Create Google Business Profile · Day 5: Buy domain on Namecheap · Day 6: Rent or purchase pressure washer · Day 7: Message 20 local contacts with intro offer</p>
              </div>
              <div className="rounded-xl bg-[#0F1520] p-4">
                <p className="font-bold text-white">Startup Cost Estimate</p>
                <p className="mt-1">Low budget: $1,200 · Realistic: $3,500 · Full setup: $8,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">Start building today</p>
          <h2 className="font-display text-4xl font-black text-white md:text-5xl">
            Your business has a name.<br />
            <span className="gradient-text">Builder will help you find it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Start free. No credit card. In 5 minutes you'll have a brand name, business model, and 7-day plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold">
              Start My Business Blueprint →
            </Link>
            <Link
              to="/accelerator"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
            >
              Explore the Accelerator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
