export const TIER_ORDER = ["free", "pro", "elite", "founders"];

export const TIER_CONFIG = {
  free: { key: "free", name: "Free Forever", price: 0, cadence: "forever" },
  pro: { key: "pro", name: "Pro", price: 89, cadence: "mo" },
  elite: { key: "elite", name: "Elite", price: 149, cadence: "mo" },
  founders: {
    key: "founders",
    name: "Founders Lifetime",
    price: 899,
    cadence: "lifetime",
  },
};

export const DEFAULT_TIER = "free";
