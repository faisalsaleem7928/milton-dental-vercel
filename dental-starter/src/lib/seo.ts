import { siteConfig } from "@/config/site";
import type { FAQ, BlogPost } from "@/types";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    image: `${siteConfig.domain}${siteConfig.ogImage}`,
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Debit, Insurance",
    currenciesAccepted: "CAD",
    hasMap: siteConfig.address.googleMapsUrl,
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dental Cleaning and Examination" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Teeth Whitening" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dental Implants" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Invisalign" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Root Canal Therapy" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dental Crowns and Bridges" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Emergency Dental Care" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Pediatric Dentistry" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Dental Fillings" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Tooth Extraction" } },
    ],
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.miltondentalclinic.com/#dentist",
    name: siteConfig.name,
    medicalSpecialty: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Emergency Dentistry",
      "Pediatric Dentistry",
      "Orthodontics",
      "Periodontics"
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Dental Cleaning and Examination" },
      { "@type": "MedicalProcedure", name: "Teeth Whitening" },
      { "@type": "MedicalProcedure", name: "Dental Implants" },
      { "@type": "MedicalProcedure", name: "Invisalign" },
      { "@type": "MedicalProcedure", name: "Root Canal Therapy" },
      { "@type": "MedicalProcedure", name: "Dental Crowns and Bridges" },
      { "@type": "MedicalProcedure", name: "Emergency Dental Care" },
      { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
    ],
    areaServed: [
      { "@type": "City", name: "Milton", containedInPlace: { "@type": "State", name: "Ontario" } },
      { "@type": "City", name: "Oakville" },
      { "@type": "City", name: "Burlington" },
      { "@type": "City", name: "Georgetown" },
      { "@type": "City", name: "Halton Hills" },
    ],
    hasMap: siteConfig.address.googleMapsUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5"
    }
  };
}

export function generateMedicalWebPageSchema(page: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    about: {
      "@type": "MedicalCondition",
      name: "Dental Health",
    },
    publisher: {
      "@type": "Organization",
      name: "Milton Dental Clinic",
      url: "https://www.miltondentalclinic.com",
    },
  };
}

export function generateDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Milton Dental Clinic",
    image: "https://www.miltondentalclinic.com/images/logo.png",
    url: "https://www.miltondentalclinic.com",
    telephone: "+19058764488",
    address: {
      "@type": "PostalAddress",
      streetAddress: "342 Bronte St. S Unit 1",
      addressLocality: "Milton",
      addressRegion: "ON",
      postalCode: "L9T 5B6",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5187,
      longitude: -79.8823,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
    },
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Debit, Insurance",
    areaServed: [
      { "@type": "City", name: "Milton", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
      { "@type": "City", name: "Halton Hills" },
      { "@type": "City", name: "Georgetown" },
      { "@type": "City", name: "Oakville" },
      { "@type": "City", name: "Burlington" },
      { "@type": "City", name: "Mississauga" },
    ],
    medicalSpecialty: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Emergency Dental Care",
      "Preventive Dentistry",
      "Restorative Dentistry",
      "Orthodontics",
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Dental Cleaning", procedureType: "Preventive" },
      { "@type": "MedicalProcedure", name: "Dental Fillings", procedureType: "Therapeutic" },
      { "@type": "MedicalProcedure", name: "Root Canal Treatment", procedureType: "Therapeutic" },
      { "@type": "MedicalProcedure", name: "Tooth Extraction", procedureType: "Surgical" },
      { "@type": "MedicalProcedure", name: "Dental Crowns", procedureType: "Therapeutic" },
      { "@type": "MedicalProcedure", name: "Dental Bridges", procedureType: "Therapeutic" },
      { "@type": "MedicalProcedure", name: "Invisalign", procedureType: "Therapeutic" },
      { "@type": "MedicalProcedure", name: "Teeth Whitening", procedureType: "Cosmetic" },
      { "@type": "MedicalProcedure", name: "Dental Implants", procedureType: "Surgical" },
      { "@type": "MedicalProcedure", name: "Emergency Dental Care", procedureType: "Therapeutic" },
    ],
  };
}

export function generatePersonSchema(doctor: { name: string; credentials: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: doctor.name,
    description: doctor.description,
    jobTitle: doctor.credentials,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
  };
}
