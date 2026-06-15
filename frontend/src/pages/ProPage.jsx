import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete roadmap with 90-day action plan, revenue model, pricing strategy, and launch sequence tailored to your idea." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track milestones, action items, and blueprint completion across every business concept you build." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, color direction, logo guidance, and social media handle strategy for your niche." },
  { icon: "📤", title: "Email & PDF Export", body: "Export your full roadmap as a professional PDF or send it directly to your email for sharing and printing." },
  { icon: "🤖", title: "AI Refinement Engine", body: "Refine your roadmap, rewrite your offer, sharpen your pitch — with AI trained on real business execution models." },
  { icon: "📣", title: "Outreach Strategy", body: "Sales scripts, cold outreach templates, and a 20-prospect-per-day contact plan to validate demand fast." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly where you stand for business credit, personal credit, and lender readiness before you apply for anything." },
  { icon: "🏢", title: "P2P Command Center Access", body: "CRM, pipeline, calendar, invoices, and website builder — all in one place for your business operations." },
];

const WHAT_YOU_UNLOCK = [
  "Full RMIE business roadmap",
  "Revenue model selection",
  "Pricing strategy",
  "7-day, 30-day, 90-day plans",
  "Outreach scripts",
  "Brand name generator",
  "LLC & EIN checklist",
  "Business bank checklist",
  "Credit readiness checklist",
  "Funding readiness overview",
  "AI refinement (unlimited)",
  "PDF & email export",
  "Command Center CRM",
  "Website Builder access",
  "P2P AI Voice (Basic)",
  "Marketing roadmap",
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.14) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.2) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-5xl">
            From Idea to Income.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #D4A017, #FF8A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full Strategy. Full Execution.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete RMIE roadmap, Command Center business tools, credit readiness checklist, branding support, and AI refinement — everything you need to actually launch and grow.
          </p>
          <div className="mb-6 inline-block rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/10 px-8 py-5">
            <p className="text-5xl font-black text-[#D4A017]">
              $249<span className="text-2xl font-semibold text-slate-400">/mo</span>
            </p>
            <p className="text-sm text-slate-500 mt-1.5">Cancel anytime. No contracts.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mt-4">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Join Waitlist — Pro
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            What's Included
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch and Grow
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Pro isn't motivation. It's infrastructure — the tools, strategy, and AI output to move from idea to income.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6"
              >
                <div className="mt-1 shrink-0 text-2xl">{f.icon}</div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU UNLOCK ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            Complete Access List
          </div>
          <h2 className="mb-12 font-display text-3xl font-black md:text-4xl">
            Everything You Unlock With Pro
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {WHAT_YOU_UNLOCK.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-3 py-3 text-left"
              >
                <span className="text-[#D4A017] shrink-0">✓</span>
                <span className="text-xs font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VS FREE COMPARISON ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            Free vs Pro
          </div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            Why Pro Is Worth It
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            {[
              { feature: "Business Blueprint", free: "Basic preview", pro: "Full roadmap" },
              { feature: "AI Refinement", free: "None", pro: "Unlimited" },
              { feature: "Outreach Scripts", free: "None", pro: "Included" },
              { feature: "Credit Checklist", free: "None", pro: "Full checklist" },
              { feature: "Export (PDF/Email)", free: "None", pro: "Included" },
              { feature: "Command Center CRM", free: "None", pro: "Full access" },
              { feature: "Branding Support", free: "None", pro: "Included" },
              { feature: "Progress Tracking", free: "Limited", pro: "Full tracking" },
            ].map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm ${
                  i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]"
                }`}
              >
                <span className="font-medium text-slate-300">{row.feature}</span>
                <span className="text-center text-slate-500">{row.free}</span>
                <span className="text-center font-semibold text-[#D4A017]">{row.pro}</span>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#0A0F1E] text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free Forever</span>
              <span className="text-center text-[#D4A017]">Pro $249/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Level Up?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist and get early access when we launch. Free roadmap still available anytime.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Join Pro Waitlist
            </Link>
            <Link
              to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Start Free First
            </Link>
            <Link
              to="/elite"
              className="rounded-xl border border-[#7C3AED]/30 px-8 py-3.5 text-sm font-semibold text-[#7C3AED] hover:text-white transition-colors"
            >
              See Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
