import { Link } from 'react-router-dom'

export default function PricingCard({ plan }) {
  const { name, price, period, description, features = [], cta, ctaLink, highlight } = plan || {}

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 ${
        highlight ? 'border-[#D4A017]' : 'border-[#1A2235]'
      }`}
      style={{ background: highlight ? '#0F1520' : '#090D16' }}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full gradient-gold px-3 py-1 text-xs font-black text-[#080C14]">
            MOST POPULAR
          </span>
        </div>
      )}
      <div className="mb-6">
        <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">{name}</p>
        <div className="flex items-end gap-1">
          <span className="font-display text-4xl font-black text-white">{price}</span>
          {period && <span className="mb-1 text-sm text-slate-500">/{period}</span>}
        </div>
        {description && <p className="mt-3 text-sm text-slate-400">{description}</p>}
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-0.5 text-[#D4A017]">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink || '/waitlist'}
        className={`block w-full py-3 text-center text-sm font-bold rounded-xl transition-all ${
          highlight ? 'btn-gold' : 'btn-outline'
        }`}
      >
        {cta || 'Get Started'}
      </Link>
    </div>
  )
}
