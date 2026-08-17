export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "A fascinating look behind the curtain. Some ideas stayed with me long after I finished reading.",
      name: "Michael R.",
      role: "Early Reader",
    },
    {
      quote:
        "I expected a story. What I found was something much more unsettling — and much harder to forget.",
      name: "Daniel K.",
      role: "Verified Reader",
    },
    {
      quote:
        "Whether you believe every claim or not, The Buried Reality makes you question what you think you know.",
      name: "Alex M.",
      role: "Early Reader",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-[#C6A15B]/10 bg-[#080807] py-28 sm:py-36"
    >
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.035] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C6A15B]" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C6A15B]">
              Early Readers
            </span>

            <span className="h-px w-10 bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl tracking-[-0.03em] text-[#E8E0D0] sm:text-5xl">
            What Readers Are
            <span className="text-[#C6A15B]"> Saying</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#625E55]">
            A collection of first impressions from readers who encountered The
            Buried Reality before its wider release.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="group relative border border-[#C6A15B]/10 bg-[#0C0B09] p-8 transition duration-500 hover:border-[#C6A15B]/25 sm:p-10"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-serif text-2xl text-[#C6A15B]/30">
                  0{index + 1}
                </span>

                <span className="h-px w-12 bg-[#C6A15B]/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#C6A15B]/50" />
              </div>

              <div className="mb-10">
                <span className="font-serif text-4xl text-[#C6A15B]">“</span>

                <p className="mt-2 font-serif text-xl leading-8 text-[#B8B0A0]">
                  {testimonial.quote}
                </p>
              </div>

              <div className="border-t border-[#C6A15B]/10 pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E8E0D0]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#625E55]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
