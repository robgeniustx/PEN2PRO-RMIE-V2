import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Use forever. No monthly fees, no annual renewals. Everything PEN2PRO launches is yours." },
  { icon: "⚡", title: "Founder Recognition", body: "Your name in the Founders Hall inside the platform. You helped build this — you'll be recognized for it." },
  { icon: "🚀", title: "Early Access to Every Feature", body: "Every new tool, module, and update — you get it first. Founders test and shape the roadmap before anyone else." },
  { icon: "🧠", title: "Full RMIE Elite Access", body: "Everything in Elite — advanced strategy, financial projections, done-with-you frameworks, resource centers, priority support." },
  { icon: "📈", title: "Founder Strategy Sessions", body: "Scheduled strategy check-ins exclusive to Founders. Direct access to founder-level roadmap review." },
  { icon: "🏆", title: "Premium Roadmap Logic", body: "Your RMIE outputs are processed with the highest-tier strategy depth available on the platform." },
  { icon: "🤝", title: "Inner Circle Access", body: "Exclusive Founder community channel. Connect with other Founders who are building serious businesses." },
  { icon: "🔒", title: "Price Locked Forever", body: "The Founders price is $1,899 — one time. As the platform grows and pricing increases, your access never changes." },
];

const SPOTS_TOTAL = 200;
const SPOTS_CLAIMED = 47; // Update dynamically when real data is available

export default function FoundersPage() {
  const [expanded, setExpanded] = useState(null);
  const spotsLeft = SPOTS_TOTAL - SPOTS_CLAIMED;
  const pctFilled = Math.round((SPOTS_CLAIMED / SPOTS_TOTAL) * 100);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/4 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold text-yellow-400 uppercase tracking-widest">
            👑 Founders Lifetime Access — Limited Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Be One of the
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              200 Founding Members
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            The Founders Lifetime offer is for people who believe in the mission early — before the world catches up. One payment. Lifetime access. Founder recognition. You help shape what PEN2PRO becomes.
          </p>

          {/* Progress bar */}
          <div className="mx-auto mb-8 max-w-sm">
            <div className="mb-2 flex justify-between text-xs font-semibold text-slate-400">
              <span>{SPOTS_CLAIMED} spots claimed</span>
              <span>{spotsLeft} remaining</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#1A2D50]">
              <div
                className="h-2 rounded-full transition-all"
                style={{ width: `${pctFilled}%`, background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">Only 200 Founders spots will ever be sold.</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mb-6">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim Your Founders Spot
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-3">
            <span className="text-2xl font-black text-white">$1,899</span>
            <span className="text-slate-400 text-sm">one-time · pay once, own forever</span>
          </div>
        </div>
      </section>

      {/* What Robert Says */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-yellow-500/20 bg-[#0F1520] p-8">
            <p className="mb-4 text-slate-400 text-xs font-bold uppercase tracking-widest">From the Founder</p>
            <blockquote className="text-lg text-slate-200 leading-relaxed italic mb-6">
              "The people who came in early when nobody was looking — those are the people who deserve the most.
              That's what the Founders tier is about. You're not just a customer. You're part of how this gets built.
              You get lifetime access, recognition, early features, and the knowledge that you backed something real
              before it was obvious."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                ⚡
              </div>
              <div>
                <p className="font-black text-white">Robert Earl Green Jr.</p>
                <p className="text-sm text-slate-400">Founder — PEN2PRO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-yellow-400">Founders Benefits</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Founders get the full platform — every tier, every feature, every future update — for life, for one price.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-yellow-500/20 bg-[#0F1520] p-6 hover:border-yellow-500/40 transition-colors">
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Early Matters */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Why Now</div>
          <h2 className="mb-6 font-display text-3xl font-black">
            The People Who Come Early Always Win
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed max-w-2xl mx-auto">
            PEN2PRO is in its launch phase. The platform is live, the strategy is built, and the roadmap is real.
            Founders who join now will lock in the lowest price this platform will ever have, get recognized forever,
            and help shape what PEN2PRO becomes. In 12 months, this offer will not exist at this price or in this form.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 mb-10">
            {[
              { label: "200 Spots Total", sub: "Only ever 200 Founders — no exceptions" },
              { label: "$1,899 One-Time", sub: "Pay once. Use for life. No renewals." },
              { label: "Full Elite + More", sub: "Every feature + Founder exclusives" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-yellow-500/20 bg-[#0F1520] p-5">
                <p className="font-black text-white mb-1">{item.label}</p>
                <p className="text-xs text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Lock In Your Founders Spot Before They're Gone
          </h2>
          <p className="mb-10 text-slate-400">
            When the 200 spots are gone, this offer closes. Join the Founders waitlist now to secure your place.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim Your Founders Spot
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read the Founder's Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
