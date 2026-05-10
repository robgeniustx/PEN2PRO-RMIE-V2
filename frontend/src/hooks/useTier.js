export default function useTier(){
  const test = import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS === 'true';
  const tier = new URLSearchParams(window.location.search).get('tier') || (test ? 'elite' : 'free');
  return { tier };
}
