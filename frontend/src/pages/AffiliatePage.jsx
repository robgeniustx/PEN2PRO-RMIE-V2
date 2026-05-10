import { useEffect, useState } from 'react'
import { generateAffiliateEngine } from '../api/affiliateApi'
import { useTier } from '../hooks/useTier'
import { getAffiliateAccess } from '../utils/tierAccess'
import AffiliateNicheCard from '../components/affiliate/AffiliateNicheCard'
export default function AffiliatePage(){const {tier}=useTier();const access=getAffiliateAccess(tier);const [data,setData]=useState(null);useEffect(()=>{if(access.preview)generateAffiliateEngine({tier}).then(setData)},[tier]);if(!access.preview)return <div>Affiliate Marketing Engine is available in Elite and Founders.</div>;return <div className='p-4 bg-slate-950 text-white'><h1>Affiliate Engine</h1><p className='text-xs text-orange-400'>Use clear affiliate disclosures in all content.</p><AffiliateNicheCard niche={data?.niche_strategy}/></div>}
