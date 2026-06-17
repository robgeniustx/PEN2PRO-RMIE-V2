import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    color: "#64748B",
    desc: "Get a complete business roadmap for your idea — no credit card, no fluff.",
  },
  {
    icon: "⚡",
    name: "Pro Strategy Tools",
    color: "#2d9cff",
    desc: "Full RMIE blueprint, 90-day plans, outreach scripts, PDF export, and branding support.",
  },
  {
    icon: "🏆",
    name: "Elite Execution Support",
    color: "#00C9B1",
    desc: "Done-with-you guidance, financial projections, funding readiness, and priority support.",
  },
  {
    icon: "♾️",
    name: "Legacy Founder Access",
    color: "#d4af37",
    desc: "Lifetime platform access — one payment, every feature, forever. Only 200 spots.",
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
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

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

  async function handleForgotPassword(e) {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-stretch px-4 py-12 gap-0 md:gap-8 lg:gap-16">

        {/* ── LEFT: Brand & Tier Panel ── */}
        <div className="hidden flex-col justify-between md:flex md:w-[46%] lg:w-[48%]">
          <div className="pt-4">
            {/* Logo mark */}
            <div className="mb-8 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 24px rgba(30,136,229,0.4)" }}
              >
                <span className="text-xl">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white lg:text-4xl">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint. Upgrade when ready.
              </span>
            </h2>
            <p className="mb-10 text-slate-400 leading-relaxed">
              PEN2PRO RMIE turns your idea into a realistic business roadmap — for free. Save your progress, then upgrade to unlock the full execution toolkit.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_PANELS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4 transition-colors hover:border-[#1A3D6A]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}40` }}
                  >
                    {tier.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold" style={{ color: tier.color }}>{tier.name}</p>
                    <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trust badges */}
          <div className="mt-10 flex flex-wrap gap-4 text-xs text-slate-500">
            <span>✓ Free roadmap always included</span>
            <span>✓ No credit card to start</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>

        {/* ── RIGHT: Auth Form ── */}
        <div className="flex w-full flex-col justify-center md:w-[54%] lg:w-[52%]">

          {/* Mobile brand headline */}
          <div className="mb-8 md:hidden">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
              >
                <span className="text-base">⚡</span>
              </div>
              <span className="font-display text-xl font-black">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">Build your roadmap. Save your blueprint. Upgrade when ready.</p>
          </div>

          <div className="w-full rounded-2xl border border-[#1A2235] p-6 sm:p-8" style={{ background: "#0F1520" }}>

            {/* Forgot password flow */}
            {showForgot ? (
              <div>
                <button
                  onClick={() => { setShowForgot(false); setForgotSent(false); setForgotEmail(""); }}
                  className="mb-6 flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  ← Back to Sign In
                </button>
                <h3 className="mb-2 font-display text-2xl font-black text-white">Reset Password</h3>
                <p className="mb-6 text-sm text-slate-400">Enter your email and we'll send a reset link when password recovery is live.</p>
                {forgotSent ? (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                    If that email is in our system, a reset link will be sent. Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={handleForgotPassword} className="space-y-4">
                    <input
                      type="email"
                      required
                      value={forgotEmail}
                      onChange={e => setForgotEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                    <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">
                      Send Reset Link
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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

                {/* Welcome copy */}
                <div className="mb-6">
                  <h1 className="font-display text-2xl font-black text-white">
                    {tab === "login" ? "Welcome back" : "Start building for free"}
                  </h1>
                  <p className="mt-1 text-sm text-slate-400">
                    {tab === "login"
                      ? "Sign in to access your PEN2PRO dashboard and roadmaps."
                      : "Create your free account and get your first business roadmap in minutes."}
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                {/* Login Form */}
                {tab === "login" && (
                  <form onSubmit={handleLogin} className="space-y-4">
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
                          onClick={() => { setShowForgot(true); setError(""); }}
                          className="text-xs text-[#D4A017] hover:underline"
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
                      className="btn-gold w-full py-3 text-sm font-bold mt-1"
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </button>
                    <p className="text-center text-xs text-slate-500 pt-1">
                      Don't have an account?{" "}
                      <button type="button" onClick={() => { setTab("register"); setError(""); }} className="font-semibold text-[#D4A017] hover:underline">
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
                      className="btn-gold w-full py-3 text-sm font-bold mt-1"
                    >
                      {loading ? "Creating account..." : "Create Account — Free"}
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      By creating an account you agree to our{" "}
                      <Link to="/terms" className="text-slate-400 hover:underline">Terms</Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-slate-400 hover:underline">Privacy Policy</Link>.
                    </p>
                  </form>
                )}

                {/* Waitlist alt */}
                <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#080C14] p-4 text-center">
                  <p className="text-xs text-slate-500">
                    Not ready to sign up?{" "}
                    <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                      Join the waitlist
                    </Link>{" "}
                    and get notified at launch.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Under-card CTA */}
          <div className="mt-6 text-center">
            <Link
              to="/starter"
              className="text-sm font-semibold text-[#FF8A00] hover:underline"
            >
              → Try a free roadmap first — no account required
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
