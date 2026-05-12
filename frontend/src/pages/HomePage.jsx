import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Founders", to: "/founders" },
];

const TIERS = [
  {
    name: "Free Forever",
    price: "$0",
    badge: null,
    description: "Get your first business blueprint at no cost.",
    features: ["1 starter blueprint", "Basic launch checklist", "Business idea analysis"],
    cta: "Start Free",
    to: "/starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$89/mo",
    badge: "Most Popular",
    description: "Full roadmap, branding, and AI-powered refinement.",
    features: ["Full business roadmap", "Brand kit & logo guidance", "Content generator", "Export & tracking", "Social calendar"],
    cta: "Go Pro",
    to: "/checkout/pro",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$149/mo",
    badge: "Strategist Level",
    description: "Advanced AI guidance with financial and legal foundations.",
    features: ["$100M Strategist Mode", "Financial projections", "Legal foundation guidance", "Vendor integrations", "Priority AI guidance", "CRM follow-up plan"],
    cta: "Go Elite",
    to: "/checkout/elite",
    highlight: false,
  },
  {
    name: "Founders Lifetime",
    price: "$899",
    badge: "Lifetime Access",
    description: "One payment. Everything. Forever.",
    features: ["All Elite features", "Lifetime access", "Future agent modules", "Priority support", "Founders community"],
    cta: "Claim Founders Access",
    to: "/founders",
    highlight: false,
  },
];

const FEATURES = [
  {
    icon: "🗺️",
    title: "Business Roadmap",
    body: "From idea to first dollar — a step-by-step execution plan built for your industry and budget.",
  },
  {
    icon: "🤖",
    title: "AI Strategist",
    body: "Get the same strategic thinking as a $100M business advisor, powered by AI and real-world frameworks.",
  },
  {
    icon: "🎨",
    title: "Brand Kit",
    body: "Name, logo direction, brand voice, and positioning — everything you need to look legitimate from day one.",
  },
  {
    icon: "📊",
    title: "Financial Projections",
    body: "Know your numbers before you spend a dollar. Startup cost estimates, revenue models, and break-even analysis.",
  },
  {
    icon: "⚖️",
    title: "Legal Foundation",
    body: "LLC formation steps, EIN guidance, business banking setup — the paperwork that protects you.",
  },
  {
    icon: "📣",
    title: "Content & Outreach",
    body: "Ready-to-use social scripts, ad copy direction, and outreach templates that actually convert.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-xs font-extrabold text-white">
              P2P
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">PEN2PRO</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="transition hover:text-teal-400">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden text-sm font-semibold text-slate-400 transition hover:text-white md:block"
            >
              Sign In
            </Link>
            <Link
              to="/starter"
              className="rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-teal-900/40 transition hover:bg-teal-600"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex rounded-full border border-teal-800 bg-teal-950 px-5 py-2 text-sm font-bold text-teal-400">
          Built for Second-Chance Builders · Veterans · Working-Class Entrepreneurs
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          Turn Your Idea Into{" "}
          <span className="text-teal-400">A Real Business.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-400">
          PEN2PRO gives you the roadmap, strategy, branding, and step-by-step
          plan to launch — even if you're starting from scratch, starting over,
          or starting with nothing but an idea.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/starter"
            className="w-full rounded-xl bg-teal-700 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-teal-900/40 transition hover:bg-teal-600 sm:w-auto"
          >
            Get My Free Blueprint →
          </Link>
          <Link
            to="/pricing"
            className="w-full rounded-xl border border-slate-700 px-8 py-4 text-base font-extrabold text-slate-300 transition hover:border-teal-700 hover:text-white sm:w-auto"
          >
            View Plans
          </Link>
        </div>

        <p className="mt-5 text-sm text-slate-500">
          No credit card required · Free blueprint in under 2 minutes
        </p>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Everything you need to launch — in one place.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            No MBA required. No expensive consultants. Just the tools and strategy
            to move from idea to income.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-teal-800"
            >
              <div className="mb-3 text-3xl">{f.icon}</div>
              <h3 className="text-lg font-extrabold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tier cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Pick your level. Start building.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Start free. Upgrade when you're ready. No pressure — just progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                t.highlight
                  ? "border-teal-600 bg-teal-950 shadow-xl shadow-teal-900/30"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {t.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-extrabold text-white">
                  {t.badge}
                </div>
              )}
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {t.name}
                </p>
                <p className="mt-1 text-3xl font-extrabold text-white">{t.price}</p>
                <p className="mt-2 text-sm text-slate-400">{t.description}</p>
              </div>

              <ul className="mb-6 flex-1 space-y-2">
                {t.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-0.5 text-teal-400">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                to={t.to}
                className={`block w-full rounded-xl py-3 text-center text-sm font-extrabold transition ${
                  t.highlight
                    ? "bg-teal-600 text-white hover:bg-teal-500"
                    : "border border-slate-700 text-slate-300 hover:border-teal-700 hover:text-white"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Story CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 px-8 py-14">
          <div className="mb-4 inline-flex rounded-full border border-amber-700 bg-amber-950 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400">
            Built By Someone Who Knows
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            PEN2PRO was built for people the system wrote off.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            After coming home from prison and having job offers rescinded because
            of background checks, Robert Green stopped waiting for permission
            and started building. PEN2PRO is the system he wished existed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/about"
              className="rounded-xl border border-slate-600 px-7 py-3 text-sm font-extrabold text-slate-300 transition hover:border-teal-700 hover:text-white"
            >
              Read the Story
            </Link>
            <Link
              to="/starter"
              className="rounded-xl bg-teal-700 px-7 py-3 text-sm font-extrabold text-white transition hover:bg-teal-600"
            >
              Start Building →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-800 text-xs font-bold text-white">
              P2P
            </div>
            <span className="font-bold text-slate-400">PEN2PRO RMIE</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/pricing" className="hover:text-teal-400">Pricing</Link>
            <Link to="/about" className="hover:text-teal-400">About</Link>
            <Link to="/founders" className="hover:text-teal-400">Founders</Link>
            <Link to="/login" className="hover:text-teal-400">Sign In</Link>
          </nav>
          <p>© {new Date().getFullYear()} PEN2PRO RMIE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
