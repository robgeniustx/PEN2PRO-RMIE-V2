/**
 * Textarea — PEN2PRO branded multi-line text input.
 */
export default function Textarea({
  label,
  id,
  error,
  rows = 4,
  className = "",
  containerClassName = "",
  ...props
}) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-bold uppercase tracking-widest text-slate-400"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={`w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-[#FF8A00] resize-y ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-[#1A2D50] hover:border-[#1E88E5]"
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}
