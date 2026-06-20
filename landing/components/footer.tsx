import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

import { LogoLedgerMark } from "@/components/logo-ledger-mark"

const serviceLinks = [
  "Business tax & compliance",
  "Accounting & financial clarity",
  "Strategic advisory",
  "Sales tax reporting",
  "2290 filing",
  "Payroll support",
]

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <LogoLedgerMark className="mb-4 h-11 w-auto" />
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Tax preparation, bookkeeping, and advisory services for Orlando
              individuals and business owners all year.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-navy">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-base text-gray-600 transition-colors hover:text-green"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-navy">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                  className="text-base text-gray-600 transition-colors hover:text-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.25em] text-navy">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <a
                  href="tel:4078072353"
                  className="text-base text-gray-600 transition-colors hover:text-green"
                >
                  (407) 807-2353
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <a
                  href="mailto:info@orlandomaxtax.com"
                  className="text-base text-gray-600 transition-colors hover:text-green"
                >
                  info@orlandomaxtax.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <a
                  href="https://wa.me/14078072353"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-600 transition-colors hover:text-green"
                >
                  WhatsApp: (407) 807-2353
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <span className="text-base text-gray-600">
                  Orlando, Florida
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <span className="text-base text-gray-600">
                  Mon - Fri: 9am - 5pm, Sat by appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-gray-500">
            {`\u00A9 ${new Date().getFullYear()} Orlando MaxTax Solutions & Accounting Services. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
