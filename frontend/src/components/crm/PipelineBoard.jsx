const cols=['new','contacted','follow_up','won','lost'];
export default function PipelineBoard({leads=[]}){return <div className='grid md:grid-cols-5 gap-3'>{cols.map(c=><div key={c} className='bg-slate-900 p-3 rounded'><h4>{c}</h4>{leads.filter(l=>l.status===c).map(l=><div key={l.id}>{l.name}</div>)}</div>)}</div>}
