export default function SafetyBoundaryNotice() {
  return (
    <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/05 p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 text-xl">⚠️</span>
        <div>
          <p className="text-sm font-bold text-[#FF8A00]">Safety Boundary Active</p>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
            The Main Builder agent operates within pre-approved safety boundaries. No external accounts, payments, or live systems are modified without explicit confirmation. All outputs are plans and recommendations — execution requires your approval.
          </p>
        </div>
      </div>
    </div>
  );
}
