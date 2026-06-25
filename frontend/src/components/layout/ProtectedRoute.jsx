import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, requiredTier = null }) {
  const token = localStorage.getItem("pen2pro_token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (requiredTier) {
    try {
      const user = JSON.parse(localStorage.getItem("pen2pro_user") || "{}");
      const TIER_RANK = { free: 0, pro: 1, elite: 2, founders: 3 };
      const userRank = TIER_RANK[user.tier] ?? 0;
      const requiredRank = TIER_RANK[requiredTier] ?? 0;
      if (userRank < requiredRank) {
        return <Navigate to="/pricing" replace />;
      }
    } catch {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
}
