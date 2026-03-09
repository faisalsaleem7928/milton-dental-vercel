"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function PatientsPageContent() {
  const intakeRef = useScrollAnimation();
  const xrayRef = useScrollAnimation();

  return (
    <main>
      {/* Page Hero */}
      <PageHero title="Online Easy Patient Forms" />

      {/* Intake Form Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div ref={intakeRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="animate-slide-left">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
                Start Your Journey with Us &ndash; Complete Your Intake Form!
              </h2>
              <p className="text-dark/70 leading-relaxed mb-8 text-base sm:text-lg">
                Welcome to a smoother, personalized experience at Milton Dental
                Clinic! Before your first appointment, take a few minutes to
                fill out our Intake Form. It&apos;s quick, easy, and ensures we
                have all the important details to provide you with the best care
                possible. By completing this form, you&apos;re helping us
                understand your needs, health background, and preferences so we
                can deliver a tailored experience just for you.
              </p>
              <Link
                href="#"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base sm:text-lg"
              >
                New Patient Intake Form
              </Link>
            </div>

            {/* Image */}
            <div className="animate-slide-right relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/about-1.webp"
                alt="Milton Dental Clinic team welcoming patients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* X-Ray Release Form Section */}
      <section className="py-20 md:py-28 bg-light overflow-hidden">
        <div ref={xrayRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="animate-slide-left relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/about-2.webp"
                alt="Happy family smiling at Milton Dental Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="animate-slide-right">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
                Share Your Smile Safely &ndash; X-Ray Release Form
              </h2>
              <p className="text-dark/70 leading-relaxed mb-8 text-base sm:text-lg">
                Need to transfer your dental X-rays? Our X-Ray Release Form
                makes it quick and easy! Whether you&apos;re moving to a new
                dentist, seeking a second opinion, or updating your records, this
                form ensures your X-rays are securely shared while keeping your
                privacy a top priority.
              </p>
              <Link
                href="#"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base sm:text-lg"
              >
                X-rays Release Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
