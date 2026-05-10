import AffiliateTracker from '../components/affiliate/AffiliateTracker'
import { mockAffiliateEngine } from '../data/mockAffiliate'
export default function AffiliateTrackerPage(){return <div className='p-4 bg-slate-950 text-white'><AffiliateTracker links={mockAffiliateEngine.link_tracker}/></div>}
