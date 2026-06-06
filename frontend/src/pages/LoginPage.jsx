import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const SIDE_BENEFITS = [
  {
    icon: "🗺️",
    title: "Free Roadmap",
    desc: "Get a real 7/30/90-day business roadmap for your idea — no credit card, no commitment.",
    tier: "Free Forever",
    color: "#64748b",
  },
  {
    icon: "⚡",
    title: "Pro Strategy Tools",
    desc: "Unlimited roadmaps, sales scripts, branding direction, credit readiness, and PDF export.",
    tier: "Pro — $249/mo",
    color: "#2d9cff",
  },
  {
    icon: "🏆",
    title: "Elite Execution",
    desc: "Financial projections, funding partners, done-with-you guidance, and priority support.",
    tier: "Elite — $499/mo",
    color: "#00C9B1",
  },
  {
    icon: "👑",
    title: "Legacy Founder Access",
    desc: "Lifetime platform access, 12-month 10M strategist framework. Only 200 spots.",
    tier: "Founders — $1,899 for life",
    color: "#D4A017",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-6xl items-stretch px-4 py-12 lg:py-20">

        {/* Left panel — value proposition */}
        <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:pr-14">
          {/* Brand */}
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 24px rgba(30,136,229,0.4)" }}
            >
              <span className="text-xl">⚡</span>
            </div>
            <span className="font-display text-2xl font-black">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h1 className="font-display text-3xl font-black leading-tight text-white mb-3">
            Build your business roadmap.<br />
            <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
            Upgrade when ready.
          </h1>
          <p className="text-slate-400 text-base mb-10 leading-relaxed">
            PEN2PRO RMIE — Rapid Monetization Intelligence Engine — turns your idea, skill, or lived experience into a real business action plan.
          </p>

          <div className="space-y-4">
            {SIDE_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-4 transition hover:border-[#1A2D50]"
              >
                <span className="text-2xl shrink-0">{b.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-bold text-white">{b.title}</p>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{ background: `${b.color}20`, color: b.color }}
                    >
                      {b.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
            <span>🔒 Secure login</span>
            <span>·</span>
            <span>✓ Free forever tier</span>
            <span>·</span>
            <span>⚡ No setup required</span>
          </div>
        </div>

        {/* Right panel — auth form */}
        <div className="flex w-full flex-col justify-center lg:w-1/2 lg:pl-14 lg:border-l lg:border-[#1A2235]">

          {/* Mobile brand */}
          <div className="mb-6 flex items-center gap-2 lg:hidden">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
            >
              <span className="text-base">⚡</span>
            </div>
            <span className="font-display text-xl font-black">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Mobile headline */}
          <div className="mb-6 lg:hidden">
            <h2 className="font-display text-2xl font-bold text-white">
              Build your business roadmap. Save your blueprint. Upgrade when ready.
            </h2>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
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
                  autoComplete="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  <button
                    type="button"
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    onClick={() => setError("Password reset is not yet available. Contact support.")}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 pr-12 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors text-sm"
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full py-3.5 text-sm font-bold rounded-xl disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => { setTab("register"); setError(""); }}
                  className="font-semibold hover:text-white transition-colors"
                  style={{ color: "#D4A017" }}
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
                  autoComplete="name"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
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
                  onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
                    placeholder="Min 8 characters"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 pr-12 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors text-sm"
                  >
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={registerForm.confirm}
                  onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full py-3.5 text-sm font-bold rounded-xl disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create Free Account"}
              </button>
              <p className="text-center text-xs text-slate-500">
                By creating an account you agree to our{" "}
                <Link to="/terms" className="underline hover:text-slate-300">Terms</Link>
                {" "}and{" "}
                <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
              </p>

              <p className="text-center text-sm text-slate-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => { setTab("login"); setError(""); }}
                  className="font-semibold hover:text-white transition-colors"
                  style={{ color: "#D4A017" }}
                >
                  Sign in
                </button>
              </p>
            </form>
          )}

          {/* Footer links */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Not ready to sign up?{" "}
            <Link to="/waitlist" className="font-semibold hover:text-white transition-colors" style={{ color: "#D4A017" }}>
              Join the waitlist
            </Link>
            {" "}·{" "}
            <Link to="/starter" className="underline hover:text-slate-300 transition-colors">
              Try free roadmap
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
