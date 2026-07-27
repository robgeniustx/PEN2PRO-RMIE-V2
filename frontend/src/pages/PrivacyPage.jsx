import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or the waitlist, improve PEN2PRO's AI outputs, and — where you've opted in — send updates about Pro, Elite, and Founders access.",
  },
  {
    title: "3. Information Sharing",
    body: "We do not sell your personal information. We may share data with service providers who help us operate PEN2PRO (hosting, email, payment processing, analytics), and only to the extent needed for them to perform those services.",
  },
  {
    title: "4. Data Security",
    body: "We use reasonable technical and administrative safeguards to protect your information. No system is 100% secure, and we encourage you to use a strong, unique password for your account.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "PEN2PRO uses basic analytics to understand how the platform is used so we can improve it. This data is aggregated and does not identify you individually beyond what's described above.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. We'll post the updated version on this page with a new effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-sm text-slate-500">Effective date: January 1, 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Questions about your data? Contact us through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account dashboard.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
