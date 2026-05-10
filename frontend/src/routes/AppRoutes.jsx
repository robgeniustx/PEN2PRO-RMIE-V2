import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminRoute from '../components/layout/AdminRoute'
import AdminAnalyticsPage from '../pages/AdminAnalyticsPage'
import AdminConversionsPage from '../pages/AdminConversionsPage'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import AdminFeatureUsagePage from '../pages/AdminFeatureUsagePage'

const Placeholder = ({ label }) => <div className='p-4'>{label}</div>

export default function AppRoutes(){return <BrowserRouter><Routes>
<Route path='/' element={<Placeholder label='Home'/>}/>
<Route path='/starter' element={<Placeholder label='Starter'/>}/><Route path='/blueprint/:id' element={<Placeholder label='Blueprint'/>}/><Route path='/pricing' element={<Placeholder label='Pricing'/>}/><Route path='/payment-success' element={<Placeholder label='Payment success'/>}/><Route path='/social' element={<Placeholder label='Social'/>}/><Route path='/crm' element={<Placeholder label='CRM'/>}/><Route path='/website-builder' element={<Placeholder label='Website builder'/>}/><Route path='/affiliate' element={<Placeholder label='Affiliate'/>}/><Route path='/credit-readiness' element={<Placeholder label='Credit readiness'/>}/><Route path='/funding-readiness' element={<Placeholder label='Funding readiness'/>}/><Route path='/automation' element={<Placeholder label='Automation'/>}/><Route path='/tasks' element={<Placeholder label='Tasks'/>}/><Route path='/live' element={<Placeholder label='Live'/>}/>
<Route path='/admin' element={<AdminRoute><AdminDashboardPage/></AdminRoute>}/><Route path='/admin/analytics' element={<AdminRoute><AdminAnalyticsPage/></AdminRoute>}/><Route path='/admin/conversions' element={<AdminRoute><AdminConversionsPage/></AdminRoute>}/><Route path='/admin/features' element={<AdminRoute><AdminFeatureUsagePage/></AdminRoute>}/>
<Route path='*' element={<Navigate to='/' replace/>}/></Routes></BrowserRouter>}
