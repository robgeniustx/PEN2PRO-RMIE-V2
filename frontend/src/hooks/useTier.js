import {useMemo} from 'react'; import {getCrmAccess} from '../utils/tierAccess';
export function useTier(tier='free'){return useMemo(()=>getCrmAccess(tier),[tier]);}
