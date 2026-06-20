import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children, noFooter = false }) {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <main>{children}</main>
      {!noFooter && <Footer />}
    </div>
  );
}
