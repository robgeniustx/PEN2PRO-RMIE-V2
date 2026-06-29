import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_INFO = [
  {
    tier: "Free Roadmap",
    icon: "🗺️",
    desc: "1 AI business blueprint, basic 7-day action plan, brand name ideas, and LLC setup checklist.",
  },
  {
    tier: "Pro — $249/mo",
    icon: "⚡",
    desc: "Full RMIE roadmap, 30/90-day execution plan, sales scripts, branding support, and PDF export.",
  },
  {
    tier: "Elite — $499/mo",
    icon: "🧠",
    desc: "Everything in Pro plus financial projections, vendor & funding resources, and priority support.",
  },
  {
    tier: "Legacy Founder — $1,899",
    icon: "🏆",
    desc: "Lifetime access to every feature we build — P2P Command Center, AI Voice Agent, Website Builder, and more.",
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
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#1A2D50] px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 14px rgba(30,136,229,0.3)" }}
          >
            <span className="text-sm leading-none">⚡</span>
          </div>
          <span className="font-display text-xl font-black tracking-tight leading-none">
            <span style={{ color: "#FFFFFF" }}>PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </span>
        </Link>
        <Link to="/" className="text-sm text-slate-400 transition hover:text-white">
          ← Back to home
        </Link>
      </div>

      {/* Two-column layout */}
      <div className="flex min-h-[calc(100vh-65px)]">

        {/* LEFT PANEL — Tier overview */}
        <div className="relative hidden lg:flex lg:w-[52%] flex-col justify-center px-14 py-16 border-r border-[#1A2D50]"
          style={{ background: "linear-gradient(160deg, #080C14 0%, #0D1528 100%)" }}>
          <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.07) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div className="pointer-events-none absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.06) 0%, transparent 65%)", filter: "blur(60px)" }} />

          <div className="relative max-w-md">
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FF8A00]">
                ⚡ Rapid Monetization Intelligence Engine
              </div>
              <h2 className="mb-4 font-display text-3xl font-black leading-tight text-white">
                Build your business roadmap.
                <br />
                Save your blueprint.
                <br />
                <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Upgrade when ready.
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                PEN2PRO gives every builder — veteran, returning citizen, first-time entrepreneur — a clear plan to turn their idea into income.
              </p>
            </div>

            <div className="space-y-3">
              {TIER_INFO.map((t) => (
                <div key={t.tier} className="flex gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 transition hover:border-[#1A2D50]">
                  <div className="shrink-0 text-2xl">{t.icon}</div>
                  <div>
                    <p className="mb-0.5 text-sm font-bold text-white">{t.tier}</p>
                    <p className="text-xs leading-relaxed text-slate-500">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
              <p className="text-xs italic leading-relaxed text-slate-500">
                "I went from a napkin idea to a full LLC, business bank account, and my first $2,400 month in 47 days. PEN2PRO didn't give me motivation — it gave me a system."
              </p>
              <p className="mt-2 text-xs font-bold text-slate-400">Marcus T. — Pressure Washing Owner, Houston TX</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Form */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            <div className="mb-8 text-center">
              <h1 className="mb-2 font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                        className="text-xs text-[#D4A017] hover:underline"
                        onClick={() => setError("Password reset: contact support@pen2pro.com")}
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    No account yet?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:underline"
                    >
                      Create one free
                    </button>
                  </p>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-5">
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="text-[#D4A017] hover:underline">Terms</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-[#D4A017] hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier cards */}
            <div className="mt-6 lg:hidden">
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
                What You Get With PEN2PRO
              </p>
              <div className="grid grid-cols-2 gap-2">
                {TIER_INFO.map((t) => (
                  <div key={t.tier} className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
                    <p className="text-xl">{t.icon}</p>
                    <p className="mt-1 text-xs font-bold text-white">{t.tier}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
