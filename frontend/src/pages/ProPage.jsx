import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Blueprint",
    body: "Complete business roadmap — startup costs, revenue model, pricing, offer structure, 7-day plan, 30-day launch, 90-day growth.",
  },
  {
    icon: "🖥️",
    title: "P2P Command Center",
    body: "Your central hub for managing leads, tasks, automations, outreach, and business activity all in one dashboard.",
  },
  {
    icon: "👥",
    title: "CRM Basics",
    body: "Track your leads, manage follow-ups, build your pipeline, and never let a prospect fall through the cracks.",
  },
  {
    icon: "🌐",
    title: "Website Builder Access",
    body: "Launch a professional business presence without hiring a developer. Your site, your brand, live fast.",
  },
  {
    icon: "🎙️",
    title: "AI Voice Agent (Basic)",
    body: "An AI-powered voice agent that can handle inbound inquiries, answer questions, and route leads while you work.",
  },
  {
    icon: "📣",
    title: "Marketing Roadmap",
    body: "Step-by-step marketing plan customized to your business, budget, and audience — not generic tactics.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    body: "Visual milestone tracker so you always know what's done, what's next, and how close you are to your first dollar.",
  },
  {
    icon: "📧",
    title: "Email & PDF Export",
    body: "Download or email your full business roadmap in a clean PDF format — shareable with partners, lenders, or investors.",
  },
  {
    icon: "💳",
    title: "Credit Readiness Checklist",
    body: "Know exactly where you stand before applying for funding. Step-by-step credit readiness guide built into your roadmap.",
  },
  {
    icon: "📅",
    title: "90-Day Execution Plan",
    body: "A structured 30/60/90-day action plan with specific daily and weekly moves — not vague advice, real steps.",
  },
  {
    icon: "📬",
    title: "Outreach Strategy",
    body: "Exactly who to contact, how to contact them, and what to say — with templates and timing built in.",
  },
  {
    icon: "📝",
    title: "Sales Scripts",
    body: "Word-for-word scripts for cold outreach, follow-up, closing, and objection handling specific to your business type.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Business blueprint", free: "Basic preview only", pro: "Full RMIE blueprint" },
  { feature: "Roadmap depth", free: "7-day overview", pro: "7 / 30 / 90-day full plan" },
  { feature: "Progress tracking", free: "Limited", pro: "Full milestone tracker" },
  { feature: "P2P Command Center", free: "No", pro: "Full access" },
  { feature: "CRM & pipeline", free: "No", pro: "Included" },
  { feature: "Website Builder", free: "No", pro: "Included" },
  { feature: "AI Voice Agent", free: "No", pro: "Basic tier" },
  { feature: "Sales scripts", free: "No", pro: "Included" },
  { feature: "Outreach strategy", free: "No", pro: "Included" },
  { feature: "Credit readiness checklist", free: "No", pro: "Included" },
  { feature: "Email / PDF export", free: "No", pro: "Included" },
  { feature: "Marketing roadmap", free: "Generic tips", pro: "Custom to your business" },
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* ── Background orbs ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-[35%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.16) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.22) 0%, transparent 65%)", filter: "blur(50px)" }}
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
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.13) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-2 text-xs font-black uppercase tracking-widest"
            style={{ color: "#FF8A00" }}>
            ⚡ Most Popular Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            PEN2PRO Pro —{" "}
            <span
              style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Your Full Execution Engine
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Stop guessing. Stop starting over. Pro gives you the complete RMIE blueprint, sales tools,
            outreach strategy, CRM, and 90-day execution plan to go from idea to income — fast.
          </p>
          <p className="mb-10 text-3xl font-black text-white">
            $249<span className="text-lg font-normal text-slate-500">/month</span>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Upgrade to Pro
            </Link>
            <Link
              to="/starter"
              className="rounded-xl border border-[#1A2D50] px-10 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            What Pro Includes
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Every Tool You Need to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            Pro gives you the full RMIE system — blueprints, scripts, CRM, website builder, AI voice,
            and a 90-day execution plan built around your specific business.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#1E88E5]/50"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            Free vs Pro
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            See the Difference
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Free gives you a starting point. Pro gives you everything you need to actually execute.
          </p>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#0F1520] border-b border-[#1A2D50] px-5 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Free</span>
              <span className="text-center text-xs font-black uppercase tracking-widest" style={{ color: "#FF8A00" }}>
                Pro
              </span>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 items-center gap-2 px-5 py-4 border-b border-[#1A2D50] ${
                  i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"
                }`}
              >
                <span className="text-sm text-slate-300 font-medium">{row.feature}</span>
                <span className="text-center text-sm text-slate-500">{row.free}</span>
                <span className="text-center text-sm font-semibold" style={{ color: "#FF8A00" }}>
                  {row.pro}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div
          className="mx-auto max-w-2xl rounded-2xl border border-[#1A2D50] p-12 text-center"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,136,229,0.10) 0%, transparent 70%), #0F1520" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#080C14] px-4 py-1.5 text-xs font-black uppercase tracking-widest"
            style={{ color: "#FF8A00" }}>
            Ready to Go Pro?
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Planning. Start Building.
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Pro members get the full RMIE execution engine — blueprints, CRM, scripts, website builder,
            AI voice, and credit readiness — all for $249/month. Lock in before launch pricing ends.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E] btn-gold">
              Upgrade to Pro — $249/mo
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Not ready for Pro?{" "}
            <Link to="/starter" className="font-semibold hover:text-white transition" style={{ color: "#1E88E5" }}>
              Start with the free roadmap
            </Link>{" "}
            — no credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
