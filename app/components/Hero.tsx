"use client";

import Link from "next/link";
import { ShieldAlert, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  async function enableSound() {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
      setSoundEnabled(true);
    } catch {
      video.muted = true;
      setSoundEnabled(false);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080807] text-[#E8E0D0]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(198,161,91,0.09),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-14">
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.3em] text-[#C6A15B]"
          >
            JONAS RIVEN
          </Link>

          <span className="border border-[#C6A15B]/30 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-[#C6A15B]/80">
            First Edition · 2026
          </span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B]">
                A story beyond perception
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-light leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Reality
              <br />
              <span className="font-normal italic text-[#C6A15B]">Without</span>
              <br />
              Witnesses
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#E8E0D0]/60 sm:text-lg">
              What remains of reality when there is no one left to observe it?
              Step beyond the familiar and question everything you thought you
              knew.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#discover"
                className="group inline-flex items-center gap-4 bg-[#C6A15B] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#080807] transition-colors hover:bg-[#E0C27A]"
              >
                Discover the book
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <span className="text-xs uppercase tracking-[0.18em] text-[#E8E0D0]/40">
                An exploration of reality
              </span>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-2 gap-8 border-t border-[#E8E0D0]/10 pt-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E8E0D0]/40">
                  The author
                </p>
                <p className="mt-2 text-sm tracking-wide">Jonas Riven</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E8E0D0]/40">
                  Classification
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm tracking-wide">
                  <ShieldAlert size={14} className="text-[#C6A15B]" />
                  Restricted knowledge
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[800px] lg:ml-auto lg:mr-0">
            <div className="absolute -inset-5 bg-[#C6A15B]/5 blur-3xl" />

            <div className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#0c0c0a] shadow-[0_0_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-[#C6A15B]/20 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#C6A15B]" />
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#E8E0D0]/60 sm:text-[10px]">
                    Visual transmission
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C6A15B]/70 sm:text-[10px]">
                  001 / CLASSIFIED
                </span>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={!soundEnabled}
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/trailer.mp4" type="video/mp4" />
                </video>

                {!soundEnabled && (
                  <button
                    type="button"
                    onClick={enableSound}
                    className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 border border-[#C6A15B]/50 bg-black/75 px-3 py-2.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#E8E0D0] backdrop-blur-sm transition-colors hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-black sm:right-5 sm:top-5 sm:px-4 sm:text-[10px]"
                    aria-label="Enable trailer sound"
                  >
                    <Volume2 size={14} />
                    Tap for sound
                  </button>
                )}

                {soundEnabled && (
                  <div className="absolute right-3 top-3 z-10 flex items-center gap-2 border border-[#C6A15B]/40 bg-black/70 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-[#C6A15B] sm:right-5 sm:top-5 sm:text-[10px]">
                    <Volume2 size={14} />
                    Sound on
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[#C6A15B]/20 px-4 py-3 sm:px-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#E8E0D0]/40 sm:text-[10px]">
                  Reality is not what it seems
                </span>

                <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-[#C6A15B]/70 sm:text-[10px]">
                  Transmission active
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-[#E8E0D0]/30">
              <span>Confidential material</span>
              <span>Observe carefully</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 self-center text-[9px] uppercase tracking-[0.3em] text-[#E8E0D0]/30 lg:mt-12">
          <span className="h-px w-8 bg-[#C6A15B]/40" />
          There is more beneath the surface
          <span className="h-px w-8 bg-[#C6A15B]/40" />
        </div>
      </div>
    </section>
  );
}
