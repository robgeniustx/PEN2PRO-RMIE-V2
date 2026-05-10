import { Link } from 'react-router-dom';
export default function DashboardPage({tier='free'}){return <Link to={`/credit-readiness?tier=${tier}`}>Check Credit & Funding Readiness</Link>}
