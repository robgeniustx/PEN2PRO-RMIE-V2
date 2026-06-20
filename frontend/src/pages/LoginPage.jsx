import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_BENEFITS = [
  {
    icon: "🗺️",
    tier: "Free Roadmap",
    color: "#64748b",
    desc: "Get a starter business blueprint with a 7-day action plan — no credit card needed.",
  },
  {
    icon: "⚡",
    tier: "Pro — $249/mo",
    color: "#2d9cff",
    desc: "Full RMIE roadmap, PDF export, branding support, outreach strategy, and credit readiness.",
  },
  {
    icon: "🚀",
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    desc: "Financial projections, funding resources, advanced automations, and priority support.",
  },
  {
    icon: "🏆",
    tier: "Legacy Founder — $1,899 for life",
    color: "#d4af37",
    desc: "One payment. Lifetime access. Every feature, every future release, forever.",
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

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-stretch px-4 py-12 lg:py-20">

        {/* ── LEFT PANEL — Plan benefits ── */}
        <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:pr-12">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
              ⚡ PEN2PRO RMIE
            </div>
          </div>

          <h2 className="font-display text-3xl font-black text-white mb-3 leading-tight">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg,#FF8A00,#1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint. Upgrade when ready.
            </span>
          </h2>

          <p className="mb-8 text-slate-400 text-sm leading-relaxed">
            Sign in to access your PEN2PRO dashboard — your roadmap, your strategy, your execution plan. Free to start. Powerful when you're ready to move.
          </p>

          <div className="space-y-3">
            {PLAN_BENEFITS.map((plan) => (
              <div
                key={plan.tier}
                className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0D1528] p-4 transition hover:border-[#1A2D50]"
              >
                <span className="text-2xl shrink-0 mt-0.5">{plan.icon}</span>
                <div>
                  <p className="text-sm font-bold" style={{ color: plan.color }}>{plan.tier}</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{plan.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              PEN2PRO is built for entrepreneurs, veterans, returning citizens, and anyone serious about turning an idea into income. Your roadmap saves automatically. Upgrade at any time.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL — Auth form ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            {/* Mobile-only headline */}
            <div className="text-center mb-8 lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#0A0F1E] btn-gold">
                P2P
              </div>
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Desktop headline */}
            <div className="hidden lg:block mb-6">
              <h3 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your free account"}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login" ? "Access your roadmap and dashboard" : "Get your first business blueprint free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#FF8A00] transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>

                  <div className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#FF8A00] hover:underline"
                    >
                      Create one free
                    </button>
                  </div>
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
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:text-slate-300 underline">Terms</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="hover:text-slate-300 underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist CTA */}
              <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">
                  Join the waitlist
                </Link>{" "}
                for Pro/Elite early access.
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {["Free forever plan", "No credit card required", "Cancel anytime"].map((t) => (
                <p key={t} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="text-emerald-400">✓</span> {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
