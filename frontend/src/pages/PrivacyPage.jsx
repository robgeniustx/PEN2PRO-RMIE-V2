import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-black md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
            <p>
              PEN2PRO ("we," "us," or "our") respects your privacy. This policy explains what
              information we collect when you use the platform, how we use it, and the choices
              you have.
            </p>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
              <p>
                We collect information you provide directly, such as your name, email, phone
                number, and business idea details when you complete a roadmap, join the waitlist,
                or create an account. We also collect basic usage data (pages visited, features
                used) to improve the product.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">How We Use Information</h2>
              <p>
                We use your information to generate your business roadmap, respond to inquiries,
                improve PEN2PRO, and — where you've opted in — send updates about Pro, Elite, and
                Founders access. We do not sell your personal information.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Third-Party Services</h2>
              <p>
                We use trusted third-party services (such as payment processors and analytics
                tools) to operate PEN2PRO. These providers only receive the information necessary
                to perform their function and are bound to protect it.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
              <p>
                You can request access to, correction of, or deletion of your personal
                information at any time by contacting us. You may also unsubscribe from marketing
                emails using the link in any message.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
              <p>
                Questions about this policy? Reach out through the{" "}
                <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link>{" "}
                or your account contact and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
