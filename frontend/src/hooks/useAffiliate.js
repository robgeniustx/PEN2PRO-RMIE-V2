import { useState, useCallback } from 'react'

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export default function useAffiliate() {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetch_ = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API}/api/affiliate/links`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setLinks(data.links || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { links, loading, error, refresh: fetch_ }
}
