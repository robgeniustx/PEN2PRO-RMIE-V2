import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PAGES = {
  "/privacy": {
    title: "Privacy Policy",
    badge: "Last Updated — June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly: name, email address, phone number (optional), and business information entered through our forms. We also collect usage data automatically when you interact with our platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use collected information to provide and improve PEN2PRO services, send you platform updates and communications you opt into, and personalize your roadmap and business strategy recommendations.",
      },
      {
        heading: "Data Storage & Security",
        body: "Your data is stored securely using industry-standard encryption. We do not sell your personal information to third parties. We may share anonymized, aggregated data for analytics purposes.",
      },
      {
        heading: "Cookies & Tracking",
        body: "PEN2PRO uses cookies to maintain your session and improve your experience. You can disable cookies in your browser settings, though some platform features may not function correctly without them.",
      },
      {
        heading: "Your Rights",
        body: "You have the right to access, update, or delete your personal data at any time. Contact us at support@pen2pro.com to make a data request.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions or requests, email: support@pen2pro.com",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    badge: "Last Updated — June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Description of Service",
        body: "PEN2PRO provides AI-powered business roadmap, strategy, and monetization tools. We provide educational content, planning tools, and organizational resources — not professional legal, financial, credit, or investment advice.",
      },
      {
        heading: "User Responsibilities",
        body: "You are responsible for maintaining the confidentiality of your account credentials, for all activity under your account, and for ensuring your use of PEN2PRO complies with applicable laws.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee business success, income, credit improvement, or funding approval. Results depend entirely on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscription & Billing",
        body: "Paid plans are billed monthly or as a one-time payment for Founders Lifetime. Subscriptions auto-renew until cancelled. Cancellations take effect at the end of the current billing period.",
      },
      {
        heading: "Intellectual Property",
        body: "All platform content, AI-generated roadmaps, branding, and code are the intellectual property of PEN2PRO. Users retain ownership of their own business information submitted through the platform.",
      },
      {
        heading: "Termination",
        body: "PEN2PRO reserves the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or otherwise misuse the platform.",
      },
      {
        heading: "Contact",
        body: "For terms-related questions, email: support@pen2pro.com",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    badge: "Important Notice",
    sections: [
      {
        heading: "Not Professional Advice",
        body: "PEN2PRO provides business education, planning tools, and strategy frameworks. Nothing on this platform constitutes legal advice, financial advice, accounting advice, tax advice, or investment advice.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO does not guarantee income, profit, business success, credit improvement, loan approval, or funding. All business outcomes depend on individual effort, market conditions, timing, and factors entirely outside the platform's control.",
      },
      {
        heading: "Credit & Funding Disclaimer",
        body: "PEN2PRO's credit and funding readiness tools are for educational and organizational purposes only. We do not provide credit repair services, loan brokering, or financial products. Always consult a licensed financial professional before making financial decisions.",
      },
      {
        heading: "AI-Generated Content",
        body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategy recommendations, and plan content. AI-generated content may contain errors, omissions, or outdated information. Always verify important business decisions with qualified professionals.",
      },
      {
        heading: "Affiliate Disclosure",
        body: "PEN2PRO's affiliate and resource pages may contain links to third-party services. We may receive compensation when you use these links. All recommendations are based on our assessment of their value to our users.",
      },
      {
        heading: "Testimonials",
        body: "Testimonials and case studies on this platform represent individual experiences and are not guaranteed results. Past results do not predict future performance.",
      },
    ],
  },
};

export default function LegalPage() {
  const loc = useLocation();
  const page = PAGES[loc.pathname] || PAGES["/disclaimer"];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            {page.badge}
          </div>
          <h1 className="mb-10 font-display text-4xl font-black md:text-5xl">{page.title}</h1>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              ← Home
            </Link>
            <Link to="/privacy" className={`rounded-xl border px-6 py-2.5 text-sm font-semibold transition-colors ${loc.pathname === "/privacy" ? "border-[#FF8A00] text-[#FF8A00]" : "border-[#1A2D50] text-slate-400 hover:text-white"}`}>
              Privacy
            </Link>
            <Link to="/terms" className={`rounded-xl border px-6 py-2.5 text-sm font-semibold transition-colors ${loc.pathname === "/terms" ? "border-[#FF8A00] text-[#FF8A00]" : "border-[#1A2D50] text-slate-400 hover:text-white"}`}>
              Terms
            </Link>
            <Link to="/disclaimer" className={`rounded-xl border px-6 py-2.5 text-sm font-semibold transition-colors ${loc.pathname === "/disclaimer" ? "border-[#FF8A00] text-[#FF8A00]" : "border-[#1A2D50] text-slate-400 hover:text-white"}`}>
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
