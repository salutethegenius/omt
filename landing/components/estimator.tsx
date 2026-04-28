export function Estimator() {
  return (
    <section id="estimator" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
        <div className="lg:w-1/2">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-green">
            Tax Savings Estimator
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            See What You Might{" "}
            <span className="italic text-green">Be Missing</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-300">
            Most business owners leave money on the table because they don&apos;t
            have a structured tax strategy. This estimator gives you a
            directional sense of the opportunity based on businesses like yours.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li>• Takes about a minute — three simple questions.</li>
            <li>• Based on patterns from real Orlando client data.</li>
            <li>• Covers deductions, credits, and filing opportunities.</li>
            <li>• Results are estimates — your actual number needs a review.</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-gray-100">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-green">
              Coming Soon
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-primary-foreground">
              Interactive savings estimate
            </h3>
            <p className="mt-3 leading-relaxed text-gray-200">
              We&apos;ll soon add a short interactive estimator here that uses
              your business type, revenue range, and current tax setup to
              suggest an annual savings range.
            </p>
            <p className="mt-4 leading-relaxed text-gray-200">
              For now, tell us about your business through the{" "}
              <span className="font-semibold text-green">Request a Call</span>{" "}
              form and we&apos;ll walk through a tailored estimate with you
              directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

