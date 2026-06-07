import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const STEPS = [
  { step: "01", title: "Describe Your Business Idea", body: "Tell RMIE your idea in plain language. What you want to build, sell, or offer. No business degree required." },
  { step: "02", title: "Get Brand Name Ideas", body: "RMIE generates brand name options based on your niche, audience, and tone. Professional names that actually fit." },
  { step: "03", title: "Define Your Business Model", body: "Product, service, subscription, agency, hybrid — RMIE maps the best model for your idea and revenue goals." },
  { step: "04", title: "Build Your Core Offer", body: "Three-tier offer structure: entry, mid, and premium. Know exactly what you're selling and at what price." },
  { step: "05", title: "Complete the Startup Checklist", body: "LLC, EIN, business bank account, bookkeeping, payment processing, insurance — every step in order." },
  { step: "06", title: "Get Your Launch Roadmap", body: "A 7-day, 30-day, and 90-day action plan built specifically around your business, industry, and budget." },
];

const CHECKLIST = [
  { cat: "Business Structure", items: ["LLC or sole proprietorship filing", "EIN from IRS.gov (free)", "Registered agent setup", "Operating agreement"] },
  { cat: "Business Banking", items: ["Business checking account", "Business savings account", "Business credit card", "PayPal/Stripe/Square setup"] },
  { cat: "Branding Basics", items: ["Business name registered", "Logo concept created", "Brand colors selected", "Social handles secured"] },
  { cat: "Launch Essentials", items: ["Website or landing page", "Google Business Profile", "First offer defined", "Payment link active"] },
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From Idea to
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Business
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Business Builder walks you from raw idea to fully structured launch plan — with brand name options, business model selection, offer creation, startup checklist, and a full launch roadmap.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Building Now — Free
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Pro & Elite →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works — 6-step process */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How Builder Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Six Steps from Idea to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            No guesswork. No skipped steps. Each Builder session walks you through exactly what you need to do and in what order.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-4xl font-black text-[#1E88E5]/30">{s.step}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Checklist Preview */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Startup Checklist</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Don't Skip the Foundation
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Most people jump to marketing before building the foundation. Builder makes sure you do it in the right order — so you can actually operate, get paid, and grow.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CHECKLIST.map((cat) => (
              <div key={cat.cat} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-4 font-bold text-white text-sm">{cat.cat}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-[#FF8A00] mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Builder is For */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Built For</div>
          <h2 className="mb-6 font-display text-3xl font-black">Builder Is for People Who Want Real Steps, Not Theory</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 mb-12">
            {[
              { icon: "💡", label: "First-Time Entrepreneurs" },
              { icon: "🎖️", label: "Veterans" },
              { icon: "🔄", label: "Returning Citizens" },
              { icon: "👷", label: "Tradespeople" },
              { icon: "📱", label: "Creators" },
              { icon: "👩‍👧", label: "Parent-Preneurs" },
            ].map((w) => (
              <div key={w.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4 text-center">
                <div className="mb-2 text-2xl">{w.icon}</div>
                <p className="text-xs font-semibold text-slate-300">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Idea Deserves a Real Plan
          </h2>
          <p className="mb-10 text-slate-400">
            Start the free Business Builder session now. No credit card, no fluff — just a real roadmap for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Building — Free
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Accelerator Mode →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
