export const siteConfig = {
  // Business Info
  name: "Milton Dental Clinic",
  tagline: "Your Trusted Family Dentist in Milton",
  description:
    "Comprehensive dental care for the whole family in Milton, Ontario. General, cosmetic, and emergency dentistry services.",

  // Contact
  phone: "(905) 876-4488",
  email: "info@miltondentalclinic.com",
  whatsapp: "https://api.whatsapp.com/send?phone=4377774775",

  // Address
  address: {
    street: "342 Bronte St. S Unit 1",
    city: "Milton",
    state: "ON",
    zip: "L9T 5B6",
    country: "Canada",
    full: "342 Bronte St. S Unit 1, Milton, ON L9T 5B6",
    googleMapsUrl:
      "https://www.google.com/maps/dir//Milton+Dental+Clinic+-+Dr.+Anjum,+342+Bronte+St.+S+Unit+1,+Milton,+ON+L9T+5B6",
    lat: 43.5187,
    lng: -79.8823,
  },

  // Hours
  hours: [
    { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],

  // Social Media
  socials: {
    facebook: "https://www.facebook.com/people/Milton-Dental-Clinic/61561109057281/",
    instagram: "https://www.instagram.com/miltondentalclinic/",
    google: "https://www.google.com/maps/dir//Milton+Dental+Clinic+-+Dr.+Anjum,+342+Bronte+St.+S+Unit+1,+Milton,+ON+L9T+5B6",
    whatsapp: "https://api.whatsapp.com/send?phone=4377774775",
  },

  // Theme / Branding
  theme: {
    primaryColor: "#0075C9",
    secondaryColor: "#00A651",
    accentColor: "#F5A623",
    darkColor: "#1A2332",
    lightColor: "#F7F9FC",
    fontHeading: "Playfair Display",
    fontBody: "Inter",
  },

  // SEO
  domain: "https://www.miltondentalclinic.com",
  ogImage: "/images/og-default.jpg",

  // WordPress Connection
  wpUrl:
    process.env.NEXT_PUBLIC_WORDPRESS_URL ||
    "https://cms.miltondentalclinic.com",
  wpGraphqlUrl:
    process.env.WORDPRESS_GRAPHQL_URL ||
    "https://cms.miltondentalclinic.com/graphql",
};
