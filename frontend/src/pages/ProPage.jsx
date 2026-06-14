import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Business Blueprint",
    body: "Complete roadmap — target customer, problem, offer, startup costs, revenue model, pricing strategy, and a 7/30/90-day action plan.",
  },
  {
    icon: "📊",
    title: "Full Progress Tracking",
    body: "Check off milestones, track your launch steps, and see real momentum as you move from idea to execution.",
  },
  {
    icon: "🎨",
    title: "Business Branding Support",
    body: "Brand name ideas, logo direction, color guidance, and brand voice development — built around your specific business.",
  },
  {
    icon: "📄",
    title: "Email & PDF Export",
    body: "Download your entire roadmap as a PDF or send it to your email. Your blueprint, yours to keep.",
  },
  {
    icon: "🤖",
    title: "AI Refinement",
    body: "Refine your roadmap with AI — adjust your offer, sharpen your messaging, and update your plan as your business evolves.",
  },
  {
    icon: "📣",
    title: "Outreach Strategy",
    body: "Sales scripts, outreach templates, and a step-by-step customer acquisition plan built around your offer.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness Checklist",
    body: "Know exactly where your credit stands, what lenders need, and the steps to improve your fundability before you apply.",
  },
  {
    icon: "⚡",
    title: "P2P Command Center Access",
    body: "CRM basics, pipeline tracking, customer management, and a dashboard to run your business from one place.",
  },
];

const COMPARE = [
  { feature: "Business Blueprint", free: "Preview", pro: "Full", elite: "Advanced" },
  { feature: "Progress Tracking", free: "Limited", pro: "Full", elite: "Full" },
  { feature: "Branding Support", free: "—", pro: "✓", elite: "✓" },
  { feature: "PDF/Email Export", free: "—", pro: "✓", elite: "✓" },
  { feature: "AI Refinement", free: "—", pro: "✓", elite: "Advanced" },
  { feature: "Outreach Strategy", free: "—", pro: "✓", elite: "✓" },
  { feature: "Credit & Funding Checklist", free: "—", pro: "✓", elite: "✓" },
  { feature: "Command Center (CRM)", free: "—", pro: "Basic", elite: "Advanced" },
  { feature: "Financial Projections", free: "—", pro: "—", elite: "✓" },
  { feature: "Priority Support", free: "—", pro: "—", elite: "✓" },
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From Idea to Income —
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              With a Real Roadmap
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Pro gives you the full RMIE business blueprint — not a preview, not a teaser. A complete strategy with outreach scripts, branding direction, credit readiness, and a step-by-step action plan built for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-4 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist — $249/mo
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launching June 15, 2026 · Join waitlist to lock in your spot</p>
        </div>
      </section>

      {/* Price Card */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border-2 border-[#1E88E5] bg-[#0F1520] p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E88E5] to-[#FF8A00]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#1E88E5] mb-2">PEN2PRO Pro</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-black text-white">$249</span>
              <span className="text-slate-400">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Billed monthly · Cancel anytime</p>
            <Link to="/waitlist?tier=pro" className="btn-gold block rounded-xl py-3.5 text-sm font-black text-[#0A0F1E] w-full">
              Join the Waitlist
            </Link>
            <p className="mt-4 text-xs text-slate-500">Secure your Pro spot before launch</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Pro Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro is not a preview. It's the full RMIE engine — your complete business blueprint, execution roadmap, branding direction, credit readiness, and outreach strategy in one place.
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

      {/* Comparison Table */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Plan Comparison</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">
            Free vs Pro vs Elite
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1A2D50]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A2D50] bg-[#0F1520]">
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-500">Feature</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">Free</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Pro</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Elite</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-[#1A2235] ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"}`}>
                    <td className="px-6 py-4 font-medium text-slate-300">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-slate-500">{row.free}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#1E88E5]">{row.pro}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#D4A017]">{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Pro Is For */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Who Pro Is For</div>
          <h2 className="mb-8 font-display text-3xl font-black md:text-4xl">
            Built for Builders Who Are Ready to Move
          </h2>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {[
              "You have an idea and need a real execution plan",
              "You're tired of generic advice and want a roadmap built for your idea",
              "You need branding direction and don't know where to start",
              "You want to understand your credit and funding readiness before you apply",
              "You need outreach scripts and a customer acquisition strategy",
              "You want to track your progress and see real momentum",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <span className="shrink-0 text-[#1E88E5] font-black text-lg">✓</span>
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
            Ready for the Full Roadmap?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist and get first access when we launch June 15, 2026. Early members lock in their rate.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-xs text-slate-500">
            <span>Cancel anytime</span>
            <span>·</span>
            <span>No setup fees</span>
            <span>·</span>
            <span>Launches June 15, 2026</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
