import Navbar from './Navbar'
import Footer from './Footer'

export default function AppShell({ children, noFooter = false }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#080C14' }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      {!noFooter && <Footer />}
    </div>
  )
}
