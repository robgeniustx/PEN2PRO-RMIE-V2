import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    tier: "Free",
    color: "#64748b",
    badge: "Always Free",
    icon: "🗺️",
    headline: "Starter Roadmap",
    points: ["1 AI business blueprint", "Basic 7-day action plan", "Brand name ideas", "LLC setup checklist"],
  },
  {
    tier: "Pro",
    color: "#2d9cff",
    badge: "$249/mo",
    icon: "⚡",
    headline: "Pro Strategy Tools",
    points: ["Full RMIE business blueprint", "90-day execution plan", "Sales scripts & outreach", "PDF/email export"],
  },
  {
    tier: "Elite",
    color: "#00C9B1",
    badge: "$499/mo",
    icon: "🚀",
    headline: "Elite Execution Support",
    points: ["Financial projections", "Funding partner resources", "Done-with-you guidance", "Vendor & credit center"],
  },
  {
    tier: "Founders",
    color: "#D4A017",
    badge: "$1,899 lifetime",
    icon: "👑",
    headline: "Legacy Founder Access",
    points: ["Lifetime full platform access", "P2P Command Center", "AI Voice Agent", "200 spots only"],
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
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#1A2235] bg-[#080C14]/95 px-5 py-3.5 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
          >
            <span className="text-[17px] leading-none select-none">⚡</span>
          </div>
          <span className="font-display text-xl font-black tracking-tight leading-none">
            <span style={{ color: "#FFFFFF" }}>PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </span>
        </Link>
        <Link to="/starter" className="rounded-lg px-4 py-2 text-sm font-semibold text-[#D4A017] border border-[#D4A017]/30 hover:bg-[#D4A017]/10 transition-colors">
          Start Free →
        </Link>
      </header>

      {/* Main content — split layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT PANEL — info ── */}
        <div className="hidden lg:flex lg:w-[52%] flex-col justify-between px-12 py-14 relative overflow-hidden" style={{ background: "#0A0F1E" }}>
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="relative">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/08 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
              ⚡ PEN2PRO RMIE — Rapid Monetization Intelligence Engine
            </div>

            {/* Headline */}
            <h1 className="mb-4 font-display text-4xl font-black leading-tight text-white xl:text-5xl">
              Build your business roadmap.{" "}
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>{" "}
              Upgrade when ready.
            </h1>
            <p className="mb-12 text-slate-400 text-base leading-relaxed max-w-lg">
              PEN2PRO is the AI-powered platform built for entrepreneurs, veterans, returning citizens, and working-class builders who are serious about turning an idea into income.
            </p>

            {/* Tier cards */}
            <div className="grid grid-cols-2 gap-4">
              {TIER_PANELS.map((t) => (
                <div
                  key={t.tier}
                  className="rounded-2xl border p-4 transition-all hover:scale-[1.02]"
                  style={{ borderColor: `${t.color}30`, background: `${t.color}08` }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xl">{t.icon}</span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}30` }}
                    >
                      {t.badge}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-bold text-white">{t.headline}</p>
                  <ul className="space-y-1">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                        <span style={{ color: t.color }} className="mt-px shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="relative mt-10 border-t border-[#1A2235] pt-6">
            <p className="text-xs text-slate-500 leading-relaxed">
              Start free — no credit card required. Upgrade to Pro, Elite, or Founders when you're ready to go deeper.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="flex w-full flex-col justify-center px-5 py-12 lg:w-[48%] lg:border-l lg:border-[#1A2235]" style={{ background: "#080C14" }}>
          <div className="mx-auto w-full max-w-sm">

            {/* Mobile headline (hidden on lg) */}
            <div className="mb-8 lg:hidden">
              <h2 className="font-display text-2xl font-black text-white">Build your business roadmap.</h2>
              <p className="mt-1 text-sm text-slate-400">Save your blueprint. Upgrade when ready.</p>
            </div>

            {/* Desktop section label */}
            <div className="mb-8 hidden lg:block">
              <h2 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>

              {/* Tab switcher */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                {[{ key: "login", label: "Sign In" }, { key: "register", label: "Create Account" }].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => { setTab(t.key); setError(""); }}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      tab === t.key
                        ? "text-[#080C14]"
                        : "text-slate-400 hover:text-white"
                    }`}
                    style={tab === t.key ? { background: "linear-gradient(135deg, #D4A017, #FF8A00)" } : {}}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Login Form */}
              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-4">
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
                      <Link to="/waitlist" className="text-xs text-[#D4A017] hover:underline">Forgot password?</Link>
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
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
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
                      placeholder="Your name"
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
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service.
                  </p>
                </form>
              )}

              {/* Bottom links */}
              <div className="mt-5 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                {tab === "login" ? (
                  <>Don't have an account?{" "}
                    <button onClick={() => { setTab("register"); setError(""); }} className="font-semibold" style={{ color: "#D4A017" }}>
                      Create one free
                    </button>
                  </>
                ) : (
                  <>Already have an account?{" "}
                    <button onClick={() => { setTab("login"); setError(""); }} className="font-semibold" style={{ color: "#D4A017" }}>
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Waitlist link */}
            <div className="mt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
              {" "}or{" "}
              <Link to="/starter" className="font-semibold text-slate-400 hover:text-white">
                try the free roadmap
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center justify-center gap-6">
              {["🔒 Secure", "🆓 Free to Start", "⚡ No Card Required"].map((b) => (
                <span key={b} className="text-[11px] text-slate-600">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
