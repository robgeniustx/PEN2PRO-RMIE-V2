import { Navigate, useLocation } from "react-router-dom";
import { isSignedIn } from "../../api/authApi";

// Sends visitors without a saved session to sign in, then back to where they were headed.
// The server still checks the session on every request, so this only decides what the page shows.
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  if (!isSignedIn()) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  return children;
}
