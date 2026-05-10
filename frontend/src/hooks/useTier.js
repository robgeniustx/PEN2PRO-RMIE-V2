export const useTier = () => {
  const test = import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS === 'true'
  const tier = test ? 'elite' : (localStorage.getItem('tier') || 'free')
  return { tier }
}
