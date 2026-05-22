import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function WebsiteBuilderPage() {
  const navigate = useNavigate()
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const [websites, setWebsites] = useState([])
  const [loading, setLoading] = useState(false)
  const [newWebsite, setNewWebsite] = useState({
    name: '',
    domain: '',
    template: 'blank',
  })

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    fetchWebsites()
  }, [isAuthenticated, navigate])

  const fetchWebsites = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('access_token')
      const res = await fetch('http://localhost:8000/websites/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setWebsites(data)
    } catch (error) {
      console.error('Failed to fetch websites:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateWebsite = async (e) => {
    e.preventDefault()
    if (!newWebsite.name.trim()) return

    try {
      const token = localStorage.getItem('access_token')
      const res = await fetch('http://localhost:8000/websites/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newWebsite),
      })

      if (res.ok) {
        const website = await res.json()
        setWebsites([website, ...websites])
        setNewWebsite({ name: '', domain: '', template: 'blank' })
        navigate(`/websites/${website._id}`)
      }
    } catch (error) {
      console.error('Failed to create website:', error)
    }
  }

  const handleDeleteWebsite = async (id) => {
    if (!window.confirm('Delete this website?')) return

    try {
      const token = localStorage.getItem('access_token')
      const res = await fetch(`http://localhost:8000/websites/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.ok) {
        setWebsites(websites.filter((w) => w._id !== id))
      }
    } catch (error) {
      console.error('Failed to delete website:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Website Builder</h1>
            <p className="text-gray-600 mt-2">Create and manage your websites</p>
          </div>
          <button
            onClick={() => document.getElementById('createForm').scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Create Website
          </button>
        </div>

        {/* Create Form */}
        <div id="createForm" className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Website</h2>

          <form onSubmit={handleCreateWebsite} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Website Name *
              </label>
              <input
                type="text"
                required
                value={newWebsite.name}
                onChange={(e) => setNewWebsite({ ...newWebsite, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 outline-none"
                placeholder="My Business"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Domain (Optional)
              </label>
              <input
                type="text"
                value={newWebsite.domain}
                onChange={(e) => setNewWebsite({ ...newWebsite, domain: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 outline-none"
                placeholder="mysite.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Template
              </label>
              <select
                value={newWebsite.template}
                onChange={(e) => setNewWebsite({ ...newWebsite, template: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 outline-none"
              >
                <option value="blank">Blank</option>
                <option value="business">Business</option>
                <option value="portfolio">Portfolio</option>
                <option value="ecommerce">E-Commerce</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create'}
              </button>
            </div>
          </form>
        </div>

        {/* Websites Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Websites</h2>

          {websites.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600 mb-4">No websites yet</p>
              <p className="text-sm text-gray-500">Create your first website to get started</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((website) => (
              <div key={website._id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{website.name}</h3>
                  {website.domain && (
                    <p className="text-sm text-gray-600 mt-1">{website.domain}</p>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {website.published ? '✓ Published' : '📝 Draft'}
                      </span>
                      <span className="text-gray-500">
                        {new Date(website.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button
                      onClick={() => navigate(`/websites/${website._id}`)}
                      className="flex-1 bg-accent-50 hover:bg-accent-100 text-accent-600 font-semibold py-2 px-4 rounded-lg transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteWebsite(website._id)}
                      className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
