import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Legal",
    effective: "June 1, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: `When you use PEN2PRO, we collect information you provide directly — including your name, email address, phone number (optional), and business idea or interest level submitted through our waitlist and intake forms. We also collect usage data such as pages visited, features accessed, and roadmap history to improve the platform experience.`,
      },
      {
        heading: "How We Use Your Information",
        body: `We use your information to generate personalized business roadmaps, send you platform updates and product announcements, manage your account, process payments through Stripe, and improve PEN2PRO's AI recommendations. We do not sell your personal information to third parties.`,
      },
      {
        heading: "Data Storage & Security",
        body: `Your data is stored securely using encrypted connections and industry-standard infrastructure. Payment information is handled entirely by Stripe and is never stored on PEN2PRO servers. We retain your data for as long as your account is active or as needed to provide services.`,
      },
      {
        heading: "Cookies & Tracking",
        body: `PEN2PRO uses cookies and similar technologies to maintain your session, remember preferences, and analyze platform usage. You can disable cookies through your browser settings, though some features may not function correctly without them. We may use third-party analytics tools such as Google Analytics.`,
      },
      {
        heading: "Third-Party Services",
        body: `PEN2PRO integrates with third-party services including Stripe (payments), OpenAI (AI generation), ElevenLabs (voice), Twilio (SMS/voice), and MongoDB Atlas (data storage). Each service operates under its own privacy policy. Affiliate links on our platform may track referrals through cookies set by affiliate partners.`,
      },
      {
        heading: "Your Rights",
        body: `You have the right to access, correct, or delete your personal information at any time. To submit a data request, email us at support@pen2pro.com. We will respond within 30 days. If you are located in the EU or California, additional rights may apply under GDPR or CCPA.`,
      },
      {
        heading: "Contact",
        body: `For privacy-related questions, contact us at privacy@pen2pro.com or through the contact form on our website. Effective date: June 1, 2026.`,
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "Legal",
    effective: "June 1, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: `By accessing or using PEN2PRO ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. These terms apply to all users, including free users, paid subscribers, and administrators.`,
      },
      {
        heading: "Platform Use",
        body: `PEN2PRO grants you a limited, non-exclusive, non-transferable license to access and use the platform for your personal business development purposes. You may not resell, sublicense, or redistribute platform features or AI-generated outputs as standalone products without written permission.`,
      },
      {
        heading: "User Responsibilities",
        body: `You are responsible for maintaining the confidentiality of your account credentials. You agree not to use PEN2PRO for unlawful purposes, to submit false information, to attempt to reverse-engineer the AI systems, or to interfere with platform security or availability. PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.`,
      },
      {
        heading: "Subscriptions & Payments",
        body: `Pro and Elite plans are billed monthly. Founders Lifetime is a one-time payment. All payments are processed through Stripe. Subscriptions auto-renew unless canceled before the renewal date. Refunds are evaluated on a case-by-case basis. PEN2PRO does not guarantee outcomes and does not offer refunds based on business results.`,
      },
      {
        heading: "AI-Generated Content",
        body: `PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, scripts, and recommendations. AI outputs are provided for informational and planning purposes only. They do not constitute legal, financial, accounting, or professional advice. You are responsible for validating all AI-generated content before acting on it.`,
      },
      {
        heading: "Disclaimer of Warranties",
        body: `PEN2PRO is provided "as is" without warranties of any kind. We do not guarantee that the platform will be error-free, uninterrupted, or that outputs will be accurate or complete. We make no warranty that the platform will meet your specific business needs.`,
      },
      {
        heading: "Limitation of Liability",
        body: `To the fullest extent permitted by law, PEN2PRO and its founders, employees, and affiliates shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the platform, including lost revenue, business opportunity, or data. Maximum liability is limited to amounts paid in the 3 months prior to the claim.`,
      },
      {
        heading: "Changes to Terms",
        body: `We reserve the right to update these terms at any time. Changes will be communicated via email or platform notice. Continued use of PEN2PRO after changes constitutes acceptance of the new terms.`,
      },
      {
        heading: "Contact",
        body: `For questions about these terms, email legal@pen2pro.com. Effective date: June 1, 2026.`,
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "Legal",
    effective: "June 1, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: `PEN2PRO does not guarantee income, revenue, business success, funding approval, credit approval, or any specific outcome from using the platform. Results depend entirely on individual effort, market conditions, business execution, personal creditworthiness, and factors outside PEN2PRO's control.`,
      },
      {
        heading: "Not Financial or Legal Advice",
        body: `PEN2PRO is an AI-powered business development and planning platform. Nothing on this platform constitutes financial advice, investment advice, legal advice, accounting advice, or professional consulting services. All content is provided for educational and planning purposes only. Consult a licensed professional before making financial, legal, or business decisions.`,
      },
      {
        heading: "Credit & Funding Disclaimer",
        body: `PEN2PRO provides credit readiness information, funding preparation checklists, and strategy tools for educational purposes. We do not guarantee approval for any loan, line of credit, business credit account, or grant. Credit outcomes depend on lender requirements, personal history, and financial circumstances. Nothing here constitutes credit repair services as defined under the Credit Repair Organizations Act (CROA).`,
      },
      {
        heading: "Affiliate Links",
        body: `PEN2PRO's affiliate and resource pages may contain links to third-party products and services for which we receive compensation. These affiliate relationships do not influence our recommendations, but you should independently evaluate any service before using it. PEN2PRO is not responsible for the performance, accuracy, or conduct of third-party services.`,
      },
      {
        heading: "Testimonials",
        body: `Testimonials and user stories on PEN2PRO represent individual experiences and are not guarantees of similar results. Business success depends on many variables including industry, location, competition, personal skill, available capital, and market demand.`,
      },
      {
        heading: "AI-Generated Content",
        body: `AI outputs including roadmaps, business plans, sales scripts, financial estimates, and marketing strategies are generated by machine learning models and may contain errors, outdated information, or imprecise recommendations. Always verify AI-generated content with qualified professionals before making business decisions.`,
      },
      {
        heading: "External Links",
        body: `PEN2PRO may link to external websites for reference purposes. We are not responsible for the content, accuracy, privacy practices, or availability of any external sites. Inclusion of an external link does not constitute an endorsement.`,
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = PAGES[pathname] || PAGES["/disclaimer"];

  useEffect(() => {
    document.title = `${page.title} | PEN2PRO`;
    return () => { document.title = "PEN2PRO — Turn Your Idea Into Income"; };
  }, [pathname, page.title]);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            {page.badge}
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Effective Date: {page.effective}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer nav between legal pages */}
      <section className="border-t border-[#1A2D50] px-5 py-10">
        <div className="mx-auto max-w-3xl flex flex-wrap gap-4 justify-center text-sm">
          <Link to="/privacy" className={`font-semibold transition-colors ${pathname === "/privacy" ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"}`}>Privacy Policy</Link>
          <Link to="/terms" className={`font-semibold transition-colors ${pathname === "/terms" ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"}`}>Terms of Service</Link>
          <Link to="/disclaimer" className={`font-semibold transition-colors ${pathname === "/disclaimer" ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"}`}>Disclaimer</Link>
          <Link to="/starter" className="font-semibold text-slate-400 hover:text-white">Start Free Roadmap</Link>
          <Link to="/" className="font-semibold text-slate-400 hover:text-white">← Home</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
