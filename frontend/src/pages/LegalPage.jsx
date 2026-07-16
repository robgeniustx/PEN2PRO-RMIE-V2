import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone (optional), business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, manage your account, communicate updates about your plan or the waitlist, and improve PEN2PRO's AI outputs. We do not sell your personal information.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may use trusted third-party services for payments (Stripe), AI processing, and analytics. These providers only receive the data needed to perform their function.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. Opting out of marketing emails will not affect access to your saved roadmap.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, education, and organization tool. We do not guarantee income, funding approval, credit outcomes, or business success. Results depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans, when active, renew automatically unless canceled. Founders pricing and availability are limited and subject to change.",
      },
      {
        heading: "Account Responsibility",
        body: "You are responsible for the accuracy of information you submit and for keeping your account credentials secure.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational & Strategy Tool",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not financial, legal, credit repair, or investment services.",
      },
      {
        heading: "Not Professional Advice",
        body: "Roadmap output, funding readiness checklists, and credit-building guidance are for informational purposes only and should not replace advice from a licensed attorney, accountant, or financial advisor.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every business, market, and financial situation is different. Outcomes described anywhere on PEN2PRO — including the founder's story — reflect individual experience and are not a promise of similar results for you.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-200">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-3xl font-black text-white sm:text-4xl">{page.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{page.updated}</p>

        <div className="mt-10 space-y-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-white">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-slate-600">
          Questions about this policy? Contact us through the Waitlist or Sign In page for support.
        </p>
      </main>
      <Footer />
    </div>
  );
}
