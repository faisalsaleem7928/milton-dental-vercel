"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const posts = [
  "/images/instagram/post-1.webp",
  "/images/instagram/post-2.webp",
  "/images/instagram/post-3.webp",
  "/images/instagram/post-4.webp",
];

export default function InstagramFeed() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="instagram">
      <div ref={ref}>
        {/* Profile */}
        <div className="animate-on-scroll text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image
                src="/images/instagram/profile.webp"
                alt="Milton Dental Clinic Instagram profile"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="text-left">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-dark">
                @miltondentalclinic
              </h3>
              <p className="text-dark/60 text-sm">
                905.876.4488 | info@miltondentalclinic.com
              </p>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, i) => (
            <a
              key={post}
              href="https://www.instagram.com/miltondentalclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-scale-in delay-${i + 1} group relative aspect-square rounded-xl overflow-hidden`}
            >
              <Image
                src={post}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="animate-on-scroll delay-5 text-center mt-8">
          <a
            href="https://www.instagram.com/miltondentalclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-base"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
