import { Link } from 'react-router-dom';
export default function WebsiteBuilderPage({tier='free',blueprint_id=''}){const q=`?${blueprint_id?`blueprint_id=${blueprint_id}&`:''}tier=${tier}`;return <Link to={`/funding-readiness${q}`}>Prepare for Business Credit & Funding</Link>}
