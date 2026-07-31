import { useLocation, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "PEN2PRO collects the information you provide directly — name, email, phone, business idea, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "Your information is used to generate your roadmap, manage your account and subscription tier, respond to support requests, and communicate updates about PEN2PRO. Waitlist and intake data may also be used to improve our AI roadmap outputs.",
      },
      {
        heading: "How We Protect It",
        body: "We use industry-standard safeguards to protect your data. We do not sell your personal information to third parties. Affiliate and funding partner links may collect their own data under their own privacy policies once you leave PEN2PRO.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your data at any time by contacting support. You can unsubscribe from email communications using the link in any email we send.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. You must provide accurate information and use the platform for lawful purposes only.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Roadmaps, strategies, and tools are educational guidance — outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders plans are billed on the cadence shown at checkout. You may cancel at any time; access continues through the end of the current billing period. Founders pricing is locked for the life of an active subscription.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO name, brand, RMIE engine, and platform content are owned by PEN2PRO. Roadmaps generated for your account are yours to use for your own business.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Educational Purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. Nothing on this platform is legal, tax, financial, or credit repair advice.",
      },
      {
        heading: "No Guaranteed Results",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Results depend on individual effort, financial history, and market conditions.",
      },
      {
        heading: "Third-Party Partners",
        body: "Affiliate links to LLC formation, banking, credit, and funding partners are provided for convenience. PEN2PRO is not responsible for the products, services, or outcomes provided by third parties.",
      },
      {
        heading: "Your Responsibility",
        body: "Always do your own due diligence and consult a licensed attorney, accountant, or financial advisor before making legal, tax, or financial decisions for your business.",
      },
    ],
  },
};

export default function LegalPage() {
  const slug = useLocation().pathname.replace(/^\//, "");
  const page = CONTENT[slug];

  if (!page) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{page.updated}</p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">{page.title}</h1>
        <div className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-14 text-xs text-slate-600 border-t border-[#1A2D50] pt-6">
          PEN2PRO does not guarantee income, funding approval, loan approval, or credit results. Results depend on individual effort and market conditions.
        </p>
      </main>
      <Footer />
    </div>
  );
}
