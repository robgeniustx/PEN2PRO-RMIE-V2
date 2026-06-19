import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children, requiredTier = null }) {
  const location = useLocation()
  const token = localStorage.getItem('pen2pro_token')

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  if (requiredTier) {
    try {
      const user = JSON.parse(localStorage.getItem('pen2pro_user') || '{}')
      const tierOrder = ['free', 'pro', 'elite', 'founders']
      const userTierIndex = tierOrder.indexOf((user.tier || 'free').toLowerCase())
      const requiredTierIndex = tierOrder.indexOf(requiredTier.toLowerCase())
      if (userTierIndex < requiredTierIndex) {
        return <Navigate to="/pricing" replace />
      }
    } catch {
      return <Navigate to="/signin" replace />
    }
  }

  return children
}
