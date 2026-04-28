type LogoLedgerMarkProps = {
  className?: string
  variant?: "light" | "dark"
}

export function LogoLedgerMark({
  className,
  variant = "dark",
}: LogoLedgerMarkProps) {
  const onDark = variant === "dark"

  const navy = "#0D1F3C"
  const ledgerGreen = "#2B6651"
  const ledgerGreenLight = "#3A8068"
  const warmWhite = "#F8F7F4"
  const slate = "#9AA5B4"

  return (
    <div className={className}>
      <svg
        width="220"
        height="70"
        viewBox="0 0 280 72"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Ledger mark */}
        <rect
          x="4"
          y="8"
          width="8"
          height="42"
          rx="2"
          fill={onDark ? warmWhite : navy}
        />
        <rect
          x="60"
          y="8"
          width="8"
          height="42"
          rx="2"
          fill={onDark ? warmWhite : navy}
        />
        <polygon
          points="4,8 12,8 36,30 36,40 28,40"
          fill={onDark ? warmWhite : navy}
        />
        <polygon
          points="68,8 60,8 36,30 36,40 44,40"
          fill={onDark ? warmWhite : navy}
        />
        <rect
          x="0"
          y="39"
          width="72"
          height="4"
          rx="2"
          fill={onDark ? ledgerGreenLight : ledgerGreen}
        />

        {/* Wordmark */}
        <text
          x="88"
          y="38"
          fontFamily="'Libre Baskerville', serif"
          fontSize="34"
          fontWeight="700"
          fill={onDark ? warmWhite : navy}
          letterSpacing="-0.5"
        >
          Max
        </text>
        <text
          x="170"
          y="38"
          fontFamily="'Libre Baskerville', serif"
          fontSize="34"
          fontWeight="700"
          fontStyle="italic"
          fill={onDark ? ledgerGreenLight : ledgerGreen}
          letterSpacing="-0.5"
        >
          Tax
        </text>

        {/* Subline */}
        <text
          x="88"
          y="54"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="10"
          fontWeight="600"
          fill={onDark ? slate : "#718096"}
          letterSpacing="1.5"
        >
          SOLUTIONS &amp; ACCOUNTING
        </text>
        <text
          x="88"
          y="66"
          fontFamily="'DM Mono', monospace"
          fontSize="8"
          fill={onDark ? slate : "#9AA5B4"}
          letterSpacing="1"
        >
          ORLANDO, FLORIDA
        </text>
      </svg>
      <span className="sr-only">MaxTax Solutions &amp; Accounting Services</span>
    </div>
  )
}

