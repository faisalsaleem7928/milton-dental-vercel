"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const faqs = [
  {
    question: "What dental services does Milton Dental Clinic offer?",
    answer: "Milton Dental Clinic offers comprehensive dental services including preventive care (cleanings, exams, X-rays), cosmetic dentistry (whitening, veneers, bonding), restorative dentistry (fillings, crowns, bridges, implants), orthodontics (Invisalign, retainers), emergency dental care, pediatric dentistry, root canal therapy, wisdom tooth extraction, and periodontics."
  },
  {
    question: "Does Milton Dental Clinic accept walk-in emergency patients?",
    answer: "Yes, Milton Dental Clinic offers same-day emergency dental appointments. If you're experiencing a dental emergency such as severe toothache, broken tooth, or knocked-out tooth, call us at (905) 876-4488 for immediate assistance."
  },
  {
    question: "What are Milton Dental Clinic's hours of operation?",
    answer: "We are open Monday 9AM-7PM, Tuesday 10AM-7PM, Wednesday 9AM-7PM, Thursday 10AM-7PM, Friday 9AM-5PM, Saturday 9AM-5PM. We are closed on Sundays."
  },
  {
    question: "Where is Milton Dental Clinic located?",
    answer: "Milton Dental Clinic is located at 342 Bronte St. S Unit 1, Milton, Ontario L9T 5B6, Canada. We serve patients from Milton, Oakville, Burlington, Georgetown, and surrounding Halton Region areas."
  },
  {
    question: "Does Milton Dental Clinic offer Invisalign?",
    answer: "Yes, Milton Dental Clinic provides Invisalign clear aligner treatment as part of our orthodontic services. Invisalign is a discreet, comfortable alternative to traditional braces for straightening teeth. Book a consultation to learn if Invisalign is right for you."
  },
  {
    question: "What insurance plans does Milton Dental Clinic accept?",
    answer: "We accept most major dental insurance plans including Sun Life, Manulife, Great-West Life, Blue Cross, Desjardins, and Green Shield Canada. Please contact our office to verify your specific coverage before your appointment."
  },
];

export default function HomeFAQ() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div ref={ref}>
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-2xl mx-auto">
            Find answers to common questions about our dental services in Milton.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 stagger-grid">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`animate-on-scroll delay-${Math.min(i + 1, 5)} border border-gray-200 rounded-xl overflow-hidden transition-colors ${isOpen ? "bg-light" : "bg-white"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-dark text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-6 pb-5 text-dark/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
