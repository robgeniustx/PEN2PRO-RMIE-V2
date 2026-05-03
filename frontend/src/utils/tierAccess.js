export const normalizeTier = (tier) => (tier || "free").toLowerCase();
export const tierRank = (tier) => ({ free: 0, pro: 1, elite: 2, founders: 3 }[normalizeTier(tier)] ?? 0);
export const canAccess = (currentTier, requiredTier) => tierRank(currentTier) >= tierRank(requiredTier);

export function tierFromUrl(search = "") {
  return normalizeTier(new URLSearchParams(search).get("tier") || "free");
}

export function isTestTierAccessEnabled() {
  return import.meta.env.MODE !== "production" && String(import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS).toLowerCase() === "true";
}
import { DEFAULT_TIER, TIER_CONFIG, TIER_ORDER } from "../data/tierConfig";

export const normalizeTier = (tier) => {
  if (!tier || typeof tier !== "string") return DEFAULT_TIER;
  const normalized = tier.toLowerCase().trim();
  return TIER_CONFIG[normalized] ? normalized : DEFAULT_TIER;
};

export const getTierFromSearch = (search = "") => {
  const params = new URLSearchParams(search);
  return normalizeTier(params.get("tier"));
};

export const canAccessTier = (tier) => {
  const normalized = normalizeTier(tier);
  if (normalized === "free") return true;
  return import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS === "true";
};

export const resolveTier = (requestedTier) => {
  const normalized = normalizeTier(requestedTier);
  return canAccessTier(normalized) ? normalized : DEFAULT_TIER;
};

export const hasTierAccess = (currentTier, requiredTier) => {
  return TIER_ORDER.indexOf(normalizeTier(currentTier)) >= TIER_ORDER.indexOf(normalizeTier(requiredTier));
};
