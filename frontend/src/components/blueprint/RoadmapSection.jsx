import { useState } from "react";

export default function RoadmapSection({ title, children, defaultOpen = false, locked = false }) {
  const [open, setOpen] = useState(defaultOpen);

  if (locked) {
    return (
      <div className="rounded-2xl border border-[#1A2D50] overflow-hidden mb-4" style={{ background: "#0F1520" }}>
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="font-display text-base font-bold text-slate-500">{title}</h2>
          <span className="text-xs font-semibold text-[#D4A017] border border-[#D4A017]/30 bg-[#D4A017]/10 rounded-full px-2 py-0.5">
            Pro+
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#1A2D50] overflow-hidden mb-4" style={{ background: "#0F1520" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h2 className="font-display text-base font-bold text-white">{title}</h2>
        <span className="text-[#D4A017] text-xl font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}
