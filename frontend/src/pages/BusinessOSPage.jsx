import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  {
    icon: "⚡",
    name: "PEN2PRO RMIE",
    tagline: "Build the Business",
    desc: "AI-powered Rapid Monetization Intelligence Engine. Turns your idea into a roadmap, business plan, launch strategy, and revenue model.",
    link: "/rmie",
    cta: "Explore RMIE",
    color: "#1E88E5",
  },
  {
    icon: "🖥️",
    name: "P2P Command Center",
    tagline: "Run the Business",
    desc: "Your CRM, sales pipeline, invoices, calendar, reputation, automations, and multi-channel messaging — all in one hub.",
    link: "/command-center",
    cta: "Explore Command Center",
    color: "#FF8A00",
  },
  {
    icon: "🎙️",
    name: "P2P AI Voice Agent",
    tagline: "Automate the Business",
    desc: "AI answers your calls, captures leads, books appointments, sends follow-ups, and syncs everything to your Command Center.",
    link: "/voice-agent",
    cta: "Explore Voice Agent",
    color: "#7C3AED",
  },
  {
    icon: "🌐",
    name: "PEN2PRO Website Builder",
    tagline: "Publish the Business",
    desc: "Build AI-generated websites, landing pages, funnels, blogs, and service pages — connected directly to your CRM.",
    link: "/website-builder",
    cta: "Explore Website Builder",
    color: "#059669",
  },
  {
    icon: "🔍",
    name: "PEN2PRO Domain Finder",
    tagline: "Name the Business",
    desc: "Search for available domain names that match your brand, niche, and growth plan. Secure the perfect name in minutes.",
    link: "/domain-search",
    cta: "Find Your Domain",
    color: "#D4A017",
  },
];

const STATS = [
  { value: "5", label: "Integrated Platforms" },
  { value: "28+", label: "Supported Industries" },
  { value: "1", label: "Unified Login" },
  { value: "∞", label: "Possibilities" },
];

export default function BusinessOSPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ PEN2PRO BusinessOS
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-7xl">
            Build. Run. Automate.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-400 leading-relaxed">
            PEN2PRO BusinessOS is the all-in-one platform that takes you from idea to income — and from income to a fully automated, growing business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-t border-b border-[#1A2D50] px-5 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-black" style={{ color: "#FF8A00" }}>{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">The Platform</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-5xl">
            Five Tools. One Ecosystem.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            Every module is built to work together — your roadmap feeds your CRM, your Voice Agent updates your pipeline, and your website connects to your inbox.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <div key={m.name} className="group flex flex-col rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7 transition-all hover:border-opacity-60"
                style={{ "--hover-color": m.color }}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                  style={{ background: `${m.color}22`, border: `1px solid ${m.color}44` }}>
                  {m.icon}
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: m.color }}>
                  {m.tagline}
                </p>
                <h3 className="mb-3 font-display text-xl font-black text-white">{m.name}</h3>
                <p className="mb-6 flex-1 text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                <Link
                  to={m.link}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
                  style={{ color: m.color }}
                >
                  {m.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGLINE BANNER ── */}
      <section className="border-t border-[#1A2D50] px-5 py-20 text-center"
        style={{ background: "linear-gradient(135deg, #0D1B35 0%, #0A0F1E 100%)" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-display text-3xl font-black md:text-5xl">
            Stop waiting for permission.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start building your business.
            </span>
          </h2>
          <Link to="/starter" className="inline-block rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
            Launch Your Free Roadmap
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
