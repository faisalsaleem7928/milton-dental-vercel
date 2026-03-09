import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Education & Outreach | Community Dental Programs | Milton Dental Clinic",
  description: "Milton Dental Clinic's community education and outreach programs. Free dental screenings, school visits, and oral health workshops in Milton, Ontario.",
  keywords: ["dental education Milton", "community dental outreach", "oral health programs Milton"],
  alternates: { canonical: "https://www.miltondentalclinic.com/education" },
};

const programs = [
  {
    title: "Community Smiles Project",
    description:
      "Our flagship initiative dedicated to improving oral health awareness and access for everyone in the Milton community.",
    href: "/education/community-smiles",
    image: "/images/about/about-1.webp",
  },
  {
    title: "School Outreach Programs",
    description:
      "We visit local schools to teach children the importance of oral hygiene through fun, interactive sessions.",
    href: "/education/community-smiles",
    image: "/images/about/about-2.webp",
  },
  {
    title: "Community Workshops",
    description:
      "Free workshops on dental health topics, open to all community members seeking to improve their oral care knowledge.",
    href: "/education/community-smiles",
    image: "/images/services/preventive-care.webp",
  },
];

export default function EducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Education & Outreach", url: "/education" },
          ])),
        }}
      />
      <PageHero
        title="Education & Outreach"
        subtitle="Empowering our community through dental health education and accessible care"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] mb-6">
              Our Programs
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Milton Dental Clinic is committed to going beyond the chair. We
              actively engage with the Milton community through education,
              outreach, and initiatives that make dental care accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group block rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A2332] mb-2 group-hover:text-[#0075C9] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <span className="inline-block mt-4 text-[#0075C9] text-sm font-semibold">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
