/**
 * Button — PEN2PRO brand button component.
 * variant: "primary" | "secondary" | "ghost" | "gold" | "danger"
 * size: "sm" | "md" | "lg"
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-black rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080C14] disabled:opacity-50 disabled:cursor-not-allowed"

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  const variants = {
    primary:
      "bg-[#1E88E5] hover:bg-[#1565C0] text-white focus:ring-[#1E88E5]",
    gold:
      "bg-gradient-to-r from-[#D4A017] to-[#FF8A00] hover:from-[#B8860B] hover:to-[#E07800] text-[#080C14] focus:ring-[#D4A017]",
    secondary:
      "border border-[#1A2D50] bg-[#0F1520] hover:border-[#FF8A00] hover:text-[#FF8A00] text-slate-300 focus:ring-[#FF8A00]",
    ghost:
      "bg-transparent hover:bg-[#0F1520] text-slate-400 hover:text-white focus:ring-[#1A2D50]",
    danger:
      "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor" strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
