export const normalizeTier = (tier) => (tier || "free").toLowerCase();
export const tierRank = (tier) => ({ free: 0, pro: 1, elite: 2, founders: 3 }[normalizeTier(tier)] ?? 0);
export const canAccess = (currentTier, requiredTier) => tierRank(currentTier) >= tierRank(requiredTier);

export function tierFromUrl(search = "") {
  return normalizeTier(new URLSearchParams(search).get("tier") || "free");
}

export function isTestTierAccessEnabled() {
  return import.meta.env.MODE !== "production" && String(import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS).toLowerCase() === "true";
}
