import { useState } from "react";

// One step of the Strategist Plan. `progress` and `onToggle` are optional (omit for the read-only free sample).
export default function StepCard({ step, defaultOpen = false, progress, onToggle }) {
  const [open, setOpen] = useState(defaultOpen);
  const done = progress ? step.actions.filter((_, i) => progress[`${step.id}-${i}`]).length : 0;
  const total = step.actions.length;

  return (
    <article id={`step-${step.id}`} className="scroll-mt-24 rounded-2xl border border-[#1A2235]" style={{ background: "#0F1520" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-gold font-display text-sm font-black text-[#080C14]">
          {step.id}
        </span>
        <span className="flex-1">
          <span className="block font-display text-lg font-bold text-white">{step.title}</span>
          <span className="mt-1 block text-sm text-slate-400">{step.goal}</span>
          <span className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full border border-[#1A2235] px-2.5 py-0.5 text-slate-400">⏱ {step.time}</span>
            <span className="rounded-full border border-[#1A2235] px-2.5 py-0.5 text-slate-400">💵 {step.cost}</span>
            {progress && (
              <span className="rounded-full border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-2.5 py-0.5 text-[#00C9B1]">
                {done}/{total} done
              </span>
            )}
          </span>
        </span>
        <span className="mt-1 text-slate-500" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="space-y-6 border-t border-[#1A2235] p-5 pt-6">
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Do this</h4>
            <ol className="space-y-3">
              {step.actions.map((action, i) => {
                const key = `${step.id}-${i}`;
                return (
                  <li key={key} className="flex gap-3 text-sm leading-7 text-slate-300">
                    {onToggle ? (
                      <input
                        type="checkbox"
                        checked={!!progress?.[key]}
                        onChange={() => onToggle(key)}
                        aria-label={`Mark action ${i + 1} of step ${step.id} done`}
                        className="mt-2 h-4 w-4 shrink-0 accent-[#D4A017]"
                      />
                    ) : (
                      <span className="mt-0.5 w-5 shrink-0 text-right font-bold text-[#D4A017]">{i + 1}.</span>
                    )}
                    <span className={progress?.[key] ? "text-slate-500 line-through" : ""}>{action}</span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[#00C9B1]/30 bg-[#00C9B1]/5 p-4">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">You will have</h4>
              <p className="text-sm leading-6 text-slate-300">{step.deliverable}</p>
              <h4 className="mb-2 mt-4 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Checkpoint</h4>
              <p className="text-sm leading-6 text-slate-300">{step.checkpoint}</p>
            </div>
            <div className="rounded-xl border border-red-500/25 bg-red-500/5 p-4">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Avoid</h4>
              <ul className="space-y-2">
                {step.avoid.map((a) => (
                  <li key={a} className="text-sm leading-6 text-slate-300">• {a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
