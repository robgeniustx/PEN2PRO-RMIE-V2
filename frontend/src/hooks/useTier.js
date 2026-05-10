import { useMemo } from 'react';
import { creditFundingAccessByTier } from '../utils/tierAccess';
export default function useTier(tier='free'){const devBypass=import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS==='true';return useMemo(()=>({tier,creditFundingAccess:devBypass&&tier!=='free'?'full':creditFundingAccessByTier[tier]||'upgrade_only'}),[tier,devBypass])}
