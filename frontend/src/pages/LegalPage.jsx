import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — such as your name, email, phone number, and business details — when you join the waitlist, create an account, or generate a roadmap.",
      "We use this information to deliver your roadmap, respond to inquiries, improve the platform, and communicate updates about PEN2PRO plans and features. We do not sell your personal information to third parties.",
      "Payment information for Pro, Elite, and Founders plans is processed securely by Stripe. PEN2PRO does not store your card details.",
      "You may request access to, correction of, or deletion of your personal information at any time by contacting support.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when creating an account or generating a roadmap.",
      "PEN2PRO provides business planning tools, AI-generated roadmaps, and educational strategy content. Nothing on this platform constitutes legal, tax, financial, or credit-repair advice.",
      "Free, Pro, Elite, and Founders plans are subject to the features described on their respective pages at time of purchase. PEN2PRO reserves the right to update features, pricing, and availability.",
      "Accounts found to be abusing the platform, violating applicable law, or attempting to disrupt service may be suspended or terminated.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business licensing outcomes, or business success of any kind.",
      "The platform provides education, strategy, organization, and readiness tools intended to support your own decision-making — not a promise of a specific outcome.",
      "Results depend on individual effort, market conditions, industry, location, and factors outside PEN2PRO's control.",
      "Always consult a qualified attorney, accountant, or licensed financial professional before making legal, tax, credit, or funding decisions for your business.",
    ],
  },
};

export default function LegalPage({ slug }) {
  const page = CONTENT[slug];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
