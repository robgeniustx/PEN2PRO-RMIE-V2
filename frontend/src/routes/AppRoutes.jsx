import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import PricingPage from "../pages/PricingPage";
import FoundersPage from "../pages/FundingReadinessPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/login-signup" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/founders" element={<FoundersPage />} />
    </Routes>
  );
}
