import type { Metadata } from "next";
import BlogPageContent from "./BlogPageContent";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dental Health Blog | Tips & Advice | Milton Dental Clinic",
  description: "Read expert dental health articles, oral care tips, and the latest news from Milton Dental Clinic. Written by Dr. Zoha Anjum and the Milton Dental Clinic team. Topics include preventive dentistry, oral health during pregnancy, and more.",
  keywords: ["dental health blog", "oral care tips Milton", "dental advice", "Milton dental clinic blog", "dental health articles Milton Ontario"],
  alternates: { canonical: "https://www.miltondentalclinic.com/blog" },
  openGraph: {
    title: "Dental Health Blog | Milton Dental Clinic",
    description: "Expert dental health articles and oral care tips from Milton Dental Clinic.",
    url: "https://www.miltondentalclinic.com/blog",
    siteName: "Milton Dental Clinic",
    locale: "en_CA",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ])),
        }}
      />
      <BlogPageContent />
    </>
  );
}
