import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const FOUNDERS_FEATURES = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "One payment. No subscriptions. No renewals. Access to PEN2PRO for life — including all future features added to the platform." },
  { icon: "🗺️", title: "Full RMIE Blueprint Engine", body: "Complete RMIE roadmap generation with 7/30/90-day plans, monetization strategy, business foundation checklist, and launch execution support." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "The Strategist plan builder: a 12-week path to your revenue goal with weekly targets, capacity checks, price scenarios, and proof checkpoints." },
  { icon: "⚡", title: "P2P Command Center", body: "A workspace for contacts, leads, pipeline, tasks, estimates and invoices. Records save to your account and export to CSV." },
  { icon: "📞", title: "P2P AI Voice Agent", body: "AI voice agent for calls, lead capture and follow-ups. It runs on your own Twilio and ElevenLabs accounts, which you connect during setup." },
  { icon: "🌐", title: "Website Builder", body: "Build your business website with AI-generated copy, landing pages, contact forms, and domain guidance." },
  { icon: "💳", title: "Funding & Credit Readiness", body: "Full funding readiness tools, credit profile strategy, document vault, tradeline guidance, and lender preparation resources." },
  { icon: "📊", title: "12-Month 10M Strategist Framework", body: "A structured 12-month business scaling framework built for founders who want to build toward a $10M-level business structure." },
  { icon: "🏆", title: "Founder Recognition", body: "Legacy Founder badge, early supporter recognition, and priority placement as community features roll out." },
  { icon: "🔓", title: "First Access to New Features", body: "Founders get every new feature first — before general release, before Pro, before Elite." },
];

export default function FoundersPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "founders" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setError(result?.error || "Checkout is not available right now. Please try again shortly or contact support.");
    } catch {
      setError("Unable to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2a2010] bg-[#15120a] px-4 py-1.5 text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            🏆 Legacy Founders — Only 200 Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Founders Lifetime Access.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #d4af37, #f7d675)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              One Payment. Forever.
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Founders Lifetime offer is the most powerful position in PEN2PRO — full platform access for life, every feature we will ever ship, and early adopter recognition that will never be available again.
          </p>

          {/* Urgency */}
          <div className="mb-8 rounded-2xl border border-[#2a2010] bg-[#15120a] p-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#d4af37]">Limited Founders Offer</p>
            <p className="mb-4 text-sm text-slate-400">Capped at 200 Founders accounts. Once they are claimed, this lifetime price closes.</p>
            <p className="font-display text-3xl font-black text-white">
              $1,899 <span className="text-lg font-normal text-slate-400">for life</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_40px_rgba(212,175,55,0.45)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout..." : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#2a2010] px-8 py-3.5 text-sm font-semibold text-[#d4af37] hover:text-white hover:border-[#d4af37] transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
          {error && (
            <p className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {error}
            </p>
          )}
        </div>
      </section>

      {/* What's Included */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#d4af37]">Founders Lifetime Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything. For Life.</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The Founders tier is not just a plan. It is the original investor position in PEN2PRO. You get every feature we build, every update we ship, and every tool we add — permanently locked in at one price.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {FOUNDERS_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-[#2a2010] bg-[#0e0d08] p-5">
                <div className="shrink-0 text-2xl">{f.icon}</div>
                <div>
                  <h3 className="mb-1 font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Founders */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why Founders?</div>
          <h2 className="mb-6 text-center font-display text-3xl font-black md:text-4xl">A Lifetime Price For Early Believers</h2>
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              PEN2PRO is still being built. The platform is actively growing, features are being added, and the roadmap is aggressive. The Founders offer is designed for early believers who want to lock in access before the price increases with each release.
            </p>
            <p>
              Pro is $249/month and Elite is $499/month. Founders members get everything in both, for life, for one payment.
            </p>
            <p className="border-l-4 border-[#d4af37] pl-5 text-lg font-bold text-white">
              200 spots. One price. No recurring fees. No exceptions.
            </p>
            <p>
              Founders will be recognized inside the platform. As the community grows, as new features drop, and as PEN2PRO becomes a full business operating system — Founders will have been here from the beginning.
            </p>
            <p>
              That means something. Not just financially. It means you believed in the mission before the rest of the world caught up.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2a2010] bg-[#15120a] px-4 py-1.5 text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            🏆 Only 200 Spots Available
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Claim Your Founders Position</h2>
          <p className="mb-10 text-slate-400">
            This is the original offer. Once the 200 spots are filled, Founders Lifetime will never be available at this price again. Claim your spot now.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_40px_rgba(212,175,55,0.45)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout..." : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#2a2010] px-8 py-3.5 text-sm font-semibold text-[#d4af37] hover:border-[#d4af37] transition-colors"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Not ready to commit? Start with the{" "}
            <Link to="/starter" className="text-[#FF8A00] hover:underline">Free Roadmap</Link>{" "}
            or explore{" "}
            <Link to="/pro" className="text-[#2d9cff] hover:underline">Pro</Link>{" "}
            and{" "}
            <Link to="/elite" className="text-[#d4af37] hover:underline">Elite</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
