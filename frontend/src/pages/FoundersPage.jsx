import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_BENEFITS = [
  {
    icon: "♾️",
    title: "Lifetime PEN2PRO Access",
    body: "One payment. Never pay again. As PEN2PRO grows — new features, new tools, new modules — Legacy Founders get them all included.",
  },
  {
    icon: "🧠",
    title: "Everything in Elite",
    body: "Full RMIE strategy engine, financial projections, done-with-you guidance, funding resources, advanced CRM, and every Pro feature — included.",
  },
  {
    icon: "🖥️",
    title: "P2P Command Center",
    body: "The central operating system for your business — leads, tasks, automations, outreach, and full pipeline management.",
  },
  {
    icon: "🎙️",
    title: "P2P AI Voice Agent",
    body: "Full AI voice capabilities — inbound call handling, lead qualification, appointment booking, and intelligent routing for your business.",
  },
  {
    icon: "🌐",
    title: "Website Builder Included",
    body: "Build and launch a professional business website directly inside PEN2PRO — no third-party subscription required.",
  },
  {
    icon: "📈",
    title: "12-Month 10M Strategist Framework",
    body: "A structured, month-by-month revenue and growth framework built around scaling toward your first major milestone.",
  },
  {
    icon: "🏅",
    title: "Founder Recognition",
    body: "Permanent Legacy Founder badge on your account. You were here before the world knew. That matters — and it will be recognized.",
  },
  {
    icon: "🚀",
    title: "Early Access to New Features",
    body: "Founders get first access to every new module, integration, and feature before general release — always.",
  },
  {
    icon: "⚡",
    title: "Priority Support — Forever",
    body: "Your questions and issues go to the front of the line, now and permanently. Not just during onboarding.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Full RMIE Blueprint", founders: true, elite: true, pro: true, free: false },
  { feature: "P2P Command Center", founders: true, elite: true, pro: true, free: false },
  { feature: "Advanced RMIE Strategy Engine", founders: true, elite: true, pro: false, free: false },
  { feature: "Financial Projections", founders: true, elite: true, pro: false, free: false },
  { feature: "Website Builder", founders: true, elite: true, pro: true, free: false },
  { feature: "AI Voice Agent (Full)", founders: true, elite: "Basic", pro: "Basic", free: false },
  { feature: "12-Month 10M Framework", founders: true, elite: false, pro: false, free: false },
  { feature: "Founder Recognition Badge", founders: true, elite: false, pro: false, free: false },
  { feature: "Early Access to Features", founders: true, elite: false, pro: false, free: false },
  { feature: "Priority Support", founders: "Forever", elite: true, pro: false, free: false },
  { feature: "Monthly Fee", founders: "$0 forever", elite: "$499/mo", pro: "$249/mo", free: "$0" },
];

function Check({ value }) {
  if (value === true) return <span className="font-bold" style={{ color: "#D4A017" }}>Included</span>;
  if (value === false) return <span className="text-slate-600">No</span>;
  return <span className="text-sm font-semibold text-slate-300">{value}</span>;
}

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* ── Background orbs ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-32 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.22) 0%, transparent 60%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-[40%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.20) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-28 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.15) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-3xl">
          {/* Scarcity badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-black uppercase tracking-widest"
            style={{ borderColor: "#D4A017", color: "#D4A017", background: "rgba(212,160,23,0.10)" }}
          >
            Only 200 Spots Available — Lifetime Access
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Founders Lifetime —{" "}
            <span
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Build Your Legacy
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Get lifetime access to the full PEN2PRO platform before prices go up permanently. One payment.
            Every feature. Every upgrade. Every new tool released — forever. This offer closes when 200 spots are filled.
          </p>

          {/* Price block */}
          <div
            className="mx-auto mb-8 max-w-xs rounded-2xl border p-6"
            style={{
              borderColor: "rgba(212,160,23,0.35)",
              background: "rgba(212,160,23,0.06)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">One-Time Investment</p>
            <p className="text-5xl font-black text-white">$1,899</p>
            <p className="mt-1 text-sm text-slate-400">vs. $499/mo Elite — paid once, owned forever</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
            >
              Claim Your Founders Spot
            </Link>
            <a
              href="#benefits"
              className="rounded-xl border border-[#1A2D50] px-10 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── SCARCITY BAR ── */}
      <section className="px-5 py-8 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-slate-400">
            Legacy Founders program availability
          </p>
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#0F1520] border border-[#1A2D50]">
            <div
              className="absolute left-0 top-0 h-full w-[22%] rounded-full"
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span style={{ color: "#D4A017" }} className="font-bold">44 spots claimed</span>
            <span>200 total spots</span>
          </div>
          <p className="mt-2 text-xs text-slate-600">Spot counter is illustrative — join the waitlist to secure your place.</p>
        </div>
      </section>

      {/* ── BENEFITS LIST ── */}
      <section id="benefits" className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            What Founders Get
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Complete Platform. For Life.
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            Legacy Founders do not pay monthly. They own their access permanently — every feature, every
            tool, every upgrade included from day one and every day after.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDERS_BENEFITS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 transition"
                style={{
                  border: "1px solid rgba(212,160,23,0.22)",
                  background: "linear-gradient(135deg, rgba(212,160,23,0.04) 0%, #0F1520 100%)",
                }}
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN COMPARISON TABLE ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            Plan Comparison
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Founders vs Every Other Tier
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            See exactly what you get at Founders level compared to Elite, Pro, and Free.
          </p>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            {/* Header */}
            <div className="grid grid-cols-5 bg-[#0F1520] border-b border-[#1A2D50] px-4 py-3 gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</span>
              <span
                className="text-center text-xs font-black uppercase tracking-widest"
                style={{ color: "#D4A017" }}
              >
                Founders
              </span>
              <span className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">Elite</span>
              <span className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">Pro</span>
              <span className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">Free</span>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-5 items-center gap-2 px-4 py-4 border-b border-[#1A2D50] ${
                  i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"
                }`}
              >
                <span className="text-sm text-slate-300 font-medium">{row.feature}</span>
                <span className="text-center text-sm"><Check value={row.founders} /></span>
                <span className="text-center text-sm"><Check value={row.elite} /></span>
                <span className="text-center text-sm"><Check value={row.pro} /></span>
                <span className="text-center text-sm"><Check value={row.free} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Why Legacy Founders Exists
          </div>
          <div className="space-y-5 text-[1.05rem] leading-[1.85] text-slate-300">
            <p>
              Robert built PEN2PRO from the ground up — not from a venture fund, not from a perfect background,
              and not from a safe starting point. He built it from lived experience, pressure, and the refusal to accept
              that closed doors meant permanent walls.
            </p>
            <p>
              The Legacy Founders program exists for people who believe in that mission — who see what PEN2PRO
              is building and want in before the price reflects where this platform is going.
            </p>
            <p className="font-semibold text-white border-l-4 border-[#D4A017] pl-5">
              This is not just a lifetime deal. This is an early stake in something being built for people like you,
              by someone who came from where you may be standing right now.
            </p>
            <p>
              Two hundred spots. One price. Permanent access. When spot two hundred is claimed, this offer closes —
              and the monthly pricing becomes the only option.
            </p>
          </div>

          {/* Founder Badge */}
          <div className="mt-10 flex items-center gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
            >
              R
            </div>
            <div>
              <p className="font-black text-white text-lg">Robert Earl Green Jr.</p>
              <p className="text-sm text-slate-400 mt-0.5">
                Service-Connected Veteran · Entrepreneur · Author · Mentor
              </p>
              <p className="text-sm font-semibold mt-0.5" style={{ color: "#D4A017" }}>
                Founder — PEN2PRO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div
          className="mx-auto max-w-2xl rounded-2xl p-12 text-center"
          style={{
            border: "1px solid rgba(212,160,23,0.30)",
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%), #0F1520",
          }}
        >
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest"
            style={{ background: "rgba(212,160,23,0.10)", border: "1px solid rgba(212,160,23,0.30)", color: "#D4A017" }}
          >
            200 Spots — Closing Soon
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Legacy Starts With One Decision
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            $1,899 one time. Lifetime access. Everything in Elite. Everything we build after. Lock in your
            founder spot before this closes and the monthly rate becomes the only option.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
            >
              Claim Your Founders Spot — $1,899
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Not ready for Founders?{" "}
            <Link to="/elite" className="font-semibold hover:text-white transition" style={{ color: "#1E88E5" }}>
              Explore Elite at $499/mo
            </Link>
            {" "}or{" "}
            <Link to="/starter" className="font-semibold hover:text-white transition" style={{ color: "#1E88E5" }}>
              start free
            </Link>
            {" "}— no credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
