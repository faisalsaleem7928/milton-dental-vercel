"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems, socialLinks } from "./Header";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  const handleLinkClick = () => {
    setExpandedItem(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-hidden animate-[slideInRight_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          expandedItem === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedItem === item.label && (
                      <ul className="overflow-hidden">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={handleLinkClick}
                              className="block pl-8 pr-3 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-blue-50/50 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="border-t border-gray-100 px-5 py-5 space-y-4">
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 text-gray-500 hover:text-primary transition-colors rounded-full bg-gray-50 hover:bg-blue-50"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md shadow-blue-500/20"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
