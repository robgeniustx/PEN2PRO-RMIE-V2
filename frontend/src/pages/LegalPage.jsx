import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you give us directly — name, email, phone, business idea, and roadmap intake answers — to generate your business roadmap, operate your account, and follow up about the platform.",
      "We do not sell your personal information. Data may be shared with service providers (hosting, email, payment processing, analytics) strictly to operate PEN2PRO, and with affiliate partners only when you choose to engage with a specific offer (LLC formation, funding, credit repair, etc.).",
      "You can request access to, correction of, or deletion of your data at any time by contacting us. Waitlist and roadmap submissions are stored securely and used to improve the platform and follow up on your interest.",
      "PEN2PRO uses cookies and similar technology for basic analytics and session functionality. Continued use of the platform means you accept this policy.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information during roadmap intake, waitlist signup, and account creation.",
      "PEN2PRO provides AI-generated business roadmaps, strategy content, and educational tools. Roadmap output, pricing tiers (Free, Pro, Elite, Legacy Founder), and features are subject to change as the platform develops.",
      "Subscriptions and Legacy Founder access, when active, are billed as described at checkout. You may cancel a recurring subscription at any time; access continues through the end of the paid period.",
      "PEN2PRO content — including roadmaps, strategy plans, and branding direction — is provided for informational and planning purposes and does not constitute legal, tax, financial, or credit-repair advice.",
      "We may suspend accounts that abuse the platform, violate these terms, or attempt to interfere with its operation.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap, strategy plan, and checklist is a starting point — outcomes depend on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
      "PEN2PRO is not a law firm, credit repair organization, lender, or registered investment/financial advisor. Content related to LLC formation, EIN registration, business credit, funding readiness, and credit building is educational and organizational — not legal or financial advice. Consult a licensed professional before making legal, tax, or financial decisions.",
      "Affiliate links on PEN2PRO (LLC formation, business banking, funding, credit, domains, bookkeeping, payment processing, CRM, insurance, and marketing tools) may earn PEN2PRO a commission at no extra cost to you. We only recommend partners we believe add real value to founders.",
      "Testimonials and founder stories referenced on PEN2PRO, including Robert Green's story, reflect individual experiences and are not a promise of similar results for any other user.",
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const page = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((para, i) => (
            <p key={i} className="text-slate-400 leading-7">
              {para}
            </p>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-600">
          Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}. Questions about
          this page can be sent to our support team.
        </p>
      </div>
      <Footer />
    </div>
  );
}
