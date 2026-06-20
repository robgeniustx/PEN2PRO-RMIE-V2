import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANEL = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    color: "#94a3b8",
    border: "#1A2235",
    desc: "Get a free AI business roadmap in under 5 minutes. No credit card required.",
  },
  {
    icon: "📊",
    name: "Pro — Strategy Tools",
    color: "#2d9cff",
    border: "#1a3050",
    desc: "Full blueprint, outreach scripts, branding, PDF export, and credit readiness.",
  },
  {
    icon: "🧠",
    name: "Elite — Execution Support",
    color: "#d4af37",
    border: "#2a2010",
    desc: "Advanced strategy, financial projections, vendor center, and done-with-you guidance.",
  },
  {
    icon: "🏆",
    name: "Legacy Founders",
    color: "#d4af37",
    border: "#2a2010",
    desc: "Lifetime access — one payment, every feature, every future release, forever.",
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
      <Navbar />

      <div className="flex flex-1 min-h-0">
        {/* ── LEFT PANEL — value proposition (desktop only) ── */}
        <div
          className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-between p-10 xl:p-14 relative overflow-hidden border-r border-[#1A2235]"
          style={{ background: "linear-gradient(160deg, #0D1628 0%, #080C14 100%)" }}
        >
          {/* Background glow */}
          <div
            className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.14) 0%, transparent 70%)", filter: "blur(55px)" }}
          />
          <div
            className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 70%)", filter: "blur(45px)" }}
          />

          {/* Top: logo + headline */}
          <div className="relative">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-8">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-base leading-none">⚡</span>
              </div>
              <span className="font-display text-xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="text-2xl font-black text-white leading-snug mb-4">
              Build your business roadmap.<br />
              Save your blueprint.<br />
              <span style={{ color: "#FF8A00" }}>Upgrade when ready.</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              PEN2PRO RMIE gives you the structure, strategy, and execution tools to turn your idea into income — no matter where you're starting from.
            </p>

            {/* Tier cards */}
            <div className="space-y-2.5">
              {TIER_PANEL.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-3 rounded-xl p-3.5"
                  style={{ border: `1px solid ${tier.border}`, background: "rgba(0,0,0,0.3)" }}
                >
                  <span className="text-xl shrink-0 mt-0.5">{tier.icon}</span>
                  <div>
                    <p className="text-sm font-bold leading-none mb-1" style={{ color: tier.color }}>
                      {tier.name}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: founder attribution */}
          <p className="relative text-xs text-slate-600 mt-8">
            Built by Robert Earl Green Jr. — veteran, entrepreneur &amp; founder of PEN2PRO.
          </p>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="flex flex-1 items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="lg:hidden text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2.5 justify-center">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
                >
                  <span className="text-base leading-none">⚡</span>
                </div>
                <span className="font-display text-xl font-black tracking-tight">
                  <span className="text-white">PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <p className="mt-3 text-sm font-semibold text-slate-400">
                Build your roadmap. Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Header */}
            <div className="mb-7">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
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
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">
                        Forgot password?
                      </Link>
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
                    className="btn-gold w-full py-3.5 text-sm font-black rounded-xl disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
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
                    className="btn-gold w-full py-3.5 text-sm font-black rounded-xl disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-5 pt-5 border-t border-[#1A2235] text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier quick-look */}
            <div className="lg:hidden mt-6 grid grid-cols-2 gap-2">
              {TIER_PANEL.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-xl p-3 text-center"
                  style={{ border: `1px solid ${tier.border}`, background: "rgba(15,21,32,0.8)" }}
                >
                  <p className="text-lg mb-1">{tier.icon}</p>
                  <p className="text-xs font-bold" style={{ color: tier.color }}>{tier.name.split(" — ")[0]}</p>
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
