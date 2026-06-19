/**
 * LoadingState — spinner or skeleton for async content.
 * variant: "spinner" | "skeleton" | "pulse"
 */
export default function LoadingState({
  variant = "spinner",
  message = "Loading...",
  lines = 3,
  className = "",
}) {
  if (variant === "skeleton") {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded-lg bg-[#1A2235] animate-pulse"
            style={{ width: `${85 - i * 10}%` }}
          />
        ))}
      </div>
    )
  }

  if (variant === "pulse") {
    return (
      <div className={`rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 space-y-4 ${className}`}>
        <div className="h-5 w-1/3 rounded-lg bg-[#1A2235] animate-pulse" />
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className="h-3 rounded bg-[#1A2235] animate-pulse" style={{ width: `${90 - i * 8}%` }} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-16 ${className}`}>
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-2 border-[#1A2D50]" />
        <div className="absolute inset-0 rounded-full border-2 border-t-[#FF8A00] animate-spin" />
      </div>
      {message && (
        <p className="text-sm font-semibold text-slate-400">{message}</p>
      )}
    </div>
  )
}
