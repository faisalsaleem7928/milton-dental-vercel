"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import type { BlogPost } from "@/data/blogPosts";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-2 my-4 ml-1">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0075C9]" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
    if (orderedItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="space-y-2 my-4 ml-1 list-decimal list-inside">
          {orderedItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      orderedItems = [];
    }
  }

  function formatInline(text: string) {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\u2014/g, "\u2014");
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={`h3-${i}`}
          className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A2332] mt-8 mb-3"
        >
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A2332] mt-10 mb-4"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
    } else if (/^\d+\.\s/.test(trimmed)) {
      orderedItems.push(trimmed.replace(/^\d+\.\s/, ""));
    } else {
      flushList();
      elements.push(
        <p
          key={`p-${i}`}
          className="my-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    }
  }
  flushList();
  return elements;
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const readTime = Math.max(3, Math.ceil(post.content.split(/\s+/).length / 200));
  const formattedDate = new Date(post.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1a2836]/80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#1a2836]" />
        )}

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-gray-600 text-base leading-relaxed">
            {renderMarkdown(post.content)}
          </div>

          {/* Author & Share */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                src="/images/about/dr-zoha.webp"
                alt="Dr. Zoha Anjum"
                width={56}
                height={56}
                className="rounded-full object-cover w-14 h-14"
              />
              <div>
                <p className="font-[family-name:var(--font-heading)] font-bold text-[#1A2332]">
                  Dr. Zoha Anjum
                </p>
                <p className="text-gray-500 text-sm">
                  DDS, MPH, G.Dip., HBSc &mdash; General Dentist
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0075C9] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <CTABanner variant="bottom" />
    </>
  );
}
