"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { siteConfig } from "@/config/site";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const emergencyCards = [
  {
    title: "Wisdom Tooth Extraction Near You",
    text: "If your wisdom teeth are causing pain, swelling, or discomfort, our experienced team at Milton Dental Clinic can help.",
  },
  {
    title: "Same-Day Appointments Available",
    text: "We know dental issues can't always wait. That's why Milton Dental Clinic offers same-day appointments, ensuring you get the care you need quickly and conveniently.",
  },
  {
    title: "Emergency Walk-Ins Welcome",
    text: "Toothaches and dental accidents can occur at any time. At Milton Dental Clinic, we welcome emergency walk-ins so you can get fast relief and expert treatment without delay.",
  },
  {
    title: "Sedation Options Available",
    text: "Feeling anxious about dental treatment? We offer safe and effective sedation options to help you feel calm and comfortable during your visit, so you can receive the care you need stress-free.",
  },
];

const faqs = [
  {
    question: "What types of dental emergencies do you treat?",
    answer:
      "At Milton Dental Clinic, we handle a wide range of dental emergencies, including severe toothaches, jaw pain, knocked-out teeth, fractured or chipped teeth, lost fillings or crowns, abscesses, broken dentures or veneers, and wisdom tooth pain. Our team provides prompt and effective care to relieve your pain and prevent further complications.",
  },
  {
    question: "Do you accept emergency walk-ins?",
    answer:
      "Yes! We welcome emergency walk-ins so you can get fast, professional care without waiting for a scheduled appointment. If you experience sudden dental pain or an accident, call us or come directly to the clinic.",
  },
  {
    question: "Can I book a same-day emergency appointment?",
    answer:
      "Absolutely. Dental issues can't always wait. Milton Dental Clinic offers same-day emergency appointments to ensure you receive timely care and relief as quickly as possible.",
  },
  {
    question: "Do you provide wisdom tooth extractions?",
    answer:
      "Yes. If your wisdom teeth are causing pain, swelling, or discomfort, our experienced team provides gentle and effective extractions to protect your oral health and relieve pain before it worsens.",
  },
  {
    question: "What should I do if I have severe tooth pain?",
    answer:
      "Severe tooth pain can indicate cavities, infections, impacted teeth, or dental abscesses. Contact Milton Dental Clinic immediately. Our emergency dentist will assess the situation, provide immediate relief, and create a personalized treatment plan.",
  },
  {
    question: "What options are available if I have dental anxiety?",
    answer:
      "We understand that dental emergencies can be stressful. Milton Dental Clinic offers safe and effective sedation options to help you stay calm and comfortable during treatment.",
  },
  {
    question: "Will you provide after-care instructions?",
    answer:
      "Yes. After your emergency treatment, our team will give you detailed after-care instructions to ensure proper healing and maintain your oral health.",
  },
  {
    question: "Where is Milton Dental Clinic located?",
    answer:
      "We're conveniently located at 342 Bronte St. S Unit 1, Milton, ON. Our welcoming environment is designed to make every visit as stress-free as possible.",
  },
  {
    question: "How can I contact you for an emergency?",
    answer:
      "You can book online through our website or call us directly at (905) 876-4488. Our emergency dental team is ready to respond promptly and provide compassionate care when you need it most.",
  },
];

const emergencySigns = [
  "Severe pain that makes it difficult to eat or sleep",
  "Heavy or persistent bleeding",
  "Broken dentures or damaged veneers",
  "Pain or swelling from wisdom teeth",
  "Knocked-out or dislodged teeth",
  "Broken or loose braces",
  "Chipped, cracked, or fractured teeth",
  "Lost fillings or crowns",
  "Dental abscess or \"pimple\" on the gums",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function EmergencyPageContent() {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <>
      {/* -- Hero -- */}
      <PageHero
        title="Your Trusted Emergency Dental Clinic in Milton"
        subtitle="Dental pain and accidents can happen when you least expect them, and waiting is never an option. At Milton Dental Clinic, we provide same-day emergency appointments to give you fast, effective relief. When you need a reliable emergency dentist in Milton, you can count on us for compassionate care at your time of need."
        bgImage="/images/emergency/emergency-hero.jpg"
      >
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 bg-[#0075C9] text-white text-sm font-semibold rounded-md hover:bg-[#0063ab] transition-colors shadow-lg"
        >
          Book Appointment
        </Link>
        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
          className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          {siteConfig.phone}
        </a>
      </PageHero>

      {/* -- Compassionate Care Cards -- */}
      <section ref={ref1} className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] text-center leading-tight">
            Compassionate Care When You Need It Most
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyCards.map((card, i) => (
              <div
                key={i}
                className={`animate-on-scroll delay-${Math.min(i + 1, 3)} bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow`}
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A2332] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Immediate Relief Section -- */}
      <section ref={ref2} className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="animate-on-scroll relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/emergency/emergency-hero.jpg"
                alt="Emergency dental care at Milton Dental Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="animate-on-scroll delay-1">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] leading-tight">
                Immediate Relief for Dental Emergencies in Milton
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  { title: "Toothache", text: "Are you dealing with sharp or persistent tooth pain? Toothaches can stem from many causes, including cavities, infections, or impacted teeth." },
                  { title: "Jaw Pain", text: "Jaw pain can be more than just an annoyance; it may be linked to toothaches, sinus issues, infections, trauma, or even TMJ disorders." },
                  { title: "Lost Filling & Crown Repair", text: "A lost filling or crown can leave your tooth exposed and extremely sensitive." },
                  { title: "Tooth Fracture", text: "A fractured tooth\u2014whether it\u2019s a small crack or a major break\u2014can cause discomfort and lead to complications if left untreated." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#0075C9]/10 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0075C9]" />
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[#1A2332]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-600 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Signs of a Dental Emergency -- */}
      <section ref={ref3} className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="animate-on-scroll">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] leading-tight">
                Signs You May Be Experiencing a Dental Emergency
              </h2>
              <ul className="mt-6 space-y-3">
                {emergencySigns.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#0075C9]/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#0075C9]" />
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed pt-0.5">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="animate-on-scroll delay-1 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/emergency/dental-checkup.jpg"
                alt="Dental emergency checkup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section ref={ref4} className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] text-center leading-tight">
            Emergency Dental FAQs
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`border border-gray-200 rounded-lg overflow-hidden transition-colors ${
                    isOpen ? "bg-[#F7F9FC]" : "bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[#1A2332] text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0075C9] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Banner -- */}
      <CTABanner variant="bottom" />
    </>
  );
}
