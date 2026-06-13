const VARIANTS = {
  default:  "bg-[#1A2D50] text-slate-300",
  orange:   "bg-[#FF8A00]/10 text-[#FF8A00] border border-[#FF8A00]/25",
  primary:  "bg-[#FF8A00]/10 text-[#FF8A00] border border-[#FF8A00]/25",
  blue:     "bg-[#1E88E5]/10 text-[#1E88E5] border border-[#1E88E5]/25",
  gold:     "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/25",
  teal:     "bg-teal-500/10 text-teal-400 border border-teal-500/25",
  success:  "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
  danger:   "bg-red-500/10 text-red-400 border border-red-500/25",
  warning:  "bg-yellow-500/10 text-yellow-400 border border-yellow-500/25",
  purple:   "bg-purple-500/10 text-purple-400 border border-purple-500/25",
  free:     "bg-slate-700/50 text-slate-300 border border-slate-600/50",
  pro:      "bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/25",
  elite:    "bg-teal-500/10 text-teal-400 border border-teal-500/25",
  founders: "bg-[#FF8A00]/10 text-[#FF8A00] border border-[#FF8A00]/25",
};

const SIZES = {
  xs: "px-2 py-0.5 text-[10px]",
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-xs",
};

export default function Badge({ children, variant = "default", size = "sm", dot, className = "" }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full font-bold",
        SIZES[size] || SIZES.sm,
        VARIANTS[variant] || VARIANTS.default,
        className,
      ].filter(Boolean).join(" ")}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            variant === "success" ? "bg-emerald-400" :
            variant === "danger" ? "bg-red-400" :
            variant === "orange" || variant === "primary" ? "bg-[#FF8A00]" :
            "bg-current"
          }`}
        />
      )}
      {children}
    </span>
  );
}
