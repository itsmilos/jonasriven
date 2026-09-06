"use client";

import InsideBook from "@/app/components/InsideBook";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function ProductPage() {
  const [viewers, setViewers] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;

        return next < 18 ? 18 : next > 38 ? 38 : next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://gumroad.com/js/gumroad.js"
        strategy="afterInteractive"
      />

      <section className="relative min-h-screen overflow-hidden bg-[#0B0A08] py-24 sm:py-28">
        <div className="pointer-events-none absolute left-[-15%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.06] blur-[160px]" />

        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#C6A15B]/[0.035] blur-[150px]" />

        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />

        <div className="relative z-10 mx-auto mt-10 grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/10 blur-[100px]" />

            <div className="relative z-10 w-full max-w-[430px]">
              <div className="absolute inset-[-15px] bg-[#C6A15B]/[0.06] blur-2xl" />

              <div className="relative overflow-hidden border border-[#80652F] bg-[#080807] p-[4px] shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
                <div className="relative overflow-hidden border border-[#C6A15B]/50">
                  <img
                    src="/ebook22.webp"
                    alt="Reality Without Witnesses by Jonas Riven"
                    className="h-auto w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E0C27A]/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#C6A15B] sm:text-xs">
              Digital Edition · Instant Access
            </p>

            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#E8E0D0] sm:text-6xl lg:text-[68px]">
              Reality Without
              <br />
              <span className="bg-gradient-to-r from-[#B28A3D] via-[#E0C27A] to-[#C6A15B] bg-clip-text text-transparent">
                Witnesses
              </span>
            </h1>

            <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#625E55]">
              By Jonas Riven
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
              <span className="tracking-[0.15em] text-[#C6A15B]">★★★★★</span>

              <span className="text-[#8F8A7D]">
                4.9 rating · 1,200+ readers
              </span>
            </div>

            <p className="mt-8 max-w-xl font-serif text-lg italic leading-8 text-[#A9A190] sm:text-xl">
              A book about the hidden structures behind power, human behavior,
              consciousness, belief, and the reality we think we understand.
            </p>

            <div className="mt-9 flex items-center gap-3 text-sm text-[#8F8A7D]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#C6A15B]" />

              <p>
                <span className="font-semibold text-[#E8E0D0]">{viewers}</span>{" "}
                people are viewing this right now
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#625E55]">
                One-time payment
              </p>

              <div className="mt-2 flex items-end gap-3">
                <span className="font-serif text-6xl text-[#E8E0D0]">
                  $17.00
                </span>

                <span className="mb-2 text-sm text-[#625E55]">USD</span>
              </div>
            </div>

            <a
              href="https://jonasriven.gumroad.com/l/popaff"
              className="gumroad-button group mt-12 flex w-full items-center justify-center gap-4 border border-[#D5B568] bg-gradient-to-r from-[#B28A3D] via-[#D5B568] to-[#E0C27A] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#080807] shadow-[0_10px_35px_rgba(198,161,91,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(198,161,91,0.3)]"
            >
              <span>Read Reality Without Witnesses</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="border border-[#C6A15B]/10 bg-[#C6A15B]/[0.025] p-4 text-center">
                <p className="text-lg text-[#C6A15B] animate-pulse">◆</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.08em] text-[#8F8A7D]">
                  Secure
                  <br />
                  Checkout
                </p>
              </div>

              <div className="border border-[#C6A15B]/10 bg-[#C6A15B]/[0.025] p-4 text-center">
                <p className="text-lg text-[#C6A15B] animate-pulse">↯</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.08em] text-[#8F8A7D]">
                  Instant
                  <br />
                  Access
                </p>
              </div>

              <div className="border border-[#C6A15B]/10 bg-[#C6A15B]/[0.025] p-4 text-center">
                <p className="text-lg text-[#C6A15B] animate-pulse">∞</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.08em] text-[#8F8A7D]">
                  Lifetime
                  <br />
                  Access
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[9px] uppercase tracking-[0.2em] text-[#625E55]">
              <span>No subscription</span>

              <span className="h-1 w-1 rounded-full bg-[#C6A15B]/40" />

              <span>Pay once</span>

              <span className="h-1 w-1 rounded-full bg-[#C6A15B]/40" />

              <span>Read forever</span>
            </div>
          </div>
        </div>
      </section>
      <InsideBook />
    </>
  );
}
