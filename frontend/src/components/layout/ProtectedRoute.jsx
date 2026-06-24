import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('pen2pro_token')
  const location = useLocation()

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}
