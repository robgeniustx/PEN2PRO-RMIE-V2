import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — when you join the waitlist, generate a roadmap, create an account, or contact us. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, respond to support requests, send product updates, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
  },
  {
    title: "Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials — Stripe handles payment data under its own security and compliance standards.",
  },
  {
    title: "Data Sharing",
    body: "We share data only with service providers who help us operate the platform (hosting, email delivery, payment processing, analytics) and only to the extent needed to provide the service. We do not share your roadmap content or personal data with advertisers.",
  },
  {
    title: "Affiliate Links",
    body: "Some pages (LLC formation, business banking, funding partners, and similar resources) contain affiliate links. If you click through and sign up with a partner, PEN2PRO may earn a commission at no additional cost to you.",
  },
  {
    title: "Data Retention & Deletion",
    body: "You may request deletion of your account and associated data at any time by contacting us. We retain waitlist and roadmap data only as long as needed to operate and improve the platform, or as required by law.",
  },
  {
    title: "Security",
    body: "We use industry-standard safeguards to protect your data, but no system is 100% secure. You are responsible for keeping your account credentials confidential.",
  },
  {
    title: "Contact",
    body: "Questions about this policy or your data can be sent through the contact options listed on our About page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-slate-400">
            Last updated 2026. This policy explains what data PEN2PRO collects, how it's used, and the choices you have.
          </p>
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
