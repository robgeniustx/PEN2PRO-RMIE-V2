import { Navigate, Route, Routes } from "react-router-dom";
import StarterPage from "../pages/StarterPage";
import BlueprintResultsPage from "../pages/BlueprintResultsPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminAnalyticsPage from "../pages/AdminAnalyticsPage";
import AdminConversionsPage from "../pages/AdminConversionsPage";
import AdminFeatureUsagePage from "../pages/AdminFeatureUsagePage";
import AdminRoute from "../components/layout/AdminRoute";

const AppRoutes = () => (<Routes>
<Route path="/" element={<Navigate to="/starter" replace />} />
<Route path="/starter" element={<StarterPage />} />
<Route path="/blueprint/:id" element={<BlueprintResultsPage />} />
<Route path="/admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
<Route path="/admin/analytics" element={<AdminRoute><AdminAnalyticsPage /></AdminRoute>} />
<Route path="/admin/conversions" element={<AdminRoute><AdminConversionsPage /></AdminRoute>} />
<Route path="/admin/features" element={<AdminRoute><AdminFeatureUsagePage /></AdminRoute>} />
<Route path="*" element={<Navigate to="/starter" replace />} /></Routes>);
export default AppRoutes;
