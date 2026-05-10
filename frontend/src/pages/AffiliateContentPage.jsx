import { mockAffiliateEngine } from '../data/mockAffiliate'
import AffiliateContentCard from '../components/affiliate/AffiliateContentCard'
import DisclosureCard from '../components/affiliate/DisclosureCard'
export default function AffiliateContentPage(){return <div className='p-4 bg-slate-950 text-white space-y-3'><AffiliateContentCard title={mockAffiliateEngine.review_post.title} text={mockAffiliateEngine.review_post.body}/><AffiliateContentCard title={mockAffiliateEngine.comparison_post.title} text={mockAffiliateEngine.comparison_post.recommendation_guidance}/><DisclosureCard disclosure={mockAffiliateEngine.disclosure}/></div>}
