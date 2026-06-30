import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the platform. PEN2PRO reserves the right to update these terms at any time, and continued use of the platform constitutes acceptance of any changes.`,
  },
  {
    title: "Description of Service",
    body: `PEN2PRO is an AI-powered business roadmap and strategy platform — the Rapid Monetization Intelligence Engine (RMIE). The platform provides business planning tools, roadmap generation, strategy guidance, credit and funding readiness education, and related resources. PEN2PRO is an educational and organizational tool, not a licensed financial advisor, attorney, or lender.`,
  },
  {
    title: "Accounts & Eligibility",
    body: `You must be at least 18 years old to create a PEN2PRO account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must provide accurate and complete information when creating your account and keep your account information current.`,
  },
  {
    title: "Subscriptions & Payments",
    body: `Paid plans are billed monthly or as a one-time payment (Founders Lifetime). All payments are processed securely through Stripe. Subscription charges are non-refundable except where required by law. You may cancel your subscription at any time; access continues through the end of the current billing period. Pricing is subject to change with advance notice.`,
  },
  {
    title: "Free Tier",
    body: `The Free Roadmap tier is provided at no cost and may be used by any registered user. Free tier features may be limited compared to paid tiers. PEN2PRO reserves the right to modify or discontinue free tier features at any time.`,
  },
  {
    title: "Intellectual Property",
    body: `All content, features, platform design, branding, and materials on PEN2PRO are owned by PEN2PRO and are protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from PEN2PRO's proprietary content without express written permission.`,
  },
  {
    title: "User-Generated Content",
    body: `You retain ownership of any business ideas, plans, or content you input into PEN2PRO. By submitting content, you grant PEN2PRO a non-exclusive license to use your input to provide and improve the service. You are responsible for ensuring your inputs do not violate any laws or third-party rights.`,
  },
  {
    title: "Prohibited Uses",
    body: `You may not use PEN2PRO to engage in illegal activity, harass or harm others, distribute malware or spam, attempt to reverse-engineer the platform, resell or sublicense platform features without authorization, or misrepresent your identity. Violation of these terms may result in immediate account termination.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `PEN2PRO is provided "as is" without warranties of any kind. We do not guarantee that the platform will be error-free, uninterrupted, or that AI-generated content will be accurate in all cases. Business results depend entirely on your effort, market conditions, and external factors beyond our control.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including loss of profits, revenue, data, or business opportunities. Our total liability to you shall not exceed the amount you paid to PEN2PRO in the 12 months preceding any claim.`,
  },
  {
    title: "Governing Law",
    body: `These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Any disputes arising from these Terms shall be resolved in the courts of Texas.`,
  },
  {
    title: "Contact",
    body: `For questions about these Terms, contact PEN2PRO through the platform or via the waitlist and contact form.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-2 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 30, 2026</p>

        <p className="mb-10 text-slate-400 leading-relaxed">
          These Terms of Service govern your use of the PEN2PRO platform and all associated services. Please read these terms carefully before using PEN2PRO.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 flex items-start gap-3 font-bold text-white text-lg">
                <span className="text-[#FF8A00] shrink-0 font-display">{String(i + 1).padStart(2, "0")}.</span>
                {s.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/privacy" className="text-sm font-semibold text-[#2d9cff] hover:underline">Privacy Policy →</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-[#2d9cff] hover:underline">Disclaimer →</Link>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
