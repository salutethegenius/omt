import { Star } from "lucide-react"

const testimonials = [
  {
    name: "David R.",
    role: "Restaurant Owner",
    quote:
      "MaxTax has been handling my business taxes for three years. They are thorough, organized, and always available when I have questions. I never worry about compliance anymore.",
    rating: 5,
  },
  {
    name: "Maria S.",
    role: "Transportation Operator",
    quote:
      "From 2290 filings to quarterly payroll, they handle everything. I can focus on running my fleet while they keep my financials clean and compliant.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Self-Employed Consultant",
    quote:
      "Professional, discreet, and incredibly knowledgeable. They helped me restructure my business entity and saved me significantly on taxes. Highly recommend.",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-green text-green" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#EEF0F2] py-24 lg:py-32" // Off-white
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.25em] text-green">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl text-balance">
            What Our Clients Have To Say About Us
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-gray-600">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-base font-bold text-navy">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
