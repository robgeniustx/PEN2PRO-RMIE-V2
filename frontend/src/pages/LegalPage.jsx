import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    intro:
      "PEN2PRO respects your privacy. This page explains what information we collect, how it's used, and the choices you have.",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — name, email, phone, business idea details, and waitlist interest — as well as basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to generate your roadmap, communicate updates about PEN2PRO, personalize your experience, and improve our AI-powered tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Security",
        body: "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, and we encourage you to use strong, unique passwords for your account.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal information at any time by contacting support.",
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    intro:
      "By using PEN2PRO, you agree to the following terms. Please read them carefully before using the platform.",
    sections: [
      {
        heading: "Use of the Platform",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources. You agree to use the platform for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Legacy Founder plans are billed on the cadence disclosed at checkout. You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
      },
      {
        heading: "Intellectual Property",
        body: "Roadmaps, strategy documents, and content generated for your account are yours to use for your business. PEN2PRO retains ownership of the underlying platform, software, and brand.",
      },
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    intro:
      "PEN2PRO is a strategy, education, and readiness platform. Please read this disclaimer before acting on any roadmap, plan, or recommendation.",
    sections: [
      {
        heading: "Not Financial, Legal, or Credit Repair Advice",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Content is provided for educational and strategic planning purposes and is not a substitute for advice from a licensed attorney, accountant, or financial advisor.",
      },
      {
        heading: "Individual Results Vary",
        body: "Every business, market, and financial situation is different. Startup costs, revenue estimates, and timelines shown in your roadmap are planning estimates, not promises.",
      },
      {
        heading: "Third-Party Resources",
        body: "PEN2PRO may link to third-party services (banking, funding, credit, formation, or marketing partners). We are not responsible for the products, services, or outcomes provided by third parties.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">{page.title}</h1>
        <p className="text-slate-400 text-lg mb-10 leading-8">{page.intro}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="text-lg font-black text-white mb-2">{s.heading}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-600">
          PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on
          individual effort and market conditions. Questions about this page? Reach out via the{" "}
          <Link to="/waitlist" className="text-[#FF8A00] hover:underline">
            waitlist form
          </Link>{" "}
          and mention "legal" in your message.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-gold px-8 py-3 text-sm font-bold text-center">
            Back to Home
          </Link>
          <Link to="/starter" className="btn-outline px-8 py-3 text-sm font-bold text-center">
            Start Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
