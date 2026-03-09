"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const services = [
  {
    title: "Preventive and Diagnostic Care",
    image: "/images/services/preventive-care.webp",
    description:
      "We focus on keeping your smile healthy with thorough exams, including TMJ and gum assessments, oral cancer screenings, and digital X-rays. Our preventive services -- scaling, polishing, fluoride treatments, and dental sealants -- help stop problems before they start, while our oral health education and diet counselling empower you to care for your smile every day.",
  },
  {
    title: "Restorative and Cosmetic Dentistry",
    image: "/images/services/restorative-cosmetic.webp",
    description:
      "From fillings, crowns, and bridges to whitening and bonding, we restore and enhance your teeth with natural-looking results. Whether you need simple repairs or a complete smile makeover, we combine skill and artistry to help you look and feel your best.",
  },
  {
    title: "Specialized Treatment and Orthodontics",
    image: "/images/services/specialized-treatment.webp",
    description:
      "Our team provides advanced care, including Invisalign, retainers, root canals, wisdom tooth extractions, implants, and full or partial dentures. We take pride in offering comprehensive solutions for every stage of your dental health, all under one roof.",
  },
];

export default function ServicesGrid() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="services">
      <div ref={ref}>
        <div className="text-center mb-12 md:mb-16 animate-blur-in">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            Comprehensive Dental Services
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-2xl mx-auto">
            Explore our range of high-quality dental treatments and diagnostic
            services for the whole family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll delay-${i + 1} glow-card spotlight-hover group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
