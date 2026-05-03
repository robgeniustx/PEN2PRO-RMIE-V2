import { Link, useParams } from 'react-router-dom';
export default function BlueprintResultsPage(){const {id}=useParams(); const tier='pro'; return <Link to={`/website-builder?blueprint_id=${id||''}&tier=${tier}`} className='text-amber-400'>Build a Landing Page From This Blueprint</Link>;}
