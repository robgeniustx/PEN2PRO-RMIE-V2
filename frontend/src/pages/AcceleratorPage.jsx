import { Link } from "react-router-dom";

const acceleratorModules = [
  { title: "Outreach Strategy", desc: "Scripts and outreach sequences to land your first clients fast.", href: "/dashboard/outreach" },
  { title: "Ads Blueprint", desc: "Meta and Google ads strategy built around your niche and budget.", href: "/dashboard/ads" },
  { title: "CRM & Pipeline", desc: "Track leads, follow up consistently, and close more business.", href: "/dashboard/crm" },
  { title: "Financial Projections", desc: "12-month revenue model and break-even analysis.", href: "/dashboard/credit" },
  { title: "Affiliate Engine", desc: "Build passive income streams aligned with your business.", href: "/dashboard/affiliate" },
  { title: "Automation Center", desc: "Automate follow-ups, social posts, and daily operations.", href: "/dashboard/automation" },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6">
            Accelerator Track
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            You Built It.
            <br />
            <span className="text-violet-400">Now Let's Scale It.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
            The Accelerator track is for entrepreneurs who are past the idea stage and ready to grow
            revenue, automate operations, and build real business infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/elite"
              className="inline-block rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-bold px-8 py-3 text-sm tracking-wide transition-colors"
            >
              Unlock with Elite →
            </Link>
            <Link
              to="/pricing"
              className="inline-block rounded-xl border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white font-semibold px-8 py-3 text-sm transition-colors"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Accelerator Modules</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {acceleratorModules.map((m) => (
              <Link
                key={m.title}
                to={m.href}
                className="group bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-6 transition-colors"
              >
                <h3 className="font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {m.title}
                </h3>
                <p className="text-slate-400 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
