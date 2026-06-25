import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children, hideFooter = false }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14]">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
