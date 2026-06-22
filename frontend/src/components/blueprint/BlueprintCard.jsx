import { Link } from 'react-router-dom'

export default function BlueprintCard({ blueprint }) {
  const { id, business_idea, category, created_at } = blueprint || {}
  return (
    <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: '#0F1520' }}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-slate-500 mb-1">{category || 'Business'}</p>
          <h3 className="font-display text-base font-bold text-white line-clamp-2">
            {business_idea || 'Business Roadmap'}
          </h3>
          {created_at && (
            <p className="mt-1 text-xs text-slate-600">
              {new Date(created_at).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl gradient-gold text-xs font-black text-[#080C14]">
          P2P
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Link
          to={id ? `/blueprint/${id}` : '/results'}
          className="btn-gold flex-1 py-2 text-center text-xs font-bold"
        >
          View Roadmap
        </Link>
        <Link
          to="/starter"
          className="btn-outline px-3 py-2 text-center text-xs font-bold"
        >
          New
        </Link>
      </div>
    </div>
  )
}
