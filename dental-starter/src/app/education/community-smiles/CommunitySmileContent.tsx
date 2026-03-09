"use client";

import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const teamMembers = [
  {
    name: "Dr. Zoha Anjum",
    credentials: "DDS, MPH, HBSc",
    role: "Researcher",
    bio: "Dr. Zoha received her dental degree from the University of Toronto and a Master of Public Health from McMaster University. Dr. Zoha founded The Community Smiles Project to combine her passion for dentistry and public oral health and ultimately equip the community to take care of their oral health. As a recipient of the Canadian Dental Association Leadership Award, Dr. Zoha has demonstrated exceptional leadership within the dental community. Some of her notable achievements include her role as the president of the Dental Students\u2019 Society, a researcher in global oral health and a mentor for pre-dental students. Dr. Zoha currently works at multiple practices in the GTA where she provides trauma-informed and culturally-sensitive patient care and oversees non-clinical matters at Milton Dental Clinic.",
    image: "/images/about/dr-zoha.webp",
  },
  {
    name: "Faheem Mosam",
    credentials: "PhD candidate, HBSc",
    role: "Impact Strategist",
    bio: "Faheem completed his diploma in marketing before beginning his time as a physicist. He holds an Honours BSc in Medical Physics with minors in mathematics and philosophy. He is currently completing his PhD in Complex Systems Physics. During his time as an undergraduate student, he spent an extensive amount of time volunteering at a variety of educational organizations such as Lets Talk Science, the Medical Physics Course Union, the Department of Physics, the Faculty of Science, the Ontario Science Centre, and more. Faheem is passionate about science, community and education, and has tutored hundreds of students in over 15+ years. His passion for education and science led him to launch The STEM Studio, a 1-1 tutoring service committed to providing affordable tutoring services to students to reduce barriers to education and ultimately increase minority representation in STEM.",
    image: null,
  },
  {
    name: "Javeria Ahmed",
    credentials: "HBSc",
    role: "Research Co-Lead",
    bio: "Javeria is a recent graduate from the Honours Life Science program at McMaster University. She aspires to pursue a career in dentistry, focusing on public oral health education. She was a VP researcher for the Healthy Smiles Club for 2 years at McMaster, researching and summarising oral health facts, accessible to the general audience. She previously also worked on a literature review published in the Oral Health Journal December 2023 issue, which focused on patient counselling regarding HPV-related head and neck cancers and interprofessional collaboration amongst dentists and other healthcare professionals. She currently works as a research assistant at the Juravinski Cancer Centre, where she is working on a project examining post-traumatic stress symptoms amongst patients post-allogenic stem cell transplant. Javeria is especially passionate about oral health education for the general audience. Through the project, she aims to help improve access to dental care education in all communities.",
    image: null,
  },
  {
    name: "Juwairiya Fatima Ahmad",
    credentials: "MPH, BMSc",
    role: "Research Co-Lead",
    bio: "Juwairiya Ahmad is a Master of Public Health graduate from McMaster University with a background in health sciences and research experience in culturally sensitive care, youth mental health, and health equity. She is passionate about bridging clinical care and upstream public health approaches to address systemic barriers to oral health. With a strong interest in prevention, health promotion, and community-engaged research, Juwairiya aims to advocate for inclusive, accessible dental care rooted in the social determinants of health. She is especially committed to improving oral health outcomes for underserved populations through policy, education, research, and interdisciplinary collaboration.",
    image: null,
  },
  {
    name: "Mehdi Abbas Zahiri",
    credentials: "MSc candidate, BSc",
    role: "Graphic Design Co-Lead",
    bio: "Mehdi Zahiri is a recent Life Sciences graduate and incoming MSc eHealth student at McMaster University. He aspires to become a researcher, educator, and clinician, driven by a passion for leveraging digital health, research, and policy to make healthcare more adaptive, equitable, and patient-centered. His experience includes conducting independent research at the Juravinski Cancer Centre to enhance precision and reduce health risks in radiation therapy, as well as authoring a manuscript promoting the replacement of BPA-containing dental adhesives with affordable, non-toxic bioadhesives, an innovation with potential in wound and limb repair. With a strong commitment to health equity, Mehdi hopes to use initiatives like the Oral Health Project to expand access to oral health education and empower underserved communities globally through education, innovation, and multidisciplinary collaboration.",
    image: null,
  },
  {
    name: "Alexia Athanasakos",
    credentials: "MMASc, BHSc(H)",
    role: "Social Media Strategist",
    bio: "Alexia is deeply passionate about advancing oral health equity through education and by reducing barriers to care. She recently earned her Master\u2019s in Global Health Systems from Western University, during which she traveled to Uganda to study how social determinants influence access to oral health care. The people she met and the stories she heard inspired her to explore oral health challenges both in Uganda and at home in Canada. Now a research coordinator at the Schulich School of Dentistry, Alexia has contributed to studies on barriers to care among people living with HIV in Southwestern Ontario, cannabis use and oral health among youth in the region, and the syndemic relationship between oral HPV, HIV, and other diseases.",
    image: null,
  },
  {
    name: "Fiza Aamir Butt",
    credentials: "HBSc",
    role: "Graphic Design Co-Lead",
    bio: "Fiza is an incoming fourth-year Biomedical Science student at Toronto Metropolitan University with aspirations of pursuing a career in dentistry, focusing on public oral health education. She is currently a Research Assistant at the Keenan Research Centre for Biomedical engineering at St. Michael\u2019s Hospital, where she investigates fetal pulmonary developmental disorders in pregnancy using tissue-engineered models. Fiza is especially passionate about oral health education for newcomer families and exploring the intersection between dental care and pregnancy. Through the Oral Health Project, she aims to help improve access to preventative dental care in underserved and equity-deserving communities and encourage more proactive approaches towards dental care for newcomer families in Canada.",
    image: null,
  },
  {
    name: "Muzna Mian",
    credentials: "HBSc",
    role: "Research Co-Lead",
    bio: "Muzna Mian is a recent graduate from the University of Toronto, where she majored in Human Biology: Global Health and minored in Immunology and Geographic Information Systems (GIS). She is passionate about global health and has contributed to research projects focused on food insecurity, emergency preparedness, and health-related issues using GIS tools. These experiences have deepened her understanding of the complexity and interconnectedness of public health challenges. Muzna has a particular interest in the intersection of global health and dental care, an area she believes is often overlooked in public health discussions. Her enthusiasm for this topic led her to join the Dental Project, where she hopes to explore the role of oral health in advancing health equity and contribute to efforts that promote more accessible dental care for all.",
    image: null,
  },
  {
    name: "Christina Grimo",
    credentials: "HBSc",
    role: "Knowledge Transition Lead",
    bio: "Christina completed her undergraduate degree in Medical Sciences and is currently completing a thesis-based master\u2019s in Applied Health Sciences, focusing on quality improvement in community hospital settings. Her research explores system-level strategies to improve sepsis care, aiming to reduce delays in diagnosis and treatment through data-driven interventions. She is passionate about public health and dentistry, and hopes to integrate QI principles into oral healthcare to promote more efficient, equitable care.",
    image: null,
  },
];

export default function CommunitySmileContent() {
  const visionRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const locationRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <PageHero
        title="The Community Smiles Project"
        subtitle="Oral health education and improving access to dental care"
      />

      {/* Our Vision */}
      <section ref={visionRef} className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-4xl">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] mb-6 leading-tight">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Oral health plays a significant role in our overall well-being, yet over 1 in 4 Canadians report tooth pain or avoid certain foods because of dental problems, with seniors, people without dental insurance, and those with disabilities being most affected. The first-ever Canadian Oral Health Survey (COHS), conducted from November 2023 to March 2024, showed how poor oral health can impact everyday life, including eating, working, or going to school, and provides important baseline data as Canada rolls out the new Canadian Dental Care Plan. At The Community Smiles Project, our group of dentists, public health professionals, and educators is passionate about oral health education and improving access to dental care in Toronto. We aim to equip our communities with knowledge and resources to care for their oral health through community outreach, oral health education, and oral disease prevention delivered in an accessible, culturally inclusive, and evidence-based way.
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section ref={projectsRef} className="bg-[#F7F9FC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] mb-12 leading-tight text-center">
            Current Projects
          </h2>

          <div className="space-y-16">
            {/* Research and Knowledge Translation */}
            <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/about/about-1.webp"
                    alt="Research and Knowledge Translation"
                    width={640}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A2332] mb-4">
                  Research and Knowledge Translation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Young professionals committed to improving access to oral health education through research and content creation.
                </p>
              </div>
            </div>

            {/* Community Outreach */}
            <div className="animate-on-scroll delay-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/about/about-2.webp"
                    alt="Community Outreach"
                    width={640}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A2332] mb-4">
                  Community Outreach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver oral health workshops at schools, community events, and cultural organizations. We welcome inquiries from community organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A2332] mb-12 leading-tight text-center">
            Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className={`animate-on-scroll delay-${Math.min(idx + 1, 3)} bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
              >
                {member.image ? (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="h-56 w-full bg-gradient-to-br from-[#0075C9]/10 to-[#0075C9]/5 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#0075C9]/30 font-[family-name:var(--font-heading)]">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A2332]">
                    {member.name}
                  </h3>
                  <p className="text-[#0075C9] text-sm font-medium">
                    {member.credentials} &mdash; {member.role}
                  </p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location note */}
      <section ref={locationRef} className="bg-[#F7F9FC] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="animate-on-scroll text-gray-600 leading-relaxed">
            Our office is located in Milton, but we serve the entire Greater Toronto Area. We welcome inquiries and opportunities from community organizations and leaders to collaborate and improve access to oral health education and dental services.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner variant="bottom" />
    </>
  );
}
