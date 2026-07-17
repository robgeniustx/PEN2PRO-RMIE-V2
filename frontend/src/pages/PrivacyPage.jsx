import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use PEN2PRO, we may collect information you provide directly, including your name, email address, phone number, business idea, and account credentials.",
      "We also collect usage data automatically — pages visited, features used, roadmap progress, and general device/browser information — to improve the platform and understand how people use it.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to create and save your business roadmap, operate your account, process upgrades and payments, respond to support requests, and send you relevant updates about PEN2PRO.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "3. Data Sharing",
    body: [
      "We may share limited data with service providers who help us operate PEN2PRO — such as payment processors, hosting providers, and analytics tools — solely to deliver the service.",
      "We may disclose information if required by law or to protect the rights, safety, or property of PEN2PRO or its users.",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    body: [
      "PEN2PRO uses cookies and similar technologies to keep you signed in, remember your preferences, and measure how the platform is used. You can disable cookies in your browser, though some features may not work correctly without them.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We take reasonable technical and organizational steps to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted online.",
    ],
  },
  {
    title: "6. Your Rights & Choices",
    body: [
      "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any email we send.",
    ],
  },
  {
    title: "7. Children's Privacy",
    body: [
      "PEN2PRO is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated effective date on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: January 1, 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-7 text-slate-400">{p}</p>
              ))}
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="text-lg font-bold text-white">9. Contact Us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Questions about this Privacy Policy? Reach out through our{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>waitlist form</Link>{" "}
              or your account contact page and our team will respond.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
