const LockedSection = ({ requiredTier, featureName }) => {
  return (
    <section className="rounded-2xl border border-amber-500/50 bg-slate-950/80 p-5">
      <p className="text-sm uppercase tracking-wide text-amber-300">Locked Feature</p>
      <h4 className="mt-2 text-lg font-semibold text-white">{featureName}</h4>
      <p className="mt-2 text-slate-300">Unlock this section with Pro or Elite.</p>
      <p className="mt-3 text-xs text-amber-200">Required tier: {requiredTier}</p>
    </section>
  );
};

export default LockedSection;
