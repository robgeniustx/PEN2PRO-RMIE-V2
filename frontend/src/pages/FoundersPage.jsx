import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_BENEFITS = [
  { icon: "♾️", title: "Lifetime Access", desc: "One payment. Full access to PEN2PRO forever — every feature, every update, no monthly fees. Ever." },
  { icon: "💎", title: "Everything in Elite", desc: "All Pro and Elite features included from day one: roadmaps, tracking, AI refinement, strategy, funding resources." },
  { icon: "⚡", title: "P2P Command Center", desc: "The full business operating system — CRM, pipeline, invoicing, reputation management, and automation." },
  { icon: "🎙️", title: "P2P AI Voice Agent", desc: "Your AI-powered outbound sales agent that books appointments and follows up with leads 24/7." },
  { icon: "🌐", title: "Website Builder", desc: "Build your business website with no coding. Templates, domain guidance, SEO, and contact forms included." },
  { icon: "🏆", title: "Founders Hall Recognition", desc: "Your name in the PEN2PRO Founders Hall — you believed before the world saw it. That matters." },
  { icon: "🧭", title: "10M Strategist Framework", desc: "12-month execution framework built for scaling from startup to $10M vision — included at launch." },
  { icon: "🚀", title: "First Access to Everything", desc: "Every new feature, tool, and integration ships to Founders first — before any public release." },
];

const SPOTS_REMAINING = 143;

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,160,23,0.15) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            <span className="h-2 w-2 rounded-full bg-[#D4A017] animate-pulse" />
            {SPOTS_REMAINING} of 200 Spots Remaining
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Become a PEN2PRO<br />
            <span
              style={{
                background: "linear-gradient(90deg, #D4A017, #FF8A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Legacy Founder.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            One investment. Full access forever. Built for early believers who want the complete PEN2PRO
            platform — RMIE, Command Center, AI Voice Agent, Website Builder — for life.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold glow-gold"
            >
              Claim Your Founders Spot — $1,899 →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-[#D4A017]/50 hover:text-white transition"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Limited to 200 spots globally · No monthly fees ever · Locks in at launch June 15, 2026
          </p>
        </div>
      </section>

      {/* URGENCY BAR */}
      <div className="border-y border-[#D4A017]/20 bg-[#D4A017]/05 px-5 py-4 text-center">
        <p className="text-sm font-semibold text-[#D4A017]">
          🔥 Founders pricing is only available before launch on June 15, 2026. After launch, the Founders
          tier closes permanently. {SPOTS_REMAINING} spots remain.
        </p>
      </div>

      {/* BENEFITS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Founders Get</p>
            <h2 className="font-display text-4xl font-black text-white">The complete PEN2PRO platform. Forever.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS_BENEFITS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#D4A017]/20 bg-[#080C14] p-6 hover:border-[#D4A017]/40 transition-colors"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING CARD */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border border-[#D4A017]/40 bg-[#0F1520] p-8 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Founders Lifetime</div>
            <div className="mb-1 font-display text-6xl font-black text-white">$1,899</div>
            <p className="mb-1 text-slate-400">One-time payment. No monthly fees. Ever.</p>
            <p className="mb-8 text-xs text-slate-600">
              Equivalent to just 4 months of Elite pricing — for lifetime access.
            </p>
            <div className="mb-8 space-y-3 text-left">
              {[
                "Full RMIE platform access (everything in Elite)",
                "P2P Command Center — business OS",
                "P2P AI Voice Agent — outbound sales",
                "Website Builder — no code required",
                "10M Strategist Framework (12-month)",
                "All future features and updates",
                "Founders Hall recognition",
                "Priority support forever",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="font-bold text-[#D4A017]">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/waitlist?tier=founders"
              className="block rounded-2xl py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Claim Founders Lifetime — $1,899 →
            </Link>
            <p className="mt-3 text-xs text-slate-600">{SPOTS_REMAINING} spots remaining · Closes June 15, 2026</p>
          </div>
        </div>
      </section>

      {/* WHY FOUNDERS */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Why Become a Founder?</p>
          <h2 className="mb-10 font-display text-3xl font-black">Three reasons to join before launch</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: "🔒",
                title: "Lock the Price",
                desc: "Elite is $499/month. Founders pay $1,899 once. That's a lifetime of access for the price of 4 months.",
              },
              {
                icon: "🏅",
                title: "Be Recognized",
                desc: "Your name goes into the Founders Hall — you believed before the world saw it. That legacy is real.",
              },
              {
                icon: "🚪",
                title: "First Through the Door",
                desc: "Early access to every new feature, module, and integration before any public release.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Join as a Founder → {SPOTS_REMAINING} spots left
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-8">
            <p className="mb-2 text-4xl font-black text-[#D4A017]">"</p>
            <p className="text-lg text-slate-300 leading-relaxed italic">
              PEN2PRO was not created from a comfortable office or a perfect path. It was built from
              pressure, rejection, discipline, and the refusal to stay stuck. The Founders who join now
              are not just getting a product — they are becoming part of the story.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                ⚡
              </div>
              <div>
                <p className="font-black text-white">Robert Earl Green Jr.</p>
                <p className="text-xs text-[#FF8A00]">Founder — PEN2PRO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
