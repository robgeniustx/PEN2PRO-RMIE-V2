import {useMemo} from 'react'; import {getCrmAccess} from '../utils/tierAccess';
export function useTier(tier='free'){return useMemo(()=>getCrmAccess(tier),[tier]);}
import { useMemo } from 'react';
import { socialTierAccess } from '../utils/tierAccess';

export function useTier(tier = 'free') {
  const effectiveTier = import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS === 'true' ? (tier || 'founders') : (tier || 'free');
  return useMemo(() => ({ tier: effectiveTier, access: socialTierAccess[effectiveTier] || socialTierAccess.free }), [effectiveTier]);
}
