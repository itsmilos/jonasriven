import Image from "next/image";
import Link from "next/link";

export default function Description() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative overflow-hidden border-t border-[#C6A15B]/10 bg-[#0B0A08] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.035] blur-[170px]"
        />

        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C6A15B]/20 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-[#C6A15B]/60" />

            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C6A15B]">
              The Revelation
            </span>

            <span aria-hidden="true" className="h-px w-10 bg-[#C6A15B]/60" />
          </div>

          <h2
            id="story-title"
            className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[#E8E0D0] sm:text-5xl md:text-6xl"
          >
            What I Was Never
            <br />
            <span className="text-[#C6A15B]">Supposed To Tell You</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#817B70] sm:text-base">
            A story of power, secrecy, and the knowledge Jonas Riven claims he
            was never supposed to reveal.
          </p>
        </header>

        <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
          <aside
            aria-label="The Buried Reality book"
            className="lg:sticky lg:top-24"
          >
            <div className="relative mx-auto max-w-[360px]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[85%] w-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#C6A15B]/10 blur-[90px]"
              />

              <figure className="relative border-2 border-[#80652F] bg-[#080807] p-[4px] shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                <div className="overflow-hidden border border-[#C6A15B]/50">
                  <Image
                    src="/e-book1.webp"
                    alt="The Buried Reality book cover by Jonas Riven"
                    width={800}
                    height={1200}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <figcaption className="sr-only">
                  The Buried Reality by Jonas Riven.
                </figcaption>
              </figure>

              <div className="mt-6 text-center">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#625E55]">
                  Jonas Riven
                </p>

                <p className="mt-2 font-serif text-sm italic text-[#A9A190]">
                  The Buried Reality
                </p>
              </div>

              <div className="mt-7 flex justify-center">
                <Link
                  href="/products/the-burried-reality"
                  aria-label="Read The Buried Reality by Jonas Riven"
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#B28A3D] via-[#D5B568] to-[#E0C27A] px-8 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-[#080807] shadow-[0_10px_35px_rgba(198,161,91,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(198,161,91,0.3)]"
                >
                  Read The Book
                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </aside>

          <article className="relative">
            <div className="border border-[#C6A15B]/10 bg-[#11100D]/60 p-7 sm:p-10 lg:p-12">
              <div className="border-b border-[#C6A15B]/10 pb-9">
                <p className="font-serif text-2xl leading-relaxed text-[#E8E0D0] sm:text-3xl">
                  I didn’t spend my life searching for hidden knowledge.
                  <span className="text-[#C6A15B]">
                    {" "}
                    I was invited into it.
                  </span>
                </p>

                <p className="mt-6 text-sm leading-7 text-[#8F8A7D] sm:text-base">
                  At first, I believed I was entering a brotherhood built on
                  tradition, influence, discipline, and loyalty. I was wrong.
                </p>
              </div>

              <div className="mt-9 space-y-7 text-sm leading-7 text-[#8F8A7D] sm:text-base sm:leading-8">
                <p>
                  The higher I climbed, the less the organization resembled what
                  the outside world believed it to be. Behind every circle was
                  another circle. Behind every secret was something they
                  considered too dangerous for the people below it to
                  understand. Eventually, I reached rooms most members never
                  knew existed.
                </p>

                <div className="border-l border-[#C6A15B]/60 pl-6">
                  <blockquote className="font-serif text-xl italic leading-relaxed text-[#D7CDBD] sm:text-2xl">
                    That was where I learned something I wish I could forget:
                    The world does not operate the way you were taught.
                  </blockquote>
                </div>

                <p>
                  Power was never simply about money, governments, or the people
                  you see on television.
                </p>

                <p className="font-serif text-xl text-[#E8E0D0] sm:text-2xl">
                  Real power was understanding people.
                </p>

                <ul
                  aria-label="Themes explored in The Buried Reality"
                  className="grid grid-cols-2 gap-x-6 gap-y-3 border-y border-[#C6A15B]/10 py-7 sm:grid-cols-3"
                >
                  {[
                    "Their fears.",
                    "Their desires.",
                    "Their beliefs.",
                    "Their attention.",
                    "Their perception.",
                    "Their reality.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-[9px] uppercase tracking-[0.14em] text-[#A9A190]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  I watched powerful men use principles the public would dismiss
                  as impossible. Psychology, symbolism, influence,
                  manifestation, ancient knowledge, energy, wealth, and methods
                  of controlling the mind were not treated as theories.
                </p>

                <p className="font-serif text-xl italic text-[#D7CDBD] sm:text-2xl">
                  They were treated as tools.
                </p>

                <p>
                  For years, I remained silent. I benefited from the same system
                  I now expose. I attended the meetings. I protected the
                  secrets. And I took the oath.
                </p>

                <div className="border border-[#C6A15B]/10 bg-[#C6A15B]/[0.025] px-6 py-6">
                  <span className="text-[8px] uppercase tracking-[0.35em] text-[#C6A15B]">
                    The Oath
                  </span>

                  <p className="mt-3 font-serif text-xl text-[#E8E0D0] sm:text-2xl">
                    And I took the oath.
                  </p>
                </div>

                <p>
                  But the deeper I went, the harder it became to pretend I
                  hadn&apos;t seen what I had seen. So I began keeping records.
                  Quietly. Things I was never supposed to remove. Methods I was
                  never supposed to repeat. Knowledge that was meant to remain
                  inside those rooms.
                </p>

                <p>Eventually, they discovered what I was doing.</p>

                <div className="border border-[#C6A15B]/15 bg-black/20 px-6 py-7 text-center">
                  <span className="text-[8px] uppercase tracking-[0.35em] text-[#625E55]">
                    The Choice
                  </span>

                  <p className="mt-4 font-serif text-xl text-[#A9A190]">
                    Protect my place among them…
                  </p>

                  <p className="my-2 text-[8px] uppercase tracking-[0.3em] text-[#625E55]">
                    or
                  </p>

                  <p className="font-serif text-2xl text-[#C6A15B]">
                    expose what I had spent years protecting.
                  </p>

                  <div
                    aria-hidden="true"
                    className="mx-auto my-5 h-px w-8 bg-[#C6A15B]/40"
                  />

                  <p className="font-serif text-lg italic text-[#E8E0D0]">
                    I chose the second.
                  </p>
                </div>

                <div className="border-t border-[#C6A15B]/10 pt-9">
                  <span className="text-[8px] uppercase tracking-[0.35em] text-[#C6A15B]">
                    The Consequence
                  </span>

                  <h3 className="mt-4 font-serif text-2xl text-[#E8E0D0] sm:text-3xl">
                    This book is the consequence.
                  </h3>

                  <p className="mt-4 leading-7">
                    <em>The Buried Reality</em> contains what I was sworn never
                    to reveal.
                  </p>
                </div>

                <div className="flex flex-col items-center border-t border-[#C6A15B]/10 pt-9 text-center">
                  <p className="font-serif text-xl italic text-[#A9A190]">
                    You don&apos;t have to believe me.
                  </p>

                  <Link
                    href="/products/the-burried-reality"
                    aria-label="Discover The Buried Reality by Jonas Riven"
                    className="mt-6 inline-flex items-center gap-4 border border-[#C6A15B]/30 px-7 py-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C6A15B] transition-all duration-300 hover:border-[#C6A15B]/60 hover:bg-[#C6A15B]/[0.05]"
                  >
                    Discover The Book
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        <footer className="mt-20 text-center">
          <div
            aria-hidden="true"
            className="mx-auto h-px w-12 bg-[#C6A15B]/50"
          />

          <p className="mt-6 text-[8px] uppercase tracking-[0.35em] text-[#625E55]">
            The Buried Reality · Jonas Riven
          </p>
        </footer>
      </div>
    </section>
  );
}
