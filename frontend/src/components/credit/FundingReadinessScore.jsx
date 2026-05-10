export default function FundingReadinessScore({data}){if(!data) return null; return <div><h3>Score: {data.readiness_score}</h3><p>{data.readiness_level}</p></div>}
