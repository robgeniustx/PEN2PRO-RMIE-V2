import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    badge: "FREE",
    color: "#FF8A00",
    badgeBg: "rgba(255,138,0,0.12)",
    title: "Free Roadmap",
    desc: "Starter RMIE blueprint, 7-day action plan, and business foundation checklist — no credit card required.",
  },
  {
    badge: "PRO",
    color: "#2d9cff",
    badgeBg: "rgba(45,156,255,0.12)",
    title: "Pro Strategy Tools",
    desc: "Full roadmap, branding support, outreach strategy, PDF export, credit & funding readiness checklist.",
  },
  {
    badge: "ELITE",
    color: "#d4af37",
    badgeBg: "rgba(212,175,55,0.12)",
    title: "Elite Execution Support",
    desc: "Advanced strategist guidance, financial projections, legal foundation, vendor & funding resource center.",
  },
  {
    badge: "FOUNDERS",
    color: "#d4af37",
    badgeBg: "rgba(212,175,55,0.08)",
    title: "Legacy Founder Access",
    desc: "Lifetime platform access. Every feature we ever build. 200 spots — one payment, no renewals.",
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
    <div className="min-h-screen flex flex-col" style={{ background: "#080C14" }}>
      <div className="flex flex-1">

        {/* ── LEFT PANEL (desktop only) ── */}
        <div className="relative hidden lg:flex lg:w-[52%] flex-col justify-between overflow-hidden px-12 py-12"
          style={{ background: "linear-gradient(160deg, #090e1c 0%, #0a1428 60%, #060c1a 100%)" }}>

          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }} />
          </div>

          {/* Logo */}
          <Link to="/" className="relative flex items-center gap-3 group w-fit">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0 transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.4)" }}>
              <span className="text-lg leading-none select-none">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight leading-none">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </Link>

          {/* Headline + sub */}
          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FF8A00]">
              ⚡ Rapid Monetization Intelligence Engine
            </div>
            <h1 className="mb-4 font-display text-3xl font-black leading-snug text-white xl:text-4xl">
              Build your business roadmap.
              <br />
              Save your blueprint.
              <br />
              <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Upgrade when ready.
              </span>
            </h1>
            <p className="mb-8 text-sm text-slate-400 leading-relaxed max-w-sm">
              PEN2PRO turns your idea, skill, or lived experience into a real business roadmap — with the structure, strategy, and tools to execute it.
            </p>

            {/* Tier overview cards */}
            <div className="space-y-3">
              {TIER_CARDS.map((t) => (
                <div key={t.badge}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2D50] p-4 transition-colors hover:border-[#1E3060]"
                  style={{ background: "#0d1525" }}>
                  <div className="shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-black tracking-widest"
                    style={{ color: t.color, background: t.badgeBg, border: `1px solid ${t.color}40` }}>
                    {t.badge}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">{t.title}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <div className="relative">
            <p className="border-l-4 border-[#FF8A00] pl-4 text-sm italic text-slate-400 leading-relaxed">
              "This is not just software. This is a second-chance engine, a business builder, and a roadmap for people ready to stop waiting for permission."
            </p>
            <p className="mt-2 pl-4 text-xs font-semibold text-slate-500">— Robert Green, Founder of PEN2PRO</p>
          </div>
        </div>

        {/* ── RIGHT PANEL (form) ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-12">

          {/* Mobile logo */}
          <Link to="/" className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              <span className="text-base leading-none">⚡</span>
            </div>
            <span className="font-display text-xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </Link>

          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <h2 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
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
                      autoComplete="email"
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
                        onClick={() => setError("Password reset is coming soon. Email support@pen2pro.com for help.")}
                        className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <input
                      type="password"
                      required
                      autoComplete="current-password"
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
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
                      autoComplete="name"
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
                      autoComplete="email"
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
                      autoComplete="new-password"
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
                      autoComplete="new-password"
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:text-slate-400 underline">Terms</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="hover:text-slate-400 underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Bottom links */}
              <div className="mt-6 flex flex-col items-center gap-2 border-t border-[#1A2235] pt-5">
                <p className="text-sm text-slate-500">
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </p>
                <p className="text-sm text-slate-500">
                  Want to explore first?{" "}
                  <Link to="/starter" className="font-semibold text-[#FF8A00]">
                    Try the free roadmap
                  </Link>
                </p>
              </div>
            </div>

            {/* Back to home */}
            <div className="mt-6 text-center">
              <Link to="/" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                ← Back to PEN2PRO home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
