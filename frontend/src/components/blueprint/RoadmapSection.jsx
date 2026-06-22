import { useState } from 'react'

export default function RoadmapSection({ id, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div id={id} className="rounded-2xl border border-[#1A2235] overflow-hidden mb-4" style={{ background: '#0F1520' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h2 className="font-display text-base font-bold text-white">{title}</h2>
        <span className="text-[#D4A017] text-xl font-bold">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  )
}
