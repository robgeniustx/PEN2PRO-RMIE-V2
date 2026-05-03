import {useState} from 'react'; import {generateFollowUpMessage} from '../../api/crmApi';
export default function FollowUpWriter(){const [msg,setMsg]=useState(''); const [copied,setCopied]=useState(false); async function go(){const r=await generateFollowUpMessage({lead_name:'Lead',offer:'Offer',channel:'dm',objective:'follow_up'}); setMsg(r.message||'');}
return <div><button onClick={go}>Generate</button><pre>{msg}</pre><button onClick={()=>{navigator.clipboard.writeText(msg);setCopied(true);setTimeout(()=>setCopied(false),1200)}}>Copy</button>{copied&&<span>Copied</span>}</div>}
