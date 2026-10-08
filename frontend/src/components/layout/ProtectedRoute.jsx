import { Navigate, useLocation } from "react-router-dom";

// Sends visitors without a saved session to sign in, then back to where they were headed.
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  let token = "";
  try { token = localStorage.getItem("pen2pro_token") || ""; } catch { /* storage unavailable */ }
  if (!token) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  return children;
}
