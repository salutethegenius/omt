import { FileText, BarChart3, Lightbulb, ArrowRight } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Business Tax & Compliance",
    description:
      "Corporate and LLC tax filing, sales tax reporting, payroll tax filings, and 2290 filing for transportation operators — focused on compliance without surprises.",
  },
  {
    icon: BarChart3,
    title: "Accounting & Financial Clarity",
    description:
      "Monthly bookkeeping, financial statement preparation, income and expense tracking, and payroll processing so you always know where your business stands.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Advisory",
    description:
      "New business setup and entity structure, tax planning consultations, cash flow review, and quarterly planning sessions so you can make proactive decisions.",
  },
]

const additionalServices = [
  "Certified Acceptance Agent (ITIN)",
  "QuickBooks bookkeeping",
  "New/small business setup and filings",
  "Business and personal taxes",
  "Sales tax reporting",
  "Payroll services and 1099 reporting",
  "Notary and advisory services",
  "Tax news and updates",
  "Truck driver reporting and 2290 filing",
]

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F7F4] py-24 lg:py-32" // Warm White
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.25em] text-green">
            What We Do
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
            We Offer Multiple Tax Services Throughout The Year
          </h2>
          <p className="mt-4 text-sm font-medium text-gray-600">
            Tax season opens January 27th, 2025.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                <service.icon className="h-6 w-6 text-green" />
              </div>
              <h3 className="text-xl font-bold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors hover:text-green-dark"
              >
                Book An Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-border bg-card p-8">
          <h3 className="text-lg font-bold text-navy">Additional Services</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {additionalServices.map((service) => (
              <p key={service} className="text-sm text-gray-600">
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
