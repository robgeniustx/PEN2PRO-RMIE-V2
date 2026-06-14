import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { n: "01", title: "Describe Your Business Idea", body: "Answer 5 questions about your business concept, target customer, and starting budget. Takes under 3 minutes." },
  { n: "02", title: "Get Brand Name Ideas", body: "The AI suggests 5–10 brand name options for your business with taglines and positioning angles." },
  { n: "03", title: "Generate Your Business Model", body: "Revenue model, pricing tiers, core offer, and a description of what you actually sell — built for your niche." },
  { n: "04", title: "Build Your Offer Structure", body: "Define your starter package, core service, and premium offer. Know what to charge and how to position it." },
  { n: "05", title: "Get Your Startup Checklist", body: "LLC formation, EIN, business bank account, business credit foundation, tools, and vendor setup — in the right order." },
  { n: "06", title: "Receive Your Launch Roadmap", body: "7-day immediate actions, 30-day launch plan, and 90-day growth targets — specific to your idea and market." },
];

const BUILDER_INCLUDES = [
  { icon: "💡", label: "Business Idea Intake" },
  { icon: "🏷️", label: "Brand Name Generator" },
  { icon: "📦", label: "Business Model Builder" },
  { icon: "💰", label: "Offer & Pricing Creator" },
  { icon: "✅", label: "Startup Checklist" },
  { icon: "🏛️", label: "LLC & EIN Guidance" },
  { icon: "🏦", label: "Business Bank Setup" },
  { icon: "🚀", label: "Full Launch Roadmap" },
  { icon: "📣", label: "Sales Script Starter" },
  { icon: "📊", label: "Revenue Model" },
];

const NICHES = [
  "Pressure Washing", "Lawn Care", "Trucking", "Food / Catering",
  "Personal Training", "Hair / Barbering", "Bookkeeping / Tax", "Real Estate",
  "E-Commerce", "Digital Marketing", "Consulting / Coaching", "Photography",
  "Construction", "Child Care", "IT Support", "Event Planning",
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/40 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#a78bfa] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Real Business.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            PEN2PRO Builder walks you from idea to launch-ready — brand, model, offer, startup checklist, and your first 90-day roadmap. Built for first-time entrepreneurs and anyone ready to stop planning and start building.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]">
              Start Building Free →
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Pro Builder Tools
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Free to start · No credit card · Full roadmap in under 5 minutes</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">The Builder Process</p>
            <h2 className="font-display text-4xl font-black">6 steps from idea to ready</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-[#1A2D50] bg-[#080C14] p-6 hover:border-[#7C3AED]/40 transition-colors">
                <div className="mb-4 font-display text-5xl font-black leading-none" style={{ color: "rgba(124,58,237,0.25)" }}>{s.n}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Builder Includes</p>
            <h2 className="font-display text-3xl font-black">Every tool to go from zero to launch-ready</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {BUILDER_INCLUDES.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center hover:border-[#7C3AED]/40 transition-colors">
                <div className="mb-2 text-3xl">{item.icon}</div>
                <p className="text-xs font-semibold text-slate-300 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NICHES */}
      <section className="border-t border-[#1A2D50] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Industries We Support</p>
            <h2 className="font-display text-3xl font-black">Built for real-world businesses</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {NICHES.map((n) => (
              <span key={n} className="rounded-full border border-[#1A2D50] bg-[#080C14] px-4 py-2 text-sm font-semibold text-slate-400 hover:border-[#7C3AED]/40 hover:text-slate-200 transition-colors">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50] text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-4xl font-black">
            Stop planning.
            <br />
            <span className="gradient-text">Start building.</span>
          </h2>
          <p className="mb-10 text-slate-400">
            Your free roadmap is 5 minutes away. No credit card. No business experience required. Just your idea and the willingness to move.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]">
              Start Free Builder Roadmap →
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
