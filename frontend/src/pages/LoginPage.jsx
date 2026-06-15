import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BULLETS = [
  {
    badge: "Free Forever",
    color: "#94A3B8",
    borderColor: "#1A2D50",
    icon: "🗺️",
    headline: "Free Roadmap",
    points: ["1 AI business blueprint", "7-day starter action plan", "Brand name ideas", "LLC setup checklist"],
  },
  {
    badge: "Pro — $249/mo",
    color: "#2d9cff",
    borderColor: "#2d9cff",
    icon: "📊",
    headline: "Pro Strategy Tools",
    points: ["Full 30/90-day execution plan", "Sales scripts & outreach", "Credit & funding checklist", "PDF/email export"],
  },
  {
    badge: "Elite — $499/mo",
    color: "#00C9B1",
    borderColor: "#00C9B1",
    icon: "⚡",
    headline: "Elite Execution Support",
    points: ["Advanced strategist guidance", "Financial projections", "Done-with-you strategy", "Vendor & lender resources"],
  },
  {
    badge: "Legacy Founder",
    color: "#D4A017",
    borderColor: "#D4A017",
    icon: "♾️",
    headline: "Lifetime Access",
    points: ["One payment, no renewals", "Every Pro & Elite feature", "AI Voice Agent + CRM", "Founder recognition badge"],
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

      <div className="mx-auto max-w-7xl px-5 py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_480px] lg:gap-16 items-start">

          {/* ── LEFT: Value Proposition Panel ── */}
          <div className="hidden lg:block">
            {/* Brand */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2.5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
                >
                  <span className="text-lg leading-none">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </div>
              <h2 className="font-display text-3xl font-black leading-tight text-white md:text-4xl">
                Build your business roadmap.
                <br />
                <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Save your blueprint.
                </span>
                <br />
                Upgrade when ready.
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
                PEN2PRO RMIE turns your idea into a real business plan — with launch steps, monetization strategy, funding readiness, and execution support built around your specific situation.
              </p>
            </div>

            {/* Tier Cards */}
            <div className="grid gap-3">
              {TIER_BULLETS.map((tier) => (
                <div
                  key={tier.badge}
                  className="rounded-xl border p-4 flex gap-4 items-start"
                  style={{ borderColor: `${tier.borderColor}40`, background: `${tier.borderColor}08` }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{tier.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: tier.color }}>
                        {tier.badge}
                      </span>
                    </div>
                    <p className="font-bold text-white text-sm mb-1.5">{tier.headline}</p>
                    <ul className="space-y-1">
                      {tier.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-slate-400">
                          <span style={{ color: tier.color }} className="shrink-0">✓</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <p className="mt-6 text-xs text-slate-600">
              Built for entrepreneurs, veterans, returning citizens, creators, and working-class builders.
            </p>
          </div>

          {/* ── RIGHT: Auth Form ── */}
          <div className="w-full">
            {/* Mobile brand */}
            <div className="text-center mb-8 lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                P2P
              </div>
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Build your business roadmap today"}
              </p>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block mb-6">
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Sign in to PEN2PRO" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Access your dashboard, roadmaps, and business tools."
                  : "Start free — no credit card required."}
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
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:text-[#FF8A00]"
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
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="underline hover:text-slate-300">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist / Starter links */}
              <div className="mt-6 flex flex-col gap-2 border-t border-[#1A2235] pt-5 text-center text-xs text-slate-500">
                <span>
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:text-[#FF8A00]">
                    Join the waitlist
                  </Link>
                </span>
                <span>
                  Want to try it first?{" "}
                  <Link to="/starter" className="font-semibold text-[#D4A017] hover:text-[#FF8A00]">
                    Start a free roadmap →
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
