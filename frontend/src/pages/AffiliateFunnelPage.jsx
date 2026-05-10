import { mockAffiliateEngine } from '../data/mockAffiliate'
import AffiliateFunnelCard from '../components/affiliate/AffiliateFunnelCard'
export default function AffiliateFunnelPage(){return <div className='p-4 bg-slate-950 text-white'><AffiliateFunnelCard funnel={mockAffiliateEngine.funnel}/></div>}
