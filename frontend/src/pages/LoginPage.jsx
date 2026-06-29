import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#D4A017",
    icon: "🗺️",
    bullets: [
      "AI-generated starter blueprint",
      "7-day action plan for your idea",
      "Brand name suggestions",
      "LLC & EIN setup checklist",
      "Business bank account guide",
    ],
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    bullets: [
      "Full 30/90-day execution roadmap",
      "Credit & funding readiness score",
      "Sales scripts & outreach strategy",
      "PDF export & email share",
      "Advanced AI refinement",
    ],
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🚀",
    bullets: [
      "Everything in Pro",
      "Financial projections",
      "Vendor & funding resource center",
      "Done-with-you strategy guidance",
      "Priority support",
    ],
  },
  {
    name: "Founders Lifetime",
    color: "#d4af37",
    icon: "🏆",
    bullets: [
      "One payment — lifetime access",
      "Full platform + every future feature",
      "P2P Command Center & AI Voice Agent",
      "12-month 10M Strategist Framework",
      "200 spots — closes Aug 1, 2026",
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

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-14">
        <div className="flex w-full max-w-5xl gap-8 items-start">

          {/* ── Left Panel — Tier Overview ── */}
          <div className="hidden lg:flex flex-col flex-1 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 self-stretch">
            {/* Brand tag */}
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-base leading-none">⚡</span>
              </div>
              <span className="font-display text-xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="text-lg font-black text-white mb-1">Build your business roadmap.</h2>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Save your blueprint. Upgrade when ready. Start free — no credit card.
            </p>

            <div className="flex flex-col gap-4 flex-1">
              {TIER_BENEFITS.map((tier) => (
                <div key={tier.name}
                  className="rounded-xl border border-[#1A2235] bg-[#080C14] p-4 transition-colors hover:border-[#1A2D50]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{tier.icon}</span>
                    <span className="text-sm font-black" style={{ color: tier.color }}>{tier.name}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {tier.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-0.5 shrink-0" style={{ color: tier.color }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#1A2D50] bg-[#080C14] p-4 text-center">
              <p className="text-xs text-slate-500">
                Used by <span className="font-bold text-slate-300">2,847+ entrepreneurs</span>, veterans, returning citizens, and working-class builders.
              </p>
            </div>
          </div>

          {/* ── Right Panel — Form ── */}
          <div className="w-full max-w-md shrink-0 mx-auto lg:mx-0">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                P2P
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8 bg-[#0F1520]">
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
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
                      <button type="button" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">
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
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Bottom links */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier teaser (below form on small screens) */}
            <div className="mt-6 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 lg:hidden">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">What you get with PEN2PRO</p>
              <div className="grid grid-cols-2 gap-2">
                {["🗺️ Free Roadmap", "⚡ Pro Strategy", "🚀 Elite Execution", "🏆 Founders Lifetime"].map((item) => (
                  <div key={item} className="rounded-lg bg-[#080C14] px-3 py-2 text-xs font-semibold text-slate-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
