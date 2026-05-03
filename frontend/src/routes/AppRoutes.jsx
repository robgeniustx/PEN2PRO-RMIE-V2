import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import PricingPage from "../pages/PricingPage";

const Placeholder = ({ label }) => <div>{label}</div>;

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder label="Home" />} />
        <Route path="/starter" element={<Placeholder label="Starter" />} />
        <Route path="/blueprint/:id" element={<Placeholder label="Blueprint" />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<Placeholder label="Dashboard" />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
import { Navigate, Route, Routes } from "react-router-dom";
import BlueprintResultsPage from "../pages/BlueprintResultsPage";
import StarterPage from "../pages/StarterPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/starter" element={<StarterPage />} />
    <Route path="/blueprint/:id" element={<BlueprintResultsPage />} />
    <Route path="*" element={<Navigate to="/starter" replace />} />
  </Routes>
);

export default AppRoutes;
