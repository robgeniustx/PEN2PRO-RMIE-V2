import { useState } from 'react'; import { useSearchParams } from 'react-router-dom';
import { generateSocialEngine } from '../api/socialApi'; import { mockSocialEngine } from '../data/mockSocialCalendar';
export default function SocialPage(){const [params]=useSearchParams();const [data,setData]=useState(mockSocialEngine);const [tier,setTier]=useState(params.get('tier')||'free');
const submit=async()=>{const payload={tier, business_name:'PEN2PRO Biz', offer:'Growth consulting', ideal_customer:'SMB owners', platform_focus:['instagram'], calendar_length:'7_day', goal:'leads'}; setData(await generateSocialEngine(payload));};
return <div className='p-4 bg-slate-950 min-h-screen'><button className='bg-orange-500 px-3 py-2 rounded' onClick={submit}>Generate Social Engine</button><pre className='text-white text-xs mt-4 whitespace-pre-wrap'>{JSON.stringify(data,null,2)}</pre></div>}
