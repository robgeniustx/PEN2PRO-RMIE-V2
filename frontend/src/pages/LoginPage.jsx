import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

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

  const TIERS = [
    {
      icon: "🗺️",
      name: "Free Roadmap",
      price: "$0",
      color: "#94a3b8",
      desc: "1 AI business roadmap, basic strategy output, brand name ideas, LLC checklist.",
      href: "/starter",
    },
    {
      icon: "⚡",
      name: "Pro",
      price: "$249/mo",
      color: "#D4A017",
      desc: "Full 90-day execution plan, sales scripts, credit checklist, PDF export, AI refinement.",
      href: "/pro",
    },
    {
      icon: "🧠",
      name: "Elite",
      price: "$499/mo",
      color: "#00C9B1",
      desc: "Advanced strategist guidance, financial projections, funding partners, done-with-you support.",
      href: "/elite",
    },
    {
      icon: "♾️",
      name: "Legacy Founder",
      price: "$1,899 for life",
      color: "#D4A017",
      desc: "Lifetime access to everything. P2P Command Center, AI Voice Agent, Website Builder, 10M framework.",
      href: "/founders",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto grid max-w-7xl min-h-[calc(100vh-72px)] grid-cols-1 lg:grid-cols-2">

        {/* ── Left: Tier Info Panel ── */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-14 border-b lg:border-b-0 lg:border-r border-[#1A2235]">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            Build your business roadmap
          </p>
          <h1 className="font-display text-3xl font-black leading-tight text-white lg:text-4xl">
            Save your blueprint.<br />
            Upgrade when ready.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Start free. Get a full AI-powered business roadmap. Upgrade to Pro or Elite when you're ready for deeper strategy, outreach, funding readiness, and execution support.
          </p>

          <div className="mt-10 space-y-4">
            {TIERS.map((t) => (
              <Link
                key={t.name}
                to={t.href}
                className="flex items-start gap-4 rounded-xl border border-[#1A2235] p-4 transition-all hover:border-[#D4A017]/30 hover:bg-[#0F1520]"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: `${t.color}18`, border: `1px solid ${t.color}30` }}
                >
                  {t.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{t.name}</span>
                    <span className="text-xs font-semibold" style={{ color: t.color }}>{t.price}</span>
                  </div>
                  <p className="mt-0.5 text-xs leading-5 text-slate-500">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-5 text-xs text-slate-600">
            <span>🔐 Secure login</span>
            <span>•</span>
            <span>🚫 No spam</span>
            <span>•</span>
            <span>✋ Cancel anytime</span>
          </div>
        </div>

        {/* ── Right: Auth Form ── */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-14">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-sm font-black text-[#080C14]">
              P2P
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              {tab === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard"
                : "Start building your business roadmap today — free"}
            </p>
          </div>

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
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
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
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <p className="text-center text-xs text-slate-500">
                <Link to="/waitlist" className="font-semibold hover:text-yellow-400 transition" style={{ color: "#D4A017" }}>
                  Forgot password?
                </Link>
                {" "}— Contact support to reset.
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
                {loading ? "Creating account..." : "Create Account — Free"}
              </button>
              <p className="text-center text-xs text-slate-500">
                By creating an account you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-slate-500">
            Not ready yet?{" "}
            <Link to="/waitlist" className="font-semibold hover:text-yellow-400 transition" style={{ color: "#D4A017" }}>
              Join the waitlist
            </Link>
          </div>

          <div className="mt-4 text-center text-xs text-slate-600">
            <Link to="/starter" className="hover:text-yellow-400 transition">Try the free roadmap without signing up →</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
