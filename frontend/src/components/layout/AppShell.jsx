import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children, hideFooter = false }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
