"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/hero-bg.webp"
        alt="Milton Dental Clinic"
        fill
        priority
        className="object-cover object-center scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2836]/70 via-[#1a2836]/50 to-[#1a2836]/80" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        {/* Main heading - line by line fade in */}
        <h1 className="font-[family-name:var(--font-heading)] text-white leading-[1.15] tracking-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic opacity-0 animate-[heroFadeUp_0.8s_ease-out_0.2s_forwards]">
            Caring for our community,
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic opacity-0 animate-[heroFadeUp_0.8s_ease-out_0.5s_forwards]">
            one smile at a time.
          </span>
        </h1>

        {/* Decorative line */}
        <div className="mt-6 mx-auto w-20 h-0.5 bg-white/40 opacity-0 animate-[heroFadeUp_0.6s_ease-out_0.9s_forwards]" />

        {/* Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 animate-[heroFadeUp_0.8s_ease-out_1.1s_forwards]">
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center px-10 py-4 bg-[#0075C9] text-white text-base font-semibold rounded-md hover:bg-[#0063ab] transition-colors shadow-lg shadow-[#0075C9]/30"
          >
            Book Appointment
          </Link>
          <a
            href="tel:9058764488"
            className="inline-flex items-center px-10 py-4 border-2 border-white/80 text-white text-base font-semibold rounded-md hover:bg-white/10 transition-colors"
          >
            (905) 876-4488
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[heroFadeUp_0.6s_ease-out_1.5s_forwards]">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-white/60 rounded-full mt-2 animate-[scrollBounce_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
