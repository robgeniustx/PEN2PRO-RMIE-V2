import { Link } from "react-router-dom";

const modules = [
  { title: "Business Blueprint Generator", desc: "Turn your idea into a structured business plan with AI.", href: "/starter" },
  { title: "Brand Kit Builder", desc: "Logo guidance, color palette, and brand voice setup.", href: "/dashboard/brand-kit" },
  { title: "Landing Page Strategy", desc: "Copy framework and page structure for your first offer.", href: "/dashboard/website" },
  { title: "Content Generator", desc: "Social posts, scripts, and content calendar built for your niche.", href: "/dashboard/social" },
  { title: "Business Roadmap", desc: "30/60/90-day action plan with milestone tracking.", href: "/dashboard" },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
            Builder Track
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Build Your Business
            <br />
            <span className="text-cyan-400">Brick by Brick.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
            The Builder track gives you every tool you need to go from idea to launch — structured,
            step by step, without needing a business degree.
          </p>
          <Link
            to="/starter"
            className="inline-block rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 text-sm tracking-wide transition-colors"
          >
            Start Your Blueprint →
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Builder Modules</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {modules.map((m) => (
              <Link
                key={m.title}
                to={m.href}
                className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-colors"
              >
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {m.title}
                </h3>
                <p className="text-slate-400 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-3">
              Unlock all Builder modules and the full roadmap with Pro.
            </p>
            <Link to="/pricing" className="text-cyan-400 hover:underline font-semibold text-sm">
              View Plans →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
