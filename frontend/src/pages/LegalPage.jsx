import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — such as your name, email, phone number, and business idea details — when you use the roadmap builder, join the waitlist, or create an account.",
      "We use this information to generate your business roadmap, operate your account, communicate with you about PEN2PRO, and improve the platform. We do not sell your personal information.",
      "We may share information with service providers who help us operate PEN2PRO (such as hosting, email, and payment processing) under confidentiality obligations, or when required by law.",
      "You can request access to, correction of, or deletion of your personal information at any time by contacting us.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when creating an account or generating a roadmap.",
      "PEN2PRO provides business strategy, planning, and educational tools generated with the help of AI. Roadmaps, plans, and recommendations are for informational purposes and do not constitute legal, tax, financial, or credit advice.",
      "Subscription plans (Pro, Elite, Founders) renew according to the billing terms shown at checkout. You may cancel at any time; access continues through the end of the current billing period.",
      "PEN2PRO reserves the right to update these terms as the platform evolves. Continued use of the platform after changes constitutes acceptance of the updated terms.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on individual effort, market conditions, and factors outside PEN2PRO's control.",
      "PEN2PRO is an education, strategy, and organization tool. It is not a law firm, credit repair organization, lender, or financial institution, and does not provide legal, tax, or financial advice.",
      "Any earnings, growth, or funding examples referenced on this platform are illustrative and not a promise or guarantee of similar results.",
      "Always consult a qualified attorney, accountant, or financial advisor before making significant legal, tax, or financial decisions for your business.",
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-7">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-600">Last updated: 2026. Questions? Reach out through the Waitlist page and we'll follow up.</p>
      </main>
      <Footer />
    </div>
  );
}
