import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDER_PERKS = [
  { icon: "♾️", title: "Lifetime Platform Access", desc: "Pay once. Access everything PEN2PRO builds — forever. No recurring fees. No upgrade prompts. Your investment is locked in." },
  { icon: "🏅", title: "Founder Recognition", desc: "Your name goes in the Founder's Hall. Recognized as someone who believed in the mission before the masses caught on." },
  { icon: "⚡", title: "First Access to Everything", desc: "Voice Agent, Website Builder, Advanced RMIE, financial tools — you get it all first, before public release." },
  { icon: "🎯", title: "Full Elite Feature Stack", desc: "Everything in Pro and Elite included. Financial projections, legal foundation, marketing playbooks, vendor resources, priority support." },
  { icon: "🔒", title: "Rate Lock Guarantee", desc: "Whatever the founder price is — that's your price forever. As PEN2PRO grows and pricing increases, founders never pay more." },
  { icon: "🤝", title: "Direct Founder Access", desc: "Founding members get direct access to Robert Green. Share feedback, get real answers, help shape the roadmap of PEN2PRO itself." },
];

const TIMELINE = [
  { phase: "Now", label: "Waitlist Open", desc: "Secure your Founder spot before launch." },
  { phase: "June 2026", label: "Official Launch", desc: "PEN2PRO goes live. Founders get in first." },
  { phase: "Q3 2026", label: "Voice & Builder Live", desc: "AI Voice Agent + Website Builder available." },
  { phase: "Q4 2026", label: "Full RMIE Engine", desc: "Complete Rapid Monetization Intelligence Engine online." },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-center px-5">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.15) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF8A00] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legacy Founder</span>
            <span className="rounded-full bg-[#FF8A00]/20 px-2 py-0.5 text-xs font-bold text-[#FF8A00]">LIMITED</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Be a Founding Member.<br />
            <span style={{ color: "#FF8A00" }}>Own It Forever.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Legacy Founders are the people who believed in PEN2PRO before launch day. They get lifetime access, locked-in pricing, Founder recognition, and first access to every feature we build — forever.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14] transition-all"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Secure Founder Spot
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-all">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">Founders who secure before June 15, 2026 are locked in for life.</p>
        </div>
      </section>

      {/* Scarcity Banner */}
      <div className="mx-auto max-w-7xl px-5 pb-4">
        <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 px-6 py-4 text-center">
          <span className="text-lg">⚠️</span>
          <p className="text-sm font-semibold text-slate-300">
            Legacy Founder access is <span style={{ color: "#FF8A00" }}>limited to founding members only.</span> Once the launch window closes, this tier is gone. There is no coming back to this price.
          </p>
        </div>
      </div>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">What Founders Get</h2>
        <p className="mb-12 text-center text-slate-400">Every benefit, every feature, every tool — past, present, and future.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDER_PERKS.map((p) => (
            <div key={p.title}
              className="rounded-2xl border p-7 transition-all hover:border-[#FF8A00]/50 hover:-translate-y-1"
              style={{ background: "#0F1520", borderColor: "#1A2D50" }}>
              <div className="mb-4 text-4xl">{p.icon}</div>
              <h3 className="mb-2 font-display text-lg font-bold text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Story Callout */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-3xl border border-[#FF8A00]/20 p-10"
          style={{ background: "linear-gradient(135deg, #0D1528, #0F1520)" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-4">From Robert Green, Founder</p>
          <blockquote className="text-xl font-medium leading-relaxed text-white italic">
            "I didn't build PEN2PRO for people who already have everything. I built it for people who are starting with nothing but an idea and the refusal to stay stuck. If you believe in this mission early, I want you in as a Founder. Not just as a customer — as someone who helped build it."
          </blockquote>
          <p className="mt-6 text-slate-400">— Robert Green, Founder of PEN2PRO RMIE</p>
          <Link to="/about" className="mt-4 inline-block text-sm font-semibold text-[#FF8A00] hover:underline">
            Read the Full Founder Story →
          </Link>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="mb-12 text-center font-display text-3xl font-black text-white">What's Coming for Founders</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF8A00] via-[#D4A017] to-transparent" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex items-start gap-6 pl-20 relative">
                <div className="absolute left-4 top-2 h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#FF8A00] text-xs font-black text-[#FF8A00]"
                  style={{ background: "#0F1520" }}>
                  {i + 1}
                </div>
                <div className="flex-1 rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">{item.phase}</p>
                  <p className="mt-1 font-bold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <div className="rounded-3xl border p-10"
          style={{ background: "linear-gradient(135deg, #0D1528 0%, #0F1520 100%)", borderColor: "rgba(255,138,0,0.4)" }}>
          <span className="text-4xl">🔥</span>
          <h2 className="mt-4 font-display text-3xl font-black text-white">Founders Don't Wait. They Build.</h2>
          <p className="mt-4 text-slate-400">
            This is your window. Secure Legacy Founder access before launch, lock in your rate, and become part of the team that built PEN2PRO from the ground up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Secure My Founder Spot
            </Link>
            <Link to="/about"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-all">
              Read the Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
