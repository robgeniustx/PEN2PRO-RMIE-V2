import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "June 24, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — such as your name, email address, phone number, and business idea description when you sign up, join the waitlist, or create an account. We also collect usage data, device information, and analytics to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to create and manage your account, generate your business roadmap, send launch updates and product communications (only what you signed up for), process payments, and improve PEN2PRO. We do not sell your personal information to third parties.",
      },
      {
        heading: "Cookies & Analytics",
        body: "PEN2PRO uses cookies and third-party analytics (such as Google Analytics) to understand how users interact with the platform. You can disable cookies in your browser settings, though some features may not work correctly.",
      },
      {
        heading: "Data Security",
        body: "We implement industry-standard security measures including HTTPS encryption and secure data storage. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may use third-party services for payment processing (Stripe), email delivery, and analytics. These services have their own privacy policies. Affiliate links may be present throughout the platform.",
      },
      {
        heading: "Your Rights",
        body: "You may request to view, update, or delete your personal data by contacting us at support@pen2pro.com. We will respond to requests within 30 days.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "June 24, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO is an AI-powered business planning platform. You may use it for personal and business planning purposes. You may not use PEN2PRO to distribute harmful, illegal, or deceptive content, impersonate others, or attempt to gain unauthorized access to the system.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately if you suspect unauthorized use.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. This content is for informational and planning purposes only. It does not constitute legal, financial, investment, or professional advice. Results will vary based on your specific situation, effort, and market conditions.",
      },
      {
        heading: "Payments & Refunds",
        body: "Subscription fees are billed in advance. Lifetime access purchases are non-refundable. Monthly subscriptions may be cancelled at any time with access continuing through the end of the billing period. Contact support@pen2pro.com for billing questions.",
      },
      {
        heading: "Intellectual Property",
        body: "All PEN2PRO platform content, branding, code, and design is the property of PEN2PRO. You retain ownership of content you create using the platform. You grant PEN2PRO a license to use aggregated, anonymized data to improve the service.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided \"as is.\" We do not guarantee specific business outcomes, income levels, funding approval, or credit results. PEN2PRO shall not be liable for any indirect, incidental, or consequential damages arising from use of the platform.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these terms with notice posted on the platform. Continued use after changes constitutes acceptance.",
      },
      {
        heading: "Contact",
        body: "Legal inquiries: support@pen2pro.com",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "June 24, 2026",
    sections: [
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee any specific business outcomes, revenue levels, income, funding approval, loan approval, credit score improvement, or business success. Every user's situation is unique. Results depend on individual effort, market conditions, execution, and many factors outside the platform's control.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "The content generated by PEN2PRO — including business roadmaps, financial projections, credit strategies, and funding readiness assessments — is for educational and planning purposes only. It does not constitute financial advice, legal advice, tax advice, or professional consulting. You should consult licensed professionals before making significant financial or legal decisions.",
      },
      {
        heading: "Credit & Funding Information",
        body: "PEN2PRO provides general education about business credit, personal credit, and funding readiness. We do not repair credit, guarantee loan approval, or guarantee access to funding. Credit and funding outcomes depend on your credit history, lender requirements, and many other factors.",
      },
      {
        heading: "Affiliate Links",
        body: "PEN2PRO may contain affiliate links to third-party products and services. When you click these links and make a purchase, PEN2PRO may earn a commission at no additional cost to you. We only recommend services we believe provide genuine value, but we are not responsible for third-party products, services, or pricing.",
      },
      {
        heading: "AI-Generated Content",
        body: "Business roadmaps and strategies generated by PEN2PRO's AI are based on general business principles and the information you provide. AI output may contain errors, omissions, or outdated information. Always validate recommendations with qualified professionals before acting on them.",
      },
      {
        heading: "Testimonials",
        body: "Testimonials presented on PEN2PRO represent individual experiences. They are not typical results and do not guarantee that you will achieve similar outcomes.",
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

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</div>
          <h1 className="font-display text-4xl font-black text-white mb-2">{page.title}</h1>
          <p className="text-sm text-slate-600 mb-12">Last updated: {page.updated}</p>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-base font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Other Legal Pages</p>
            <div className="flex flex-wrap gap-3">
              {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Disclaimer", "/disclaimer"]].map(([label, path]) => (
                <Link key={path} to={path}
                  className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                    pathname === path
                      ? "border-[#D4A017]/50 text-[#D4A017]"
                      : "border-[#1A2235] text-slate-400 hover:text-white hover:border-[#1A2D50]"
                  }`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
              ← Back to PEN2PRO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
