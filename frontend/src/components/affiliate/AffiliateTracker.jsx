import { useState } from 'react'
export default function AffiliateTracker({ links = [] }) { const [rows,setRows]=useState(links); return <div className='bg-slate-900 p-4 rounded border border-cyan-500'><h3>Manual Tracker</h3>{rows.length===0?<p>No links yet.</p>:rows.map(r=><div key={r.id||r.product_name}>{r.product_name} - {r.clicks||0}/{r.conversions||0}</div>)}</div> }
