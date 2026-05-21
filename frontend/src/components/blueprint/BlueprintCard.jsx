import { Link } from "react-router-dom";

export default function BlueprintCard({ blueprint }) {
  if (!blueprint) return null;

  return (
    <div className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-base font-bold text-white truncate pr-2">
          {blueprint.business_idea || blueprint.title || "Business Roadmap"}
        </h3>
        {blueprint.category && (
          <span className="rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-2 py-0.5 text-xs font-semibold text-[#FF8A00] shrink-0">
            {blueprint.category}
          </span>
        )}
      </div>
      {blueprint.snapshot?.value_proposition && (
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {blueprint.snapshot.value_proposition}
        </p>
      )}
      <div className="flex items-center gap-3">
        <Link
          to="/results"
          state={{ roadmap: blueprint }}
          className="text-xs font-semibold text-[#D4A017] hover:text-white transition-colors"
        >
          View Roadmap →
        </Link>
      </div>
    </div>
  );
}
