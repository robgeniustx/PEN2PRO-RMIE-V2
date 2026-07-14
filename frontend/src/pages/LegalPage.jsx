import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    label: "Privacy Policy",
    body:
      "We're finalizing our full Privacy Policy as PEN2PRO moves toward launch. In the meantime: we only collect the information you give us directly (like your name, email, and business details) to build your roadmap, manage your account, and improve the platform. We do not sell your personal data. If you have questions about how your information is handled, reach out and we'll answer directly.",
  },
  terms: {
    label: "Terms of Service",
    body:
      "Our full Terms of Service are being finalized ahead of launch. By using PEN2PRO today, you agree to use the platform in good faith, understand that roadmaps and strategy output are educational guidance rather than professional legal, financial, or tax advice, and that features are still being actively built. A complete version of these terms will be published here before general availability.",
  },
  disclaimer: {
    label: "Disclaimer",
    body:
      "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Roadmaps, strategies, and tools provided through the platform are for education, planning, and organization — outcomes depend on individual effort, market conditions, and factors outside our control. Always consult a qualified professional before making significant legal, financial, or credit decisions.",
  },
};

export default function LegalPage({ page }) {
  const { label, body } = CONTENT[page] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">{label}</h1>
        <p className="text-slate-400 text-lg leading-8">{body}</p>
        <p className="mt-8 text-sm text-slate-500">
          Questions? Reach out any time, or head back{" "}
          <Link to="/" className="text-[#FF8A00] hover:underline">
            home
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
