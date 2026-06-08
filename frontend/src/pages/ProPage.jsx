import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete roadmap — business model, offer structure, revenue strategy, 7/30/90-day plans, and next best actions tailored to your idea." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track milestones, completed steps, and revenue goals. See exactly where you are and what to do next." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, positioning direction, tagline suggestions, and visual identity guidance." },
  { icon: "📤", title: "Email & PDF Export", body: "Export your full roadmap as a PDF or send it to your inbox. Professional format, ready to share with partners or lenders." },
  { icon: "🤖", title: "AI Refinement Engine", body: "Refine your roadmap with follow-up prompts. Get deeper analysis, alternative strategies, and sharper execution plans." },
  { icon: "📣", title: "Outreach Strategy", body: "Prospect targeting, message scripts, outreach cadence, and a 20-touch plan to land your first customers." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know your fundability score, what lenders want to see, and exact steps to get credit and funding ready." },
  { icon: "🏗️", title: "Startup Foundation Checklist", body: "LLC formation, EIN, business bank account, payment processing, and business registration steps." },
];

const COMPARED = [
  { label: "Starter Business Blueprint", free: true, pro: true },
  { label: "Full RMIE Roadmap (7/30/90-day)", free: false, pro: true },
  { label: "Progress Tracking", free: "Limited", pro: true },
  { label: "Branding Direction", free: false, pro: true },
  { label: "Email & PDF Export", free: false, pro: true },
  { label: "AI Roadmap Refinement", free: false, pro: true },
  { label: "Outreach Strategy + Scripts", free: false, pro: true },
  { label: "Credit & Funding Checklist", free: false, pro: true },
  { label: "Startup Foundation Checklist", free: false, pro: true },
  { label: "Sales Script Generator", free: false, pro: true },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.22) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.25) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
  </div>
);

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            The Full Roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Strategy. Real Execution.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you everything you need to move from idea to income — a complete business roadmap, branding direction, outreach strategy, credit readiness, and AI-powered refinement.
          </p>
          <div className="mb-6 inline-flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">$249</span>
            <span className="text-slate-400">/month</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro gives you a real execution system — not just a plan, but the strategy, scripts, checklists, and tools to move.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Plan Comparison</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Free vs Pro</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#FF8A00]">Pro</span>
            </div>
            {COMPARED.map((row, i) => (
              <div key={row.label}
                className={`grid grid-cols-3 px-6 py-4 border-t border-[#1A2D50] ${i % 2 === 0 ? "bg-[#0A0F1E]" : "bg-[#0F1520]"}`}>
                <span className="text-sm text-slate-300">{row.label}</span>
                <span className="text-center text-sm">
                  {row.free === true ? <span className="text-emerald-400">✓</span>
                    : row.free === false ? <span className="text-slate-600">—</span>
                    : <span className="text-slate-400">{row.free}</span>}
                </span>
                <span className="text-center text-sm">
                  {row.pro === true ? <span className="text-[#FF8A00] font-bold">✓</span>
                    : <span className="text-slate-600">—</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPGRADE NUDGE ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-10 text-center">
          <div className="mb-3 text-4xl">🚀</div>
          <h3 className="mb-3 font-display text-2xl font-black">Want Even More?</h3>
          <p className="mb-6 text-slate-400">
            Elite adds advanced strategist guidance, financial projections, vendor integrations, legal foundation, and done-with-you support. Founders Circle gives you lifetime access for one flat price.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/elite" className="rounded-xl border border-[#1E88E5] px-7 py-3 text-sm font-bold text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white transition-all">
              Explore Elite
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#FF8A00] px-7 py-3 text-sm font-bold text-[#FF8A00] hover:bg-[#FF8A00] hover:text-[#0A0F1E] transition-all">
              Become a Legacy Founder
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Go Pro?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the waitlist and be among the first to access Pro when it launches.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Try Free First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
