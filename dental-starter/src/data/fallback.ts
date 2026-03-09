import type {
  Service,
  TeamMember,
  Testimonial,
  BlogPost,
  FAQ,
  InsuranceProvider,
} from "@/types";

export const fallbackServices: Service[] = [
  {
    id: "1",
    title: "General Dentistry",
    slug: "general-dentistry",
    excerpt:
      "Comprehensive dental care including cleanings, exams, fillings, and preventive treatments.",
    content: "",
    icon: "Stethoscope",
    image: "/images/services/general-dentistry.jpg",
    order: 1,
  },
  {
    id: "2",
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    excerpt:
      "Transform your smile with veneers, bonding, and smile makeover treatments.",
    content: "",
    icon: "Sparkles",
    image: "/images/services/cosmetic-dentistry.jpg",
    order: 2,
  },
  {
    id: "3",
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    excerpt:
      "Professional teeth whitening to brighten your smile safely and effectively.",
    content: "",
    icon: "Sun",
    image: "/images/services/teeth-whitening.jpg",
    order: 3,
  },
  {
    id: "4",
    title: "Dental Implants",
    slug: "dental-implants",
    excerpt:
      "Permanent tooth replacement solutions that look and feel like natural teeth.",
    content: "",
    icon: "Wrench",
    image: "/images/services/dental-implants.jpg",
    order: 4,
  },
  {
    id: "5",
    title: "Orthodontics & Invisalign",
    slug: "orthodontics-invisalign",
    excerpt:
      "Straighten your teeth with traditional braces or clear Invisalign aligners.",
    content: "",
    icon: "AlignCenter",
    image: "/images/services/orthodontics.jpg",
    order: 5,
  },
  {
    id: "6",
    title: "Emergency Dentistry",
    slug: "emergency-dentistry",
    excerpt:
      "Immediate care for dental emergencies including toothaches, broken teeth, and more.",
    content: "",
    icon: "AlertCircle",
    image: "/images/services/emergency-dentistry.jpg",
    order: 6,
  },
  {
    id: "7",
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    excerpt:
      "Gentle, child-friendly dental care to keep your little ones smiling.",
    content: "",
    icon: "Baby",
    image: "/images/services/pediatric-dentistry.jpg",
    order: 7,
  },
  {
    id: "8",
    title: "Root Canal Therapy",
    slug: "root-canal-therapy",
    excerpt:
      "Pain-free root canal treatment to save infected or damaged teeth.",
    content: "",
    icon: "Activity",
    image: "/images/services/root-canal.jpg",
    order: 8,
  },
  {
    id: "9",
    title: "Crowns & Bridges",
    slug: "crowns-bridges",
    excerpt:
      "Restore damaged or missing teeth with custom-crafted crowns and bridges.",
    content: "",
    icon: "Crown",
    image: "/images/services/crowns-bridges.jpg",
    order: 9,
  },
  {
    id: "10",
    title: "Periodontics",
    slug: "periodontics",
    excerpt:
      "Expert gum disease treatment and prevention for lasting oral health.",
    content: "",
    icon: "Shield",
    image: "/images/services/periodontics.jpg",
    order: 10,
  },
];

export const fallbackTeam: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Zoha Anjum",
    title: "DDS, MPH, G.Dip., HBSc - General Dentist",
    slug: "dr-zoha-anjum",
    bio: "Dr. Zoha earned her Doctor of Dental Surgery degree from the University of Toronto Faculty of Dentistry, following completion of her Master of Public Health at McMaster University and a Bachelor of Science from the University of Toronto.",
    image: "/images/about/dr-zoha.webp",
    specialties: ["General Dentistry", "Restorative Dentistry", "Prosthodontic Dentistry"],
    education: ["University of Toronto - DDS", "McMaster University - MPH"],
    order: 1,
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    patientName: "Sarah M.",
    rating: 5,
    text: "The best dental experience I've ever had. The staff is incredibly friendly and professional. Highly recommend Milton Dental Clinic!",
    service: "General Dentistry",
    date: "2024-01-15",
    source: "google",
  },
  {
    id: "2",
    patientName: "John D.",
    rating: 5,
    text: "Dr. Anjum and the team made my dental implant procedure comfortable and stress-free. Amazing results!",
    service: "Dental Implants",
    date: "2024-02-20",
    source: "google",
  },
  {
    id: "3",
    patientName: "Emily R.",
    rating: 5,
    text: "My kids love coming here! The pediatric dentistry team is patient, gentle, and makes every visit fun.",
    service: "Pediatric Dentistry",
    date: "2024-03-10",
    source: "google",
  },
];

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Tips for Maintaining a Healthy Smile",
    slug: "5-tips-healthy-smile",
    excerpt:
      "Discover simple daily habits that can help you maintain a bright, healthy smile for years to come.",
    content: "",
    featuredImage: "/images/blog/healthy-smile.jpg",
    date: "2024-03-01",
    categories: ["Oral Health"],
    author: "Dr. Anjum",
  },
  {
    id: "2",
    title: "Understanding Dental Implants: A Complete Guide",
    slug: "understanding-dental-implants",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
    content: "",
    featuredImage: "/images/blog/dental-implants.jpg",
    date: "2024-02-15",
    categories: ["Dental Implants"],
    author: "Dr. Anjum",
  },
  {
    id: "3",
    title: "When to Visit an Emergency Dentist",
    slug: "when-to-visit-emergency-dentist",
    excerpt:
      "Know the signs that require immediate dental attention and what to do before you reach the clinic.",
    content: "",
    featuredImage: "/images/blog/emergency-dentist.jpg",
    date: "2024-01-28",
    categories: ["Emergency Care"],
    author: "Dr. Anjum",
  },
];

export const fallbackFAQs: FAQ[] = [
  {
    question: "Do you accept my insurance?",
    answer:
      "We accept most major dental insurance plans. Please contact our office to verify your specific coverage.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive oral exam, digital X-rays, and a personalized treatment plan discussion with your dentist.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we offer same-day emergency dental appointments. Call us immediately at (905) 876-4488 if you have a dental emergency.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every 6 months for a regular cleaning and check-up. Some patients may need more frequent visits depending on their oral health.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment options to make dental care accessible. Ask our team about financing options during your visit.",
  },
];

export const fallbackInsuranceProviders: InsuranceProvider[] = [
  { name: "Sun Life", logo: "/images/insurance/sunlife.png" },
  { name: "Manulife", logo: "/images/insurance/manulife.png" },
  { name: "Great-West Life", logo: "/images/insurance/greatwest.png" },
  { name: "Blue Cross", logo: "/images/insurance/bluecross.png" },
  { name: "Desjardins", logo: "/images/insurance/desjardins.png" },
  { name: "Green Shield", logo: "/images/insurance/greenshield.png" },
];
