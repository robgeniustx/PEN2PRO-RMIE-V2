import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    intro: "How PEN2PRO collects, uses, and protects your information.",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you use PEN2PRO, we may collect information you provide directly — such as your name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data like pages visited and features used.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or the waitlist, improve the platform, and — where you've opted in — share relevant offers from our funding, credit, and business-services partners.",
      },
      {
        heading: "How We Protect Your Information",
        body: "We apply reasonable technical and administrative safeguards to protect your data. No system is perfectly secure, and we encourage you to use a strong, unique password for your account.",
      },
      {
        heading: "Sharing Your Information",
        body: "We do not sell your personal information. We may share limited data with service providers who help us operate PEN2PRO (such as hosting and email delivery) and, only with your consent, with affiliate partners you choose to engage with (LLC formation, banking, funding, credit repair, and similar services).",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can also unsubscribe from marketing emails using the link in any message.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    intro: "The terms that govern your use of PEN2PRO.",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information when completing intake forms.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans each unlock different levels of access as described on our Pricing page. Where subscriptions are active, you may cancel at any time; access continues through the end of your current billing period.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps generated for your account are yours to use for your own business.",
      },
      {
        heading: "Limitation of Liability",
        body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for business losses, missed opportunities, or damages arising from your use of the platform or reliance on generated content.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    intro: "Please read this before acting on any PEN2PRO roadmap, strategy, or resource.",
    sections: [
      {
        heading: "Educational & Strategic Purpose Only",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not financial, legal, or credit-repair services.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Nothing on PEN2PRO constitutes financial, legal, tax, or investment advice. Always consult a licensed attorney, accountant, or financial professional before making business, credit, or funding decisions.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may receive compensation from partners referenced on our Funding, Credit Repair, and Affiliate pages if you choose to use their services. These recommendations do not obligate you to purchase anything, and results with any third-party provider are not guaranteed by PEN2PRO.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every founder's situation is different. Startup costs, timelines, revenue, and outcomes referenced anywhere on PEN2PRO are illustrative examples, not promises of what you will achieve.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="mb-4 font-display text-4xl font-black">{page.title}</h1>
          <p className="mb-12 text-slate-400">{page.intro}</p>

          <div className="space-y-10">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-[#1A2D50] pt-8 sm:flex-row">
            <Link to="/" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Back to Home
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
