import { Link } from "react-router-dom";

const FEATURES = [
  "Full business roadmap (not just a blueprint)",
  "Brand kit — name, voice, logo direction",
  "Launch checklist with milestone tracking",
  "Content generator for social + outreach",
  "Export-ready business summary",
  "Stronger AI refinement of your idea",
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-xs font-extrabold">P2P</div>
            <span className="text-lg font-extrabold tracking-tight">PEN2PRO</span>
          </Link>
          <Link to="/pricing" className="text-sm font-semibold text-slate-400 hover:text-teal-400">
            All Plans
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-5 inline-flex rounded-full border border-teal-800 bg-teal-950 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-400">
          Pro — Builder Tier
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Stop planning. <br />
          <span className="text-teal-400">Start building.</span>
        </h1>

        <p className="mt-5 text-xl leading-relaxed text-slate-400">
          The Builder plan gives you everything you need to move from idea to
          execution — with a real roadmap, brand kit, and AI-powered content
          strategy to back you up.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-3xl font-extrabold text-white">$89<span className="text-lg font-semibold text-slate-400">/mo</span></p>
          <p className="mt-1 text-sm text-slate-500">Cancel anytime</p>

          <ul className="mt-6 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-slate-300">
                <span className="mt-0.5 text-teal-400">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            to="/checkout/pro"
            className="mt-8 block w-full rounded-xl bg-teal-700 py-4 text-center text-sm font-extrabold text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-600"
          >
            Start Builder Plan →
          </Link>

          <p className="mt-4 text-center text-sm text-slate-500">
            Want more power?{" "}
            <Link to="/accelerator" className="font-bold text-teal-400 hover:text-teal-300">
              See the Accelerator (Elite) plan
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
