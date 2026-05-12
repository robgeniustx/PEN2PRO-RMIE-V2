import { Link } from "react-router-dom";

const FEATURES = [
  "$100M Strategist Mode — advanced AI-powered guidance",
  "Financial projections & startup cost modeling",
  "Legal foundation guidance (LLC, EIN, banking steps)",
  "Vendor integration recommendations",
  "Outreach strategy & CRM follow-up plan",
  "Ad strategy direction",
  "Landing page strategy",
  "Priority AI processing",
  "Everything in Builder (Pro) tier",
];

export default function AcceleratorPage() {
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
        <div className="mb-5 inline-flex rounded-full border border-purple-800 bg-purple-950 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-400">
          Elite — Accelerator Tier
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Strategy-level guidance.
          <br />
          <span className="text-purple-400">Without the agency price tag.</span>
        </h1>

        <p className="mt-5 text-xl leading-relaxed text-slate-400">
          The Accelerator plan gives you the tools and AI-powered strategist that
          serious business owners use — financial modeling, legal setup, and a
          complete go-to-market blueprint built around your specific business.
        </p>

        <div className="mt-10 rounded-2xl border border-purple-900 bg-purple-950/30 p-8">
          <p className="text-3xl font-extrabold text-white">$149<span className="text-lg font-semibold text-slate-400">/mo</span></p>
          <p className="mt-1 text-sm text-slate-500">Cancel anytime</p>

          <ul className="mt-6 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-slate-300">
                <span className="mt-0.5 text-purple-400">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            to="/checkout/elite"
            className="mt-8 block w-full rounded-xl bg-purple-700 py-4 text-center text-sm font-extrabold text-white shadow-lg shadow-purple-900/30 transition hover:bg-purple-600"
          >
            Start Accelerator Plan →
          </Link>

          <p className="mt-4 text-center text-sm text-slate-500">
            Want lifetime access?{" "}
            <Link to="/founders" className="font-bold text-amber-400 hover:text-amber-300">
              See the Founders plan ($899 one-time)
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
