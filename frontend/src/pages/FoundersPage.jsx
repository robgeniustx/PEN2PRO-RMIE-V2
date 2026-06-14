import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const FOUNDERS_FEATURES = [
  { icon: "♾️", title: "Lifetime PEN2PRO Access",       body: "Pay once. Access the platform forever. Every future feature included at no extra cost." },
  { icon: "🏆", title: "Everything in Elite",            body: "Full RMIE roadmap, AI refinement, financial projections, funding resources, done-with-you guidance." },
  { icon: "⚡", title: "P2P Command Center",             body: "Business CRM, pipeline management, lead inbox, calendar, automation, and reputation tools." },
  { icon: "🎙️", title: "P2P AI Voice Agent",            body: "Autonomous AI voice agent to call leads, follow up, book appointments, and run outreach campaigns." },
  { icon: "🌐", title: "Website Builder",                body: "AI-powered website builder with landing pages, contact forms, SEO optimization, and domain connection." },
  { icon: "🧠", title: "12-Month 10M Strategist",       body: "A 12-month framework built around the 10 moves that matter most for getting to $1M and beyond." },
  { icon: "🏅", title: "Founder Badge & Recognition",   body: "Early-adopter recognition, Founder badge inside the platform, and lifetime founder status." },
  { icon: "🚀", title: "Early Access to New Features",  body: "Founders see and test every new feature before general release. You help shape the platform." },
];

const SPOTS_TOTAL = 200;

export default function FoundersPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function handleClaim() {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier: "founders" });
    if (result.checkout_url) {
      window.location.href = result.checkout_url;
    } else {
      window.location.href = "/waitlist?tier=founders";
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* ambient bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.14) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#D4A017" }}>
            🏆 FOUNDERS LIFETIME — ONLY {SPOTS_TOTAL} SPOTS
          </div>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight md:text-6xl">
            Claim Your Spot.
            <br />
            <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Own It for Life.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Founders Lifetime is the highest tier of PEN2PRO — one payment, permanent access, every feature forever. Built for early believers who are ready to build something real.
          </p>

          {/* Price display */}
          <div className="mt-8 inline-block rounded-2xl border border-yellow-500/30 bg-yellow-500/8 px-10 py-6">
            <div className="text-xs font-bold uppercase tracking-widest text-yellow-500 mb-1">One-Time Investment</div>
            <div className="font-display text-6xl font-black" style={{ color: "#D4A017" }}>$1,899</div>
            <div className="text-sm text-slate-500 mt-1">for life · no recurring fees · ever</div>
          </div>

          {/* Spots warning */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/8 px-4 py-2 text-xs font-bold text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
            Limited availability — only {SPOTS_TOTAL} Founders spots exist
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleClaim} disabled={loading}
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              {loading ? "Loading…" : "Claim Founders Lifetime →"}
            </button>
            <Link to="/waitlist?tier=founders"
              className="rounded-2xl border border-yellow-500/30 px-8 py-4 text-base font-semibold text-yellow-400 hover:border-yellow-400 transition">
              Join Founders Waitlist
            </Link>
          </div>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>What You Get</p>
            <h2 className="font-display text-4xl font-black">Founders Lifetime includes everything</h2>
            <p className="mt-3 text-slate-500">Every tool, every tier, every feature — past and future.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border p-6 hover:border-yellow-500/40 transition-all"
                style={{ borderColor: "rgba(212,160,23,0.2)", background: "#080C14" }}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FOUNDERS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Why Founders</p>
            <h2 className="font-display text-3xl font-black">Built for early believers</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Why only 200 spots?", a: "Founders get a level of access, recognition, and shaping power that can only be given to a small group. When the 200 spots are gone, this tier closes permanently." },
              { q: "What happens if PEN2PRO adds new features?", a: "Founders get every new feature automatically — no upgrade fees, no new tiers, no catching up. You own it all from day one." },
              { q: "Is there a payment plan?", a: "Join the waitlist and we will work with serious Founders on payment options. Reach out after joining." },
              { q: "What if I'm not satisfied?", a: "There is a 30-day money-back guarantee. If PEN2PRO doesn't deliver value, we will refund your investment." },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h3 className="mb-2 font-bold text-white">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">This is a once-in-a-lifetime offer.</h2>
          <p className="mt-4 text-slate-400">
            When the 200 spots are gone, Founders Lifetime closes. The price goes to market rate. This moment won't come back.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleClaim} disabled={loading}
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              {loading ? "Loading…" : "Claim Founders Lifetime — $1,899"}
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Not ready to commit?{" "}
            <Link to="/waitlist?tier=founders" className="text-yellow-400 font-semibold hover:underline">
              Reserve your spot on the Founders Waitlist →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
