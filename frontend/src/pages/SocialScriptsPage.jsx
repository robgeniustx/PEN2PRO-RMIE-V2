import SocialScriptCard from '../components/social/SocialScriptCard'; import { mockSocialEngine } from '../data/mockSocialCalendar';
export default function SocialScriptsPage(){return <div className='p-4 bg-slate-950 min-h-screen grid gap-3'>{mockSocialEngine.scripts.map((s,i)=><SocialScriptCard script={s} key={i} />)}</div>}
