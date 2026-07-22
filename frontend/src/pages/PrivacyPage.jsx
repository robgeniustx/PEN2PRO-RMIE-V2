import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — when you join the waitlist, create an account, or generate a business blueprint. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, communicate updates about PEN2PRO, provide customer support, process payments for Pro, Elite, and Founders plans, and improve our AI-generated strategy output. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Storage & Security",
    body: "Your data is stored using industry-standard security practices. While we take reasonable steps to protect your information, no online platform can guarantee absolute security. Do not submit sensitive financial account numbers or passwords through any PEN2PRO form.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO uses third-party services for payment processing (Stripe), AI-generated content, and analytics. These providers only receive the information necessary to perform their function and are bound by their own privacy policies.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "Some pages (Funding, Credit Repair, Affiliate) contain links to partner services for LLC formation, business banking, credit, and funding. PEN2PRO may earn a commission from these partners. Clicking a partner link takes you to that company's own site, governed by their own privacy policy.",
  },
  {
    title: "Your Choices",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any message we send.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent to the contact address listed on our About page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-display text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="btn-outline px-6 py-3 text-center text-sm font-bold">
              Read Terms of Service
            </Link>
            <Link to="/disclaimer" className="btn-outline px-6 py-3 text-center text-sm font-bold">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
