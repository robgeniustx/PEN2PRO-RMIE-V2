import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your fastest path to first revenue. Pricing structure, offer stacking, and upsell sequences designed to generate income fast." },
  { icon: "📣", title: "Marketing Strategy", body: "Channel selection, content strategy, and brand positioning mapped to your budget and audience — not generic advice." },
  { icon: "📨", title: "Outreach Campaigns", body: "Who to contact, what to say, how many per day, and how to follow up. Real outreach scripts for your industry." },
  { icon: "🎯", title: "Pricing Strategy", body: "Competitive pricing analysis, value-based pricing frameworks, and tiered offer structures that maximize revenue without losing clients." },
  { icon: "👥", title: "Customer Acquisition", body: "Ideal customer profile, lead sources, and acquisition cost analysis. Know exactly who you're targeting and how to reach them." },
  { icon: "🏦", title: "Funding Readiness", body: "Personal credit prep, business entity setup, revenue documentation, and lender positioning — so you're ready when capital doors open." },
  { icon: "🗣️", title: "Sales Scripts", body: "Industry-specific sales scripts for phone calls, DMs, emails, and in-person conversations. Close more clients with confidence." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "A specific action plan with daily and weekly targets. Know what to do every single day for the next 90 days." },
];

const PLAN_ROWS = [
  { day: "Days 1–7", label: "Foundation & Quick Wins", items: ["Finalize offer and pricing", "Set up payment processing", "Message 20 warm prospects", "Collect first testimonial or client"] },
  { day: "Days 8–30", label: "Traction & Early Revenue", items: ["Run first outreach campaign", "Publish 3 authority posts", "Set up Google Business Profile", "Close first paid client"] },
  { day: "Days 31–60", label: "Systems & Scale", items: ["Document fulfillment process", "Launch referral system", "Begin building email list", "Track revenue and adjust pricing"] },
  { day: "Days 61–90", label: "Growth & Funding Ready", items: ["Business credit baseline built", "First funding application ready", "Consistent revenue documented", "Expand offer or client base"] },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/3 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 Accelerator Mode — Revenue & Growth
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Planning.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Accelerator is the advanced growth mode for entrepreneurs who already have an idea or early business and need real revenue, real marketing strategy, and a 90-day execution plan — not more theory.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Launch Accelerator Session — Free
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade to Pro →
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Eight Revenue-Focused Modules
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Every module is built around one goal: helping you generate real revenue from a real business as fast as responsibly possible.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#FF8A00]/30 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">The 90-Day Framework</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            What You're Actually Doing Each Month
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            No vague goals. No generic timelines. Accelerator gives you specific targets and actions for each of the first 90 days.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PLAN_ROWS.map((row) => (
              <div key={row.day} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-1 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">{row.day}</div>
                <h3 className="mb-4 font-bold text-white">{row.label}</h3>
                <ul className="space-y-2">
                  {row.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-[#1E88E5] mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Output */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Real Output Example</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">What Accelerator Actually Tells You</h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            <div className="border-b border-[#1A2D50] px-6 py-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sample Outreach Strategy Output</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-xl border border-[#1A2D50] bg-[#080C14] p-4">
                <p className="text-xs text-[#FF8A00] font-bold mb-2">❌ Generic (what most tools give you)</p>
                <p className="text-sm text-slate-400 italic">"Post on social media and market your business to potential customers."</p>
              </div>
              <div className="rounded-xl border border-[#1E88E5]/30 bg-[#1E88E5]/5 p-4">
                <p className="text-xs text-[#1E88E5] font-bold mb-2">✓ Accelerator Output</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  "Create 3 service packages at $97, $297, and $497. Build a list of 50 local contractors from Google Maps.
                  Send 20 personalized Instagram DMs per day for 7 days — lead with the problem, not your pitch.
                  Set up a Google Business Profile this week. Collect 3 testimonials before running a single ad.
                  Test a $15/day Facebook ad only after getting 2 paying clients to validate demand."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Accelerate?
          </h2>
          <p className="mb-10 text-slate-400">
            Start your free Accelerator session — or upgrade to Pro/Elite for the full 90-day execution framework, funding readiness, and advanced strategy.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Accelerator Session
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:bg-[#FF8A00]/10 transition-colors">
              Upgrade to Elite →
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
