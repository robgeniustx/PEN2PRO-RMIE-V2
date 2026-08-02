import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects only the information needed to build your business roadmap and operate your account — name, email, phone (optional), business idea details, and usage data.",
      "We do not sell your personal information. Data you submit through the Starter roadmap, waitlist, or dashboard is used to generate your blueprint, improve the platform, and communicate with you about your account and relevant PEN2PRO offers.",
      "Payment information is processed securely by our payment provider and is never stored on PEN2PRO servers.",
      "You can request access to, correction of, or deletion of your data at any time by contacting support.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful business planning purposes only.",
      "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. Output is a planning aid — you are responsible for your own business, legal, financial, and tax decisions.",
      "Subscriptions (Pro, Elite, Founders) renew automatically until canceled. You can cancel anytime from your account; access continues through the end of the current billing period.",
      "PEN2PRO reserves the right to update these terms, the platform, and pricing as the product evolves. Continued use after changes means you accept the updated terms.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results.",
      "The platform provides education, strategy, organization, and readiness tools — not legal, tax, credit repair, or financial advice. Results depend on individual effort, market conditions, and factors outside PEN2PRO's control.",
      "Always consult a licensed attorney, accountant, or financial advisor before making binding legal, tax, or financial decisions for your business.",
      "Testimonials and examples reflect individual experiences and are not a promise of similar results.",
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const content = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Legal</p>
          <h1 className="mb-8 font-display text-3xl font-black md:text-5xl">{content.title}</h1>
          <div className="space-y-5 text-sm leading-7 text-slate-400">
            {content.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-xs text-slate-600">Last updated: 2026.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
