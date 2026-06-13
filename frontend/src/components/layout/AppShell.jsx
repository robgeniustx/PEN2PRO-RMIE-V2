import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({
  children,
  hideNav = false,
  hideFooter = false,
  className = "",
}) {
  return (
    <div className={`flex min-h-screen flex-col bg-[#080C14] ${className}`}>
      {!hideNav && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
