import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children, hideFooter = false }) {
  return (
    <div className="min-h-screen bg-[#080C14] flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
