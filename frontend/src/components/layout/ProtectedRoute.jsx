import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const location = useLocation();

  const token = localStorage.getItem("pen2pro_token");
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly) {
    try {
      const user = JSON.parse(localStorage.getItem("pen2pro_user") || "{}");
      if (user?.role !== "admin") {
        return <Navigate to="/dashboard" replace />;
      }
    } catch {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
}
