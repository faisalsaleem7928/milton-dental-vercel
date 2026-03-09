import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Milton Dental Clinic | Book Appointment | (905) 876-4488",
  description: "Contact Milton Dental Clinic at (905) 876-4488 or visit us at 342 Bronte St. S Unit 1, Milton, ON L9T 5B6. Open Monday to Saturday. Book your dental appointment today.",
  keywords: ["Milton dental clinic phone number", "book dentist appointment Milton", "Milton dentist address", "dental clinic Milton contact", "dentist near me Milton Ontario", "book dental appointment Milton"],
  alternates: { canonical: "https://www.miltondentalclinic.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <ContactPageContent />
    </>
  );
}
