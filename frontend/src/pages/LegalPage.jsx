import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Your Data, Protected",
    effective: "June 15, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: `When you use PEN2PRO, we may collect information you provide directly — including your name, email address, phone number, and business details entered during roadmap creation, waitlist signup, or account registration. We also collect usage data such as pages visited, features used, and session duration to improve the platform.`,
      },
      {
        heading: "How We Use Your Information",
        body: `Your information is used to generate your AI business roadmap, send platform updates and notifications, provide customer support, improve the PEN2PRO experience, and process payments when applicable. We do not sell your personal information to third parties.`,
      },
      {
        heading: "Data Storage & Security",
        body: `PEN2PRO stores data using industry-standard encryption and secure cloud infrastructure. We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
      },
      {
        heading: "Third-Party Services",
        body: `PEN2PRO integrates with third-party services including Stripe for payment processing, OpenAI for AI-powered roadmap generation, and analytics platforms. These services have their own privacy policies governing how they handle your data. Affiliate links on the platform may be tracked through third-party programs.`,
      },
      {
        heading: "Cookies",
        body: `We use essential cookies to maintain your session and remember your preferences. Analytics cookies may be used to understand platform usage. You can control cookies through your browser settings, though disabling them may affect certain platform functionality.`,
      },
      {
        heading: "Your Rights",
        body: `You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at support@pen2pro.com. We will respond to verified requests within 30 days. If you are located in the EU or California, additional rights may apply under GDPR or CCPA.`,
      },
      {
        heading: "Changes to This Policy",
        body: `We may update this Privacy Policy from time to time. We will notify registered users of material changes via email. Continued use of PEN2PRO after changes take effect constitutes acceptance of the updated policy.`,
      },
      {
        heading: "Contact",
        body: `Questions about this Privacy Policy? Email us at support@pen2pro.com or write to PEN2PRO, Houston, TX.`,
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "Use PEN2PRO Responsibly",
    effective: "June 15, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: `By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the platform. PEN2PRO is intended for users who are 18 years of age or older.`,
      },
      {
        heading: "Platform License",
        body: `PEN2PRO grants you a limited, non-exclusive, non-transferable license to access and use the platform for your personal or internal business purposes. You may not reproduce, distribute, modify, create derivative works of, or reverse-engineer any part of PEN2PRO without written permission.`,
      },
      {
        heading: "User Accounts",
        body: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized use. PEN2PRO reserves the right to terminate accounts that violate these terms or engage in fraudulent activity.`,
      },
      {
        heading: "AI-Generated Content",
        body: `PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. This content is for informational purposes only. You are responsible for independently verifying any information before relying on it for business, financial, or legal decisions. PEN2PRO does not guarantee the accuracy, completeness, or fitness for any particular purpose of AI-generated content.`,
      },
      {
        heading: "Payment & Subscriptions",
        body: `Paid plans (Pro, Elite, Legacy Founder) are billed as described on the pricing page. Subscriptions auto-renew unless cancelled before the renewal date. Lifetime access plans (Legacy Founder) are one-time purchases. Refunds are handled on a case-by-case basis; contact support@pen2pro.com within 7 days of purchase.`,
      },
      {
        heading: "Prohibited Uses",
        body: `You may not use PEN2PRO to: (a) violate any law or regulation; (b) transmit spam, malware, or harmful code; (c) attempt to gain unauthorized access to any part of the platform; (d) resell or sublicense platform access without permission; (e) collect data about other users without consent.`,
      },
      {
        heading: "Disclaimer of Warranties",
        body: `PEN2PRO is provided "as is" without warranties of any kind, express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free of viruses. PEN2PRO does not guarantee income, business success, funding approval, or credit improvement as a result of using the platform.`,
      },
      {
        heading: "Limitation of Liability",
        body: `To the maximum extent permitted by law, PEN2PRO and its founders, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, even if we have been advised of the possibility of such damages.`,
      },
      {
        heading: "Governing Law",
        body: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Harris County, Texas.`,
      },
      {
        heading: "Contact",
        body: `Questions about these Terms? Email support@pen2pro.com.`,
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "Important Notice",
    effective: "June 15, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: `PEN2PRO provides AI-generated business roadmaps, strategies, educational content, and organizational tools. The platform does not guarantee business success, income, revenue, or profit of any amount. Results depend entirely on individual effort, market conditions, execution, and factors outside PEN2PRO's control.`,
      },
      {
        heading: "No Financial Advice",
        body: `Nothing on PEN2PRO constitutes financial advice, investment advice, or legal advice. All content is for informational and educational purposes only. Before making any financial decision, you should consult with a licensed financial advisor, accountant, or attorney who understands your specific situation.`,
      },
      {
        heading: "No Funding or Credit Guarantee",
        body: `PEN2PRO's funding readiness and credit tools are designed to help you organize your preparation and understand lender requirements. PEN2PRO does not guarantee that you will receive any business loan, line of credit, grant, or other financing. Credit repair outcomes vary and cannot be guaranteed.`,
      },
      {
        heading: "AI-Generated Content",
        body: `Business roadmaps, strategies, sales scripts, financial projections, and other AI-generated content on PEN2PRO are produced by artificial intelligence and may contain errors, inaccuracies, or information that is not applicable to your specific situation. Always verify AI-generated recommendations with qualified professionals before acting on them.`,
      },
      {
        heading: "Affiliate Links",
        body: `PEN2PRO may earn commissions from affiliate partnerships with third-party tools and services. These relationships do not influence our editorial content or recommendations. Affiliate links are identified where applicable. PEN2PRO does not endorse or guarantee the services of any third-party affiliate partner.`,
      },
      {
        heading: "Earnings Examples",
        body: `Any income examples, revenue figures, or success stories mentioned on PEN2PRO are for illustrative purposes only and are not typical results. They should not be interpreted as guarantees of similar outcomes. Your results will vary based on effort, experience, market conditions, and other factors.`,
      },
      {
        heading: "Platform Availability",
        body: `PEN2PRO strives to maintain platform availability but does not guarantee uninterrupted access. The platform may be temporarily unavailable due to maintenance, updates, or technical issues. PEN2PRO is not liable for any losses arising from platform downtime or data errors.`,
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = PAGES[pathname] || PAGES["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            {page.badge}
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">{page.title}</h1>
          <p className="mt-4 text-sm text-slate-500">Effective Date: {page.effective}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-3 font-bold text-white text-lg">{s.heading}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Nav */}
      <section className="border-t border-[#1A2D50] px-5 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm text-slate-500">
            Questions? Email{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] font-semibold">
              support@pen2pro.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
