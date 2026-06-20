import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    badge: "FREE FOREVER",
    name: "Starter Roadmap",
    price: "Free",
    description: "Get a real business roadmap built around your specific idea.",
    features: ["Business idea analysis", "7-day action plan", "Startup cost estimate", "Revenue model basics"],
    color: "#1E88E5",
    path: "/starter",
  },
  {
    badge: "MOST POPULAR",
    name: "Pro Strategy Tools",
    price: "$249/mo",
    description: "Full roadmap access, branding support, and AI refinement.",
    features: ["Full progress tracking", "AI refinement rounds", "Credit/funding checklist", "Email & PDF export"],
    color: "#FF8A00",
    path: "/pro",
  },
  {
    badge: "ADVANCED",
    name: "Elite Execution",
    price: "$499/mo",
    description: "Done-with-you strategist guidance and financial planning.",
    features: ["Financial projections", "Company formation guide", "Vendor resource center", "Priority support"],
    color: "#D4A017",
    path: "/elite",
  },
  {
    badge: "LIFETIME ACCESS",
    name: "Legacy Founder",
    price: "One-Time",
    description: "Founding member lifetime access. Limited spots available.",
    features: ["Everything in Elite", "Founder recognition", "Early platform access", "Locked-in pricing forever"],
    color: "#9B59B6",
    path: "/founders",
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

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">

        {/* ── Left Value Panel (desktop only) ── */}
        <div
          className="hidden lg:flex lg:w-[460px] xl:w-[520px] shrink-0 flex-col justify-between border-r border-[#1A2D50] px-10 py-14 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0D1830 60%, #0A0F1E 100%)" }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 65%)", filter: "blur(40px)" }}
          />

          <div className="relative z-10">
            {/* Brand mark */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-lg leading-none select-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl font-black leading-tight text-white mb-4">
              Build your business roadmap.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #FF8A00, #D4A017)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — turns your idea into a realistic action plan with real strategy, not generic advice.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_CARDS.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 transition-colors hover:border-[#253060]"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span
                        className="text-[10px] font-black uppercase tracking-widest"
                        style={{ color: tier.color }}
                      >
                        {tier.badge}
                      </span>
                      <p className="font-bold text-white text-sm mt-0.5">{tier.name}</p>
                    </div>
                    <span className="text-sm font-black shrink-0 ml-2" style={{ color: tier.color }}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2.5">{tier.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {tier.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] rounded-md bg-[#080C14] px-2 py-0.5 text-slate-400 border border-[#1A2235]"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder badge */}
          <div className="relative z-10 mt-8 flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
              style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
            >
              ⚡
            </div>
            <div>
              <p className="text-xs font-black text-white">Robert Earl Green Jr. · Founder</p>
              <p className="text-xs text-slate-500 mt-0.5">
                Service-Connected Veteran · Entrepreneur · Built from lived experience.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Form Panel ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile brand header */}
            <div className="lg:hidden text-center mb-8">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                ⚡
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Start building today"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Build your business roadmap. Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Desktop form header */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-slate-400 text-sm">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard and roadmap."
                  : "Join PEN2PRO free — no credit card required."}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div
                className="mb-8 flex rounded-xl border border-[#1A2235] p-1"
                style={{ background: "#080C14" }}
              >
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
                      {forgotSent ? (
                        <span className="text-xs text-green-400">Check your email for reset instructions.</span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setForgotSent(true)}
                          className="text-xs font-semibold hover:underline"
                          style={{ color: "#D4A017" }}
                        >
                          Forgot password?
                        </button>
                      )}
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in…" : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    No account yet?{" "}
                    <button
                      type="button"
                      onClick={() => setTab("register")}
                      className="font-semibold hover:underline"
                      style={{ color: "#D4A017" }}
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
                      placeholder="Your full name"
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Creating account…" : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:underline" style={{ color: "#D4A017" }}>
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="hover:underline" style={{ color: "#D4A017" }}>
                      Privacy Policy
                    </Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold hover:underline" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier summary */}
            <div className="mt-6 lg:hidden rounded-xl border border-[#1A2235] bg-[#0F1520] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What you get</p>
              <div className="space-y-2">
                {TIER_CARDS.map((tier) => (
                  <div key={tier.name} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-semibold">{tier.name}</span>
                    <span className="text-xs font-black" style={{ color: tier.color }}>{tier.price}</span>
                  </div>
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
