import { useState, useCallback } from 'react'

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export default function useBlueprint() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [blueprint, setBlueprint] = useState(null)

  const generate = useCallback(async (formData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API}/api/blueprints/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setBlueprint(data)
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return { blueprint, loading, error, generate }
}
