"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: MapPin, href: siteConfig.socials.google, label: "Directions" },
  { icon: MessageCircle, href: siteConfig.socials.whatsapp, label: "WhatsApp" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Emergency", href: "/emergency" },
  { label: "Education & Outreach", href: "/education" },
  { label: "For Patients", href: "/patients" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#111820]">
        {/* Top border accent */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-primary rounded-full border border-white/10 hover:border-primary transition-all duration-300"
              >
                <social.icon size={17} />
              </a>
            ))}
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-8">
            {footerLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                {i < footerLinks.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-white/8 mb-6" />

          {/* Copyright */}
          <p className="text-center text-xs text-gray-500">
            Copyright {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
