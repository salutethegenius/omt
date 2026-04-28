import { Phone } from "lucide-react"

export function FinalCta() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Let Us Work For You
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-400">
          We handle the most tedious bookkeeping tasks of your business so you
          can focus on growth. Tell us what you need and we&apos;ll follow up
          quickly.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-green px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-green-dark"
          >
            <Phone className="h-5 w-5" />
            Book An Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
