import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDER_PERKS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Own it forever. All current modules and every feature we build — no monthly fees, ever." },
  { icon: "👑", title: "Founder Recognition", body: "Your name in the PEN2PRO Founders Hall. Recognized as someone who believed before proof existed." },
  { icon: "🚀", title: "First Access — Every Feature", body: "Every new tool, module, and AI update before it's released to any other subscriber." },
  { icon: "🧠", title: "Maximum RMIE Depth", body: "The deepest roadmap logic, most advanced AI prompting, and highest-quality business output available on the platform." },
  { icon: "📊", title: "Full Business Plan Output", body: "Investor-ready business plan with 12-month financial projections, P&L modeling, and executive summary." },
  { icon: "💰", title: "Complete Credit & Funding Intelligence", body: "Business credit tiers, fundability score, lender prep, vendor tradelines, net-30 accounts, and grant strategy." },
  { icon: "🤝", title: "Direct Founder Access", body: "Priority access to Robert Green and the PEN2PRO team — strategy sessions, roadmap reviews, and direct guidance." },
  { icon: "🏢", title: "Multi-Seat Team Access", body: "Founders get team seats for contractors, employees, or clients as the platform expands." },
  { icon: "🏛️", title: "Full Legal Foundation Stack", body: "LLC, EIN, trademark readiness, operating agreement checklist, registered agent guidance, and company formation tools." },
  { icon: "🎯", title: "Advanced Accelerator Tools", body: "30/60/90-day sprint plans, revenue acceleration, sales scripts, customer acquisition funnels, and marketing strategy." },
];

const WHAT_FOUNDER_GETS = [
  "Everything in Pro",
  "Everything in Elite",
  "Lifetime access",
  "Founder Hall recognition",
  "First access to all features",
  "Direct founder contact",
  "Full business plan generator",
  "12-month financial projections",
  "Multi-seat team access",
  "Maximum RMIE depth",
  "Complete funding roadmap",
  "Business credit build plan",
  "Vendor tradeline strategy",
  "Advanced accelerator tools",
  "Priority support forever",
  "Agency features (when live)",
];

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* ── RADIANT BG ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 left-1/4 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.22) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,160,23,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            👑 Legacy Founder Access — Limited Seats
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build the Future With Us.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #D4A017, #FF8A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Own It Forever.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Legacy Founders are the people who believed in PEN2PRO before it was finished. In exchange for that belief, they get lifetime access, founder recognition, maximum platform depth, and direct access to Robert Green.
          </p>

          {/* Pricing card */}
          <div className="mx-auto mb-6 max-w-sm rounded-2xl border border-[#D4A017]/40 bg-gradient-to-br from-[#D4A017]/10 to-transparent p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A017] mb-2">Founding Price</p>
            <p className="text-6xl font-black text-white">
              $997
            </p>
            <p className="text-lg text-[#D4A017] font-bold mt-1">one-time payment</p>
            <p className="text-sm text-slate-500 mt-2">Lifetime access. No monthly fees. Ever.</p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1.5 text-xs font-bold text-red-400">
              🔒 Limited to 100 Founding Members
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold"
            >
              Claim Your Founder Seat
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT FOUNDERS GET ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            Founder Benefits
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever. From Day One.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Legacy Founders don't get a tier — they get the whole platform. Now and always.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {FOUNDER_PERKS.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl bg-[#0F1520] p-6"
                style={{ border: "1px solid rgba(212,160,23,0.2)" }}
              >
                <div className="mt-1 shrink-0 text-2xl">{f.icon}</div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE ACCESS GRID ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            Full Access List
          </div>
          <h2 className="mb-12 font-display text-2xl font-black">
            Every Feature. Every Tier. For Life.
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {WHAT_FOUNDER_GETS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl bg-[#0F1520] px-3 py-3 text-left"
                style={{ border: "1px solid rgba(212,160,23,0.15)" }}
              >
                <span className="text-[#D4A017] shrink-0 font-bold">✓</span>
                <span className="text-xs font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FOUNDERS SECTION ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl p-10"
            style={{ border: "1px solid rgba(212,160,23,0.3)", background: "linear-gradient(135deg, rgba(212,160,23,0.08) 0%, transparent 70%)" }}
          >
            <div className="mb-4 text-center text-5xl">👑</div>
            <h2 className="mb-5 text-center font-display text-2xl font-black md:text-3xl">
              Why the Founders Tier Exists
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-[1.05rem]">
              <p>
                PEN2PRO was not built from a comfortable office or a perfect path. It was built from pressure, lived experience, rejection, and the refusal to stay stuck.
              </p>
              <p>
                The people who believe in this platform early — before it's proven, before it's famous, before the world knows it — deserve something in return. Not a discount. A position.
              </p>
              <p className="font-semibold text-white">
                Founder status is permanent. You help shape the direction of PEN2PRO. You get the platform at its best. And you never pay another dollar when it scales.
              </p>
              <p>
                This is for the people who recognize what this is before everyone else does. For the early believers. For the people who've been where Robert has been and know what a real second-chance engine is worth.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/waitlist?tier=founders"
                className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
              >
                Become a Founder
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Read Robert's Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            Common Questions
          </div>
          <h2 className="mb-12 text-center font-display text-2xl font-black">
            Founder FAQ
          </h2>
          <div className="space-y-4">
            {[
              { q: "Is this really a one-time payment?", a: "Yes. $997 one time. No monthly charges. No annual renewals. You own your Founder seat permanently." },
              { q: "What happens when new features are added?", a: "You get them. Every feature, every module, every upgrade — at no additional cost. This is lifetime access." },
              { q: "Is there a limit on Founder seats?", a: "Yes. We are limiting Legacy Founder access to 100 seats. Once they're filled, this offer closes permanently." },
              { q: "What if PEN2PRO isn't fully live yet?", a: "Founders get early access as features roll out. You're investing in where this is going, not just where it is today." },
              { q: "Can I get a refund?", a: "Founder seats are non-refundable once claimed. This is early-adopter positioning, not a standard subscription." },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6"
              >
                <h3 className="mb-2 font-bold text-white">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#D4A017]">
            100 Seats. Limited Time.
          </p>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Don't Watch Someone Else Take Your Seat
          </h2>
          <p className="mb-10 text-slate-400">
            Join the waitlist to secure your Founder position. We'll reach out to confirm your seat and payment details.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold"
            >
              Claim Founder Seat — $997
            </Link>
            <Link
              to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              See Elite Instead
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
