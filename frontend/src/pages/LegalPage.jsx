import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    subtitle: "How PEN2PRO collects, uses, and protects your information.",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — including your name, email address, business idea, and account credentials when you register or join the waitlist. We also collect usage data such as pages visited, features used, and roadmaps generated to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used to provide and improve PEN2PRO services, personalize your roadmap experience, send platform updates and relevant resources, process payments securely through Stripe, and respond to support requests.",
      },
      {
        heading: "Data Sharing",
        body: "PEN2PRO does not sell your personal information to third parties. We share data only with trusted service providers (payment processors, hosting services, analytics tools) who operate under strict confidentiality agreements. We may disclose information when required by law.",
      },
      {
        heading: "Data Security",
        body: "We implement industry-standard security measures including encrypted data transmission (HTTPS), secure password storage, and access controls. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "Cookies",
        body: "PEN2PRO uses essential cookies to maintain your session and preferences. We may use analytics cookies to understand how the platform is used. You can disable cookies in your browser settings, though some platform features may not function correctly.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or delete your personal information at any time. To exercise these rights or ask questions about our privacy practices, contact us at support@pen2pro.com.",
      },
      {
        heading: "Changes to This Policy",
        body: "We may update this Privacy Policy as the platform evolves. We will notify registered users of material changes via email. Continued use of PEN2PRO after updates constitutes acceptance of the revised policy.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    subtitle: "The terms and conditions that govern your use of PEN2PRO.",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. These terms apply to all users, including free users, paid subscribers, and Founders members.",
      },
      {
        heading: "Platform Description",
        body: "PEN2PRO provides an AI-powered business development platform including roadmap generation, business strategy tools, credit and funding readiness resources, and related services. The platform is provided on an 'as-is' basis and is subject to ongoing development and updates.",
      },
      {
        heading: "User Accounts",
        body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information when registering and to update your information if it changes. PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.",
      },
      {
        heading: "Subscription and Payments",
        body: "Paid subscriptions are billed according to the plan selected at signup. All payments are processed securely through Stripe. Subscriptions may be cancelled at any time. Refunds are handled on a case-by-case basis — contact support@pen2pro.com within 7 days of a charge to request review.",
      },
      {
        heading: "Founders Lifetime Access",
        body: "The Founders Lifetime offer grants access to all platform features available at the time of purchase and features added in the future at the sole discretion of PEN2PRO. Lifetime access is personal and non-transferable. PEN2PRO reserves the right to modify, add, or remove features as the platform evolves.",
      },
      {
        heading: "Prohibited Use",
        body: "You agree not to use PEN2PRO to violate any laws, infringe on intellectual property rights, distribute harmful or deceptive content, attempt to gain unauthorized access to the platform or other users' accounts, or resell platform outputs without written permission.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is not responsible for business outcomes, revenue results, funding approvals, credit improvements, or any other results arising from use of the platform. All AI-generated content is provided for informational purposes and does not constitute legal, financial, or professional advice.",
      },
      {
        heading: "Governing Law",
        body: "These terms are governed by the laws of the State of Texas. Any disputes arising from these terms or your use of PEN2PRO will be resolved in the courts of Harris County, Texas.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    subtitle: "Important disclosures about PEN2PRO's platform, AI outputs, and affiliate relationships.",
    updated: "June 15, 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee income, revenue, business success, or any specific financial result. All business roadmaps, strategies, and recommendations are generated by AI based on the information you provide and general market knowledge. Results depend entirely on your individual effort, market conditions, timing, resources, and execution.",
      },
      {
        heading: "No Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial, legal, tax, accounting, or professional advice. The platform provides educational content, organizational tools, and AI-generated business strategy for informational purposes only. Consult a qualified professional before making financial, legal, or business decisions.",
      },
      {
        heading: "Credit and Funding Disclaimer",
        body: "PEN2PRO does not guarantee credit repair results, credit score improvements, funding approval, loan approval, or access to capital. The credit and funding readiness tools are educational resources designed to help you understand and prepare — they do not guarantee any specific outcome from lenders, credit bureaus, or financial institutions.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps, sales scripts, outreach templates, financial estimates, and other outputs generated by PEN2PRO's AI are based on patterns and general knowledge. They should be reviewed critically and adapted to your specific situation. PEN2PRO is not responsible for errors, inaccuracies, or outdated information in AI-generated content.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO participates in affiliate programs with third-party service providers including LLC formation services, business banking providers, CRM tools, and other business resources. When you click an affiliate link on PEN2PRO and make a purchase, we may earn a commission at no additional cost to you. Affiliate relationships do not influence our recommendations — we only partner with services we believe provide value to our users.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO integrates with and recommends third-party services. We are not responsible for the practices, policies, or reliability of these services. Always review the terms, privacy policies, and fees of any third-party service before signing up.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="border-b border-[#1A2D50] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ PEN2PRO Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black">{page.title}</h1>
          <p className="text-slate-400">{page.subtitle}</p>
          <p className="mt-3 text-xs text-slate-600">Last updated: {page.updated}</p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-2xl space-y-10">
          {page.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="mb-3 font-display text-xl font-bold text-white">{sec.heading}</h2>
              <p className="text-sm leading-8 text-slate-400">{sec.body}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
            <p className="text-sm text-slate-400">
              Questions about our legal documents?{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold text-[#FF8A00]">
                support@pen2pro.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
