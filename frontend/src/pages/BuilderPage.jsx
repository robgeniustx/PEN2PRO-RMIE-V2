import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { n: "01", icon: "💡", title: "Define Your Business Idea", body: "Describe your concept in plain language. PEN2PRO's RMIE engine analyzes it and identifies your target customer, problem solved, and product-market fit." },
  { n: "02", icon: "🎨", title: "Generate Brand Identity",   body: "Get brand name suggestions, tagline options, color direction, and voice guidelines tailored to your industry and audience." },
  { n: "03", icon: "🏗️", title: "Build Your Business Model", body: "Choose your revenue model, price your offer, structure your service tiers, and identify your first 10 customers." },
  { n: "04", icon: "✅", title: "Complete Your Foundation",  body: "LLC setup, EIN registration, business bank account, business credit foundation — sequenced in the right order, step by step." },
  { n: "05", icon: "🚀", title: "Launch With a Real Plan",   body: "7-day action plan, 30-day launch roadmap, and 90-day growth plan built around your resources, timeline, and market." },
];

const BUILDER_TOOLS = [
  { icon: "🧠", title: "Business Idea Intake",     body: "Answer 5 questions. Get a complete AI analysis of your concept's viability, audience, and revenue model." },
  { icon: "🏢", title: "Entity Setup Checklist",   body: "LLC, EIN, registered agent, operating agreement — guided checklist with explanations at each step." },
  { icon: "🏦", title: "Business Bank Checklist",  body: "What banks want, how to qualify, which accounts to open first, and how to use it to build business credit." },
  { icon: "💰", title: "Offer Structure Builder",  body: "Create 2-3 service tiers, set pricing, write your core offer, and build a simple lead-capture pitch." },
  { icon: "📣", title: "Outreach Launch Template", body: "50 prospect targets, 3 message scripts, and a 7-day outreach calendar to get your first client." },
  { icon: "📊", title: "Progress Tracker",          body: "Visual checklist showing how far you've come and what's left before you're officially open for business." },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* ambient bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold text-purple-400 uppercase tracking-widest">
            🏗️ BUSINESS BUILDER MODE
          </div>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight md:text-6xl">
            Build Your Business
            <br />
            <span style={{ background: "linear-gradient(90deg,#7C3AED,#1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From the Ground Up
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Builder Mode takes you from "I have an idea" to "I have a business" — with a real plan, real entity setup, a real offer, and real outreach to your first customers.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Start Building for Free →
            </Link>
            <Link to="/signup"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-purple-500 hover:text-purple-300 transition">
              Create Free Account
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-600">No credit card required · Free roadmap in under 5 minutes</p>
        </div>
      </section>

      {/* BUILDER STEPS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-400">The Builder Process</p>
            <h2 className="font-display text-4xl font-black">5 steps from idea to open for business</h2>
          </div>
          <div className="relative space-y-4">
            {BUILDER_STEPS.map((step) => (
              <div key={step.n} className="flex gap-6 rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-purple-500/30 transition-all">
                <div className="shrink-0 font-display text-4xl font-black leading-none"
                  style={{ color: "rgba(124,58,237,0.3)" }}>{step.n}</div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDER TOOLS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-400">Builder Tools</p>
            <h2 className="font-display text-4xl font-black">Everything inside Builder Mode</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BUILDER_TOOLS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-purple-500/30 transition-all">
                <div className="mb-3 text-3xl">{t.icon}</div>
                <h3 className="mb-2 font-bold text-white">{t.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER UPSELL */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-400">Builder + Upgrade</p>
            <h2 className="font-display text-3xl font-black">Unlock the full Builder experience</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: "Free", price: "$0", note: "Start here", features: ["1 blueprint", "Basic Builder flow", "LLC checklist", "Limited export"], cta: "Start Free", href: "/starter", style: "border border-[#1A2235] text-slate-300" },
              { name: "Pro", price: "$249/mo", note: "Most Popular", features: ["Unlimited blueprints", "Full Builder tools", "AI refinement", "PDF export", "Sales scripts"], cta: "Go Pro", href: "/pro", style: "border border-yellow-500/60 text-yellow-400" },
              { name: "Elite", price: "$499/mo", note: "Best Value", features: ["Everything in Pro", "Financial projections", "Funding resources", "Done-with-you guidance", "Priority support"], cta: "Go Elite", href: "/elite", style: "border border-teal-400/60 text-teal-400" },
            ].map((tier) => (
              <div key={tier.name} className="flex flex-col rounded-2xl border border-[#1A2235] bg-[#080C14] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{tier.note}</p>
                <p className="font-bold text-white text-lg">{tier.name}</p>
                <p className="font-display text-3xl font-black mt-1 mb-4 text-white">{tier.price}</p>
                <ul className="flex-1 space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-teal-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link to={tier.href} className={`rounded-xl px-4 py-3 text-center text-sm font-black transition ${tier.style}`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">Your business is waiting to be built.</h2>
          <p className="mt-4 text-slate-400">Start free. Get your first roadmap in under 5 minutes. No credit card. No fluff. Just a real plan.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Start Building Now →
            </Link>
            <Link to="/accelerator" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-purple-500 hover:text-purple-300 transition">
              See Accelerator Mode
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
