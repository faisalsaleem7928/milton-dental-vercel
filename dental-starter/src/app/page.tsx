import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MembersLogos from "@/components/sections/MembersLogos";
import AboutPreview from "@/components/sections/AboutPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import HomeFAQ from "@/components/sections/HomeFAQ";
import { generateFAQSchema, generateBreadcrumbSchema, generateDentistSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Milton Dental Clinic | Family Dentist in Milton, ON | Dr. Zoha Anjum",
  description: "Milton Dental Clinic, located at 342 Bronte St. S Unit 1, Milton ON, is a family dental practice led by Dr. Zoha Anjum offering preventive, restorative, cosmetic, and emergency dental care. Call (905) 876-4488.",
  keywords: ["dentist Milton ON", "family dentist Milton", "Milton dental clinic", "emergency dentist Milton", "cosmetic dentistry Milton", "Invisalign Milton", "teeth whitening Milton", "dental implants Milton", "Dr Zoha Anjum dentist"],
  alternates: { canonical: "https://www.miltondentalclinic.com" },
  openGraph: {
    title: "Milton Dental Clinic | Your Trusted Family Dentist in Milton",
    description: "Comprehensive dental care for the whole family. General, cosmetic, and emergency dentistry services in Milton, Ontario.",
    url: "https://www.miltondentalclinic.com",
    siteName: "Milton Dental Clinic",
    locale: "en_CA",
    type: "website",
  },
};

const homeFaqs = [
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Milton Dental Clinic",
            url: "https://www.miltondentalclinic.com",
            description: "Comprehensive dental care for the whole family in Milton, Ontario. General, cosmetic, and emergency dentistry services.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.miltondentalclinic.com/blog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(homeFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateDentistSchema()),
        }}
      />
      <main>
        <HeroBanner />
        <ServicesGrid />
        <MembersLogos />
        <AboutPreview />
        <BlogPreview />
        <CTABanner variant="mid" />
        <Testimonials />
        <InstagramFeed />
        <HomeFAQ />
        <CTABanner variant="bottom" />
      </main>
    </>
  );
}
