import Image from "next/image";

export default function InsideBook() {
  return (
    <section className="bg-[#080807] px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1100px] overflow-hidden border border-[#C6A15B]/30 bg-[#090908] px-8 py-12 shadow-[0_0_80px_rgba(198,161,91,0.05)] sm:px-12 sm:py-16 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.05] blur-[140px]" />

        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="text-4xl font-bold tracking-[-0.03em] text-[#E8E0D0] sm:text-5xl">
              Inside <span className="text-[#C6A15B]">The Buried Reality</span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-7 text-[#A9A190] sm:text-lg">
              <p>
                These are the chapters of{" "}
                <span className="font-serif italic text-[#E8E0D0]">
                  The Buried Reality
                </span>
                . And no — this isn&apos;t clickbait. Every chapter takes you
                deeper into the knowledge Jonas Riven claims was never meant to
                leave the inner circle.
              </p>

              <p>
                Power. Manifestation. Psychology. Wealth. Consciousness. Hidden
                laws. Reality itself.
              </p>

              <p>
                This isn&apos;t a book you simply finish.{" "}
                <strong className="font-semibold text-[#E0C27A]">
                  It&apos;s a book that changes how you see everything after it.
                </strong>
              </p>

              <p>The deeper you go, the harder it becomes to stop.</p>

              <p className="font-serif text-xl italic leading-8 text-[#E0C27A] sm:text-2xl">
                The truth was buried for a reason. Now you get to see why.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[90px]" />

            <div className="relative z-10 w-full max-w-[340px] overflow-hidden border-2 border-[#80652F] bg-[#080807] p-[3px] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <div className="overflow-hidden border border-[#C6A15B]/50">
                <Image
                  src="/TableOfContents.webp"
                  alt="The Buried Reality by Jonas Riven"
                  width={800}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
