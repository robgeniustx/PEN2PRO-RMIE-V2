import { Routes, Route } from 'react-router-dom'
import AffiliatePage from '../pages/AffiliatePage'
import AffiliateProductsPage from '../pages/AffiliateProductsPage'
import AffiliateContentPage from '../pages/AffiliateContentPage'
import AffiliateFunnelPage from '../pages/AffiliateFunnelPage'
import AffiliateTrackerPage from '../pages/AffiliateTrackerPage'

export default function AppRoutes(){return <Routes><Route path='/affiliate' element={<AffiliatePage/>}/><Route path='/affiliate-products' element={<AffiliateProductsPage/>}/><Route path='/affiliate-content' element={<AffiliateContentPage/>}/><Route path='/affiliate-funnel' element={<AffiliateFunnelPage/>}/><Route path='/affiliate-tracker' element={<AffiliateTrackerPage/>}/></Routes>}
