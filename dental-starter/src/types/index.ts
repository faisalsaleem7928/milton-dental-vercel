export interface Service {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  icon: string;
  image: string;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  slug: string;
  bio: string;
  image: string;
  specialties: string[];
  education: string[];
  order: number;
}

export interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  text: string;
  service?: string;
  date: string;
  source: "google" | "yelp" | "website";
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  categories: string[];
  author: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface InsuranceProvider {
  name: string;
  logo: string;
}

export interface HoursEntry {
  day: string;
  open: string;
  close: string;
}
