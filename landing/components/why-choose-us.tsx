import { Check } from "lucide-react"

const reasons = [
  "Direct communication with an experienced professional",
  "Clean, organized financial reporting you can rely on",
  "Proactive reminders and compliance tracking before deadlines",
  "Support beyond tax season, not just during filing month",
  "Discreet and confidential handling of sensitive financial data",
]

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-[#E6F0EC] py-24 lg:py-32" // Pale ledger green
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/about.jpg"
                alt="Professional advisor meeting with a business client"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-widest text-green">
              Why MaxTax
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
              We Are Experienced In Tax Preparation, Business & Financial
              Services
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Orlando MaxTax Solutions &amp; Accounting Services prepares you for
              tax season and supports your business year-round. Our goal is
              one-on-one service that keeps clients informed with current
              updates and helps maximize every eligible tax dollar.
            </p>

            <ul className="mt-8 flex flex-col gap-4" role="list">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10">
                    <Check className="h-3 w-3 text-green" />
                  </div>
                  <span className="text-base leading-relaxed text-gray-700">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
