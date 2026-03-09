import type { Metadata } from "next";
import PatientsPageContent from "./PatientsPageContent";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Patient Forms | New Patient Intake | Milton Dental Clinic",
  description: "Access Milton Dental Clinic patient forms online. Complete your new patient intake form and X-ray release form before your appointment for a smoother experience.",
  keywords: ["new patient forms Milton dentist", "dental intake form", "X-ray release form dental"],
  alternates: { canonical: "https://www.miltondentalclinic.com/patients" },
};

export default function PatientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Patient Forms", url: "/patients" },
          ])),
        }}
      />
      <PatientsPageContent />
    </>
  );
}
