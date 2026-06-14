import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const STEPS = [
  { num: "01", icon: "💡", title: "Business Idea Intake", body: "Start by telling PEN2PRO what you want to build — a service, product, skill-based offer, or idea you've been sitting on. No experience required." },
  { num: "02", icon: "🎨", title: "Brand Name & Identity", body: "Get multiple brand name ideas based on your business concept, target market, and industry. Includes tagline options and initial positioning direction." },
  { num: "03", icon: "🏗️", title: "Business Model Generation", body: "RMIE builds you a business model — revenue streams, pricing tiers, offer structure, and how to package what you do into something people will actually pay for." },
  { num: "04", icon: "📦", title: "Offer Creation", body: "Turn your skills and ideas into a clear, sellable offer. RMIE helps you define your entry offer, upsell, and premium tier so you can generate income at every level." },
  { num: "05", icon: "✅", title: "Startup Checklist", body: "A step-by-step checklist covering everything you need to get your business legally set up, financially ready, and visible to customers." },
  { num: "06", icon: "🏛️", title: "LLC / EIN / Business Bank", body: "Guidance on when and how to form your LLC, apply for your EIN, open a business bank account, and establish your company foundation correctly." },
  { num: "07", icon: "🚀", title: "Launch Roadmap", body: "A 7-day quick-start, 30-day launch plan, and 90-day growth roadmap — specific to your business idea, not a generic template." },
];

const FEATURES = [
  { icon: "💼", label: "Business Model Canvas" },
  { icon: "📋", label: "Offer Structure Builder" },
  { icon: "🏷️", label: "Brand Name Generator" },
  { icon: "📊", label: "Pricing Strategy" },
  { icon: "✅", label: "LLC & EIN Checklist" },
  { icon: "🏦", label: "Business Bank Guidance" },
  { icon: "🚀", label: "7-Day Launch Plan" },
  { icon: "📣", label: "First Customer Strategy" },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.20) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
  </div>
);

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#22C55E]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#22C55E] uppercase tracking-widest">
            🏗️ Business Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build Your Business
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From the Ground Up.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Business Builder mode takes your raw idea and turns it into a real business — with a name, an offer, a model, legal setup guidance, and a step-by-step launch plan. No experience required.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Your Business Blueprint
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Full Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Free to start · Pro & Elite unlock full Business Builder access</p>
        </div>
      </section>

      {/* ── FEATURE PILLS ── */}
      <section className="px-5 py-12 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {FEATURES.map((f) => (
              <div key={f.label}
                className="flex items-center gap-2 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-2.5 text-sm font-semibold text-slate-300">
                <span>{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            From Idea to Business in One Session
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Business Builder mode walks you through every step — from naming your company to setting up a legal foundation and creating your first offer.
          </p>
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <div key={step.num}
                className="flex gap-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#1E88E5]/30 transition-colors">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl font-black text-sm"
                    style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="h-full w-px bg-[#1A2D50] mt-2" style={{ minHeight: 24 }} />
                  )}
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE OUTPUT ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Sample Output</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            What Your Blueprint Looks Like
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#22C55E]" />
              <p className="text-sm font-bold text-[#22C55E]">Business Blueprint Generated</p>
            </div>
            <div className="grid gap-5 text-sm md:grid-cols-2">
              {[
                { label: "Business Concept", value: "Mobile pressure washing targeting commercial properties" },
                { label: "Brand Name Options", value: "XLR8 Wash Pro · CleanRun Commercial · ProBlast Services" },
                { label: "Entry Offer", value: "Commercial lot wash: $149–$299 per visit" },
                { label: "Premium Offer", value: "Monthly maintenance contract: $399–$799/mo" },
                { label: "Startup Cost Estimate", value: "$1,200–$3,500 (used equipment + LLC + insurance)" },
                { label: "First 7 Days", value: "Set up LLC, open business bank, message 50 local businesses, collect 3 test client photos" },
                { label: "30-Day Target", value: "5 paying clients, first $1,000 in revenue, Google Business Profile live" },
                { label: "90-Day Target", value: "2–3 recurring contracts, first referral, $5,000+ monthly revenue" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#1A2D50] bg-[#080C14] p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-1.5">{item.label}</p>
                  <p className="text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Sample output for illustration purposes · Your blueprint is built for your specific idea</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            Stop Thinking. Start Building.
          </h2>
          <p className="mb-10 text-slate-400">
            Answer a few questions about your idea. RMIE builds your business foundation — name, offer, model, legal checklist, and a real launch plan — in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Your Business Blueprint
            </Link>
            <Link to="/waitlist"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
            <Link to="/accelerator"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
