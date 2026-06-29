import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you join the PEN2PRO waitlist or create an account, we collect your name, email address, phone number (optional), and business idea description.",
      "When you use the RMIE roadmap tool, we collect the business information you submit to generate your roadmap.",
      "We may collect device and usage information including browser type, IP address, pages visited, and time spent on the platform for analytics purposes.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To send you platform updates, launch notifications, and information about PEN2PRO features you signed up for.",
      "To generate your AI-powered business roadmap and personalize your experience.",
      "To improve the platform, understand how people use PEN2PRO, and build better tools.",
      "To contact you about your account, subscription, or support requests.",
    ],
  },
  {
    title: "Information Sharing",
    body: [
      "We do not sell your personal information to third parties.",
      "We may share information with service providers who help us operate the platform (payment processing, email delivery, analytics) under strict data agreements.",
      "We may disclose information if required by law or to protect the rights and safety of PEN2PRO users.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "PEN2PRO uses cookies and similar technologies to keep you logged in, remember your preferences, and understand how you use the platform.",
      "You can control cookies through your browser settings. Disabling cookies may affect platform functionality.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use industry-standard security measures to protect your information, including encrypted data storage and secure HTTPS connections.",
      "No system is 100% secure. We encourage you to use a strong unique password and protect your account credentials.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information by contacting us at support@pen2pro.com.",
      "You may unsubscribe from marketing emails at any time using the unsubscribe link in any email we send.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy as the platform evolves. We will notify you of significant changes via email or platform notification.",
      "Your continued use of PEN2PRO after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this Privacy Policy? Email us at support@pen2pro.com or write to PEN2PRO, Houston, TX.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              Legal
            </div>
            <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
            <p className="mt-3 text-slate-400 text-sm">Last updated: July 1, 2026</p>
          </div>

          <div className="mb-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm leading-7 text-slate-400">
              PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your choices. By using PEN2PRO, you agree to the terms of this policy.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 font-display text-xl font-bold text-white">{s.title}</h2>
                <ul className="space-y-3">
                  {s.body.map((line, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A00]" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4 text-sm">
            <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link>
            <span className="text-slate-700">·</span>
            <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>
            <span className="text-slate-700">·</span>
            <Link to="/" className="text-slate-500 hover:text-white">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
