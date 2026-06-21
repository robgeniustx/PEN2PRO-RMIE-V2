import { useParams, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "June 21, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — name, email address, phone number (optional), and business details when you join the waitlist, create an account, or use PEN2PRO features. We also collect usage data such as pages visited, features used, and roadmap interactions to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to provide and improve PEN2PRO services, send launch and product updates you've opted into, process payments through Stripe (we do not store card numbers), and respond to support requests. We do not sell your personal data to third parties.",
      },
      {
        heading: "Data Storage and Security",
        body: "Your data is stored on secured servers. Passwords are encrypted using industry-standard bcrypt hashing. Payment processing is handled entirely by Stripe, a PCI-compliant payment processor.",
      },
      {
        heading: "Cookies",
        body: "PEN2PRO uses minimal cookies for authentication (session tokens stored in localStorage) and analytics. We do not use advertising cookies or third-party tracking pixels.",
      },
      {
        heading: "Your Rights",
        body: "You may request deletion of your account and associated data at any time by contacting us at support@pen2pro.com. We will process deletion requests within 30 days.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "June 21, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. You may use the platform for lawful business purposes only. You may not resell, copy, or redistribute PEN2PRO content or features without written permission.",
      },
      {
        heading: "Subscriptions and Payments",
        body: "Monthly subscriptions (Pro, Elite) renew automatically until cancelled. The Founders Lifetime offer is a one-time payment with no recurring fees. Refund requests are handled on a case-by-case basis within 7 days of purchase. Contact support@pen2pro.com for billing issues.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO provides education, strategy tools, and business roadmaps. We do not guarantee income, revenue results, funding approval, loan approval, or business success. Results depend entirely on individual effort, market conditions, and execution. This is not financial or legal advice.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, and all original content are owned by PEN2PRO. AI-generated roadmap output produced using your inputs is yours to use for your business. You may not claim ownership of the platform, templates, or underlying technology.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or abuse the platform. Monthly subscribers may cancel at any time with access continuing through the end of the paid period.",
      },
      {
        heading: "Contact",
        body: "For terms-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "June 21, 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee that use of the platform will result in income, profit, business growth, or financial improvement. Business outcomes depend on individual effort, market conditions, timing, and factors outside our control.",
      },
      {
        heading: "No Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial advice, legal advice, accounting advice, or investment advice. Content is provided for educational and strategic planning purposes only. Consult a licensed professional for financial, legal, or tax guidance specific to your situation.",
      },
      {
        heading: "No Credit or Funding Guarantee",
        body: "PEN2PRO provides credit readiness education and funding preparation tools. We do not guarantee credit approval, loan approval, or access to funding. Credit and funding decisions are made entirely by lenders, financial institutions, and credit bureaus — not by PEN2PRO.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may earn commissions when you use affiliate links on the platform (LLC formation, banking, insurance, software tools, etc.). These recommendations are based on usefulness to entrepreneurs, not commission rates. Your cost is never higher because of these links.",
      },
      {
        heading: "AI-Generated Content",
        body: "Roadmaps, strategies, and recommendations generated by PEN2PRO RMIE are produced by AI and should be reviewed with your own judgment, market knowledge, and professional advisors. AI output is a starting framework — not a substitute for professional advice.",
      },
      {
        heading: "Contact",
        body: "Questions about this disclaimer? Contact us at support@pen2pro.com.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const key = pathname.replace("/", "");
  const page = CONTENT[key] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-2 font-display text-4xl font-black">{page.title}</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {page.updated}</p>

          <div className="space-y-10">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-8 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-[#1A2D50] pt-8 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-[#FF8A00] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FF8A00] transition">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-[#FF8A00] transition">Disclaimer</Link>
            <Link to="/" className="hover:text-[#FF8A00] transition">← Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
