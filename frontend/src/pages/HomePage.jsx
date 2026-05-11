import { Link } from "react-router-dom";

const tracks = [
  {
    name: "Builder",
    tag: "Start Here",
    desc: "Turn your idea into a structured business blueprint, brand, and launch plan — step by step.",
    href: "/builder",
    color: "cyan",
    border: "border-cyan-500/30",
    tagBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    cta: "Explore Builder →",
  },
  {
    name: "Accelerator",
    tag: "Scale Up",
    desc: "Go from idea to revenue with outreach strategy, ad blueprints, CRM, and automation.",
    href: "/accelerator",
    color: "violet",
    border: "border-violet-500/30",
    tagBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    cta: "Explore Accelerator →",
  },
  {
    name: "Legacy Founder",
    tag: "Lifetime",
    desc: "Own the platform forever. One payment. Every feature. Every future module.",
    href: "/founders",
    color: "amber",
    border: "border-amber-500/30",
    tagBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    cta: "View Founders Access →",
  },
];

const socialProof = [
  "Built by a second-chance entrepreneur",
  "Designed for working-class builders",
  "No background check required",
  "No business degree needed",
];

const steps = [
  { num: "01", title: "Describe Your Idea", desc: "Tell PEN2PRO your business concept in plain language." },
  { num: "02", title: "Get Your Blueprint", desc: "Receive a personalized business blueprint with action steps." },
  { num: "03", title: "Follow the Roadmap", desc: "Execute your 30/60/90-day plan with AI guidance at every step." },
  { num: "04", title: "Build & Earn", desc: "Launch, grow, and turn your idea into real income." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
            Real Money. Income. Entrepreneurship.
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Turn Your Idea Into
            <br />
            <span className="text-cyan-400">Income.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            PEN2PRO RMIE is the AI-powered business platform for people who have been counted out —
            but refuse to stay down. No degree. No connections. No background check.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 text-base tracking-wide transition-colors shadow-lg shadow-cyan-900/30"
            >
              Get My Free Blueprint →
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold px-8 py-4 text-base transition-colors"
            >
              View Plans
            </Link>
          </div>

          {/* Social proof pills */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {socialProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-xs text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Pick Your Track
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Whether you're starting from scratch or ready to scale, PEN2PRO has a path for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div
                key={track.name}
                className={`group bg-slate-900 border ${track.border} rounded-2xl p-6 flex flex-col hover:bg-slate-800/60 transition-colors`}
              >
                <span className={`self-start rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-4 ${track.tagBg}`}>
                  {track.tag}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">{track.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">{track.desc}</p>
                <Link
                  to={track.href}
                  className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {track.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 border-t border-slate-900">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">How It Works</h2>
            <p className="text-slate-400">Four steps from idea to income.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-3xl font-extrabold text-cyan-400/30 mb-3">{step.num}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-cyan-500/10 rounded-2xl p-10 text-center">
          <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-6">
            "I came home from prison and got job offers rescinded after background checks.
            So I stopped asking for a seat at the table — and built my own."
          </blockquote>
          <p className="text-slate-400 text-sm">
            — <span className="text-white font-semibold">Robert Green</span>, Founder of PEN2PRO RMIE
          </p>
          <Link
            to="/about"
            className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 text-sm font-semibold underline underline-offset-4 transition-colors"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-6 border-t border-slate-900 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Start Free. Upgrade When Ready.
          </h2>
          <p className="text-slate-400 mb-8">
            Your first business blueprint is free — no credit card required. Upgrade to Pro, Elite,
            or Founders when you're ready to go all in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 text-sm tracking-wide transition-colors"
            >
              Start Free →
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold px-8 py-3 text-sm transition-colors"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
