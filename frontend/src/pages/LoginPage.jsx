import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    desc: "Start your RMIE blueprint — no credit card required. Get a real action plan for your idea.",
    highlight: false,
  },
  {
    icon: "📊",
    name: "Pro — Full Strategy",
    desc: "Full roadmap, branding support, outreach scripts, PDF export, credit & funding readiness checklist.",
    highlight: false,
  },
  {
    icon: "⚡",
    name: "Elite — Execution",
    desc: "Advanced strategist guidance, financial projections, legal foundation, priority support, vendor integrations.",
    highlight: true,
  },
  {
    icon: "👑",
    name: "Legacy Founder",
    desc: "Lifetime access. Founder recognition. Full platform when launched. Limited spots available.",
    highlight: false,
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginForm.email, password: loginForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: loginForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    if (registerForm.password !== registerForm.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (registerForm.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: registerForm.name, email: registerForm.email, password: registerForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Registration failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: registerForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)]">

        {/* ── LEFT PANEL (desktop only) ── */}
        <div
          className="hidden lg:flex flex-col justify-between w-[420px] xl:w-[480px] shrink-0 px-10 py-14 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0A1628 0%, #0D1F3A 60%, #080C14 100%)" }}
        >
          {/* Orb accents */}
          <div
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 70%)", filter: "blur(40px)" }}
          />
          <div
            className="absolute bottom-0 -right-16 h-64 w-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 70%)", filter: "blur(40px)" }}
          />

          <div className="relative">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2.5 mb-10 group w-fit">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-[18px] leading-none select-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            {/* Headline */}
            <h2 className="font-display text-2xl xl:text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              PEN2PRO RMIE gives you a real roadmap — not motivation. A real business plan built around your idea, your situation, and your goals.
            </p>

            {/* Tier Cards */}
            <div className="space-y-3">
              {TIER_CARDS.map((card) => (
                <div
                  key={card.name}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{
                    background: card.highlight
                      ? "linear-gradient(135deg, rgba(212,160,23,0.12) 0%, rgba(255,138,0,0.08) 100%)"
                      : "rgba(255,255,255,0.03)",
                    border: card.highlight
                      ? "1px solid rgba(212,160,23,0.25)"
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-xl shrink-0 mt-0.5">{card.icon}</span>
                  <div>
                    <p className={`text-sm font-bold mb-0.5 ${card.highlight ? "text-[#D4A017]" : "text-white"}`}>
                      {card.name}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <div className="relative mt-8 border-l-2 border-[#FF8A00] pl-4">
            <p className="text-xs text-slate-400 italic leading-relaxed">
              "This is not just software. This is a second-chance engine, a business builder, and a roadmap for people ready to stop waiting for permission."
            </p>
            <p className="mt-2 text-xs font-bold text-slate-500">— Robert Green, Founder PEN2PRO</p>
          </div>
        </div>

        {/* ── RIGHT PANEL — Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile brand (shown only on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
              >
                <span className="font-black text-lg text-[#080C14]">P2P</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white leading-tight">
                Build your business roadmap.<br />
                <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Save your blueprint.
                </span>
              </h1>
              <p className="mt-2 text-sm text-slate-400">Upgrade when ready.</p>
            </div>

            {/* Desktop form header */}
            <div className="hidden lg:block text-center mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7 xl:p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "btn-gold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "btn-gold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Login Form */}
              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button
                        type="button"
                        onClick={() => alert("Password reset coming soon. Contact support@pen2pro.com")}
                        className="text-xs text-[#D4A017] hover:text-[#FF8A00] transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-50"
                  >
                    {loading ? "Signing in…" : "Sign In"}
                  </button>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.password}
                      onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-50"
                  >
                    {loading ? "Creating account…" : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-400">Terms of Service</span> and{" "}
                    <span className="text-slate-400">Privacy Policy</span>.
                  </p>
                </form>
              )}

              {/* Footer links */}
              <div className="mt-6 space-y-3 border-t border-[#1A2235] pt-5 text-center text-sm">
                <p className="text-slate-500">
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </p>
                <p className="text-slate-500">
                  Want to explore first?{" "}
                  <Link to="/starter" className="font-semibold text-[#1E88E5] hover:text-white transition-colors">
                    Start Free Roadmap
                  </Link>
                </p>
              </div>
            </div>

            {/* Mobile tier info (below form) */}
            <div className="lg:hidden mt-8 space-y-3">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">What you get with PEN2PRO</p>
              {TIER_CARDS.map((card) => (
                <div
                  key={card.name}
                  className="flex items-start gap-3 rounded-xl p-4 border border-[#1A2235]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-lg shrink-0 mt-0.5">{card.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{card.name}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
