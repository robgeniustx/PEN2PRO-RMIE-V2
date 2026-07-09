import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "What we collect",
        body: "PEN2PRO collects the information you give us directly — name, email, phone (optional), business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used) to improve the platform.",
      },
      {
        heading: "How we use it",
        body: "We use your information to generate your business roadmap, operate your account, respond to support requests, and — only if you opt in — send updates about PEN2PRO plans, waitlist status, and relevant offers.",
      },
      {
        heading: "What we don't do",
        body: "We do not sell your personal information. We do not share your roadmap content or business details with third parties except the service providers (hosting, email, payments) required to run the platform.",
      },
      {
        heading: "Your control",
        body: "You can request a copy of your data, ask us to delete your account, or unsubscribe from communications at any time by contacting support.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy guidance, and readiness tools. By using the platform you agree to use it for lawful business purposes and to keep your account credentials secure.",
      },
      {
        heading: "Plans and billing",
        body: "Free, Pro, Elite, and Founders plans are described on the Pricing page. Paid plans are billed on the cycle shown at checkout. You can cancel a paid plan at any time; access continues through the end of the billing period.",
      },
      {
        heading: "No guarantees",
        body: "PEN2PRO is an education, strategy, and organization tool. We do not guarantee business success, revenue, funding approval, loan approval, or credit repair outcomes. Results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Intellectual property",
        body: "Roadmaps and content generated for your account are yours to use for your business. The PEN2PRO platform, brand, and underlying technology remain the property of PEN2PRO.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: June 2026",
    sections: [
      {
        heading: "Educational purpose",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. It is not legal, tax, financial, or credit repair advice. Consult a licensed professional before making legal, financial, or credit decisions.",
      },
      {
        heading: "No guaranteed outcomes",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every roadmap, checklist, and strategy is a starting point — outcomes depend on individual effort, execution, and market conditions.",
      },
      {
        heading: "Third-party services",
        body: "Some pages reference third-party affiliate services (LLC formation, banking, credit, funding, and similar). PEN2PRO may earn a referral commission from these partners. We do not control and are not responsible for third-party service outcomes.",
      },
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = CONTENT[variant] || CONTENT.disclaimer;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">
          {page.updated}
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-10 md:text-5xl">
          {page.title}
        </h1>
        <div className="space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-2 text-xl font-bold text-white">{s.heading}</h2>
              <p className="leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
