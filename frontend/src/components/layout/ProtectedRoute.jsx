import { Navigate, useLocation } from "react-router-dom";

const TIER_ORDER = { free: 0, starter: 0, pro: 1, elite: 2, founders: 3, admin: 99 };

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "null");
  } catch {
    return null;
  }
}

export default function ProtectedRoute({ children, requiredTier, adminOnly = false }) {
  const location = useLocation();
  const token = localStorage.getItem("pen2pro_token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const user = getUser();

  if (adminOnly) {
    if (!user || user.role !== "admin") {
      return <Navigate to="/dashboard" replace />;
    }
  }

  if (requiredTier && user) {
    const userLevel = TIER_ORDER[user.tier?.toLowerCase()] ?? 0;
    const required = TIER_ORDER[requiredTier?.toLowerCase()] ?? 0;
    if (userLevel < required) {
      return <Navigate to="/pricing" state={{ from: location, requiredTier }} replace />;
    }
  }

  return children;
}
