import Image from "next/image";
import Link from "next/link";

export default function FacebookPost() {
  return (
    <section className="relative overflow-hidden bg-[#080807] py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 text-[180px] font-black uppercase tracking-widest text-white/[0.025] lg:block">
          ARCHIVE
        </div>

        <div className="absolute left-[-10%] top-[25%] h-[550px] w-[550px] rounded-full bg-[#C6A15B]/[0.06] blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#C6A15B]/[0.04] blur-[180px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[110px]" />

          <div className="relative z-10 w-full">
            <div className="absolute inset-[-6px] bg-[#C6A15B]/10 blur-2xl" />

            <div className="relative overflow-hidden border-2 border-[#80652F] bg-[#080807] p-[4px] shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
              <div className="relative overflow-hidden border border-[#C6A15B]/60">
                <Image
                  src="/e-book2.webp"
                  alt="The Buried Reality by Jonas Riven"
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

        <div className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#11110F]/85 shadow-[0_35px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#C6A15B]/70 to-transparent" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/[0.07]">
                  <span className="font-serif text-lg text-[#C6A15B]">F</span>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C6A15B]">
                    Viral Facebook Post
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#625E55]">
                    Facebook · 2 hrs ago
                  </p>
                </div>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#625E55] sm:block">
                #THEBURIEDREALITY
              </span>
            </div>

            <h2 className="mt-8 max-w-[850px] font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-[#F0E9DC] sm:text-5xl lg:text-[52px]">
              A random man on Facebook just wrote something brilliant
            </h2>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C6A15B]" />
              <span className="h-px w-2 bg-[#C6A15B]/40" />
              <span className="h-px w-2 bg-[#C6A15B]/20" />
            </div>

            <div className="custom-scroll mt-8 h-[520px] overflow-y-auto pr-4 font-serif text-[15px] leading-[1.95] text-[#E8E0D0] sm:text-base lg:h-[640px] lg:pr-6">
              <p>
                It’s been several hours since I finished{" "}
                <em>The Buried Reality</em>, and I still can’t get this book out
                of my head. I tried going back to my normal routine. Coffee.
                Work. Messages. Watching something with my wife. Nothing worked.
                So I started researching the man who supposedly wrote it. His
                name is Jonas Riven. And almost nothing about him exists.
                According to the story surrounding the book, Riven spent years
                inside an extremely private organization connected to some of
                the wealthiest and most influential circles in the world. People
                call it Masonic. Riven suggests Freemasonry was only the outer
                layer. He supposedly climbed high enough to discover something
                most members themselves never learn: The people we think control
                the world aren’t necessarily the people at the top. Presidents.
                Billionaires. Corporations. Celebrities. Riven describes them as
                people standing on a stage. His book is about the people who
                supposedly built the stage. And their greatest weapon isn't
                money. It's understanding human behavior. Fear. Desire.
                Attention. Belief. Status. Symbols. Riven claims that if you
                understand those things deeply enough, you don’t need to force
                people to do anything. You can make them believe the decision
                was theirs. That sentence alone made me put the book down. But
                it gets much stranger. Riven describes moving through different
                levels of this organization and slowly realizing that almost
                nobody inside understands the entire structure. He compares it
                to a giant building. Every member receives the key to one room.
                They spend their lives believing that room is the building. Only
                a handful possess the keys to every door. Riven claims he
                eventually became one of them. And what he found behind those
                final doors became <em>The Buried Reality.</em>
              </p>

              <p className="mt-8">
                That’s when I finally understood the title. The truth isn't
                buried underground. It's buried underneath things you see every
                single day. Money. Entertainment. Education. Language. Social
                status. Religion. Fear. Your ambitions. Even the identity you
                call “yourself.” Riven goes much deeper into consciousness,
                manifestation, ancient knowledge, human energy, wealth,
                psychological conditioning, symbolism, death and the nature of
                reality. Some chapters sound insane. Others made me stare at the
                wall for five minutes. But the most disturbing part of the book
                isn't the secret society. It's what Riven makes you question
                about yourself. If someone understands your fears better than
                you do, they can control you. If someone understands your
                desires better than you do, they can sell you almost anything.
                If someone controls your attention, they can influence your
                reality. And if you've never questioned where your beliefs came
                from… how many of them are actually yours?
              </p>

              <p className="mt-8">
                Riven doesn't portray himself as a hero either. He admits he
                benefited from the system. The connections. The access. The
                power. The knowledge. Until he began secretly keeping
                information he was never supposed to take outside those rooms.
                Eventually, someone noticed. According to the story, that was
                when Jonas Riven disappeared from his old life. But before doing
                so, he broke his oath. He put what he knew into a book.{" "}
                <strong>The Buried Reality.</strong> Maybe Jonas Riven is
                exactly who he claims to be. Maybe the entire story is fiction.
                Maybe that isn't even his real name. After reading the book, I'm
                not sure that matters. Because the question it left me with is
                far more uncomfortable: What if the greatest secret isn't who
                controls the world… but how little we understand what controls
                us? Yesterday I had never heard the name Jonas Riven. Tonight
                I’m writing this to complete strangers because I couldn't simply
                close his book and continue with my life. I've shared what I
                found. What you do with it now is up to you.
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-[105px] left-0 h-36 w-full bg-gradient-to-t from-[#11110F] via-[#11110F]/90 to-transparent" />

            <Link
              href="/products/the-burried-reality"
              className="group relative z-10 mt-8 flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#B28A3D] via-[#D5B568] to-[#E0C27A] py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#080807] shadow-[0_10px_35px_rgba(198,161,91,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(198,161,91,0.3)] lg:py-5 lg:text-xs"
            >
              Read The Buried Reality
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
