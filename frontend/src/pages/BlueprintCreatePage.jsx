import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useBlueprint from '../hooks/useBlueprint'

const INDUSTRIES = [
  'SaaS',
  'E-commerce',
  'Real Estate',
  'Healthcare',
  'Education',
  'Creator Economy',
  'Social Media Influencer',
  'Service',
  'Product',
  'Agency',
  'Consulting',
  'Other',
]

export default function BlueprintCreatePage() {
  const navigate = useNavigate()
  const createBlueprint = useBlueprint((state) => state.createBlueprint)
  const error = useBlueprint((state) => state.error)
  const loading = useBlueprint((state) => state.loading)

  const [formData, setFormData] = useState({
    business_idea: '',
    description: '',
    category: '',
    industry: '',
    timeline_weeks: 12,
    estimated_investment: '',
    status: 'draft',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'timeline_weeks' ? parseInt(value) || 12 : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.business_idea.trim()) {
      alert('Business idea is required')
      return
    }

    try {
      const blueprint = await createBlueprint(formData)
      navigate(`/blueprints/${blueprint._id}`)
    } catch (err) {
      // Error is handled in store
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={() => navigate('/blueprints')}
          className="text-primary-600 hover:text-primary-700 mb-6"
        >
          ← Back to Blueprints
        </button>

        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Blueprint</h1>
          <p className="text-gray-600 mb-8">Define your business idea and get AI-powered strategies</p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Idea */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Business Idea *
              </label>
              <textarea
                name="business_idea"
                required
                value={formData.business_idea}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                rows="3"
                placeholder="Describe your business idea in 1-2 sentences"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Description (Optional)
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                rows="4"
                placeholder="Additional details about your business, target market, problem you solve, etc."
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Industry (Optional)
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="">Select an industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Category (Optional)
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="e.g., SaaS, Service, Product"
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Timeline (weeks)
              </label>
              <input
                type="number"
                name="timeline_weeks"
                min="1"
                max="104"
                value={formData.timeline_weeks}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Investment */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Estimated Investment (USD, Optional)
              </label>
              <input
                type="number"
                name="estimated_investment"
                min="0"
                value={formData.estimated_investment}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="0"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Blueprint'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/blueprints')}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-4 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
