"use client";

import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { blogPosts } from "@/data/blogPosts";

const previewPosts = blogPosts.slice(0, 5);

export default function BlogPreview() {
  const ref = useScrollAnimation();

  return (
    <SectionWrapper id="blog">
      <div ref={ref}>
        <div className="text-center mb-12 md:mb-16 animate-blur-in">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-dark">
            Brush Up on Dental Health: Insights, Tips &amp; Tricks
          </h2>
          <span className="mt-4 mx-auto w-20 heading-line" />
        </div>

        <div className="stagger-children stagger-grid flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-x-visible md:pb-0 scrollbar-hide">
          {previewPosts.map((post, i) => (
            <div
              key={post.slug}
              className={`animate-on-scroll delay-${Math.min(i + 1, 5)} min-w-[260px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink`}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 260px, (max-width: 1024px) 33vw, 20vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0075C9]/15 to-[#0075C9]/5 flex items-center justify-center">
                      <svg className="w-12 h-12 text-[#0075C9]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm font-bold leading-snug line-clamp-3 drop-shadow-lg">
                      {post.title}
                    </h3>
                  </div>
                </div>
                {/* Read more strip */}
                <div className="bg-white px-4 py-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary">
                    Read More
                  </span>
                  <span className="text-primary text-sm">&rarr;</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
