export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Early-Stage Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Compare Your Startup Metrics<br />
          <span className="text-[#58a6ff]">to Similar Companies</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Input your key metrics, get instantly benchmarked against startups at your stage and industry, and receive targeted growth recommendations to close the gap.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Benchmarking — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["MRR & ARR Benchmarks", "Churn Percentile Ranking", "CAC vs Industry Median", "Growth Rate Comparison", "Cohort-Based Insights", "Actionable Recommendations"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Input Your Metrics", desc: "Enter MRR, churn, CAC, LTV, growth rate, and more in a simple form." },
            { step: "2", title: "Get Benchmarked", desc: "We match you to a cohort of similar-stage and same-industry startups." },
            { step: "3", title: "Act on Insights", desc: "See your percentile rankings and get specific recommendations to improve." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center text-sm mb-4">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to benchmark and grow</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited metric submissions",
              "Percentile rankings vs. cohort",
              "Industry & stage filtering",
              "Monthly growth recommendations",
              "CSV export of benchmark data",
              "Priority email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What metrics can I benchmark?",
              a: "MRR, ARR, MoM growth rate, churn rate, CAC, LTV, LTV:CAC ratio, payback period, and NPS — all compared against your stage and industry cohort."
            },
            {
              q: "How is my cohort determined?",
              a: "You select your industry vertical and funding stage (pre-seed, seed, Series A, etc.). We match you against anonymized data from startups in the same bucket."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your billing portal. No questions asked, no lock-in contracts."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        <p>© {new Date().getFullYear()} Startup Metric Benchmark Tracker. All rights reserved.</p>
      </footer>
    </main>
  );
}
