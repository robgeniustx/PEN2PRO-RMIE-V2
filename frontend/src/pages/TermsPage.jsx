import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, do not use the platform. We reserve the right to update these terms at any time. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated terms.`,
  },
  {
    title: "Description of Service",
    body: `PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that provides business roadmaps, strategy tools, funding readiness guides, credit preparation resources, and related educational content. PEN2PRO is an educational and organizational platform. It does not provide legal advice, financial advice, accounting advice, or guarantee any business results.`,
  },
  {
    title: "Account Registration",
    body: `To use certain features of PEN2PRO, you must create an account. You agree to provide accurate, complete information when registering and to keep your account information updated. You are responsible for maintaining the confidentiality of your password and for all activity that occurs under your account. You must notify us immediately of any unauthorized use of your account.`,
  },
  {
    title: "Subscription Plans and Billing",
    body: `PEN2PRO offers Free, Pro ($249/month), Elite ($499/month), and Founders Lifetime ($1,899 one-time) plans. Subscription fees are billed in advance on a monthly basis. You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period — no partial refunds are issued for unused time. The Founders Lifetime purchase is non-refundable after 14 days from the purchase date. All prices are in USD.`,
  },
  {
    title: "Acceptable Use",
    body: `You agree not to: use PEN2PRO for any illegal purpose; attempt to reverse-engineer, copy, or redistribute the platform or its AI output at scale; use the platform to harass, defraud, or harm others; attempt to gain unauthorized access to other accounts or systems; use automated tools to scrape or extract data from the platform in bulk; or violate any applicable laws or regulations.`,
  },
  {
    title: "Intellectual Property",
    body: `PEN2PRO and its original content, features, and functionality are the exclusive property of PEN2PRO and its founders. The RMIE trademark, PEN2PRO brand, and all platform code are protected by copyright and other applicable intellectual property laws. Your business roadmap outputs are your own — you own the content generated from your inputs. You grant PEN2PRO a non-exclusive license to use aggregated, anonymized data to improve the platform.`,
  },
  {
    title: "Limitation of Liability",
    body: `PEN2PRO provides tools, strategy frameworks, and educational resources. We do not guarantee business success, income, funding approval, credit score improvement, or any specific results from using the platform. To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or data, arising from your use of or inability to use the platform.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `PEN2PRO is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the platform will be error-free, uninterrupted, or free of viruses. We do not guarantee that the AI output will be accurate, complete, or suitable for your specific business situation. Always verify business, legal, and financial information with qualified professionals.`,
  },
  {
    title: "Termination",
    body: `We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or conduct that harms the platform or other users. You may terminate your account at any time by contacting support@pen2pro.com. Upon termination, your access to paid features will end immediately.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Harris County, Texas.`,
  },
  {
    title: "Contact",
    body: `For questions about these Terms of Service, contact us at: support@pen2pro.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
        <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mb-2 text-sm text-slate-400">Effective Date: June 15, 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          Please read these Terms of Service carefully before using the PEN2PRO platform operated by PEN2PRO ("Company," "we," "us," or "our").
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">
                {i + 1}. {s.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
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
