import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "June 19, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — including your name, email address, phone number, and business information entered into roadmap intake forms or waitlist submissions. We also collect standard usage data such as pages visited and features used.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, communicate about your account and our platform launch, improve PEN2PRO features, and — with your consent — send you product updates and educational content related to entrepreneurship, funding readiness, and credit strategy.",
      },
      {
        heading: "Data Storage and Security",
        body: "Your data is stored securely on protected servers. We use industry-standard encryption and access controls. We do not sell your personal information to third parties.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may use third-party services including payment processors (Stripe), analytics tools, and email delivery providers. These services have their own privacy policies and are bound by data processing agreements.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, correct, or delete your personal information at any time. To make a request, contact us at support@pen2pro.com.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Email us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "June 19, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.",
      },
      {
        heading: "Platform Use",
        body: "PEN2PRO is an AI-powered business development platform. You may use it to generate business roadmaps, access strategy tools, and engage with educational content. You agree not to misuse the platform, attempt to reverse-engineer its systems, or use it for any unlawful purpose.",
      },
      {
        heading: "Subscription and Payments",
        body: "Paid subscriptions are billed on a monthly or one-time basis depending on the selected plan. Subscriptions may be canceled at any time. Refund requests are reviewed on a case-by-case basis within 7 days of purchase.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO provides business strategy tools, education, and AI-generated roadmaps. We do not guarantee business success, income generation, funding approval, credit score improvement, or any specific financial result. Results depend entirely on your own effort, market conditions, and individual circumstances.",
      },
      {
        heading: "Intellectual Property",
        body: "All PEN2PRO platform content, branding, and software are owned by PEN2PRO and protected by applicable intellectual property laws. Content you generate using PEN2PRO tools belongs to you.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid in the 30 days prior to the event giving rise to the claim.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Email us at support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "June 19, 2026",
    sections: [
      {
        heading: "No Financial or Legal Advice",
        body: "PEN2PRO is an educational and business strategy platform. Nothing on PEN2PRO constitutes financial, legal, tax, or investment advice. Always consult qualified professionals for advice specific to your situation.",
      },
      {
        heading: "No Income Guarantees",
        body: "PEN2PRO does not guarantee that using our platform will result in income, revenue, business growth, or financial success. Any examples of results shared on the platform are not typical and are provided for illustrative purposes only.",
      },
      {
        heading: "No Credit or Funding Guarantees",
        body: "PEN2PRO provides credit readiness and funding readiness education and tools. We do not guarantee approval for any loan, line of credit, business funding, or credit score improvement. Results depend on individual financial history, lender requirements, and market conditions.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps and strategy content generated by PEN2PRO's AI engine are based on the information you provide and general business principles. They are intended as starting points, not definitive business plans. Always validate AI-generated recommendations with qualified professionals.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO may include affiliate links to third-party products and services. We may earn a commission if you purchase through these links at no additional cost to you. We only recommend products and services we believe provide value.",
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

      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO Legal</div>
          <h1 className="mb-2 font-display text-4xl font-black">{page.title}</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: {page.updated}</p>

          <div className="space-y-10">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-base leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
            <strong className="text-white">Questions?</strong> Email us at{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">
              support@pen2pro.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
