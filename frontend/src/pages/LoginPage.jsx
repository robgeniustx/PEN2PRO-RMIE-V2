import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_VALUE = [
  {
    icon: "🗺️",
    tier: "Free Forever",
    color: "#D4A017",
    headline: "Free Business Roadmap",
    points: [
      "AI-generated 7-day action plan",
      "Business idea validation",
      "Brand name suggestions",
      "LLC & EIN setup checklist",
    ],
  },
  {
    icon: "⚡",
    tier: "Pro — $249/mo",
    color: "#1E88E5",
    headline: "Full Strategy Engine",
    points: [
      "Unlimited roadmaps + 90-day plan",
      "Sales scripts & outreach templates",
      "Credit & funding readiness score",
      "PDF / email export",
    ],
  },
  {
    icon: "🚀",
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    headline: "Advanced Execution Support",
    points: [
      "Financial projections & modeling",
      "Vendor & funding resource center",
      "Done-with-you strategy guidance",
      "Full CRM + automation access",
    ],
  },
  {
    icon: "♾️",
    tier: "Legacy Founder — $1,899",
    color: "#D4A017",
    headline: "Lifetime Access · 200 Spots Only",
    points: [
      "Lifetime platform access — one payment",
      "P2P Command Center + Voice Agent",
      "Website Builder + 12-Month 10M Framework",
      "Founder badge & first access to new features",
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
      setError("Enter your email address above, then click Forgot Password.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await fetch(`${API}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginForm.email }),
      });
      setForgotSent(true);
    } catch {
      setForgotSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-start gap-12 px-5 py-14 lg:items-center">

        {/* ── LEFT: Form Panel ── */}
        <div className="w-full max-w-md shrink-0 mx-auto lg:mx-0">
          {/* Brand + headline */}
          <div className="mb-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}>
                <span className="text-xl leading-none select-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>
            <h1 className="font-display text-2xl font-black leading-tight text-white md:text-3xl">
              Build your business roadmap.<br />
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard and continue building."
                : "Create a free account and generate your first AI business roadmap in minutes."}
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Forgot password confirmation */}
            {forgotSent && (
              <div className="mb-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                If that email exists in our system, a reset link is on its way.
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
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-xs font-semibold transition-colors"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Signing in…" : "Sign In"}
                </button>
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
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Creating account…" : "Create Account — Free"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our{" "}
                  <Link to="/terms" className="underline hover:text-slate-300">Terms</Link>
                  {" & "}
                  <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
                </p>
              </form>
            )}

            {/* Waitlist / switch link */}
            <div className="mt-5 text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
            <span>🔒 Secure login</span>
            <span>✅ No credit card required</span>
            <span>🚀 Free roadmap included</span>
          </div>
        </div>

        {/* ── RIGHT: Tier Value Panel ── */}
        <div className="hidden lg:block flex-1 min-w-0">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">What you get</p>
          <h2 className="mb-8 font-display text-2xl font-black text-white leading-snug">
            Every tier. Every tool.<br />Built for builders like you.
          </h2>

          <div className="space-y-4">
            {TIER_VALUE.map((t) => (
              <div
                key={t.tier}
                className="rounded-2xl border bg-[#0F1520] p-5 transition-colors hover:border-[#2A3D5E]"
                style={{ borderColor: "#1A2235" }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: t.color }}>{t.tier}</p>
                    <p className="font-bold text-white">{t.headline}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 text-emerald-400 shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#2A3A1A] bg-[#0F1A0C] p-4 text-sm text-slate-400">
            <span className="font-bold text-emerald-400">Free Forever</span> — Start with a free roadmap. No credit card. Upgrade anytime.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
