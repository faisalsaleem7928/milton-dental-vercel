import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateLocalBusinessSchema, generateServiceSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Milton Dental Clinic | Family Dentist in Milton, ON",
    template: `%s | ${siteConfig.name}`,
  },
  description: "Milton Dental Clinic, located at 342 Bronte St. S Unit 1, Milton ON, is a family dental practice led by Dr. Zoha Anjum offering preventive, restorative, cosmetic, and emergency dental care. Services include general dentistry, Invisalign, dental implants, teeth whitening, and more. Serving Milton, Halton Hills, Georgetown, and surrounding communities. Call (905) 876-4488.",
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    title: "Milton Dental Clinic | Your Trusted Family Dentist",
    description: "Comprehensive dental care for the whole family in Milton, Ontario.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Milton Dental Clinic" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milton Dental Clinic | Family Dentist in Milton, ON",
    description: "Comprehensive dental care for families in Milton, Ontario. Call (905) 876-4488.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Milton",
    "geo.position": "43.5187;-79.8823",
    "ICBM": "43.5187, -79.8823",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema()),
          }}
        />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Milton" />
        <meta name="geo.position" content="43.5187;-79.8823" />
        <meta name="ICBM" content="43.5187, -79.8823" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
