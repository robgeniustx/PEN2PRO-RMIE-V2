export default function SocialChecklist({ checklist }) { return <ul className='text-white list-disc pl-5'>{(checklist||[]).map((x,i)=><li key={i}>{x}</li>)}</ul>; }
