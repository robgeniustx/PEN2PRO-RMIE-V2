import { useNavigate } from 'react-router-dom';
export default function BlueprintResultsPage({ blueprintId='1', tier='pro' }){const nav=useNavigate(); const go=()=>nav(blueprintId?`/social?blueprint_id=${blueprintId}&tier=${tier}`:`/social?tier=${tier}`); return <button onClick={go}>Turn This Blueprint Into a Social Media Plan</button>;}
