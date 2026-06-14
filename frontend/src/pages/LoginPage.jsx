import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_EXPLAINER = [
  {
    name: "Free Roadmap",
    price: "$0",
    icon: "🗺️",
    color: "text-teal-400",
    borderColor: "border-teal-400/20",
    desc: "AI-generated business blueprint, brand name ideas, LLC checklist, and 7-day launch plan.",
  },
  {
    name: "Pro",
    price: "$249/mo",
    icon: "⚡",
    color: "text-[#2d9cff]",
    borderColor: "border-[#2d9cff]/20",
    desc: "Full 90-day roadmap, outreach scripts, credit readiness, branding, PDF export, and AI refinement.",
  },
  {
    name: "Elite",
    price: "$499/mo",
    icon: "🏆",
    color: "text-teal-300",
    borderColor: "border-teal-300/20",
    desc: "Everything in Pro plus financial projections, funding resources, done-with-you strategy, and priority support.",
  },
  {
    name: "Founders Lifetime",
    price: "$1,899",
    icon: "🔐",
    color: "text-[#D4A017]",
    borderColor: "border-[#D4A017]/20",
    desc: "Lifetime access to the full platform — RMIE, Command Center, Voice Agent, Website Builder, and 12-month strategist framework. Pay once.",
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

      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">

          {/* ── Left: Tier Explainer Panel ── */}
          <div className="hidden lg:block">
            <div className="mb-8">
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest"
                style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.08)", color: "#D4A017" }}
              >
                ⚡ PEN2PRO RMIE Platform
              </div>
              <h2 className="font-display text-4xl font-black text-white leading-tight">
                Build your business roadmap.
                <br />
                <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Save your blueprint.
                </span>
                <br />
                Upgrade when ready.
              </h2>
              <p className="mt-4 text-slate-400 text-lg leading-relaxed">
                Sign in to access your PEN2PRO dashboard, saved roadmaps, and business tools — or create a free account to start building your business roadmap today.
              </p>
            </div>

            <div className="space-y-3">
              {TIER_EXPLAINER.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl border bg-[#0F1520] p-5 ${tier.borderColor}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{tier.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`font-bold text-base ${tier.color}`}>{tier.name}</span>
                        <span className="rounded-full border border-[#1A2235] bg-[#1A2235] px-2 py-0.5 text-[10px] font-bold text-slate-400">
                          {tier.price}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{tier.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              Not sure where to start?{" "}
              <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
                Try the free roadmap — no account required.
              </Link>
            </p>
          </div>

          {/* ── Right: Auth Form ── */}
          <div className="w-full">
            {/* Mobile headline */}
            <div className="mb-8 lg:hidden text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
                ⚡
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                Build your business roadmap.
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your free account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard and saved roadmaps"
                  : "Join PEN2PRO and start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8 bg-[#0F1520]">
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login"
                      ? "text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={tab === "login" ? { background: "linear-gradient(135deg, #D4A017, #FF8A00)" } : {}}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={tab === "register" ? { background: "linear-gradient(135deg, #D4A017, #FF8A00)" } : {}}
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
                      onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-[#D4A017] hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3 text-sm font-black text-[#080C14] transition disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:underline"
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3 text-sm font-black text-[#080C14] transition disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}
                  >
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier explainer (condensed) */}
            <div className="mt-8 lg:hidden rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">What you get with PEN2PRO</p>
              <div className="space-y-3">
                {TIER_EXPLAINER.map((tier) => (
                  <div key={tier.name} className="flex items-center gap-3">
                    <span className="text-xl shrink-0">{tier.icon}</span>
                    <div>
                      <span className={`text-sm font-bold ${tier.color}`}>{tier.name}</span>
                      <span className="ml-2 text-xs text-slate-600">{tier.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/pricing"
                className="mt-4 block text-center text-xs font-semibold text-[#D4A017] hover:underline"
              >
                Compare all plans →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
