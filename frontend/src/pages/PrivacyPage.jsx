import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. What We Collect",
    body: "When you use PEN2PRO, we collect information you give us directly — name, email, phone number, business idea details, and roadmap intake answers — plus basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "2. How We Use It",
    body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or waitlist status, and improve PEN2PRO's tools. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Payments",
    body: "Subscription and one-time payments are processed by Stripe. PEN2PRO does not store your full card number — Stripe handles all payment card data under its own security standards (PCI DSS).",
  },
  {
    title: "4. Affiliate & Partner Links",
    body: "Some pages (Affiliate, Funding, Credit Repair) link to third-party partners such as LLC formation, banking, credit, or funding services. PEN2PRO may earn a referral commission from these partners. Clicking through does not cost you anything extra, and PEN2PRO is not responsible for the third party's own terms or privacy practices.",
  },
  {
    title: "5. Data Storage & Security",
    body: "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, and PEN2PRO cannot guarantee absolute security of information transmitted online.",
  },
  {
    title: "6. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected with an updated effective date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-12">Effective date: January 1, 2026</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-500">
            Questions about this policy or your data? Contact us through the{" "}
            <a href="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</a> or your account email.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
