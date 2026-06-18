import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_FEATURES = [
  {
    tier: "Free Roadmap",
    color: "#00C9B1",
    icon: "🗺️",
    desc: "Start your blueprint instantly. No credit card required.",
    bullets: ["AI business roadmap", "7-day action plan", "LLC & brand checklist"],
    href: "/starter",
  },
  {
    tier: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "📊",
    desc: "Full execution toolkit for serious builders.",
    bullets: ["Full 30/90-day plan", "Sales scripts + outreach", "PDF export + branding"],
    href: "/pro",
  },
  {
    tier: "Elite — $499/mo",
    color: "#d4af37",
    icon: "🧠",
    desc: "Advanced strategy + financial projections.",
    bullets: ["Financial projections", "Funding resource center", "Legal foundation checklist"],
    href: "/elite",
  },
  {
    tier: "Founders Lifetime",
    color: "#FF8A00",
    icon: "🏆",
    desc: "One payment. Every feature. For life.",
    bullets: ["Lifetime platform access", "200 spots available", "All future features included"],
    href: "/founders",
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
        {/* Left panel — plan overview (hidden on small screens) */}
        <div
          className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-center px-10 py-16 border-r border-[#1A2235]"
          style={{ background: "#0A0F1E" }}
        >
          {/* Brand */}
          <div className="mb-8 flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
            >
              <span className="text-[17px] leading-none select-none">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight leading-none">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h2 className="mb-2 font-display text-2xl font-black text-white leading-snug">
            Build your business roadmap.<br />
            Save your blueprint.<br />
            Upgrade when ready.
          </h2>
          <p className="mb-8 text-sm text-slate-500 leading-relaxed">
            Start free. No credit card. Your roadmap is ready in under 5 minutes.
          </p>

          <div className="space-y-3">
            {PLAN_FEATURES.map((plan) => (
              <Link
                key={plan.tier}
                to={plan.href}
                className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 transition hover:border-[#1A2D50] group"
              >
                <div
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ background: plan.color + "15", border: `1px solid ${plan.color}30` }}
                >
                  {plan.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-black text-white group-hover:text-[#FF8A00] transition-colors">{plan.tier}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{plan.desc}</p>
                  <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                    {plan.bullets.map((b) => (
                      <span key={b} className="text-[10px] font-semibold" style={{ color: plan.color }}>
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right panel — auth form */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                ⚡
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-500">Forgot password? Contact support</span>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Footer links */}
              <div className="mt-6 space-y-3 border-t border-[#1A2235] pt-5">
                <div className="text-center text-sm text-slate-500">
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
                <div className="text-center text-sm text-slate-500">
                  Want to start free?{" "}
                  <Link to="/starter" className="font-semibold text-[#00C9B1]">
                    Try the free roadmap
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile plan quick-links */}
            <div className="mt-6 lg:hidden grid grid-cols-2 gap-2">
              {PLAN_FEATURES.map((plan) => (
                <Link
                  key={plan.tier}
                  to={plan.href}
                  className="rounded-xl border border-[#1A2235] bg-[#0F1520] px-3 py-2.5 text-center transition hover:border-[#1A2D50]"
                >
                  <span className="mr-1 text-base">{plan.icon}</span>
                  <span className="text-xs font-semibold text-slate-300">{plan.tier.split(" —")[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
