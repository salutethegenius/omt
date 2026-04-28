"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

import { LogoLedgerMark } from "@/components/logo-ledger-mark"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Estimate Savings", href: "#estimator" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="MaxTax home">
          <div className="h-12 w-auto mt-1 mb-1">
            <LogoLedgerMark
              className="h-full w-auto"
              variant={scrolled ? "light" : "dark"}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors duration-300 hover:text-green ${
                scrolled ? "text-gray-600" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-green-dark"
          >
            <Phone className="h-4 w-4" />
            Book An Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-navy" : "text-primary-foreground"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-green-dark"
            >
              <Phone className="h-4 w-4" />
              Book An Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

