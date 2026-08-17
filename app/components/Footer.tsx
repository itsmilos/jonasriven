import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C6A15B]/10 bg-[#080807]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#C6A15B]/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Link
              href="/"
              className="inline-block font-serif text-xl tracking-[-0.02em] text-[#E8E0D0]"
            >
              The Buried Reality
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#625E55]">
              A book about hidden knowledge, human behavior, power, and the
              questions we're rarely encouraged to ask.
            </p>

            <p className="mt-6 text-[8px] uppercase tracking-[0.3em] text-[#4F4B44]">
              Jonas Riven
            </p>
          </div>

          <div>
            <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.35em] text-[#C6A15B]">
              Legal
            </p>

            <nav className="flex flex-col items-start gap-3">
              <Link
                href="/privacy-policy"
                className="text-sm text-[#817B70] transition-colors hover:text-[#E8E0D0]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-sm text-[#817B70] transition-colors hover:text-[#E8E0D0]"
              >
                Terms of Service
              </Link>

              <Link
                href="/refund-policy"
                className="text-sm text-[#817B70] transition-colors hover:text-[#E8E0D0]"
              >
                Refund Policy
              </Link>
            </nav>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.35em] text-[#C6A15B]">
              Secure Payments
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="flex h-9 min-w-[52px] items-center justify-center border border-white/[0.08] bg-white/[0.04] px-3">
                <span className="text-[11px] font-black italic tracking-[-0.08em] text-[#E8E0D0]">
                  VISA
                </span>
              </div>

              <div className="flex h-9 min-w-[52px] items-center justify-center border border-white/[0.08] bg-white/[0.04] px-2">
                <div className="flex -space-x-1">
                  <span className="h-4 w-4 rounded-full bg-[#E8E0D0]/80" />
                  <span className="h-4 w-4 rounded-full bg-[#E8E0D0]/40" />
                </div>
              </div>

              <div className="flex h-9 min-w-[52px] items-center justify-center border border-white/[0.08] bg-white/[0.04] px-3">
                <span className="text-[9px] font-bold text-[#E8E0D0]">
                  AMEX
                </span>
              </div>

              <div className="flex h-9 min-w-[52px] items-center justify-center border border-white/[0.08] bg-white/[0.04] px-3">
                <span className="text-[9px] font-semibold text-[#E8E0D0]">
                   Pay
                </span>
              </div>

              <div className="flex h-9 min-w-[52px] items-center justify-center border border-white/[0.08] bg-white/[0.04] px-3">
                <span className="text-[9px] font-bold text-[#E8E0D0]">
                  G Pay
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-[260px] text-[9px] leading-5 text-[#4F4B44] lg:text-right">
              Payments are processed securely through our payment provider.
            </p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#C6A15B]/10 to-transparent" />

        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] uppercase tracking-[0.25em] text-[#4F4B44]">
            © {new Date().getFullYear()} The Buried Reality. All rights
            reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-[#C6A15B]/50" />

            <span className="text-[8px] uppercase tracking-[0.25em] text-[#4F4B44]">
              Read. Question. Discover.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
