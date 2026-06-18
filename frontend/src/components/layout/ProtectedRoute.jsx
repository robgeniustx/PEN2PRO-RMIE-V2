import { Navigate, useLocation } from 'react-router-dom'

function getStoredToken() {
  return localStorage.getItem('pen2pro_token')
}

export default function ProtectedRoute({ children }) {
  const location = useLocation()
  if (!getStoredToken()) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
