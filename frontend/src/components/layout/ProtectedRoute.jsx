import { Navigate, useLocation } from "react-router-dom"

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Preserves the intended destination in location state so login can redirect back.
 */
export default function ProtectedRoute({ children }) {
  const location = useLocation()
  const token = localStorage.getItem("pen2pro_token")

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
