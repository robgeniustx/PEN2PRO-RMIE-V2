import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function EmailMarketingPage() {
  const navigate = useNavigate()
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const tier = useAuth((state) => state.user?.tier)
  const [lists, setLists] = useState([])
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('lists') // lists, campaigns
  const [newList, setNewList] = useState({
    name: '',
    description: '',
  })

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    if (tier === 'STARTER') {
      alert('Email marketing is available for Pro and Elite tiers')
      navigate('/blueprints')
      return
    }

    fetchData()
  }, [isAuthenticated, navigate, tier])

  const fetchData = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('access_token')

      const listsRes = await fetch('http://localhost:8000/email/lists', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const listData = await listsRes.json()
      setLists(listData)

      const campaignsRes = await fetch('http://localhost:8000/email/campaigns', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const campaignData = await campaignsRes.json()
      setCampaigns(campaignData)
    } catch (error) {
      console.error('Failed to fetch email data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateList = async (e) => {
    e.preventDefault()
    if (!newList.name.trim()) return

    try {
      const token = localStorage.getItem('access_token')
      const res = await fetch('http://localhost:8000/email/lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newList),
      })

      if (res.ok) {
        const list = await res.json()
        setLists([list, ...lists])
        setNewList({ name: '', description: '' })
      }
    } catch (error) {
      console.error('Failed to create list:', error)
    }
  }

  const handleCreateCampaign = async (listId) => {
    // Navigate to campaign builder
    navigate(`/email/campaigns/create?list=${listId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Email Marketing</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('lists')}
            className={`py-2 px-4 font-semibold ${
              activeTab === 'lists'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Email Lists
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`py-2 px-4 font-semibold ${
              activeTab === 'campaigns'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Campaigns
          </button>
        </div>

        {/* Email Lists Tab */}
        {activeTab === 'lists' && (
          <div>
            {/* Create List Form */}
            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Email List</h2>

              <form onSubmit={handleCreateList} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    List Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newList.name}
                    onChange={(e) => setNewList({ ...newList, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="e.g., Newsletter Subscribers"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newList.description}
                    onChange={(e) => setNewList({ ...newList, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="What is this list for?"
                    rows="3"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition disabled:opacity-50"
                >
                  Create List
                </button>
              </form>
            </div>

            {/* Lists Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Lists</h2>

              {lists.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-gray-600">No email lists yet</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lists.map((list) => (
                  <div key={list._id} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900">{list.name}</h3>
                    {list.description && (
                      <p className="text-sm text-gray-600 mt-2">{list.description}</p>
                    )}

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>{list.subscriber_count}</strong> subscribers
                      </p>
                    </div>

                    <div className="mt-6 flex gap-2">
                      <button
                        onClick={() => navigate(`/email/lists/${list._id}`)}
                        className="flex-1 bg-primary-50 hover:bg-primary-100 text-primary-600 font-semibold py-2 px-4 rounded-lg transition"
                      >
                        Manage
                      </button>
                      <button
                        onClick={() => handleCreateCampaign(list._id)}
                        className="flex-1 bg-accent-50 hover:bg-accent-100 text-accent-600 font-semibold py-2 px-4 rounded-lg transition"
                      >
                        Campaign
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Campaigns</h2>

            {campaigns.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600 mb-4">No campaigns yet</p>
                <p className="text-sm text-gray-500">Create an email list first, then build campaigns</p>
              </div>
            )}

            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign._id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{campaign.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">Subject: {campaign.subject}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Status: <strong>{campaign.status}</strong>
                      </p>
                      {campaign.status === 'sent' && (
                        <p className="text-sm text-green-600 mt-1">
                          Sent to {campaign.sent_count} subscribers
                        </p>
                      )}
                    </div>
                    {campaign.status === 'draft' && (
                      <button
                        onClick={() => navigate(`/email/campaigns/${campaign._id}`)}
                        className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition text-sm"
                      >
                        Edit & Send
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
