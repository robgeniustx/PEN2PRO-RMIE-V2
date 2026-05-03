import {Link, useParams} from 'react-router-dom';
export default function BlueprintResultsPage(){const {id}=useParams(); const tier='pro'; return <div><Link to={`/crm?blueprint_id=${id||''}&tier=${tier}`}>Track Leads for This Blueprint</Link></div>}
