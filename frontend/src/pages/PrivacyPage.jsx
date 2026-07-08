import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) needed to operate and improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, respond to support requests, improve PEN2PRO's tools, and — if you opt in — send updates about Pro, Elite, and Founders access, waitlist status, and relevant resources.",
  },
  {
    title: "How We Protect Your Information",
    body: "We apply reasonable technical and administrative safeguards to protect your data. No system is 100% secure, so we cannot guarantee absolute security, but we work to keep your information safe and access-controlled.",
  },
  {
    title: "Sharing Your Information",
    body: "We do not sell your personal information. We may share data with service providers who help us operate PEN2PRO (such as hosting, payment processing, and email delivery), and only to the extent needed for them to perform that service.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can unsubscribe from marketing emails using the link included in those messages.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent through the PEN2PRO waitlist or contact form.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Last updated: 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
