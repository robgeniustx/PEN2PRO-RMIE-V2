export default function Card({
  children,
  className = "",
  padding = true,
  hover = false,
  glow,
  style,
  onClick,
}) {
  const glowMap = {
    orange: "hover:border-[#FF8A00]/40 hover:shadow-[#FF8A00]/8",
    gold:   "hover:border-[#D4A017]/40 hover:shadow-[#D4A017]/8",
    blue:   "hover:border-[#1E88E5]/40 hover:shadow-[#1E88E5]/8",
    teal:   "hover:border-teal-500/40 hover:shadow-teal-500/8",
  };

  return (
    <div
      className={[
        "rounded-2xl border border-[#1A2D50] bg-[#0D1528]",
        padding ? "p-6" : "",
        hover || onClick ? `cursor-pointer transition-all duration-200 hover:shadow-lg ${glowMap[glow] || "hover:border-[#FF8A00]/30 hover:shadow-[#FF8A00]/5"}` : "",
        className,
      ].filter(Boolean).join(" ")}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`mb-4 flex items-start justify-between ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`font-display text-lg font-bold text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardBody({ children, className = "" }) {
  return <div className={`text-sm leading-relaxed text-slate-400 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`mt-5 border-t border-[#1A2D50] pt-4 ${className}`}>
      {children}
    </div>
  );
}
