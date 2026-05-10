import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", form);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold text-white">
              P2P
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              PEN2PRO
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <Link to="/roadmap" className="hover:text-teal-700">Roadmap</Link>
            <Link to="/features" className="hover:text-teal-700">Features</Link>
            <Link to="/pricing" className="hover:text-teal-700">Pricing</Link>
            <Link to="/founders" className="hover:text-teal-700">Founders</Link>
            <Link to="/about" className="hover:text-teal-700">About</Link>
          </nav>

          <Link
            to="/starter"
            className="rounded-xl bg-teal-800 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/20 hover:bg-teal-900"
          >
            Start Your Roadmap
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center">
        <section>
          <div className="mb-6 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800">
            Welcome back to PEN2PRO
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Sign in and continue building your roadmap.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Access your saved business blueprint, continue your launch checklist,
            review your brand strategy, and move from idea to execution.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold text-slate-900">
                Business Roadmap
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Continue your startup execution from your saved roadmap.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold text-slate-900">
                Founder Tools
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Access branding, LLC guidance, banking steps, and launch support.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-slate-950">
              Login / Sign In
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Enter your account details below to access your PEN2PRO dashboard.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-teal-600 bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800">
              Login
            </button>
            <Link
              to="/signup"
              className="rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-bold text-slate-700 hover:border-teal-600 hover:text-teal-800"
            >
              Create Account
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-800">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-bold text-teal-800 hover:text-teal-950"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100"
              />
            </div>

            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Remember me
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-teal-800 px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-900"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-amber-700">
              Founder Access
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Founder, Builder, Accelerator, and Legacy members can access their
              account dashboard after sign in.
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don’t have an account?{" "}
            <Link
              to="/signup?tier=founder"
              className="font-extrabold text-teal-800 hover:text-teal-950"
            >
              Create a founder account
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
