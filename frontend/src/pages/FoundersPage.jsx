import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LAUNCH_DATE = new Date("2026-06-15T00:00:00Z");

const FOUNDERS_BENEFITS = [
  {
    icon: "♾️",
    title: "Lifetime Platform Access",
    body: "One payment. Full access forever. No monthly fees, no renewals — as the platform grows, your access grows with it.",
  },
  {
    icon: "🧠",
    title: "Everything in Elite",
    body: "Full RMIE blueprint, advanced strategy, financial projections, company formation guidance, vendor resources, trademark guidance, and done-with-you support.",
  },
  {
    icon: "🚀",
    title: "RMIE Launch & Scaling Roadmap",
    body: "A premium 12-month strategist framework covering launch, growth, monetization scaling, and execution — designed for serious builders.",
  },
  {
    icon: "⚙️",
    title: "P2P Command Center — Full Access",
    body: "Complete CRM, pipeline, leads, contacts, automations, calendar, and business operations in one platform.",
  },
  {
    icon: "🎙️",
    title: "P2P AI Voice Agent",
    body: "AI-powered voice agent for customer calls, lead qualification, and business communication — full access included.",
  },
  {
    icon: "🌐",
    title: "Website Builder — Full Access",
    body: "Build and launch your business website with the PEN2PRO Website Builder, including templates and domain connection.",
  },
  {
    icon: "💳",
    title: "Funding & Credit Tools",
    body: "Full funding readiness system, credit-building strategy, business bank setup, tradeline approach, and vendor credit guidance.",
  },
  {
    icon: "🏷️",
    title: "Founder Recognition",
    body: "Your name in the founding cohort. Recognized as someone who believed in PEN2PRO from the beginning — before the rest of the world caught up.",
  },
];

function useCountdown() {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function CountBox({ val, label }) {
  return (
    <div className="min-w-[70px] rounded-xl border border-[#d4af37]/40 bg-[#15120a] px-4 py-3 text-center">
      <p className="font-display text-2xl font-black text-[#f7d675]">
        {String(val ?? 0).padStart(2, "0")}
      </p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]/60">{label}</p>
    </div>
  );
}

export default function FoundersPage() {
  const t = useCountdown();

  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-48 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center relative">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#15120a] px-4 py-1.5 text-xs font-bold text-[#f7d675] uppercase tracking-widest">
            🏅 Founders Lifetime — Only 200 Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Be a Founder.
            <br />
            <span style={{ background: "linear-gradient(90deg, #f7d675, #d4af37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Own Your Access Forever.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-6">
            This is a once-in-a-platform offer. Pay once. Get lifetime access to every current and future PEN2PRO tool — RMIE, Command Center, Voice Agent, Website Builder, funding readiness, and more.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold text-[#d4af37]">Offer closes at launch</p>
            <div className="flex justify-center gap-2">
              <CountBox val={t.days} label="Days" />
              <CountBox val={t.hours} label="Hours" />
              <CountBox val={t.minutes} label="Min" />
              <CountBox val={t.seconds} label="Sec" />
            </div>
          </div>

          <p className="mb-3 text-3xl font-black text-white">$1,899 <span className="text-[#d4af37] text-base font-semibold">one-time payment</span></p>
          <p className="mb-6 text-sm text-slate-500">Only 200 Founder spots available. This offer will not be available after launch.</p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-xl px-10 py-4 text-sm font-black text-[#081226] shadow-[0_0_45px_rgba(212,175,55,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #d4af37 0%, #f7d675 100%)" }}
            >
              Claim Founders Lifetime — $1,899
            </Link>
            <Link to="/waitlist?tier=founders" className="rounded-xl border border-[#d4af37]/30 px-8 py-3.5 text-sm font-semibold text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">
              Join Founders Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── URGENCY BANNER ── */}
      <section className="px-5 py-6 bg-[#15120a] border-y border-[#d4af37]/30">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold text-[#f7d675]">
            🏅 Only 200 Founders spots will ever be offered. Once they are gone, the lifetime pricing is gone forever.
            After launch, PEN2PRO moves to monthly/annual subscriptions only.
          </p>
        </div>
      </section>

      {/* ── BENEFITS GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#d4af37]">What Founders Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything. For Life.</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Founders get every tool PEN2PRO offers — now and in the future — for a single one-time payment.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS_BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#d4af37]/30 bg-[#15120a] p-6 hover:border-[#d4af37]/60 transition-colors">
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-[#f7d675]">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#15120a] p-8">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#d4af37]">Why This Offer Exists</div>
            <h3 className="mb-6 font-display text-2xl font-black">PEN2PRO Was Not Built From Comfort</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Robert Green built PEN2PRO from lived experience — not theory, not a business school classroom, and not a comfortable starting line.
              </p>
              <p>
                After coming home from prison, Robert tried to rebuild the right way. He applied for jobs, interviewed well, and received offers. Then the background checks came back. The offers were rescinded.
              </p>
              <p className="border-l-4 border-[#d4af37] pl-5 text-lg font-bold text-white">
                After a day of moping, he picked his head up and took off running.
              </p>
              <p>
                That decision became the foundation for everything — businesses, mentorship, authorship, community work, and PEN2PRO.
              </p>
              <p>
                The Founders offer exists because Robert believes in building with the people who believed in this platform first. Founders are not customers — they are partners in what comes next.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                ⚡
              </div>
              <div>
                <p className="font-bold text-white">Robert Earl Green Jr.</p>
                <p className="text-xs text-slate-400">Service-Connected Veteran · Entrepreneur · Founder of PEN2PRO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">This Offer Has a Deadline.</h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            200 spots. One-time payment. Lifetime access. After the 200 Founders cohort is full — or at launch — this price is gone forever. This is the only way to get PEN2PRO for life.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-10 py-4 text-sm font-black text-[#081226] shadow-[0_0_45px_rgba(212,175,55,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #d4af37 0%, #f7d675 100%)" }}>
              Claim Founders Lifetime — $1,899
            </Link>
            <Link to="/waitlist?tier=founders" className="rounded-xl border border-[#d4af37]/30 px-8 py-3.5 text-sm font-semibold text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">
              Join Founders Waitlist
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">Not ready yet? <Link to="/pricing" className="text-slate-400 hover:text-white">Compare all plans</Link> or <Link to="/starter" className="text-slate-400 hover:text-white">start free</Link>.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
