import { Link, useParams } from 'react-router-dom';
export default function BlueprintResultsPage(){const {id}=useParams(); const tier='pro'; return <Link to={`/website-builder?blueprint_id=${id||''}&tier=${tier}`} className='text-amber-400'>Build a Landing Page From This Blueprint</Link>;}
import {Link, useParams} from 'react-router-dom';
export default function BlueprintResultsPage(){const {id}=useParams(); const tier='pro'; return <div><Link to={`/crm?blueprint_id=${id||''}&tier=${tier}`}>Track Leads for This Blueprint</Link></div>}
import { useNavigate } from 'react-router-dom';
export default function BlueprintResultsPage({ blueprintId='1', tier='pro' }){const nav=useNavigate(); const go=()=>nav(blueprintId?`/social?blueprint_id=${blueprintId}&tier=${tier}`:`/social?tier=${tier}`); return <button onClick={go}>Turn This Blueprint Into a Social Media Plan</button>;}
