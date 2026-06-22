import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CATEGORIES = [
  'Cleaning / Pressure Washing', 'Lawn Care / Landscaping', 'Home Repair / Handyman',
  'Food / Catering / Meal Prep', 'Digital Marketing / Social Media', 'Consulting / Coaching',
  'E-commerce / Reselling', 'Photography / Videography', 'IT Support / Tech Services', 'Other',
]

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export default function StarterIntakeForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ business_idea: '', category: '', name: '', email: '' })

  function update(k, v) { setForm((f) => ({ ...f, [k]: v })) }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.business_idea.trim()) { setError('Describe your business idea.'); return }
    setError(''); setLoading(true)
    try {
      const res = await fetch(`${API}/api/blueprints/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      navigate('/results', { state: { roadmap: data, formData: form } })
    } catch {
      navigate('/results', { state: { formData: form, isSample: true } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
      )}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Your business idea *</label>
        <textarea
          value={form.business_idea}
          onChange={(e) => update('business_idea', e.target.value)}
          rows={3}
          placeholder="e.g. I want to start a pressure washing business..."
          className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none resize-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Category</label>
        <select
          value={form.category}
          onChange={(e) => update('category', e.target.value)}
          className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none"
        >
          <option value="">Select a category...</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Name *</label>
        <input
          type="text" required value={form.name}
          onChange={(e) => update('name', e.target.value)}
          placeholder="Robert Green"
          className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">Email *</label>
        <input
          type="email" required value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
        />
      </div>
      <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
        {loading ? 'Building your roadmap...' : 'Build My Free Roadmap'}
      </button>
    </form>
  )
}
