"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="absolute left-0 top-0 z-50 mt-10 w-full bg-[#080807]/[0.85] backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-[0.28em] text-[#E8E0D0] transition hover:text-[#E0C27A]"
          >
            JONAS RIVEN
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="#story"
              className="text-[10px] uppercase tracking-[0.22em] text-[#8F8A7D] transition hover:text-[#E0C27A]"
            >
              The Story
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
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-[#C6A15B]/20 md:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-[#C6A15B]" />
              <span className="block h-px w-5 bg-[#C6A15B]" />
            </div>
          </button>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-screen w-[85%] max-w-sm flex-col border-l border-[#C6A15B]/20 bg-[#0C0B09] transition-transform duration-500 ease-out md:hidden mt-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#C6A15B]/10 px-6 py-7">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F8A7D]">
            Menu
          </span>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center border border-[#C6A15B]/20"
            aria-label="Close menu"
          >
            <div className="relative h-5 w-5">
              <span className="absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#C6A15B]" />
              <span className="absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#C6A15B]" />
            </div>
          </button>
        </div>

        <div className="flex flex-1 flex-col px-6 py-10">
          <nav className="flex flex-col">
            <Link
              href="#story"
              onClick={closeMenu}
              className="border-b border-[#C6A15B]/10 py-6 text-xs uppercase tracking-[0.22em] text-[#E8E0D0] transition hover:text-[#E0C27A]"
            >
              The Story
            </Link>

            <Link
              href="#buy"
              onClick={closeMenu}
              className="mt-8 border border-[#C6A15B]/40 px-5 py-4 text-center text-[10px] uppercase tracking-[0.22em] text-[#C6A15B] transition duration-300 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080807]"
            >
              Get The Book
            </Link>
          </nav>
        </div>

        <div className="border-t border-[#C6A15B]/10 px-6 py-6">
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#8F8A7D]">
            Jonas Riven
          </p>

          <p className="mt-2 text-[9px] text-[#5F5B53]">The Buried Reality</p>
        </div>
      </aside>
    </>
  );
}
