"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutPreview() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="about">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Overlapping Images */}
        <div className="animate-slide-left animate-float relative h-[400px] sm:h-[480px]">
          <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/about-1.webp"
              alt="Milton Dental Clinic team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 65vw, 30vw"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/about/about-2.webp"
              alt="Milton Dental Clinic office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 28vw"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="animate-slide-right">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
            About Us
          </h2>
          <p className="text-dark/70 leading-relaxed mb-4 text-base sm:text-lg">
            At the heart of our practice is a commitment to gentle, trauma-informed, and culturally sensitive dental care. We believe in practicing with integrity and honesty, ensuring that every patient feels respected and fully informed.
          </p>
          <p className="text-dark/70 leading-relaxed mb-8 text-base sm:text-lg">
            We are dedicated to improving dental access for all, actively engaging with our community to promote oral health education and support. Above all, we focus on prevention, helping our patients maintain healthy smiles for life.
          </p>
          <Link
            href="/about"
            className="magnetic-btn inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 text-base"
          >
            Read More
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
