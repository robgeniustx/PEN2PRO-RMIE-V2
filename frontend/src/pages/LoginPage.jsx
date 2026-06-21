import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    name: "Free Roadmap",
    color: "#FF8A00",
    icon: "🗺️",
    desc: "Get a real AI-generated business roadmap — free, no card required.",
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "📊",
    desc: "Full execution blueprint, branding support, credit checklist, and PDF export.",
  },
  {
    name: "Elite — $499/mo",
    color: "#d4af37",
    icon: "🧠",
    desc: "Advanced strategy, financial projections, funding resources, and priority support.",
  },
  {
    name: "Founders — $1,899",
    color: "#d4af37",
    icon: "🏆",
    desc: "Lifetime access to the full platform. Only 200 spots. One price. Forever.",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);

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

  function handleForgotPassword() {
    if (!loginForm.email) {
      setError("Enter your email address above, then click Forgot Password.");
      return;
    }
    setResetSent(true);
    setError("");
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── Left: Info Panel ── */}
        <div
          className="hidden lg:flex lg:w-[44%] flex-col justify-between px-12 py-16"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0D1528 60%, #0A0F1E 100%)", borderRight: "1px solid #1A2D50" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 18px rgba(30,136,229,0.3)" }}
              >
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.<br />
              Save your blueprint.<br />
              <span style={{ color: "#FF8A00" }}>Upgrade when ready.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              PEN2PRO RMIE turns your idea into a realistic roadmap — free to start, powerful when you upgrade.
            </p>

            {/* Tier breakdown */}
            <div className="space-y-3">
              {TIER_CARDS.map((t) => (
                <div
                  key={t.name}
                  className="flex items-start gap-4 rounded-xl border p-4"
                  style={{ borderColor: `${t.color}22`, background: `${t.color}08` }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{t.icon}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: t.color }}>{t.name}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder credit */}
          <div className="mt-10 flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
              style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
            >
              ⚡
            </div>
            <div>
              <p className="text-sm font-bold text-white">Robert Earl Green Jr.</p>
              <p className="text-xs text-slate-500">Veteran · Founder · PEN2PRO</p>
            </div>
          </div>
        </div>

        {/* ── Right: Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Mobile brand + headline */}
            <div className="lg:hidden text-center mb-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-lg font-black text-[#080C14]">
                P
              </div>
              <h1 className="font-display text-2xl font-black text-white mb-1">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-sm text-slate-400">
                Build your business roadmap. Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-3xl font-black text-white mb-1">
                {tab === "login" ? "Sign in to PEN2PRO" : "Create your account"}
              </h1>
              <p className="text-sm text-slate-400">
                {tab === "login"
                  ? "Access your dashboard and business roadmap."
                  : "Start building your business roadmap today — free."}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); setResetSent(false); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); setResetSent(false); }}
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

              {/* Reset sent */}
              {resetSent && (
                <div className="mb-6 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  If an account exists for <strong>{loginForm.email}</strong>, a reset link has been sent.
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-xs font-semibold transition-colors"
                        style={{ color: "#FF8A00" }}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our terms of service and privacy policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#FF8A00" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Free roadmap nudge */}
            <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#0F1520] px-5 py-4 text-center">
              <p className="text-sm text-slate-400">
                Just want to try it first?{" "}
                <Link to="/starter" className="font-semibold text-[#FF8A00] hover:underline">
                  Start your free roadmap →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
