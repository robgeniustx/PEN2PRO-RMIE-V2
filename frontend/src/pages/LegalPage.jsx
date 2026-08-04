import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    body: [
      "PEN2PRO collects the information you provide directly — such as your name, email, business idea, and roadmap intake answers — to generate your business blueprint and operate your account.",
      "We use this information to deliver the RMIE roadmap, improve the platform, communicate with you about your account or waitlist status, and, where applicable, process payments through our billing provider.",
      "We do not sell your personal information. We may share limited data with service providers (such as hosting, email, and payment processing) strictly to operate PEN2PRO.",
      "You can request access to, correction of, or deletion of your data at any time by contacting support through the platform.",
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: 2026",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful business planning and educational purposes only.",
      "PEN2PRO provides AI-generated business roadmaps, strategy content, and readiness checklists. Output is generated based on the information you provide and general business knowledge — it is not a guarantee of results.",
      "Subscriptions (Pro, Elite, Founders) renew automatically according to the plan selected at checkout unless canceled. Founders Lifetime access is a one-time purchase granting ongoing platform access under these terms.",
      "You are responsible for the accuracy of information you submit and for how you use PEN2PRO's guidance in your own business decisions.",
      "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated terms.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: 2026",
    body: [
      "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval.",
      "The platform provides education, strategy, organization, and readiness tools built from real founder experience and AI-assisted planning. Results depend on your effort, market conditions, industry, location, and factors outside PEN2PRO's control.",
      "Credit and funding readiness content is educational only and is not financial, legal, or credit repair advice. For legal, tax, or credit-specific guidance, consult a licensed professional.",
      "Affiliate and partner links may earn PEN2PRO a commission at no additional cost to you. We only recommend tools and services aligned with helping founders build real businesses.",
    ],
  },
};

export default function LegalPage({ variant }) {
  const doc = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">
          {doc.updated}
        </p>
        <h1 className="mb-8 font-display text-4xl font-black leading-tight md:text-5xl">
          {doc.title}
        </h1>
        <div className="space-y-5 text-base leading-8 text-slate-300">
          {doc.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
