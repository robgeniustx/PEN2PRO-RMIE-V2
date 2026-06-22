const VARIANTS = {
  default: { color: '#94A3B8', bg: '#1E293B' },
  gold: { color: '#D4A017', bg: '#D4A01715' },
  teal: { color: '#00C9B1', bg: '#00C9B115' },
  red: { color: '#F87171', bg: '#F8717115' },
  green: { color: '#4ADE80', bg: '#4ADE8015' },
}

export default function Badge({ children, variant = 'default', className = '' }) {
  const v = VARIANTS[variant] || VARIANTS.default
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}
      style={{ color: v.color, background: v.bg, border: `1px solid ${v.color}30` }}
    >
      {children}
    </span>
  )
}
