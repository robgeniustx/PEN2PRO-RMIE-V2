import { Link, useLocation } from 'react-router-dom'

export default function Sidebar({ items = [], className = '' }) {
  const { pathname } = useLocation()

  return (
    <aside className={`flex flex-col gap-1 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
            pathname === item.to
              ? 'bg-[#D4A017]/10 text-[#D4A017]'
              : 'text-slate-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          {item.icon && <span>{item.icon}</span>}
          {item.label}
        </Link>
      ))}
    </aside>
  )
}
