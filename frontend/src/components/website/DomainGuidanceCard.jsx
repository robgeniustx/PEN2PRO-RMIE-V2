export default function DomainGuidanceCard({ data={} }) { return <div className='p-3 bg-slate-900 rounded border border-blue-600'>Rules: {(data.rules||data.principles||[]).join(', ')}</div>; }
