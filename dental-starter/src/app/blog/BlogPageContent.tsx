"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPageContent() {
  const gridRef = useScrollAnimation();

  return (
    <main>
      {/* Page Hero */}
      <PageHero title="Blogs" />

      {/* Blog Grid Section */}
      <section className="py-20 md:py-28 bg-[#1A2332]">
        <div ref={gridRef} className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.slug}
                className={`animate-on-scroll delay-${(index % 3) + 1} group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                {/* Card Image */}
                <div className="relative h-52 overflow-hidden">
                  {post.image ? (
                    <>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0075C9]/15 to-[#0075C9]/5 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#0075C9]/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold leading-snug mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-dark/60 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
