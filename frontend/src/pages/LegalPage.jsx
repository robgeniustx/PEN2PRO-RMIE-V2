import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide when creating an account, submitting a business roadmap, or joining the waitlist — including your name, email address, business idea, and optional phone number. We also collect usage data to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used to generate your personalized business roadmap, send account notifications, and improve platform features. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard encryption and security practices to protect your data. Account passwords are hashed and never stored in plain text. Payment processing is handled securely through Stripe.",
      },
      {
        heading: "Cookies",
        body: "PEN2PRO uses functional cookies to keep you signed in and remember your session preferences. We do not use third-party advertising cookies.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data by contacting us at support@pen2pro.com. Deletion requests are processed within 30 days.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
      },
      {
        heading: "Use of the Platform",
        body: "PEN2PRO is a business roadmap and strategy tool. You may use it for lawful business purposes only. You may not use the platform to generate content that is fraudulent, illegal, or harmful.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for maintaining the security of your account credentials. PEN2PRO is not liable for unauthorized access resulting from your failure to protect your login information.",
      },
      {
        heading: "Subscription and Payments",
        body: "Pro and Elite subscriptions are billed monthly. Founders Lifetime is a one-time purchase. All payments are processed through Stripe. Refund requests are evaluated on a case-by-case basis within the first 7 days of purchase.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides business strategy, education, and roadmap tools. We do not guarantee business success, income, funding approval, credit improvement, or any specific outcome. Results depend on individual effort, market conditions, and many factors outside our control.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO's platform, content, branding, and AI outputs are the property of PEN2PRO. The roadmap generated for you based on your inputs belongs to you.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate accounts that violate these terms. You may cancel your account at any time.",
      },
      {
        heading: "Contact",
        body: "For terms-related questions, contact us at support@pen2pro.com.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "June 2026",
    sections: [
      {
        heading: "No Financial or Legal Advice",
        body: "The information provided by PEN2PRO is for educational and informational purposes only. Nothing on this platform constitutes financial, legal, accounting, or professional advice. Always consult a licensed professional before making business, financial, or legal decisions.",
      },
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee that use of its platform will result in income, profit, or business success. Business outcomes depend on individual effort, market conditions, execution quality, competition, and many other factors outside PEN2PRO's control.",
      },
      {
        heading: "No Funding or Credit Guarantee",
        body: "PEN2PRO's funding readiness and credit strategy tools are educational in nature. We do not guarantee loan approval, credit line approval, funding access, or credit score improvement. Results will vary based on individual credit history, lender criteria, and market conditions.",
      },
      {
        heading: "Affiliate Links",
        body: "Some links on PEN2PRO may be affiliate links, meaning we may receive a commission if you sign up or purchase through those links. This does not affect our recommendations or the price you pay. We only recommend tools we believe are genuinely useful.",
      },
      {
        heading: "Testimonials",
        body: "Testimonials and results shared on this platform represent individual experiences. They are not typical and are not guarantees of similar outcomes for other users.",
      },
      {
        heading: "Accuracy of Information",
        body: "While we strive to keep platform content current and accurate, business laws, regulations, and market conditions change. PEN2PRO is not responsible for errors, outdated information, or decisions made based on platform content.",
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

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            PEN2PRO Legal
          </div>
          <h1 className="mb-2 font-display text-4xl font-black text-white">{page.title}</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {page.updated}</p>

          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-base font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#080C14] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/" className="rounded-xl border border-[#1A2235] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
