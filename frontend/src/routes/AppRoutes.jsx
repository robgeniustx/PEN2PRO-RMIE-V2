import { Routes, Route, Navigate } from "react-router-dom";

// Public pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";
import StarterPage from "../pages/StarterPage";
import BlueprintResultsPage from "../pages/BlueprintResultsPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";

// Tier marketing pages
import ProPage from "../pages/ProPage";
import ElitePage from "../pages/ElitePage";
import FoundersPage from "../pages/FoundersPage";
import LegacyFounderPage from "../pages/LegacyFounderPage";

// Track pages (builder / accelerator)
import BuilderPage from "../pages/BuilderPage";
import AcceleratorPage from "../pages/AcceleratorPage";

// Dashboard pages
import DashboardPage from "../pages/DashboardPage";
import SettingsPage from "../pages/SettingsPage";
import EarningsPage from "../pages/EarningsPage";
import TasksPage from "../pages/TasksPage";
import LiveOperationsPage from "../pages/LiveOperationsPage";
import ContentGeneratorPage from "../pages/ContentGeneratorPage";
import OutreachPage from "../pages/OutreachPage";
import AdsPage from "../pages/AdsPage";

// Social
import SocialPage from "../pages/SocialPage";
import SocialCalendarPage from "../pages/SocialCalendarPage";
import SocialPostsPage from "../pages/SocialPostsPage";
import SocialScriptsPage from "../pages/SocialScriptsPage";
import SocialAnalyticsPage from "../pages/SocialAnalyticsPage";

// CRM
import CrmPage from "../pages/CrmPage";
import LeadsPage from "../pages/LeadsPage";
import CustomersPage from "../pages/CustomersPage";
import FollowUpsPage from "../pages/FollowUpsPage";
import PipelinePage from "../pages/PipelinePage";

// Affiliate
import AffiliatePage from "../pages/AffiliatePage";
import AffiliateProductsPage from "../pages/AffiliateProductsPage";
import AffiliateContentPage from "../pages/AffiliateContentPage";
import AffiliateFunnelPage from "../pages/AffiliateFunnelPage";
import AffiliateTrackerPage from "../pages/AffiliateTrackerPage";

// Credit / Funding
import CreditReadinessPage from "../pages/CreditReadinessPage";
import BusinessCreditPage from "../pages/BusinessCreditPage";
import FundingReadinessPage from "../pages/FundingReadinessPage";
import DocumentVaultPage from "../pages/DocumentVaultPage";

// Website / Brand
import WebsiteBuilderPage from "../pages/WebsiteBuilderPage";
import LandingPageBuilderPage from "../pages/LandingPageBuilderPage";
import SeoPage from "../pages/SeoPage";
import BrandKitPage from "../pages/BrandKitPage";

// Admin
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminAnalyticsPage from "../pages/AdminAnalyticsPage";
import AdminConversionsPage from "../pages/AdminConversionsPage";
import AdminFeatureUsagePage from "../pages/AdminFeatureUsagePage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ── Public / Marketing ── */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/login-signup" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />

      {/* Starter / Blueprint flow */}
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/blueprint/:id" element={<BlueprintResultsPage />} />

      {/* Tier marketing pages */}
      <Route path="/pro" element={<ProPage />} />
      <Route path="/elite" element={<ElitePage />} />
      <Route path="/founders" element={<FoundersPage />} />
      <Route path="/legacy-founder" element={<LegacyFounderPage />} />

      {/* Checkout shortcuts — redirect Stripe via PricingPage component logic */}
      <Route path="/checkout/pro" element={<ProPage />} />
      <Route path="/checkout/elite" element={<ElitePage />} />
      <Route path="/checkout/founders" element={<FoundersPage />} />

      {/* Track landing pages */}
      <Route path="/builder" element={<BuilderPage />} />
      <Route path="/accelerator" element={<AcceleratorPage />} />

      {/* Post-payment */}
      <Route path="/payment-success" element={<PaymentSuccessPage />} />

      {/* ── Dashboard ── */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/settings" element={<SettingsPage />} />
      <Route path="/dashboard/earnings" element={<EarningsPage />} />
      <Route path="/dashboard/tasks" element={<TasksPage />} />
      <Route path="/dashboard/live" element={<LiveOperationsPage />} />
      <Route path="/dashboard/content" element={<ContentGeneratorPage />} />
      <Route path="/dashboard/outreach" element={<OutreachPage />} />
      <Route path="/dashboard/ads" element={<AdsPage />} />

      {/* Social */}
      <Route path="/dashboard/social" element={<SocialPage />} />
      <Route path="/dashboard/social/calendar" element={<SocialCalendarPage />} />
      <Route path="/dashboard/social/posts" element={<SocialPostsPage />} />
      <Route path="/dashboard/social/scripts" element={<SocialScriptsPage />} />
      <Route path="/dashboard/social/analytics" element={<SocialAnalyticsPage />} />

      {/* CRM */}
      <Route path="/dashboard/crm" element={<CrmPage />} />
      <Route path="/dashboard/crm/leads" element={<LeadsPage />} />
      <Route path="/dashboard/crm/customers" element={<CustomersPage />} />
      <Route path="/dashboard/crm/followups" element={<FollowUpsPage />} />
      <Route path="/dashboard/crm/pipeline" element={<PipelinePage />} />

      {/* Affiliate */}
      <Route path="/dashboard/affiliate" element={<AffiliatePage />} />
      <Route path="/dashboard/affiliate/products" element={<AffiliateProductsPage />} />
      <Route path="/dashboard/affiliate/content" element={<AffiliateContentPage />} />
      <Route path="/dashboard/affiliate/funnel" element={<AffiliateFunnelPage />} />
      <Route path="/dashboard/affiliate/tracker" element={<AffiliateTrackerPage />} />

      {/* Credit / Funding */}
      <Route path="/dashboard/credit" element={<CreditReadinessPage />} />
      <Route path="/dashboard/credit/business" element={<BusinessCreditPage />} />
      <Route path="/dashboard/credit/funding" element={<FundingReadinessPage />} />
      <Route path="/dashboard/credit/documents" element={<DocumentVaultPage />} />

      {/* Website / Brand */}
      <Route path="/dashboard/website" element={<WebsiteBuilderPage />} />
      <Route path="/dashboard/website/landing" element={<LandingPageBuilderPage />} />
      <Route path="/dashboard/website/seo" element={<SeoPage />} />
      <Route path="/dashboard/brand-kit" element={<BrandKitPage />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      <Route path="/admin/conversions" element={<AdminConversionsPage />} />
      <Route path="/admin/features" element={<AdminFeatureUsagePage />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
