export function useTier() { const test = import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS === 'true'; const tier = test ? 'founders' : 'free'; return { tier, isPaid: tier !== 'free' }; }
