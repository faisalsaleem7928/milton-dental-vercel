"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const members = [
  { src: "/images/members/member-2.png", alt: "Ontario Dental Association" },
  { src: "/images/members/member-4.png", alt: "Royal College of Dental Surgeons of Ontario" },
  { src: "/images/members/member-3.png", alt: "Milton Chamber of Commerce" },
  { src: "/images/members/member-1.png", alt: "Academy of General Dentistry" },
];

export default function MembersLogos() {
  const ref = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-14">
          Proud Members Of
        </h2>

        <div className="overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 w-max">
            {[...members, ...members].map((member, i) => (
              <div
                key={`${member.src}-${i}`}
                className="relative w-[200px] h-16 md:h-20 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
