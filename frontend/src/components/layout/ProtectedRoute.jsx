import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, requireTier = null }) {
  const location = useLocation();
  const token = localStorage.getItem("pen2pro_token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (requireTier) {
    const tier = localStorage.getItem("pen2pro_tier") || "free";
    const TIER_ORDER = { free: 0, pro: 1, elite: 2, founders: 3 };
    const userLevel = TIER_ORDER[tier] ?? 0;
    const requiredLevel = TIER_ORDER[requireTier] ?? 1;
    if (userLevel < requiredLevel) {
      return <Navigate to="/pricing" state={{ from: location.pathname, requiredTier: requireTier }} replace />;
    }
  }

  return children;
}
