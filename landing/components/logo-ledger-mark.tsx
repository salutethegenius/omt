type LogoLedgerMarkProps = {
  className?: string
}

export function LogoLedgerMark({ className }: LogoLedgerMarkProps) {
  return (
    <img
      src="/orlando-maxtax-logo.png"
      alt="Orlando MaxTax Solutions & Accounting Services"
      className={className}
    />
  )
}
