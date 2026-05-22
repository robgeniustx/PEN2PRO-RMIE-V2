import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useBlueprint from '../hooks/useBlueprint'
import useAuth from '../hooks/useAuth'

export default function BlueprintPage() {
  const navigate = useNavigate()
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const blueprints = useBlueprint((state) => state.blueprints)
  const loading = useBlueprint((state) => state.loading)
  const error = useBlueprint((state) => state.error)
  const fetchBlueprints = useBlueprint((state) => state.fetchBlueprints)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    fetchBlueprints()
  }, [isAuthenticated, fetchBlueprints, navigate])

  const handleCreateNew = () => {
    navigate('/blueprints/create')
  }

  const handleViewBlueprint = (id) => {
    navigate(`/blueprints/${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Blueprints</h1>
            <p className="text-gray-600 mt-2">Your business ideas and strategies</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Create Blueprint
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && !blueprints.length && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && blueprints.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4 text-6xl">📋</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No blueprints yet</h2>
            <p className="text-gray-600 mb-6">Create your first blueprint to get started</p>
            <button
              onClick={handleCreateNew}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Create Your First Blueprint
            </button>
          </div>
        )}

        {/* Blueprint Grid */}
        {blueprints.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blueprints.map((blueprint) => (
              <div
                key={blueprint._id}
                onClick={() => handleViewBlueprint(blueprint._id)}
                className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{blueprint.business_idea}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {blueprint.industry || 'General'} • {blueprint.category || 'Business'}
                  </p>
                </div>

                {blueprint.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blueprint.description}
                  </p>
                )}

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="capitalize">
                    {blueprint.status === 'draft' && '📝 Draft'}
                    {blueprint.status === 'active' && '🚀 Active'}
                    {blueprint.status === 'completed' && '✅ Completed'}
                  </span>
                  <span>{blueprint.timeline_weeks || 12} weeks</span>
                </div>

                {blueprint.created_at && (
                  <p className="text-xs text-gray-400 mt-4">
                    Created {new Date(blueprint.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
