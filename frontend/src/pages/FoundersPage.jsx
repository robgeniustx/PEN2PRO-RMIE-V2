import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  {
    icon: "♾️",
    title: "Lifetime Platform Access",
    body: "Pay once. Access PEN2PRO forever. All current features plus every future feature that gets added — no recurring fees, no upgrade tiers required.",
  },
  {
    icon: "🏆",
    title: "Founders Badge",
    body: "Permanent 'Legacy Founder' badge on your profile and in the community. Recognition that you were here before the world knew.",
  },
  {
    icon: "🔑",
    title: "Everything in Elite",
    body: "Full RMIE blueprint, financial projections, company formation tools, vendor resource center, trademark guidance, done-with-you support, and priority access.",
  },
  {
    icon: "🚀",
    title: "Early Access to New Features",
    body: "Every new tool, agent, and feature gets released to Founders first — before Pro and Elite members. You shape the platform.",
  },
  {
    icon: "🎯",
    title: "Premium Roadmap Intelligence",
    body: "Founders get access to the deepest RMIE output tier — the most detailed blueprints, projections, and strategy outputs the engine produces.",
  },
  {
    icon: "👥",
    title: "Founders Community",
    body: "Private access to the PEN2PRO Founders network. Connect with other builders who made the move early.",
  },
];

const SPOTS_TOTAL = 200;

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute top-[40%] -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-48 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        {/* Gold grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            👑 Legacy Founder — $1,899 One-Time
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Lifetime Access.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Only {SPOTS_TOTAL} Spots.
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Become a PEN2PRO Legacy Founder. Pay once. Access everything — forever. Be recognized as one of the people who believed before the world knew.
          </p>
          <p className="mb-10 text-sm font-semibold text-[#D4A017]">
            ⚠️ Only {SPOTS_TOTAL} Founders spots will ever be sold. Once they're gone, they're gone.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 50%, #D4A017 100%)", boxShadow: "0 0 30px rgba(212,160,23,0.30)" }}>
              Claim Your Founders Spot
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
          <div className="relative overflow-hidden rounded-2xl bg-[#0F1520] p-8 text-center"
            style={{ border: "1px solid #D4A017", boxShadow: "0 0 50px rgba(212,160,23,0.20)" }}>
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00, #D4A017)" }} />
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Legacy Founder</div>
            <div className="mb-2 text-5xl font-black text-white">$1,899</div>
            <div className="mb-1 text-slate-400 text-sm">one-time payment</div>
            <div className="mb-2 text-xs text-[#D4A017] font-semibold">No monthly fees. Ever.</div>
            <div className="mb-6 text-xs text-slate-500">Limited to {SPOTS_TOTAL} spots total</div>
            <Link to="/waitlist?tier=founders"
              className="block w-full rounded-xl py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Join Founders Waitlist
            </Link>
            <p className="mt-3 text-xs text-slate-500">Payment goes live when subscriptions open. Reserve your spot now for free.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Founders Benefits</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever. First.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Legacy Founders get lifetime access to the full PEN2PRO platform, every future feature, and recognition as the builders who showed up first.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title}
                className="rounded-2xl bg-[#0F1520] p-6"
                style={{ border: "1px solid rgba(212,160,23,0.20)" }}>
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FOUNDERS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Founders Story</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Why Founders Matters</h2>
          <div className="space-y-5 text-[1.05rem] leading-[1.85] text-slate-300">
            <p>
              PEN2PRO was not built from a corner office or a venture capital check. It was built from pressure, setbacks, lived experience, and a decision not to stay stuck.
            </p>
            <p className="border-l-4 border-[#D4A017] pl-5 text-white font-semibold">
              The Founders tier exists for people who recognize what PEN2PRO is building — and want to be part of it before the world knows the name.
            </p>
            <p>
              200 spots. Lifetime access. No recurring fees. Full platform, every feature, forever.
            </p>
            <p>
              If PEN2PRO builds the tool you needed and couldn't find — this is how you lock it in permanently. One payment. Every upgrade. For life.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(212,160,23,0.05) 0%, rgba(255,138,0,0.03) 100%)" }}>
            <p className="text-lg font-bold text-white mb-1">Limited to {SPOTS_TOTAL} Legacy Founders. Worldwide. Ever.</p>
            <p className="text-sm text-slate-400">Once these spots are gone, the Founders tier closes permanently.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">How Founders Compares</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">The Math Makes Sense</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { plan: "Pro", price: "$249/mo", yearly: "$2,988/yr", color: "#1E88E5" },
              { plan: "Elite", price: "$499/mo", yearly: "$5,988/yr", color: "#FF8A00" },
              { plan: "Founders", price: "$1,899", yearly: "One-time. Forever.", color: "#D4A017", highlight: true },
            ].map((p) => (
              <div key={p.plan}
                className={`rounded-2xl p-6 text-center ${p.highlight ? "border-2" : "border"} border-[${p.color}] bg-[#0F1520]`}
                style={{ borderColor: p.highlight ? p.color : "#1A2D50", boxShadow: p.highlight ? `0 0 30px ${p.color}20` : "none" }}>
                {p.highlight && (
                  <div className="mb-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-[#080C14]"
                    style={{ background: p.color }}>
                    Best Value
                  </div>
                )}
                <div className="font-bold text-white text-lg mb-1">{p.plan}</div>
                <div className="text-2xl font-black" style={{ color: p.color }}>{p.price}</div>
                <div className="mt-1 text-xs text-slate-400">{p.yearly}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Founders pays for itself in 8 months compared to Elite. Everything after that is pure upside.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Claim Your Founders Spot
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Founders waitlist now. When subscriptions open, your spot is locked in at the Founders price — forever.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)", boxShadow: "0 0 25px rgba(212,160,23,0.25)" }}>
              Join Founders Waitlist
            </Link>
            <Link to="/about"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read the Story →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
