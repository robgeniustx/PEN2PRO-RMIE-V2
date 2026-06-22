export default function Select({
  label,
  options = [],
  error,
  placeholder = 'Select an option...',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-slate-300">{label}</label>
      )}
      <select
        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none transition-colors"
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) =>
          typeof opt === 'string'
            ? <option key={opt} value={opt}>{opt}</option>
            : <option key={opt.value} value={opt.value}>{opt.label}</option>
        )}
      </select>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}
