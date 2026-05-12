import { Link } from "react-router-dom";

export default function LegacyFounderPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-xs font-extrabold">P2P</div>
            <span className="text-lg font-extrabold tracking-tight">PEN2PRO</span>
          </Link>
          <Link to="/login" className="text-sm font-semibold text-slate-400 hover:text-teal-400">
            Sign In
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mb-5 inline-flex rounded-full border border-amber-600 bg-amber-950 px-5 py-2 text-sm font-extrabold text-amber-400">
          ✦ Legacy Founder Access
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          You were here from the beginning.
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
          Legacy Founders joined PEN2PRO before it became what it is today.
          You believed early, and that belief is honored here — with permanent
          access to everything the platform offers.
        </p>

        <div className="mt-12 rounded-3xl border border-amber-800 bg-amber-950/30 p-8">
          <h2 className="text-xl font-extrabold text-white">Legacy Access Includes</h2>
          <ul className="mt-5 space-y-3 text-left">
            {[
              "All current and future platform features",
              "Priority access to new agent modules",
              "Exclusive Legacy Founder badge and recognition",
              "Direct input on new feature development",
              "Permanent lifetime access — no renewals",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-slate-300">
                <span className="mt-0.5 text-amber-400">✦</span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/login"
            className="mt-8 block w-full rounded-xl bg-amber-500 py-4 text-center text-sm font-extrabold text-slate-950 shadow-xl shadow-amber-900/30 transition hover:bg-amber-400"
          >
            Sign In to Access Your Dashboard →
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Not a Legacy Founder yet?{" "}
          <Link to="/founders" className="font-bold text-amber-400 hover:text-amber-300">
            See the Founders plan
          </Link>
        </p>
      </main>
    </div>
  );
}
