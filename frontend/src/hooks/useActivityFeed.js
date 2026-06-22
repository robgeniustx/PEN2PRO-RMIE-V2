import { useState, useCallback } from 'react'

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export default function useActivityFeed() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('pen2pro_token')
      const res = await fetch(`${API}/api/activity`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setItems(data.items || data || [])
    } catch {
      setItems([])
    } finally {
      setLoading(false)
    }
  }, [])

  return { items, loading, refresh }
}
