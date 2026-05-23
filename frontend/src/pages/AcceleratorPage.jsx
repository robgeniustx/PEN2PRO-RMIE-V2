import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "📈", title: "Revenue Acceleration Plan",      desc: "Know exactly which revenue streams to activate first based on your market and resources." },
  { icon: "📣", title: "Marketing Strategy",             desc: "Channel selection, content strategy, and paid vs. organic mix built for your stage." },
  { icon: "📬", title: "Outreach Campaign System",       desc: "Ready-to-run outreach campaigns with scripts, sequences, and follow-up cadence." },
  { icon: "💰", title: "Pricing Strategy Optimization",  desc: "Stop undercharging. RMIE analyzes your offer and market to recommend pricing tiers." },
  { icon: "🤝", title: "Customer Acquisition System",    desc: "Define your ideal customer, acquisition cost, and conversion path — then execute." },
  { icon: "🏦", title: "Funding Readiness Track",        desc: "Are you ready for a loan or investor? Accelerator tells you exactly where you stand." },
  { icon: "📝", title: "Sales Scripts",                  desc: "Word-for-word scripts for calls, DMs, follow-ups, and close conversations." },
  { icon: "📅", title: "30/60/90-Day Execution Plan",    desc: "No more guessing what to do each week. Your next 90 days, mapped out and prioritized." },
];

const CONTRAST = [
  {
    label: "Generic advice",
    bad: "Post on social media and market your business.",
    good: 'Create 3 offer packages, identify 50 local prospects, message 20 per day for 7 days, build a Google Business Profile, collect 3 testimonials, and test a $10/day ad only after validating demand.',
  },
  {
    label: "Revenue strategy",
    bad: "Find customers who need your service.",
    good: "Target commercial property managers within 10 miles using LinkedIn outreach. Lead with before/after photos. Offer a first-service discount to get the review. Upsell to quarterly contracts.",
  },
];

const WHO_ITS_FOR = [
  "Businesses past the starter stage, ready to scale",
  "Founders with an offer but no consistent sales system",
  "Side hustlers converting to full-time income",
  "Veterans and returning citizens with real skills ready to monetize",
  "Anyone stuck between $0 and their first $10K month",
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[40%] -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-28 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,201,177,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>
            Elite Feature — Revenue Growth Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Accelerator
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Scale Your Revenue.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Accelerator is PEN2PRO's advanced revenue and growth mode. It gives you a 30/60/90-day execution plan built around your specific business, market, and goals — not generic startup advice.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Unlock with Elite
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#00C9B1] transition-colors">
              Get a Free Roadmap First
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>What Accelerator Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Every Tool You Need to Go From Stuck to Scaling
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            No fluff. No generic advice. Just the specific moves you need to build revenue fast.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#00C9B1]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Difference</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Generic Advice vs. Accelerator Output
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Most AI tools give you the same advice for every person. Accelerator is built for your business, your market, your stage.
          </p>
          <div className="space-y-8">
            {CONTRAST.map((c) => (
              <div key={c.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
                <div className="px-6 py-3 border-b border-[#1A2D50]">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{c.label}</span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1A2D50]">
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <span className="text-xs font-bold uppercase tracking-wide text-red-400">Generic AI advice</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed italic">"{c.bad}"</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full" style={{ background: "#00C9B1" }} />
                      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#00C9B1" }}>Accelerator output</span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">"{c.good}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Accelerator Is For</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            Built for Builders Ready to Scale
          </h2>
          <div className="space-y-3">
            {WHO_ITS_FOR.map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-5 py-4">
                <div className="h-2 w-2 shrink-0 rounded-full" style={{ background: "#00C9B1" }} />
                <p className="text-slate-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Waiting. Start Accelerating.
          </h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            Accelerator is included in the Elite and Founders tiers. Upgrade now or start with a free roadmap to see where you stand.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Unlock Accelerator with Elite
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
