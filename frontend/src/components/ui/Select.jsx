/**
 * Select — PEN2PRO branded select dropdown.
 */
export default function Select({
  label,
  id,
  error,
  children,
  className = "",
  containerClassName = "",
  ...props
}) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-bold uppercase tracking-widest text-slate-400"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-[#FF8A00] appearance-none cursor-pointer ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-[#1A2D50] hover:border-[#1E88E5]"
        } ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          backgroundSize: "16px",
          paddingRight: "40px",
        }}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}
