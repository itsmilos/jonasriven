import Link from "next/link";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout_id?: string }>;
}) {
  const params = await searchParams;
  const checkoutId = params.checkout_id;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-[#E8E0D0]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.07] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-200px] left-[-100px] h-[450px] w-[450px] rounded-full bg-[#80652F]/[0.05] blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.8%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%22.8%22/%3E%3C/svg%3E')]"
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#C6A15B]/[0.05] lg:block"
        />

        <div className="relative z-10 w-full max-w-3xl text-center">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-[#C6A15B]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#C6A15B]">
              Transaction Confirmed
            </span>

            <span aria-hidden="true" className="h-px w-12 bg-[#C6A15B]" />
          </div>

          <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/[0.04]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-[#C6A15B]"
            >
              <path
                d="M5 12.5L9.5 17L19 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="font-serif text-[58px] font-medium leading-[0.9] tracking-[-0.055em] sm:text-[76px] md:text-[92px]">
            <span className="text-[#E8E0D0]">THE TRUTH</span>
            <br />
            <span className="bg-gradient-to-r from-[#80652F] via-[#E0C27A] to-[#9A7938] bg-clip-text text-transparent">
              IS YOURS.
            </span>
          </h1>

          <div className="mx-auto mt-10 max-w-xl">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A15B]">
              Reality Without Witnesses
            </h2>

            <p className="mt-5 text-base leading-8 text-[#8F8A7D] sm:text-lg">
              Your purchase has been confirmed.
              <br className="hidden sm:block" />
              The book is now in your hands.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#625E55]">
              What was meant to remain hidden is no longer yours to wonder
              about.
            </p>
          </div>

          <div className="mx-auto mt-10 h-px w-full max-w-md bg-[#C6A15B]/10" />

          <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#625E55]">
                Author
              </p>

              <p className="mt-1.5 text-sm text-[#B8B0A0]">Jonas Riven</p>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-8 w-px bg-[#C6A15B]/10 sm:block"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#625E55]">
                Edition
              </p>

              <p className="mt-1.5 text-sm text-[#B8B0A0]">First Release</p>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-8 w-px bg-[#C6A15B]/10 sm:block"
            />

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#625E55]">
                Status
              </p>

              <p className="mt-1.5 text-sm text-[#C6A15B]">Confirmed</p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/products/reality-without-witnesses"
              className="group inline-flex items-center justify-center gap-4 bg-[#C6A15B] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#080807] transition duration-300 hover:bg-[#E0C27A]"
            >
              Return to the Book
              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
            </Link>
          </div>

          {checkoutId && (
            <p className="mt-8 text-[8px] uppercase tracking-[0.2em] text-[#625E55]">
              Confirmation: {checkoutId}
            </p>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex">
          <span className="text-[8px] uppercase tracking-[0.35em] text-[#625E55]">
            The truth was never lost
          </span>

          <div
            aria-hidden="true"
            className="h-10 w-px bg-gradient-to-b from-[#C6A15B]/40 to-transparent"
          />
        </div>
      </section>
    </main>
  );
}
