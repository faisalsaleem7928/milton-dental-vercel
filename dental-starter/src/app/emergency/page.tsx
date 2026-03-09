import type { Metadata } from "next";
import EmergencyPageContent from "./EmergencyPageContent";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Emergency Dentist Milton ON | Same-Day Dental Care | Milton Dental Clinic",
  description: "Milton Dental Clinic provides same-day emergency dental care in Milton, Ontario. Walk-ins welcome for toothaches, broken teeth, lost fillings, and dental trauma. Call (905) 876-4488.",
  keywords: ["emergency dentist Milton", "same day dental appointment Milton", "toothache Milton", "broken tooth Milton", "dental emergency Milton ON", "emergency dentist near me Milton", "24 hour dental Milton ON", "walk in dentist Milton", "urgent dental care Milton Ontario"],
  alternates: { canonical: "https://www.miltondentalclinic.com/emergency" },
};

const emergencyFaqs = [
  {
    question: "What types of dental emergencies do you treat?",
    answer: "At Milton Dental Clinic, we handle a wide range of dental emergencies, including severe toothaches, jaw pain, knocked-out teeth, fractured or chipped teeth, lost fillings or crowns, abscesses, broken dentures or veneers, and wisdom tooth pain. Our team provides prompt and effective care to relieve your pain and prevent further complications.",
  },
  {
    question: "Do you accept emergency walk-ins?",
    answer: "Yes! We welcome emergency walk-ins so you can get fast, professional care without waiting for a scheduled appointment. If you experience sudden dental pain or an accident, call us or come directly to the clinic.",
  },
  {
    question: "Can I book a same-day emergency appointment?",
    answer: "Absolutely. Dental issues can't always wait. Milton Dental Clinic offers same-day emergency appointments to ensure you receive timely care and relief as quickly as possible.",
  },
  {
    question: "Do you provide wisdom tooth extractions?",
    answer: "Yes. If your wisdom teeth are causing pain, swelling, or discomfort, our experienced team provides gentle and effective extractions to protect your oral health and relieve pain before it worsens.",
  },
  {
    question: "What should I do if I have severe tooth pain?",
    answer: "Severe tooth pain can indicate cavities, infections, impacted teeth, or dental abscesses. Contact Milton Dental Clinic immediately. Our emergency dentist will assess the situation, provide immediate relief, and create a personalized treatment plan.",
  },
  {
    question: "What options are available if I have dental anxiety?",
    answer: "We understand that dental emergencies can be stressful. Milton Dental Clinic offers safe and effective sedation options to help you stay calm and comfortable during treatment.",
  },
  {
    question: "Will you provide after-care instructions?",
    answer: "Yes. After your emergency treatment, our team will give you detailed after-care instructions to ensure proper healing and maintain your oral health.",
  },
  {
    question: "Where is Milton Dental Clinic located?",
    answer: "We're conveniently located at 342 Bronte St. S Unit 1, Milton, ON. Our welcoming environment is designed to make every visit as stress-free as possible.",
  },
  {
    question: "How can I contact you for an emergency?",
    answer: "You can book online through our website or call us directly at (905) 876-4488. Our emergency dental team is ready to respond promptly and provide compassionate care when you need it most.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Emergency Dentistry", url: "/emergency" },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(emergencyFaqs)),
        }}
      />
      <EmergencyPageContent />
    </>
  );
}
