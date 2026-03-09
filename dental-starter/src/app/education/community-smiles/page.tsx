import CommunitySmileContent from "./CommunitySmileContent";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Community Smiles Project | Milton Dental Clinic Outreach",
  description: "The Community Smiles Project brings oral health education and free dental screenings to the Milton community. Learn about our school programs and community workshops.",
  keywords: ["community smiles project Milton", "dental outreach Milton", "free dental screening Milton"],
  alternates: { canonical: "https://www.miltondentalclinic.com/education/community-smiles" },
};

export default function CommunitySmilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Education & Outreach", url: "/education" },
            { name: "Community Smiles", url: "/education/community-smiles" },
          ])),
        }}
      />
      <CommunitySmileContent />
    </>
  );
}
