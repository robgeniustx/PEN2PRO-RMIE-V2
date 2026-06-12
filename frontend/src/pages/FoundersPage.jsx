import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDER_PERKS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Access forever. No monthly fees, no renewal, no price increases — ever. Your founding price is locked." },
  { icon: "⚡", title: "Everything in Elite", body: "Full roadmap engine, advanced strategy, financial projections, company formation, branding, marketing, done-with-you guidance, priority support — all of it." },
  { icon: "🏆", title: "Founder Recognition", body: "Your name in the PEN2PRO Founders Hall. Founder badge on your account. Listed as an early believer in the platform." },
  { icon: "🚀", title: "Early Access — First In Line", body: "Every new feature, every new tool, every expansion — Founders get access before anyone else. No waitlist, no upgrade prompts." },
  { icon: "🗓️", title: "Direct Founder Access", body: "Quarterly check-ins with the PEN2PRO team. Your feedback shapes the platform roadmap." },
  { icon: "🤝", title: "Affiliate Partner Status", body: "Legacy Founders automatically qualify for the PEN2PRO affiliate program at the highest commission tier." },
  { icon: "📁", title: "Premium Blueprint Archive", body: "Access to every business blueprint template, case study, industry guide, and resource document in the PEN2PRO library." },
  { icon: "💳", title: "Funding & Credit Concierge", body: "Personalized funding readiness assessment and step-by-step action plan. Not generic advice — your specific credit profile and business stage." },
];

const TIMELINE = [
  { date: "Now", action: "Join the Legacy Founder waitlist and lock your spot" },
  { date: "June 2026", action: "Platform launches — Legacy Founders get first access" },
  { date: "Day 1", action: "Your account is activated with full Elite + Lifetime access" },
  { date: "Ongoing", action: "New features drop — you get them first, automatically" },
];

const WHY_NOW = [
  "Founding spots are capped. When they're gone, they're gone.",
  "The platform price increases after launch. Founding price only exists now.",
  "You get to shape the product — your feedback influences what gets built.",
  "You lock in lifetime access at the earliest, lowest price ever offered.",
];

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,193,7,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[30%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute bottom-20 -left-20 h-[450px] w-[450px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,193,7,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-bold text-[#FFC107] uppercase tracking-widest">
            👑 Legacy Founder — Lifetime Access
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Believe Early.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FFC107, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Access Forever.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Legacy Founder offer is for people who see what PEN2PRO is building and want to be part of it from the ground floor. One price. Lifetime access. Founder status that never expires.
          </p>

          {/* Availability callout */}
          <div className="mx-auto mb-8 max-w-md rounded-2xl border border-[#FFC107]/30 bg-[#FFC107]/10 p-5 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FFC107] mb-1">Limited Availability</p>
            <p className="font-black text-white text-2xl">Founding Spots Available</p>
            <p className="mt-1 text-xs text-slate-400">Once they're gone, this offer closes permanently.</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim My Founder Spot
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FFC107]">Legacy Founder Benefits</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            What Founders Get That Nobody Else Ever Will
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            This is not just a lifetime subscription. This is founding ownership of your place in the PEN2PRO ecosystem.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FOUNDER_PERKS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#FFC107]/20 bg-[#0F1520] p-5 hover:border-[#FFC107]/40 transition-colors">
                <div className="mb-3 text-3xl">{p.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why join now */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why Act Now</div>
              <h2 className="mb-6 font-display text-3xl font-black">
                The Window to Become a Founder Is Temporary.
              </h2>
              <p className="mb-6 text-slate-400 leading-relaxed">
                PEN2PRO is built for people who move. The Founders offer exists before the full launch because early believers deserve to be recognized — and rewarded.
              </p>
              <ul className="space-y-3">
                {WHY_NOW.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 h-5 w-5 rounded-full bg-[#FF8A00] flex items-center justify-center text-[10px] font-black text-[#0A0F1E]">✓</span>
                    <p className="text-sm text-slate-300">{w}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">What Happens After You Join</div>
              <h2 className="mb-6 font-display text-2xl font-black">Your Founder Timeline</h2>
              <div className="space-y-4">
                {TIMELINE.map((t) => (
                  <div key={t.date} className="flex gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                    <div className="shrink-0">
                      <div className="rounded-lg px-3 py-1 text-xs font-black text-[#0A0F1E]"
                        style={{ background: "linear-gradient(90deg, #FF8A00, #FFC107)" }}>
                        {t.date}
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{t.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder letter */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 md:p-10">
            <div className="mb-6 text-xs font-bold uppercase tracking-widest text-[#FFC107]">A Note From the Founder</div>
            <blockquote className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I didn't build PEN2PRO from a comfortable office or a perfect path. I built it from pressure, rejection, discipline, and the refusal to stay stuck.
              </p>
              <p>
                After coming home from prison, I tried to rebuild the right way. I applied for jobs. I interviewed well. I got hired. Then the background checks came back — and offers were rescinded.
              </p>
              <p>
                After a day of moping and frustration, I made a decision. I picked my head up and took off running. If the system was not going to give me a path, I would build one.
              </p>
              <p className="font-bold text-white">
                PEN2PRO is what I wish had existed when I needed it most.
              </p>
              <p>
                If you're reading this and you believe in what we're building — the Founders offer is my way of saying thank you. Lock in your spot. Help shape what this becomes.
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                ⚡
              </div>
              <div>
                <p className="font-black text-white">Robert Earl Green Jr.</p>
                <p className="text-xs text-slate-400">Founder — PEN2PRO · Veteran · Entrepreneur · Author</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #FFC107, #FF8A00)" }}>
            👑
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Become a Legacy Founder
          </h2>
          <p className="mb-3 text-slate-400">
            Lifetime access. Founding pricing. First-in-line status. Founder recognition.
          </p>
          <p className="mb-8 text-sm text-slate-500">
            Available before launch only. Limited spots remaining.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim My Founder Spot →
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare Elite vs Founder
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
