import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO collects the information you provide directly — such as your name, email, phone
            number, and business idea details — when you create a roadmap, join the waitlist, or
            contact us. We use this information to deliver your roadmap, respond to inquiries, and
            improve the platform.
          </p>
          <p>
            We do not sell your personal information. We may share limited data with service
            providers (such as payment processors or email delivery services) strictly to operate
            PEN2PRO, and only to the extent needed for that purpose.
          </p>
          <p>
            You can request access to, correction of, or deletion of your data at any time by
            contacting us. We retain data only as long as needed to provide our services and meet
            legal obligations.
          </p>
          <p>
            This policy may be updated as PEN2PRO grows. Continued use of the platform after changes
            means you accept the updated policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
