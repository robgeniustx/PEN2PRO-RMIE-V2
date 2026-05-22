import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useBlueprint from '../hooks/useBlueprint'
import useAgent from '../hooks/useAgent'

const AGENTS = ['blueprint', 'seo', 'email', 'gtm', 'financial', 'affiliate', 'social']
const AGENT_LABELS = {
  blueprint: 'Blueprint Agent',
  seo: 'SEO Agent',
  email: 'Email Agent',
  gtm: 'GTM Agent',
  financial: 'Financial Agent',
  affiliate: 'Affiliate Agent',
  social: 'Social Agent',
}

export default function BlueprintDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const getBlueprint = useBlueprint((state) => state.getBlueprint)
  const updateBlueprint = useBlueprint((state) => state.updateBlueprint)
  const currentBlueprint = useBlueprint((state) => state.currentBlueprint)
  const loading = useBlueprint((state) => state.loading)
  const error = useBlueprint((state) => state.error)

  const runAgent = useAgent((state) => state.runAgent)
  const getAgentState = useAgent((state) => state.getAgentState)
  const getAgentKey = useAgent((state) => state.getAgentKey)

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (!id) return
    getBlueprint(id)
  }, [id, getBlueprint])

  useEffect(() => {
    if (currentBlueprint) {
      setFormData(currentBlueprint)
    }
  }, [currentBlueprint])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'timeline_weeks' ? parseInt(value) : value,
    }))
  }

  const handleSave = async () => {
    try {
      await updateBlueprint(id, formData)
      setEditing(false)
    } catch (err) {
      // Error handled in store
    }
  }

  const handleRunAgent = async (agentType) => {
    try {
      await runAgent(id, agentType)
    } catch (err) {
      // Error handled in store
    }
  }

  if (loading && !currentBlueprint) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (error && !currentBlueprint) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/blueprints')}
            className="text-primary-600 hover:text-primary-700"
          >
            Back to Blueprints
          </button>
        </div>
      </div>
    )
  }

  if (!currentBlueprint) return null

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <button
          onClick={() => navigate('/blueprints')}
          className="text-primary-600 hover:text-primary-700 mb-6"
        >
          ← Back to Blueprints
        </button>

        <div className="bg-white rounded-lg shadow p-8 mb-8">
          {/* Title */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{currentBlueprint.business_idea}</h1>
              <p className="text-gray-600 mt-2">
                {currentBlueprint.industry || 'General'} • {currentBlueprint.category || 'Business'}
              </p>
            </div>
            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Edit
              </button>
            )}
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Form or Display */}
          <div className="space-y-6">
            {editing ? (
              <>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Description"
                />

                <input
                  type="number"
                  name="timeline_weeks"
                  value={formData.timeline_weeks || 12}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Timeline (weeks)"
                />

                <input
                  type="number"
                  name="estimated_investment"
                  value={formData.estimated_investment || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Investment"
                />

                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {currentBlueprint.description && (
                  <p className="text-gray-600">{currentBlueprint.description}</p>
                )}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>Timeline: {currentBlueprint.timeline_weeks || 12} weeks</div>
                  <div>
                    Investment: ${currentBlueprint.estimated_investment || 'Not specified'}
                  </div>
                  <div>Status: {currentBlueprint.status}</div>
                  <div>
                    Created: {new Date(currentBlueprint.created_at).toLocaleDateString()}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Agent Buttons */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Run AI Agents</h2>
          <p className="text-gray-600 mb-6">
            Run specialized AI agents to generate strategies for your business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AGENTS.map((agentType) => {
              const agentState = getAgentState(id, agentType)
              return (
                <button
                  key={agentType}
                  onClick={() => handleRunAgent(agentType)}
                  disabled={agentState.running}
                  className="p-4 bg-primary-50 hover:bg-primary-100 border-2 border-primary-200 rounded-lg transition disabled:opacity-50"
                >
                  <div className="font-semibold text-gray-900">{AGENT_LABELS[agentType]}</div>
                  {agentState.running && (
                    <div className="text-sm text-primary-600 mt-2">Running...</div>
                  )}
                  {agentState.result && (
                    <div className="text-sm text-green-600 mt-2">✓ Complete</div>
                  )}
                  {agentState.error && (
                    <div className="text-sm text-red-600 mt-2">✗ Error</div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Agent Results */}
        <div className="space-y-6">
          {AGENTS.map((agentType) => {
            const agentState = getAgentState(id, agentType)
            const result = agentState.result

            if (!result) return null

            return (
              <div key={agentType} className="bg-white rounded-lg shadow p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {AGENT_LABELS[agentType]} Results
                </h3>
                <pre className="bg-gray-50 p-4 rounded text-xs overflow-auto max-h-96">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
