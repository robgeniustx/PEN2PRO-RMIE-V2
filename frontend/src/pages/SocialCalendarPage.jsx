import SocialCalendar from '../components/social/SocialCalendar'; import { mockSocialEngine } from '../data/mockSocialCalendar';
export default function SocialCalendarPage(){return <div className='p-4 bg-slate-950 min-h-screen'><SocialCalendar calendar={mockSocialEngine.calendar7} /></div>}
