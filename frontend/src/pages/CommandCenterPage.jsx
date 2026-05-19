import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "👥", title: "Customer Relationship Manager", desc: "Full contact profiles, history, tags, and notes for every lead and customer." },
  { icon: "📊", title: "Sales Pipelines", desc: "Unlimited pipelines. Drag-and-drop opportunity boards. Real-time revenue tracking." },
  { icon: "💵", title: "Payments & Invoices", desc: "Create, send, and collect payments. Track open and paid invoices." },
  { icon: "📋", title: "Proposals & Estimates", desc: "Professional quotes that convert. Send in one click — collect signatures and payments." },
  { icon: "📅", title: "Calendar & Scheduling", desc: "Online booking links, automated reminders, and appointment management." },
  { icon: "⭐", title: "Reputation Management", desc: "Automated review requests. Track Google and Facebook ratings in one place." },
  { icon: "💬", title: "Multi-Channel Messaging", desc: "2-way text, email, Facebook, GMB, web chat — all in one inbox." },
  { icon: "📵", title: "Missed Call Text-Back", desc: "Never lose a lead again. Auto-reply to missed calls with a custom text message." },
  { icon: "⚙️", title: "Workflows & Automations", desc: "Set-and-forget follow-up sequences, lead nurture campaigns, and review automation." },
  { icon: "📈", title: "Reports & Revenue", desc: "Profit/loss snapshot, year-to-date revenue, pipeline value, and conversion data." },
  { icon: "📱", title: "Social Media Planner", desc: "Schedule posts across platforms. AI-assisted captions and content ideas." },
  { icon: "🎨", title: "Branding Boards", desc: "Store your brand colors, fonts, logos, and assets for consistent use across all tools." },
];

const SECTION_HIGHLIGHTS = [
  {
    icon: "🖥️",
    title: "Everything in One Dashboard",
    points: [
      "Total contacts, new leads, open invoices",
      "Pipeline value and monthly revenue",
      "Upcoming appointments and follow-up tasks",
      "AI recommendations and next best actions",
    ],
  },
  {
    icon: "🤝",
    title: "Works With Your Voice Agent",
    points: [
      "AI Voice Agent books appointments directly into Command Center",
      "Call summaries auto-sync to customer profiles",
      "Missed calls trigger automated text-back",
      "Lead qualification updates pipeline automatically",
    ],
  },
];

export default function CommandCenterPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🖥️ P2P Command Center
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Run Your Business
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From One Hub.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The customer, sales, automation, invoice, booking, messaging, and reporting hub built for small business owners. Stop juggling apps.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/command-center/dashboard" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              See the Dashboard
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What It Manages</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Every Tool Your Business Needs. One Login.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          {SECTION_HIGHLIGHTS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
              <div className="mb-4 text-3xl">{s.icon}</div>
              <h3 className="mb-5 font-display text-xl font-black text-white">{s.title}</h3>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-0.5 shrink-0 text-[#FF8A00]">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50] text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop losing leads. Start running your business.
          </h2>
          <p className="mb-10 text-slate-400">
            P2P Command Center is included with Pro, Elite, and Founder plans.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              See Pricing
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm text-slate-500">
            <Link to="/rmie" className="hover:text-[#FF8A00] transition-colors">RMIE →</Link>
            <Link to="/voice-agent" className="hover:text-[#FF8A00] transition-colors">AI Voice Agent →</Link>
            <Link to="/website-builder" className="hover:text-[#FF8A00] transition-colors">Website Builder →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

