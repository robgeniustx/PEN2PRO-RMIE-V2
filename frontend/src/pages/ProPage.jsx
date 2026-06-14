import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Unlimited Business Roadmaps", desc: "Generate as many roadmaps as you need for any idea, market, or business model — all saved to your dashboard with no limits." },
  { icon: "📊", title: "Full 90-Day Execution Plan", desc: "Week-by-week action plans tuned to your specific business, market, and budget. Not generic advice — built for your exact situation." },
  { icon: "📝", title: "Sales Scripts & Outreach Strategy", desc: "Cold DMs, email templates, follow-up sequences, and call scripts written for your specific offer and target market." },
  { icon: "💳", title: "Credit Readiness Checklist", desc: "Know exactly what your credit profile needs before applying for a dollar of funding. No wasted applications, no surprises." },
  { icon: "📤", title: "PDF & Email Export", desc: "Export your full roadmap to PDF or email. Share it with partners, investors, or use it as a real business presentation." },
  { icon: "🤖", title: "AI Business Refinement", desc: "Refine your roadmap multiple times with AI feedback. Sharpen your offer, pricing, and outreach strategy as you grow." },
  { icon: "📈", title: "Full Progress Tracking", desc: "Track every task and milestone from idea to launch. See exactly where you are in the process at all times." },
  { icon: "🏢", title: "Business Branding Support", desc: "Brand name ideas, social handle suggestions, logo direction, and color palette — your entire identity built from scratch." },
];

const COMPARISON = [
  { label: "Business Roadmaps", free: "1 blueprint", pro: "Unlimited" },
  { label: "90-Day Plan", free: "Preview only", pro: "Full plan" },
  { label: "Sales Scripts", free: "Basic sample", pro: "Custom scripts for your offer" },
  { label: "Credit Readiness", free: "Checklist only", pro: "Full step-by-step guide" },
  { label: "Progress Tracking", free: "Limited", pro: "Complete milestone tracking" },
  { label: "PDF Export", free: "—", pro: "✓" },
  { label: "AI Refinement", free: "—", pro: "✓ Unlimited" },
  { label: "Branding Support", free: "—", pro: "✓" },
  { label: "Outreach Strategy", free: "—", pro: "✓" },
];

const WHO_FOR = [
  { icon: "💡", label: "Entrepreneurs ready to launch" },
  { icon: "🎖️", label: "Veterans starting a business" },
  { icon: "🔄", label: "Returning citizens building forward" },
  { icon: "👷", label: "Working-class builders going all in" },
  { icon: "📱", label: "Creators turning skills into income" },
  { icon: "🏪", label: "Side hustlers ready to go full time" },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.08)", color: "#D4A017" }}
          >
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Full Roadmap.<br />
            <span className="gradient-text">Full Execution.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you everything you need to go from idea to paying clients — unlimited roadmaps,
            sales scripts, credit readiness tools, AI refinement, and full progress tracking.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Join Pro Waitlist →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              View All Plans
            </Link>
          </div>
          <div className="mt-8 flex items-baseline justify-center gap-2">
            <span className="font-display text-4xl font-black text-white">$249</span>
            <span className="text-slate-500 text-lg">/month</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Cancel anytime · No long-term contract required</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">What's Included in Pro</p>
            <h2 className="font-display text-4xl font-black text-white">Everything a serious builder needs</h2>
            <p className="mt-3 text-slate-500">Not a template. Not generic advice. A real execution engine for your specific idea.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 transition-all hover:border-yellow-500/30 hover:bg-[#0F1520]"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Free vs Pro</p>
            <h2 className="font-display text-4xl font-black text-white">Why upgrading changes everything</h2>
            <p className="mt-3 text-slate-500">The free roadmap gets you started. Pro gets you to revenue.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 border-b border-[#1A2235] bg-[#0F1520] px-6 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">Free</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0F1520]"}`}
              >
                <span className="font-semibold text-slate-300">{row.label}</span>
                <span className="text-center text-slate-600">{row.free}</span>
                <span className="text-center font-bold text-teal-400">{row.pro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Who Pro Is For</p>
            <h2 className="font-display text-4xl font-black text-white">Built for builders who are serious about execution</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {WHO_FOR.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#080C14] p-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm font-semibold text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER YOU UPGRADE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Your Pro Experience</p>
            <h2 className="font-display text-4xl font-black text-white">What happens the moment you upgrade</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { n: "01", t: "Unlock Full Dashboard", d: "Your dashboard expands immediately. Roadmaps, tracking, exports, and AI tools are all live." },
              { n: "02", t: "Generate Deep Roadmaps", d: "Submit any business idea. Receive a full 90-day plan, sales scripts, credit checklist, and outreach strategy." },
              { n: "03", t: "Execute and Refine", d: "Work through your checklist, track your progress, and refine your plan as you grow. Pro stays with you every step." },
            ].map((item) => (
              <div key={item.n} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <div className="mb-4 font-display text-5xl font-black leading-none" style={{ color: "rgba(212,160,23,0.2)" }}>{item.n}</div>
                <h3 className="mb-2 text-base font-bold text-white">{item.t}</h3>
                <p className="text-sm leading-6 text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Ready to commit?</p>
          <h2 className="font-display text-4xl font-black text-white md:text-5xl">
            Your roadmap is waiting.<br />
            <span className="gradient-text">Go Pro and build it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Join the Pro waitlist and lock in your founding rate. Pricing increases after official launch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold">
              Join Pro Waitlist →
            </Link>
            <Link to="/elite" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-teal-400 hover:text-teal-400">
              Explore Elite Instead
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm text-slate-600">
            <span>$249/month</span>
            <span>·</span>
            <span>Cancel anytime</span>
            <span>·</span>
            <span>No contract</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
