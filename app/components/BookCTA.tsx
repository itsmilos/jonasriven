import Image from "next/image";
import Link from "next/link";

export default function BookCTA() {
  return (
    <section
      id="buy"
      className="relative overflow-hidden bg-[#080807] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-[1180px] overflow-hidden border border-[#C6A15B]/30 bg-gradient-to-br from-[#15140F] via-[#0D0D0B] to-[#090908] px-8 py-10 shadow-[0_0_100px_rgba(198,161,91,0.05)] sm:px-12 sm:py-12 lg:px-14 lg:py-14">
        <div className="pointer-events-none absolute right-[-15%] top-[-40%] h-[600px] w-[600px] rounded-full bg-[#C6A15B]/[0.06] blur-[150px]" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[100px]" />

            <div className="relative z-10 w-full max-w-[390px]">
              <div className="absolute inset-[-5px] bg-[#C6A15B]/10 blur-xl" />

              <div className="relative overflow-hidden border-2 border-[#80652F] bg-[#080807] p-[3px] shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
                <div className="relative overflow-hidden border border-[#C6A15B]/60">
                  <Image
                    src="/proof.webp"
                    alt="Reality Without Witnesses by Jonas Riven"
                    width={800}
                    height={1200}
                    priority
                    className="h-auto w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E0C27A]/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 py-4 lg:py-8">
            <div className="mb-7 inline-flex border border-[#C6A15B]/30 bg-[#C6A15B]/[0.05] px-5 py-3 rounded-full">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C6A15B] sm:text-[10px]">
                The Book They Tried To Bury
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-[#E8E0D0] sm:text-6xl lg:text-[64px]">
              For The First Time In
              <br />
              History —
              <br />
              <span className="bg-gradient-to-r from-[#B28A3D] via-[#E0C27A] to-[#C6A15B] bg-clip-text text-transparent">
                Reality Without Witnesses Is Available To The Public.
              </span>
            </h2>

            <p className="mt-8 max-w-[570px] font-serif text-lg italic leading-8 text-[#A9A190] sm:text-xl">
              Discover what Jonas Riven learned inside the world&apos;s most
              secretive circles… and why exposing it meant leaving his old life
              behind.
            </p>

            <div className="mt-10">
              <Link
                href="/products/reality-without-witnesses"
                className="group inline-flex items-center gap-5 border border-[#D5B568] bg-gradient-to-r from-[#B28A3D] via-[#D5B568] to-[#E0C27A] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#080807] shadow-[0_10px_35px_rgba(198,161,91,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(198,161,91,0.3)]"
              >
                <span>Get The Book</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]/40" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-[#625E55]">
                Jonas Riven · Reality Without Witnesses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
