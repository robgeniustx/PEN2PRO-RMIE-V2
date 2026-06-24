import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children, hideFooter = false, className = "" }) {
  return (
    <div className={`relative min-h-screen bg-[#080C14] text-white overflow-hidden ${className}`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
