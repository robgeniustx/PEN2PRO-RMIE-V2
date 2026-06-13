export default function Input({
  label,
  error,
  hint,
  className = "",
  inputClassName = "",
  prefix,
  suffix,
  required,
  ...props
}) {
  const baseInput = [
    "w-full rounded-xl border bg-[#0D1528] px-4 py-3 text-sm text-white",
    "placeholder-slate-600 outline-none transition-colors",
    "focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/30",
    error ? "border-red-500/70 focus:border-red-400 focus:ring-red-400/20" : "border-[#1A2D50]",
    prefix ? "pl-10" : "",
    suffix ? "pr-10" : "",
    inputClassName,
  ].filter(Boolean).join(" ");

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-slate-300">
          {label}
          {required && <span className="ml-1 text-[#FF8A00]">*</span>}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
            {prefix}
          </span>
        )}
        <input {...props} required={required} className={baseInput} />
        {suffix && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
            {suffix}
          </span>
        )}
      </div>
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
