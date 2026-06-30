import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_TIERS = [
  {
    icon: "🗺️",
    label: "Free Roadmap",
    desc: "7-day action plan, business idea summary, and startup checklist — always free.",
    color: "#64748B",
    href: "/starter",
  },
  {
    icon: "⚡",
    label: "Pro — $249/mo",
    desc: "Full 90-day blueprint, PDF export, outreach scripts, and credit readiness checklist.",
    color: "#2d9cff",
    href: "/pro",
  },
  {
    icon: "🏆",
    label: "Elite — $499/mo",
    desc: "Advanced strategist guidance, financial projections, vendor center, and done-with-you support.",
    color: "#00C9B1",
    href: "/elite",
  },
  {
    icon: "♾️",
    label: "Legacy Founder — $1,899",
    desc: "Lifetime access to everything. 200 spots only. Lock in before August 1, 2026.",
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

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start lg:gap-20">

          {/* ── Left: Info Panel ── */}
          <div>
            {/* Brand badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              ⚡ PEN2PRO RMIE
            </div>

            <h1 className="font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-400">
              PEN2PRO gives you a free AI-powered business roadmap in minutes. Create an account to save it, track your progress, and upgrade to Pro or Elite when you're ready to go all in.
            </p>

            {/* Tier cards */}
            <div className="mt-8 space-y-3">
              {PLAN_TIERS.map((tier) => (
                <Link
                  key={tier.label}
                  to={tier.href}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 transition-all hover:border-[#1A2D50] hover:bg-[#101828] group"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                    style={{ background: tier.color + "18", border: `1px solid ${tier.color}30` }}>
                    {tier.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors">{tier.label}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                  </div>
                  <span className="ml-auto shrink-0 text-xs text-slate-600 group-hover:text-yellow-500 transition-colors pt-1">→</span>
                </Link>
              ))}
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[#1A2235] pt-6">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="text-emerald-400">✓</span> Free forever plan available
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="text-emerald-400">✓</span> No credit card required
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="text-emerald-400">✓</span> Cancel anytime
              </div>
            </div>
          </div>

          {/* ── Right: Auth Form ── */}
          <div className="w-full">
            {/* Tabs */}
            <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#0A0F1E" }}>
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

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>

              {/* Error */}
              {error && (
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Forgot password success */}
              {forgotSent && (
                <div className="mb-6 rounded-xl border border-teal-500/30 bg-teal-500/10 px-4 py-3 text-sm text-teal-300">
                  If that email is registered, a reset link has been sent.
                </div>
              )}

              {/* Sign In Form */}
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
                        onClick={() => {
                          if (!loginForm.email) { setError("Enter your email first to reset password"); return; }
                          setForgotSent(true);
                          setError("");
                        }}
                        className="text-xs text-slate-500 hover:text-yellow-400 transition-colors"
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
                    className="btn-gold w-full py-3.5 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                </form>
              )}

              {/* Create Account Form */}
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
                    className="btn-gold w-full py-3.5 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="underline hover:text-slate-300">Terms</Link> and{" "}
                    <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Bottom links */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/starter" className="font-semibold" style={{ color: "#D4A017" }}>
                  Try the free roadmap
                </Link>
                {" · "}
                <Link to="/waitlist" className="font-semibold text-slate-400 hover:text-white transition-colors">
                  Join waitlist
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
