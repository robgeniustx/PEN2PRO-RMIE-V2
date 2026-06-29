import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — including your name, email address, phone number (optional), business idea, and interest level when you sign up, join the waitlist, or use our platform. We also collect usage data such as pages visited, features used, and session information to improve your experience.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to deliver the PEN2PRO platform, send you updates about your account and our launch, personalize your roadmap experience, and improve our services. We do not sell your personal data to third parties.",
  },
  {
    title: "Data Storage and Security",
    body: "Your data is stored securely using industry-standard encryption. We use secure HTTPS connections and follow best practices to protect your personal information. No system is 100% secure, but we take reasonable steps to protect your data.",
  },
  {
    title: "Cookies and Tracking",
    body: "PEN2PRO uses cookies and similar technologies to remember your preferences, track platform usage, and improve performance. You can disable cookies in your browser settings, though some features may not work properly without them.",
  },
  {
    title: "Affiliate Links",
    body: "Some links on PEN2PRO are affiliate links. If you click a link and make a purchase, PEN2PRO may earn a commission at no additional cost to you. All affiliate relationships are disclosed on our Affiliate page.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO may integrate with third-party services such as payment processors, email platforms, and analytics tools. These services have their own privacy policies. We only share the minimum information necessary for these services to function.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal data. To submit a data request, contact us at the email address below. We will respond within 30 days.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a notice on the platform. Continued use of PEN2PRO after changes constitutes your acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Legal</p>
            <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
          </div>

          <p className="mb-10 text-base leading-8 text-slate-400">
            PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we
            collect, use, and protect your information when you use our platform.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-3 text-lg font-bold text-white">Contact Us</h2>
            <p className="text-sm leading-7 text-slate-400">
              For privacy-related questions or data requests, contact us at{" "}
              <span className="font-semibold text-white">support@pen2pro.com</span>. We will respond within 30 business days.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/terms" className="text-slate-500 hover:text-yellow-400 transition">Terms of Service →</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-yellow-400 transition">Disclaimer →</Link>
            <Link to="/" className="text-slate-500 hover:text-yellow-400 transition">Back to Home →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
