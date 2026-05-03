import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { isTestTierAccessEnabled, normalizeTier, tierFromUrl } from "../utils/tierAccess";

export function useTier(defaultTier = "free") {
  const location = useLocation();
  return useMemo(() => {
    const queryTier = tierFromUrl(location.search);
    if (queryTier !== "free") return queryTier;
    if (isTestTierAccessEnabled()) return "founders";
    // TODO: Replace with authenticated subscription tier from backend profile/session.
    return normalizeTier(defaultTier);
  }, [defaultTier, location.search]);
}
