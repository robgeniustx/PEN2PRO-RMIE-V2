import SocialPostCard from '../components/social/SocialPostCard'; import { mockSocialEngine } from '../data/mockSocialCalendar';
export default function SocialPostsPage(){return <div className='p-4 bg-slate-950 min-h-screen grid gap-3'>{mockSocialEngine.posts.map((p,i)=><SocialPostCard post={p} key={i} />)}</div>}
