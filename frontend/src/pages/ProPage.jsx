import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Business Roadmap",
    desc: "Unlimited AI-generated blueprints with 7-day, 30-day, and 90-day execution plans built around your specific idea, market, and budget.",
  },
  {
    icon: "📊",
    title: "Full Progress Tracking",
    desc: "Track every milestone, checklist item, and action step so you always know where you stand and what comes next.",
  },
  {
    icon: "🎨",
    title: "Business Branding Support",
    desc: "Brand name suggestions, tagline generation, color direction, and brand identity guidance for your business.",
  },
  {
    icon: "📄",
    title: "Email & PDF Export",
    desc: "Export your full roadmap, action plan, and business blueprint as a professional PDF or send it to your inbox.",
  },
  {
    icon: "🤖",
    title: "AI Refinement Engine",
    desc: "Refine your roadmap based on new information, market changes, or feedback. Get updated strategies on demand.",
  },
  {
    icon: "📣",
    title: "Outreach & Sales Strategy",
    desc: "Real outreach scripts, daily prospecting systems, and client acquisition tactics built for your industry.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness Checklist",
    desc: "Know exactly what documents, accounts, and credit history lenders need before you apply — no wasted applications.",
  },
  {
    icon: "🏢",
    title: "Entity & Business Foundation",
    desc: "LLC formation guidance, EIN checklist, business banking setup, and the business foundation steps most coaches skip.",
  },
];

const COMPARE = [
  { feature: "Business Roadmap", free: "1 basic preview", pro: "Unlimited — full 90-day plans" },
  { feature: "Progress Tracking", free: "Limited", pro: "Full milestone tracking" },
  { feature: "AI Refinement", free: "None", pro: "On-demand strategy updates" },
  { feature: "Outreach Scripts", free: "None", pro: "Included" },
  { feature: "Credit Readiness", free: "None", pro: "Full checklist" },
  { feature: "PDF / Email Export", free: "None", pro: "Included" },
  { feature: "Brand Support", free: "Basic names only", pro: "Full brand direction" },
  { feature: "LLC / EIN Guidance", free: "Basic checklist", pro: "Step-by-step guidance" },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[600px] w-[600px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #2d9cff 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
            PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Build It Right.
            <br />
            <span style={{ background: "linear-gradient(90deg, #2d9cff, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Execute It All.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-400">
            PEN2PRO Pro gives you the complete AI-powered business roadmap with unlimited blueprints, full progress tracking, credit readiness tools, branding support, and the outreach strategy to go from idea to first dollar.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-2xl px-8 py-4 text-base font-black"
              style={{ background: "#2d9cff", color: "#081226", boxShadow: "0 0 35px rgba(45,156,255,0.45)" }}
            >
              Upgrade to Pro — $249/mo →
            </Link>
            <Link
              to="/waitlist"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-[#2d9cff] hover:text-white"
            >
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Cancel anytime · Secure checkout via Stripe</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">What's Included</p>
            <h2 className="font-display text-4xl font-black text-white">
              Everything you need to execute
            </h2>
            <p className="mt-3 text-slate-500">Not motivation. Not templates. A full business execution engine for serious builders.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 transition-all hover:border-[#2d9cff]/30 hover:bg-[#0F1520]"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE VS PRO COMPARE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Free vs Pro</p>
            <h2 className="font-display text-4xl font-black text-white">What changes when you upgrade</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#2d9cff]">Pro</span>
            </div>
            {COMPARE.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 items-start gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0D1528]"}`}
              >
                <span className="font-semibold text-slate-300">{row.feature}</span>
                <span className="text-center text-slate-600">{row.free}</span>
                <span className="text-center font-semibold text-[#2d9cff]">{row.pro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO PRO IS FOR */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Who Pro Is For</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white">Built for serious builders</h2>
          <p className="mb-12 text-slate-400">
            If you're done playing with ideas and ready to execute with a real system, Pro is your next move.
          </p>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {[
              { icon: "🎯", t: "You have an idea and need a real plan", d: "Not a template — a specific roadmap for your business, market, and goals." },
              { icon: "⚡", t: "You're ready to take daily action", d: "Pro gives you a daily action plan, outreach scripts, and checklists to execute immediately." },
              { icon: "💰", t: "You want to get funded or build credit", d: "Know exactly what lenders need before you apply. No guessing." },
              { icon: "🚀", t: "You want to scale past your first clients", d: "Full 90-day growth plan, pricing strategy, and customer acquisition system." },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 rounded-2xl border border-[#1A2235] bg-[#080C14] p-5">
                <span className="mt-0.5 text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="mb-1 font-bold text-white">{item.t}</p>
                  <p className="text-sm text-slate-500">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Ready to move?</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">
            Stop planning. Start building.
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Join Pro today and get your full AI business roadmap, execution system, and credit readiness tools. Cancel anytime.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-2xl px-10 py-4 text-base font-black"
              style={{ background: "#2d9cff", color: "#081226", boxShadow: "0 0 35px rgba(45,156,255,0.45)" }}
            >
              Upgrade to Pro →
            </Link>
            <Link
              to="/elite"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 transition hover:border-teal-400 hover:text-teal-400"
            >
              See Elite Plan →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Not ready yet?{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
              Start with a free roadmap
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
