import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    updated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly — name, email, phone (optional), business idea, and interest level when you sign up or join our waitlist. We also collect usage data to improve the platform.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to provide PEN2PRO services, send platform updates and launch notifications, improve our AI roadmap quality, and communicate about your account, plan, or waitlist position.",
      },
      {
        heading: "Information Sharing",
        body: "We do not sell your personal information. We may share limited data with service providers who help us operate PEN2PRO (payment processing, email delivery, analytics) under strict confidentiality agreements.",
      },
      {
        heading: "Data Security",
        body: "We use industry-standard security practices including encrypted connections (HTTPS), hashed passwords, and access controls. No system is 100% secure — if you believe your account has been compromised, contact us immediately.",
      },
      {
        heading: "Cookies",
        body: "PEN2PRO uses cookies and similar tracking technologies to remember your preferences, maintain your session, and analyze platform usage. You can disable cookies in your browser settings, though some features may not function correctly.",
      },
      {
        heading: "Your Rights",
        body: "You may request to access, correct, or delete your personal data at any time by contacting us at support@pen2pro.com. We will respond to verified requests within 30 days.",
      },
      {
        heading: "Changes to This Policy",
        body: "We may update this Privacy Policy as the platform evolves. We will notify registered users of material changes via email or platform notification.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Email us at support@pen2pro.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "June 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By using PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform. These terms apply to all users including free, Pro, Elite, and Founders tier members.",
      },
      {
        heading: "Platform Description",
        body: "PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that provides business roadmaps, strategy guidance, and educational content. The platform is not a licensed financial advisor, attorney, accountant, or credit counselor.",
      },
      {
        heading: "User Responsibilities",
        body: "You are responsible for maintaining your account security, providing accurate information, and using PEN2PRO only for lawful purposes. You may not share account credentials, attempt to reverse-engineer the platform, or use outputs to harm others.",
      },
      {
        heading: "Subscription & Billing",
        body: "Pro and Elite subscriptions are billed monthly. Founders Lifetime is a one-time payment. Subscriptions renew automatically unless cancelled before the renewal date. Refunds are handled on a case-by-case basis — contact support@pen2pro.com within 7 days of a charge.",
      },
      {
        heading: "AI Output Disclaimer",
        body: "AI-generated roadmaps, plans, scripts, and recommendations are tools to support your business thinking — not guarantees of success, income, funding approval, or legal compliance. You are responsible for verifying all information and making your own business decisions.",
      },
      {
        heading: "Intellectual Property",
        body: "PEN2PRO owns all platform content, branding, and AI infrastructure. You own the roadmaps and business plans you generate with your own business data. Do not reproduce or resell PEN2PRO's platform UI, prompts, or systems.",
      },
      {
        heading: "Termination",
        body: "We reserve the right to suspend or terminate accounts that violate these terms. Free accounts may be closed after extended inactivity. You may cancel your account at any time.",
      },
      {
        heading: "Governing Law",
        body: "These Terms are governed by the laws of the State of Texas. Disputes will be resolved in the courts of Houston, Texas or through binding arbitration as agreed by both parties.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "June 2026",
    sections: [
      {
        heading: "No Income Guarantee",
        body: "PEN2PRO does not guarantee income, revenue, business growth, or financial results. All roadmaps, projections, and strategies are educational tools. Individual results depend entirely on your effort, market conditions, business decisions, and many factors outside our control.",
      },
      {
        heading: "No Funding or Credit Guarantee",
        body: "PEN2PRO does not guarantee loan approval, credit score improvement, funding access, or lender relationships. Funding readiness tools and credit guidance are for educational purposes only. Always work with licensed financial professionals for credit and funding decisions.",
      },
      {
        heading: "Not Legal or Financial Advice",
        body: "Nothing on PEN2PRO constitutes legal advice, financial advice, tax advice, or accounting services. The platform provides general business education and strategy tools. Consult a licensed attorney, CPA, or financial advisor for decisions specific to your situation.",
      },
      {
        heading: "AI-Generated Content",
        body: "Roadmaps, business plans, scripts, projections, and recommendations are generated by AI based on information you provide. AI outputs may contain errors, outdated information, or strategies that do not apply to your specific circumstances. Review all outputs critically before acting.",
      },
      {
        heading: "Third-Party Links",
        body: "PEN2PRO may display affiliate links to third-party services (banking, LLC formation, insurance, marketing tools). We may receive a commission if you use these links. We do not control third-party services and are not responsible for their offerings, pricing, or terms.",
      },
      {
        heading: "Testimonials",
        body: "Results shared by PEN2PRO users are individual experiences and are not typical. Your results will vary based on your unique situation, effort, and market conditions.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const type = pathname.replace("/", "");
  const page = LEGAL[type] || LEGAL.disclaimer;

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO Legal</div>
        <h1 className="mb-2 font-display text-4xl font-black text-white">{page.title}</h1>
        <p className="mb-12 text-sm text-slate-500">Last updated: {page.updated}</p>

        <div className="space-y-8">
          {page.sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
              <h2 className="mb-3 text-base font-bold text-white">{s.heading}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 text-sm">
          <Link to="/privacy" className={`font-semibold ${type === "privacy" ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"}`}>Privacy Policy</Link>
          <Link to="/terms" className={`font-semibold ${type === "terms" ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"}`}>Terms of Service</Link>
          <Link to="/disclaimer" className={`font-semibold ${type === "disclaimer" ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"}`}>Disclaimer</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
