import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    subtitle: "How PEN2PRO collects, uses, and protects your information.",
    updated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — such as your name, email address, phone number, and business idea — when you sign up, join the waitlist, or use PEN2PRO features. We also collect usage data to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to operate and improve PEN2PRO, communicate with you about your account, send product updates and launch notifications you've opted into, and provide the business tools and roadmaps you request.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell your personal information. We may share data with trusted service providers (payment processors, email platforms, analytics) strictly to operate PEN2PRO. We may disclose information if required by law.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard encryption and security practices to protect your data. No system is 100% secure, and we cannot guarantee absolute security, but we take reasonable measures to protect your information.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us at support@pen2pro.com. You may also unsubscribe from marketing communications at any time.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Email us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    subtitle: "The rules and agreements that govern your use of PEN2PRO.",
    updated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO grants you a limited, non-exclusive, non-transferable license to use the platform for your personal or business purposes. You may not reverse engineer, copy, resell, or distribute any part of the platform without written permission.",
      },
      {
        heading: "User Accounts",
        body: "You are responsible for maintaining the security of your account credentials. You agree to provide accurate information and to update it if it changes. PEN2PRO reserves the right to terminate accounts that violate these terms.",
      },
      {
        heading: "Payments and Refunds",
        body: "Subscription fees are billed in advance. Founders Lifetime payments are final and non-refundable after 7 days. Monthly plan cancellations take effect at the end of the current billing period. No pro-rated refunds for partial months.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO provides business strategy tools, roadmaps, and resources for educational purposes. We do not guarantee business success, income, funding approval, credit improvement, or any specific result. Outcomes depend entirely on your effort, market conditions, and individual circumstances.",
      },
      {
        heading: "Intellectual Property",
        body: "All platform content, branding, tools, and design are the intellectual property of PEN2PRO. Generated roadmaps and blueprints you create using the platform are yours to use for your business purposes.",
      },
      {
        heading: "Governing Law",
        body: "These terms are governed by the laws of the State of Texas. Any disputes will be resolved in the courts of Harris County, Texas.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Email support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    subtitle: "Important disclosures about PEN2PRO tools, results, and affiliate relationships.",
    updated: "June 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee that use of the platform will result in income, revenue, profit, or business success. Any examples of results referenced in marketing materials represent individual outcomes and are not typical.",
      },
      {
        heading: "No Funding or Credit Guarantee",
        body: "PEN2PRO does not guarantee loan approval, funding access, or credit score improvement. The platform provides educational tools, readiness checklists, and strategy guidance. All credit and funding decisions are made by third-party lenders and institutions.",
      },
      {
        heading: "Not Legal or Financial Advice",
        body: "Nothing on PEN2PRO constitutes legal, financial, tax, or accounting advice. We strongly recommend consulting a licensed attorney, CPA, or financial advisor for decisions related to business formation, funding, contracts, or taxes.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn referral commissions when you use affiliate links to third-party services such as LLC formation providers, business banking platforms, and other tools. These relationships do not affect our recommendations — we only suggest resources we believe are valuable.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO integrates with or links to third-party tools and platforms. We are not responsible for the content, policies, availability, or practices of any third-party services.",
      },
      {
        heading: "Contact",
        body: "Questions? Email support@pen2pro.com.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-3 font-display text-4xl font-black">{page.title}</h1>
          <p className="mb-2 text-slate-400">{page.subtitle}</p>
          <p className="mb-12 text-xs text-slate-600">Last updated: {page.updated}</p>

          <div className="space-y-10">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
