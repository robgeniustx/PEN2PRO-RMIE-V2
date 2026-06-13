export default function Textarea({
  label,
  error,
  hint,
  rows = 4,
  maxLength,
  className = "",
  textareaClassName = "",
  required,
  value,
  ...props
}) {
  const baseTextarea = [
    "w-full resize-none rounded-xl border bg-[#0D1528] px-4 py-3 text-sm text-white",
    "placeholder-slate-600 outline-none transition-colors",
    "focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/30",
    error ? "border-red-500/70 focus:border-red-400 focus:ring-red-400/20" : "border-[#1A2D50]",
    textareaClassName,
  ].filter(Boolean).join(" ");

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-slate-300">
            {label}
            {required && <span className="ml-1 text-[#FF8A00]">*</span>}
          </label>
          {maxLength && (
            <span className="text-xs text-slate-600">
              {value ? String(value).length : 0}/{maxLength}
            </span>
          )}
        </div>
      )}
      <textarea
        rows={rows}
        maxLength={maxLength}
        value={value}
        {...props}
        required={required}
        className={baseTextarea}
      />
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
