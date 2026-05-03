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
