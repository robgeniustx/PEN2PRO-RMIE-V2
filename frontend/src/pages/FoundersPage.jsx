import { Link } from "react-router-dom";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", desc: "One investment. Never pay again. All future Pro and Elite features included forever." },
  { icon: "🥇", title: "Legacy Founder Recognition", desc: "Your name in the Founders Hall inside PEN2PRO. Recognized as a builder who believed early." },
  { icon: "⚡", title: "Early Access to Every Feature", desc: "You get every new tool, module, and AI upgrade the moment it launches — before anyone else." },
  { icon: "🤖", title: "Premium Roadmap Logic", desc: "Founders get the most advanced AI roadmap engine available on the platform at all times." },
  { icon: "🎯", title: "Priority Strategy Support", desc: "Direct access to founder-tier guidance, beta features, and strategy support queue." },
  { icon: "📈", title: "Full Financial & Legal Suite", desc: "Everything in Elite plus first access to new financial projection, legal foundation, and vendor tools." },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #9B59B6 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#9B59B6]/40 bg-[#9B59B6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9B59B6]">
            Legacy Founder — Limited Access
          </span>
          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">
            Be One of the Founders.<br />
            <span className="text-[#9B59B6]">Own It Forever.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            The Legacy Founder tier is for early believers. A small number of founding members
            who lock in lifetime access, permanent recognition, and every premium feature
            the platform will ever build — in exchange for joining now, before the doors open wide.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-4 text-base font-black text-white transition"
              style={{ background: "linear-gradient(135deg, #6C3483 0%, #9B59B6 50%, #A569BD 100%)" }}
            >
              Claim Your Founder Spot
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-[#9B59B6] hover:text-white"
            >
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Founder spots are limited and will not reopen once filled.
          </p>
        </div>
      </section>

      {/* Scarcity / urgency bar */}
      <div className="border-y border-[#2A1840] bg-[#0F0A1A] py-4 px-5 text-center">
        <p className="text-sm font-semibold text-[#9B59B6]">
          ⚠️ Legacy Founder access is limited. Once spots are filled, this tier closes permanently.
        </p>
      </div>

      {/* Benefits */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-black text-white">What Founders Receive</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[#2A1840] bg-[#0E0818] p-5 transition hover:border-[#9B59B6]/50"
              >
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now section */}
      <section className="py-12 px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-5 text-xl font-black text-white">Why Join as a Founder Now?</h3>
          <p className="mb-6 text-slate-400 leading-relaxed">
            PEN2PRO was built from lived experience, not a venture-backed playbook. Robert Green created
            this platform after real setbacks — job offers rescinded after background checks, doors
            closing after they looked open — and turned that pain into a tool built for people just like him.
          </p>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Founding members are not just customers. They are the first believers. They fund the mission,
            shape the roadmap, and get recognized forever as the people who helped PEN2PRO become
            what it is.
          </p>
          <Link
            to="/about"
            className="text-sm font-semibold text-[#9B59B6] underline underline-offset-4 hover:text-white"
          >
            Read the Founder Story →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="rounded-2xl p-8"
            style={{ background: "linear-gradient(135deg, #0E0818 0%, #1A0E2A 100%)", border: "1px solid #9B59B6" }}
          >
            <h2 className="mb-3 text-2xl font-black text-white">Claim Your Legacy Founder Spot</h2>
            <p className="mb-6 text-slate-400">
              Join the waitlist now. When we launch, Founder spots go to the list first — and they
              do not reopen.
            </p>
            <Link
              to="/waitlist?tier=founders"
              className="inline-block rounded-xl px-10 py-4 text-base font-black text-white transition"
              style={{ background: "linear-gradient(135deg, #6C3483 0%, #9B59B6 100%)" }}
            >
              I'm In — Reserve My Spot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
