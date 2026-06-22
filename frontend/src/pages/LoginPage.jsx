import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    icon: "🗺️",
    color: "#00C9B1",
    desc: "Instant AI-generated business blueprint — startup costs, 7-day plan, and sales scripts. No credit card required.",
  },
  {
    tier: "Pro — $249/mo",
    icon: "⚡",
    color: "#D4A017",
    desc: "Full 90-day execution plan, outreach strategy, credit readiness, PDF export, and advanced AI refinement.",
  },
  {
    tier: "Elite — $499/mo",
    icon: "🚀",
    color: "#1E88E5",
    desc: "Everything in Pro plus financial projections, done-with-you strategy guidance, vendor resources, and priority support.",
  },
  {
    tier: "Founders Lifetime",
    icon: "♾️",
    color: "#FF8A00",
    desc: "One payment, lifetime access. Full platform + 12-month 10M strategist framework. Only 200 spots.",
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

      <div className="mx-auto flex max-w-7xl min-h-[calc(100vh-80px)] items-stretch px-4 py-12 lg:py-0">

        {/* ── LEFT PANEL — tier benefits (desktop only) ── */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center pr-12 py-20">
          {/* Background orb */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] opacity-[0.07] -z-0"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
          />

          <div className="relative">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-lg leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl font-black leading-tight text-white mb-3 md:text-4xl">
              Build your business roadmap.<br />
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h1>
            <p className="text-slate-400 text-base mb-10 leading-relaxed">
              PEN2PRO RMIE gives everyone a free roadmap. Create your account and your plan is saved. Upgrade at any time to unlock the full execution engine.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_BENEFITS.map((item) => (
                <div
                  key={item.tier}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 transition-all hover:border-[#1A2D50]/80"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: item.color + "20", border: `1px solid ${item.color}40` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.tier}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              PEN2PRO does not guarantee income results. Individual effort and market conditions determine outcomes.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL — auth form ── */}
        <div className="flex w-full flex-col justify-center lg:w-1/2 lg:pl-12 lg:border-l lg:border-[#1A2D50]">
          <div className="w-full max-w-md mx-auto">

            {/* Mobile logo */}
            <div className="flex justify-center mb-6 lg:hidden">
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Mobile headline */}
            <div className="text-center mb-8 lg:hidden">
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block mb-8">
              <h2 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Sign In to PEN2PRO" : "Create Your Free Account"}
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Access your roadmap and business dashboard"
                  : "Your free roadmap is generated instantly after signup"}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button
                        type="button"
                        className="text-xs font-medium transition-colors"
                        style={{ color: "#D4A017" }}
                        onClick={() => alert("Password reset coming soon. Contact support@pen2pro.com")}
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

              {/* Bottom links */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 space-y-3 text-center text-sm text-slate-500">
                <p>
                  Not ready yet?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </p>
                <p>
                  Want to explore first?{" "}
                  <Link to="/starter" className="font-semibold" style={{ color: "#1E88E5" }}>
                    Try a free roadmap
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
