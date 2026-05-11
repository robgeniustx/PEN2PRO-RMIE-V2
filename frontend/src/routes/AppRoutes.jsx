import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import WaitlistPage from "../pages/WaitlistPage";
import PricingPage from "../pages/PricingPage";
import StarterPage from "../pages/StarterPage";
import BlueprintResultsPage from "../pages/BlueprintResultsPage";
import DashboardPage from "../pages/DashboardPage";
import FundingReadinessPage from "../pages/FundingReadinessPage";
import CreditReadinessPage from "../pages/CreditReadinessPage";
import AffiliatePage from "../pages/AffiliatePage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminWaitlistPage from "../pages/AdminWaitlistPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />
      <Route path="/waitlist" element={<WaitlistPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />

      {/* Roadmap flow */}
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/roadmap" element={<StarterPage />} />
      <Route path="/blueprint/:id" element={<BlueprintResultsPage />} />
      <Route path="/results" element={<BlueprintResultsPage />} />

      {/* Resource pages */}
      <Route path="/funding" element={<FundingReadinessPage />} />
      <Route path="/funding-readiness" element={<FundingReadinessPage />} />
      <Route path="/credit-repair" element={<CreditReadinessPage />} />
      <Route path="/credit-readiness" element={<CreditReadinessPage />} />
      <Route path="/affiliate" element={<AffiliatePage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/waitlist" element={<AdminWaitlistPage />} />

      {/* Aliases */}
      <Route path="/founders" element={<Navigate to="/waitlist?tier=founders" replace />} />
      <Route path="/features" element={<Navigate to="/#features" replace />} />
      <Route path="/about" element={<Navigate to="/" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
