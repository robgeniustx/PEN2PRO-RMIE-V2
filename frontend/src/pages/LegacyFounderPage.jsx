import { Link } from "react-router-dom";

export default function LegacyFounderPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6">
          Legacy Founder Access
        </span>
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Welcome Back, Legacy Founder.
        </h1>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          You were one of the first to believe in PEN2PRO. Your lifetime access is locked in. Log in
          below to access your full dashboard — everything available to Founders members and more.
        </p>

        <div className="bg-slate-900 border border-violet-500/20 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Your Legacy Perks</h2>
          <ul className="space-y-3 text-left">
            {[
              "Lifetime access — grandfathered, no renewal",
              "All current and future Elite features",
              "Priority support and guidance",
              "Founding member recognition",
              "Early access to all new modules",
            ].map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="h-5 w-5 shrink-0 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">
                  ✓
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-bold px-8 py-3 text-sm tracking-wide transition-colors"
          >
            Sign In to Dashboard →
          </Link>
          <Link
            to="/founders"
            className="rounded-xl border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white font-semibold px-8 py-3 text-sm transition-colors"
          >
            View Founders Page
          </Link>
        </div>
      </div>
    </div>
  );
}
