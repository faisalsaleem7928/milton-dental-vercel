"use client";

import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Zoha Anjum",
    title: "DDS, MPH, G.Dip., HBSc",
    role: "General Dentist",
    image: "/images/about/dr-zoha.webp",
    bio: `Dr. Zoha earned her Doctor of Dental Surgery degree from the University of Toronto Faculty of Dentistry, following completion of her Master of Public Health at McMaster University and a Bachelor of Science from the University of Toronto. Her career has been guided by a strong belief that oral health education and ethical care are foundational to improving long-term health outcomes and access to care.

Clinically, Dr. Zoha's practice focuses on restorative and prosthodontic dentistry, with an emphasis on function, longevity, and patient comfort. She also provides comprehensive dental care, including preventive, surgical, and endodontic procedures. Her philosophy of care is grounded in integrity, transparency, and education with an ultimate goal of empowering patients to make informed decisions and supporting them in maintaining healthy, confident smiles for life.

As the founder of The Community Smiles Project, Dr. Zoha leads community-based initiatives focused on prevention, education, and empowerment. She is proud to be the first to introduce Brush-a-mania to the Milton community, bringing national oral health programming into local schools to help children and families build healthy lifelong habits.

Dr. Zoha is an active member of the Milton Chamber of Commerce, Ontario Dental Association and the Academy of General Dentistry. She regularly participates in local events, including the annual Country Heritage Holiday Fair, where she connects with families to provide approachable, evidence-based oral health education.`,
    memberships: [
      "Ontario Dental Association",
      "Academy of General Dentistry",
      "Milton Chamber of Commerce",
    ],
    socials: [
      { icon: Instagram, href: "https://www.instagram.com/drzohaanjum/", label: "Instagram" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/zoha-anjum/", label: "LinkedIn" },
    ],
  },
  {
    name: "Dr. Sherief Mohamed",
    title: "General Dentist",
    role: "General Dentist",
    image: "/images/about/dr-sherief.jpg",
    bio: `Dr. Sherief Mohamed is a general dentist with special interest in Oral surgery. He earned his dental degree from Modern Sciences and Arts University in Egypt in 2010. He has been practicing in Ontario since 2022 and has over 16 years of international and local clinical experience. Dr. Mohamed provides comprehensive dental care for patients of all ages.

His philosophy emphasizes preventive dentistry, patient education, and the use of modern technology to achieve optimal oral health outcomes. Dr. Mohamed offers a wide range of services, including routine check-ups, fillings, crowns, bridges, implants, clear aligners \u2013 invisalign, and non-specialist root canal treatments.

Patients reviews frequently highlight his \u201cpatient-focused\u201d approach and his ability to make individuals feel at ease, particularly those who experience dental anxiety. Parents have noted his gentle demeanor with children, while adult patients often mention his clear communication regarding treatment plans and costs.`,
    memberships: [],
    socials: [],
  },
  {
    name: "Dr. Muhammad Yasin Anjum",
    title: "BDS",
    role: "Consulting Dentist and Owner",
    image: "/images/about/dr-yasin.webp",
    bio: `Dr. Yasin received his Bachelor of Dental Surgery from Liaquat Medical College at the University of Sindh and brings over 37 years of experience in dentistry. His career has been defined by service, resilience, and a lifelong commitment to improving access to oral health care.

After immigrating to Canada with his family in 2011, Dr. Yasin worked tirelessly to re-establish his profession, balancing multiple jobs while completing the requirements for Canadian licensure. In 2018, he returned to clinical practice, dedicating the next five years to serving underserved and remote communities, including Thunder Bay, Arborg, and Thompson, with a focus on emergency care and pain management.

In 2023, Dr. Yasin returned to the Greater Toronto Area to be closer to his family and to support the next chapter of the practice. He has since transitioned from clinical dentistry into a Founder and Advisor role, where he focuses on practice leadership, operations, and mentorship.

Today, Dr. Yasin is proud to support his daughter, Dr. Zoha, as the principal dentist, ensuring a thoughtful and values-driven transition of care.`,
    memberships: [],
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-yasin-anjum-0692b042/", label: "LinkedIn" },
    ],
  },
];

export default function TeamPageContent() {
  const ref = useScrollAnimation();

  return (
    <main>
      <PageHero
        title="Our Team"
        subtitle="Meet the dedicated professionals behind your smile"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <div className="space-y-20">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`animate-on-scroll ${
                  i === 0 ? "delay-1" : i === 1 ? "delay-2" : "delay-3"
                } flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10`}
              >
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, 224px"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-dark">
                    {member.name}
                  </h2>
                  <p className="text-primary font-semibold mt-1">
                    {member.title}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-dark/50 mt-1 mb-4">
                    {member.role}
                  </p>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    {member.bio.split("\n\n").map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                  {member.memberships.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-dark mb-2">
                        Professional Memberships:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.memberships.map((m) => (
                          <span
                            key={m}
                            className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {member.socials.length > 0 && (
                    <div className="flex gap-3 mt-4 justify-center md:justify-start">
                      {member.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <social.icon size={18} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="bottom" />
    </main>
  );
}
