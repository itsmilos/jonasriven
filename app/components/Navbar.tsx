import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full fixed bg-[#080807]/[0.85] backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.28em] text-[#E8E0D0] transition hover:text-[#E0C27A]"
        >
          JONAS RIVEN
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="#book"
            className="text-[10px] uppercase tracking-[0.22em] text-[#8F8A7D] transition hover:text-[#E0C27A]"
          >
            The Book
          </Link>

          <Link
            href="#story"
            className="text-[10px] uppercase tracking-[0.22em] text-[#8F8A7D] transition hover:text-[#E0C27A]"
          >
            The Story
          </Link>

          <Link
            href="#about"
            className="text-[10px] uppercase tracking-[0.22em] text-[#8F8A7D] transition hover:text-[#E0C27A]"
          >
            About
          </Link>

          <Link
            href="#buy"
            className="border border-[#C6A15B]/40 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[#C6A15B] transition duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080807]"
          >
            Get The Book
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-[#C6A15B]/20 md:hidden"
          aria-label="Open menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-[#C6A15B]" />
            <span className="block h-px w-5 bg-[#C6A15B]" />
          </div>
        </button>
      </div>
    </nav>
  );
}
