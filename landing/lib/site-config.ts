export const siteConfig = {
  name: "Orlando MaxTax Solutions & Accounting Services",
  shortName: "Orlando MaxTax",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orlandomaxtax.com",
  locale: "en_US",
  title: "Orlando MaxTax | Tax & Accounting Services",
  description:
    "Orlando tax, accounting, and bookkeeping for business owners. MaxTax delivers filings, payroll, and year-round advisory. Schedule a call today.",
  keywords: [
    "Orlando tax accountant",
    "Orlando accounting services",
    "Orlando bookkeeping",
    "business tax preparation Orlando",
    "MaxTax",
    "payroll services Orlando",
    "tax planning Florida",
  ],
  phone: "+1-689-239-1510",
  phoneDisplay: "(689) 239-1510",
  email: "orlandomaxtax@gmail.com",
  address: {
    locality: "Orlando",
    region: "FL",
    country: "US",
  },
  ogImage: {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Orlando MaxTax — Strategic tax and accounting services for Orlando business owners",
  },
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
