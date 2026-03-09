import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import BlogPostContent from "./BlogPostContent";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Milton Dental Clinic Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://www.miltondentalclinic.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.miltondentalclinic.com/blog/${slug}`,
      siteName: "Milton Dental Clinic",
      locale: "en_CA",
      type: "article",
      ...(post.image && { images: [{ url: post.image, width: 1200, height: 630, alt: post.title }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            ...(post.image && { image: `https://www.miltondentalclinic.com${post.image}` }),
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Dr. Zoha Anjum",
            },
            publisher: {
              "@type": "Organization",
              name: "Milton Dental Clinic",
              url: "https://www.miltondentalclinic.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.miltondentalclinic.com/images/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.miltondentalclinic.com/blog/${slug}`,
            },
          }),
        }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
