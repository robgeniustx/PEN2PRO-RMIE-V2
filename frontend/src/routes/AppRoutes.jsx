import { Routes, Route, Navigate } from "react-router-dom";

// ── Existing pages ──
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import WaitlistPage from "../pages/WaitlistPage";
import PricingPage from "../pages/PricingPage";
import StarterPage from "../pages/StarterPage";
import BlueprintResultsPage from "../pages/BlueprintResultsPage";
import DashboardWorkspacePage from "../pages/DashboardWorkspacePage";
import FundingReadinessPage from "../pages/FundingReadinessPage";
import CreditReadinessPage from "../pages/CreditReadinessPage";
import AffiliatePage from "../pages/AffiliatePage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminWaitlistPage from "../pages/AdminWaitlistPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import NotFoundPage from "../pages/NotFoundPage";
import VoiceAgentPage from "../pages/VoiceAgentPage";
import WebsiteBuilderPage from "../pages/WebsiteBuilderPage";

// ── New Phase 1 pages ──
import AboutPage from "../pages/AboutPage";
import BusinessOSPage from "../pages/BusinessOSPage";
import RMIEPage from "../pages/RMIEPage";
import CommandCenterPage from "../pages/CommandCenterPage";
import VoiceAgentDashboardPage from "../pages/VoiceAgentDashboardPage";
import VoiceAgentSubPage from "../pages/VoiceAgentSubPage";
import WebsiteBuilderLandingPage from "../pages/WebsiteBuilderLandingPage";
import WebsiteBuilderSubPage from "../pages/WebsiteBuilderSubPage";
import DomainSearchPage from "../pages/DomainSearchPage";
import AgentCommandCenterPage from "../pages/AgentCommandCenterPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ── Public / Marketing ── */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/businessos" element={<BusinessOSPage />} />
      <Route path="/rmie" element={<RMIEPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/waitlist" element={<WaitlistPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />

      {/* ── Auth ── */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />

      {/* ── RMIE Roadmap Flow ── */}
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/roadmap" element={<StarterPage />} />
      <Route path="/blueprint/:id" element={<BlueprintResultsPage />} />
      <Route path="/results" element={<BlueprintResultsPage />} />

      {/* ── Resource Pages ── */}
      <Route path="/funding" element={<FundingReadinessPage />} />
      <Route path="/funding-readiness" element={<FundingReadinessPage />} />
      <Route path="/credit-repair" element={<CreditReadinessPage />} />
      <Route path="/credit-readiness" element={<CreditReadinessPage />} />
      <Route path="/affiliate" element={<AffiliatePage />} />

      {/* ── Dashboard ── */}
      <Route path="/dashboard" element={<DashboardWorkspacePage />} />
      <Route path="/dashboard/:moduleKey" element={<DashboardWorkspacePage />} />

      {/* ── P2P Command Center ── */}
      <Route path="/command-center" element={<CommandCenterPage />} />
      <Route path="/command-center/dashboard" element={<Navigate to="/dashboard" replace />} />
      <Route path="/command-center/customers" element={<Navigate to="/dashboard/contacts" replace />} />
      <Route path="/command-center/leads" element={<Navigate to="/dashboard/lead-inbox" replace />} />
      <Route path="/command-center/opportunities" element={<Navigate to="/dashboard/pipeline" replace />} />
      <Route path="/command-center/pipeline" element={<Navigate to="/dashboard/pipeline" replace />} />
      <Route path="/command-center/quotes" element={<Navigate to="/dashboard/estimates" replace />} />
      <Route path="/command-center/invoices" element={<Navigate to="/dashboard/invoices" replace />} />
      <Route path="/command-center/calendar" element={<Navigate to="/dashboard/calendar" replace />} />
      <Route path="/command-center/reputation" element={<Navigate to="/dashboard/reputation" replace />} />
      <Route path="/command-center/reports" element={<Navigate to="/dashboard/reports" replace />} />
      <Route path="/command-center/automations" element={<Navigate to="/dashboard/automations" replace />} />
      <Route path="/command-center/funnels" element={<Navigate to="/dashboard/funnels" replace />} />
      <Route path="/command-center/forms" element={<Navigate to="/dashboard/lead-inbox" replace />} />
      <Route path="/command-center/websites" element={<Navigate to="/dashboard/websites" replace />} />
      <Route path="/command-center/domains" element={<Navigate to="/dashboard/domains" replace />} />
      <Route path="/command-center/settings" element={<Navigate to="/dashboard/settings" replace />} />
      <Route path="/command-center/upgrade" element={<Navigate to="/pricing" replace />} />
      <Route path="/command-center/agents" element={<AgentCommandCenterPage />} />
      <Route path="/agent-command-center" element={<AgentCommandCenterPage />} />

      {/* ── P2P AI Voice Agent ── */}
      <Route path="/voice-agent" element={<VoiceAgentPage />} />
      <Route path="/voice" element={<VoiceAgentPage />} />
      <Route path="/voice-agent/dashboard" element={<VoiceAgentDashboardPage />} />
      <Route path="/voice-agent/calls" element={<VoiceAgentSubPage />} />
      <Route path="/voice-agent/scripts" element={<VoiceAgentSubPage />} />
      <Route path="/voice-agent/calendar" element={<VoiceAgentSubPage />} />
      <Route path="/voice-agent/settings" element={<VoiceAgentSubPage />} />
      <Route path="/voice-agent/pricing" element={<VoiceAgentSubPage />} />

      {/* ── Website Builder ── */}
      <Route path="/website-builder" element={<WebsiteBuilderLandingPage />} />
      <Route path="/website-builder/templates" element={<WebsiteBuilderSubPage />} />
      <Route path="/website-builder/editor" element={<WebsiteBuilderPage />} />
      <Route path="/website-builder/domains" element={<WebsiteBuilderSubPage />} />

      {/* ── Domain Finder ── */}
      <Route path="/domain-search" element={<DomainSearchPage />} />

      {/* ── Admin ── */}
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/waitlist" element={<AdminWaitlistPage />} />

      {/* ── Aliases / Redirects ── */}
      <Route path="/founders" element={<Navigate to="/waitlist?tier=founders" replace />} />
      <Route path="/legacy-founder" element={<Navigate to="/waitlist?tier=founders" replace />} />
      <Route path="/pro" element={<Navigate to="/pricing#pro" replace />} />
      <Route path="/elite" element={<Navigate to="/pricing#elite" replace />} />
      <Route path="/builder" element={<Navigate to="/command-center" replace />} />
      <Route path="/accelerator" element={<Navigate to="/rmie" replace />} />
      <Route path="/features" element={<Navigate to="/#features" replace />} />
      <Route path="/crm" element={<Navigate to="/command-center" replace />} />
      <Route path="/contacts" element={<Navigate to="/dashboard/contacts" replace />} />
      <Route path="/lead-inbox" element={<Navigate to="/dashboard/lead-inbox" replace />} />
      <Route path="/pipeline" element={<Navigate to="/dashboard/pipeline" replace />} />

      {/* ── 404 ── */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
