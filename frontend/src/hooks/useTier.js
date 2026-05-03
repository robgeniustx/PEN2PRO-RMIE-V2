import { useMemo } from "react";
import { useLocation } from "react-router-dom";
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
