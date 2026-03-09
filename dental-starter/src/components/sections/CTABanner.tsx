"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface CTAButton {
  label: string;
  href: string;
  variant: "solid" | "outline";
}

const presets = {
  mid: {
    heading: "Transform Your Smile Today",
    text: "Embark on your journey towards a healthier, brighter smile with our expert dental team. Your ideal smile awaits!",
    buttons: [
      { label: "Book Appointment", href: "/contact", variant: "solid" as const },
    ],
    bgImage: "/images/services/specialized-treatment.webp",
    overlay: "bg-gradient-to-r from-primary/90 via-primary/80 to-dark/70",
  },
  bottom: {
    heading: "Take the first step towards a healthier smile",
    text: "Contact us today to schedule your appointment and start your journey towards optimal oral health with Milton Dental Clinic.",
    buttons: [
      { label: "Book Appointment", href: "/contact", variant: "solid" as const },
      { label: "(905) 876-4488", href: "tel:9058764488", variant: "outline" as const },
    ],
    bgImage: "/images/hero/hero-bg.webp",
    overlay: "bg-gradient-to-r from-dark/90 via-dark/80 to-primary/60",
  },
};

export default function CTABanner({ variant }: { variant: "mid" | "bottom" }) {
  const ref = useScrollAnimation();
  const { heading, text, buttons, bgImage, overlay } = presets[variant];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {heading}
        </h2>
        <p className="animate-on-scroll delay-1 mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>
        <div className="animate-on-scroll delay-2 mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttons.map((btn: CTAButton) =>
            btn.variant === "solid" ? (
              <Link
                key={btn.label}
                href={btn.href}
                className="magnetic-btn pulse-ring btn-glow inline-flex items-center px-7 py-3 bg-white text-dark text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                {btn.label}
              </Link>
            ) : (
              <a
                key={btn.label}
                href={btn.href}
                className="magnetic-btn inline-flex items-center px-7 py-3 border-2 border-white text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                {btn.label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
