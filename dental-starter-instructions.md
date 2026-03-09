# Dental Website Starter — Full Project Instructions

## Project Overview
Build a reusable Next.js dental website starter with headless WordPress as CMS. The goal is to spin up beautiful, fast, SEO-optimized dental office websites quickly using pre-built components and AI-generated content.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **CMS:** Headless WordPress (REST API + WPGraphQL plugin)
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Images:** Next/Image with WebP
- **Deployment:** Vercel
- **SEO:** next-sitemap, JSON-LD structured data
- **Animation:** Framer Motion (subtle, performant animations only)

---

## Step 1: Project Setup

```bash
npx create-next-app@latest dental-starter --typescript --tailwind --app --src-dir --eslint
cd dental-starter
npm install @apollo/client graphql lucide-react framer-motion react-hook-form next-sitemap
```

---

## Step 2: Project Structure

```
dental-starter/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, metadata
│   │   ├── page.tsx                # Homepage (assembles sections)
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx            # All services listing
│   │   │   └── [slug]/page.tsx     # Individual service page
│   │   ├── team/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/
│   │       └── contact/route.ts    # Form submission handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky header with nav + CTA button
│   │   │   ├── Footer.tsx          # Multi-column footer
│   │   │   ├── MobileMenu.tsx      # Slide-out mobile nav
│   │   │   └── TopBar.tsx          # Phone number + hours bar above header
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroBanner.tsx      # Full-width hero with heading, subtext, CTA, background image
│   │   │   ├── ServicesGrid.tsx    # Grid of service cards with icons
│   │   │   ├── AboutPreview.tsx    # Short about section with image + text
│   │   │   ├── TeamGrid.tsx        # Doctor/staff profile cards
│   │   │   ├── Testimonials.tsx    # Patient review carousel/grid
│   │   │   ├── CTABanner.tsx       # Call-to-action banner (book appointment)
│   │   │   ├── FAQ.tsx             # Accordion FAQ section
│   │   │   ├── WhyChooseUs.tsx     # Features/benefits grid
│   │   │   ├── BeforeAfter.tsx     # Before/after image comparison (cosmetic dentistry)
│   │   │   ├── InsuranceLogos.tsx  # Accepted insurance provider logos
│   │   │   ├── LocationMap.tsx     # Google Maps embed + address
│   │   │   └── BlogPreview.tsx     # Latest 3 blog posts
│   │   │
│   │   ├── forms/
│   │   │   ├── AppointmentForm.tsx # Book appointment form
│   │   │   └── ContactForm.tsx     # General contact form
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button (primary, secondary, outline variants)
│   │       ├── Card.tsx            # Reusable card wrapper
│   │       ├── SectionWrapper.tsx  # Consistent section padding/max-width
│   │       ├── Badge.tsx           # Small label badge
│   │       └── StarRating.tsx      # 5-star rating display
│   │
│   ├── lib/
│   │   ├── wordpress.ts           # WP GraphQL/REST API fetch functions
│   │   ├── queries.ts             # GraphQL queries for WP content
│   │   └── seo.ts                 # JSON-LD schema generators (LocalBusiness, Dentist, FAQPage)
│   │
│   ├── config/
│   │   └── site.ts                # Site-wide config (name, phone, address, hours, socials, colors)
│   │
│   └── types/
│       └── index.ts               # TypeScript types for all data models
│
├── public/
│   ├── images/                    # Default placeholder images
│   └── fonts/                     # Custom fonts if needed
│
├── tailwind.config.ts
├── next.config.ts
├── next-sitemap.config.js
└── .env.local
```

---

## Step 3: Site Configuration File

Create `src/config/site.ts` — this is what changes per client:

```typescript
export const siteConfig = {
  // Business Info
  name: "Smile Bright Dental",
  tagline: "Your Trusted Family Dentist",
  description: "Comprehensive dental care for the whole family in Austin, TX. General, cosmetic, and emergency dentistry.",

  // Contact
  phone: "(512) 555-0123",
  email: "info@smilebrightdental.com",

  // Address
  address: {
    street: "123 Main Street, Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78701",
    full: "123 Main Street, Suite 200, Austin, TX 78701",
    googleMapsUrl: "https://maps.google.com/...",
    lat: 30.2672,
    lng: -97.7431,
  },

  // Hours
  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "3:00 PM" },
    { day: "Saturday", open: "Closed", close: "Closed" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],

  // Social Media
  socials: {
    facebook: "https://facebook.com/smilebrightdental",
    instagram: "https://instagram.com/smilebrightdental",
    google: "https://g.page/smilebrightdental",
    yelp: "",
  },

  // Theme / Branding
  theme: {
    primaryColor: "#2563EB",       // Blue
    secondaryColor: "#10B981",     // Green
    accentColor: "#F59E0B",        // Amber
    darkColor: "#1E293B",          // Slate 800
    lightColor: "#F8FAFC",         // Slate 50
    fontHeading: "Playfair Display",
    fontBody: "Inter",
  },

  // SEO
  domain: "https://smilebrightdental.com",
  ogImage: "/images/og-default.jpg",

  // WordPress Connection
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://cms.smilebrightdental.com",
  wpGraphqlUrl: process.env.WORDPRESS_GRAPHQL_URL || "https://cms.smilebrightdental.com/graphql",
};
```

---

## Step 4: TypeScript Types

Create `src/types/index.ts`:

```typescript
export interface Service {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  icon: string;          // Lucide icon name
  image: string;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;         // "DDS", "DMD", "Hygienist"
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
  rating: number;        // 1-5
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
```

---

## Step 5: WordPress Setup (Headless)

### Required WordPress Plugins:
1. **WPGraphQL** — exposes GraphQL API
2. **Advanced Custom Fields (ACF)** — custom fields for services, team, etc.
3. **ACF to WPGraphQL** — exposes ACF fields to GraphQL
4. **WP REST Cache** — cache API responses

### Custom Post Types to Register (via functions.php or CPT plugin):
- `service` — Dental services (fields: icon, excerpt, order)
- `team_member` — Doctors/staff (fields: title, specialties, education, order)
- `testimonial` — Patient reviews (fields: rating, source, service)
- `faq` — FAQ items (fields: order)

### WordPress Config:
In `wp-config.php` or via plugin, add CORS headers allowing your Next.js domain.

### .env.local:
```
NEXT_PUBLIC_WORDPRESS_URL=https://cms.yourdomain.com
WORDPRESS_GRAPHQL_URL=https://cms.yourdomain.com/graphql
NEXT_REVALIDATE_SECRET=your-secret-for-on-demand-revalidation
```

---

## Step 6: WordPress Data Fetching

Create `src/lib/wordpress.ts`:

```typescript
// Fetch functions that call WP GraphQL
// Each function should handle errors gracefully and return typed data
// Use Next.js fetch with revalidation:
//   fetch(url, { next: { revalidate: 3600 } })  — revalidate every hour
//   OR use on-demand revalidation via webhook from WP

// Functions to implement:
// - getServices(): Promise<Service[]>
// - getServiceBySlug(slug: string): Promise<Service>
// - getTeamMembers(): Promise<TeamMember[]>
// - getTestimonials(): Promise<Testimonial[]>
// - getBlogPosts(limit?: number): Promise<BlogPost[]>
// - getBlogPostBySlug(slug: string): Promise<BlogPost>
// - getFAQs(): Promise<FAQ[]>
```

Create `src/lib/queries.ts`:

```typescript
// GraphQL query strings for each data type
// Example:
// export const GET_SERVICES = gql`
//   query GetServices {
//     services(where: { orderby: { field: MENU_ORDER, order: ASC } }) {
//       nodes {
//         id
//         title
//         slug
//         excerpt
//         content
//         serviceFields {
//           icon
//           order
//         }
//         featuredImage {
//           node {
//             sourceUrl
//             altText
//           }
//         }
//       }
//     }
//   }
// `;
```

---

## Step 7: SEO Implementation

Create `src/lib/seo.ts`:

```typescript
// Generate JSON-LD structured data for:

// 1. LocalBusiness + Dentist schema (every page)
// {
//   "@type": "Dentist",
//   "name": "...",
//   "address": {...},
//   "telephone": "...",
//   "openingHours": [...],
//   "geo": { "@type": "GeoCoordinates", ... },
//   "image": "...",
//   "priceRange": "$$",
//   "aggregateRating": {...}
// }

// 2. FAQPage schema (for FAQ sections)
// 3. Article schema (for blog posts)
// 4. BreadcrumbList schema (all inner pages)
// 5. Service schema (service pages)

// Each function returns a <script type="application/ld+json"> ready object
```

### Metadata per page:
Every page should export `generateMetadata()` with:
- Unique title: `"Service Name | Practice Name"`
- Description: 150-160 chars, include city name
- OpenGraph image
- Canonical URL

---

## Step 8: Component Design Specifications

### Design System Guidelines:
- **Rounded corners:** Use `rounded-2xl` on cards, `rounded-full` on buttons
- **Shadows:** Subtle shadows `shadow-sm` default, `shadow-lg` on hover
- **Spacing:** Generous whitespace. Sections use `py-16 md:py-24`
- **Colors:** Use theme colors from siteConfig. Primary for CTAs, secondary for accents
- **Typography:** Large headings (`text-4xl md:text-5xl`), readable body (`text-lg`, `leading-relaxed`)
- **Images:** All images use Next/Image with proper width/height/alt. Rounded corners.
- **Animations:** Subtle fade-in-up on scroll using Framer Motion. No flashy animations.
- **Mobile first:** Every component must be fully responsive
- **Accessibility:** Proper ARIA labels, focus states, semantic HTML

### Component Details:

#### Header.tsx
- Sticky on scroll with subtle background blur (`backdrop-blur-md`)
- Logo on left, navigation links center, "Book Appointment" CTA button right
- Nav links: Home, About, Services (dropdown), Team, Blog, Contact
- Services dropdown shows list of services on hover
- On mobile: hamburger menu triggers MobileMenu slide-out

#### TopBar.tsx
- Small bar above header
- Left: phone number (clickable tel: link) + email
- Right: office hours today + social media icons
- Hidden on mobile, or collapsed to just phone number

#### HeroBanner.tsx
- Full viewport width, 70-80vh height
- Background: large dental office/smile image with dark overlay
- Content: Large heading, subtext paragraph, two CTA buttons ("Book Appointment" primary, "Our Services" secondary)
- Subtle animation: content fades in on load
- Trust indicators below: "500+ Happy Patients" | "15+ Years Experience" | "5-Star Google Rating"

#### ServicesGrid.tsx
- Section heading: "Our Services" with subtext
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Each card: icon (from Lucide), title, short description, "Learn More" link
- Cards have hover effect (slight lift + shadow)
- Common dental services: General Dentistry, Cosmetic Dentistry, Teeth Whitening, Dental Implants, Orthodontics/Invisalign, Emergency Dentistry, Pediatric Dentistry, Root Canal, Crowns & Bridges, Periodontics

#### AboutPreview.tsx
- Two-column layout: image left, text right (stacks on mobile)
- Image of doctor or office (rounded corners)
- Heading, 2-3 paragraphs, bullet points of key differentiators
- "Meet Our Team" CTA button

#### TeamGrid.tsx
- Grid of doctor/staff cards
- Each card: professional photo, name, credentials (DDS/DMD), title, short bio
- Hover: subtle scale effect
- Click: links to detailed bio or expands

#### Testimonials.tsx
- Auto-scrolling carousel or grid layout
- Each testimonial: 5-star rating, quote text, patient name, service received
- Google/Yelp source badge
- Aggregate rating display: "4.9 / 5 from 200+ reviews"

#### CTABanner.tsx
- Full-width colored background (primary or secondary color)
- Large text: "Ready to Transform Your Smile?"
- Subtext + phone number + "Book Now" button
- Can optionally include a small form (name + phone + preferred date)

#### FAQ.tsx
- Accordion style — click question to expand answer
- Smooth height animation
- Schema markup for FAQPage
- Common dental FAQs: insurance, first visit, emergency, cost, etc.

#### WhyChooseUs.tsx
- 4-column grid of benefit cards (2 on mobile)
- Each: icon, title, description
- Examples: "Experienced Team", "Latest Technology", "Comfortable Environment", "Flexible Payment Plans", "Emergency Care", "Family Friendly"

#### AppointmentForm.tsx
- Fields: Full Name, Email, Phone, Service (dropdown), Preferred Date, Preferred Time, Message
- Validation with react-hook-form
- Success/error toast messages
- Submits to /api/contact route (which can email or send to CRM)

#### Footer.tsx
- 4-column layout:
  - Col 1: Logo + short description + social icons
  - Col 2: Quick Links (Home, About, Services, Team, Blog, Contact)
  - Col 3: Services list (all services linked)
  - Col 4: Contact info (address, phone, email, hours)
- Bottom bar: copyright + privacy policy + sitemap links
- Background: dark color from theme

---

## Step 9: Homepage Assembly

`src/app/page.tsx` should assemble sections in this order:

1. HeroBanner
2. ServicesGrid (top 6 services)
3. AboutPreview
4. WhyChooseUs
5. Testimonials
6. BeforeAfter (optional)
7. TeamGrid (featured doctors only)
8. CTABanner
9. FAQ (top 5 questions)
10. InsuranceLogos
11. BlogPreview (latest 3 posts)
12. LocationMap

---

## Step 10: Performance Requirements

- Lighthouse Performance score: 90+
- Lighthouse SEO score: 95+
- Lighthouse Accessibility score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Use `next/image` for ALL images
- Use `next/font` for Google Fonts (self-hosted)
- Lazy load below-fold sections
- Minimize client-side JavaScript — prefer Server Components

---

## Step 11: Static/Fallback Content

Until WordPress is connected, all components should work with hardcoded fallback data in `src/config/site.ts` or local JSON files. This allows developing and previewing the full site without a WordPress instance running.

Create `src/data/fallback.ts` with sample dental content for all sections.

---

## Step 12: Sitemap & Robots

`next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://smilebrightdental.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Set homepage priority to 1.0
    // Set service pages priority to 0.9
    // Set blog posts priority to 0.6
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
```

---

## Step 13: On-Demand Revalidation (WordPress → Next.js)

Create `src/app/api/revalidate/route.ts`:
- Accepts webhook POST from WordPress (when content is updated)
- Validates secret token
- Calls `revalidatePath()` or `revalidateTag()` to regenerate affected pages
- WordPress triggers this webhook via WP plugin (WPGraphQL Smart Cache or custom hook)

---

## Step 14: New Client Checklist

When creating a site for a new dental office:

1. [ ] Fork/clone the starter repo
2. [ ] Update `src/config/site.ts` with client info
3. [ ] Update `tailwind.config.ts` with brand colors
4. [ ] Set up WordPress instance with required plugins + CPTs
5. [ ] Add `.env.local` with WordPress URLs
6. [ ] Replace placeholder images with client photos
7. [ ] Customize homepage section order if needed
8. [ ] Add client-specific services content
9. [ ] Set up Google Analytics + Search Console
10. [ ] Deploy to Vercel, connect domain
11. [ ] Submit sitemap to Google
12. [ ] Test Lighthouse scores

---

## Build Priority Order

Build the project in this order:

1. **Project setup** — Next.js, Tailwind, fonts, config
2. **UI primitives** — Button, Card, SectionWrapper, Badge
3. **Layout** — Header, Footer, TopBar, MobileMenu
4. **Homepage sections** — HeroBanner → ServicesGrid → AboutPreview → WhyChooseUs → Testimonials → CTABanner → FAQ → TeamGrid → BlogPreview → LocationMap → InsuranceLogos
5. **Inner pages** — About, Services listing, Service detail, Team, Contact, Blog listing, Blog post
6. **Forms** — AppointmentForm, ContactForm, API route
7. **SEO** — JSON-LD schemas, metadata, sitemap
8. **WordPress integration** — GraphQL queries, data fetching, revalidation
9. **Fallback data** — Sample content for development without WP
10. **Polish** — Animations, hover states, loading states, error states
