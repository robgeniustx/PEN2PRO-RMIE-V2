import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_OVERVIEW = [
  {
    name: "Free Roadmap",
    color: "#94A3B8",
    badge: "Start Here",
    items: ["1 AI business blueprint", "Brand name ideas", "7-day action plan", "LLC & EIN checklist"],
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    badge: "Most Popular",
    items: ["Full 90-day execution plan", "Credit & funding readiness", "Sales scripts & outreach", "PDF export & branding"],
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    badge: "Best Value",
    items: ["Everything in Pro", "Financial projections", "Vendor & funding center", "Done-with-you strategy"],
  },
  {
    name: "Founders Lifetime",
    color: "#D4A017",
    badge: "200 Spots",
    items: ["Lifetime access — one payment", "P2P Command Center", "AI Voice Agent", "12-month 10M framework"],
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

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

  async function handleForgotPassword() {
    if (!loginForm.email) {
      setError("Enter your email above, then click Forgot Password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch(`${API}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginForm.email }),
      });
    } catch {
      // Silent — always show success to prevent email enumeration
    } finally {
      setForgotSent(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start lg:gap-16">

          {/* ── LEFT: Plan Overview Sidebar ── */}
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You're Getting</p>
              <h2 className="font-display text-2xl font-black text-white leading-tight">
                Build your business roadmap.<br />
                <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
                Upgrade when ready.
              </h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Start free with a full AI business blueprint. When you're ready to go deeper, Pro and Elite unlock execution tools, financial projections, funding readiness, and done-with-you strategy.
              </p>
            </div>

            <div className="space-y-3">
              {PLAN_OVERVIEW.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border bg-[#0F1520] p-4"
                  style={{ borderColor: plan.color + "33" }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-black text-white">{plan.name}</p>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider"
                      style={{ color: plan.color, background: plan.color + "18", border: `1px solid ${plan.color}40` }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-slate-400">
                        <span className="mt-0.5 shrink-0 font-bold" style={{ color: plan.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <Link to="/starter" className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                Free Roadmap →
              </Link>
              <Link to="/pricing" className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                View All Plans →
              </Link>
              <Link to="/waitlist" className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                Join Waitlist →
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Auth Form ── */}
          <div className="order-1 md:order-2">
            {/* Header */}
            <div className="mb-8 text-center">
              <Link to="/" className="mx-auto mb-5 inline-flex items-center gap-2.5">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}
                >
                  <span className="text-xl leading-none">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
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
                  onClick={() => { setTab("login"); setError(""); setForgotSent(false); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); setForgotSent(false); }}
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

              {/* Forgot password success */}
              {forgotSent && (
                <div className="mb-6 rounded-xl border border-teal-500/30 bg-teal-500/10 px-4 py-3 text-sm text-teal-300">
                  If that email exists, a reset link is on its way. Check your inbox.
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
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        disabled={loading}
                        className="text-xs font-semibold transition hover:opacity-80"
                        style={{ color: "#D4A017" }}
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

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Free roadmap nudge */}
            <div className="mt-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Try it free — no account needed</p>
                  <p className="text-xs text-slate-500 mt-0.5">Get a full AI business blueprint in 60 seconds</p>
                </div>
                <Link
                  to="/starter"
                  className="shrink-0 rounded-xl px-4 py-2.5 text-xs font-black text-[#080C14] btn-gold"
                >
                  Start Free →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
