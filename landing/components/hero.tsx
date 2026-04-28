import { Phone, ShieldCheck, MapPin, CalendarCheck } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "IRS Authorized e-file Provider" },
  {
    icon: MapPin,
    label: "Serving Orlando business owners with precision and discretion",
  },
  { icon: CalendarCheck, label: "Year-round support, not just tax season" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/orlando.jpg"
          alt="Panoramic skyline of Orlando overlooking the lake"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.25em] text-green">
            Strategic Tax &amp; Accounting · Orlando, FL
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              We Can Help You Avoid
              <br />
              <em className="not-italic text-green">Tax Blunders.</em>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-gray-100">
            Making a mistake on your return can be costly. Orlando MaxTax
            Solutions &amp; Accounting Services helps individuals and business
            owners file with confidence and stay ready all year.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-7 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-green-dark"
            >
              <Phone className="h-5 w-5" />
              Book An Appointment
            </a>
            <a
              href="#services"
              className="text-base font-medium text-gray-100 underline-offset-4 hover:underline"
            >
              View our services
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            We respond to serious business inquiries within one business day.
          </p>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10">
                  <badge.icon className="h-4 w-4 text-[#F8F7F4]" />
                </div>
                <span className="text-base font-medium text-primary-foreground/80">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
