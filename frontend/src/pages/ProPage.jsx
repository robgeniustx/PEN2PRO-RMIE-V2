import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Business Blueprint",
    body: "Complete AI-generated roadmap: business model, revenue strategy, outreach plan, branding direction, and 90-day execution steps — not a preview, the full plan built around your idea.",
  },
  {
    icon: "📊",
    title: "Full Progress Tracking",
    body: "Mark milestones, track your launch checklist, monitor revenue targets, and see exactly where you are and what's next on your path to income.",
  },
  {
    icon: "🎨",
    title: "Business Branding Support",
    body: "AI-generated brand name suggestions, logo direction, color palette guidance, tagline ideas, and social media handle recommendations tailored to your market.",
  },
  {
    icon: "📤",
    title: "Email & PDF Export",
    body: "Export your full roadmap, business plan, outreach scripts, and pitch summary as a PDF or send it directly to your inbox.",
  },
  {
    icon: "🤖",
    title: "AI Refinement Engine",
    body: "Refine your roadmap, regenerate sections, adjust strategy, and get updated AI guidance as your business grows and evolves.",
  },
  {
    icon: "📣",
    title: "Outreach Strategy",
    body: "Sales scripts, email templates, social media outreach plans, and customer acquisition strategy built specifically around your offer and target market.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness",
    body: "Know where you stand. Get a funding checklist, business bank setup guide, business entity steps, tradeline strategy, and lender preparation guidance.",
  },
  {
    icon: "⚙️",
    title: "P2P Command Center",
    body: "Manage contacts, leads, pipeline, tasks, calendar, and automations — all in one Command Center designed for small business operators.",
  },
];

const COMPARISON = [
  { feature: "Starter business blueprint preview", free: true, pro: true },
  { feature: "Full RMIE business blueprint", free: false, pro: true },
  { feature: "Progress tracking", free: "Limited", pro: "Full" },
  { feature: "Business branding support", free: false, pro: true },
  { feature: "Export to PDF / Email", free: false, pro: true },
  { feature: "AI refinement & regeneration", free: false, pro: true },
  { feature: "Outreach & sales scripts", free: false, pro: true },
  { feature: "Credit & funding readiness checklist", free: false, pro: true },
  { feature: "P2P Command Center access", free: false, pro: true },
  { feature: "Website Builder access", free: false, pro: true },
  { feature: "AI Voice Agent (basic)", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,156,255,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[40%] -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center relative">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(45,156,255,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#2d9cff] uppercase tracking-widest">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Your Full Roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #2d9cff, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Built to Execute.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Pro gives you the complete RMIE business blueprint — not a preview. Full roadmap, branding direction, export tools, AI refinement, credit readiness, and outreach strategy built around your specific idea.
          </p>
          <p className="mb-3 text-2xl font-black text-white">$249<span className="text-slate-400 text-base font-semibold">/month</span></p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #2d9cff 0%, #1E88E5 100%)" }}
            >
              Upgrade to Pro — $249/mo
            </Link>
            <Link to="/waitlist?tier=pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Pro Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Everything Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Pro Is the Full Execution Kit</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Eight connected tools — roadmap, branding, outreach, tracking, export, credit readiness, command center, and AI refinement — in one Pro plan.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#2d9cff]/50 transition-colors">
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
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Compare Tiers</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Free vs Pro</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-6 py-4 text-sm font-bold">
              <span className="text-slate-300">Feature</span>
              <span className="text-center text-slate-500">Free</span>
              <span className="text-center text-[#2d9cff]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 px-6 py-3.5 text-sm border-t border-[#1A2D50] ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">
                  {row.free === true ? <span className="text-slate-500">✓</span>
                    : row.free === false ? <span className="text-slate-700">—</span>
                    : <span className="text-slate-500 text-xs">{row.free}</span>}
                </span>
                <span className="text-center">
                  {row.pro === true ? <span className="text-[#2d9cff] font-bold">✓</span>
                    : <span className="text-[#2d9cff] text-xs font-semibold">{row.pro}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Stop Previewing. Start Executing.</h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            Free gives you a taste. Pro gives you the full plan — the roadmap, the branding, the scripts, the tracking, and the tools to turn your idea into income.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #2d9cff 0%, #1E88E5 100%)" }}>
              Upgrade to Pro
            </Link>
            <Link to="/waitlist?tier=pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
