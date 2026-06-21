import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_BENEFITS = [
  {
    tier: "Free Forever",
    icon: "🗺️",
    color: "#64748b",
    points: [
      "Starter business blueprint",
      "AI-generated roadmap preview",
      "Basic 7-day action plan",
      "No credit card required",
    ],
  },
  {
    tier: "Pro — $249/mo",
    icon: "⚡",
    color: "#2d9cff",
    points: [
      "Full RMIE execution blueprint",
      "PDF & email export",
      "Credit & funding readiness",
      "Outreach strategy + sales scripts",
    ],
  },
  {
    tier: "Elite — $499/mo",
    icon: "🏆",
    color: "#FF8A00",
    points: [
      "Advanced strategist guidance",
      "Financial projections",
      "Legal & brand foundation checklist",
      "Priority execution support",
    ],
  },
  {
    tier: "Legacy Founder",
    icon: "👑",
    color: "#a855f7",
    points: [
      "Lifetime platform access",
      "Locked-in founding pricing",
      "Early feature access",
      "Founder recognition badge",
    ],
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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── LEFT PANEL — Plan Overview ── */}
        <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] shrink-0 flex-col justify-center border-r border-[#1A2D50] bg-[#0A0F1E] px-10 py-16">

          {/* Brand mark */}
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
            >
              ⚡
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h2 className="mb-2 font-display text-3xl font-black leading-tight text-white">
            Build your business roadmap.
          </h2>
          <p className="mb-2 font-display text-3xl font-black leading-tight" style={{ color: "#FF8A00" }}>
            Save your blueprint.
          </p>
          <p className="mb-8 font-display text-3xl font-black leading-tight text-slate-400">
            Upgrade when ready.
          </p>

          <p className="mb-10 text-sm text-slate-500 leading-relaxed">
            PEN2PRO RMIE turns your idea into a realistic business roadmap — with launch steps, monetization
            strategy, credit readiness, and a 90-day execution plan built around your specific concept.
          </p>

          <div className="space-y-4">
            {PLAN_BENEFITS.map((plan) => (
              <div
                key={plan.tier}
                className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-base">{plan.icon}</span>
                  <span className="text-sm font-bold" style={{ color: plan.color }}>
                    {plan.tier}
                  </span>
                </div>
                <ul className="space-y-1">
                  {plan.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-400">
                      <span style={{ color: plan.color }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#FF8A00]/30 bg-[#FF8A00]/10 p-4">
            <p className="text-xs font-semibold text-[#FF8A00]">
              Official Launch: June 15, 2026
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Create a free account now. Start your roadmap. Upgrade to Pro or Elite when ready.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL — Auth Form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Mobile brand */}
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
              >
                ⚡
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <div className="mb-8 text-center">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
              </div>

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
                      onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-black disabled:opacity-60 transition"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    No account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#FF8A00] hover:underline"
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-black disabled:opacity-60 transition"
                  >
                    {loading ? "Creating account..." : "Create Free Account"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="text-slate-400 hover:text-white underline">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-slate-400 hover:text-white underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
                  Join the waitlist instead
                </Link>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-6">
              <Link to="/starter" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Start Free Roadmap</Link>
              <Link to="/pricing" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">View Pricing</Link>
              <Link to="/about" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">About PEN2PRO</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
