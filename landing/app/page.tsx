import { Estimator } from "@/components/estimator"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { RequestCall } from "@/components/request-call"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Estimator />
      <WhyChooseUs />
      <Testimonials />
      <FinalCta />
      <RequestCall />
      <Footer />
    </main>
  )
}
