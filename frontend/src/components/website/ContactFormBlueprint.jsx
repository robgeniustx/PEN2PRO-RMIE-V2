export default function ContactFormBlueprint({ data={} }) { return <div className='p-3 bg-slate-900 rounded border border-blue-600'>Fields: {(data.fields||[]).join(', ')}</div>; }
