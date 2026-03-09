"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const testimonials = [
  {
    quote:
      "I recently visited Dr. Anjum and was extremely impressed. She took the time to get to know me personally, which made me feel comfortable and valued. Dr. Anjum thoroughly explained the treatment plan and provided all the information I needed to make an informed decision about my dental care. I appreciated how she empowered me to choose the best option for my needs.",
    name: "Ayak Wel",
  },
  {
    quote:
      "Dr Anjum and her team are the best you can get in Canadian dentistry -- professional and very punctual. My favourite part about her practice is that she is very accommodating to my schedule (open past 5pm) and she also explains dental information very clearly. So happy to have found this dental clinic!",
    name: "Amna Zulfiqar",
  },
  {
    quote:
      "Went for my first appointment with Dr. Zoha Anjum and honestly had a great time! Super painless cleaning and she really reassured me regarding all concerns in my care. 10/10 highly recommend!",
    name: "Shifa Minhas",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="testimonials">
      <div ref={ref}>
        <div className="text-center mb-12 md:mb-16 animate-blur-in">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            Thrilled Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`animate-on-scroll delay-${i + 1} glow-card bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-4 flex-shrink-0" />
                <p className="text-dark/70 leading-relaxed text-sm sm:text-base flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-dark text-base">
                    {testimonial.name}
                  </span>
                  <Image
                    src="/images/icons/google.png"
                    alt="Google review"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
