export const TIER_ORDER = ["free", "starter", "pro", "elite", "founders"];

export const creditFundingAccessByTier = {
  starter: "upgrade_only",
  free: "upgrade_only",
  pro: "preview_only",
  elite: "full",
  founders: "full_plus_placeholders",
};

export const getEffectiveTier = (userTier = "free") => {
  const isAdminTestMode = import.meta.env.VITE_ADMIN_TEST_MODE === "true";
  return isAdminTestMode
    ? import.meta.env.VITE_TEST_TIER || "founders"
    : userTier;
};

export const hasTierAccess = (userTier = "free", requiredTier = "free") => {
  const effectiveTier = getEffectiveTier(userTier);
  return TIER_ORDER.indexOf(effectiveTier) >= TIER_ORDER.indexOf(requiredTier);
};
