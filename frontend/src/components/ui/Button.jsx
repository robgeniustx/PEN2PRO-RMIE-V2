import { Link } from "react-router-dom";

const SIZES = {
  xs: "px-3 py-1.5 text-xs rounded-lg",
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
  xl: "px-8 py-4 text-lg rounded-2xl",
};

const VARIANTS = {
  primary:   "bg-[#FF8A00] text-[#0A0F1E] hover:bg-[#E07800] focus-visible:ring-[#FF8A00]/50 font-black",
  secondary: "bg-[#1A2D50] text-white hover:bg-[#243d6a] focus-visible:ring-[#1A2D50]/50 font-bold",
  outline:   "border border-[#1A2D50] text-slate-300 hover:border-[#FF8A00]/60 hover:text-[#FF8A00] focus-visible:ring-[#FF8A00]/30 font-semibold",
  gold:      "bg-[#D4A017] text-[#0A0F1E] hover:bg-[#c49015] focus-visible:ring-[#D4A017]/50 font-black",
  teal:      "bg-teal-500 text-[#0A0F1E] hover:bg-teal-400 focus-visible:ring-teal-500/50 font-black",
  ghost:     "text-slate-400 hover:text-white hover:bg-[#1A2D50]/60 focus-visible:ring-slate-500/30 font-semibold",
  danger:    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/50 font-bold",
  success:   "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500/50 font-bold",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  to,
  href,
  fullWidth = false,
  icon,
  iconRight,
}) {
  const base = [
    "inline-flex items-center justify-center gap-2 transition-all",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "select-none whitespace-nowrap",
    SIZES[size] || SIZES.md,
    VARIANTS[variant] || VARIANTS.primary,
    fullWidth ? "w-full" : "",
    className,
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-transparent"
          style={{ borderTopColor: "currentColor", borderRightColor: "currentColor" }} />
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      <span>{children}</span>
      {iconRight && !loading && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (to) return <Link to={to} className={base}>{content}</Link>;
  if (href) return <a href={href} className={base} target="_blank" rel="noopener noreferrer">{content}</a>;

  return (
    <button type={type} className={base} disabled={disabled || loading} onClick={onClick}>
      {content}
    </button>
  );
}
