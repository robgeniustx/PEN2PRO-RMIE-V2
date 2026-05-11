import { Link, useParams } from "react-router-dom";

export default function BlueprintResultsPage() {
  const { id } = useParams();
  const blueprintId = id || "demo";

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
          Your Blueprint
        </span>
        <h1 className="text-3xl font-extrabold text-white mb-8">
          Business Blueprint #{blueprintId}
        </h1>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to={`/dashboard/website?blueprint_id=${blueprintId}`}
            className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition-colors"
          >
            <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              Build a Landing Page
            </h3>
            <p className="text-slate-400 text-sm">Turn this blueprint into your first website.</p>
          </Link>

          <Link
            to={`/dashboard/crm/leads?blueprint_id=${blueprintId}`}
            className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition-colors"
          >
            <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              Track Leads
            </h3>
            <p className="text-slate-400 text-sm">Start building your customer pipeline.</p>
          </Link>

          <Link
            to={`/dashboard/social?blueprint_id=${blueprintId}`}
            className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition-colors"
          >
            <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              Social Media Plan
            </h3>
            <p className="text-slate-400 text-sm">Turn this blueprint into a content strategy.</p>
          </Link>

          <Link
            to="/pricing"
            className="group bg-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-5 transition-colors"
          >
            <h3 className="font-bold text-cyan-400 mb-1">Upgrade for Full Roadmap</h3>
            <p className="text-slate-400 text-sm">Unlock your 30/60/90-day action plan with Pro.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
