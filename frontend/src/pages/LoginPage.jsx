import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIERS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    desc: "Start with a complete AI-generated business roadmap — idea, offer, pricing, and 7-day action plan. Zero cost.",
    color: "#059669",
    href: "/starter",
  },
  {
    icon: "⚡",
    name: "Pro Strategy Tools",
    desc: "Full 90-day execution plan, outreach scripts, PDF export, AI refinement, and credit readiness checklist.",
    color: "#2d9cff",
    href: "/pro",
  },
  {
    icon: "🏆",
    name: "Elite Execution Support",
    desc: "Financial projections, funding partner resources, vendor integration, done-with-you guidance, and priority access.",
    color: "#00C9B1",
    href: "/elite",
  },
  {
    icon: "👑",
    name: "Legacy Founder Access",
    desc: "Lifetime platform access. Voice agent, command center, website builder, and full Founders Circle recognition.",
    color: "#D4A017",
    href: "/founders",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 -right-32 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)", filter: "blur(50px)" }}
        />
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid min-h-[calc(100vh-200px)] items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT PANEL — Value proposition ── */}
          <div className="hidden lg:flex flex-col justify-center">
            {/* Brand */}
            <Link to="/" className="mb-8 flex items-center gap-3 group w-fit">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0 transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 24px rgba(30,136,229,0.4)" }}
              >
                <span className="text-xl">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="mb-4 font-display text-4xl font-black leading-tight text-white">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>

            <p className="mb-10 max-w-md text-base text-slate-400 leading-relaxed">
              PEN2PRO RMIE gives you a realistic roadmap built around your actual idea, situation, and resources — not generic advice. Start free. Save your progress. Scale when you're ready.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIERS.map((tier) => (
                <Link
                  key={tier.name}
                  to={tier.href}
                  className="group flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4 transition-all hover:border-opacity-60"
                  style={{ "--hover-border": tier.color }}
                >
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}40` }}
                  >
                    {tier.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="mb-0.5 font-bold text-white text-sm">{tier.name}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{tier.desc}</div>
                  </div>
                  <div className="ml-auto shrink-0 text-slate-600 transition-colors group-hover:text-slate-400 text-sm mt-1">→</div>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-xs text-slate-600">
              Built by Robert Green — veteran, entrepreneur, and founder who turned setbacks into a platform that helps others build real businesses.
            </p>
          </div>

          {/* ── RIGHT PANEL — Auth form ── */}
          <div className="flex flex-col justify-center">
            {/* Mobile brand */}
            <div className="mb-8 text-center lg:hidden">
              <Link to="/" className="inline-flex items-center gap-3 mb-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
                >
                  <span>⚡</span>
                </div>
                <span className="font-display text-xl font-black">
                  <span className="text-white">PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <h2 className="font-display text-2xl font-black text-white">
                Build your business roadmap.
                <br />
                <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Save your blueprint.
                </span>
              </h2>
            </div>

            <div
              className="rounded-3xl border p-8 md:p-10"
              style={{ background: "#0F1520", borderColor: "#1A2235" }}
            >
              {/* Tab switcher */}
              <div
                className="mb-8 flex rounded-xl border p-1"
                style={{ background: "#080C14", borderColor: "#1A2235" }}
              >
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
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
                  className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                    tab === "register"
                      ? "text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  style={tab === "register" ? { background: "linear-gradient(135deg, #D4A017, #FF8A00)" } : {}}
                >
                  Create Account
                </button>
              </div>

              {/* Headline */}
              <div className="mb-7">
                <h1 className="font-display text-2xl font-black text-white">
                  {tab === "login" ? "Welcome back, builder." : "Start building today."}
                </h1>
                <p className="mt-1.5 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to access your roadmap and dashboard."
                    : "Free account. No credit card. Your roadmap in minutes."}
                </p>
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
                    <label className="mb-1.5 block text-sm font-semibold text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none"
                      style={{ borderColor: "#1A2235" }}
                      onFocus={e => (e.target.style.borderColor = "#D4A017")}
                      onBlur={e => (e.target.style.borderColor = "#1A2235")}
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-semibold text-slate-300">Password</label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(p => !p)}
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none"
                      style={{ borderColor: "#1A2235" }}
                      onFocus={e => (e.target.style.borderColor = "#D4A017")}
                      onBlur={e => (e.target.style.borderColor = "#1A2235")}
                    />
                    <div className="mt-2 text-right">
                      <Link
                        to="/waitlist?help=forgot-password"
                        className="text-xs transition-colors"
                        style={{ color: "#D4A017" }}
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3.5 text-sm font-black text-[#080C14] transition-all hover:scale-[1.01] disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)", boxShadow: "0 0 24px rgba(212,160,23,0.3)" }}
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-300">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none"
                      style={{ borderColor: "#1A2235" }}
                      onFocus={e => (e.target.style.borderColor = "#D4A017")}
                      onBlur={e => (e.target.style.borderColor = "#1A2235")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none"
                      style={{ borderColor: "#1A2235" }}
                      onFocus={e => (e.target.style.borderColor = "#D4A017")}
                      onBlur={e => (e.target.style.borderColor = "#1A2235")}
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-semibold text-slate-300">Password</label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(p => !p)}
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={registerForm.password}
                      onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none"
                      style={{ borderColor: "#1A2235" }}
                      onFocus={e => (e.target.style.borderColor = "#D4A017")}
                      onBlur={e => (e.target.style.borderColor = "#1A2235")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-300">Confirm password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 transition-colors focus:outline-none"
                      style={{ borderColor: "#1A2235" }}
                      onFocus={e => (e.target.style.borderColor = "#D4A017")}
                      onBlur={e => (e.target.style.borderColor = "#1A2235")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3.5 text-sm font-black text-[#080C14] transition-all hover:scale-[1.01] disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)", boxShadow: "0 0 24px rgba(212,160,23,0.3)" }}
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-500">Terms of Service</span> and{" "}
                    <span className="text-slate-500">Privacy Policy</span>.
                  </p>
                </form>
              )}

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#1A2235]" />
                <span className="text-xs text-slate-600">or</span>
                <div className="h-px flex-1 bg-[#1A2235]" />
              </div>

              {/* Secondary CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  to="/starter"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#1A2D50] py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-yellow-500/50 hover:text-white"
                >
                  🗺️ Try Free Roadmap — No Account Needed
                </Link>
                <Link
                  to="/waitlist"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#1A2D50] py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-yellow-500/50 hover:text-white"
                >
                  📬 Join the Waitlist Instead
                </Link>
              </div>
            </div>

            {/* Mobile tier preview */}
            <div className="mt-6 lg:hidden grid grid-cols-2 gap-3">
              {TIERS.map((tier) => (
                <Link
                  key={tier.name}
                  to={tier.href}
                  className="flex items-center gap-2.5 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-3 transition-colors hover:border-opacity-60"
                >
                  <span className="text-lg">{tier.icon}</span>
                  <span className="text-xs font-semibold text-slate-300">{tier.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
