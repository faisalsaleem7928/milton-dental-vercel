import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";
import { generateBreadcrumbSchema, generatePersonSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | Milton Dental Clinic - Meet Dr. Zoha Anjum & Team",
  description: "Meet the Milton Dental Clinic team led by Dr. Zoha Anjum, DDS, MPH. Our dentists Dr. Sherief Mohamed and Dr. Muhammad Yasin Anjum provide gentle, trauma-informed, and culturally sensitive dental care in Milton, Ontario.",
  keywords: ["Dr Zoha Anjum Milton", "Milton dentist team", "about Milton Dental Clinic", "dentist Milton Ontario", "Dr Sherief Mohamed", "Dr Muhammad Yasin Anjum", "family dentist Milton ON", "Milton dental team"],
  alternates: { canonical: "https://www.miltondentalclinic.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema({
            name: "Dr. Zoha Anjum",
            credentials: "DDS, MPH, G.Dip., HBSc - General Dentist",
            description: "Dr. Zoha Anjum is the lead general dentist at Milton Dental Clinic in Milton, Ontario. She is dedicated to providing gentle, trauma-informed, and culturally sensitive dental care.",
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema({
            name: "Dr. Sherief Mohamed",
            credentials: "General Dentist",
            description: "Dr. Sherief Mohamed is a general dentist at Milton Dental Clinic in Milton, Ontario, providing comprehensive dental care for patients of all ages.",
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema({
            name: "Dr. Muhammad Yasin Anjum",
            credentials: "BDS - Consulting Dentist and Owner",
            description: "Dr. Muhammad Yasin Anjum is the consulting dentist and owner of Milton Dental Clinic in Milton, Ontario.",
          })),
        }}
      />
      <AboutPageContent />
    </>
  );
}
