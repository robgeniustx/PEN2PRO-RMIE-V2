/**
 * Card — PEN2PRO dark surface card.
 * variant: "default" | "highlight" | "gold" | "teal" | "blue"
 */
export default function Card({
  children,
  variant = "default",
  className = "",
  padding = true,
  ...props
}) {
  const variants = {
    default: "border-[#1A2D50]",
    highlight: "border-[#1E88E5]",
    gold: "border-[#D4A017]",
    teal: "border-[#00C9B1]",
    blue: "border-[#1E88E5]",
    orange: "border-[#FF8A00]",
  }

  return (
    <div
      className={`rounded-2xl border bg-[#0F1520] ${variants[variant] || variants.default} ${padding ? "p-6" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`font-display text-lg font-black text-white ${className}`}>
      {children}
    </h3>
  )
}

export function CardBody({ children, className = "" }) {
  return (
    <div className={`text-slate-400 text-sm leading-relaxed ${className}`}>
      {children}
    </div>
  )
}
