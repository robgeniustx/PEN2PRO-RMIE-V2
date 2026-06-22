import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("pen2pro_token");

  if (!token) return <Navigate to="/login" replace />;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("pen2pro_token");
      localStorage.removeItem("pen2pro_user");
      return <Navigate to="/login" replace />;
    }
  } catch {
    localStorage.removeItem("pen2pro_token");
    return <Navigate to="/login" replace />;
  }

  return children;
}
