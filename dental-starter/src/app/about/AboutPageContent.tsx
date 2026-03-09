"use client";

import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Zoha Anjum",
    credentials: "DDS, MPH, G.Dip., HBSc",
    role: "General Dentist",
    image: "/images/about/dr-zoha.webp",
    bio: `Dr. Zoha earned her Doctor of Dental Surgery degree from the University of Toronto Faculty of Dentistry, following completion of her Master of Public Health at McMaster University and a Bachelor of Science from the University of Toronto. Her career has been guided by a strong belief that oral health education and ethical care are foundational to improving long-term health outcomes and access to care.

Clinically, Dr. Zoha's practice focuses on restorative and prosthodontic dentistry, with an emphasis on function, longevity, and patient comfort. She also provides comprehensive dental care, including preventive, surgical, and endodontic procedures. Her philosophy of care is grounded in integrity, transparency, and education with an ultimate goal of empowering patients to make informed decisions and supporting them in maintaining healthy, confident smiles for life.

As the founder of The Community Smiles Project, Dr. Zoha leads community-based initiatives focused on prevention, education, and empowerment. She is proud to be the first to introduce Brush-a-mania to the Milton community, bringing national oral health programming into local schools to help children and families build healthy lifelong habits. Her work bridges clinical dentistry with public health, ensuring education remains central to every patient interaction.

Dr. Zoha is an active member of the Milton Chamber of Commerce, Ontario Dental Association and the Academy of General Dentistry. She regularly participates in local events, including the annual Country Heritage Holiday Fair, where she connects with families to provide approachable, evidence-based oral health education. She has also held leadership roles throughout her training and continues to advocate for community-focused dentistry through outreach, mentorship, and public engagement.`,
    imagePosition: "left" as const,
    socials: [
      { icon: Instagram, href: "https://www.instagram.com/drzohaanjum/", label: "Instagram" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/zoha-anjum/", label: "LinkedIn" },
    ],
  },
  {
    name: "Dr. Sherief Mohamed",
    credentials: "",
    role: "General Dentist",
    image: "/images/about/dr-sherief.jpg",
    bio: `Dr. Sherief Mohamed is a general dentist with special interest in Oral surgery. He earned his dental degree from Modern Sciences and Arts University in Egypt in 2010. He has been practicing in Ontario since 2022 and has over 16 years of international and local clinical experience. Dr. Mohamed provides comprehensive dental care for patients of all ages. His philosophy emphasizes preventive dentistry, patient education, and the use of modern technology to achieve optimal oral health outcomes. Dr. Mohamed offers a wide range of services, including routine check-ups, fillings, crowns, bridges, implants, clear aligners \u2013 invisalign, and non-specialist root canal treatments. Patients reviews frequently highlight his \u201cpatient-focused\u201d approach and his ability to make individuals feel at ease, particularly those who experience dental anxiety. Parents have noted his gentle demeanor with children, while adult patients often mention his clear communication regarding treatment plans and costs. His dedication to ongoing education and modern techniques is also reflected in the high level of satisfaction reported by those receiving surgical treatments.`,
    imagePosition: "right" as const,
    socials: [],
  },
  {
    name: "Dr. Muhammad Yasin Anjum",
    credentials: "BDS",
    role: "Consulting Dentist and Owner",
    image: "/images/about/dr-yasin.webp",
    bio: `Dr. Yasin received his Bachelor of Dental Surgery from Liaquat Medical College at the University of Sindh and brings over 37 years of experience in dentistry. His career has been defined by service, resilience, and a lifelong commitment to improving access to oral health care. He spent the first 25 years of his career providing dental care in a rural region of Pakistan near his childhood home, serving communities with limited access to dental services.

After immigrating to Canada with his family in 2011, Dr. Yasin worked tirelessly to re-establish his profession, balancing multiple jobs while completing the requirements for Canadian licensure. In 2018, he returned to clinical practice, dedicating the next five years to serving underserved and remote communities, including Thunder Bay, Arborg, and Thompson, with a focus on emergency care and pain management.

In 2023, Dr. Yasin returned to the Greater Toronto Area to be closer to his family and to support the next chapter of the practice. He has since transitioned from clinical dentistry into a Founder and Advisor role, where he focuses on practice leadership, operations, and mentorship. Drawing on decades of hands-on experience, he plays an integral role in guiding the growth of the practice while upholding its values of integrity, service, and patient-centred care.

Today, Dr. Yasin is proud to support his daughter, Dr. Zoha, as the principal dentist, ensuring a thoughtful and values-driven transition of care. His role reflects a legacy of service, one that continues through leadership, guidance, and a shared commitment to the community, while allowing him to spend meaningful time with his family and invest in the long-term success of the practice.`,
    imagePosition: "left" as const,
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-yasin-anjum-0692b042/", label: "LinkedIn" },
    ],
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Expert Care",
    description:
      "Led by Dr. Anjum, our skilled, multicultural team brings over 35 years of combined experience, delivering evidence-based dental care with a gentle, patient-centered approach. We tailor every treatment to your unique needs, ensuring comfort and satisfaction for patients of all ages.",
  },
  {
    number: "02",
    title: "Comprehensive Services",
    description:
      "From oral health education and routine check-ups to advanced surgical procedures, we offer a full range of dental services in one convenient, family-run practice \u2014 so you can trust us with every stage of your smile\u2019s care.",
  },
  {
    number: "03",
    title: "Patient-Centered Approach",
    description:
      "Our diverse team proudly serves our community in English, Urdu, Punjabi, and Hindi, providing dental care that respects and understands your cultural needs and background.",
  },
];

export default function AboutPageContent() {
  const introRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const whyRef = useScrollAnimation();

  return (
    <main>
      {/* Page Hero */}
      <PageHero
        title="About Us"
        subtitle="Dedicated to providing exceptional dental care for you and your family in Milton, Ontario."
      />

      {/* About Us Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div ref={introRef} className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="animate-on-scroll text-dark/70 leading-relaxed text-base sm:text-lg">
            At the heart of our practice is a commitment to gentle, trauma-informed, and culturally sensitive dental care. We believe in practicing with integrity and honesty, ensuring that every patient feels respected and fully informed. We are dedicated to improving dental access for all, actively engaging with our community to promote oral health education and support. Above all, we focus on prevention, helping our patients maintain healthy smiles for life.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-20 md:py-28 bg-light overflow-hidden">
        <div ref={teamRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Meet the Team
            </h2>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className={`flex flex-col ${
                  member.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Photo */}
                <div
                  className={`${
                    member.imagePosition === "left" ? "animate-slide-left" : "animate-slide-right"
                  } shrink-0`}
                >
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 224px, 256px"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div
                  className={`${
                    member.imagePosition === "left" ? "animate-slide-right" : "animate-slide-left"
                  } text-center lg:text-left`}
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-dark">
                    {member.name}
                    {member.credentials && (
                      <span className="block text-base sm:text-lg font-normal text-primary mt-1">
                        {member.credentials}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-dark/50 mt-2 mb-4">
                    {member.role}
                  </p>
                  <div className="text-dark/70 leading-relaxed text-base sm:text-lg max-w-xl space-y-3">
                    {member.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  {member.socials.length > 0 && (
                    <div className="flex gap-3 mt-4 justify-center lg:justify-start">
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

      {/* Our Story Section */}
      <section id="story" className="py-20 md:py-28 bg-dark text-white overflow-hidden">
        <div ref={storyRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="animate-slide-left relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/clinic-story.webp"
                alt="Milton Dental Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="animate-slide-right">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-white/75 leading-relaxed text-base sm:text-lg">
                At Milton Dental Clinic, our story is rooted in family, service, and a deep belief in caring for people beyond their smiles. The clinic entered a new chapter in 2023 when Dr. Yasin took on ownership, carrying forward the legacy built by Dr. Radisic. Dentistry has always been more than a profession for Dr. Yasin. It has been a lifelong commitment to service, shaped by decades of caring for communities with limited access to oral health care. That commitment now lives on through his daughter, Dr. Zoha Anjum, who leads the clinic today as Director and principal dentist. Guided by the same values of integrity, education, and compassion, Dr. Zoha brings a modern, patient-centred approach while honouring the principles that shaped her father&apos;s career. While Dr. Yasin no longer practices clinically, he remains deeply involved as the founder and advisor, offering guidance, wisdom, and support behind the scenes. Together, this father-daughter team represents a meaningful generational transition, blending experience with modern perspective and shared purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-white">
        <div ref={whyRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`animate-on-scroll ${
                  index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3"
                } bg-light rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow text-center`}
              >
                <div className="flex justify-center mb-4">
                  <span className="text-4xl font-bold text-primary/30">{item.number}</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-dark/65 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner variant="bottom" />
    </main>
  );
}
