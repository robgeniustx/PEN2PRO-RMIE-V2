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
import { DEFAULT_TIER, TIER_CONFIG } from "../data/tierConfig";
import { getTierFromSearch, resolveTier } from "../utils/tierAccess";

export const useTier = () => {
  const location = useLocation();

  return useMemo(() => {
    const queryTier = getTierFromSearch(location.search);
    const tier = resolveTier(queryTier);
    return {
      tier,
      tierConfig: TIER_CONFIG[tier] || TIER_CONFIG[DEFAULT_TIER],
      requestedTier: queryTier,
    };
  }, [location.search]);
};
// TODO useTier
