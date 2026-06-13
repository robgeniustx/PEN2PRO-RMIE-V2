export default function Select({
  label,
  error,
  hint,
  options = [],
  placeholder,
  className = "",
  selectClassName = "",
  required,
  ...props
}) {
  const baseSelect = [
    "w-full cursor-pointer appearance-none rounded-xl border bg-[#0D1528] px-4 py-3 pr-10 text-sm text-white",
    "outline-none transition-colors",
    "focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/30",
    error ? "border-red-500/70 focus:border-red-400 focus:ring-red-400/20" : "border-[#1A2D50]",
    selectClassName,
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
        <select {...props} required={required} className={baseSelect}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            if (typeof opt === "string") {
              return <option key={opt} value={opt}>{opt}</option>;
            }
            if (opt.group) {
              return (
                <optgroup key={opt.group} label={opt.group}>
                  {(opt.options || []).map((o) => (
                    <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
                  ))}
                </optgroup>
              );
            }
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500">
          ▾
        </span>
      </div>
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
