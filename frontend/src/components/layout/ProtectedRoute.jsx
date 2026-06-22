import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const location = useLocation()
  const token = localStorage.getItem('pen2pro_token')

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}
