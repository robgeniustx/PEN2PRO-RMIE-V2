import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By creating an account, submitting a waitlist form, or using any feature of PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform. These terms apply to all visitors, users, and subscribers.`,
  },
  {
    title: "Description of Service",
    body: `PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that provides business roadmaps, strategy tools, credit and funding readiness education, branding direction, and launch guidance. PEN2PRO is an educational and organizational tool. It does not provide legal, financial, accounting, or investment advice.`,
  },
  {
    title: "Account Responsibilities",
    body: `You are responsible for maintaining the confidentiality of your account credentials. You must be 18 years or older to create an account. You agree to provide accurate information and to update it as necessary. You are responsible for all activity that occurs under your account.`,
  },
  {
    title: "Subscription & Payments",
    body: `Paid plans (Pro, Elite) are billed monthly. The Founders Lifetime plan is a one-time payment. All payments are processed securely through Stripe. Subscriptions automatically renew unless cancelled before the next billing date. Refunds are handled on a case-by-case basis — contact support@pen2pro.com within 7 days of a charge if you believe you were billed in error.`,
  },
  {
    title: "Intellectual Property",
    body: `All content, features, branding, AI-generated roadmaps, code, and design on the PEN2PRO platform are the intellectual property of PEN2PRO. You may not reproduce, distribute, or create derivative works from any part of the platform without written permission. AI-generated roadmaps produced for your specific business idea are yours to use personally — they may not be resold or redistributed.`,
  },
  {
    title: "Prohibited Use",
    body: `You may not use PEN2PRO to: distribute spam or unsolicited communications; attempt to reverse-engineer, scrape, or copy platform content at scale; submit false or misleading information; use the platform for illegal purposes; or interfere with platform security or operations.`,
  },
  {
    title: "No Guarantee of Results",
    body: `PEN2PRO provides tools, roadmaps, and education. Business results depend on the individual's effort, market conditions, execution quality, and many other factors outside our control. PEN2PRO does not guarantee income, business success, credit approval, funding approval, or any specific outcome. See our full Disclaimer for details.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, lost revenue, or loss of data — arising from your use of or inability to use the platform.`,
  },
  {
    title: "Termination",
    body: `We reserve the right to suspend or terminate your account at any time for violations of these terms. You may also cancel your subscription at any time through your account settings. Upon termination, your access to paid features will end at the conclusion of your current billing period.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service are governed by the laws of the State of Texas, United States. Any disputes shall be resolved in the courts of Harris County, Texas.`,
  },
  {
    title: "Changes to These Terms",
    body: `We may update these Terms from time to time. Changes will be posted on this page with an updated date. Continued use of PEN2PRO after any update constitutes acceptance of the new terms.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
          <p className="mb-10 text-sm text-slate-500">Last Updated: June 20, 2026</p>

          <p className="mb-10 text-slate-400 leading-relaxed">
            These Terms of Service govern your use of the PEN2PRO platform. Please read them carefully before using the service.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
            <p className="mb-2 font-bold text-white">Questions?</p>
            <p>Contact us at <span className="text-[#FF8A00] font-semibold">support@pen2pro.com</span></p>
          </div>

          <div className="mt-8 flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
