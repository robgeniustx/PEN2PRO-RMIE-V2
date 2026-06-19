/**
 * Badge — small pill label for tiers, statuses, labels.
 * variant: "default" | "gold" | "orange" | "teal" | "blue" | "green" | "red" | "purple"
 */
export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-[#1A2D50] text-slate-300",
    gold:    "bg-[#D4A017]/20 text-[#D4A017] border border-[#D4A017]/30",
    orange:  "bg-[#FF8A00]/20 text-[#FF8A00] border border-[#FF8A00]/30",
    teal:    "bg-[#00C9B1]/20 text-[#00C9B1] border border-[#00C9B1]/30",
    blue:    "bg-[#1E88E5]/20 text-[#1E88E5] border border-[#1E88E5]/30",
    green:   "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    red:     "bg-red-500/20 text-red-400 border border-red-500/30",
    purple:  "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  )
}
