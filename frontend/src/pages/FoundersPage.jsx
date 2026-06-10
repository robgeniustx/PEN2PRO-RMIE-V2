import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Use PEN2PRO for life — every feature, every upgrade, every new tool we add." },
  { icon: "🏆", title: "Founder Recognition", body: "Permanent Founder badge on your profile and early-adopter status in the PEN2PRO community." },
  { icon: "⚡", title: "Early Access to Everything", body: "Be the first to access new agents, tools, and platform features before general release." },
  { icon: "🧠", title: "Premium RMIE Engine", body: "The deepest roadmap logic in the platform — financial projections, legal foundation, full execution support." },
  { icon: "💳", title: "Credit & Funding Vault", body: "Full funding readiness, credit architecture, and vendor partner access — all unlocked." },
  { icon: "🤝", title: "Founder Community Access", body: "Private group of the first 200 Founders — direct access, peer accountability, and real support." },
  { icon: "📞", title: "Founder Strategy Session", body: "A dedicated onboarding call to map your roadmap and make sure you're set up for execution." },
  { icon: "🎯", title: "Priority Everything", body: "First in line for new features, support, integrations, and platform improvements." },
];

const SPOTS_TOTAL = 200;
const SPOTS_CLAIMED = 47;

export default function FoundersPage() {
  const [params] = useSearchParams();
  const fromPath = params.get("from") || "";
  const isLegacy = fromPath.includes("legacy") || window.location.pathname.includes("legacy");

  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-5 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,215,0,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400">
            <span>⭐</span> Legacy Founders Lifetime
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            Only 200 Spots.<br />
            <span style={{ background: "linear-gradient(90deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Lifetime Access.
            </span>
          </h1>
          <p className="mb-6 text-lg text-slate-400 max-w-2xl mx-auto">
            This is the founding offer. One payment. No subscription. Full access to every PEN2PRO tool, agent, and feature — forever. Built for the people ready to build right now.
          </p>

          {/* Spots counter */}
          <div className="mb-8 mx-auto max-w-sm rounded-2xl border border-yellow-500/30 bg-[#0D1626] p-5">
            <div className="mb-2 text-sm text-slate-400 font-semibold">Founders Spots Claimed</div>
            <div className="mb-3 h-2.5 rounded-full bg-[#1A2235] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(SPOTS_CLAIMED / SPOTS_TOTAL) * 100}%`,
                  background: "linear-gradient(90deg,#FFD700,#FFA500)",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span className="font-bold text-yellow-400">{SPOTS_CLAIMED} of {SPOTS_TOTAL} claimed</span>
              <span>{SPOTS_TOTAL - SPOTS_CLAIMED} spots remaining</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] transition-transform hover:scale-105"
              style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", boxShadow: "0 0 28px rgba(255,215,0,0.4)" }}
            >
              Claim Founders Spot →
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-yellow-500/30 px-8 py-4 text-base font-semibold text-yellow-400 hover:border-yellow-400 hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">$1,899 one-time · Never pay again · 200 spots only</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-black">What Founders Get</h2>
          <p className="mb-12 text-center text-slate-400">Every feature. Every upgrade. For life.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-yellow-500/20 bg-[#0D1220] p-6 hover:border-yellow-500/50 transition-colors"
              >
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="py-16 px-5 bg-[#0A0F1E]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-2xl font-black">Why This Matters</h2>
          <div className="space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              PEN2PRO was built from the ground up by someone who couldn't find a seat at the table — so he built his own.
              The Founders offer exists because the people who believed early should own a piece of what comes next.
            </p>
            <p>
              Monthly plans will always be available. But Founders Lifetime pricing will close at 200 spots — and it will not reopen.
            </p>
            <p className="text-white font-semibold">
              This is the earliest, lowest price you will ever see for lifetime PEN2PRO access.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-xl text-center">
          <blockquote className="text-xl font-semibold text-slate-300 italic leading-relaxed">
            "The Founders offer is for people who don't need to be sold — they just need to know the door is open."
          </blockquote>
          <p className="mt-4 text-sm text-yellow-400 font-bold">— Robert Green, Founder · PEN2PRO</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-black">
            {SPOTS_TOTAL - SPOTS_CLAIMED} Spots Left
          </h2>
          <p className="mb-8 text-slate-400">Once 200 Founders spots are claimed, this offer closes permanently. Join the waitlist to lock in your spot.</p>
          <Link
            to="/waitlist?tier=founders"
            className="inline-block rounded-xl px-10 py-5 text-lg font-black text-[#0A0F1E] transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", boxShadow: "0 0 32px rgba(255,215,0,0.4)" }}
          >
            Claim Your Founders Spot →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
