import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "One-time founding investment. Full access to PEN2PRO forever — no recurring subscription, no price increases." },
  { icon: "🏆", title: "Founder Recognition", body: "Permanent Founder badge on your profile. Your name in the founding member roll. You built this with us." },
  { icon: "🚀", title: "Early Access to Every Feature", body: "Every new module, tool, and upgrade gets to you first. Founders shape the product roadmap." },
  { icon: "👑", title: "Full Elite Feature Access", body: "Everything in Elite — advanced strategist guidance, financial projections, legal foundation, vendor center, funding readiness, and priority support." },
  { icon: "🎯", title: "Premium Roadmap Logic", body: "Access to the deepest AI output, multi-scenario planning, advanced monetization modeling, and execution support." },
  { icon: "💬", title: "Founder Community Access", body: "Direct access to the PEN2PRO founders group — real entrepreneurs building real businesses together." },
  { icon: "📞", title: "Direct Founder Access", body: "Access to Robert Green directly. Strategic guidance from the founder for serious questions and pivotal decisions." },
  { icon: "📜", title: "Co-Builder Status", body: "Your feedback shapes the platform. Founders help define new features, modules, and the direction of PEN2PRO." },
];

const SPOTS = 50;

export default function FoundersPage() {
  const { pathname } = useLocation();
  const isLegacy = pathname === "/legacy-founder";

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#D4A017" }}>
            🏆 {isLegacy ? "Legacy Founder" : "PEN2PRO Founders"} — Limited Access
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build PEN2PRO
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              With Us. For Life.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Legacy Founder program is for the first {SPOTS} people who believed in PEN2PRO before it was finished. One investment. Full access. For life.
          </p>

          {/* Scarcity badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)" }}>
              <span className="text-lg">🏆</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-black text-white">Only {SPOTS} Founder Spots Available</div>
              <div className="text-xs text-slate-400">Once they're gone, this offer closes permanently.</div>
            </div>
          </div>

          <div className="mt-8 inline-flex flex-col items-center gap-1">
            <div className="text-5xl font-black text-white">$497
              <span className="ml-3 text-2xl line-through text-slate-600">$997</span>
            </div>
            <div className="text-sm font-semibold" style={{ color: "#D4A017" }}>One-time investment · Lifetime access · No recurring fees</div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim Your Founder Spot
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Founder story callout */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#D4A017]/20 bg-[#0F1520] p-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center h-14 w-14 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              <span className="text-2xl">⚡</span>
            </div>
            <p className="mb-6 text-lg text-slate-300 leading-relaxed">
              "I didn't build PEN2PRO from a comfortable office or a perfect path. I built it from pressure, rejection, discipline, and the refusal to stay stuck. The Legacy Founders are the people who believed in that mission early — when it was still being built."
            </p>
            <div>
              <p className="font-black text-white">Robert Earl Green Jr.</p>
              <p className="text-sm text-slate-400">Service-Connected Veteran · Founder, PEN2PRO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Founder Benefits</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Legacy Founders don't just get access to PEN2PRO. They help build it. Full access, lifetime pricing, and a seat at the table.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-start gap-5 rounded-2xl border border-[#D4A017]/20 bg-[#0F1520] p-6 hover:border-[#D4A017]/40 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                  style={{ background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.2)" }}>
                  {b.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{b.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-display text-3xl font-black">What Happens After You Join</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Submit your founder waitlist form", body: "Name, email, and business idea. We'll confirm your spot and add you to the founder roll." },
              { step: "02", title: "Receive your founder confirmation", body: "You'll get a confirmation email with your founder number and next steps." },
              { step: "03", title: "Get early platform access", body: "As we launch features, you'll be first in line with full founder access and no additional charges." },
              { step: "04", title: "Help shape the roadmap", body: "Your feedback directly influences new features, tools, and the direction of PEN2PRO." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black"
                  style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", color: "#0A0F1E" }}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            This Is Your Moment.
          </h2>
          <p className="mb-8 text-slate-400">
            Only {SPOTS} spots. One investment. Lifetime access. Be part of something built for people who were told they wouldn't make it.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim Your Founder Spot
            </Link>
            <Link to="/about"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read the Founder Story
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Payments live soon. Joining the waitlist secures your spot and founding rate.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
