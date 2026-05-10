import { useEffect, useState } from 'react'
import { getAdminMetrics } from '../api/adminApi'
import AdminMetricCard from '../components/admin/AdminMetricCard'
import AdminNotice from '../components/admin/AdminNotice'
import ModuleUsageChart from '../components/admin/ModuleUsageChart'
import ConversionFunnel from '../components/admin/ConversionFunnel'
import RecentActivityTable from '../components/admin/RecentActivityTable'

export default function AdminDashboardPage(){const [m,setM]=useState(null); useEffect(()=>{getAdminMetrics().then(setM)},[]); if(!m) return null; return <div className='p-4 bg-slate-950 min-h-screen space-y-4'><AdminNotice/><div className='grid grid-cols-2 gap-3'><AdminMetricCard label='Total users' value={m.total_users}/><AdminMetricCard label='Total blueprints' value={m.total_blueprints}/></div><ModuleUsageChart data={m.module_usage}/><ConversionFunnel data={m.funnel_summary}/><RecentActivityTable data={m.recent_activity}/></div>}
