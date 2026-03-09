"use client";

import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  bgImage = "/images/hero/hero-bg.webp",
  children,
}: PageHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="object-cover object-right-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#1a2836]/70" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="hero-animate font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-animate-delay mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-animate-delay mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
