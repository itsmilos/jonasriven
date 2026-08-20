import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-[#E8E0D0]">
      <section
        aria-labelledby="hero-title"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="absolute left-[70%] top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.07] blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[-100px] h-[450px] w-[450px] rounded-full bg-[#80652F]/[0.05] blur-[130px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.8%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%22.8%22/%3E%3C/svg%3E')]" />

        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[#C6A15B]/[0.06] lg:block" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-10 lg:pb-0 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-[#C6A15B]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#C6A15B]">
                A Forbidden Revelation
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-serif text-[64px] font-medium leading-[0.84] tracking-[-0.055em] sm:text-[78px] md:text-[92px] lg:text-[104px]"
            >
              <span className="text-[#E8E0D0]">THE</span>
              <br />

              <span className="text-[#E8E0D0]">BURIED</span>
              <br />

              <span className="bg-gradient-to-r from-[#80652F] via-[#E0C27A] to-[#9A7938] bg-clip-text text-transparent">
                REALITY
              </span>
            </h1>

            <div className="mt-10 max-w-xl">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A15B]">
                Discover The Buried Reality
              </h2>

              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-[#8F8A7D]">
                The book leaked from inside the elite.
              </p>

              <p className="mt-5 text-base leading-7 text-[#8F8A7D] sm:text-lg sm:leading-8">
                Hidden methods they never intended you to learn.
                <br className="hidden sm:block" />
                Jonas Riven broke his oath and exposed the buried reality.
              </p>

              <p className="mt-4 text-sm leading-6 text-[#625E55]">
                What was meant to remain hidden is now in your hands.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products/the-burried-reality"
                className="group inline-flex items-center justify-center gap-4 bg-[#C6A15B] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#080807] transition duration-300 hover:bg-[#E0C27A]"
                aria-label="Get The Buried Reality book"
              >
                Get The Book
                <span
                  aria-hidden="true"
                  className="text-base transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-6 border-t border-[#C6A15B]/10 pt-6 sm:gap-8">
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#625E55]">
                  Author
                </p>

                <p className="mt-1.5 text-sm text-[#B8B0A0]">Jonas Riven</p>
              </div>

              <div aria-hidden="true" className="h-8 w-px bg-[#C6A15B]/10" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#625E55]">
                  Edition
                </p>

                <p className="mt-1.5 text-sm text-[#B8B0A0]">First Release</p>
              </div>

              <div aria-hidden="true" className="h-8 w-px bg-[#C6A15B]/10" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#625E55]">
                  Status
                </p>

                <p className="mt-1.5 text-sm text-[#C6A15B]">Classified</p>
              </div>
            </div>
          </div>

          <section
            id="book"
            aria-label="The Buried Reality book cover"
            className="relative flex min-h-[550px] items-center justify-center lg:min-h-[700px]"
          >
            <div className="group relative w-[400px] rotate-[-6deg] transition-all duration-700 hover:rotate-[-2deg] sm:w-[500px] lg:w-[600px]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/20 blur-[100px]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[55%] h-[70%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/80 blur-[70px]"
              />

              <Image
                src="/e-book1.webp"
                alt="The Buried Reality book by Jonas Riven"
                width={800}
                height={1200}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="absolute bottom-4 right-0 max-w-[230px] border-l border-[#C6A15B]/50 pl-5 sm:right-2 lg:bottom-8">
              <blockquote className="font-serif text-lg italic leading-6 text-[#A9A190]">
                “The truth was never lost.
                <br />
                It was buried.”
              </blockquote>

              <p className="mt-3 text-[8px] uppercase tracking-[0.28em] text-[#625E55]">
                — Jonas Riven
              </p>
            </div>
          </section>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex">
          <span className="text-[8px] uppercase tracking-[0.35em] text-[#625E55]">
            Scroll to uncover
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
