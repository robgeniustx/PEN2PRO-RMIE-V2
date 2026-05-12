import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import StarterPage from "../pages/StarterPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import BlueprintResultsPage from "../pages/BlueprintResultsPage";

import FoundersPage from "../pages/FoundersPage";
import BuilderPage from "../pages/BuilderPage";
import AcceleratorPage from "../pages/AcceleratorPage";
import LegacyFounderPage from "../pages/LegacyFounderPage";
import CheckoutPage from "../pages/CheckoutPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public marketing */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<Navigate to="/login" replace />} />
      <Route path="/login-signup" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />

      {/* Blueprint flow */}
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/blueprint/:id" element={<BlueprintResultsPage />} />

      {/* Tier landing pages */}
      <Route path="/builder" element={<BuilderPage />} />
      <Route path="/accelerator" element={<AcceleratorPage />} />
      <Route path="/founders" element={<FoundersPage />} />
      <Route path="/legacy-founder" element={<LegacyFounderPage />} />

      {/* Checkout routes — :tier matches pro | elite | founders */}
      <Route path="/checkout/:tier" element={<CheckoutPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />

      {/* Protected app */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Catch-all → home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
