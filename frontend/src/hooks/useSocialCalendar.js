import { useState, useCallback } from 'react'

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export default function useSocialCalendar() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetch_ = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const token = localStorage.getItem('pen2pro_token')
      const res = await fetch(`${API}/api/social/planner`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setPosts(data.posts || data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { posts, loading, error, refresh: fetch_ }
}
