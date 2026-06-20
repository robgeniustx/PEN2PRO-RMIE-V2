import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, do not use the platform. These terms apply to all visitors, users, and subscribers.`,
  },
  {
    title: "Platform Description",
    body: `PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that helps users generate business roadmaps, strategies, funding readiness plans, and launch guidance. PEN2PRO provides tools and information, not professional legal, financial, or investment advice.`,
  },
  {
    title: "Account Registration",
    body: `You must provide accurate information when creating your account. You are responsible for maintaining the security of your login credentials. You must notify us immediately of any unauthorized access to your account. PEN2PRO is not liable for any loss resulting from unauthorized use of your account.`,
  },
  {
    title: "Subscription and Payments",
    body: `Paid plans (Pro, Elite, Founders) are billed as described on the pricing page. All payments are processed securely through Stripe. Subscription fees are non-refundable except where required by law. You may cancel your subscription at any time; access continues through the end of the billing period.`,
  },
  {
    title: "Acceptable Use",
    body: `You agree not to: (a) use PEN2PRO for any unlawful purpose; (b) attempt to gain unauthorized access to other accounts or systems; (c) resell, sublicense, or redistribute platform features without permission; (d) upload malicious code or interfere with platform operations; (e) scrape or copy content for competitive products.`,
  },
  {
    title: "Intellectual Property",
    body: `All platform content, design, AI outputs, branding, and code belong to PEN2PRO unless otherwise noted. The business roadmaps, blueprints, and strategies generated for your account are for your personal business use. You may not resell or redistribute AI-generated outputs as your own product or service.`,
  },
  {
    title: "No Guarantees of Results",
    body: `PEN2PRO provides tools, roadmaps, and strategies to support your business building efforts. We do not guarantee specific income, revenue, funding approval, loan approval, credit scores, or business outcomes. Results depend entirely on individual effort, market conditions, and execution.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, PEN2PRO is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability to you for any claim arising from these Terms shall not exceed the amount you paid us in the 3 months prior to the claim.`,
  },
  {
    title: "Termination",
    body: `We reserve the right to terminate or suspend your account for violation of these Terms, fraudulent activity, or any behavior that harms other users or the platform. You may terminate your account at any time by contacting support@pen2pro.com.`,
  },
  {
    title: "Changes to Terms",
    body: `We may update these Terms of Service as the platform grows. We will notify registered users of material changes via email. Continued use of PEN2PRO after changes take effect constitutes acceptance of the updated terms.`,
  },
  {
    title: "Governing Law",
    body: `These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law provisions. Any disputes shall be resolved in courts located in Harris County, Texas.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Contact us at support@pen2pro.com.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-3 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
        <p className="mb-3 text-slate-400">Last updated: June 20, 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          Please read these Terms of Service carefully before using PEN2PRO. These terms govern your access to and use of the PEN2PRO platform and services.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Disclaimer
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
