import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Business Blueprint",
    body: "Complete roadmap: target customer, problem statement, offer structure, revenue model, pricing strategy, 7-day action plan, 30-day launch plan, and 90-day growth plan.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    body: "Track milestones, action items, and launch steps. See exactly where you are and what to do next — every session.",
  },
  {
    icon: "🎨",
    title: "Business Branding Support",
    body: "Brand name direction, logo concept guidance, tone of voice, color palette suggestions, and brand identity strategy.",
  },
  {
    icon: "📤",
    title: "Email & PDF Export",
    body: "Download your full roadmap as a PDF or send it to your email so you always have your blueprint accessible.",
  },
  {
    icon: "🤖",
    title: "AI Refinement",
    body: "Refine your roadmap using AI. Adjust your niche, target market, pricing, or offer — the engine re-generates a sharper plan each time.",
  },
  {
    icon: "📣",
    title: "Outreach Strategy",
    body: "Prospect targeting strategy, outreach scripts, messaging templates, and a 7-day sales action plan.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness",
    body: "Know if you're fundable before you apply. Get a step-by-step credit checklist, business bank setup guide, and funding readiness score.",
  },
  {
    icon: "🏗️",
    title: "Business Foundation Checklist",
    body: "LLC formation, EIN registration, business bank account, and initial accounting setup — all in one actionable checklist.",
  },
];

const COMPARE = [
  { feature: "Starter Business Blueprint",    free: true,  pro: true  },
  { feature: "Full RMIE Roadmap",             free: false, pro: true  },
  { feature: "7 / 30 / 90-Day Action Plans",  free: false, pro: true  },
  { feature: "Progress Tracking",             free: "limited", pro: true },
  { feature: "Business Branding Support",     free: false, pro: true  },
  { feature: "Email & PDF Export",            free: false, pro: true  },
  { feature: "AI Refinement",                 free: false, pro: true  },
  { feature: "Outreach Strategy",             free: false, pro: true  },
  { feature: "Credit & Funding Readiness",    free: false, pro: true  },
  { feature: "Business Foundation Checklist", free: false, pro: true  },
  { feature: "Sales Script",                  free: "basic", pro: true },
  { feature: "Marketing Plan",                free: false, pro: true  },
];

function CheckIcon({ value }) {
  if (value === true) return <span className="text-green-400 text-lg">✓</span>;
  if (value === false) return <span className="text-slate-600 text-lg">—</span>;
  return <span className="text-[#D4A017] text-xs font-semibold">{value}</span>;
}

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.20) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            ⚡ PEN2PRO Pro — $249/mo
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Unlock Your Full
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Business Roadmap
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete RMIE experience — full blueprint, progress tracking, branding support, export, AI refinement, outreach strategy, and funding readiness tools.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Join Pro Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-sm">
          <div className="rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-8 text-center"
            style={{ boxShadow: "0 0 40px rgba(212,160,23,0.12)" }}>
            <div className="mb-2 text-5xl font-black text-white">$249</div>
            <div className="mb-1 text-slate-400 text-sm">per month</div>
            <div className="mb-6 text-xs text-slate-500">Cancel anytime. No contracts.</div>
            <Link to="/waitlist?tier=pro"
              className="block w-full rounded-xl py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Join Pro Waitlist
            </Link>
            <p className="mt-3 text-xs text-slate-500">Subscriptions opening soon. Join the waitlist to get notified.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Pro Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch and Grow
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro gives you a complete, AI-powered business roadmap — not generic advice, but a specific execution plan built around your idea, market, and goals.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Free vs Pro</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">See the Difference</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A2D50] bg-[#0F1520]">
                  <th className="px-5 py-4 text-left font-semibold text-slate-400">Feature</th>
                  <th className="px-5 py-4 text-center font-semibold text-slate-400">Free</th>
                  <th className="px-5 py-4 text-center font-bold text-[#D4A017]">Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.feature}
                    className={`border-b border-[#1A2235] ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"}`}>
                    <td className="px-5 py-3.5 text-slate-300">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center"><CheckIcon value={row.free} /></td>
                    <td className="px-5 py-3.5 text-center"><CheckIcon value={row.pro} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Pro Is For</div>
          <h2 className="mb-10 font-display text-3xl font-black">Built for Serious Builders</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "You have a business idea and need a real execution plan",
              "You want to know your funding readiness before applying",
              "You need branding direction and an outreach strategy",
              "You want to track progress and stay accountable",
              "You're ready to move from idea to income with structure",
              "You want your roadmap as a PDF or email export",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 text-left">
                <span className="mt-0.5 text-green-400 shrink-0">✓</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Build a Real Roadmap?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist and be the first to access full RMIE strategy tools when subscriptions go live.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
