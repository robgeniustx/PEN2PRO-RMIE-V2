import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
            The Story Behind PEN2PRO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Built From the Bottom.
            <br />
            <span className="text-cyan-400">For Those Still Climbing.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            PEN2PRO RMIE wasn't built in a boardroom. It was built in the fire of real experience —
            failure, reinvention, and the refusal to let a record define a future.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Block 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              When the Door Closes in Your Face
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              When Robert Green came home from prison, he did what most people told him to do — he
              applied for jobs. He put on the right clothes, said the right things, and got
              offers. But then came the background check. Offers rescinded. Doors closed. Silence.
            </p>
            <p className="text-slate-300 leading-relaxed">
              It didn't happen once. It happened more than once. And every time, the message was the
              same: your past is bigger than your potential. The system wasn't designed to give
              second-chance builders a fair shot.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              One Day to Mope. Then He Got Moving.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Robert gave himself one day. One day to sit with the frustration, the embarrassment,
              the anger. And then he picked his head up.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              If no employer would take a chance on him, he'd stop asking for one. He turned toward
              entrepreneurship not as a backup plan — but as the plan. He built real businesses.
              He learned pricing, operations, marketing, and customer relationships through trial,
              heartbreak, and hard-earned wins.
            </p>
            <p className="text-slate-300 leading-relaxed">
              He didn't have a mentor. He didn't have capital. He didn't have a business degree.
              What he had was the drive to figure it out — and the lessons that come when failure is
              the only teacher you can afford.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Why PEN2PRO Exists
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              PEN2PRO RMIE — Real Money, Income, and Entrepreneurship — was created for everyone
              who has ever been told they weren't the right fit. For people who are smart, hungry,
              and capable but don't have the map.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              This platform gives you the roadmap Robert had to build himself. It helps you turn an
              idea into income with structure, strategy, and AI-powered guidance — without requiring
              connections, credentials, or a clean background.
            </p>
            <p className="text-slate-300 leading-relaxed font-semibold text-white">
              Your past does not determine your business potential. Your next move does.
            </p>
          </div>

          {/* Who This Is For */}
          <div className="bg-gradient-to-br from-cyan-950/30 to-slate-900 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Who PEN2PRO Is Built For</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Second-chance builders coming home from incarceration",
                "Veterans transitioning out of military service",
                "Working-class entrepreneurs with ideas and no roadmap",
                "Creators who want to turn their talent into a business",
                "Single parents building something for their family",
                "Anyone who's been told their past disqualifies their future",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Turn Your Idea Into Income?
          </h2>
          <p className="text-slate-400 mb-8">
            Start free. No credit card. No background check. Just your idea and the tools to build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 text-sm tracking-wide transition-colors"
            >
              Start Free Blueprint →
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white font-semibold px-8 py-3 text-sm transition-colors"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
