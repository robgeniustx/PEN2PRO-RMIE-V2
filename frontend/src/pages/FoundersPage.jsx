import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Access PEN2PRO for life — all current features plus every future feature as the platform grows." },
  { icon: "🏅", title: "Founder Recognition", body: "Your name listed in the Founders Hall of Record. Recognized as someone who believed before it was obvious." },
  { icon: "⚡", title: "Early Access to Everything", body: "Every new tool, AI upgrade, module, and feature drops to Founders first — weeks before public release." },
  { icon: "🧠", title: "Full Elite-Level AI", body: "Complete RMIE roadmap engine, advanced strategist AI, financial projections, legal foundation, vendor resources — the full stack." },
  { icon: "📊", title: "Premium Roadmap Logic", body: "The deepest output PEN2PRO produces. Industry-specific, tailored, and built around your actual situation." },
  { icon: "💬", title: "Founder Community Access", body: "Private Founders group — connect with other early believers, share wins, get accountability, and grow together." },
  { icon: "🎯", title: "Priority Strategy Support", body: "Founders are always at the front. Your roadmap questions and strategy reviews move to the top of the queue." },
  { icon: "🔒", title: "Price Locked Forever", body: "The Founders offer is only available now. Monthly pricing goes up as the platform grows — you never pay more." },
];

const FAQ = [
  { q: "What is the Legacy Founder offer?", a: "Legacy Founder is a limited lifetime access offer for early believers who want to support PEN2PRO and lock in permanent access before monthly pricing launches." },
  { q: "How many Founder spots are available?", a: "Founder spots are strictly limited. Once the allocation fills, this offer closes permanently." },
  { q: "What happens after I become a Founder?", a: "You get immediate access to all available features, early access to everything launching next, and recognition as a PEN2PRO Founder." },
  { q: "Can I upgrade from Pro or Elite to Founder?", a: "Yes. Contact support or use the upgrade path inside your dashboard to apply any prior payments toward the Founders price." },
  { q: "When does the Founders offer close?", a: "When spots are filled or when PEN2PRO officially launches publicly — whichever comes first." },
];

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            🏅 Legacy Founder — Limited Availability
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Believe Before{" "}
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              It's Obvious.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Legacy Founders are the original believers — the early builders who locked in lifetime access before the platform launched publicly. This offer is limited, it will close, and it won't return at this price.
          </p>

          {/* Urgency badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/10 px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-sm font-bold text-[#D4A017]">Founder spots are limited — first-come, first-served</span>
          </div>

          <div className="mb-8 inline-flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 line-through text-2xl">$1,997</span>
              <span className="rounded-full bg-[#D4A017]/20 px-3 py-0.5 text-xs font-bold text-[#D4A017]">FOUNDERS PRICE</span>
            </div>
            <span className="text-5xl font-black text-white">$997</span>
            <span className="text-slate-400 text-sm">one-time · lifetime access · no monthly fees ever</span>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/founders"
              className="rounded-xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)", boxShadow: "0 0 35px rgba(212,160,23,0.40)" }}>
              Claim Founder Access
            </Link>
            <Link to="/waitlist?tier=founders" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Founder Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Founder Benefits</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever. No Monthly Bills.
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: "rgba(212,160,23,0.25)" }}>
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Why This Matters</div>
          <h2 className="mb-6 text-center font-display text-3xl font-black">
            Built for the Builders Who Were Counted Out
          </h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>PEN2PRO was not built from a perfect path. It was built from rejection, discipline, pressure, and the refusal to stay stuck.</p>
            <p>Robert Green came home from prison, applied for jobs, earned offers — and had them rescinded after background checks. After a day of frustration, he picked his head up and started building. Every lesson from every setback became part of what PEN2PRO is today.</p>
            <p className="border-l-4 border-[#D4A017] pl-5 text-white font-semibold text-lg">
              "If the system would not give me a path, I would build one."
            </p>
            <p>The Founders who invest now are not just buying software — they are investing in a mission. Every Founder helps this platform reach more people who need it: veterans, returning citizens, working-class builders, first-time entrepreneurs, and everyone the traditional system has overlooked.</p>
          </div>
          <div className="mt-8 flex items-center gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              ⚡
            </div>
            <div>
              <p className="font-black text-white">Robert Earl Green Jr.</p>
              <p className="text-sm text-slate-400">Service-Connected Veteran · Entrepreneur · Founder, PEN2PRO</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">FAQ</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Common Questions</h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-2 font-bold text-white">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            This Opportunity Won't Stay Open
          </h2>
          <p className="mb-10 text-slate-400">
            Founder spots are limited. When they're gone, monthly pricing launches at full rate — and the Founders offer closes permanently.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/founders"
              className="rounded-xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)", boxShadow: "0 0 35px rgba(212,160,23,0.35)" }}>
              Claim Your Founder Spot — $997
            </Link>
            <Link to="/waitlist?tier=founders" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Founder Waitlist
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Payments are secure. One-time charge. Lifetime access. No hidden fees.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
