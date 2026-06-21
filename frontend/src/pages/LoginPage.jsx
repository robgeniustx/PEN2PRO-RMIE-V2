import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#94A3B8",
    icon: "🗺️",
    desc: "AI business blueprint, brand name ideas, LLC checklist, and 7-day starter plan.",
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "📊",
    desc: "Full 90-day execution plan, sales scripts, credit readiness, PDF export, and AI refinement.",
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🧠",
    desc: "Done-with-you strategy, financial projections, funding resources, and priority support.",
  },
  {
    name: "Founders Lifetime",
    color: "#D4A017",
    icon: "⚡",
    desc: "One payment, lifetime access — every feature, every future release, no subscriptions.",
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

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── Left Panel — Tier Benefits ── */}
        <div
          className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 px-10 py-14 border-r border-[#1A2235]"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0D1528 100%)" }}
        >
          <div>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 mb-10 group">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0 transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-lg leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="font-display text-2xl font-black text-white leading-snug mb-3">
              Build your business roadmap.<br />
              Save your blueprint.<br />
              <span style={{ color: "#D4A017" }}>Upgrade when ready.</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              PEN2PRO RMIE turns your idea into a realistic execution plan — business structure, launch steps, funding readiness, and revenue strategy. Start free today.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_BENEFITS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-4 rounded-xl border p-4"
                  style={{ borderColor: `${tier.color}30`, background: `${tier.color}08` }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{tier.icon}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: tier.color }}>{tier.name}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} PEN2PRO. All rights reserved.
          </p>
        </div>

        {/* ── Right Panel — Auth Form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Mobile logo (shown only on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2.5 group">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
                >
                  <span className="text-lg">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <p className="mt-3 text-sm text-slate-400">Build your roadmap. Start free today.</p>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard and roadmap."
                  : "Start with a free roadmap. No credit card required."}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "btn-gold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "btn-gold" : "text-slate-400 hover:text-white"
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
                      <span className="text-xs text-slate-500 cursor-default">Forgot password? Contact support.</span>
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
                    className="btn-gold w-full py-3 text-sm font-black rounded-xl disabled:opacity-60"
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
                    className="btn-gold w-full py-3 text-sm font-black rounded-xl disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Bottom link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Quick tier CTA row */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {[
                { label: "Start Free", href: "/starter", cls: "btn-gold text-[#080C14] text-xs font-black py-2.5 rounded-xl" },
                { label: "View Pricing", href: "/pricing", cls: "border border-[#1A2235] text-slate-300 text-xs font-semibold py-2.5 rounded-xl text-center transition hover:border-yellow-500 hover:text-yellow-400" },
              ].map((b) => (
                <Link key={b.href} to={b.href} className={`block text-center ${b.cls}`}>{b.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
