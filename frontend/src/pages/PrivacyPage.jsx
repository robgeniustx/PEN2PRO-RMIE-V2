import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) that helps us improve the platform.",
  },
  {
    title: "How We Use It",
    body: "We use your information to generate your roadmap and account experience, to communicate with you about your account, waitlist status, or plan updates, and to understand how PEN2PRO is used so we can improve the product. We do not sell your personal information.",
  },
  {
    title: "Payment Information",
    body: "Subscription and checkout payments are processed by Stripe. PEN2PRO does not store your full credit card number on our servers — payment details are handled directly by Stripe's secure infrastructure.",
  },
  {
    title: "Third-Party Tools",
    body: "PEN2PRO may link to third-party affiliate partners for services like LLC formation, business banking, funding, or credit tools. Those companies have their own privacy policies, and PEN2PRO is not responsible for how they handle your data once you leave our platform.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and administrative steps to protect your information. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from PEN2PRO.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message we send.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-400">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}. This policy explains how PEN2PRO collects,
          uses, and protects your information.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white">{s.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Questions about this policy? Contact us through the platform and we'll respond as quickly as we can.
        </p>
      </div>
      <Footer />
    </div>
  );
}
