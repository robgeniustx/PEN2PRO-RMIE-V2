import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black mb-8">Terms of Service</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            By using PEN2PRO, you agree to use the platform for lawful business planning purposes.
            PEN2PRO provides AI-generated roadmaps, strategy tools, and educational content — it
            does not provide legal, tax, financial, or credit repair services, and nothing on the
            platform should be treated as professional advice.
          </p>
          <p>
            Free, Pro, Elite, and Founders plans unlock different levels of access as described on
            the Pricing page. Subscriptions, where active, renew automatically until cancelled.
            Founders Lifetime access is limited and offered on the terms stated at time of purchase.
          </p>
          <p>
            You are responsible for the accuracy of the information you submit and for your own
            business, financial, and legal decisions. PEN2PRO is not liable for business outcomes,
            missed opportunities, or losses resulting from use of the platform.
          </p>
          <p>
            We may update these terms as the platform evolves. Continued use of PEN2PRO after
            changes are posted constitutes acceptance of the updated terms.
          </p>
          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
