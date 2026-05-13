import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const WHO_ITS_FOR = [
  { icon: "🎖️", label: "Veterans" },
  { icon: "🔄", label: "Returning Citizens" },
  { icon: "👷", label: "Working-Class Builders" },
  { icon: "💡", label: "First-Time Entrepreneurs" },
  { icon: "📱", label: "Creators & Side Hustlers" },
  { icon: "👩‍👧", label: "Parents Building Income" },
  { icon: "🏪", label: "Small Business Owners" },
  { icon: "🚀", label: "People Who've Been Counted Out" },
];

const MISSION_POINTS = [
  {
    icon: "🗺️",
    title: "Realistic Roadmaps",
    body: "Not motivation — actual steps. Business structure, launch plan, monetization strategy, and execution support in one place.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness",
    body: "Most people with ideas don't know if they're fundable. RMIE tells you where you stand and how to get ready.",
  },
  {
    icon: "🏗️",
    title: "Business Foundation First",
    body: "LLC, EIN, business bank, branding, offer structure — the foundations most coaches skip over.",
  },
  {
    icon: "📈",
    title: "Revenue Intelligence",
    body: "Pricing, outreach, sales scripts, 30/60/90-day growth plans — built around your specific idea and market.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ The Story Behind PEN2PRO
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Built From Setbacks.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Designed to Build Futures.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            PEN2PRO RMIE — Rapid Monetization Intelligence Engine — was built by someone who needed it and couldn't find it. This is that story.
          </p>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Founder Story
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.85] text-slate-300">
            <p>
              Robert Green did not create PEN2PRO from a comfortable office or a perfect path. He created it from pressure, rejection, discipline, and the refusal to stay stuck.
            </p>
            <p>
              After coming home from prison, Robert tried to rebuild his life the way people tell you to rebuild it — apply for jobs, show up professionally, interview well, and wait for somebody to give you a chance. More than once, he earned the opportunity. The interviews went well. The job offers came.
            </p>
            <p className="font-semibold text-white text-xl border-l-4 border-[#FF8A00] pl-5">
              Then the background checks followed. The offers were rescinded.
            </p>
            <p>
              That kind of rejection can break a person. For a moment, it almost did. After a day of moping, frustration, and asking why doors kept closing, Robert made a decision. He picked his head up and took off running.
            </p>
            <p className="font-semibold text-white">
              If the system would not give him a path, he would build one.
            </p>
            <p>
              That decision became the foundation for everything that followed — business ownership, mentorship, authorship, community work, XLR8 Pressure Washing Services, XLR8 Trade Academy, and now PEN2PRO.
            </p>
            <p>
              PEN2PRO is Robert's way of sharing the success, the heartbreak, the lessons, the failures, and the strategies with the world. It is built for people with ideas but no structure. People with skills but no roadmap. People with ambition but limited resources. People who have been overlooked, underestimated, or counted out.
            </p>
            <p>
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — was created to help users turn an idea into a realistic action plan. It gives people more than motivation. It gives them business structure, launch steps, monetization strategy, credit and funding readiness, branding direction, and a path toward execution.
            </p>
            <p className="text-lg font-bold text-white">
              This is not just software. This is a second-chance engine, a business builder, and a roadmap for people ready to stop waiting for permission.
            </p>
          </div>

          {/* Founder Badge */}
          <div className="mt-12 flex items-center gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              ⚡
            </div>
            <div>
              <p className="font-black text-white text-lg">Robert Earl Green Jr.</p>
              <p className="text-sm text-slate-400 mt-0.5">
                Service-Connected Veteran · Entrepreneur · Author · Mentor
              </p>
              <p className="text-sm text-[#FF8A00] font-semibold mt-0.5">
                Founder — PEN2PRO · XLR8 Pressure Washing Services · XLR8 Trade Academy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Mission</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            What PEN2PRO Actually Does
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic AI. Not just a business plan generator. Not motivation. RMIE is a Rapid Monetization Intelligence Engine — built to give you the specific moves, structure, and tools to turn your idea into income.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {MISSION_POINTS.map((pt) => (
              <div key={pt.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{pt.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{pt.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who PEN2PRO Is For</div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Built for the Overlooked. Designed for the Determined.
          </h2>
          <p className="mb-12 text-slate-400">
            PEN2PRO was created for people who don't fit the traditional mold — but are serious about building something real.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
                <div className="mb-2 text-3xl">{w.icon}</div>
                <p className="text-sm font-semibold text-slate-200">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Build Something Real?
          </h2>
          <p className="mb-10 text-slate-400">
            Start with a free roadmap. No credit card. No fluff. Just a real plan for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
