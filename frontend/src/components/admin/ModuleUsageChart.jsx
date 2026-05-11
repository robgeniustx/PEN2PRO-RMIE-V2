import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export default function ModuleUsageChart({data=[]}){if(!data.length)return <p>No module usage data.</p>;return <div className='h-64'><ResponsiveContainer><BarChart data={data}><XAxis dataKey='module_name'/><YAxis/><Tooltip/><Bar dataKey='usage_count' fill='#22d3ee'/></BarChart></ResponsiveContainer></div>}
